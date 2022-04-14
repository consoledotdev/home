# Console Parse Tools JSON script
#
# Parses the raw JSON output from the
# https://github.com/marketplace/actions/gsheet-action GitHub action, then
# rewrites the JSON for Hugo to build the various pages with.

import argparse
import json
import os
from datetime import date
from urllib.parse import urlparse

import favicon
import requests
import tomli
from dateutil.parser import parse
from dateutil.relativedelta import TH, relativedelta

# Parse args
parser = argparse.ArgumentParser()
parser.add_argument(
    "--tools-json",
    help="Path to the file containing the raw"
    " interesting tools list as a JSON object",
    required=True,
)
parser.add_argument(
    "--beta-json",
    help="Path to the file containing the raw" " beta list as a JSON object",
    required=True,
)
parser.add_argument(
    "--ignore-date",
    help="Output every item in the JSON" " regardless of the date. Used for testing",
    type=bool,
    default=False,
    required=False,
)
args = parser.parse_args()


def process_item(item):
    """Process an individual item (tool or beta)

    Parameters:
    item (dict): The item for processing

    Returns:
    dict: The processed item ready for output.
    """

    print(f'Processing {item["URL"]}')

    # Set the icon path based on the URL
    url = urlparse(item["URL"])
    favicon_path = f"img/favicons/{url[1]}"

    # Check if there is already an icon at that path in priority order for
    # .png, .svg, .jpg, .ico
    if os.path.isfile("assets/" + favicon_path + ".png"):
        item["favicon"] = favicon_path + ".png"
    elif os.path.isfile("assets/" + favicon_path + ".svg"):
        item["favicon"] = favicon_path + ".svg"
    elif os.path.isfile("assets/" + favicon_path + ".jpg"):
        item["favicon"] = favicon_path + ".jpg"
    elif os.path.isfile("assets/" + favicon_path + ".ico"):
        item["favicon"] = favicon_path + ".ico"

    # If no icon exists, we need to download it
    if "favicon" not in item or not item["favicon"]:
        print(f"- No local favicon at {favicon_path}, attempting to download")

        try:
            icons = favicon.get(f"{url[0]}://{url[1]}")

            # Found some icons, so download the best (highest res)
            if icons:
                icon = icons[0]
                response = requests.get(icon.url, stream=True)
                item["favicon"] = f"{favicon_path}.{icon.format}"

                downloadPath = f'assets/{item["favicon"]}'

                print(f"- Downloading: {icon.url} to {downloadPath}")

                with open(downloadPath, "wb") as image:
                    for chunk in response.iter_content(1024):
                        image.write(chunk)

            else:
                item["favicon"] = False
                print("- No favicon found")

        except Exception as e:
            item["favicon"] = False
            print(f"- Error finding favicon: {e}")
            return None
    else:
        print(f'- Found {item["favicon"]}')

    # Split category by - to get the top and sub categories
    category_split = item["Category"].split(" - ")

    if "Reviewed" in item:  #  Tools have a "Reviewed" date
        item["Top Category"] = category_split[0]
        item["Sub Category"] = category_split[1]
    else:  # Betas only have 1 top level category
        item["Top Category"] = item["Category"]

        # Betas: Is this a weekly pick?
        if not item["Scheduled for"]:
            item["Weekly Pick"] = False
        else:
            item["Weekly Pick"] = True

    # Generate filtering taxonomy
    try:
        category = item["Top Category"].lower()
        category = category.replace(" ", "-")

        tool_type = item["Type"].lower()
        tool_type = tool_type.replace(" ", "-")

        # Aggregate filter taxonomy
        item["Filter Taxonomy"] = f"{category}, {tool_type}"

        if "Weekly Pick" in item and item["Weekly Pick"]:
            item["Filter Taxonomy"] += ", weekly-pick"

    except Exception as e:
        print(f"- Error generating filter taxonomy: {e}")

    return item


# Open the hugo config.toml to see if there is a hard coded date
with open("config/_default/config.toml", "rb") as f:
    toml_dict = tomli.load(f)

