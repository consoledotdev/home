---
title: "RapidSpike review"
date: 2022-01-31T07:00:00+00:00
draft: false
summary:
  RapidSpike can run synthetic website monitoring tests as well as checks for
  SEO, security, accessibility and performance. Read our review of RapidSpike -
  a website monitoring tool.
metaDescription:
  RapidSpike can run synthetic website monitoring tests as well as checks for
  SEO, security, accessibility and performance. Read our review of RapidSpike -
  a website monitoring tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: website-monitoring
isSubpage: rapidspike
customStyle: false
pageType: vendor-review
customPageStyle: true
category: developer-tools
subcategory:
  label: Website monitoring
  name: website-monitoring
vendorName: RapidSpike
vendorURL: https://www.rapidspike.com/
thumbnail: /img/favicons/www.rapidspike.com.png
ranking:
  value: 7
  total: 7
scores:
  overall: 3.8
  features:
    - name: Check types & frequency
      value: 3.5
    - name: Check locations
      value: 3
    - name: Multi-step requests
      value: 4.5
    - name: Alerts
      value: 3
productShot:
  image: /img/website-monitoring/rapidspike.png
intro:
  "RapidSpike takes a different approach from the other website monitoring tools
  we reviewed with a focus more on the overall website experience, including
  checks for SEO, security, accessibility and performance. It supports the usual
  check types like HTTP and various protocols, as well as synthetic monitoring
  using Selenium."
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

RapidSpike has plans priced at $39/month, $81/month and $205/month for starter,
growth and enterprise accounts. Users can optionally pay approximately
$140/month for access to a dedicated account manager.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check types & frequency" score="3.5" >}}

RapidSpike supports ICMP, TCP, and HTTP checks. As expected, ping monitors use
the ICMP protocol to check the network reachability of the device (using IP
address or domain). TCP monitors check for URL connectivity problems - UDP port
monitors are not supported.

