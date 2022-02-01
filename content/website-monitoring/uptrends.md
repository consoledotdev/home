---
title: "Uptrends review"
date: 2022-01-31T07:00:00+00:00
draft: false
summary:
  Uptrends can run complex transaction monitoring workflows and monitor websites from more
  than 200 global regions. Read our review of Uptrends - a website monitoring
  tool.
metaDescription:
  Uptrends can run complex transaction monitoring workflows and monitor websites from more
  than 200 global regions. Read our review of Uptrends - a website monitoring
  tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: website-monitoring
isSubpage: uptrends
customStyle: false
pageType: vendor-review
customPageStyle: true
category: developer-tools
subcategory:
  label: Website monitoring
  name: website-monitoring
vendorName: Uptrends
vendorURL: https://www.uptrends.com/
thumbnail: /img/favicons/www.uptrends.com.jpg
ranking:
  value: 2
  total: 7
scores:
  overall: 4.5
  features:
    - name: Check types & frequency
      value: 4.5
    - name: Check locations
      value: 5
    - name: Multi-step requests
      value: 4
    - name: Alerts
      value: 4.5
productShot:
  image: /img/website-monitoring/uptrends.png
intro:
  "Uptrends is a website monitoring tool that supports complex transaction
  workflows. It uses real browsers to perform full page checks that can track
  individual elements on the page. Uptrends also has over 220 check locations
  around the world, which makes it one of the most geographically diverse
  monitoring tools we tested."
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
  - name: New Relic
    thumbnail: /img/favicons/newrelic.com.png
    url: /website-monitoring/new-relic/
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

Uptrends offers 3 plans depending on functionality. Pricing starts at $18/m
which includes 10 checks but limited locations. To get access to all check
locations and transaction monitoring, the Business plan starting at $25/m (with
no checks included) is needed.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check types & frequency" score="4.5" >}}

