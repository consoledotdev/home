---
title: "Selenium review"
date: 2021-12-07T07:00:00+00:00
draft: false
summary: 
  Selenium is a free and open source browser testing framework that powers many 
  other browser testing tools, but requires significant technical knowledge 
  to use. Read our review of Selenium - a browser testing tool.
metaDescription:
  Selenium is a free and open source browser testing framework that powers many 
  other browser testing tools, but requires significant technical knowledge 
  to use. Read our review of Selenium - a browser testing tool.
headerType: fixed
hideLines: true
hidePlanes: true
type: vendor-review
layout: vendor-review
isPage: browser-testing
isSubpage: selenium
customStyle: false
pageType: vendor-review
customPageStyle: true
category: developer-tools
subcategory:
  label: Browser testing
  name: browser-testing
vendorName: Selenium
vendorURL: https://www.selenium.dev/
thumbnail: /img/favicons/www.selenium.dev.png
ranking:
  value: 6
  total: 6
scores:
  overall: 2.5
  features:
    - name: Device & browser support
      value: 3
    - name: Automation
      value: 3
    - name: Debugging & error reporting
      value: 1.5
productShot:
  image: /img/browser-testing/selenium.png
intro:
  "Selenium is an open source browser testing framework used by many other 
  browser testing tools because of its maturity and power. However, it requires 
  significant technical knowledge to set up - including managing your own test 
  devices - so we do not recommend it for most users."
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
  - name: Ghost Inspector
    thumbnail: /img/favicons/ghostinspector.com.png
    url: /browser-testing/ghost-inspector/
    category: developer-tools
---

{{< nav-wrapper--open id="wrapper-0" anchor-name="cost" >}}

### Cost

{{< p-custom class="cost-highlight" >}}Free{{< p--close >}}

