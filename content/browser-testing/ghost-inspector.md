---
title: "Ghost Inspector review"
date: 2021-12-07T07:00:00+00:00
draft: false
summary: 
  Ghost Inspector is a beginner friendly tool for desktop browser testing. It can
  perform end to end testing of email workflows. Read our review of Ghost 
  Inspector - a browser testing tool.
metaDescription:
  Ghost Inspector is a beginner friendly tool for desktop browser testing. It can
  perform end to end testing of email workflows. Read our review of Ghost 
  Inspector - a browser testing tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: browser-testing
isSubpage: ghost-inspector
customStyle: false
pageType: vendor-review
customPageStyle: true
category: developer-tools
subcategory:
  label: Browser testing
  name: browser-testing
vendorName: Ghost Inspector
vendorURL: https://ghostinspector.com/
thumbnail: /img/favicons/ghostinspector.com.png
ranking:
  value: 5
  total: 6
scores:
  overall: 3.5
  features:
    - name: Device & browser support
      value: 2.5
    - name: Automation
      value: 4
    - name: Debugging & error reporting
      value: 4
productShot:
  image: /img/browser-testing/ghost-inspector.png
intro:
  "Ghost Inspector is great for getting started with with desktop browser
  testing, including running complex end-to-end tests, however it is limited by 
  the number of supported devices and browsers. Ghost Inspector only supports 
  desktop browsers - mobile testing is not possible."
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
  - name: Sauce Labs
    thumbnail: /img/favicons/saucelabs.com.jpg
    url: /browser-testing/sauce-labs/
    category: developer-tools
  - name: Selenium
    thumbnail: /img/favicons/www.selenium.dev.png
    url: /browser-testing/selenium/
    category: developer-tools
---

{{< nav-wrapper--open id="wrapper-0" anchor-name="cost" >}}

### Cost

{{< p-custom class="cost-highlight" >}}$99—399/month{{< p--close >}}

Starts at $99/m with pricing increasing based on the number of tests or team members.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Device & browser support" score="2.5" >}}

Ghost Inspector can run tests on the latest 30 (approximately) releases of
Chrome and Firefox. For testing responsive designs, the resolution of the
browser window on the test device can be modified to replicate a broad range of
desktop, mobile and tablet screen sizes. Functional testing on a headless
Chrome browser is also supported. Tests are performed on an unknown desktop
operating system, and neither real nor virtual mobile devices are supported.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Automation" score="4" >}}