today = date.today()

# If there is a hard coded date, use that
if "forceNewsletterDate" in toml_dict["params"]:
    date_str = toml_dict["params"]["forceNewsletterDate"]
    last_thursday = parse(date_str)
else:
    # Get last Thursday
    last_thursday = today - relativedelta(weekday=TH(-1))

print(f"Parsing tools for date: {last_thursday}")

# Parse the tools JSON to get:
# - The latest tools for /latest/
# - All the tools that have been in a newsletter for /tools/
tools_all = {"items": []}
tools_latest = {"items": []}
with open(args.tools_json, "r") as f:
    tools = json.load(f)

    for tool in tools["results"][0]["result"]["formatted"]:
        # Skip if 'Company/Org' or 'Scheduled for' are not set
        if not tool["Company/Org"] or not tool["Scheduled for"]:
            continue

        # Parse 'Scheduled for' date
        scheduled_for = parse(tool["Scheduled for"])

        processed_tool = process_item(tool)

        # The latest tools for /latest/
        # i.e. 'Scheduled for' == last thursday
        if (
            args.ignore_date
            or scheduled_for.isocalendar() == last_thursday.isocalendar()
        ):

            if processed_tool:
                tools_latest["items"].append(processed_tool)

        # The tools that have been in a newsletter for /tools/
        if args.ignore_date or scheduled_for.isocalendar() <= today.isocalendar():

            if processed_tool:
                tools_all["items"].append(processed_tool)

print("Writing tools - latest JSON")
with open("data/toolslatest.json", "w") as outfile:
    json.dump(tools_latest, outfile)
print("Wrote tools - latest JSON")

print("Writing tools - all JSON")
with open("data/toolsreviewed.json", "w") as outfile:
    json.dump(tools_all, outfile)
print("Wrote tools - all JSON")

# Parse the betas JSON to get:
# - The latest betas for /latest/
# - All the live betas for /betas/
# - All the GA betas for /betas/
print("Parsing betas JSON...")

betas_latest = {"items": []}
betas_live = {"items": []}
betas_ga = {"items": []}

with open(args.beta_json, "r") as f:
    betas = json.load(f)

    # Loop through every item
    for beta in betas["results"][0]["result"]["formatted"]:
        # Skip if 'Company/Org' not set
        if not beta["Company/Org"]:
            continue

        # Exclude items that have not yet been reviewed
        if (
            "Meets our criteria?" not in beta
            or beta["Meets our criteria?"] == ""
            or beta["Meets our criteria?"] == "FALSE"
            or not beta["Meets our criteria?"]
        ):
            print("Does not meet criteria")
            continue

        # Parse 'Scheduled for' date
        if beta["Scheduled for"]:
            scheduled_for = parse(beta["Scheduled for"])

        processed_beta = process_item(beta)

        # The latest betas for /latest/
        # i.e. 'Scheduled for' == last thursday
        if args.ignore_date or (
            beta["Scheduled for"]
            and scheduled_for.isocalendar() == last_thursday.isocalendar()
        ):

            if processed_beta:
                betas_latest["items"].append(processed_beta)

        if processed_beta:
            # Split by live or GA
            if processed_beta["GA?"] == "TRUE":  # String as output by GSheets
                betas_ga["items"].append(processed_beta)
            else:
                betas_live["items"].append(processed_beta)

# Now write the files to the data directory ready for Hugo to build
print("Writing betas - latest JSON")
with open("data/betaslatest.json", "w") as outfile:
    json.dump(betas_latest, outfile)
print("Wrote betas - latest JSON")

print("Writing betas - live JSON")
with open("data/betaslive.json", "w") as outfile:
    json.dump(betas_live, outfile)
print("Wrote betas - live JSON")

print("Writing betas - GA JSON")
with open("data/betasga.json", "w") as outfile:
    json.dump(betas_ga, outfile)
print("Wrote betas - GA JSON")
print("Done")
