---
title: "LambdaTest review"
date: 2022-01-13T07:00:00+00:00
draft: false
summary: 
  LambdaTest supports automated browser testing on devices and browsers new and 
  old. Read our review of LambdaTest - a browser testing tool.
metaDescription:
  LambdaTest supports automated browser testing on devices and browsers new and 
  old. Read our review of LambdaTest - a browser testing tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: browser-testing
isSubpage: lambdatest
customStyle: false
pageType: vendor-review
customPageStyle: true
category: developer-tools
subcategory:
  label: Browser testing
  name: browser-testing
vendorName: LambdaTest
vendorURL: https://www.lambdatest.com/
thumbnail: /img/favicons/www.lambdatest.com.jpg
ranking:
  value: 2
  total: 6
scores:
  overall: 4.7
  features:
    - name: Device & browser support
      value: 4
    - name: Automation
      value: 5
    - name: Debugging & error reporting
      value: 5
productShot:
  image: /img/browser-testing/lambdatest.png
intro:
  "LambdaTest offers automated cross-browser tests on a large number of devices 
  ranging from the earliest versions of Chrome, Firefox, Opera on Windows XP 
  and macOS Lion to the latest versions on Windows 11 and macOS Monterey across 
  multiple platforms. However, the slow rollout of the new OS and device releases 
  and the absence of real devices in the testing cloud is something to look out 
  for."
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
  - name: SmartBear CrossBrowserTesting
    thumbnail: /img/favicons/crossbrowsertesting.com.png
    url: /browser-testing/crossbrowsertesting/
    category: developer-tools
  - name: Sauce Labs
    thumbnail: /img/favicons/saucelabs.com.jpg
    url: /browser-testing/sauce-labs/
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

{{< p-custom class="cost-highlight" >}}$0—198/month{{< p--close >}}

LambdaTest offers a free plan with a limited testing quota each month. Live
testing plans start at $19/month, Web & Mobile Browser Automation plans start at
$119/month. Users can also purchase on-demand access passes at $10 to get 120
minutes of manual testing time.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Device & browser support" score="5" >}}

LambdaTest offers a good selection of browsers on both desktop and mobile
devices for real-time testing ranging from the earliest versions of Chrome,
Firefox, and Opera on Windows XP and macOS Lion to the latest versions on
Windows 11 and macOS Monterey. However, some of the older browsers mentioned are
not available for automated browser testing, only live testing.