Uptrends supports HTTP checks and
[multi-step API monitoring](https://www.uptrends.com/support/kb/api-monitoring/multi-step).
It can monitor the reachability of websites by sending a ping request or
connecting over a specific port. Checks can also be set-up using different
protocols like FTP, SFTP, and Uptrends supports browser tests with one of the
four supported browsers: Chrome, Firefox, Internet Explorer, and PhantomJS
(headless).

User defined check intervals are not supported - one of the predefined values
must be selected from a dropdown. For HTTP and API tests, frequency options
range between every 1-60 mins; for browser tests and transaction monitoring,
frequency ranges between every 5-60 mins.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check locations" score="5" >}}

Uptrends features a vast network of over
[220 global monitoring checkpoints](https://www.uptrends.com/checkpoints)
covering all major regions around the world. Check locations can be picked
individually or a region containing multiple locations can be selected. By
default, test locations are picked using a round robin algorithm. This can be
changed by enabling
[concurrent monitoring](https://www.uptrends.com/support/kb/concurrent-monitoring)
which allows running tests simultaneously from upto 50 locations. Concurrent
monitoring offers higher check reliability and faster error detection, but it
comes with increased cost. The IPv4 and IPv6 addresses of servers are available
for whitelisting and individual
[servers can be excluded](https://www.uptrends.com/support/kb/checkpoints/checkpoint-exclusions)
from running tests.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Multi-step requests" score="4" >}}

Uptrends can conduct multi-step API tests and transaction monitoring.
Transaction tests can be recorded using a Chrome extension or created using the
web editor. Tests can be launched in standard or concurrent mode and advanced
features can be configured such as adding custom headers,
[switching iframes](https://www.uptrends.com/support/kb/transactions/switching-between-iframes-browser-tabs),
and authentication. It is possible to throttle bandwidth, modify the user-agent
string, screen size, and
[simulate mobile devices](https://www.uptrends.com/support/kb/transactions/transaction-monitoring-for-mobile-setup).

Steps are defined through various actions (like navigate, click, hover, wait and
scroll) based on the page element CSS or XPath selector, but the options are
more limited compared to competitors.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Alerts" score="4.5" >}}

Uptrends can raise alerts via email, SMS and phone. It integrates well with many
incident management and communication tools like Microsoft Teams, Opsgenie,
PagerDuty, ServiceNow, Slack and others. Users can also build a
[custom integration](https://www.uptrends.com/support/kb/integrations/custom-integrations)
that fits in their DevOps workflow.

Alerts are managed independently of monitors. Alerts are raised by defining
alert definitions which can be triggered when one or more tests fail. Alerts can
be escalated to three levels depending on the duration of the test failure or
number of errors. These levels can be used to gradually alert more people using
multiple communication mediums as incidents get worse. It is also possible to
send reminder alerts if the incident stays active longer than a predefined
duration.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

Uptrends can run checks from more than 220 locations around the world. This
number is greater than any other website monitoring tool we tested.
[Site24x7](/website-monitoring/site24x7/) offers 110+ locations which is the
second highest, [Datadog](/website-monitoring/datadog/) and [New
Relic](/website-monitoring/new-relic/) offer 16 and 20 respectively. Having a
diverse selection to choose from makes it a useful tool for monitoring
geographical and localization differences. For example, ecommerce websites can
change currency settings or streaming video services can check availability of
content. If the number of test locations is important for your use case,
Uptrends is a clear winner.

Uptrends provides secure storage, known as
[vault](https://www.uptrends.com/support/kb/vault), to store:

- Login credentials which can be used in monitors which require usernames and
  passwords for authentication.
- Security certificates (in the form of a PKCS #12 certificate archive) which
  can authenticate API requests via client certificates.
- Single sign-on public keys for Uptrends.
- Files (upto 2 MB) that can be used to monitor upload transaction workflows.

This service is useful as it will remove incentives to permanently store
credentials in tests - the certificates and credentials can be rotated at a
regular interval using the Vault API. [Checkly](/website-monitoring/checkly/),
an alternative website monitoring tool, also provides an option to securely
store data by locked environment variables, but Uptrends offers more
functionality.

Uptends can complete advanced multi-step transaction workflows such as password
reset request, checkout flow, booking a flight and performing a payment. These
can be built using an in-built web editor or recorded via a browser extension.
The web editor has a simple graphical user interface and uses CSS selectors to
locate elements. Similar to [RapidSpike](/website-monitoring/rapidspike/),
Uptrends stores test scripts as JSON files which can be directly edited by the
user and modified as needed. These scripts can be updated via the API and
integrated with CI/CD tools for automatic deployment which makes it a powerful
tool. Uptrends also provides a team of transaction consultants to fine-tune and
test scripts free of charge.

Full Page Check monitor types loads the defined test webpage using an actual
browser, and downloads each element (scripts, CSS, third-party elements,
images). Monitor configurations support the HTTP3 and QUIC protocols and can
throttle bandwidth to simulate poor network conditions. A rich waterfall report
is generated which separates out page elements and reports the time taken for
each of these steps. These checks can be configured with error conditions like
minimum and maximum bytes (detects missing elements by checking if the combined
size of all page elements lies in a certain range) and element maximum size (run
a check on individual element sizes). Third party elements can be excluded (even
when they are loaded) from these calculations to reduce false positives. It is
also possible to completely block specific requests for external elements.

An interesting feature is the option to
[set error tolerance](https://www.uptrends.com/features/concurrent-monitoring)
for concurrent monitors. This feature provides higher reliability by running
simultaneous checks from multiple locations and triggering alerts when a certain
threshold is exceeded. For example, if the threshold is set at 50%, 3 out of 6
simultaneous checks must fail to trigger an alert. Other tools like Site24x7 do
this process sequentially, which takes longer to detect errors.

Monitor reports contain useful metrics that include the total duration, HTTP
status code, passed or failed assertions, request and response headers, time
taken for each step, browser snapshots at each step, etc. This information is
useful for analyzing bottlenecks, errors, and other performance trends.

Uptrends allows tracking any numeric API response data with custom metrics.
These can be used to build a custom dashboard containing interactive charts,
tables, status icons, maps, etc. These metrics can also be displayed on a public
status page.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/uptrends-monitor.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/uptrends-monitor.jpeg" alt="Screenshot of uptrends' monitor settings." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

The user interface of Uptrends is halfway between the modern look of its website
(which matches the left menu in the product UI) and an older, legacy design with
some weird quirks (which is what the main UI looks like). Some inconsistencies
and organizational challenges make the UI confusing. For instance,
[Real Browser Checks](https://www.uptrends.com/support/kb/real-browser-check/real-browser-check-overview),
[Full Page Checks](https://www.uptrends.com/support/kb/full-page-check/overview),
and Full Page Check+ offer overlapping functionalities with minute differences -
this causes confusion as it is difficult to decide which service is optimal for
the job. Similarly, the sidebar menu includes monitoring, alerting and
dashboards at the top but then has a separate section for synthetics that
contains transactions, browser, API and uptime monitors. The section heading of
synthetics is at the same indentation level and uses the same font size as the
rest of items in the list, which gives the impression that the heading is part
of the list. Understanding this hierarchy is difficult.

Confusing feature organization is further seen with alerting which has multiple
features split across multiple sections of the product. Alerts are set on
integrations, the account level, and then on error status for the check itself -
this could be better organized to improve the UX.

Uptrends has no documentation section on the website. Quick start guides are
available to introduce new users to basic features. A collection of articles in
their knowledge base is available which further explains the features of each
tool. This means it takes longer to find relevant information and forces you to
jump from one section to another. If having good documentation is a priority for
you, then [Datadog](/website-monitoring/datadog/) and [New
Relic](/website-monitoring/new-relic/) have done a great job of designing their
documentation.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/uptrends-dashboard.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/uptrends-dashboard.jpeg" alt="Screenshot of Uptrends' Dashboard." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="website-monitoring/uptrends" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="website-monitoring/uptrends" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the
[best website monitoring tools for developers](/website-monitoring/), we
highlight the best 7 website monitoring tools for developers in {{< year >}}.
See how they compare to Uptrends in the table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="website-monitoring/uptrends" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### Uptrends alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
