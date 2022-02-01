---
title: "Checkly review"
date: 2022-01-31T07:00:00+00:00
draft: false
summary:
  Checkly is a website monitoring tool built for developers. It can use
  Playwright and Puppeteer to monitor transaction workflows. Read our review of
  Checkly - a website monitoring tool.
metaDescription:
  Checkly is a website monitoring tool built for developers. It can use
  Playwright and Puppeteer to monitor transaction workflows. Read our review of
  Checkly - a website monitoring tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: website-monitoring
isSubpage: checkly
customStyle: false
pageType: vendor-review
customPageStyle: true
category: developer-tools
subcategory:
  label: Website monitoring
  name: website-monitoring
vendorName: Checkly
vendorURL: https://www.checklyhq.com/
thumbnail: /img/favicons/www.checklyhq.com.jpg
ranking:
  value: 3
  total: 7
scores:
  overall: 4.4
  features:
    - name: Check types & frequency
      value: 4.5
    - name: Check locations
      value: 4
    - name: Multi-step requests
      value: 5
    - name: Alerts
      value: 4
productShot:
  image: /img/website-monitoring/checkly.png
intro:
  "Checkly is a website monitoring tool built specifically for developers. It
  has a clean and easy to use UI, but has powerful scripting capabilities so
  test plans can be written using the Playwright and Puppeteer frameworks. We
  particularly like the integration with Terraform to define monitoring
  configuration as code."
relatedReviews:
  - name: New Relic
    thumbnail: /img/favicons/newrelic.com.png
    url: /website-monitoring/new-relic/
    category: developer-tools
  - name: Uptime.com
    thumbnail: /img/favicons/uptime.com.svg
    url: /website-monitoring/uptime.com/
    category: developer-tools
  - name: Datadog
    thumbnail: /img/favicons/www.datadoghq.com.png
    url: /website-monitoring/datadog/
    category: developer-tools
  - name: Uptrends
    thumbnail: /img/favicons/www.uptrends.com.jpg
    url: /website-monitoring/uptrends/
    category: developer-tools
  - name: Site24x7
    thumbnail: /img/favicons/www.site24x7.com.jpg
    url: /website-monitoring/site24x7/
    category: developer-tools
  - name: RapidSpike
    thumbnail: /img/favicons/www.rapidspike.com.png
    url: /website-monitoring/rapidspike/
    category: developer-tools
---

{{< nav-wrapper--open id="wrapper-0" anchor-name="cost" >}}

### Cost

50k API checks and 5k browser checks are free every month. The pay as you go
plan is priced at $1.20/10k API checks and $3.60/1k browser checks. Monthly and
annual plans are also available.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check types & frequency" score="4.5" >}}

