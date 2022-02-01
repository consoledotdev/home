---
title: "Datadog review"
date: 2022-01-31T07:00:00+00:00
draft: false
summary:
  Datadog is a powerful monitoring tool which can run synthetic tests using
  multiple protocols. It offers advanced alerting functionality. Read our review
  of Datadog - a website monitoring tool.
metaDescription:
  Datadog is a powerful monitoring tool which can run synthetic tests using
  multiple protocols. It offers advanced alerting functionality. Read our review
  of Datadog - a website monitoring tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: website-monitoring
isSubpage: datadog
customStyle: false
pageType: vendor-review
customPageStyle: true
category: developer-tools
subcategory:
  label: Website monitoring
  name: website-monitoring
vendorName: Datadog
vendorURL: https://www.datadoghq.com/
thumbnail: /img/favicons/www.datadoghq.com.png
ranking:
  value: 1
  total: 7
scores:
  overall: 4.6
  features:
    - name: Check types & frequency
      value: 5
    - name: Check locations
      value: 3.5
    - name: Multi-step requests
      value: 5
    - name: Alerts
      value: 5
productShot:
  image: /img/website-monitoring/datadog.png
intro:
  "Datadog is a powerful monitoring tool - in this review we focus on the
  website monitoring functionality. For synthetic website monitoring, multiple
  protocols are supported, from HTTP to TCP and WebSockets, and Datadog has
  powerful alerting functionality with integrations into many notification
  platforms like PagerDuty, JIRA and Slack."
relatedReviews:
  - name: New Relic
    thumbnail: /img/favicons/newrelic.com.png
    url: /website-monitoring/new-relic/
    category: developer-tools
  - name: Uptime.com
    thumbnail: /img/favicons/uptime.com.svg
    url: /website-monitoring/uptime.com/
    category: developer-tools
  - name: Checkly
    thumbnail: /img/favicons/www.checklyhq.com.jpg
    url: /website-monitoring/checkly/
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

Datadog offers plans starting at $5/month for API tests and $12/month for
browser tests (per thousand executions, billed annually).

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check types & frequency" score="5" >}}

