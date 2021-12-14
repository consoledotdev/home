---
title: "The Best Website Monitoring Tools For Developers - Console"
titlePrefix: "The best"
titleCategory: "website monitoring"
titleSuffix: "tools for developers"
date: 2021-08-31T12:00:00+00:00
draft: false
summary:
  "The best website monitoring tools for developers: Datadog, Uptrends, Checkly,
  Site24x7. 13 website monitoring tools reviewed."
metaDescription:
  "The best website monitoring tools for developers: Datadog, Uptrends, Checkly,
  Site24x7. 13 website monitoring tools reviewed."
headerType: fixed
hideLines: true
hidePlanes: true
type: category-review
layout: category-review
isPage: website-monitoring
customStyle: true
pageType: category-review
customPageStyle: true
category: devops
subcategory: website-monitoring
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBioBrief:
  From 2009-2018 David was CEO at Server Density, a SaaS monitoring startup. He
  has been a developer for 15+ years and is now co-founder of Console.
authorBio:
  is co-founder of Console. From 2009-2018, David was CEO at Server Density, a
  SaaS monitoring startup used by hundreds of customers to collect billions of
  time series metrics. He is also a researcher in sustainable computing at
  Uptime Institute and affiliated with Imperial College London. David has been a
  developer for 15+ years.
aliases:
  - /tools/website-monitoring/
relatedCategories:
  - category: developer-tools
    subcategory:
      label: Browser testing
      name: browser-testing
  - category: devops
    subcategory:
      label: Server monitoring
      name: server-monitoring
---

The best website monitoring tools have multiple check types such as HTTP(S),
DNS, TCP and SMTP, configurable check frequency, check locations around the
world, the ability to build multi-step transaction monitoring tests (also known
as synthetic monitoring), and advanced alerting so you can be notified via
different channels when your website or API goes down.

We tested 13 website monitoring services using our [independent selection
criteria](/selection-criteria/). The best website monitoring tools for
developers and devops engineers in {{< year >}} are:

1. [Datadog](#datadog)
2. [Uptrends](#uptrends)
3. [Checkly](#checkly)
4. [Site24x7](#site24x7)
5. [New Relic](#newrelic)
6. [Uptime](#uptime)
7. [RapidSpike](#rapidspike)

In this article, we explain why. We assessed the key features all monitoring
tools should have from the perspective of an experienced developer or devops
engineer. This means focusing on sophisticated alerting, multiple check types
and the ability to execute checks frequently (every 5 minutes is too slow!).

We think that website monitoring products must include some form of transaction
monitoring, also called synthetic monitoring. This is because most websites and
applications include multi-step flows that are critical to the operation of the
service and they cannot be tested with just basic website monitoring. Synthetic
monitoring allows tests to simulate a real user clicking on items, filling out
forms and performing other steps in the flow.

We also reviewed product APIs and checked to see if the web UI has dark mode! As
a developer I would expect dark mode in all the tools I use, especially a
monitoring service I could potentially need to access when it alerts me in the
middle of the night! Some services even support configuration in Terraform.

{{< nav-wrapper--open id="wrapper-0" anchor-name="tldr" >}}

### tl;dr the best website monitoring tools

{{< category-review/tldr-list--open >}}
{{< category-review/miniature-card name="Datadog" thumbnail="/img/favicons/www.datadoghq.com.png" url="https://www.datadoghq.com/" anchor="datadog" score="4.6" >}}
{{< category-review/miniature-card name="Uptrends" thumbnail="/img/favicons/www.uptrends.com.jpg" url="https://www.uptrends.com/" anchor="uptrends" score="4.5" >}}
{{< category-review/miniature-card name="Checkly" thumbnail="/img/favicons/www.checklyhq.com.jpg" url="https://www.checklyhq.com/" anchor="checkly" score="4.4" >}}
{{< category-review/miniature-card name="Site24x7" thumbnail="/img/favicons/www.site24x7.com.jpg" url="https://www.site24x7.com/" anchor="site24x7" score="4.3" >}}
{{< category-review/miniature-card name="New Relic" thumbnail="/img/favicons/newrelic.com.png" url="https://newrelic.com/" anchor="newrelic" score="4.1" >}}
{{< category-review/miniature-card name="Uptime.com" thumbnail="/img/favicons/uptime.com.svg" url="https://uptime.com/" anchor="uptime" score="3.8" >}}
{{< category-review/miniature-card name="RapidSpike" thumbnail="/img/favicons/www.rapidspike.com.png" url="https://www.rapidspike.com/" anchor="rapidspike" score="3.8" >}}
{{< ul--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="requirements-above" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="requirements" >}} Requirements
{{</ rich-title-3 >}}

The four most important features every website monitoring tool must have are:
multiple check types & configurable check frequency, multiple check locations,
multi-step requests (transaction monitoring), and alerts. Other features are
useful to improve the product experience (like dark mode) and a good API, but
modern website monitoring tools in {{< year >}} must have these four.

For each of our website monitoring software reviews we will assess functionality
based on our [standard selection criteria](/selection-criteria/) plus these four
requirements:

{{< framed-section-item--open >}}

#### Multiple check types & configurable frequency

Website monitoring means executing checks on HTTP and HTTPS services running on
port 80 and 443. However, modern website monitoring products also execute checks
against other services running on different ports. This is what is meant by
“synthetic monitoring” - executing checks that replicate a request being made,
whether that is a user browsing a website or a request to some other endpoint
such as an API or database. This means all website monitoring services should
support multiple check types such as DNS, Mail, Ping (ICMP), TCP, and UDP.

Website monitoring that infrequently executes checks is useless. For example, if
a check only executes every 5 minutes, your service could be down for 4 minutes
59 seconds before it gets detected. However, more frequent checks usually mean a
higher cost because of the overhead required for the monitoring service to
execute those checks so often.

For most services, checking every minute is sufficient. This means you will be
aware of any downtime within a few minutes and balances the cost of monitoring.
For more critical services, checks every few seconds may be more appropriate.

{{< div--close >}}

{{< framed-section-item--open >}}

#### Multiple check locations

Your website might load quickly in London but be broken in New Zealand or
experiencing packet loss in Tokyo. This is because the internet is made up of
many different networks and users access services on different devices using
different carriers. This means it’s important to monitor from different
locations. You want to be able to configure which locations checks are executed
from because tests should run from regions that are representative of your
users. If all your users are in the United States, you want more options within
the US and can ignore testing elsewhere.

Some services support the ability to set up private test locations. This is
useful if you wish to execute tests from a region that is not supported, on
specific networks, or for services that are within your internal network.
Private location monitoring usually involves deploying a monitoring agent to
your own infrastructure which then appears as a new location.

{{< div--close >}}

{{< framed-section-item--open classes="flat-lists" >}}

#### Multi-step requests (transaction monitoring)

Website monitoring tends to be very simple - issue a single request and then
process the result. Synthetic monitoring is the simulation of a user session -
issuing requests so they replicate the steps that would happen if a real user
(or machine) were interacting with the service. This is also known as
transaction monitoring.

There are lots of website monitoring services but the ability to execute these
multi-step requests or transactions (synthetic monitors) is what sets apart the
best monitoring tools. We are assessing products from the perspective of
experienced software developers who will want these more advanced features.

This means we consider multi-step requests (transactions) to be a crucial part
of good website monitoring services in 2021. We will not review services that
don’t support it.

#### Alerts

Alerting is a crucial feature for all monitoring tools because you need to be
informed when something goes wrong. This means alerting functionality is broken
into two components:

- **Triggers:** For website monitoring, the trigger will be some type of failure
  condition. This could be a timeout, HTTP status code error or DNS resolution
  failure. However, it is also possible for a website to be fully responsive
  with an HTTP 200 status code but still be considered down - the ability to
  check the response headers and body is important so errors or incorrect
  responses can be detected.
- **Notifications:** When an alert has triggered, you need to be notified about
  it. This could be an email alert, but for critical checks you also want the
  option to be notified via more urgent channels such as SMS, phone, Slack, or
  through integration into incident management systems like PagerDuty or
  Opsgenie.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

### Best website monitoring tools

We reviewed 13 website monitoring tools. The best is: Datadog. We also liked
[Uptrends](#uptrends) and [Checkly](#checkly).

{{< nav-wrapper--open id="wrapper-2" anchor-name="datadog" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Datadog" anchor="datadog" thumbnail="/img/favicons/www.datadoghq.com.png" url="https://www.datadoghq.com/" score="4.6" >}}

Datadog has a powerful synthetic monitoring product with an advanced editor for
defining execution steps and detailed test reporting, screenshots and request
traces. It also has sophisticated alerting and incident management
functionality, especially if you’re using their other monitoring products.
However, it has a small number of check locations and can get expensive.

{{< img-center src="/img/website-monitoring/datadog.png" alt="Datadog product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="$5-18 per thousand test executions" >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check types & configurable frequency" score="5" >}}

Datadog supports monitoring HTTP, SSL, TCP, UDP, WebSocket, DNS and Ping (ICMP)
service types for single-step endpoint monitoring. Multi-step tests only support
HTTP endpoints because these are designed to be a series of linked HTTP
requests. Datadog also supports recording browser sessions and then
automatically simulating them to ensure that specific transaction flows are
continuously tested. Datadog synthetic monitoring configuration supports the
ability to define test frequency in seconds, minutes, hours and days with the
most frequent test option being every second. Billing is based on the number of
executions per month so can become very expensive for the more frequent test
options.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check locations" score="3.5" >}}

Datadog only supports 16 different locations, all but one of which match up with
Amazon Web Services regions. Datadog recently added a new location running
within Azure, which suggests they are now starting to expand their test provider
diversity. Having a test location outside of AWS is important because so many
services run on AWS, it is useful to have a completely independent test
location. Datadog also supports setting up private locations so you can run your
own test endpoint from within your private network, or in a location not
supported by the standard set.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multi-step requests (transaction monitoring)" score="5" >}}

Datadog supports multi-step transaction monitoring via 2 options - HTTP API
endpoints and browser tests.

The API test option allows you to chain HTTP requests that use the data from the
response of one request to another. This defaults to a 10 step limit but you can
request a higher quota. Variables can be extracted using JSON path or regex from
each step and then passed into the next step. Each step results in an execution
which is counted for billing purposes.

Browser testing is set up using a test recorder Chrome extension, with
assertions defined on each step to conduct tests e.g. for the presence of a page
element. The recording can execute actions like typing text or uploading files.
For browser testing, billing is based on a test run of up to 25 steps, so if you
defined a single test with 50 steps, it would be billed as 2 test executions.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Alerts" score="5" >}}

Alerting for Datadog Synthetic Monitoring is based around conditions set when
configuring the test. You can define how many retries and how often, as well as
a delay for notifications and how many test locations must fail before
triggering the alert. You can configure assertions for various test
characteristics, such as the HTTP status code, response time and response
headers or body. Notifications then get triggered through Datadog’s alerts
system. This supports notifying individuals or groups, prioritization of the
alert and custom alert text which can include graphs and other variables as
metadata. This is a powerful and flexible system which starts with easy options
but has advanced features for more sophisticated operations teams.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

Datadog’s Synthetic Monitoring product is one of the best because of the power
of its different check types. Whether you simply want to execute periodic checks
against an API endpoint or website, or if you want to record an advanced
multi-step browser session with on-page analysis and assertions, Datadog has you
covered.

A particularly useful feature is the ability to integrate the checks into your
CI/CD flow. Using the Datadog API, you can trigger test execution on-demand.
This is useful to protect against regressions as part of code changes so tests
can be executed once a deploy has completed. For more advanced protection,
Datadog also offers a CLI which allows the tests to become a blocking step.
Tests are defined in the Datadog UI but the CLI supports overrides so certain
parameters can be set based on the run environment. This means you can execute
tests against a staging environment and only promote it to production if the
tests pass.

Datadog’s powerful alerting functionality means the alert notifications can be
customized to include all the information needed to debug alerts quickly. As it
is part of the overall Datadog monitoring platform, it is designed to be used
with the other monitoring products. You can standardize all your monitoring
inside Datadog, including running incidents through their incident management
product. We covered the server monitoring features in
[our review of server monitoring tools](/server-monitoring/#datadog).

{{< div--close >}}

{{< category-review/card-dislike--open >}}

Datadog’s website monitoring is let down by the limited number of check
locations. Until recently, it relied only on AWS for check locations which is
not ideal because it is important to be able to execute checks from different
network operators. A new Azure-based location is now available but only in one
US location.

Another downside of Datadog is the pricing - it has a reputation for being
expensive because the website monitoring billing is based on the number of
executed checks. A check is executed for every selected location on the defined
frequency. It is therefore very easy to rack up a large bill due even when
executing a check every few minutes from just a handful of locations.

This means Datadog’s synthetic monitoring is not as suitable for smaller
environments or basic checks - other competitors will be cheaper - but if you
want all the advanced functionality, it is difficult to beat.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="uptrends" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Uptrends" anchor="uptrends" thumbnail="/img/favicons/www.uptrends.com.jpg" url="https://www.uptrends.com/" score="4.5" >}}

Uptrends is more expensive at the entry level to get access to uptime and
multi-step request monitoring, but it has features like support for running
tests using Chrome, Firefox and Internet Explorer, plus over 200 check
locations.

{{< img-center src="/img/website-monitoring/uptrends.png" alt="Uptrends product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="From $17.19/month for 10 monitors" >}}

Pricing increases based on features, access to monitoring locations, and number
of checks.

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check types & configurable frequency" score="4.5" >}}

Uptrends supports basic HTTP(S) check types as well as browser load testing
(Chrome, Firefox and Internet Explorer), transaction monitoring for websites
(Chrome only) and APIs, plus service checks for FTP, SFTP, DNS, SMTP, POP3,
IMAP, Microsoft SQL Server, MysQL and Ping (ICMP). These can be executed as
often as every minute or up to every 60 minutes.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check locations" score="5" >}}

[Uptrends has over 200 check locations](https://www.uptrends.com/checkpoints)
around the world. Sensible defaults are selected to cover major regions but
these can be customized to include cities in each region. Checks are executed in
round robin mode by default. If the check fails, the next check is scheduled to
confirm it. This can be switched to concurrent monitoring where checks are
executed simultaneously from up to 50 locations - this is charged extra and
means errors are detected faster.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multi-step requests (transaction monitoring)" score="4" >}}

Uptrends supports multi-step API monitoring and web browser transaction
monitoring. Transaction steps can be created in the web editor or using the
Chrome Recorder extension. Various properties can be set, such as the screen
resolution, authentication, user agent and even mobile device simulation.
Bandwidth throttling options allow real-world conditions to be simulated. Steps
are defined through various actions based on the page element CSS or XPath
selector, but the options are more limited compared to competitors.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Alerts" score="4.5" >}}

Uptrends supports user alerts via email, SMS and phone, as well as integrations
into systems like Microsoft Teams, Opsgenie, PagerDuty, ServiceNow, Slack and
others. Alert definitions are created on an account level and applied to one or
many checks based on thresholds for how long checks are in an error state. Three
levels of escalations can be defined which helps involve additional teams as an
incident gets worse. The error state is defined on the check itself based on
load time, expected response size, content matching and HTTP status. This is
flexible, but not as powerful as alert definitions in Datadog.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

Uptrends stands out for its large number of check locations, particularly with
the diverse options for city locations in each region. This is important for
more sophisticated monitoring because it can help pick up regional differences
which matter for certain types of sites such as media and entertainment.

Uptrends offers multiple check types and has a particularly powerful full page
monitoring product that allows for performance monitoring of pages in different
browsers. Although it doesn’t support Safari - an important platform on mobile -
it is one of the few website monitoring services to offer Internet Explorer and
Firefox as options.

The
["Full Page Check"](https://www.uptrends.com/support/kb/full-page-check/whats-new)
feature provides detailed monitoring of the structure of page, from Core Web
Vitals to W3C metrics. This provides a detailed waterfall-style breakdown of the
page performance. Unfortunately, this is only available when selecting Chrome as
the browser type.

We have been spoiled by the power of the alerting offered by Datadog, but
Uptrends offers most of the same options and has a large number of integrations.
These are important for larger teams where incident management is handled by
many people.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

The Uptrends UI (no dark mode!) seems to be halfway between the modern look of
its website (which matches the left menu in the product UI) and an older, legacy
design with some weird quirks (which is what the main UI looks like). This means
there are some inconsistencies and organizational challenges which can make the
UI confusing. For example, the menu includes Monitoring, Alerting and Dashboards
at the top but then has separate sections for Synthetics, with Transactions,
Browser, API and Uptime within that. Understanding this hierarchy is difficult.

Alerting has a good set of features but is split across multiple sections of the
product - integrations, definitions at an account level, and then the error
status of the checks on the check itself. This could benefit from better
organization and more options to configure what an “error” state is.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="checkly" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Checkly" anchor="checkly" thumbnail="/img/favicons/www.checklyhq.com.jpg" url="https://www.checklyhq.com/" score="4.4" >}}

It’s clear that Checkly has been built for developers because it has powerful
API monitoring and scripted browser transaction monitoring functionality. Being
able to use Node.js scripts through the Playwright and Puppeteer frameworks, all
defined in Terraform, is great for developers. However, it is missing some
features of competitors, such as more check types, private monitoring locations
and more flexible alerting.

{{< img-center src="/img/website-monitoring/checkly.png" alt="Checkly product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="50k checks per month free, then $1.20/1k checks" >}}

Free: 50k API checks/month + 5k browser checks/month. Paid: $1.20/10k check
runs + $3.60/1k browser check runs.

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check types & configurable frequency" score="4.5" >}}

Checkly only supports two types of check - HTTP API checks (JSON, GraphQL, Forms
or raw data), and scriptable browser checks by writing Node.js scripts in
[Playwright](https://github.com/microsoft/playwright) or
[Puppeteer](https://github.com/puppeteer/puppeteer) format or recording a
session using their recorder extension for Google Chrome. For example,
[`faker.js` can be included](https://blog.checklyhq.com/checkly-runtime-2021-10/)
to generate fake data for check scripts. This is by design because Checkly is
primarily built for API testing. The default check frequency is every 5 minutes
but this can be changed to execute API checks every 10 seconds or browser checks
every 60 seconds. Everything can be
[configured with Terraform](https://www.checklyhq.com/docs/integrations/terraform/).

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check locations" score="4" >}}

Checkly supports 21 check locations which match up to AWS regions. These are
available on all accounts. There is no support for private check locations.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multi-step requests (transaction monitoring)" score="5" >}}

The easy way to set up multi-step requests is to use
[Checkly’s open source headless recorder extension](https://www.checklyhq.com/docs/headless-recorder/)
for Google Chrome. This outputs a Node.js script in
[Playwright](https://github.com/microsoft/playwright) or
[Puppeteer](https://github.com/puppeteer/puppeteer) format, both of which are
supported for defining the steps to simulate. There is no “easy” web editor for
these steps. As the focus is on developers, there are a lot of extra features
such as setup/teardown scripts, CI/CD integration, support for stored code
snippets that can be imported into scripts, and environment variables. When
using Playwright scripts, Checkly collects performance and error tracking
details such as network traces, console logs, screenshots for errors and reports
on [Web Vitals](https://web.dev/vitals).

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Alerts" score="4" >}}

Alert conditions are based around assertions defined on a check level. These
validate request results such as the HTTP status code, headers, response time
and output of parsing the response itself e.g. checking if a JSON body has
particular keys and/or values. Checks can be configured to be marked as either
degraded or failed depending on these assertions and response times, which then
trigger alerts. Checkly supports notifications via email, Slack, webhooks,
PagerDuty, SMS, Opsgenie and others.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

Checkly claims to be built specifically for developers and this shows with its
clean, modern UI (but no dark mode!), well written and comprehensive docs, and a
focus on scriptability. The multi-step transaction scripting is powerful because
Checkly has built on top of two well known open source browser scripting
engines - [Playwright](https://github.com/microsoft/playwright) and
[Puppeteer](https://github.com/puppeteer/puppeteer) - then developed their own
browser extension to help quickly write the scripts.

The addition of features like teardown scripts, environment variables,
[support for data testing library `faker.js`](https://blog.checklyhq.com/checkly-runtime-2021-10/)
as well as the ability to import existing commands from cURL or OpenAPI/Swagger
specs adds to this feeling of “built for developers”. Being able to define all
configurations using Terraform is a bonus that developers will appreciate.

We particularly like the
[recent addition](https://blog.checklyhq.com/launching-performance-and-error-tracing-new-vercel-integration/)
of automatic performance metrics and error checking that is now available when
writing browser-based checks with Playwright.
[Web Vitals](https://web.dev/vitals) are important to monitor to ensure the best
user experience, and are tracked by Google for search ranking. This means
Checkly can now provide useful debugging information with console logs, network
request tracking, metrics for response times on Time to First Byte, Total
Blocking Time, First Contentful Paint and automated screenshot collection on
errors.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

The focus on some very developer-specific features, and how young the product
is, means that Checkly does not compare as well on features to some of the other
options. You can just test a website as if it were an API, but that is not what
the product assumes you’re doing. There is no support for non-HTTP checks. This
is starting to change as
[Checkly is releasing new web-specific monitoring features](https://blog.checklyhq.com/launching-performance-and-error-tracing-new-vercel-integration/),
such as the Web Vitals integration and console error log recording mentioned
above.

There is also no option for private check locations, which is a problem when all
the check regions are based in AWS because you cannot introduce provider/network
diversity. The limited number of locations exacerbates this.

Being able to define detailed assertions for each check type means defining what
counts as “down” is very flexible, but the alert management is more limited. For
now, it would be best to pipe the Checkly alerts into another notification /
incident management system.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="site24x7" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Site24x7" anchor="site24x7" thumbnail="/img/favicons/www.site24x7.com.jpg" url="https://www.site24x7.com/" score="4.3" >}}

Site24x7 has a lot of functionality and covers basic availability checks,
transaction monitoring as well as browser performance testing and step-by-step
API monitoring. However, it has a cramped UI as well as some unusual technical
implementation details for its private check locations (such as a graphical
installer for Linux systems).

{{< img-center src="/img/website-monitoring/site24x7.png" alt="Site24x7 product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="From $10/month for 10 website monitors, 1 synthetic monitor and 1 minute check frequency" >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check types & configurable frequency" score="5" >}}

Site24x7 supports basic website monitoring checks, transaction monitoring for
websites and APIs (REST and GraphQL) as well as other services like WebSockets,
DNS, Mail, TCP, UDP, POP, SMTP, FTP, NTP and even old SOAP Web Services. It can
also check for SSL certificate and domain expiry, website defacement and
blocklist checks. Checks can be executed as often as every minute or up to every
day. It is also possible to check every 30 sec if you subscribe to the
Enterprise plan.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check locations" score="4" >}}

Site24x7 has over 100 check locations which can be selected as pre-defined
groups e.g. Europe, North America, etc., or by selecting individual locations
from the list. There is an option to deploy private locations using the Site24x7
agent for Windows or Linux. The Linux version seems a bit strange because it has
a graphical installer and runs using a shell script rather than being installed
through an OS package and integrating into Systemd (or another init system). A
Docker version would be better. There is also an option to install an app onto
your mobile device to make it part of the monitoring network which would be
useful for checking particular cellular networks.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multi-step requests (transaction monitoring)" score="4.5" >}}

Transaction monitoring is available in Site24x7 either through using their
session recorder browser extension for Chrome, Firefox or Edge, or by importing
a Selenium script. REST APIs can also be tested by defining multiple steps.
These can use the response from a previous step as part of the next.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Alerts" score="4" >}}

Site24x7 allows you to define two states for alerts - trouble and down. These
are set based on parameters such as whether response strings or headers are
present/not present, allowed HTTP status codes, and timeouts. Thresholds can
also be set for whether the site content or response time has changed by a
certain percentage. This is helpful for discovering performance regressions and
unexpected website changes. Webhooks can be configured on a change in state and
notification channels include email, Slack, PagerDuty, JIRA, OpsGenie and
Zapier.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

Site24x7 has a comprehensive set of features that covers all aspects of website
and synthetic monitoring. It supports all types of checks, such as DNS, Mail and
arbitrary TCP/UDP ports. It also has options for extras such as blocklist
checking, domain/SSL certificate expiry, and
[network-level metrics](https://www.site24x7.com/community/obtain-visibility-across-the-internet-with-isp-latency-monitoring)
such as latency, jitter and network path analysis.

Although not quite as many as Uptrends, Site24x7 has a large number of check
locations around the world so you can generally find at least two different
locations in a country. Being able to pick specific towns and cities makes
monitoring more accurate.

Site24x7 also includes an interesting feature for checking sites on mobile
connectivity. Installing an app for Android or iPhone allows you to co-opt your
device into the monitoring network. This is useful to be able to monitor network
performance on real mobile devices.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

It seems that Site24x7 has developed its extensive functionality over a long
period of time, which means the web UI is very busy. There are lots of options
and text all over the UI. This means it is powerful, but not particularly easy
to use. One reason for this is that Site24x7 also supports APM, server, cloud,
network, and log monitoring. We’re only assessing website monitoring in this
review, but those features are all crammed into the same UI. There is also no
dark mode.

When you get into the more advanced features, such as deploying your own private
test locations, limitations in the technical approach of the product reveal
themselves. It is strange to deploy a test agent on Linux that has a graphical
installer rather than using OS packages. There is a link to a “silent” install
option in the web UI, but it was a 404.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="newrelic" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="New Relic" anchor="newrelic" thumbnail="/img/favicons/newrelic.com.png" url="https://newrelic.com/" score="4.1" >}}

New Relic Synthetic Monitoring has options to test APIs, script browser
interactions, check for broken links or just ping specific endpoints. It
includes a generous free package and you can set up private locations for no
extra cost, but it has limited alerting capabilities.

{{< img-center src="/img/website-monitoring/newrelic.png" alt="New Relic product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="100GB free then $0.25 GB/month" >}}

New Relic’s pricing is based on the total amount of data ingested per month.
This works well for log monitoring or tracing, but becomes difficult to
understand when applied to website monitoring. New Relic solves this by
indicating how many checks can be executed as part of your quota when
configuring a check. 100GB allows 100,000,000 checks, which works out to be a
very generous free quota.

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check types & configurable frequency" score="3.5" >}}

New Relic provides several products - availability checks using cURL to “ping” a
URL, SSL certificate expiration checks, broken link checks, page load
performance checks, scripted browser, scripted API, and a no-code option for
building a multi-step browser test. This is a good set of different options, but
checks can only execute on HTTP services - other check types such as ICMP or DNS
are not supported. All of these can be configured to execute as often as every
minute, or up to every day. The check frequency is pre-defined e.g. 1 min, 5
min, 10 min, 15 min - it does not support custom values.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check locations" score="4.5" >}}

New Relic supports 20 check locations. All of them match up with AWS regions but
it is unclear whether they are actually running on AWS. One major difference New
Relic has over competitors is that the private location support is included for
no extra cost. Checks generated using private locations count against the data
ingest quota, but there is no extra fee just for using them. Known as
[Containerized Private Minions](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/install-containerized-private-minions-cpms/),
they run in a Docker container and each one can support around 200 ping monitor
checks per minute. Using a private monitor also allows you to set up custom
environments for scripted browser tests, such as by
[installing custom NPM modules](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/import-nodejs-modules/)
to use in your test scripts.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multi-step requests (transaction monitoring)" score="5" >}}

New Relic has several options for creating multi-step requests. The most
advanced option is through scripted monitors which use
[Selenium WebDriverJS](https://www.selenium.dev/documentation/webdriver/) to
generate a virtualized Google Chrome browser. You write scripts using chained JS
requests which allow you to manipulate elements on the page, such as by clicking
a link or entering text into a box. Alternatively, New Relic has a web editor
that allows non-technical users to build the same type of tests without writing
code. It uses a graphical step-by-step builder that includes actions such as
navigate to URL, hover over elements and assertions for page titles or modals.
Finally, New Relic also supports multi-step HTTP requests which are useful for
chaining HTTP requests, such as for checking API responses.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Alerts" score="3.5" >}}

Website monitoring alerts in New Relic are separate from the check configuration
and are based on “policies” with metrics that trigger them. The default alerting
is based on whether a check is considered to be failing or not, which is a
binary state and so not very flexible. To get more advanced alerts, such as
based on response times or specific results, New Relic uses its own SQL-like
query language called NRQL to make all metrics generically queryable throughout
the UI. This is used for features like graphs and dashboards but is also part of
the alerting functionality. This ends up being powerful but requires more time
and effort to figure out the right query for the metrics you want to alert on.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

New Relic’s data volume approach to billing means you can configure many
sophisticated synthetic checks across multiple locations and have them executing
with a high frequency all part of the free package. This also means that private
check locations are considered no different from the managed options, which
makes New Relic particularly attractive if you need to test from different
regions or from within your own network.

The ability to create scripts using the open source Selenium WebDriverJS means
you are not locked into a proprietary test format, and you can take advantage of
the extensive ecosystem around Selenium. If you need custom modules, you can
install them into a test environment and run your own private monitoring
location.

Although this review is written from the perspective of developers, the
inclusion of a web editor to build checks without scripting is a nice feature.
It saves developers time building tests for other teams, but also means you can
quickly create simple tests without need to spend ages coding in the JS script
format.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

As we found in [our server monitoring review](/server-monitoring/#new-relic),
New Relic continues to be let down by its alerting functionality. It is not as
flexible as competitors even though it has a lot of potential by being backed by
its custom query language.

Check configuration is also missing some of the advanced features of tools like
Datadog, where test assertions on properties like response time, HTTP status
code or the response body are built into the test configuration. It is possible
to test for these using a combination of NRQL and/or within scripts, but this
requires extra time and effort.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="uptime" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Uptime.com" anchor="uptime" thumbnail="/img/favicons/uptime.com.svg" url="https://uptime.com/" score="3.8" >}}

Uptime.com (previously known as Uptime) supports multiple check types and allows
you to build multi-step transaction monitoring using XPath or JSON selectors.
However, it is let down by limited alerting options and fewer check locations
than competitors, which are also limited by the pricing plan you choose.

{{< img-center src="/img/website-monitoring/uptime.png" alt="Uptime product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="$16-$299/month depending on features and check quota" >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check types & configurable frequency" score="5" >}}

Uptime.com includes multiple check types that allow you to monitor HTTP, DNS,
NTP, SSH, Ping (ICMP), TCP, UDP, IMAP, POP, SMTP endpoints, Whois/domain
results, scan websites for malware and viruses, check for SSL certificate expiry
and execute multi-step API/transaction monitors. Check frequency defaults to an
interval of every 5 minutes, but can be configured down to every minute or up to
every hour.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check locations" score="3" >}}

Check locations are available depending on which plan you subscribe to. The
cheapest option only allows for checks within the US, with Europe and Worldwide
becoming available on the higher plans. There are multiple locations available
in the US and Europe, but limited check locations elsewhere (particularly in
Asia). You can pick the specific countries you want the checks to run from and
the list of servers provides details about their IPv4 and IPv6 address and which
provider the probe servers are located in. This is broken out by data center
e.g. Interxion, Equinix, Digital Realty. Private check locations are also
available as an add-on for an extra fee which then involves installing an agent
that runs within a Docker container.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multi-step requests (transaction monitoring)" score="4" >}}

Uptime.com supports both multi-step HTTP API requests and transaction
monitoring. API checks are built using an in-app editor which presents basic
options such as GET URL and matching responses based on XPath or JSON selector
values. Transaction monitoring uses a similar approach but also supports
recording a session using a Chrome extension. This offers more flexibility to
perform actions like hovering on elements and completing forms.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Alerts" score="3" >}}

Alert conditions are configured as part of each check. You define conditions
such as strings to expect, SSL validations and response time targets. Uptime.com
can integrate into third-party services like Datadog, PagerDuty and OpsGenie and
also has mobile apps for iOS and Android which can receive push notification
alerts. Alerts can be sent out via different channels such as email, phone, SMS
and any of the configured integrations. Although the basic functionality exists,
it is somewhat inflexible due to being configured on a check level. Managing a
large number of checks and their alerts would be tedious.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

The initial setup process probes your DNS records to try and auto detect
recommended checks. This helps to demonstrate the functionality of the product
because it automatically configures spam blocklist, domain expiry, SSL
certificate, virus & malware and HTTPS checks. The Uptime.com UI is
straightforward and it is easy to understand the status of all your checks at a
glance.

The inclusion of different check types like Whois/domain results and malware
scanning is a useful addition to standard website monitoring options. These are
the types of checks that are often forgotten, but are as important as ensuring
your services stay online.

For simple website monitoring, Uptime.com does a good job. It is not too
expensive and includes key features you’d need for a basic website. The
transaction monitoring is also simple to use but still includes functionality
that would be sufficient for most websites.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

Uptime.com will do the job for most website monitoring, but it lacks more
advanced features that developers would appreciate. For example, alerting is
limited to simple up/down status and the options for defining what is considered
“down” are relatively simple. Further, the check locations are mostly focused on
the US and Europe with limited coverage elsewhere.

The UI does not support dark mode and although there is an API with an OpenAPI
schema, it is limited to 500 queries per hour and 60 queries per minute which
you could easily exceed once you have a large server environment.

Check reporting is also limited - there is a simple response time graph by
location but there is no resource component breakdown and no per check run
analysis. This is often useful for debugging check errors or performance issues
so you can see which parts of a request are causing the problem, but is lacking
in Uptime.com.

Also, changing your name from Uptime to Uptime.com seems weird - maybe if this
was the dot-com era of the early-2000s but it is a strange choice in 2021.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="rapidspike" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="RapidSpike" anchor="rapidspike" thumbnail="/img/favicons/www.rapidspike.com.png" url="https://www.rapidspike.com/" score="3.8" >}}

RapidSpike takes an innovative approach to domain, page and transaction
monitoring with automatic insights about domain expiry, page accessibility, and
performance. Although multi-step requests can be scripted in JSON, the focus on
HTTP(S) website monitoring means it is more suited to non-technical users than
developers.

{{< img-center src="/img/website-monitoring/rapidspike.png" alt="RapidSpike product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="From $39/month (1 domain + 2 pages + 1 transaction monitor)" >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check types & configurable frequency" score="3.5" >}}

RapidSpike is primarily a website monitoring service, which means it mainly
supports HTTP(S) checks against a URL, including sub-pages and multi-step
requests. However, it also supports Ping checks against IP addresses (or
domains) which it refers to as server monitoring. These can include port scans
where it will detect and scan open ports. It is not possible to configure which
ports it scans for. Check frequency is configurable, down to every 1 minute or
as infrequently as every 60 minutes.

As part of the website monitoring, RapidSpike includes multiple “Insights”
checks. These range from domain expiry and SSL certificate validation to SSL
Cipher grading, security header analysis, virus/malware, domain authority and
Alexa Traffic Rank. These are useful to give an overall picture of the website
health but are more of a bonus than the kind of functionality developers might
normally be looking for in a monitoring service.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multiple check locations" score="3" >}}

RapidSpike executes monitoring requests from 11 regions for the basic uptime
monitoring checks. These are not configurable for the top level site but when
you configure site pages for separate monitoring, you can choose the location.
If you set up multi-step testing and performance testing, the location can also
be changed. RapidSpike does not support private test locations.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Multi-step requests (transaction monitoring)" score="4.5" >}}

RapidSpike supports multi-step transaction monitoring for HTTP(S) websites
through its “User Journey” functionality. These are defined through a web-based
script editor that allows you to set actions such as click, wait for element,
and you can define assertions based on HTML selectors.
[The system represents everything in JSON](https://docs.rapidspike.com/journey-scripting/tutorials/getting-started.html)
behind the scenes, which you can get access to and edit directly. These scripts
are run using Selenium in Google Chrome and can be analyzed in video or
screenshots. A [HAR](<https://en.wikipedia.org/wiki/HAR_(file_format)>) file
plus statistics around page load time and performance are also generated for
each execution.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Alerts" score="3" >}}

RapidSpike supports sending alerts via multiple channels including email, SMS,
phone, WhatsApp, Slack, PagerDuty, Zendesk and Webhooks. Rules are defined
globally and/or on the check itself based on how long a monitor should be in a
“failing” state before they trigger. It is possible to set up separate alerts on
the “Insights”, such as domain expiry or virus/malware detection, but there is
no ability to change what is considered “failing” for the basic uptime checks
(it can be configured on “pages” within a site). Multi-step check types can be
set to alert based on transaction response time, element conditions (such as
missing string, load time, etc) and whether steps are failing or not.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

RapidSpike provides a unique approach to website monitoring by introducing a
hierarchy into how it executes checks. You first define your website as a top
level domain so that basic uptime checks can be performed. RapidSpike sets up
automated “Insights” against this domain, such as SSL certificate validation,
domain expiry checks and SEO related metrics such as domain authority and Alexa
Rank.

Then, individual site pages are configured for those pages that are most
important. These tests can be executed from different locations and offer more
insight into page load time, Google Lighthouse Score, accessibility and other
general web best practices. These are all useful to monitor, so it is good to be
able to access everything within a single website monitoring product.

Multi-step transaction monitoring in RapidSpike is easy to set up by
non-technical users but developers will appreciate the ability to edit the JSON
that defines each step. Providing screenshots and videos of test results makes
it easy to debug any problems. These tests are very configurable and alerts can
be set up for various conditions.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

RapidSpike’s unique approach to configuring the check hierarchy means it has a
higher learning curve if you are used to other tools. The UI can be confusing
and it does not support dark mode.

The number of check locations is limited and the lack of private test locations
means new locations cannot be added by customers and private networks are out of
reach unless you allow the list of check IP addresses. Non-HTTP checks are also
generally not supported, even though they can be detected through the port
scanning feature. It is not a good idea to rely on this though because those
services would need to be available publicly, or at least to the set of IPs used
by RapidSpike.

All this means that whilst RapidSpike has some powerful features, particularly
with the additional insights it can offer, it may be more appropriate for less
technical users.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-9" anchor-name="also-considered" >}}

#### Also considered

We also tested the following 6 tools but they did not meet our criteria:

{{< nav-wrapper--open anchor-name="alertra" >}}

{{< category-review/card-heading name="Alertra" anchor="alertra" thumbnail="/img/favicons/www.alertra.com.jpg" url="https://www.alertra.com" score="none" >}}

Alertra has support for monitoring all major check types such as HTTP(S), Ping
(ICMP), SMTP, POP3, TCP etc with the option to configure check frequency between
every 1 min and 60 min (with different pricing for each). Alerts are configured
as part of the check configuration and you can be notified by email or webhook.

However, Alertra is very basic. The UI is clunky (e.g. no dark mode) and you
cannot configure the check locations. Traceroutes are provided for every check
event, which is useful, but the multi-step transaction monitoring is implemented
through their own custom scripting language.
[Documentation can be found](https://www.alertra.com/asl/index.html) if you look
hard, but there are no links in the product itself - you have to search their
website and blog.

Pricing is somewhat confusing - the website says $10/m for 50 URLs, with pricing
starting at $0.20/m for 60 minute check granularity, up to $1.95/m for every 1
minute ($19.95/m for 1 minute scripted checks), and a minimum monthly fee of
$9.95.

Alertra might be appropriate for very basic requirements, but we think other
tools in this review are much better.

{{< img-center src="/img/website-monitoring/alertra.png" alt="Alertra product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="alertbot" >}}

{{< category-review/card-heading name="AlertBot" anchor="alertbot" thumbnail="/img/favicons/www.alertbot.com.jpg" url="https://www.alertbot.com" score="none" >}}

AlertBot provides website and synthetic multi-step monitoring for HTTP(S)
websites, plus availability ping monitoring for arbitrary ports. However, the UI
is dated and there is no ability to choose check locations. HTTP monitors do not
support custom headers or the ability to look for content within the response.
Multi-step transactions are built using a downloadable application for Windows
or Mac rather than advanced scripting supported by competitors. Alerting is also
limited.

Given that pricing starts at $110/month, there are better tools for lower prices
with more functionality.

{{< img-center src="/img/website-monitoring/alertbot.png" alt="AlertBot product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="freshping" >}}

{{< category-review/card-heading name="FreshPing" anchor="freshping" thumbnail="/img/favicons/www.freshworks.com.png" url="https://www.freshworks.com/website-monitoring/" score="none" >}}

FreshPing provides basic HTTP(S), WebSocket, Ping (ICMP), TCP, UDP and DNS
checks at 1 or 5 minute check intervals. It is only possible to select a single
location per configured check, and there are only 9 options to choose from,
which significantly limits the usefulness of the monitoring. There is no support
for multi-step transaction monitoring, which means it does not meet the minimum
requirements for our review criteria.

{{< img-center src="/img/website-monitoring/freshping.png" alt="FreshPing product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="pingdom" >}}

{{< category-review/card-heading name="Pingdom" anchor="pingdom" thumbnail="/img/favicons/www.pingdom.com.png" url="https://www.pingdom.com/" score="none" >}}

Pingdom is one of the oldest website monitoring tools - I remember using it more
than a decade ago when there were not many options, and it did a great job!
Since then, it has been acquired by Solarwinds and brought into their cloud
monitoring portfolio.

If you used Pingdom in the past, you can still see some of the old UI elements,
some of which appear in the documentation and in-product videos/graphics.
Pingdom yellow sometimes appears instead of Solarwinds orange. However, it has
mostly been merged into the general Solarwinds UI. This can make the experience
inconsistent and confusing, particularly when using the documentation.

Pingdom supports two main check products - uptime monitors and transaction
monitoring. Uptime checks can be executed against SMTP, POP3, IMAP, TCP, Ping
(ICMP), DNS, UDP and HTTP(S) endpoints which means you can monitor all the
services you might be running. It supports check frequencies ranging from 1
minute to 60 minutes but only lets you choose the test location by broad
region - North America, Europe, Asia and Latin America. With the exception of
being able to combine North America and Europe, region selection is mutually
exclusive so you can’t choose to run checks globally, for example.

Transaction monitoring uses a simplified step-by-step script which can either be
manually written or imported using a transaction recorder application for
Windows or Mac. This requires the page to have the appropriately coded HTML
element IDs so that they can be selected by the script, for example to fill out
a field or submit a form. This works for simple sites but lacks the power of a
true scripting engine like those available from Datadog and New Relic.

Alerting is also very limited - there are basic options for who to alert (teams
and individuals), how long to wait for a “down” state and how often to resend
alerts, but there is no ability to define what “down” means. You can check for
strings on the page and send custom headers, but there is no option for parsing
the response headers or alerting based on response time. Alerts can only be sent
via email, SMS, or webhook -
[they recently shut down their iOS and Android apps](https://documentation.solarwinds.com/en/success_center/pingdom/content/release_notes/release_notes.htm#link1).

Pingdom’s pricing is attractive - starting at around $15/m for 10 uptime checks,
1 transaction check and some SMS - but the product is limited compared to the
competition. You can get a much more powerful product for free from New Relic.

{{< img-center src="/img/website-monitoring/pingdom.png" alt="Pingdom product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="statuscake" >}}

{{< category-review/card-heading name="StatusCake" anchor="statuscake" thumbnail="/img/favicons/www.statuscake.com.png" url="https://www.statuscake.com/" score="none" >}}

Signing up to StatusCake drops you into their limited free plan so you need to
activate the trial to test all the features. Checks are available for HTTP(S),
HEAD, TCP, DNS, SMTP, SSH and Ping test types which also support check
frequencies between every 30 sec and up to every 24 hours. Locations can be
selected from a range of regions, although the drop-down menu UI for selecting
them is tedious if you want to pick more than a few.

However, StatusCake does not support multi-step transaction monitoring and has
very limited alerting capabilities. It is therefore excluded by our review
criteria.

{{< img-center src="/img/website-monitoring/statuscake.png" alt="StatusCake product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="uptimerobot" >}}

{{< category-review/card-heading name="UptimeRobot" anchor="uptimerobot" thumbnail="/img/favicons/uptimerobot.com.jpg" url="https://uptimerobot.com/" score="none" >}}

UptimeRobot has very basic website monitoring functionality that can check
HTTP(S) endpoints, look for strings in the page response, execute ping checks or
attempt connections to open ports. However, there is no ability to define
multi-step transaction monitoring, check locations are not configurable, and a
large number of features - such as monitoring for SSL errors, checking more
frequently than every 5 minutes, setting custom headers and checking HTTP status
codes - are only available on the Pro plan. They are disabled even in the trial.
The UI is not well designed and there is no dark mode.

As such, we do not recommend UptimeRobot for developers.

{{< img-center src="/img/website-monitoring/uptimerobot.png" alt="UptimeRobot product screenshot" width="100%" >}}

{{< div--close >}}

### FAQ

{{< category-review/faq category="website-monitoring" >}}

{{< nav-wrapper--open id="wrapper-10" anchor-name="editorial-policy" >}}

### Related categories

{{< category-review/related-categories >}}

### Our editorial policy

#### Why you can trust us

Console is written by developers for developers. Using our decades of experience
building software at scale, we apply strict [selection
criteria](/selection-criteria/) to decide which software we feature.

This includes asking questions like "Would this form part of a daily-use set of
developer tools?", "Would this be used by advanced, power-users?" and "Does it
have a good graphical and/or command line interface? Shortcuts? Accessibility?".
The more of these questions we can answer positively, the more likely a tool is
to be featured.

We **do not** accept payment for inclusion and where we work with partners, they
must fit our selection criteria before we consider working with them.

{{< div--close >}}