In addition to the monitors mentioned above, RapidSpike offers a unique approach
with [insight checks](https://www.rapidspike.com/insights/). This tracks domain
expiry, SSL certificate configuration & expiry, security headers, Alexa traffic
rank, etc. This is useful as it gives an overview of website health, but some
features such as FTP, SFTP, WebSocket monitoring are not supported.

Test frequency can be picked from a list of predefined values which ranges
between every 1-60 min. Insight checks are configured automatically and
typically wait between several hours to a month between successive executions.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Check locations" score="3" >}}

RapidSpike can execute tests from fifteen global regions. It splits checks into
a hierarchy with the primary domain at the top and then sub-checks configured
for each URL or page. Test regions are defined at this sub-level, for each test
type - not at a domain level. Private test locations are not supported.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Multi-step requests" score="4.5" >}}

RapidSpike offers
[synthetic user journey monitoring](https://www.rapidspike.com/kb/user-journey-monitoring/)
functionality which executes multiple HTTP requests to interact with the web
application and ensure that critical processes are working properly.

Tests can be created using a web-based
[script editor](https://www.rapidspike.com/kb/understanding-the-script-editor/)
which can perform actions like click, hover, typing, waiting for elements to
load, capturing screenshots, manipulating cookies & headers, defining assertions
using HTML selectors, and more. Video recordings of these user journeys are made
available.
[Test scripts are stored as JSON](https://docs.rapidspike.com/journey-scripting/index.html)
and can be edited directly, which are then executed on Chrome using Selenium.
HTTP archive (HAR) files along with page load statistics are available for
analysis.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Alerts" score="3" >}}

Team members can be notified via Slack, email, Microsoft Teams, Voice call, SMS,
Zendesk, PagerDuty, Webhooks, Pushover, Splunk, and OpsGenie. Rules are defined
at an account level and triggered based on the amount of time an uptime monitor
is classed as 'failing'. Alert delivery groups allow defining sensitivity (the
duration an alert is open for after which notification is sent out) and which
users to send alerts to. It is possible to define what is considered as a
failure for each page in a site, however this cannot be configured for basic
uptime checks. Alerts for multi-step tests can be raised based on response times
and the presence of elements on page. Separate alerting rules can be configured
for insight monitors.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

RapidSpike takes a unique approach to website monitoring by defining tests in a
hierarchical manner - adding a domain automatically sets up relevant security
and SEO monitors. Individual website pages can be monitored for uptime, web
vitals (largest contentful paint, max potential first input delay, cumulative
layout shift), Chrome user experience report, and Google Lighthouse scores
(accessibility, best practices, SEO, progressive webapp).

Web pages can be checked for connectivity issues by using an uptime monitor -
this is a simpler check that monitors a page's availability, but does not raise
an alert if there is an invalid response. Advanced web page tests can be set up
to load the entire page in a browser, rendering and storing the details for
every file (creating a "HTTP Archive" file).

Test reports show relevant issues, browser logs, page load breakdown, and a
screenshot of each webpage. Network requests are presented in an easy to
understand waterfall chart and can be downloaded as an HTTP Archive file.

The history of individual elements on the webpage is tracked, so it is possible
to see request and response headers. Load time and size of the element are
depicted on a graph, and the location of the server is presented on an
interactive map. These detailed insights are particularly useful to track trends
of third-party plugins which might affect user experience and page load times.
Elements loaded from the same domain are automatically grouped, which makes it
easier to isolate elements by type, audit cookies, spot blocking Javascript,
optimize images and identify slow fonts.

RapidSpike offers synthetic monitoring functionality branded as 'User Journeys'.
It also uses scripts of browser actions that follow a key process to simulate
real global users. Significant features include:

- Selenium (an industry-leading automation tool) is used to simulate browser
  interactions.
- Ability to set custom headers. This is useful to track monitoring requests in
  analytics tools and whitelist in firewalls.
- Ignore & block elements: specific elements or domain requests on the webpage
  can be prevented from loading during automated checks.
- Cookies are recorded and can be audited to verify compliance with GDPR laws.
- Screenshots can be captured and the video recording of tests is available to
  identify errors quickly.
- Scripts can be made via a web-based script editor or directly in
  [JSON mark-up schema](https://docs.rapidspike.com/journey-scripting/index.html).

RapidSpike can perform an automated vulnerability assessment at varying depths -
network scan (which scans one or more IP addresses for vulnerabilities), web app
scan (scans websites for common vulnerabilities), client-side security scan
(scans websites looking for common known code excerpts found in malicious
client-side attacks). Vulnerabilities unique to popular content management
systems (WordPress, Magento, Drupal, Joomla, Silverstripe CMS) can also be
identified. Scans can be configured to run once, weekly, monthly, quarterly or
annually.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/rapidspike-monitor.webp" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/rapidspike-monitor.webp" alt="Screenshot of RapidSPike monitor." >}}
{{< a--close >}}

Real user monitoring functionality can be activated by adding a tracking script
to all pages on the website. These record live data from real users which can be
used to analyze vital traffic metrics in the form of graphs and tables. This can
be used to identify traffic spikes, performance issues and visitor statistics in
real-time.

Public status pages can be configured with company branding and a domain to
display uptime status and metrics. Reports are presented in a hierarchical
manner and can contain results from server, website, SSL, and domain checks.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/rapidspike-status-page.jpeg" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/rapidspike-status-page.jpeg" alt="Screenshot of RapidSpike's status page." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

RapidSpike's unique approach to monitoring makes it difficult to use initially.
There is a slight learning curve as everything in the UI is presented in a
hierarchical manner and it can be difficult to understand if you are familiar
with other website monitoring tools. For example, the settings menu for a
website is presented as a tree that dynamically adds child nodes when the parent
node is clicked. This adds to the confusion as there is no way to know which
node has the required information without clicking all nodes.

In our experience, this interface slows the user down and makes it difficult to
find relevant settings. If the user is unable to find a setting, it makes them
wonder whether the setting is not implemented or hidden behind some ambiguous
label. [Limited documentation](https://docs.rapidspike.com/) exacerbates this
issue. RapidSpike provides dedicated account managers to set up monitoring, but
that requires additional monthly payment.

Users should note that some check types (TCP, UDP, SSH, etc.) commonly offered
by competing tools are not available. RapidSpike does not support IPv6
addresses - this means users cannot monitor their latest infrastructure. This is
especially surprising as most organizations are transitioning to IPv6 due to
[IPv4 Exhaustion](https://www.larus.net/blog/ipv4-exhaustion).

RapidSike offers fifteen global test locations; this number is much smaller
compared to alternative monitoring tools, such as Uptrends which offers 200+
test locations worldwide. Having more check locations is preferable when users
are not concentrated in one part of the world. Private check locations are also
not supported, which means it is not possible to check internal-facing
endpoints. [New Relic](/website-monitoring/new-relic/),
[Datadog](/website-monitoring/datadog/) and
[Uptime.com](/website-monitoring/uptime.com/) provide easy to set up Docker
containers to run tests from private servers.

RapidSpike uses a credit system for billing - separate credits are required for
monitoring and alerting. Once you have run out, RapidSpike does not send any
more alerts via certain channels like SMS, voice call or WhatsApp. This can be
risky because you might run out of credits in the middle of an outage and not be
notified immediately. Enterprise users should note that Single Sign-on is not
supported.

{{< modal-custom type="screen" type-screen="/img/website-monitoring/rapidspike-issues.webp" >}}
{{< img-custom class="content-image" src="/img/website-monitoring/rapidspike-issues.webp" alt="Screenshot of RapidSpike issues tab." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="website-monitoring/rapidspike" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="website-monitoring/rapidspike" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the
[best website monitoring tools for developers](/website-monitoring/), we
highlight the best 7 website monitoring tools for developers in {{< year >}}.
See how they compare to RapidSpike in the table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="website-monitoring/rapidspike" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### RapidSpike alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
