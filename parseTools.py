# Console Parse Tools JSON script
#
# Parses the raw JSON output from the
# https://github.com/marketplace/actions/gsheet-action GitHub action, then
# rewrites the JSON to only include the items we want to build for the current
# /latest/ page.

import argparse
import json
import os
from datetime import date
from urllib.parse import urlparse

import requests
import favicon
from dateutil.parser import parse
from dateutil.relativedelta import relativedelta, TH

# Parse args
parser = argparse.ArgumentParser()
parser.add_argument('--tools-json', help='Path to the file containing the'
                    ' interesting tools list as a JSON object', required=True)
parser.add_argument('--beta-json', help='Path to the file containing the beta'
                    ' list as a JSON object', required=True)
parser.add_argument('--ignore-date', help='Output every item in the JSON'
                    ' regardless of the date. Used for testing',
                    type=bool, default=False, required=False)
args = parser.parse_args()

print('Starting build')

# Get last Thursday
today = date.today()
last_thursday = today - relativedelta(weekday=TH(-1))

# Open and parse the JSON file to get the list of interesting tools.
# See example-tool-list.json for what this should look like.
# It will be generated as part of the build steps using the GitHub
# gsheet.action from the Interesting Tools Google Sheet (see README.md).
print('Parse tools JSON...')

interesting = {}
interesting['items'] = []

with open(args.tools_json, 'r') as f:
    tools = json.load(f)

    for tool in tools['results'][0]['result']['formatted']:
        if 'Company/Org' not in tool or tool['Company/Org'] == '':
            continue

        if tool['Scheduled for'] == "":
            continue

        scheduled_for = parse(tool['Scheduled for'])

        # Only pull out things scheduled for the last newsletter
        if args.ignore_date \
                or scheduled_for.isocalendar() == last_thursday.isocalendar():
            interesting['items'].append(tool)

    print('Parsed tools JSON')

print('Write tools - latest JSON')
with open('data/toolslatest.json', 'w') as outfile:
    json.dump(interesting, outfile)

print('Wrote tools - latest JSON')

# Same for the betas
print('Parsing betas JSON...')

programs_latest = {}
programs_latest['items'] = []
programs_live = {}
programs_live['items'] = []
programs_ga = {}
programs_ga['items'] = []

with open(args.beta_json, 'r') as f:
    betas = json.load(f)

    for program in betas['results'][0]['result']['formatted']:
        if 'Company/Org' not in program or program['Company/Org'] == '':
            print('Company/Org not found')
            print(program)
            continue

        if 'Meets our criteria?' not in program \
                or program['Meets our criteria?'] == '' \
                or program['Meets our criteria?'] == 'FALSE' \
                or not program['Meets our criteria?']:
            print('Does not meet criteria')
            print(program)
            continue

        # Separate programs scheduled for the latest newsletter
        if program['Scheduled for'] == '':
            program['Weekly Pick'] = False
        else:
            scheduled_for = parse(program['Scheduled for'])
            program['Weekly Pick'] = True

            # Only pull out things scheduled for the last newsletter
            if args.ignore_date \
               or scheduled_for.isocalendar() == last_thursday.isocalendar():
                programs_latest['items'].append(program)

        url = urlparse(program['URL'])
        faviconPath = 'img/favicons/{0}'.format(url[1])

        if os.path.isfile('static/' + faviconPath + '.png'):
            program['favicon'] = faviconPath + '.png'
        elif os.path.isfile('static/' + faviconPath + '.svg'):
            program['favicon'] = faviconPath + '.svg'
        elif os.path.isfile('static/' + faviconPath + '.jpg'):
            program['favicon'] = faviconPath + '.jpg'
        elif os.path.isfile('static/' + faviconPath + '.ico'):
            program['favicon'] = faviconPath + '.ico'
        else:
            print('Retrieving favicon for: {0}'.format(program['URL']))

            try:
                icons = favicon.get('{0}://{1}'.format(url[0], url[1]))

                if icons:
                    icon = icons[0]
                    response = requests.get(icon.url, stream=True)
                    program['favicon'] = 'static/{0}.{1}'.format(
                        faviconPath,
                        icon.format)

                    print('- Downloading: {0} to {1}'.format(
                        icon.url,
                        program['favicon']))

                    with open(program['favicon'], 'wb') as image:
                        for chunk in response.iter_content(1024):
                            image.write(chunk)

                else:
                    program['favicon'] = False
                    print('- No favicon found')

            except Exception as e:
                program['favicon'] = False
                print('- Error finding favicon: {0}'.format(e))
                continue

        try:
            # Transform format
            category = program['Category'].lower()
            category = category.replace(' ', '-')

            programType = program['Type'].lower()
            programType = programType.replace(' ', '-')

            # Aggregate filter categories
            program['Filter Categories'] = '{0}, {1}, {2}'.format(
                category,
                programType,
                program['Access'].lower()
            )

            if program['Weekly Pick']:
                program['Filter Categories'] += ', weekly-pick'

            if program['GA?'] == "TRUE":
                programs_ga['items'].append(program)
            else:
                programs_live['items'].append(program)
        except Exception as e:
            print('Error transforming format')
            print(e)
            print(program)

    print('Parsed betas JSON')

print('Writing betas - latest JSON')
with open('data/betaslatest.json', 'w') as outfile:
    json.dump(programs_latest, outfile)
print('Wrote betas - latest JSON')

print('Writing betas - live JSON')
with open('data/betaslive.json', 'w') as outfile:
    json.dump(programs_live, outfile)
print('Wrote betas - live JSON')

print('Writing betas - GA JSON')
with open('data/betasga.json', 'w') as outfile:
    json.dump(programs_ga, outfile)
print('Wrote betas - GA JSON')
print('Done')
