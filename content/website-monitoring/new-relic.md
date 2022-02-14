---
title: "New Relic review"
date: 2022-01-31T07:00:00+00:00
draft: false
summary:
  New Relic is a powerful monitoring tool which can run synthetic tests and
  transaction workflows. It has a custom query language to filter logs and
  metrics. Read our review of New Relic - a website monitoring tool.
metaDescription:
  New Relic is a powerful monitoring tool which can run synthetic tests and
  transaction workflows. It has a custom query language to filter logs and
  metrics. Read our review of New Relic - a website monitoring tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: website-monitoring
isSubpage: new-relic
customStyle: false
pageType: vendor-review
customPageStyle: true
xlViewport:
  largeText: true
category: developer-tools
subcategory:
  label: Website monitoring
  name: website-monitoring
vendorName: New Relic
vendorURL: https://newrelic.com/
thumbnail: /img/favicons/newrelic.com.png
ranking:
  value: 5
  total: 7
scores:
  overall: 4.1
  features:
    - name: Check types & frequency
      value: 3.5
    - name: Check locations
      value: 4.5
    - name: Multi-step requests
      value: 5
    - name: Alerts
      value: 3.5
productShot:
  image: /img/website-monitoring/newrelic.png
intro:
  "New Relic is a great tool for website monitoring. It provides NRQL, a
  powerful custom query language similar to SQL which can be used for making
  dashboards and defining alerts. A generous free quota is available each month."
relatedReviews:
  - name: Datadog
    thumbnail: /img/favicons/www.datadoghq.com.png
    url: /website-monitoring/datadog/
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

$0.25/GB/month after the first free 100GB of data (events, metrics, traces, and
logs) and 10k synthetics checks. $99/month is charged for each additional full
user.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check types & frequency" score="3.5" >}}

New Relic supports
[seven types of synthetic monitors](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/getting-started/types-synthetic-monitors/).
These monitors can be used to detect broken links on the page, SSL certificate
expiration, PING the URL, make HTTP requests and validate results. It also
supports advanced monitors like step monitor, simple browser monitor, and
scripted browser monitor which emulate actual visitors by making requests from a
Chrome browser. Browser interactions like navigating to a URL, clicking
elements, asserting values and entering text can be performed using a no-code
browser interface. Custom scripts can be written for more specific actions such
as asserting the title of the page. Other check types such as FTP or DNS are not
supported.

Checks frequency can be picked from a list of predefined values which ranges
between 1 min to 1 day. It does not support custom values.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check locations" score="4.5" >}}

New Relic supports
[20 check locations](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/administration/synthetic-public-minion-ips/)
across the globe, all of which are hosted on AWS. Private check sites, known as
[containerized private minions](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/install-containerized-private-minions-cpms/),
are docker containers which can be installed on multiple operating systems.
Unlike Uptime.com, which charges extra for
[private check locations](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/private-locations-overview-monitor-internal-sites-add-new-locations/),
New Relic provides this functionality free of cost (some charges are still
incurred for data ingestion). Using a private location deployed onto your
network allows monitoring internal facing applications and means you can create
a custom environment for browser tests.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Multi-step requests" score="5" >}}

New Relic provides three ways to create multi-step monitors - `STEP_MONITOR`,
`BROWSER`, and `SCRIPT_BROWSER`. Step monitor is a low-code interface which can
perform most of the ordinary browser interactions. Tests can be created using a
graphical web-editor to build step by step instructions such as click, naviate,
assert. Custom Selenium scripts can be used to emulate a Chrome browser
instance - this renders javascript and allows manipulation of elements on the
page. Multi-step HTTP requests can be used to monitor API responses and process
them.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Alerts" score="3.5" >}}