Selenium is free and open source (Apache License 2.0).

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="key-features" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Key features
{{</ rich-title-3 >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Device & browser support" score="3" >}}

Selenium can be configured to run on all versions of Windows and macOS. Many
Linux distributions are directly supported and some determined users can even
get it to work on BSD-based distributions. Selenium 4 is W3C compliant and
browser vendors like Google, Microsoft, Mozilla, and Apple provide Selenium
compatible
[drivers](https://www.selenium.dev/documentation/getting_started/installing_browser_drivers/#quick-reference)
for their browsers. Selenium does not support testing on mobile devices
directly, but it is [possible to work
around](https://saucelabs.com/blog/can-selenium-be-used-for-mobile-testing)
this limitation.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Automation" score="3" >}}

Selenium can be integrated to work with many CI/CD tools like Azure Pipelines,
Jenkins, GitLab CI, etc. Unfortunately, support for such integrations is
community-driven and development can be slow. One example of this is the
[Selenium plugin for Jenkins](https://plugins.jenkins.io/selenium/) - despite
having a known [security issue](https://plugins.jenkins.io/selenium/) since
2020 it still gets over 2,000 monthly downloads.

As it is an open source project, users can develop their custom plugins to meet
their needs, and the possibilities for integrations are endless. A vast number
of community plugins and libraries are available, but the quality is variable
and many have been completely abandoned.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< vendor-review/feature-title text="Debugging & error reporting" score="1.5" >}}

Selenium is designed only to automate browsers, [not to
report](https://www.selenium.dev/documentation/guidelines/improved_reporting/)
on the status of test cases run. By default, all results are printed to
standard output - sharing findings and collaborating in a large team is
difficult. A few third-party solutions such as
[JUnit](https://junit.org/junit5/), [TestNG](https://junit.org/junit5/), and
[Extent reports](https://www.extentreports.com/) are available to simplify the
test case management procedure and generate GUI reports that cannot be accessed
other than through the raw output.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="like" >}}

{{< rich-title-3 icon="like" >}}What we like{{</ rich-title-3 >}}

First introduced in 2004, Selenium has evolved into an industry standard.
Selenium 4 is W3C compliant and many cross-browser testing tools are built on
top of it. Browser testing vendors like
[BrowserStack](/browser-testing/browserstack/),
[LambdaTest](/browser-testing/lambdatest/) and [Sauce
Labs](/browser-testing/sauce-labs/) actively contribute to the development of
Selenium and provide Selenium Grid as a service on their respective testing
platforms.

Selenium supports the [Chrome DevTools
Protocol](https://www.selenium.dev/documentation/support_packages/chrome_devtools/)
and is working with browser vendors to add support for [WebDriver BiDirectional
Protocol](https://www.selenium.dev/documentation/webdriver/bidi_apis/).
Together these features greatly enhance the testing capabilities and allow
better control over browser properties, thus increasing possibilities for
browser manipulation. Some of the noteworthy features are:

- Intercepting HTTP responses - parameters like URL, response headers, response code, etc. can be accessed.
- Network speed emulation and blocking certain URLs.
- Automating the input of basic auth credentials.
- Mutation observation - listen to events when a specific DOM element is updated.
- Mocking geolocation.
- Capturing console logs.
- Work with browser cache and override user agent string.

[Selenium IDE](https://www.selenium.dev/selenium-ide/) is a low-code testing
tool that records and plays back browser interactions. This allows novice
developers to conduct automated testing. It is possible to design intricate test
cases by adding [conditional logic and
looping](https://www.selenium.dev/selenium-ide/docs/en/introduction/control-flow)
to tests. The Selenium IDE also supports
[plugins](https://www.selenium.dev/selenium-ide/docs/en/plugins/plugins-getting-started)
that further enhance its functionality. [Web Test
Recorder](https://ghostinspector.com/docs/test-recorder/) is a similar offering
by [Ghost Inspector]((/browser-testing/ghost-inspector/)) and it is possible to
run tests generated by Selenium IDE in the Ghost Inspector cloud environment.

[Selenium Grid](https://www.selenium.dev/documentation/grid/), which allows
executing tests on multiple physical or virtual devices, can be used to run
tests on multiple versions of different browsers on numerous operating systems.
Grid consists of several
[components](https://www.selenium.dev/documentation/grid/grid_architecture/)
which makes it very flexible, for example, assembling a grid of four machines
each running three instances of Firefox 70.0 would allow 12 tests to run
concurrently.

The ability to distribute tests makes it possible to scale tests from a single
machine to parallel executions on servers all over the world. The number of
tests that could be executed concurrently is only limited by the capabilities of
the hardware.

Since the tester owns the testing infrastructure, it is possible to exercise
greater control over data handling and storage policies. Tests can be executed
without an internet connection, thereby minimizing the network costs and
security concerns.

Selenium provides some advanced capabilities such as manipulating browser
cookies, drag & drop mouse actions, support for GraphQL queries, transfer of
files from the client machine (hub) to the remote server (test node), tracing
the request lifecycle, capturing screenshots, switching window tabs and setting
browser profiles in Firefox. Performance metrics like Resources, Documents,
JSHeapUsedSize, etc. can be collected when running automated tests. This makes
Selenium a good choice for tasks other than testing, like web scraping.

{{< modal-custom type="screen" type-screen="/img/browser-testing/selenium-code.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/selenium-code.png" alt="Screenshot of Selenium script in VS code." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="dislike" >}}

{{< rich-title-3 icon="dislike" >}}What we don't like{{</ rich-title-3 >}}

Compared to the [other SaaS browser testing tools we
reviewed](/browser-testing/), Selenium has some major limitations because it was
not created to perform visual testing or generate user friendly test reports.
Tests are focused on whether or not the correct content is displayed rather than
whether it is displayed correctly. This is a big restriction in today's
fast-paced world where developers run A/B testing on the tiniest of UI elements
to increase conversion rates and engagement. 

Other tools like [BrowserStack](/browser-testing/browserstack/) and [Sauce
Labs](/browser-testing/sauce-labs/) provide modern solutions to perform visual
regression tests whereas the Selenium team
[believes](https://www.selenium.dev/documentation/guidelines/domain_specific_language/)
that the user interface is a secondary consideration for users.

Test case management and error reporting with Selenium is an arduous task. It
does not generate test reports or notify about the results, other tools provide
these features out of the box. In contrast to [Sauce
Labs](/browser-testing/sauce-labs/), which provides advanced
services to detect patterns in error reports, Selenium reports all results to
console output by default. This makes collaborating with team members
difficult. Third-party software must be used for organising test cases which
adds more complexity to the tech stack.

Selenium does not explicitly support testing on mobile devices. Two other
solutions, namely [Appium](https://appium.io/) and
[Selendroid](http://selendroid.io/), are available to solve this by
implementing mobile tests using Selenium. Selenium BiDi API is under
development and Chrome DevTools Protocol does not have a stable API - the
functionality is highly dependent on the version of the browser.

[Selenium IDE](https://www.selenium.dev/selenium-ide/), a no-code solution to
record tests, is only available for Chrome and Firefox browsers. It does not
provide all the features supported by Selenium and users must resort to code,
which requires a good grasp of one of the supported programming languages. When
writing tests with Selenium, there is a steep learning curve. The only technical
assistance available is through community forums.

Selenium Grid requires the availability of real or virtual desktop and mobile
devices connected to a network during testing. Setting up a testing grid is a
complex process and requires a large capital investment upfront. Regularly
updating machines is a gargantuan task and adding the latest devices on launch
further increases the costs.

Managing your own device lab is a questionable use of time and money when SaaS
options are available. [Alternatives we reviewed](/browser-testing/) provide
Selenium Grid as a service that already consists of thousands of machines spread
across different geographic regions. There are no upfront costs associated with
this and testers can start being productive within minutes. The time and effort
spent in setting up infrastructure for small projects is impractical for all but
the largest teams - even then it may be more efficient to pay a provider to do
this for you. Some providers like [Sauce
Labs](https://docs.saucelabs.com/mobile-apps/supported-devices/index.html#private-device-cloud)
and [AWS Device
Farm](https://docs.aws.amazon.com/devicefarm/latest/developerguide/working-with-private-devices.html)
even allow purchasing real private devices in addition to their already large
collection of public devices.

{{< modal-custom type="screen" type-screen="/img/browser-testing/selenium-browser.png" >}}
{{< img-custom class="content-image" src="/img/browser-testing/selenium-browser.png" alt="Screenshot of web testing with Selenium." >}}
{{< a--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="console-developer-perspective" >}}

### Console developer perspective

{{< simple-table name="console-developer-perspective" data-file="browser-testing/selenium" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="company-context" >}}

### Company context

{{< simple-table name="company-context" data-file="browser-testing/selenium" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="alternatives" >}}

### Browser testing tool comparison

In our review of the [best browser testing tools for
developers](/browser-testing/), we highlight the best 6 browser testing tools
for developers in {{< year >}}. See how they compare to Selenium in the
table below.

{{< div-custom class="comparison-checklist-table-wrapper" >}}

{{< simple-table name="comparison-checklist" data-file="browser-testing/selenium" >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="related-reviews" >}}

### Selenium alternatives

{{< related-reviews >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="related-articles" >}}

{{< div--close >}}
