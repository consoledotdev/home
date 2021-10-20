---
title: "The Best Browser Testing Tools For Developers - Console"
titlePrefix: "The best"
titleCategory: "browser testing"
titleSuffix: "tools for developers"
date: 2021-09-17T09:00:00+00:00
draft: false
summary:
  "The best browser testing tools for developers: BrowserStack, LambdaTest,
  SmartBear CrossBrowserTesting, Sauce Labs, Ghost Inspector, Selenium. 10
  browser testing tools reviewed."
metaDescription:
  "The best browser testing tools for developers: BrowserStack, LambdaTest,
  SmartBear CrossBrowserTesting, Sauce Labs, Ghost Inspector, Selenium. 10
  browser testing tools reviewed."
headerType: fixed
hideLines: true
hidePlanes: true
type: tools
layout: category-review
isPage: tools
isSubpage: browser-testing
customStyle: true
pageType: tools-category-review
customPageStyle: true
category: developer-tools
subcategory: browser-testing
authorName: Naman Singhal
authorImg: /img/naman.jpg
authorBioBrief:
  Naman has a background in computer science and has published research with
  IEEE on predicting software bugs using machine learning models.
authorBio:
  is a technical writer at Console. He has a background in computer science and
  recently published research into machine learning predictions of software
  quality at the International Conference on Advanced Computing and
  Communication Systems.
relatedCategories:
  - category: developer-tools
    subcategory:
      label: Load testing
      name: load-testing
  - category: devops
    subcategory:
      label: Website monitoring
      name: website-monitoring
---

The best browser testing tools provide a variety of target devices and browsers,
can be integrated with existing continuous integration pipelines, provide
advanced debugging capabilities to pinpoint the root cause of failure, and allow
sharing the reports with stakeholders via different channels.