Alert conditions in New Relic are defined as separate policies rather than being
part of a monitor. By default, alert triggers are based on test failures. New
Relic offers
[anomaly detection](https://docs.newrelic.com/docs/alerts-applied-intelligence/applied-intelligence/proactive-detection/proactive-detection-applied-intelligence/)
functionality which can flag unusual behaviour and adapts to changes
(continuously training new models on fresh data). A SQL-like query language
called
[New Relic Query Language](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/)
(NRQL) can be used for querying metric data and triggering alerts. This is a
powerful feature for advanced users but requires more time and effort to
construct the right query to configure dashboards or alerts.

Notifications can be sent via email, ServiceNow, Slack, and Webhooks. Users can
[build their own](https://github.com/newrelic/newrelic-quickstarts)
integrations. Alerting via SMS and phone is not supported.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

New Relic integrates with popular cloud providers like Amazon Web Services,
Google Cloud Platform, Microsoft Azure and Pivotal Cloud Foundry - this enables
it to deliver metrics, events, logs, and traces. New Relic's synthetic's
scripted browser uses Selenium Webdriver APIs. Selenium has a vast and thriving
community so you can take advantage of its extensive ecosystem to build check
scripts.

New Relic allows running tests from containerized private minions (Docker
containers) at no additional cost. Using this feature has two major advantages:

- Users can run tests from a region not supported by New Relic. This can also be
  used to monitor internal endpoints.
- Setting-up a private container allows you to control the environment which
  makes it possible to use any node module in test scripts. This is superior to
  Checkly which only allows using modules from a curated list.

We like that New Relic's Query Language is syntactically similar to SQL which
means users who are already familiar with SQL can use it without spending much
time to learn it. It is a powerful and flexible tool for building custom
dashboards and populating them with data. This can also be used to exercise
additional control over alerts, NRQL can set critical and warning thresholds for
performance problems and provides extensive control over the time and frequency
settings that opens an alert and a notification.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/newrelic-NRQL.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/newrelic-NRQL.jpeg" alt="Screenshot of New Relic's Query Language." >}}
{{< a--close >}}

A new event type can be created by adding custom attributes to existing events.
Custom events can be inserted through the APIs. This makes defining,
visualizing, and getting alerts on additional data easier. New Relic's CLI can
manage entity tags, define workloads, record deployment markers, and can be used
to automate common tasks.

New Relic hosts Nerdlog, a weekly live stream available on
[Twitch](https://www.twitch.tv/new_relic) and
[YouTube](https://www.youtube.com/playlist?list=PLmhYj7Jl81JGOEHV7zUVfa_iGNyOfMGNh).
This event mainly focuses on educating users about new product features and
discussions tangential to observability and monitoring. This gives users an
opportunity to interact with product managers and engineers at New Relic.

The
[Applied Intelligence](https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/get-started/introduction-applied-intelligence/)
feature by New Relic is a hybrid machine learning engine that automatically
detects anomalies (throughput, latency, and error rate), correlates & classifies
incidents and then suggests responses for incidents based on historical context.
It records data and feedback to improve functionality, and suggests new
correlation rules based on your production data over time. It is also possible
to create custom logic using the decision builder. Applied Intelligence requires
no setup and integrates well with NRQL which can be used to create custom
dashboards with the data.

Workflows can be configured to control notifications, and can supplement
notifications with New Relic's data to send useful information to relevant
people or teams. Incident preference settings grants control over how
notifications are created. For example, receiving a notice for every violation
or only a single notification for a series of consecutive violations.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

New Relic has powerful alerting capabilities, but to take full advantage, you
need to learn NRQL. This requires investing time by learning to build complex
queries based around thresholds, outlier detection, aggregation and warning
levels. However, users accustomed to other similar relational query languages
such as SQL will find it familiar.

New Relic's pricing model is built around data ingestion and retention. This
works well for log monitoring or tracing, but is more challenging to understand
when applied to website monitoring. This means that the user needs to keep track
of data ingested each month to avoid unexpected charges.

Users should note that all the check locations provided by New Relic are hosted
on AWS. All the tech giants like [AWS](https://aws.amazon.com/message/12721/),
[Fastly](https://www.fastly.com/blog/summary-of-june-8-outage),
[Google](https://status.cloud.google.com/incident/zall/20013), and
[Azure](https://status.azure.com/en-us/status/history/) have experienced outages
in recent months. If your organization and monitoring platform both use the same
infrastructure then, outages might not be detected. Users would benefit from
adding a private monitoring location using a different cloud provider, but that
introduces additional cost and adds a new responsibility to monitor the
monitoring server. [Datadog](/website-monitoring/datadog/) uses a mix of AWS and
Azure servers to run checks. In our opinion, this is a better approach.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="website-monitoring/new-relic" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="website-monitoring/new-relic" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the
[best website monitoring tools for developers](/website-monitoring/), we
highlight the best 7 website monitoring tools for developers in {{< year >}}.
See how they compare to New Relic in the table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="website-monitoring/new-relic" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### New Relic alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
