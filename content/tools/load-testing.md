---
title: "The Best Load Testing Tools For Developers - Console"
titlePrefix: "The best"
titleCategory: "load testing"
titleSuffix: "tools for developers"
date: 2021-09-29T12:00:00+00:00
draft: false
summary:
  "The best load testing tools for developers: Flood, k6, Locust, Loadster,
  Gatling, Apache JMeter. 11 load testing tools reviewed."
metaDescription:
  "The best load testing tools for developers: Flood, k6, Locust, Loadster,
  Gatling, Apache JMeter. 11 load testing tools reviewed."
headerType: fixed
hideLines: true
hidePlanes: true
type: tools
layout: simple
isPage: tools
isSubpage: load-testing
customStyle: false
customPageStyle: false
category: developer-tools
subcategory: load-testing
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBioBrief:
  From 2009-2018 David was CEO at Server Density, a SaaS server monitoring
  startup. He has been a developer for 15+ years and is now co-founder of
  Console.
authorBio:
  is co-founder of Console. From 2009-2018, David was CEO at Server Density, a
  SaaS server monitoring startup used by hundreds of customers to collect
  billions of time series metrics from millions of servers. He is also a
  researcher in sustainable computing at Uptime Institute and affiliated with
  Imperial College London. David has been a developer for 15+ years.
---

Load testing tools help understand whether your infrastructure can handle a
large spike of traffic and how fast pages load. The best load testing tools
provide scriptable test plans, protocol- and browser-level test execution, and
for this review must also have a developer focus.

