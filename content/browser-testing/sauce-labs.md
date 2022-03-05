---
title: "Sauce Labs review"
date: 2021-12-07T07:00:00+00:00
draft: false
summary:
  Sauce Labs is an ideal tool for large businesses because it has global
  presence and decades of experience in making browser testing tools. Read our
  review of Sauce Labs - a browser testing tool.
metaDescription:
  Sauce Labs is an ideal tool for large businesses because it has global
  presence and decades of experience in making browser testing tools. Read our
  review of Sauce Labs - a browser testing tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: browser-testing
isSubpage: sauce-labs
customStyle: false
pageType: vendor-review
customPageStyle: true
xlViewport:
  largeText: true
category: developer-tools
subcategory:
  label: Browser testing
  name: browser-testing
vendorName: Sauce Labs
vendorURL: https://saucelabs.com/
thumbnail: /img/favicons/saucelabs.com.jpg
ranking:
  value: 4
  total: 6
scores:
  overall: 4.2
  features:
    - name: Device & browser support
      value: 4.5
    - name: Automation
      value: 4
    - name: Debugging & error reporting
      value: 4
productShot:
  image: /img/browser-testing/sauce-labs.png
intro:
  "Sauce Labs has a global presence and is ideal for large businesses. It
  provides a large number of devices and browsers and it is also possible to
  purchase private devices for testing. However, it has only a limited number of
  integrations and suffers from high latency during live testing."
relatedArticles:
  - category: developer-tools
    article:
      name: Some article
      url: https://somewhere.it
  - category: devops
    article:
      name: Some other article
      url: https://somewhere.it
  - category: devops
    subcategory:
      label: Website monitoring
      name: website-monitoring
relatedReviews:
  - name: BrowserStack
    thumbnail: /img/favicons/www.browserstack.com.png
    url: /browser-testing/browserstack/
    category: developer-tools
  - name: LambdaTest
    thumbnail: /img/favicons/www.lambdatest.com.jpg
    url: /browser-testing/lambdatest/
    category: developer-tools
  - name: SmartBear CrossBrowserTesting
    thumbnail: /img/favicons/crossbrowsertesting.com.png
    url: /browser-testing/crossbrowsertesting/
    category: developer-tools
  - name: Ghost Inspector
    thumbnail: /img/favicons/ghostinspector.com.png
    url: /browser-testing/ghost-inspector/
    category: developer-tools
  - name: Selenium
    thumbnail: /img/favicons/www.selenium.dev.png
    url: /browser-testing/selenium/
    category: developer-tools
---

{{< nav-wrapper--open id="wrapper-0" anchor-name="cost" >}}

### Cost

{{< p-custom class="cost-highlight" >}}$49—249/month{{< p--close >}}

Sauce Labs offers plans starting at $49/month for manual testing and $199/month
and $249/month for automated virtual device and real device testing.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Device & browser support" score="4.5" >}}

Sauce Labs provides cloud infrastructure for testing on thousands of desktop and
mobile browser/OS combinations around the world.