Checkly can run HTTP API checks and supports JSON, GraphQL, form parameters or
raw data as the request body. Custom headers, query parameters and
authentication such as OAuth2, HMAC, Bearer tokens and AWS v4 signing can also
be configured by
[defining a setup script](https://checklyhq.com/docs/api-checks/setup-teardown-scripts/#setup-script-examples).
Browser tests can be performed using Playwright or Puppeteer scripts written in
Node.js or using the
[Headless Recorder](https://www.checklyhq.com/docs/headless-recorder/) web
extension for Chrome.

The default check frequency for API tests and browser tests is 5 and 10 minutes,
but it can be changed to run tests every 10 seconds and 1 minute respectively.
The minimum frequency for both API and browser tests is once every 24 hours.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check locations" score="4" >}}

Checkly supports 6 locations in the America region, 7 locations in the Asia
Pacific region, and 8 locations in the Europe, Middle East and Africa region.
All [21 locations](https://www.checklyhq.com/docs/monitoring/global-locations/)
are hosted on AWS and private check locations are not supported, which is a
major limitation compared to the alternatives.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Multi-step requests" score="5" >}}

Checkly’s open source headless recorder extension for Chrome can be used to
quickly compose a Playwright or Puppeteer script for running multi-step requests
via Node.js. The lack of a no-code editor to build tests, available in
alternatives like [Uptrends](/website-monitoring/uptrends/), highlights
Checkly’s developer focus - the user is presented with JavaScript code and is
expected to edit that directly. Being able to directly edit test scripts gives a
lot of freedom, such as adding setup/teardown scripts that allow adding custom
headers to requests and signing an HMAC request.

Checkly also supports adding environment variables, storing code snippets which
can be used again in other scripts, integrating with CI/CD tools, performance
and error tracking (network traces, console logs, screenshots for errors and
reports on web vitals).

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Alerts" score="4" >}}

Alerts are defined at the check level. After each request, the response is
processed and validated - response headers, time and body can be checked for
certain values and then marked as degraded or failed depending on assertions.
Tests can also be muted to not raise alerts and silently log failures.

Checkly can send alerts using email, SMS, Slack, Pagerduty, OpsGenie,
FireHydrant, Discord, Microsoft Teams, Splunk On-Call, GitLab Alerts, Spike.sh,
and custom Webhooks.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

Checkly is advertised as a website monitoring tool for developers, and
rightfully so - the primary way of creating multi-step checks is by writing
JavaScript which is executed by two well known open source browser scripting
engines - [Playwright](https://playwright.dev/) and
[Puppeteer](https://developers.google.com/web/tools/puppeteer). Tests can also
be recorded by using
[Headless Recorder](https://www.checklyhq.com/docs/headless-recorder/) (an open
source browser extension for Chrome).

The
[setup & teardown scripts](https://www.checklyhq.com/docs/api-checks/setup-teardown-scripts/)
functionality can be used to bundle repetitive steps together and even allows
setting up
[environment variables](https://www.checklyhq.com/docs/api-checks/variables/) -
global variables can be reused in all checks. Sensitive variables can be
locked - this encrypts them at rest and in transit. Fabricated data can be used
for automated testing by using the faker.js library.

Support for
[Monitoring as Code](https://www.checklyhq.com/guides/monitoring-as-code/)
allows storing monitoring configuration as code inside version control using
[Terraform](https://www.checklyhq.com/docs/integrations/terraform/). This
provides better scalability through faster provisioning and easier maintenance.
The monitoring setup can then be tracked and easily updated as part of
application development, which eases debugging and provides better transparency.
This is a unique feature that sets Checkly apart from other tools.

In addition to Terraform, checks can also be triggered from Heroku (either
through its GitHub Deployments integration or with Heroku CI) or Vercel (through
an integration from Vercel Marketplace). Integration with Vercel makes it
possible to trigger Checkly checks on every commit, see high-level check results
in the Vercel deployment screen, and block merges unless the tests pass.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/checkly-dashboard.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/checkly-dashboard.jpeg" alt="Screenshot of dashboard in Checkly." >}}
{{< a--close >}}

There are three ways to construct API tests - using the web editor, importing a
curl command or importing from a [Swagger](https://swagger.io/)/OpenAPI spec
(both JSON and YAML formats are supported). It is possible to specify whether
the test should fail (i.e. an error status code is the expected outcome), mark
services as degraded/failed based on a pre-defined threshold and run setup &
teardown scripts before or after checks. All API checks are capped with a 30
second timeout.

Checkly records network traces for requests (duration of socket initialization,
DNS lookup, TCP connection, HTTP server response and HTTP download), web vitals
(First Contentful Paint, Largest Contentful Paint, Cumulative Layout Shift,
Total Blocking Time, Time to First Byte) and console logs. Error Tracing helps
to identify critical JavaScript errors and missing resources like scripts or
images. Screenshots are captured when errors are detected which enables easy
debugging of detected problems.

All available statistics for a defined period can be exported to a file. The
generated CSV file includes check name, ID, type, success ratio, average
response time, response time (P95), response time (P99), and check tags. Users
can create status pages to display these metrics publicly.

Finally, everything can be managed through an API (with support for different
permissions) which makes it easy to build custom integrations and export data.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/checkly-browser-check.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/checkly-browser-check.jpeg" alt="Screenshot of browser tests in Checkly." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

Checkly does not support non-HTTP tests. Other tools like
[Datadog](/website-monitoring/datadog/) and [New
Relic](/website-monitoring/new-relic/) support additional protocols like FTP,
SSH, NTP, etc. - these are all missing in Checkly.

The customizations available for dashboards, which also serves as a public
status page, are limited. The logo, title and URL can be defined but what
information is displayed cannot be changed. No RSS feed is provided, which would
be useful for people to subscribe to status changes.
[StatusPage](https://www.atlassian.com/software/statuspage) can be integrated
with Checkly but it requires an additional subscription and adds more complexity
to the monitoring stack. If status pages are necessary for your use-case, other
tools like [Uptime.com](/website-monitoring/uptime.com/) and
[Site24x7](/website-monitoring/site24x7/) provide a better experience.

All tests in Checkly must be written in JavaScript. This is great for
developers, but means users must have a technical background to implement
checks. Only Node 12 and 14 are supported. It is not possible to import any
arbitrary NPM packages, only a handful of
[runtimes](https://www.checklyhq.com/docs/runtimes/specs/#npm-packages) are
supported, which puts restrictions on developers. For example, tests must use
[uuid](https://github.com/uuidjs/uuid) instead of
[Nano ID](https://github.com/ai/nanoid) even though they perform the same
function. This is where custom, private check agents would help, such as New
Relic's containerized private minion functionality which supports importing
custom modules in scripted browser tests.

Indeed, Checkly only supports 21 test locations - alternatives like Uptime and
Site24x7 support a much larger number of test locations as well as the ability
to run private agents within internal environments All of Checkly's test
locations are hosted on AWS, which means it is difficult to diversify network
traffic. All major cloud providers have suffered outages in the past - if your
website and testing infrastructure are both hosted by the same cloud provider
then the outage might go unnoticed.

Checkly uses a non-static set of IPv4 addresses in the cloud to run its checks,
this means whitelisting monitoring traffic by IP address is not possible.
Uptrends and Datadog both publish their IP ranges.

As Checkly was built for developers, it would benefit from supporting dark mode!
Another slight annoyance is that all time zones for maintenance windows are in
UTC - users have to do some mental maths if they live in a different time zone.
The headless recorder is also only available on the Chrome web store and the
recorded tests can only be run on Chrome.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/checkly-status-page.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/checkly-status-page.jpeg" alt="Screenshot of Checkly status page." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="website-monitoring/checky" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="website-monitoring/checky" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the
[best website monitoring tools for developers](/website-monitoring/), we
highlight the best 7 website monitoring tools for developers in {{< year >}}.
See how they compare to Checkly in the table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="website-monitoring/checky" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### Checkly alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