We tested 11 browser testing tools using our independent
[selection criteria](/about#selection-criteria) and the requirements described
below. The best browser testing tools for developers in {{< year >}} are:

1. [BrowserStack](#browserstack)
2. [LambdaTest](#lambdatest)
3. [SmartBear CrossBrowserTesting](#smartbear-crossbrowsertesting)
4. [Sauce Labs](#sauce-labs)
5. [Ghost Inspector](#ghost-inspector)
6. [Selenium](#selenium)

In this article, we explain why. We assessed the key features all browser
testing tools should have from the perspective of an experienced developer or
quality assurance engineer. This means assessing automation, debugging,
reusability and scalability of tests. We also keep a close eye on accessibility
and the localization testing capabilities.

{{< nav-wrapper--open id="wrapper-0" anchor-name="tldr" >}}

### tl;dr the best browser testing tools

{{< tools/category-review/tldr-list--open >}}
{{< tools/category-review/miniature-card name="BrowserStack" thumbnail="/img/favicons/www.browserstack.com.png" url="https://www.browserstack.com/" anchor="browserstack" score="4.7" >}}
{{< tools/category-review/miniature-card name="Lambdatest" thumbnail="/img/favicons/www.lambdatest.com.jpg" url="https://www.lambdatest.com/" anchor="lambdatest" score="4.7" >}}
{{< tools/category-review/miniature-card name="SmartBear CrossBrowserTesting" thumbnail="/img/favicons/crossbrowsertesting.com.png" url="https://crossbrowsertesting.com/" anchor="smartbear-crossbrowsertesting" score="4.3" >}}
{{< tools/category-review/miniature-card name="Sauce Labs" thumbnail="/img/favicons/saucelabs.com.jpg" url="https://saucelabs.com/" anchor="sauce-labs" score="4.2" >}}
{{< tools/category-review/miniature-card name="Ghost Inspector" thumbnail="/img/favicons/ghostinspector.com.png" url="https://ghostinspector.com/" anchor="ghost-inspector" score="3.5" >}}
{{< tools/category-review/miniature-card name="Selenium" thumbnail="/img/favicons/www.selenium.dev.png" url="https://www.selenium.dev/" anchor="selenium" score="2.5" >}}
{{< ul--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="requirements-above" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="requirements" >}} Requirements
{{</ rich-title-3 >}}

The three most important features every browser testing tool must have are: a
wide range of target devices and browsers supported, automation, and debugging &
error reporting. Other features might be useful to improve the product
experience, but modern browser testing tools in {{< year >}} must have these
three requirements

For each of our browser testing tool reviews we will assess functionality based
on our [standard selection criteria](/about/#selection-criteria) plus these
three requirements:

{{< framed-section-item--open >}}

#### Devices and browsers supported

The primary objective of cross browser testing is assessing the usability of
websites and web applications on different devices, screen sizes and browser
versions. When considering a browser testing product, the number of available
devices is relevant, but the market share covered by those devices is also
important to ensure tests are representative of real world usage. A large
portion of internet traffic comes from mobile devices so all tools must also
provide a good solution for testing different browsers on a variety of mobile
devices.

{{< div--close >}}

{{< framed-section-item--open >}}

#### Automation

Browser testing is often automated and integrated into CI/CD pipelines. This
helps prevent regressions and ensures there is a minimum quality standard met
when releasing code into production. Testing environments must therefore be
consistent (stateless) and any devices must be reset after each use to factory
configurations to maintain consistency and minimize erratic behaviour.

Different browser testing services approach this in different ways, such as a
plugin for the CI/CD service, but tools may also directly support orchestrating
cloud resources, connect into different hosted Git repositories, and may support
specialist testing of CMSs such as WordPress. A/B testing may also be a part of
this. It’s a bonus if a CLI is available for developers who prefer working with
the command line.

{{< div--close >}}

{{< framed-section-item--open classes="flat-lists" >}}

#### Debugging & error reporting

All tools should have a bug reporting system. Bug reports generated by tools
must be meaningful and provide enough details about tests so that bugs can be
reproduced. Generated bug reports should integrate well with existing bug
tracking systems because most users will already have a system for tracking
issues.

A report should be short and concise. It must capture all the steps that could
lead to the root cause of a failure. It should be able to send summary reports
on messaging platforms like Slack, Teams, Discord, etc., and support a format
that you can share through email.

{{< div--close >}}

{{< div--close >}}

### Best browser testing tools

We reviewed 11 browser testing tools. The best is: BrowserStack. We also liked
[LambdaTest](#lambdatest) and
[SmartBear CrossBrowserTesting](#smartbear-crossbrowsertesting).

{{< nav-wrapper--open id="wrapper-2" anchor-name="browserstack" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="BrowserStack" anchor="browserstack" thumbnail="/img/favicons/www.browserstack.com.png" url="https://www.browserstack.com/" score="4.7" >}}

BrowserStack is a cross browser testing and debugging tool which supports tests
built with Selenium, Cypress, Playwright and Puppeteer. It offers both live and
automated testing on 2000+ real mobile devices and virtual desktop machines.

{{< img-center src="/img/tools/browser-testing-browserstack.png" alt="Browserstack product screenshot" width="100%" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< tools/category-review/card-cost--open highlight="BrowserStack is one of the more expensive choices for browser testing, but that price reflects its quality. It costs $39/m for live testing and $249/m for automated testing with 1 parallel test." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Devices and browsers supported" score="5" >}}

BrowserStack offers testing on 2,000+ mobile and desktop browsers ranging from
legacy versions of Internet Explorer to the latest beta releases of popular
browsers. Tests can be conducted on all major releases of Windows, Mac, iOS and
Android devices from multiple vendors.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Automation" score="4.5" >}}

BrowserStack supports automation workflows written in a wide variety of
languages and frameworks. Support for continuous integration tools like Jenkins
and Travis CI means that testing can be run automatically as part of a CI/CD
pipeline.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Debugging & Error reporting" score="4.5" >}}

BrowserStack can report bugs to Jira, Trello, GitHub and Slack. Screenshots can
be annotated to highlight certain sections which did not render properly before
generating bug reports in live testing. Failed tests can be analyzed with the
help of video recordings and logs generated by the console, network, Selenium
etc.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

BrowserStack supports testing with multiple frameworks, namely Selenium,
Cypress, Playwright and Puppeteer on
[a large number of browsers](https://www.browserstack.com/list-of-browsers-and-platforms/automate)
installed on real and simulated devices. Desktop operating systems go as far
back as Windows XP and MacOS 10.6 with support for 50+ latest versions of major
browsers. On mobile devices, live testing can be performed on Android and iOS
versions going back to 2.2 and 3.0 respectively.

Local testing can be performed by establishing an encrypted tunnel to securely
test websites hosted on environments behind firewalls or VPNs.
[Sensitive data can be redacted](https://www.browserstack.com/docs/automate/selenium/hide-sensitive-data#nodejs)
from logs by setting-up additional parameters to mask the output of certain
commands. Privacy can be further enhanced by disabling logs and video recordings
for such tests. Screenshots of remote testing devices can be captured and saved
directly to the local machine to help analyze issues when video recordings are
switched off.

User interface elements can be tested, such as allowing/denying browser
permissions or simulating clicks on alerts and prompts, which is helpful to
avoid regressions or bugs in key transaction workflows. Testing on real devices
is supported which makes it easier to discover device-specific quirks. These can
even be scoped to run in specific regions and languages to allow the detection
of timezone bugs or localization issues. The ability to run tests from 80+
countries (currently in beta) also means that local censorship can be detected.

Automatic tests can be performed with one of the
[many frameworks](https://www.browserstack.com/docs/automate/selenium)
available, or integrations configured for popular CI/CD tools such as Bitbucket
Pipelines, GitHub Actions and CMS such as WordPress and Shopify. An API is
available for retrieving project details, build details, downloading test logs
for debugging and updating/deleting projects and builds.

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

Testing on real devices comes with a few caveats, most notable of them being
network latency during live testing. Response time between clicks and page
update ranges from moderate to high (depending on the availability of testing
devices in your nearest region) which sometimes makes it looks like the system
has ceased responding. Remote debugging via
[dev tools](https://developer.chrome.com/docs/devtools/remote-debugging/) is not
available on mobile devices.

The majority of Android devices offered are by Samsung or Google; the list of
devices offered by other vendors is sparsely populated. The number of devices
available varies with the framework used for testing. The history of live tests
performed is not available in the dashboard and it is not possible to record the
screen during live testing. Any bugs discovered during live testing can only be
shared via a screenshot; this makes reproducing bugs and sharing reports harder.

The number of tests that can be queued during automated testing is low unless
you pay more. This limit is reached frequently and feels obstructive, especially
if you have a large collection of testing environments because there is no way
to view or edit the
[test queue](https://www.browserstack.com/docs/automate/selenium/queue-tests)
via the dashboard.

[Accessibility testing](https://www.browserstack.com/docs/automate/selenium/accessibility-testing)
is performed via
[Axe](https://www.deque.com/axe/core-documentation/api-documentation/) and
returns a JSON object containing the accessibility report, which is not very
user-friendly and cannot be viewed without some processing. Although it provides
all the details, such as the Xpath of elements, there are better tools available
such as [Polypane](#polypane) for accessibility testing which provide graphical
feedback and deeper insights.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="lambdatest" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="LambdaTest" anchor="lambdatest" thumbnail="/img/favicons/www.lambdatest.com.jpg" url="https://www.lambdatest.com/" score="4.7" >}}

LambdaTest is one of the newer tools in the cross browser testing market. It has
a clean UI, large number of test devices and an interesting desktop application
(LT Browser) which offers live testing functionality locally.

{{< img-center src="/img/tools/browser-testing-lambdatest.png" alt="LambdaTest product screenshot" width="100%" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< tools/category-review/card-cost--open highlight="Although LambdaTest offers a free plan with a limited testing quota (which resets every month), a premium subscription is needed for unlimited live and automatic cross browser testing. This starts at $19/m (live testing) and $119/m (automatic testing) with 1 parallel execution." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Devices and browsers supported" score="4" >}}

LambdaTest offers
[2000+ different combinations](https://www.lambdatest.com/list-of-browsers) of
browsers and devices to perform interactive cross browser compatibility testing
of websites and web apps. All tests are currently executed on emulators, not
real devices. Real device support is planned for a future release.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Automation" score="5" >}}

End-to-end automated tests can be executed in the cloud using the Selenium or
Cypress frameworks. LambdaTest has a collection of
[60+ integrations](https://www.lambdatest.com/integrations) including GitHub,
GitLab, Azure Pipelines, and Google Cloud CI to integrate into CI/CD workflows.
CMS systems such as Wordpress and Shopify can be directly integrated with
LambdaTest to provide a seamless testing experience.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Debugging & Error reporting" score="5" >}}

Debugging failed tests is a smooth process because testing metadata, network
requests, test framework logs and a list of commands executed are presented in
the test report. LambdaTest has an inbuilt issue tracker which can be used to
assign bugs/tasks to team members.

Bugs/tasks can be generated from the testing dashboard or
[LT Browser](https://www.lambdatest.com/lt-browser) and can be tracked according
to assigned priorities. Issues can be shared directly with team members via
email or can be exported to PDF/Excel format, however test reports cannot be
shared directly - screen capture videos and logs can be downloaded. Integrations
for other project management and issue tracking tools such as Jira, Asana,
Trello, GitHub, GitLab etc. can also be used while testing.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

LambdaTest doesn't just provide testing infrastructure but a whole range of
features such as an inbuilt issue tracker, automated full page screenshot tool
and smart testing of rendered pages to compare against previous runs. Tests can
be distinguished by project name, version numbers and build names which makes it
easy to keep track of as part of your development process.

[LambdaTest Tunnel](https://www.lambdatest.com/local-page-testing) securely
connects locally hosted web apps to testing servers via SSH without ever needing
to expose them to the public internet. Tunnels can be established using a
desktop application, npm plugin, GitHub Action or executing a binary file over
the command line. Lambda Test is also SOC2 Certified.

LambdaTest allows testing for geo targeting, geo blocking, and geo localization
features like language translation, currency change and time zone changes across
27+ countries. The connection can be rerouted during live testing without
noticeable latency. Live testing sessions are provided with integrated developer
tools to debug issues in live testing. Unlike many other tools we tested, audio
from test devices was available.

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

The biggest limitation of LambdaTest is the lack of availability of real devices
in the testing cloud - all the tests are currently executed on a simulator. A
large portion of internet traffic comes from mobile devices so not being able to
test natively on mobile devices might result in shipping some bugs to
production.

Another limitation is that tests can only be automated using Selenium or
Cypress - other frameworks like Playwright, Puppeteer, etc. are not yet
supported.

LambdaTest favours Chrome over other browsers. The testing dashboard shows a
banner saying “use Chrome for better performance” when using any browser other
than Chrome. Live testing on Firefox performs poorly when compared to Chrome and
devtools are also not available in Firefox (for that session). Video playback
and scrolling actions suffer heavily in non Chrome-based browsers due to high
response times.

LT Browser, which can be used to perform live testing and report bugs from local
devices, is in early development. When compared to similar tools like
[Polypane](#polypane), it lacks many features and is only slightly better than
just testing in everyday browsers such as Chrome or Firefox. Performance reports
generated in LT Browser take a long time to generate and tabs cannot be
separated into different windows. This will eventually become an interesting
feature, but right now it feels very early.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="smartbear-crossbrowsertesting" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="SmartBear CrossBrowserTesting" anchor="smartbear-crossbrowsertesting" thumbnail="/img/favicons/crossbrowsertesting.com.png" url="https://crossbrowsertesting.com/" score="4.3" >}}

In addition to live and automatic testing, SmartBear CrossBrowserTesting offers
features such as screenshot testing and codeless testing using AI to record and
replay interactions on screen. It offers 2,000+ target browsers and mobile
devices.

{{< img-center src="/img/tools/browser-testing-smartbear-crossbrowsertesting.png" alt="SmartBear CrossBrowserTesting product screenshot" width="100%" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< tools/category-review/card-cost--open highlight="Plans start at $39/m for live testing and $169/month for automated testing. Open Source projects can get access to testing environments for free." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Devices and browsers supported" score="5" >}}

CrossBrowserTesting provides 2,000+ browsers and real mobile devices for live
and automated testing. Headless browsers (on Ubuntu) are available for testing
non UI elements. All major versions of Windows (including 32 bit versions) and
macOS are available with several versions of multiple browsers. Android and iOS
devices with versions going as far back as Android 4.2 and iOS 4.3.3 are
available. Support for obscure browsers such as Dolphin Mobile, Maxthon Mobile,
Sleipnir Mobile, UC Browser and Camino is also available.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Automation" score="4" >}}

CrossBrowserTesting
[offers integrations](https://crossbrowsertesting.com/automated-testing/integrations)
with multiple CI/CD tools like Jenkins CI, TeamCity, VS Team Services, etc.
Testing frameworks for PHP, NodeJS and Python such as Behat, Codeception,
Cucumber, Karma, Lettuce, Mocha, etc. can be used for behavior-driven and
test-driven development. CrossBrowserTesting offers interesting AI assisted
visual comparison functionality through
[Applitools](https://support.smartbear.com/crossbrowsertesting/docs/visual-testing/applitools.html).

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Debugging & Error reporting" score="4" >}}

Test results and relevant logs are shown next to each step which makes them easy
to navigate. Video recordings and any screenshots captured during the testing
are available with the test reports to make the debugging process easier. Notes
and tags can be added on each test report which can be used to filter a subset
of tests that can be shared in bulk with team members via multiple options like
a public link, Slack, Jira and email.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

Live testing can be performed on a large number of devices, and we particularly
like the availability of unusual browsers like Opera Mini, Samsung Internet,
Microsoft Edge Mobile, etc. Devtools are available while live testing and
network request logs are presented using an easy-to-understand gantt chart with
details like request & response headers, connection, sending, waiting and
receiving time for each network request to find performance bottlenecks.

Record & replay functionality allows recording interactions with websites
without touching a single line of code. Tests can be combined to create suites
and played back later or scheduled to perform “automated-manual” testing.

Bulk screenshot testing runs dozens of browsers in parallel and performs
regression testing to identify layout differences against a baseline run.
Certain actions such as HTTP authentication, form login, or injecting delays can
be performed before capturing screenshots directly from the dashboard. Other
interactions can be performed by executing a Selenium script before capturing
screenshots. Results from the test can be notified via email or can be sent to
Applitools for inspection.

Tests can be performed on internal websites behind a firewall by creating a
secure web socket (WSS) tunnel from the client machine to a remote server. A
simple static HTTP server with read only access can be created to test static
web resources in a directory. External proxy services can also be connected to
establish a connection. Local tunnels can be established via
[Chrome extension](https://chrome.google.com/webstore/detail/crossbrowsertesting-local/ldabplgpogjknofonmccpbgeoolbcbfm),
NodeJS module, desktop app or command line.

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

Network latency in live testing, especially when performing local testing, is on
the higher end of the spectrum of the tools we tested. Sound has a poor bitrate
and video quality is low during live testing. iOS devices only support Safari,
and Chrome is available only in a few recently launched iPhones.

One thing that stood out was that automated accessibility testing cannot be
performed using CrossBrowserTesting. The only available option is to perform a
screenshot test which gives
[a Lighthouse report](https://support.smartbear.com/crossbrowsertesting/docs/integrations/lighthouse.html)
with a section on accessibility. This feature is already built-in mainstream
browsers such as Chrome so should really be available for automated testing.

Automatic record & replay poorly mimics the recorded steps and struggles with
scroll actions. We found that recording steps with a trackpad on a laptop causes
sporadic clicks. In our experiments, running the test immediately after
recording (without any edits) failed just after page load.

Although the dashboard is functional, it misses some features. Reasons for test
failure are not immediately visible and sometimes only evident after watching
the video recording or scouring through raw logs. Other tools prominently
highlight test steps that fail.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="sauce-labs" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="Sauce Labs" anchor="sauce-labs" thumbnail="/img/favicons/saucelabs.com.jpg" url="https://saucelabs.com/" score="4.2" >}}

Sauce Labs is a full-scale testing platform for websites and applications that
supports test frameworks such as Selenium, Playwright and Puppeteer on a large
number of popular device, browser and operating system test targets.

{{< img-center src="/img/tools/browser-testing-sauce-labs.png" alt="Sauce Labs product screenshot" width="100%" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< tools/category-review/card-cost--open highlight="Sauce Labs is priced at $49/m for manual testing and $199/m and $249/m for automated virtual device and real device testing. Pricing increases with more parallel tests." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Devices and browsers supported" score="4.5" >}}

Sauce Labs offer
[a vast number](https://saucelabs.com/platform/supported-browsers-devices) of
choices for browser and desktop environments. Approximately 50 latest releases
of Firefox and Chrome are available on each version of Windows and macOS. Recent
releases of Edge, Safari and Internet Explorer are also offered for desktop
testing. Mobile testing can be performed on 240+ real devices and OS images for
the latest Android 12/iOS 15 releases are available, with history going all the
way back to Android 6/iOS 10. An even wider range of mobile testing environments
are available as emulators/simulators.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Automation" score="4" >}}

Sauce Labs can [integrate](https://saucelabs.com/platform/integrations-plugins)
directly with Jenkins, Bamboo, TeamCity, Travis CI and CircleCI as well as
offering its own Continuous Testing Cloud. This enables the automation of the
setup and teardown processes for test builds, video recordings and configuration
of test parameters such as source control branches or connections via proxy. An
API is available for advanced users who prefer working in a terminal as opposed
to GUI dashboards.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Debugging & Error reporting" score="4" >}}

The dashboard and reports are neatly segregated by live and automated tests,
then further subdivided into tests run on real and virtual devices. Video
recordings and logs of all tests are available for each test step. Additional
insights into the tests can be gained by passing parameters during test launch
to capture network requests and generate a Lighthouse report to measure page
performance. The dashboard generates a summary of all tests conducted and
displays graphs to visualize trends such as pass/fail rate, number of errors
etc. over a period of time. Visibility of results can be set to the public, team
or private and the summary results can be posted to Slack or integrated into
other systems via a webhook. New Jira Issues can be automatically created
directly from the test results page for any completed job.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

Sauce Labs offers testing against thousands of the latest browsers, iOS and
Android devices. Testing devices that are not available or require a special
setting can be purchased and added to a
[private cloud](https://docs.saucelabs.com/mobile-apps/supported-devices/index.html#private-device-cloud)
for dedicated usage within organization accounts.

[Multiple frameworks](https://saucelabs.com/platform/automation-tools)
(Selenium, Cyprus, Playwright, Puppeteer etc.) are supported for automated
testing and existing tests can be easily modified to work on Sauce Labs.
Automated visual testing can be performed on React, Vue, and Angular components
via integration with Storybook using the
[Sauce Visual](https://saucelabs.com/platform/visual-testing/visual-component-testing)
product. This allows testing UI components in isolation, enabling components to
be tested individually and in mocked states. Performance can also be analyzed by
capturing metrics such as Time to First Meaningful Paint, Time to First
Interactive, Page Weight, Speed Index etc. and comparing application performance
against baselines established by ML algorithms.

Live testing on real devices shows useful on-device metrics such as internet
traffic, number of process threads and CPU/Memory usage. Headless browsers are
available to speed up automated testing of non UI elements. Text snippets can be
sent and retrieved from keyboards on virtual machines and window resolution can
be changed to desired configurations. Live testing sessions can be shared in
real-time, and video recordings or screenshots captured during tests are
available for download.

Sauce Proxy securely connects local machines to testing servers. Sauce Labs
provides a powerful API and almost anything which is possible via the dashboard
can be performed via the API. Training resources are available in multiple
languages and customer support is available around the clock.

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

Sauce Labs is one of the oldest and most mature browser testing software tools,
which means that it has accumulated some technical debt. The most frustrating
part about testing on Sauce Labs is having to use different API endpoints and
URLs for each of the groups of test devices available in their various data
centers. While some users may enjoy additional control, it provided no clear
benefit to us and only added confusion. Other tools abstract away this
complexity by automatically handling and routing requests to data centers and
showing a unified dashboard for all tests, which in our opinion is the preferred
approach.

Although Sauce Labs offers some great integrations, the ecosystem as a whole
feels limited because many newer integrations like GitHub Actions, GitLab CI are
missing. Due to the limited number of integrations, working with unsupported
tools is harder than it needs to be. For example, the only bug reporting
integration is with Jira, so you need to figure out how to get the test results
into the issue tracking system you use. Debugging functionality is limited as
most of the advanced features such as data redaction, querying, sorting and
grouping by the captured log attributes are bundled into
[an independent service](https://backtrace.io/) which needs to be purchased
separately.

Live testing on real devices suffers from high latency which is prominent when
scrolling or typing on devices - feedback after input can take >1.5 seconds
which makes the testing process slow and irritating. Videos played on real
devices do not transmit audio to the testing dashboard and have a low FPS which
makes them difficult to use. Browser devtools are only available when using
Chrome to test on real Android devices and even when they are available, they
too suffer from poor network latency. Each real device only has one browser
available (Safari on iOS and Chrome on Android) and it’s not possible to test
against other browsers on mobile devices.

We also found device settings were not consistently reset between test runs, and
some devices had a system language set that did not match our browser settings
e.g. we were testing in English but the devices defaulted to Arabic. Restarting
the test fixed this. This may indicate that devices are not wiped between tests.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="ghost-inspector" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="Ghost Inspector" anchor="ghost-inspector" thumbnail="/img/favicons/ghostinspector.com.png" url="https://ghostinspector.com/" score="3.5" >}}

Ghost Inspector is a cloud browser compatibility testing tool that stands out
for its support for testing 2FA and end-to-end email flows. Testing can be
automated on a schedule or via an API, as well as manually via the web UI, but
it only supports Chrome and Firefox on desktop.

{{< img-center src="/img/tools/browser-testing-ghost-inspector.png" alt="Ghost Inspector product screenshot" width="100%" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< tools/category-review/card-cost--open highlight="Starts at $99/m with pricing increased based on the number of tests or team members" >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Devices and browsers supported" score="2.5" >}}

Ghost Inspector can run tests with various versions of Chrome and Firefox. The
resolution of the browser window on the testing machine can be changed to
imitate a wide range of screen sizes including mobile and tablet for testing
responsive designs. An unknown operating system is used to run tests and neither
real nor virtual mobile devices are supported.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Automation" score="4" >}}

Tests can be [integrated](https://ghostinspector.com/docs/integration/) with
popular continuous delivery services such as AWS CodePipeline, Azure DevOps,
GitHub Actions and Bitbucket Pipelines, or can be triggered on deployment to
hosting platforms like Netlify and Heroku. Tests can be triggered via dashboard,
API, npm package, at selected dates and times or scheduled to run at set
intervals.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Debugging & Error reporting" score="4" >}}

Every step in test reports is color coded which makes it easy to identify which
steps were passed/failed and which steps were skipped. Console output logged
during testing and test reports from previous runs of the same test is available
to review. Test results can be alerted through Slack, PagerDuty and Microsoft
Teams. Test reports and execution history are available for download in JSON and
CSV formats.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

Ghost Inspector can test functionality of websites and web apps on multiple
browsers with different user agents and screen sizes. Visual testing is possible
by capturing screenshots of specific elements or the entire screen and comparing
them with the previous baseline to detect changes. Video recordings of all tests
and output logged in the console is also available for review which makes the
debugging process easier.

Tests can be generated using a web extension available for Chrome and Firefox
which records the actions performed on a webpage and then saves the results to
Ghost Inspector cloud. Tests can be as simple as loading a page and asserting a
value or can be built to perform multi-step transactions, such as completing a
2-factor authentication flow. Common steps across tests can be written once and
imported like a library in other tests. A NodeJS package can be used to write
and run advanced test cases which can’t be constructed with the web editor. All
tests can be
[imported and exported](https://ghostinspector.com/docs/selenium-import-export/),
either to Selenium’s IDE or Ghost Inspector JSON format, to store in version
control.

All tests are performed in parallel by default, unlike other tools which run
sequentially and charge extra for parallel testing. Mailboxes are provided to
receive test emails which are purged 1 hour after they are received. Integration
of this into the testing flow means Ghost Inspect can support full end-to-end
testing of SMS and email workflows.

Ghost inspector can test pages for accessibility issues against
[Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
2.0 and 2.1. These checks list the problems found on the page, a description of
the issue, and the Xpath of problematic components, grouped according to
priority.

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

Ghost Inspector only supports Firefox and Chrome. Including Chrome means the
most popular browser is covered, the missing support for Safari means a major
platform is missing. Tests made with the browser extension can only serve as a
starting template and the tester needs to scrutinize and edit them before
execution. Moreover, if the browser switches tabs during recording, the test
gets tainted with unnecessary steps from actions performed on other pages.

Some common features offered by other tools are missing. For example, there is
no option available to change the operating system used by VMs, neither real nor
virtual mobile devices are available to conduct tests, and live testing is not
supported.

There are some potential security risks that users need to pay attention to. For
example, all test URLs need to be publicly available on the internet or a proxy
should be used to provide access to internal environments. Although the IP
addresses of the testing servers are provided for whitelisting, this introduces
additional configuration requirements and opportunities for mistakes. Further,
test emails are also publicly available (if you know/guess the inbox address)
until they are deleted after 1 hour.

Although they boast support for 2FA, this needs a subscription to Twilio to
[receive 2FA SMS](https://ghostinspector.com/docs/common-testing-scenarios/#sms-otp).
Data driven testing is limited to a maximum of 10 tests in one run. Some browser
functionality such as IFrames and alert boxes are hard to test, whereas other
features such as the web camera and HTTP3 are not supported.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="selenium" >}}

{{< tools/category-review/card--open >}}

{{< tools/category-review/card-top--open >}}

{{< tools/category-review/card-heading name="Selenium" anchor="selenium" thumbnail="/img/favicons/www.selenium.dev.png" url="https://www.selenium.dev/" score="2.5" >}}

Selenium is a web application testing framework available for Java, Python, C#,
Ruby, JavaScript and Kotlin. It is built for automated testing on desktop
devices and acts as a backbone service to many other tools discussed in this
article, but is not recommended for use by itself.

{{< img-center src="/img/tools/browser-testing-selenium.png" alt="Selenium product screenshot" width="100%" >}}

{{< div--close >}}

{{< tools/category-review/card-bottom--open >}}

{{< tools/category-review/card-cost--open highlight="Selenium is free and open source." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Devices and browsers supported" score="3" >}}

Selenium is available on Windows, macOS and Linux. Drivers for popular browsers
such as Chrome, Edge, Firefox and Safari are directly supported by their
developers at Google, Microsoft, Mozilla and Apple. Most other automated browser
testing tools don’t support testing on Linux so this might be the only choice in
some cases. Testing on mobile devices is not directly supported, but
[there are workarounds available](https://saucelabs.com/blog/can-selenium-be-used-for-mobile-testing)
to achieve that.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Automation" score="3" >}}

Since it is open source, the number of integrations possible are endless, but
there are no integrations available out of the box. Advanced users may develop
their own solutions but most people rely on libraries developed by the
community, many of which are unfortunately seldom updated or abandoned by
maintainers.

Plugins and libraries can be used to integrate with CI/CD tools like Azure
Pipelines, Jenkins,
[GitLab CI](https://docs.gitlab.com/ee/ci/examples/end_to_end_testing_webdriverio/#configuring-gitlab-cicd)
and bug tracking tools like Jira, but there is no straightforward way to
integrate with Slack. Since support is community-driven, the development of
plugins can be slow and security vulnerabilities might take longer to resolve.
For example,
[the Selenium plugin for Jenkins](https://plugins.jenkins.io/selenium/) gets
2000+ downloads every month even though it has had a
[known security vulnerability](https://www.jenkins.io/security/advisory/2020-06-03/#SECURITY-1766)
since 2020.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< tools/category-review/card-feature-title text="Debugging & Error reporting" score="1.5" >}}

Selenium is
[not designed](https://www.selenium.dev/documentation/guidelines/improved_reporting/)
to report on the status of test cases run - the default way of generating
results in Selenium is to log to console, which makes sharing reports and
collaborating on large projects cumbersome. GUI reports cannot be generated out
of the box, although some third-party solutions such as
[JUnit](https://junit.org/junit5/), [TestNG](https://testng.org/doc/), and
[Extent](https://www.extentreports.com/) reports are available. This eases the
process of test case management to some extent.

{{< div--close >}}

{{< div--close >}}

{{< tools/category-review/card-like--open >}}

Selenium was first released in 2004 and has stayed relevant for almost two
decades. Many other browser compatibility testing tools are built on Selenium
Grid, a tool that distributes the tests across multiple physical or virtual
machines. It is therefore supported by many of its competitors who actively
contribute back to the project because of their own usage. It is a safe
assumption that it will be here for a long period of time.

Using Selenium Grid, tests can be scaled from execution on a single machine to
parallel executions on servers deployed across the globe; the number of tests
performed simultaneously is only limited by hardware capabilities. Testing
environments can be fine-tuned according to requirements and it provides
granular control over how data is handled and stored. Network egress costs and
security concerns are minimized because testing traffic never leaves the local
network.

Selenium provides advanced capabilities such as manipulating browser cookies,
drag & drop mouse actions, transfer of files from the client machine (hub) to
the remote server (test node), capturing screenshots, switching window tabs and
setting browser profiles in Firefox.

Selenium 4 beta was recently released and it adds native support for the Chrome
DevTools protocol which gives more control over properties such as Application
Cache, Fetch, Network, Performance, Profiler, Resource Timing, Security and
Target CDP domains etc. Many other testing tools have quickly added support for
Selenium 4.

{{< div--close >}}

{{< tools/category-review/card-dislike--open >}}

Selenium was built for automating desktop browsers, so it focuses only on that.
It does not provide a good solution for automated visual testing and all the
testing is based on whether the content was displayed or not. This is a major
limitation in the fast paced world of web development where developers perform
A/B testing on the smallest of UI elements to maximize conversion rates and
engagement. Selenium follows a
[philosophy](https://www.selenium.dev/documentation/guidelines/domain_specific_language/)
that the UI is a secondary concern for users.

Other tools make results easier to read by adding visualizations in the form of
charts and tables, but Selenium does none of those things. It was not designed
to report on the status of test executions. Not being able to share the reports
with stakeholders is a major limitation. Test case management and error
reporting need to be handled by third party software.

Selenium Grid requires the availability of actual or virtual Windows/macOS/Linux
machines and mobile devices on the network with browsers installed. Initially
setting up a grid takes a long time compared to other solutions available on the
market. Updating the machines and trying to match the number of browser
combinations offered by other tools quickly causes the infrastructure cost to
spiral out of control. Time and effort spent in setting up infrastructure for
small projects is impractical for all but the largest teams - even then it may
be more efficient to pay a provider to do this for you.

When
[60% of global traffic comes from mobile devices](https://www.perficient.com/insights/research-hub/mobile-vs-desktop-usage),
it is somewhat outdated that Selenium does not directly support testing on
mobile. Two other solutions, namely [Appium](https://appium.io/) and
[Selendroid](http://selendroid.io/), are available to solve this by implementing
mobile tests using Selenium.

As opposed to some no-code solutions, Selenium requires a good grasp of one of
the supported programming languages. There is a steep learning curve,
documentation is sometimes inconsistent and not all features are implemented in
all the languages. The only tech support available is on community forums.
Eventually, it becomes a parallel development project.

Selenium is, therefore, better used as a test framework executed by one of the
other tools in this review. Writing tests in Selenium means they are compatible
across multiple services, but using it standalone would be unusual in 2021.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="also-considered" >}}

#### Also considered

We considered [QA Wolf](https://www.qawolf.com/) but it did not meet our
[selection criteria](/about/#selection-criteria) as it requires us to schedule a
call with a sales representative before sign-up. We examined
[TestComplete](https://smartbear.com/product/testcomplete/overview/) and
[Ranorex](https://www.ranorex.com/) but as they only support Windows, we
excluded them from our review.

We also tested the following 4 tools but they did not meet our criteria for a
full review:

{{< nav-wrapper--open anchor-name="polypane" >}}

{{< tools/category-review/card-heading name="Polypane" anchor="polypane" thumbnail="/img/favicons/polypane.app.png" url="https://polypane.app/" score="none" >}}

Polypane is a multi-pane browser made for web testing using different window
sizes with scrolling sync. Whilst it supports Windows, Linux and macOS, it can
only test Chrome due to being built with the Chromium browser engine.

Polypane provides an excellent experience for responsive testing. It comes with
all popular viewport sizes configured by default and allows the option to add
custom breakpoints. Panes can emulate desktop or mobile devices to have custom
values for modern CSS presets such as `prefers-reduced-data` and
`prefers-color-scheme`. Panes can also simulate visual impairments like
cataract, far-sightedness and 8 types of color blindness. Accessibility testing
can be performed in panes via A11y and Tota11y.

All panes are rendered separately and CPU usage momentarily spikes to 100% when
switching tabs. Polypane disguises this as a feature
[by saying](https://polypane.app/docs/website-issues-you-could-encounter/#performance-issues)
“Those bottlenecks were always there on the testee website, Polypane just
enlarges them.” Yet, no significant improvements were noticed while loading a
simple HTML page on localhost. Resource hogging features like video, canvas and
iframe elements sometimes need to be disabled to keep CPU usage in check.

Working with a large number of panes is difficult on small or medium sized
screens. The UI needs a wide screen to use comfortably. Moreover, when caching
is not enabled on the website, all panes make independent network requests. This
can be an issue with form submits or rate limited APIs. Tabs can not be
separated into multiple windows to view multiple URLs.

Polypane is a good product for its intended purpose - local testing of
side-by-side windows, but it is not designed for general browser testing, which
is the subject of this review. As such, we didn’t select it for a full review.

{{< img-center src="/img/tools/browser-testing-polypane.png" alt="Polypane product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="responsively" >}}

{{< tools/category-review/card-heading name="Responsively" anchor="responsively" thumbnail="/img/favicons/responsively.svg" url="https://responsively.app/" score="none" >}}

Responsively is an open source multi-pane browser built using
[Electron](https://www.electronjs.org/). It has built-in support for popular
device sizes and allows adding custom dimensions which makes it is useful for
testing responsive web pages. It is possible to install a browser extension (on
Firefox, Chrome, and Edge) to send links from the browser to the Responsively
app and preview them instantly.

Responsively comes with a live CSS editor and a design mode which makes the
process of temporarily applying design rules and updating content easier. It is
possible to delete cookies, storage session data, and reset the network cache
with the click of a button. Other actions such as throttling the network or
loading the website via proxy are also supported. Users can add extensions from
the Chrome web store. However, the Responsively developers warn that the
extensions may not work as intended.

Unlike [Polypane](#polypane), users can disable event mirroring across the panes
and take screenshots of individual panes in bulk. However, in our testing
Responsively didn’t capture screenshots until the cursor was hovering over the
pane. Similar to Polypane, it is also CPU intensive.

Responsively is designed for responsive web testing - not for automated cross
browser testing. As such, we didn’t select it for a full review.

{{< img-center src="/img/tools/browser-testing-responsively.png" alt="Responsively product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="functionize" >}}

{{< tools/category-review/card-heading name="Functionize" anchor="functionize" thumbnail="/img/favicons/www.functionize.com.png" url="https://www.functionize.com" score="none" >}}

Functionize only supports testing on Chrome and needs an Chrome extension to
make tests, which makes it impossible to make tests on any other browser. The
dashboard feels unpolished and has a few quirks. For example, at the time of
writing, trying to create tests on Firefox opens an empty box which gives very
little idea what went wrong, whereas performing the same action on Chrome
browser opens the web extension. The dashboard also needs to be refreshed to
load changes and updates to tests.

Although Functionize does provide some advanced functionality such as creating
web hooks, self healing tests, setting HTTP headers & cookies, it still lacks
important functionality such as multiple browser and OS support. As such, we
excluded it from our review.

{{< div--close >}}

{{< nav-wrapper--open anchor-name="browsersync" >}}

{{< tools/category-review/card-heading name="Browsersync" anchor="browsersync" thumbnail="/img/favicons/browsersync.io.png" url="https://browsersync.io/" score="none" >}}

Browsersync is available as a free NPM package which syncs browser states and
interactions such as click, scroll, form input and submit on multiple devices in
different browsers. Coding skills are required to set it up properly but
[a few recipes](https://github.com/BrowserSync/recipes) are available which
demonstrate basic functionality and can be used as starter templates.

It can be used to host static files and update web pages when any file is
updated or can be connected as a proxy to a website already hosted on a server.
We like that the code is open source which allows you to write your plugins to
extend functionality.

Browsersync does a good job of basic live testing but other tools we reviewed
provide far more functionality for browser testing.

{{< img-center src="/img/tools/browser-testing-browsersync.png" alt="Browsersync product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="mabl" >}}

{{< tools/category-review/card-heading name="Mabl" anchor="mabl" thumbnail="/img/favicons/www.mabl.com.jpg" url="https://www.mabl.com/" score="none" >}}

Mabl can be installed on Windows, macOS and Debian-based Linux distributions,
but requires installation of Chrome to be able to make and execute tests. It can
do live testing, headless testing and automated testing on the local machine as
well as in the cloud.

Mabl claims to be a low-code test automation alternative to Selenium. Tests can
be created by reusing existing snippets (in Javascript) and flows (like a
function, such as a scripted login step) which eliminates code duplication.

It can integrate with CI/CD tools to automate tests as well as with analytics
tools such as [Segment](https://segment.com/) and
[BigQuery](https://cloud.google.com/bigquery) to gain deeper insights into fail
cases and analyze trends. It can do
[email testing](https://help.mabl.com/docs/email-testing),
[PDF testing](https://help.mabl.com/docs/pdf-testing) and data driven testing.

At the time of writing, the dashboard did not render properly, especially in
dark mode. This leaves a poor impression and looks like it is still in the early
stages of development. Failure to test their own dashboard on multiple browsers
is strange considering they provide browser testing services.

Mabl is promising, however, it feels like it is still very early and has a lot
of rough edges. We hope to revisit this tool in the future.

{{< img-center src="/img/tools/browser-testing-mabl.png" alt="Mabl product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-9" anchor-name="faq" >}}

### FAQ

{{< tools/category-review/faq category="browser-testing" >}}

### Related categories

{{< tools/category-review/related-categories >}}

{{< nav-wrapper--open id="wrapper-10" anchor-name="editorial-policy" >}}

### Our editorial policy

#### Why you can trust us

Console is written by developers for developers. Using our decades of experience
building software at scale, we apply strict
[selection criteria](/about/#selection-criteria) to decide which software we
feature.

This includes asking questions like "Would this form part of a daily-use set of
developer tools?", "Would this be used by advanced, power-users?" and "Does it
have a good graphical and/or command line interface? Shortcuts? Accessibility?".
The more of these questions we can answer positively, the more likely a tool is
to be featured.

We **do not** accept payment for inclusion and where we work with partners, they
must fit our selection criteria before we consider working with them.

{{< div--close >}}
