---
title: "Uptime.com review"
date: 2022-01-31T07:00:00+00:00
draft: false
summary:
  Uptime.com is a particularly suited to enterprise customers. It
  offers features like private check locations, sub-accounts with limited access
  scope, and internal status pages. Read our review of Uptime.com - a website
  monitoring tool.
metaDescription:
  Uptime.com is a particularly suited to  enterprise customers. It
  offers features like private check locations, sub-accounts with limited access
  scope, and internal status pages. Read our review of Uptime.com - a website
  monitoring tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: website-monitoring
isSubpage: uptime.com
customStyle: false
pageType: vendor-review
customPageStyle: true
category: developer-tools
subcategory:
  label: Website monitoring
  name: website-monitoring
vendorName: Uptime.com
vendorURL: https://uptime.com/
thumbnail: /img/favicons/uptime.com.svg
ranking:
  value: 6
  total: 7
scores:
  overall: 3.8
  features:
    - name: Check types & frequency
      value: 5
    - name: Check locations
      value: 3
    - name: Multi-step requests
      value: 4
    - name: Alerts
      value: 3
productShot:
  image: /img/website-monitoring/uptime.png
intro:
  "Uptime.com supports a large number of protocols for website monitoring.
  Useful features like private check locations, sub-accounts with limited access
  scope, and internal status pages make Uptime.com a particularly valuable tool
  for enterprise customers."
relatedReviews:
  - name: Datadog
    thumbnail: /img/favicons/www.datadoghq.com.png
    url: /website-monitoring/datadog/
    category: developer-tools
  - name: Uptime.com
    thumbnail: /img/favicons/www.rapidspike.com.png
    url: /website-monitoring/rapidspike/
    category: developer-tools
  - name: Checkly
    thumbnail: /img/favicons/www.checklyhq.com.jpg
    url: /website-monitoring/checkly/
    category: developer-tools
  - name: New Relic
    thumbnail: /img/favicons/newrelic.com.png
    url: /website-monitoring/new-relic/
    category: developer-tools
  - name: Uptrends
    thumbnail: /img/favicons/www.uptrends.com.jpg
    url: /website-monitoring/uptrends/
    category: developer-tools
  - name: Site24x7
    thumbnail: /img/favicons/www.site24x7.com.jpg
    url: /website-monitoring/site24x7/
    category: developer-tools
---

{{< nav-wrapper--open id="wrapper-0" anchor-name="cost" >}}

### Cost

Uptime.com offers plans priced at $19/month, $199/month, and $499/month. More
expensive subscriptions offer more monitoring checks, locations and notification
credits.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check types & frequency" score="5" >}}

Uptime.com can monitor an endpoint using multiple protocols (HTTP, DNS, ICMP,
NTP, SSH, TCP, UDP). It is also possible to receive periodic metrics from an
external process - this is called Heartbeat monitoring which issues alerts when
a request is not received (heartbeat is not detected) for a prolonged period.
Uptime.com can scan Whois/domain results and check TLS certificate expiry.

The default check frequency of tests is five minutes but it can be changed to
any value between 1 and 60 minutes.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check locations" score="3" >}}

Uptime.com offers check locations across the globe. The check servers are
concentrated in US and Europe regions - Asia and Africa have fewer locations.
Uptime.com provides details about each test server - metadata like region,
country, IPv4 and IPv6 addresses, and datacenters (eg. DigitalRealty, Equinix,
Volta, Interxion) are available - this information can be used to make informed
decisions when specifying individual test locations.

Although the servers are located worldwide, cheaper subscriptions only grant
access to US locations and do not allow adding a private location. Private check
servers can only be added by Business or Enterprise plan customers (as an
add-on) who already have access to Uptime.com’s worldwide monitoring locations.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Multi-step requests" score="4" >}}