We tested 11 load testing tools using our independent
[selection criteria](/about#selection-criteria) and the requirements described
below. The best 6 load testing tools for developers and engineers in
{{< year >}} are:

1. [Flood](#flood)
2. [k6](#k6)
3. [Locus](#locust)
4. [Loadster](#loadster)
5. [Gatling](#gatling)
6. [Apache JMeter](#apache-jmeter)

In this article, we explain why. We assessed the key features all load testing
tools should have from the perspective of an experienced developer.

#### What is the difference between load testing and browser testing?

Load testing is focused on sending lots of requests to simulate a traffic spike
or a sudden influx of users. It examines the infrastructure with a focus on
errors and measuring response time. This can be achieved through protocol-level
requests to HTTP, WebSockets or API endpoints, but can also be implemented using
browser simulations.

Testing with a real browser is important to ensure that the page resources load
and the pager renders quickly. Protocol-level testing does not load all the
extra resources a page may reference, such as third party scripts or images.
Browser-level testing load everything, which means the infrastructure gets fully
tested.

Browser testing is focused on browser compatibility to ensure that the web page
renders correctly across different versions and platforms.
[The best browser testing tools](/tools/browser-testing/) allow tests on many
different browsers, including older versions and mobile browsers. The browser
version or platform do not matter for load testing.

{{< nav-wrapper--open id="wrapper-1" anchor-name="requirements-above" >}}

### Requirements

There are a large number of load testing tools available on the market. For each
of our load testing tool reviews we will assess functionality based on our
[standard selection criteria](/about/#selection-criteria) plus these three
requirements:

#### Scriptable test plans

Load testing is just another component of code, so the test definitions should
live alongside it in the source repo. This means the test plan must be able to
be exported to a text format that can be stored in version control. Better if it
can be executed directly from it.

#### Protocol and browser test execution

Sending lots of HTTP requests tests the performance of the infrastructure but
does not accurately measure how users experience the service. Browsers must
download multiple resources, parse the page, render HTML and CSS and then
execute Javascript. A very fast HTTP response might be slow when rendered in a
browser. We need to test both. Ideally, load testing tools should support both
protocol- and browser-level testing.

#### Developer focus

There are lots of load testing tools that have badly designed UIs or limited
configuration options. These might be ok for non-technical users, but developers
need more sophisticated tools. This means the ability to customize requests,
detailed reporting, scripting, integration with CI/CD for tests on commit /
regression testing, a CLI and a nicely designed dark mode if there is a GUI.

### Best load monitoring tools

We reviewed 11 load testing tools. The best is: [Flood](#flood). We also liked
[k6](#k6) and [Locust](#locust).

{{< nav-wrapper--open anchor-name="flood" >}}

### Flood

[Flood](https://www.flood.io/) is a cloud hosted performance and load testing
service that supports running existing JMeter, Gatling or Selenium tests. It
also has its own online test builder for executing HTTP requests.

#### Summary

- Cloud hosted with the option to run tests from your own infrastructure.
- Supports protocol-level test scripts in JMeter or Gatling, or browser-level
  test scripts in Element or Selenium.
- Tests are based around defined Service Level Objectives (SLOs).

{{< img-center src="/img/tools/load-testing-flood.png" alt="Flood product screenshot" width="100%" >}}

#### Review

Flood have built their own open-source browser-based load generation tool called
[Element](https://element.flood.io/) which can be used independently, or with
Flood’s cloud service. Element uses [Playwright](https://playwright.dev/), an
open source NodeJS library, which allows you to script user interaction with
Chrome, Safari and Firefox browsers.

The combined support for multiple load testing frameworks means you can use
Flood to execute both protocol-level tests (with JMeter or Gatling) as well as
browser-level tests (with Selenium or Element).

Flood load tests are based around Service Level Objective (SLO) monitoring
criteria such as concurrent users, failed/passed transactions, response time,
throughput or transactions per minute. Once defined, you can launch a test from
specific regions over a period of time, with the option to ramp up requests.
These can be triggered from the web UI, via the Flood API or through integration
with CI/CD services like Jenkins, GitHub, CircleCI and Travis CI.

One of my favorite features is the ability to use Flood with your own
infrastructure. You can connect AWS, Azure or Google Cloud, or run the agent on
servers elsewhere. Flood will then coordinate the load testing on your own
systems so you don’t incur additional costs. Flood even supports AWS EC2 spot
instances, which can be very cost effective.

Flood is my favorite load testing tool because of its flexibility to work with
different scripting frameworks as well as the control it offers over the
infrastructure. As a developer, I appreciate the cross-platform/framework
approach because it allows you to define all your test plans in code, which is
where they should be.

{{< nav-wrapper--open anchor-name="k6" >}}

### k6

[k6](https://k6.io) is a scriptable load and performance testing command line
interface (CLI) tool. Test scripts are written in Javascript or created by
recording a session with a Chrome/Firefox extension. It can simulate single or
multiple chained HTTP requests and supports HTTP/1.1, HTTP/2, WebSockets and
gRPC. There are also community plugins that support SQL, Kafka, ZeroMQ, Redis
and others.

#### Summary

- Free and open source with an optional cloud service if you want distributed
  tests.
- CLI for testing HTTP, WebSockets and gRPC requests.
- Tests scripted using Javascript.
- Results displayed in the terminal and supports exporting to services like AWS
  Cloudwatch, Datadog, Grafana, GitHub Actions, etc.

#### Review

k6 is open source but there is [a cloud version](https://k6.io/cloud/) that
provides extra features around scaling and visualizing the load tests,
particularly if you want to run load tests from different locations. It is now
part of Grafana, which we reviewed in our
[best server monitoring tools review](/tools/server-monitoring/).

k6 does not simulate a browser but does provide built-in metrics like time spent
blocked, connecting, negotiating the TLS handshake, total data received, total
response time and parsing of the response. This means it is very flexible and
can be used for regression testing e.g. checking for expected output, stress
testing e.g. sending extreme numbers of requests, smoke testing e.g. sending
small numbers of requests to check expected responses/errors, and soak testing
e.g. testing for reliable responses over a longer period of time.

The CLI output can be configured to be human or machine readable, but there is
no graphical interface as standard. Instead, you can pipe the results into a
variety of different systems, such as AWS Cloudwatch, Datadog, Grafana, New
Relic, StatsD or just CSV or JSON.

k6 is my second favorite load testing tool for developers because it is
CLI-first and all the test plans are written in code, so they can live alongside
the systems they’re testing.
[We use k6 at Console](https://blog.console.dev/automated-website-performance-testing-with-github-actions-k6-and-cloudflare-workers/) -
deployed using GitHub Actions and Cloudflare Workers - for performance testing
every commit for our website to ensure pages are always fast.

If you are looking just for HTTP load testing then k6 does a great job, but the
main limitation is the lack of browser simulation. If you want to test browser
rendering performance, k6 is not the right tool.

{{< img-center src="/img/tools/load-testing-k6.png" alt="k6 product screenshot" width="100%" >}}

{{< nav-wrapper--open anchor-name="locust" >}}

### Locust

[Locus](https://locust.io/) is a free and open source load testing tool that
executes tests written in Python. It simulates “users” making single or
multi-step requests primarily to HTTP endpoints, but tests can be written to
support any system that can interact with Python e.g. XML-RPC.

#### Summary

- Free and open source.
- Tests written in Python to execute requests to HTTP endpoints. Support for
  non-HTTP services is possible with custom scripts.
- Includes a web UI to analyze results but can also be run headless from the CLI
  or Docker.
- Protocol-level testing only - does not support browser testing.

{{< img-center src="/img/tools/load-testing-locust.png" alt="Locust product screenshot" width="100%" >}}

#### Review

Locust tests support the full functionality of Python so can be very
sophisticated. Tests execute in an isolated Python greenlet so you can avoid
having to deal with asynchronous callbacks - Locust handles that for you. Test
plans can simulate hundreds of users and Locust supports distributed tests
across multiple nodes, including in Docker containers.

Locust displays its results in a simple web UI but they can also be exported as
CSV, or direct to the terminal if executed as a CLI. If you don’t like
Javascript, Java or Scala, Locust is a good alternative to k6, JMeter or
Gatling.

{{< nav-wrapper--open anchor-name="loadster" >}}

### Loadster

[Loadster](https://loadster.app) is a cloud load testing tool that supports both
protocol-level testing to HTTP endpoints and browser performance simulation
(Chrome only). The UI has a dark, neon, retro feel (in a good way), which is a
style we appreciate at Console!

#### Summary

- Cloud hosted load testing service with support for protocol and browser
  testing.
- Test plans built using Chrome or Firefox browser extensions, or in-browser
  editor.
- No custom scripting support.

{{< img-center src="/img/tools/load-testing-loadster.png" alt="Loadster product screenshot" width="100%" >}}

#### Review

Test scripts can be created by recording sessions through the Loadster browser
extensions (Chrome or Firefox) or by manually composing the steps using the
in-browser editor. Loadster includes some basic scripting capabilities with
Javascript code blocks that can be dropped in and reused in multiple test plans,
but is otherwise not scriptable.

That said, Loadster is very flexible and has many advanced features to build
sophisticated test plans - variable binding from uploaded datasets, API testing
against imported OpenAPI or Postman Collection specs, validation of response
time, size, status codes, headers, body and validating requests with Javascript.

The main complaint against Loadster is the lack of scripting capabilities, but
that is somewhat made up for by the advanced options available for both protocol
and browser testing. It is clearly designed for technical users.

{{< nav-wrapper--open anchor-name="gatling" >}}

### Gatling

[Gatling](https://gatling.io) is an open source load testing tool that supports
both scripted tests (in a custom Domain Specific Language or Scala) or generated
using a web recorder. It tests HTTP requests, so does not simulate browser
rendering. It can be run locally (if you have Java installed) or you can create
and upload test plans to their cloud service.

#### Summary

- Free and open source with an optional cloud service.
- Tests are written in Scala or the Gatling Domain Specific Language (DSL) which
  has sophisticated options for assertions, protocol testing and logic control
  statements.
- Only supports HTTP requests, not browser rendering.

#### Review

Writing Gatling test scripts in Scala or the Gatling DSL allows for very
flexible scenarios. Multi-step HTTP requests can be created and then executed by
a configurable number of “users”. This simulates load but gives you the option
to ramp visitors over a period of time.

Tests can include dynamic data and define checks, such as HTTP status requests,
conditional based on the HTTP response, as well as assertions for response
times. Gatling supports HTTP, SSL, WebSockets, HTTP polling, and Server Sent
Events (SSE). It can also be integrated with CI/CD systems like Jenkins and
Bamboo, and tools like Gradle and Maven.

Gatling is a very flexible load testing tool framework that benefits from the
power of using Scala for test plans. However, its reliance on Java means
installation is a pain for developers on their desktop, especially if on macOS
which blocks Java scripts by default.

{{< nav-wrapper--open anchor-name="apache-jmeter" >}}

### Apache JMeter

[Apache JMeter](https://jmeter.apache.org/) is a free and open source load
testing tool that runs on a protocol-level to allow performance testing of HTTP,
HTTPS, SOAP, REST, FTP, LDAP, Mail, TCP, Java and other technologies. It creates
test plans via a browser recorder which can be saved to a standardized format
and run via a headless CLI on any system that supports Java.

#### Summary

- Free and open source - many other tools can execute the standardized JMX test
  plan format.
- Supports lots of protocols including HTTP, SOAP, REST and TCP.
- Complex and difficult to learn due to the age of the tool and difficulty
  deploying Java-based applications.
- You have to run your own testing infrastructure.

#### Review

The main problem with JMeter is its complexity. The documentation assumes a lot
of knowledge which makes it difficult to get started. However, investing time is
repaid through the flexibility of the wide range of supported protocols, the
ability to define complex test logic, request configuration and the
assertions/checks.
[Tests can also be distributed](https://jmeter.apache.org/usermanual/jmeter_distributed_testing_step_by_step.html)
to multiple nodes using server mode.

JMeter exports test results in a number of different formats, but the lack of
any ability to easily visualize results is another downside. JMeter can output
in HTML, JSON, XML or other text formats, but does not present a user-friendly
interface for analyzing the results. [Plugins](https://jmeter-plugins.org/) can
be used to deal with this, such as by sending results to Datadog or Prometheus.

JMeter is very powerful and has been around for a long time. This means writing
tests in the JMX format results in portable tests that can often be imported
into other testing products. JMeter was once the first choice for developers -
and is still a good, open source load testing framework - but there are now good
quality JMeter alternatives that can provide a more modern approach.

{{< nav-wrapper--open anchor-name="loadview" >}}

### LoadView

[LoadView](https://www.loadview-testing.com/) is a load and performance testing
product that runs in the cloud. It can execute different types of tests from
simple HTTP requests through to browser simulation (Chrome, Edge, Firefox, iOS,
Android, Windows Phone and Blackberry), scripted actions, SOAP or REST APIs,
audio/video streaming, WebSockets and JMeter tests. It can even import Postman
Collections.

#### Summary

- Tests are primarily defined in the web UI, but can be imported from JMeter.
- Supports different testing methods including protocol and browser testing.
- Cannot edit the script code unless you install a Windows application.

{{< img-center src="/img/tools/load-testing-loadview.png" alt="LoadView product screenshot" width="100%" >}}

#### Review

Test plans can be configured to ramp up over a period of time with options to
increase the requests based on transaction rate goals, fixed requests over time
or dynamically adjusting curves that change during the test. Tests can be run
through a proxy to allow private tests and multiple locations can be configured
for distributed load testing.

LoadView has a nice web UI and developers will appreciate being able to import
JMeter files and Postman Collections, however tests are still primarily defined
in the web UI rather than using a scripting language. LoadView does support
recording and editing test scripts in code, but only using
[a Windows desktop application](https://www.dotcom-monitor.com/wiki/knowledge-base/using-everystep-scripting-tool-desktop/).
Tests must also be run through the UI or triggered via the API, so integration
into CI/CD pipelines is limited.

{{< nav-wrapper--open anchor-name="siege" >}}

### Siege

[Siege](https://github.com/JoeDog/siege) is an open source load testing tool
that is designed to stress test single or multiple URLs.

#### Summary

- Free and open source.
- Basic CLI for stress testing HTTP requests. No scripting of requests.
- Basic response stats on completion. No advanced reporting.

#### Review

Siege runs as a CLI, issuing multiple requests over a specified time period. It
can issue HTTP/1.0 or HTTP/1.1 requests via GET or POST, and supports
configuring cookies, logging and basic authentication.

Test results are reported once the test finishes. These include time spent, data
transferred, average response time, transaction rate, throughput, and status
code counts.

Siege is a fairly basic stress testing tool that specializes in sending large
numbers of simultaneous requests. This is good for testing whether your
infrastructure can suddenly scale up, but does not represent what real users
will do. Siege is useful for quick testing, but the other tools reviewed have
many more capabilities.

{{< nav-wrapper--open anchor-name="bees-with-machine-guns" >}}

### Bees with Machine Guns

[Bees with Machine Guns](https://github.com/newsapps/beeswithmachineguns) is
similar to Siege in that it is designed to stress test URLs by sending HTTP
requests to a specified URL. You specify the target, how many requests you want
to send and how many should be executed concurrently. The main difference is
that the requests are orchestrated by spinning up EC2 instances to send the
requests.

#### Summary

- Does not support scripted tests - only sends requests to a specified endpoint.
- Connects to your AWS account and uses EC2 instances to execute requests.
- Primarily useful for stress testing.

#### Review

Bees with Machine Guns is written in Python and uses Boto to communicate with
AWS, which you must configure on the system you’re calling the command from. The
basic functionality simply issues the requests and provides a report on the
response time and status codes.

The advantage of using Bees with Machine Guns is that it manages starting and
stopping the EC2 instances, optionally across multiple regions and zones, so you
can generate large request volumes using remote, cloud infrastructure.

You can define all the standard HTTP parameters like cookies, headers and
authentication. It can also be combined with
[hurl](https://github.com/EdgeCast/hurl), an HTTP server load testing utility
that provides better support for multithreading and more detailed performance
statistics.

As with Siege, Bees with Machine Guns is a basic CLI that makes it easy for
technical users to spin up some EC2 instances to run quick stress tests. It
lacks advanced scripting and reporting, so is probably best used as a simple
ad-hoc test utility. It does have a cool name though. The status outputs are
quite fun.

{{< nav-wrapper--open anchor-name="loadninja" >}}

### LoadNinja

[LoadNinja](https://loadninja.com/) allows you to test web UIs by simulating
browser requests recorded by a browser editor.

#### Summary

- Executes tests using real browsers.
- Limited metrics/measurement options.
- Support for ramp up configuration for stress testing.
- Only supports Jenkins for CI/CD integration.

{{< img-center src="/img/tools/load-testing-loadninja.png" alt="LoadNinja product screenshot" width="100%" >}}

#### Review

The LoadNinja editor loads up the URL you want to test, then you click through
and it builds a test plan based on the actions performed. You can add dynamic
data to parameterize test commands and specify validations as the test runs. It
also supports API testing.

Tests are executed in real browsers so the full render is included in the
response time results, but there is limited flexibility on being able to
configure metrics or alerts on poorly performing pages. LoadNinja is a basic
stress testing platform that is designed to execute large numbers of requests
over a defined period of time. It supports ramp up and concurrent user
configuration but is otherwise quite basic.

LoadNinja can be triggered by CI/CD integration into Jenkins, but does not
support any other systems unless you write your own scripts to trigger runs via
their API. The scriptless approach means it can be managed by non-technical
users but it lacks advanced features.

{{< nav-wrapper--open anchor-name="neoload" >}}

### NeoLoad

[NeoLoad](https://www.neotys.com/neoload/overview) is a Windows, Linux or macOS
desktop application for load testing written in Java.

#### Summary

- Desktop application for Windows, Linux and macOS.
- Supports distributed testing via a separately deployed agent.
- Powerful test design options, but the UI is dated and slow. It’s a pain to
  install because of the unpolished Java implementation.

{{< img-center src="/img/tools/load-testing-neoload.png" alt="NeoLoad product screenshot" width="100%" >}}

#### Review

When installing NeoLoad, you can choose to deploy the load generator agent
separately from the controller application which allows you to set up a
distributed load testing environment.

You can import Swagger/OpenAPI spec files or launch a browser UI to record the
session as you browse - this uses browsers already installed on your system.

There are powerful options to define user paths, such as clicking through page
elements, submitting forms and defining the test parameters. This allows you to
simulate many users with different browsers, connection speeds and request load.
Results are output in the UI, graphed, and can be shared via a web UI.

Although NeoLoad has many of the features of the more modern load testing tools
reviewed above, the UI is dated and slow. Tests cannot be automated, there is no
support for common open source test formats, and it cannot be integrated with
CI/CD systems easily. There are much better load testing tools for developers.

### Also considered

- [Silk Performer](https://www.microfocus.com/en-us/products/silk-performer/overview)
  we were not able to test because it required contacting sales to request a
  free trial. The [Console selection criteria](/about/#selection-criteria)
  require that tools be available as self-service, so we excluded it from this
  review.
- [SmartMeter](https://www.smartmeter.io) is a desktop application written in
  Java. It has a built-in browser used to record test plans which are then
  executed from your local machine. It also supports the Apache JMeter format so
  can execute existing scripts. We found SmartMeter to be a dated approach to
  load testing. It required executing a shell script to launch the application
  and multiple components were blocked by the security restrictions on macOS.
  This made it difficult and cumbersome to use. It does support a non-GUI mode
  as well as connecting to other instances in distributed mode, however there
  are better tools available.
- [StressStimulus](https://www.stresstimulus.com) is only available for Windows.
  The [Console selection criteria](/about/#selection-criteria) require that
  tools be available for multiple platforms, so we excluded it from this review.
- [WebLoad](https://www.radview.com/) is an enterprise load testing tool but it
  is only available as a Windows download. The cloud SaaS version requires you
  to submit a form and wait to speak to a sales rep to get an account. The
  [Console selection criteria](/about/#selection-criteria) require that tools be
  available as self-service, so we excluded it from this review.

{{< nav-wrapper--open anchor-name="editorial-policy" >}}

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
