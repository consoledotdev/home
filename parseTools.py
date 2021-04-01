# Console Parse Tools JSON script
#
# Parses the raw JSON output from the
# https://github.com/marketplace/actions/gsheet-action GitHub action, then
# rewrites the JSON to only include the items we want to build for the current
# /latest/ page.

import argparse
import json
from datetime import date

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

programs = {}
programs['items'] = []

with open(args.beta_json, 'r') as f:
    betas = json.load(f)

    for program in betas['results'][0]['result']['formatted']:
        if program['Scheduled for'] == '':
            continue

        scheduled_for = parse(program['Scheduled for'])

        # Only pull out things scheduled for the last newsletter
        if args.ignore_date \
                or scheduled_for.isocalendar() == last_thursday.isocalendar():
            programs['items'].append(program)

    print('Parsed betas JSON')

print('Write betas - latest JSON')
with open('data/betaslatest.json', 'w') as outfile:
    json.dump(programs, outfile)

print('Wrote betas - latest JSON')
print('Done')