Currently, all tests are executed on emulators by default. Automated web testing
on [real
devices](https://www.lambdatest.com/support/docs/mobile-web-automation-on-real-devices/)
(in beta) is available upon request. If you need to test on real devices, one of
the [other browser testing tools we tested](/browser-testing/) may be a better
fit.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Automation" score="4.5" >}}

LambdaTest supports both the Selenium and Cypress frameworks for executing
automated cross browser tests in the cloud. They offer a
[powerful API](https://www.lambdatest.com/support/api-doc/) for automating
repetitive tasks such as starting/stopping the test, retrieving test logs,
generating Lighthouse reports, etc. There are two ways to capture automated
screenshots - via a screenshots API or scheduling them from the dashboard. A
large collection of supported integrations (GitHub, GitLab, Azure Pipelines,
Google Cloud CI, etc.) makes it easy to integrate into CI/CD workflows.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Debugging & error reporting" score="4.5" >}}

LambdaTest supports issue trackers like Jira, Bugzilla, Bugherd, Mantis, etc.
as well as offering their own issue tracker which is deeply integrated with the
platform and can be used to assign bugs/tasks to team members. Issues can be
shared directly with team members via email or can be exported to PDF/Excel
format, however, test reports cannot be shared directly - screen capture videos
and logs can be downloaded.

The availability of testing metadata, network requests, test framework logs,
makes debugging failed tests a smooth process. Test failure trends can be
visualized in the dashboard to analyze the root cause of failure and debug
applications.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

In addition to providing testing infrastructure for automated cross-browser
tests, LambdaTest also provides an automated full page screenshot tool that
supports smart testing of rendered pages by comparing them against previous
runs. Managing and tracking the development process is possible either by using
one of the
[supported integrations](https://www.lambdatest.com/support/docs/integrations-with-project-management-tools/)
or by using the in-built project manager which allows filtering tests by
project name, version numbers and build names as well as creating versioned
projects. This helps in keeping track of tests alongside releases of web
applications.

LambdaTest offers an in-built issue tracker which allows managing bugs across
tests by sharing them across various platforms via email and shared links or
exporting in PDF and XLSX formats. This issue tracker is deeply integrated with
LambdaTest services and using it over other ticketing systems has a few
advantages. For instance, the arduous task of reproducing bugs is made easier
by
[launching failing tests](https://www.lambdatest.com/support/docs/issue-tracker/#how-can-i-reproduce-my-marked-bugs)
with just 1-click.

{{< modal-custom type="screen" type-screen="/img/browser-testing/lambdatest-issue-tracker.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/lambdatest-issue-tracker.png" alt="Screenshot of LambdaTest Issue tracker." >}}
{{< a--close >}}

LambdaTest can reroute connections during live testing to one of 27 supported
countries with minimal latency which allows testing for geo-targeting, geo
blocking, and geo-localization features like language translation, currency
changes and time zone changes.

LambdaTest supports live testing sessions that are provided with
[remote developer tools](https://www.lambdatest.com/support/docs/developer-tools/)
regardless of whether the user is using Chrome, Firefox or Safari. The
[audio from the test devices is available](https://www.lambdatest.com/support-faq?question=10)
during live testing on desktop (except when using Safari) unlike other tools
such as Sauce Labs, which do not support it.

LambdaTest provides multiple ways to connect locally hosted servers and folders
to testing servers. LambdaTest Tunnel (a command-line binary) does this using
an SSH connection without ever needing to expose anything to the public
internet. LambdaTest Underpass (a GUI-based application) is a more user-
friendly way to establish tunnels. It offers advanced features like setting up
password-protected proxies, DNS overrides, choosing connection mode (SSH or
WebSocket) as well as using the tunnel to serve only inbound or outbound
requests. Tunnels can also be established using an
[npm plugin](https://www.npmjs.com/package/@lambdatest/node-tunnel) or
[GitHub Action](https://github.com/marketplace/actions/lambdatest-tunnel-action).

{{< modal-custom type="screen" type-screen="/img/browser-testing/lambdatest-underpass.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/lambdatest-underpass.png" alt="Screenshot of LambdaTest Underpass." >}}
{{< a--close >}}

The analytics functionality provides a useful summary of the automated tests
and shows insightful graphs depicting queue utilization, pass-fail ratio, test
coverage which can be filtered by date, tags, browser, OS, and the user who
executed the test. This makes analyzing trends across the builds easier.

The [HyperTest](https://www.lambdatest.com/hypertest) feature by LambdaTest is
an intelligent test orchestration tool that reduces test execution time. Tests
can be managed through a YAML file or a CLI tool that integrates with CI/CD
platofroms. [On-Premise Selenium Grid](https://www.lambdatest.com/on-premise-selenium-grid)
servers can be installed to run tests behind a firewall.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

The most prominent limitation of mobile testing on LambdaTest is the
unavailability of real testing devices. Users need to contact sales
representatives to get access to real mobile devices - by default all tests are
executed on a simulator. Although they
[claim](https://www.lambdatest.com/support-faq?question=4) that new devices
and versions are dded within a week, we found that support for new devices and
operating systems is slower - they generally appear several weeks after their
release.

Another limitation of LambdaTest is that tests can only be automated using
Selenium or Cypress - other frameworks like Playwright, Puppeteer, etc. are not
supported. The number of devices available for testing also varies slightly
depending on the framework. For example, on Windows 10, the oldest version of
Chrome available for Selenium is 27 compared to 66 for Cypress. Performing
automated accessibility testing across browsers is also not possible.

LambdaTest prefers testers to use Chrome over other browsers when accessing the
dashboard. When compared to Chrome, live testing sessions on Firefox perform
poorly - response times are high which causes video playback and scrolling
actions to suffer heavily in non-Chrome based browsers. We encountered some
issues when performing keyboard actions such as copy-paste on iOS-based devices
in live testing.

[LT Browser](https://www.lambdatest.com/lt-browser), a free offering by
LambdaTest for locally testing websites on multiple devices, is in early
development. Using it over everyday browsers such as Chrome or Firefox has a few
advantages, such as the availability of predefined viewports and the ability to
record the screen during tests; however, it also falls behind consumer browsers
in some cases. Performance reports generated in the LambdaTest Browser are just
regular Lighthouse reports, take a long time to generate and it is not possible
to test multiple URLs at once by separating tabs into different windows - only
one URL can be viewed at a time. Devtools cannot be separated into individual
windows either, which would limit power users who use multiple monitors or a
tiling window manager. [Other browser testing tools we
tested](/browser-testing/), such as Polypane which was specifically made for
this purpose, outperforms LambadaTest's browser in many aspects.

{{< modal-custom type="screen" type-screen="/img/browser-testing/lambdatest-lt-browser.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/lambdatest-lt-browser.png" alt="Screenshot of web testing with LambdaTest." >}}
{{< a--close >}}

When using the LambdaTest CLI to establish a tunnel, we encountered some issues
with the "File descriptor limit" - causing tests to fail.
[Increasing this limit](https://www.lambdatest.com/support/docs/how-to-set-the-open-file-limit-while-using-tunnel/)
to the recommended value of 2,000 improved the situation, but to fully resolve
the problem it needs to be raised even higher. This might be concerning for
users with less powerful CPUs as their personal computers might not be capable
of handling such workloads.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="browser-testing/lambdatest" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="browser-testing/lambdatest" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the [best browser testing tools for
developers](/browser-testing/), we highlight the best 6 browser testing tools
for developers in {{< year >}}. See how they compare to LambdaTest in the
table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="browser-testing/lambdatest" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### LambdaTest alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