Tests can be triggered as part of a deployment pipeline, such as when connected
to hosting platforms like Netlify and Heroku, or they can be integrated with
popular CI/CD services like AWS CodePipeline, Azure DevOps, GitHub Actions, and
Bitbucket Pipelines. Tests can be launched at specific dates and times or
scheduled to run at regular intervals using the Ghost Inspector dashboard, API,
or npm package. A specialized
[plugin](https://github.com/ghost-inspector/wordpress-plugin) is available for
WordPress websites that shows a summary of test results on a WordPress
dashboard.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Debugging & error reporting" score="4" >}}

Ghost Inspector visually presents a summary of executed tests by listing all
test steps and showing a ‘check mark’ next to the ones which passed. This makes
understanding reports easy even for novice users. Team members can also discuss
findings of each test execution by commenting on individual tests reports.  

A number of built-in options (email alerts and webhooks) and third-party
integrations (Slack, PagerDuty, and Microsoft Teams) are provided for notifying
stakeholders about test results. Test reports and execution history are
available in JSON and CSV formats for download.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

Ghost Inspector can test the functionality of websites and web apps on Chrome
and Firefox browsers with support for a custom `user-agent` string and variable
screen sizes. Visual testing is performed by taking images of the entire screen
or selecting elements on the page and comparing them to the previous baseline.
The presence of video recordings of tests and console log output eases the
debugging process.

There are multiple ways to generate tests: using a web extension (available for
Chrome and Firefox) which records the actions performed on a webpage and then
saves the results to Ghost Inspector cloud, importing tests generated by
[Selenium IDE](https://www.selenium.dev/selenium-ide/), and by using the
[codeless test editor](https://ghostinspector.com/docs/test-editor/).

Ghost Inspector has some prominent features which set it apart from the [other
browser testing tools we tested](/browser-testing/):

- All tests are performed in [parallel by
  default](https://ghostinspector.com/docs/faq/#do-tests-run-in-parallel-or-sequentially)
  (30+ tests at a time).
- [No
  limit](https://ghostinspector.com/docs/faq/#do-tests-run-concurrently-or-one-at-a-time)
  on the number of tests which can be queued.
- Built-in [email service](https://ghostinspector.com/docs/check-email/) to
  receive test emails.
- Integration with Twilio to authenticate one time passwords via SMS.
- Code-less [data driven
  testing](https://ghostinspector.com/docs/data-driven-testing/).

Test steps, such as login sequences which might be common across multiple
tests, can be [written once and
imported](https://ghostinspector.com/docs/modularizing-tests/) like a library
in other tests. A [NodeJS
package](https://github.com/ghost-inspector/node-ghost-inspector) can be used
to interact with [Ghost Inspector's
API](https://ghostinspector.com/docs/api/). All tests can be [imported and
exported](https://ghostinspector.com/docs/selenium-import-export/), either to
Selenium's IDE or Ghost Inspector JSON format, to store in version control.

{{< modal-custom type="screen" type-screen="/img/browser-testing/ghostinspector-suite.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/ghostinspector-suite.png" alt="Screenshot of errors logged at console." >}}
{{< a--close >}}

Ghost Inspector can perform data-driven testing by setting variables and
uploading data sources that can be accessed via JavaScript in the tests. We
particularly like the fact that when performing data-driven testing, up to
1,000 test cases can be queued which are executed concurrently (30-50 at a
time), other competing tools charge extra for each additional parallel test
execution.

Tests can be triggered from [18 data
centers](https://ghostinspector.com/docs/test-running-ip-addresses/) around the
world with a local IP address to test localization features such as currency
and time zones. It is also possible to perform end-to-end integration testing
and complete 2-factor authentication flows by using SMS and email services.

Ghost Inspector provides one of the easiest solutions to perform automated
accessibility tests. It uses [axe](https://www.deque.com/axe/) to generate an
insightful report which contains a list of violations and Xpath of problematic
components. The issues are color coded and sorted according to priority. When
compared to other similar tools such as
[LambdaTest](/browser-testing/lambdatest/) and
[CrossBrowserTesting](/browser-testing/crossbrowsertesting/), Ghost Inspector
provides better accessibility testing services.

{{< modal-custom type="screen" type-screen="/img/browser-testing/ghostinspector-accessibility.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/ghostinspector-accessibility.png" alt="Screenshot of accessibility testing tool from Ghost Inspector." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

Ghost Inspector has limited browser support. While Chrome and Firefox are
supported, there is no support for Safari which leaves a large gap in their
browser coverage. Only a handful of presets are available to simulate mobile
devices (by changing viewport and user agent).

Ghost Inspector [does not have an
ETA](https://ghostinspector.com/docs/faq/#can-i-run-my-tests-with-different-browsers-and-operating-systems)
on when more browsers will be supported. If testing on a large number of
browsers is essential, we recommend considering
[BrowserStack](/browser-testing/browserstack/), [Sauce
Labs](/browser-testing/sauce-labs/) &
[CrossBrowserTesting](/browser-testing/crossbrowsertesting/) all of which offer
real devices and greater flexibility when setting up the test environment.

We also saw limitations when attempting to test UI features such as pop-up
windows, additional tabs (there is no specific syntax for targeting additional
tabs or popups), and alert boxes. The web camera API and HTTP3 are not
supported at all.

Compared to many of the [other tools we tested](/browser-testing/), Ghost
Inspector seems to be lacking several features commonly available in other
browser testing tools. These included:

- Lack of support for live testing.
- The operating system that test environment VMs run on cannot be changed.
- Absence of real mobile devices.
- No frameworks are supported, except for Javascript (competing tools provide a
  significantly larger range of SDKs and frameworks to choose from).

There are also a number of security concerns that we identified when running
tests. Notably, all test [URLs need to be publicly
available](https://ghostinspector.com/docs/test-local-and-firewalled-websites/).
The IP addresses of their testing servers are available for whitelisting,
however this requires extra work to set up configuration requirements so human
error may result in mistakes.

While all test emails to Ghost Inspector's email service are deleted after one
hour, they are technically publicly available for a period of a short period of
time. You will need to invest in a subscription to Twilio to [receive 2FA
SMS](https://ghostinspector.com/docs/common-testing-scenarios/#sms-otp) if you
want 2FA support, which is further cost consideration.

{{< modal-custom type="screen" type-screen="/img/browser-testing/ghostinspector-console.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/ghostinspector-console.png" alt="Screenshot of errors logged at console." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="browser-testing/ghost-inspector" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="browser-testing/ghost-inspector" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the [best browser testing tools for
developers](/browser-testing/), we highlight the best 6 browser testing tools
for developers in {{< year >}}. See how they compare to Ghost Inspector in the
table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="browser-testing/ghost-inspector" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### Ghost Inspector alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