Datadog can monitor single-step endpoints with various protocols (HTTP, TCP,
UDP, SSL, DNS, WebSocket, and ICMP).
[Multistep tests](https://docs.datadoghq.com/synthetics/multistep/?tab=requestoptions)
are a configuration, but only for HTTP, with advanced functionality like
authenticating through mTLS, AWS SigV4, and Microsoft NTLM in addition to HTTP
basic auth.

Tests can be configured to run using custom values in seconds, minutes, hours or
days, with a range up to every week and as frequent as every 1 second (1 minute
for multi step tests).

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check locations" score="3.5" >}}

Datadog can run tests from 6 different locations in North & South America, 5
locations in Asia Pacific, and 5 locations in Europe. From a total of 16
locations, 15 are hosted on AWS and one is hosted on Azure.

Datadog can be configured to run tests from a private location by deploying a
[docker container](https://docs.datadoghq.com/synthetics/private_locations?tab=docker).
This feature can be used to run tests from regions not supported by Datadog.
This also makes it possible to monitor private endpoints on internal-facing
applications and compare performance degradation between internal and external
networks.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Multi-step requests" score="5" >}}

The
[Browser Test](https://docs.datadoghq.com/synthetics/browser_tests/?tab=requestoptions)
feature by Datadog can simulate Chrome, Firefox and Edge on laptop, tablet and
mobile screen sizes. Tests can be recorded via a browser extension and triggered
on scheduled intervals. Assertions can be defined (like testing presence or
absence of string content or downloading a file) on tests that can trigger
alerts to notify recipients (individuals, groups and/or integrations) in the
event of a failure. Standard test executions are 25 steps each and longer tests
are billed extra. For example, a single test with 35 steps will be billed as two
test executions. Tests that do not satisfy their assertions or fail for another
reason generate error logs and can be debugged later.

The API tests can be used to run a series of linked HTTP requests that use data
from initial requests in subsequent requests. Requests can be defined with
custom request headers, cookies, body, etc. Data can be extracted from HTTP
responses using regex, JSONPath, or XPath to validate assertions or use as
variables in the next step. Each test step is billed as one execution.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Alerts" score="5" >}}

Datadog issues alerts based on conditions defined when setting up monitors.
Users can configure how many consecutive test runs must fail, how often they
fail, and how many locations must fail before triggering alerts.

Alert notifications can be prioritized according to the severity of the event
and can contain additional information in the form of text and graphs. Sending
basic alerts is easy, but advanced teams can integrate with a plethora of
services to construct sophisticated workflows. Notifications can be issued via
email, Jira, PagerDuty, Slack, Webhooks, RSS feed, Microsoft Teams, Amazon
Simple Notification Service, Datadog mobile application, etc. Incident
responders can be re-notified if the incident is not resolved for a predefined
duration and Datadog has its own incident management platform which can be used.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

Synthetic monitoring by Datadog supports both simple network checks for a
variety of protocols (HTTP, TCP, UDP, WebSockets, etc) as well as more advanced
multi step transaction monitoring.

Multi-step tests are a series of HTTP requests (GET, POST, PATCH, PUT, HEAD,
DELETE, and OPTIONS) that can follow redirects, manipulate request headers &
cookies, and connect via a proxy. Up to 20 assertions can be added to each test
step to validate the status code, response time, headers, and response body. It
is possible to extract variables from any step of the test and re-inject their
values in subsequent steps.

Simulated browsers can also be used to run tests. These provide advanced
functionality like interacting with elements (clicking, typing, hover, etc.) -
which can be used to test complex workflows such as a checkout process.
Repetitive tasks (such as login) can be defined as a subtest and used in other
tests. Screenshots are captured after each step in the test for easier
debugging, but this can also be disabled to prevent sensitive data being stored.

Datadog's private check locations can be used to monitor internal facing
endpoints or as a custom check location to supplement the already supported
regions. A dedicated site is available for US government agencies and partners
to monitor their applications and infrastructure. This site satisfies stringent
data handling requirements of the United States government and is
[FedRAMP](https://www.fedramp.gov/) compliant.

Synthetic tests can be integrated with
[numerous third-party services](https://docs.datadoghq.com/integrations/#cat-configuration-deployment)
that make it easy to configure them with the CI/CD pipeline of your choice.
Datadog provides two API endpoints to trigger tests on-demand and poll for
results. [Datadog CI](https://www.npmjs.com/package/@datadog/datadog-ci) (an
open source package) can be used to block the pipeline and trigger the tests
automatically on a canary release and rollback in the event of a failure.

Tests written using the Datadog CLI can override parameters defined in Datadog
UI. This is useful in certain scenarios, for example, tests can be executed in a
staging environment and promoted to production if the tests pass.

Alerting is a part of the overall Datadog monitoring platform. If you use other
Datadog monitoring products then the benefits compound, particularly if you also
use their incident management features. This centralizes all your monitoring
which is useful to devops teams and creating custom notifications that pull in
relevant information from other metrics.

The attention Datadog pays to
[security](https://docs.datadoghq.com/security/synthetics/) is worth
highlighting. Test configurations, variables and results are encrypted during
transport and at rest. Datadog's proprietary Signature v1 algorithm, which is an
asymmetric encryption algorithm similar to AWS Signature v4, uses a 4096 bit key
to encrypt all data during transportation. Test results are encrypted using RSA
(4096 bit key) for storage, and test artifacts like screenshots, snapshots,
errors, etc. are stored using AES256 encryption.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/datadog-dashboard.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/datadog-dashboard.jpeg" alt="Screenshot of dashboard in Datadog." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

The number of check locations provided by Datadog falls short of expectations -
for example, [Uptrends](/website-monitoring/uptrends/) and
[Site24x7](/website-monitoring/site24x7/) offer more than 200 and 100 check
locations each. By comparison, Datadog offers a meagre 16 locations, which
limits its usefulness for detecting very local issues. Setting up private
infrastructure rectifies this, but introduces more complexity and additional
costs. Furthermore, this new infrastructure must itself be monitored and
regularly updated.

In addition to websites, Datadog can also monitor servers, networks, and
databases. Its other services such as log management and security platform all
work well together, but this can be overwhelming for new users. If you only need
website/synthetic monitoring then Checkly is a good alternative to Datadog.

To record browser tests, Datadog requires a browser extension that is only
available on Chrome. These tests can only be edited via an in-app editor.
Similar tools like [RapidSpike](/website-monitoring/rapidspike/) and
[Uptrends](/website-monitoring/uptrends/) allow directly editing JSON files -
this provides more flexibility when making the tests.

Datadog requires third-party integrations to build status pages. It is possible
to share custom dashboards publicly using in-built features, but it is difficult
to set up incident and response updates - we do not recommend using it as a
status page. [Uptime.com](/website-monitoring/uptime.com/) provides public and
internal status pages as a built-in functionality that integrates well with the
rest of the services offered by the tool.

Pricing is based on the number of executed checks. These are executed from
multiple locations at a defined frequency for each monitor, and it is easy to
rack up a large bill if monitors are not configured strategically. Datadog’s
synthetic monitoring may therefore not be suitable for small businesses that
only require basic functionality.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="website-monitoring/datadog" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="website-monitoring/datadog" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the
[best website monitoring tools for developers](/website-monitoring/), we
highlight the best 7 website monitoring tools for developers in {{< year >}}.
See how they compare to Datadog in the table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="website-monitoring/datadog" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### Datadog alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