Uptime.com supports both
[transaction monitoring](https://support.uptime.com/hc/en-us/articles/360000984785-Synthetic-Monitoring-With-the-Uptime-com-Transaction-Check)
and multi-step HTTP API requests. Transaction Recorder (a Chrome extension) can
be used to create new tests or edit existing tests. It can create basic
workflows which include clicking on elements, waiting for elements to load,
filling in text, etc. API checks are built using a web-editor and can perform
basic actions such as performing a GET request and validating responses based on
XPath or JSON selector values.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Alerts" score="3" >}}

Uptime.com can send alerts via email, SMS, phone call, Twitter, webhooks,
Microsoft Teams, Uptime.com mobile application, Slack, HipChat, PagerDuty, etc.
Alerts can be defined as part of each check - conditions such as target response
time, SSL validation and regex matching of response strings can be configured
for individual tests. Although basic use cases are covered, it is somewhat
inflexible due to being configured on a check level. Managing a large number of
checks and their alerts would be tedious.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

Uptime.com provides website monitoring tools that are easy to use and user
friendly. The initial setup process automatically adds recommended monitors,
which includes monitors like DNS, domain expiry, SSL/TLS expiry, spam blacklist
and virus & malware detection. This speeds up the initial setup process and
gives a quick demonstration of various useful features offered by Uptime.com.
This contrasts with [Datadog](/website-monitoring/datadog/) or
[Site24x7](/website-monitoring/site24x7/) which have a very busy UI and take
more time to find out where everything is.

Uptime.com provides functionally to add a
[public status page](https://support.uptime.com/hc/en-us/articles/360016373219-Public-Status-Page),
[public SLA page](https://support.uptime.com/hc/en-us/articles/360016346700-Public-SLA),
and
[internal status page](https://support.uptime.com/hc/en-us/articles/360016373679-Internal-Status-Page),
they display the following metrics:

- Downtime of services.
- Affected components.
- Previous incidents and outages.
- Informational metrics such as upload & download time.

These pages can be customized to match your company ([such as in this
example](https://uptime.com/s/samplepsp)). This is useful because it is a common
scenario to present external status pages to customers and is not available from
Uptime.com alternatives such as [Datadog](/website-monitoring/datadog/).

The availability of internal status pages makes it possible to easily share
incident history and metrics that contain sensitive information with team
members. Access can be controlled for each account user with basic authorization
so only users with the proper credentials can see it. Uptime.com also provides a
widget which can be embedded on a website to display the website's uptime
statistics. This widget can be customized for light and dark modes and changes
color in real-time (based on configured SLA or downtime).

Uptime.com enterprise clients can opt for an addon to make sub-accounts for
their users. This has several advantages:

- Individual check and alert communication limits for each account.
- Timezone support for each account.
- Customized permission and access levels for each account.
- The admin can monitor activity across sub-accounts and intervene if necessary.

Sub-accounts can utilize both two-factor authentication and single-sign on to
enhance security.

There are some other nice-to-have features which improve the overall experience.
For example,
[customizing SPF records](https://support.uptime.com/hc/en-us/articles/360016295019-Create-an-SPF-Record-to-Send-Email-via-Uptime-com)
to send alert emails from the company domain, adding contacts and on-call hours
to better organize event responders, and
[posting tweets automatically](https://support.uptime.com/hc/en-us/articles/360002396380-Configuring-Twitter)
when an incident occurs.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/uptime.com-report.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/uptime.com-report.jpeg" alt="Screenshot of uptime.com's monitor report." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

Uptime.com offers plenty of features for novice users but advanced users may
find it lacking. For example, alerting is limited to up/down status and
relatively few options are available for defining what is considered “down”.
[New Relic](/website-monitoring/new-relic/) provides powerful configuration of
alert conditions through the use of its query language, NRQL (similar to SQL) -
this is a better choice for users who wish to exercise more control over their
alerts.

Out of 49 publicly available check locations, 16 are located in just two
countries (USA and UK). This is problematic as test locations are concentrated
in a few locations, and if an outage occurs outside these locations, it might
take longer to identify the issue. Furthermore, private check locations are only
available as an add-on to business and enterprise customers, which introduces
additional cost. If the number of check locations is a priority for you, then we
recommend using [Uptrends](/website-monitoring/uptrends/) (as it offers more
than 200 check locations staggered around the world) or [New
Relic](/website-monitoring/new-relic/) (which can run tests on private docker
containers at no additional cost).

There are some things enterprise users should be aware of - the API is limited
to 500 queries per hour, which can be easily exceeded in large environments. The
sub-account feature is only available upon request.

For a basic web monitor, the test reports consist of a line chart that shows
response time by location and a stacked bar chart that depicts uptime. Report
analysis only offers history and a summary of incidents. These reports offer
surface level information and lack in depth insights offered by some other
tools. For example, [New Relic](/website-monitoring/new-relic/) gives access to
all the metrics which can be queried using NRQL and RapidSpike makes a HAR file
of each test which can be used to track each individual element on the website
and draw trends over time.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/uptime.com-alerts.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/uptime.com-alerts.jpeg" alt="Screenshot of uptime.com's alert page." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="website-monitoring/uptime.com" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="website-monitoring/uptime.com" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the
[best website monitoring tools for developers](/website-monitoring/), we
highlight the best 7 website monitoring tools for developers in {{< year >}}.
See how they compare to Uptime.com in the table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="website-monitoring/uptime.com" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### Uptime.com alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