Desktop testing can be performed on multiple versions of Windows, macOS, and
Linux operating systems. They claim to
[deliver new versions](https://saucelabs.com/platform/supported-browsers-devices)
within 48 hours of release, however, when we checked (2 months after launch),
Windows 11 and macOS 12 were still not available.

Mobile testing can be performed on emulators as well as 240+ real Android and
iOS devices. Recently launched "Google Pixel 6" and "iPhone 13" are also
available. On desktop, users can choose between many versions of Chrome,
Firefox, Safari, and Edge; but on mobile devices, users are stuck with
pre-installed browsers, i.e. Chrome on Android and Safari on iOS devices.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Automation" score="4" >}}

It is possible to set up, manage, and view test results from within a continuous
integration server. CI/CD tools like Bamboo, Bitbucket, Jenkins, TeamCity,
Travis CI, and CircleCI can be integrated directly.

The [saucectl CLI](https://docs.saucelabs.com/testrunner-toolkit/saucectl/) is a
framework agnostic tool for orchestrating tests via a command-line interface. A
REST API is also available which allows downloading, updating, and deleting
tests and reports.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Debugging & error reporting" score="4" >}}

As a developer, the availability of the browser console logs and network call
logs helps to reduce time spent analyzing root causes. This helps to gain
insight into network requests and browser performance. All the commands issued
during the test can be reviewed in test reports available in the dashboard. It
also shows a video recording of the test, test logs, and test metadata.
Long-term trends are presented as graphs in the dashboard to visualize pass/fail
rate, number of errors etc.

Test results can be posted to Slack, integrated into other systems via a webhook
or shared directly via a link. Reports shared via a link can be set to be viewed
by public, private, team audiences. Any bugs discovered in the report can be
reported to Jira directly from the dashboard.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

Sauce Labs supports
[multiple testing frameworks](https://saucelabs.com/platform/automation-tools)
(Selenium, Cyprus, Playwright, Puppeteer etc.) for automated testing. Sample
scripts (in multiple languages) for supported frameworks are available on
[GitHub](https://github.com/saucelabs-training/). This is helpful for novice
users and speeds up the setup process for veterans. Visual component testing can
be performed using
[Sauce Visual](https://saucelabs.com/platform/visual-testing/visual-component-testing)
which tests React, Vue, and Angular components across different browsers and
resolutions. This makes it possible to test UI components in isolation and
enables components to be tested individually and in mocked states. Enterprise
customers can perform functional testing on
[headless browsers](https://docs.saucelabs.com/headless/) to speed up automated
testing of non UI elements.

Sauce Labs provides "Sauce Connect Proxy" (a proxy server) and "Sauce IPSec
Proxy" (an IPsec VPN) which securely connects web applications hosted on a
private network (or local machine) to the Sauce Labs cloud network - this
network can be used by virtual machines and real devices for testing. Compared
to the traditional approach of whitelisting certain IP address ranges, this
solution provides time-based access controls. It is possible to connect several
tunnels at once and group them together to be used as a single
[high availability connection](https://docs.saucelabs.com/secure-connections/sauce-connect/setup-configuration/high-availability/).

It also provides the tester the ability to distribute the test traffic (using
round-robin load-balancing) between different tunnels. This feature is unique to
Sauce Labs and not something we saw with
[the other browser testing tools we reviewed](/browser-testing/).

There are many reasons one would use Sauce Labs over other tools. The following
features set this tool apart:

- Availability of thousands of browser configurations.
- Option to buy
  [private devices](https://docs.saucelabs.com/mobile-apps/supported-devices/index.html#private-device-cloud)
  for testing.
- Framework independent CLI tool.

Many interesting
[device vitals](https://docs.saucelabs.com/web-apps/live-testing/live-cross-browser-testing/#device-vitals)
such as internet traffic, number of process threads, and CPU/Memory usage are
available with live testing. Having access to these device metrics alongside
detailed device logs is useful when debugging. It is possible to send and
retrieve text snippets to and from the clipboard on virtual machines as well as
to share Live testing sessions in real-time. Neither
[BrowserStack](/browser-testing/browserstack/) nor
[CrossBrowserTesting](/browser-testing/crossbrowsertesting/) provides device
vitals, if this feature is important for your use case then Sauce Labs may be
the only option.

Performance metrics such as Time to First Meaningful Paint, Time to First
Interactive, Page Weight, Speed Index etc. can be captured to analyze
performance bottlenecks.

[Sauce Insights](https://saucelabs.com/platform/analytics-performance/sauce-insights)
is an AI-assisted failure analysis tool that looks for patterns, for example,
specific Selenium commands in a test suite that frequently fail.

Sauce Labs provides a powerful API and almost anything which is possible via the
dashboard can be performed via the API. The saucectl CLI can be used to access
the tests written with one of the supported frameworks (Cypress, Playwright,
TestCafe, Puppeteer, Espresso, XCUITest) and run them. This CLI can be
configured to work with Jetbrains IDEs and Visual Studio Code.

{{< modal-custom type="screen" type-screen="/img/browser-testing/saucelabs-live-test.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/saucelabs-live-test.png" alt="Screenshot of Record & Replay tool from Sauce Labs." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

Sauce labs is one of the oldest browser testing tools but it provides
integrations only with other well-established tools and services. Jenkins,
Travis CI, CircleCI, etc. are supported but lesser-known tools like Spinnaker
and Buildbot can not be used with Sauce Labs. Similarly, for ticketing systems,
Jira is supported but BugZilla and MantisBT are not. This makes working with
unsupported tools harder than it needs to be and might limit the number of tools
you can work with in the future.

We found that scrolling and typing actions during live testing is difficult due
to high network latency; when playing videos, the frame rate is very poor. Users
have to regularly wait 1-2 seconds after each input to see changes on the
screen, this makes the testing process slow and irritating. On mobile devices,
each device only has one browser available (Safari on iOS and Chrome on
Android). If having multiple browsers on mobile devices is a strong necessity,
then we suggest using [BrowserStack](/browser-testing/browserstack/).

Sauce Labs
[claims to reset devices](https://docs.saucelabs.com/mobile-apps/supported-devices/#real-device-cleaning)
after testing concludes, but during our usage, we encountered some issues which
might contradict this. e.g. we were testing in English but the devices defaulted
to Arabic. Restarting the test fixed this. This may indicate that devices are
not wiped between tests or settings are not consistent between devices. If the
latter statement is true, then it might make reproducing bugs difficult.

Sauce Labs has data centers in four global locations (US West, EU Central,
US-East, APAC Southeast (BETA)), each of these is independent from the other and
the user must use
[different API endpoints](https://docs.saucelabs.com/basics/data-center-endpoints/)
and URLs for each case. Even the dashboard is different for each location and
tests are segregated accordingly, i.e. tests executed in one location can only
be viewed on its respective dashboard. Although this approach is unique, it adds
unwanted complexity. While some users may enjoy additional control, it provided
no clear benefit to us and only added confusion. Other tools use a unified
dashboard and allow changing location in test configurations, which in our
opinion is a better approach. LambdaTest even allows changing network locations
during live testing and makes it easy to test geographical features.

[In July 2021](https://saucelabs.com/blog/backtrace-acquisition-adds-error-monitoring-to-sauce-labs)
, Sauce Labs acquired [Backtrace](https://backtrace.io/) which contains most of
the advanced debugging features. Features such as data redaction, querying,
sorting and grouping by the captured log attributes are bundled into an
independent service which needs to be purchased separately.
[BrowserStack](/browser-testing/browserstack/) provides some of these features
(like
[data redaction](https://www.browserstack.com/docs/automate/selenium/hide-sensitive-data))
at no additional cost. We hope to see these services merge functionality over
time, but for now they are essentially separate tools.

{{< modal-custom type="screen" type-screen="/img/browser-testing/saucelabs-dashboard.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/saucelabs-dashboard.png" alt="Screenshot of automated screenshot tool from Sauce Labs." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="browser-testing/sauce-labs" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="browser-testing/sauce-labs" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the
[best browser testing tools for developers](/browser-testing/), we highlight the
best 6 browser testing tools for developers in {{< year >}}. See how they
compare to Sauce Labs in the table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="browser-testing/sauce-labs" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### Sauce Labs alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
