---
title: Interview with Mayank Bhola, LambdaTest
who: Mayank Bhola
role: VP, Engineering
org: LambdaTest
what: A cross browser testing tool.
tags: ["Browser testing"]
date: 2021-10-12T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Mayank Bhola, VP, Engineering, LambdaTest
isPage: interviews
topImg1Src: /img/interviews/lambdatest-mayank-bhola-profile.jpg
topImg2Src: /img/favicons/www.lambdatest.com.jpg
ogImg: /img/interviews/lambdatest-mayank-bhola-logo.jpg
---

### What is LambdaTest? Why did you build it?

[LambdaTest](https://www.lambdatest.com/) is a test execution platform. There
are lots of different mechanisms for cross browser testing, but what was missing
was a developer convenience layer. Developers need a holistic platform that can
help them discover and fix bugs, highlighting not just which tests pass but
which ones fail and why.

We built LambdaTest because we found many of the existing options were slow,
limited in features and were missing crucial integrations. Everyone has their
own approach to issue management, reporting, and development. If your tooling
does not allow integration into what you already use, it causes problems.

In developing a cross browser testing platform, we saw that it's not just
important that you provide a platform, it's very important that you keep up the
pace with the latest technology trends. For example,
[Selenium 4](https://www.selenium.dev/) is coming and developers are always
trying new tools - it’s important for us to keep abreast of all these changes
and be at the bleeding edge. Web development moves very fast.

Another example is keeping up with releases. As well as all the current
versions, we provide beta analysis for releases of Google Chrome, Firefox, and
other browsers, and we also provide nightly builds for macOS’ new Monterey Beta.
Our customers are able to test their applications way before these OS’ actually
land with users.

We deal with managing those systems, even when they might be quite unstable. We
do a lot of engineering and we add a lot of mechanisms so that you get the best
performance possible. Even if the browser is crashing, we should be able to
respond immediately, and resume your session so that you as a user do not have
to worry about these all platform level inconsistencies.

Today, LambdaTest provides a cross-browser testing platform, but this is not the
end goal. We want to be the AWS for testing. We want to provide all the tooling
and execution environments required to do any kind of testing.

### What does a “day-in-the-life” look like?

A lot of my time is spent unblocking our teams. I help a lot with
customer-facing groups where we're seeing very unique cases for our customers.

As a platform we support all the different testing frameworks. There are times
that we see a new framework that is not playing well according to the
[Selenium WebDriver protocol](https://www.w3.org/TR/webdriver/), which we use
behind the scenes, and so we have to make changes in order to accommodate it. I
help coordinate this.

Otherwise, I spend time thinking strategically about what we need to launch in
the next 6 to 12 months, and making sure that the next technology products that
arrive have a testing platform ready by the time they're getting mature.

### What does the team look like?

I have multiple leads that are working with me directly, and we have a pod
structure for teams where each pod is empowered to ship code to production
independently. These pods include back-end developers, front-end developers,
DevOps, infrastructure, product managers, and the QA teams. All of these are
autonomous so that they can move with great velocity without impacting each
other’s work. I stay in touch with the leads so that they move without creating
any resistance.

### How do you structure systems to help with this?

We have evolved our approach through several iterations to allow our teams to
work as we’ve scaled. Several years ago we used a Gitflow methodology but are
now using the
[GitLab flow based around branches](https://about.gitlab.com/handbook/product-development-flow/).

Every developer has their own developer console in the cloud which runs a
complete copy of LambdaTest, including anonymized production data (sanitized of
customer information). They all have access to all the services connected to
LambdaTest at their own disposal. This ensures development can happen in a
self-contained environment without any dependencies on any other team members.
Testing and development can happen in parallel, and DevOps can also test the
underlying infrastructure without impacting anybody else.

To achieve this we have written custom scripts using
[Terraform](https://www.terraform.io/) and Kubernetes, combined with an
internally developed Golang agent. All the platforms we support, such as the
different browsers, are deployed as single binaries, which makes them easy to
distribute.

In production, we deploy to AWS but also have our own data center setup for
running some of the more custom test environments and devices within VMs.
Everything is configured using service management tooling built around
[Consul](https://www.consul.io/) and [Vault](https://www.vaultproject.io/).

### What is the LambdaTest tech stack?

We write our services in Golang, which are deployed as services over Kubernetes
where possible. Unfortunately, the Windows and macOS support on Kubernetes is
limited, but we use it for our microservices and in the cloud.

On the front-end, we use React based frameworks but we are slowly making a
transition to TypeScript. We have a couple of services that are also written in
NodeJS because we find it a friendly way to route connections between different
services.

### What is the most interesting challenge been building LambdaTest?

The sheer scale of making all the diverse testing frameworks work with our
platform. New testing frameworks get built all the time so we have to keep track
of them. If they're not following the Selenium spec, we have to write a wrapper
for them. Ultimately, our end-users should not be impacted. That has been the
most difficult challenge, breadth-wise.

Depth-wise, we have to adapt operating systems that are often designed for
single-users so that they can work in test scenarios.

For example, if you want to run multiple Safari instances with different
proxies, it is not possible out of the box - proxy settings are defined
globally. We have had to write custom implementations that interact with the OS
at a networking API level to allow this functionality. This is a challenge by
itself, but then Apple likes to update its platform with undocumented internal
changes that we need to work around!

### How do you see your relationship with the open-source Selenium project?

I'm proud to say that we are Selenium level (top tier) sponsors of Selenium
because we wholeheartedly support their dream of empowering testers with robust
test tooling. We are striving to contribute to projects that connect with
Selenium or WebDriver directly as well because it is important for us that the
whole ecosystem grows along with the Selenium project as well. We make sure that
we are up to date with all the documentation and that we also provide technical
expertise and thought leadership to such projects.

### How did you first get into software development?

I was really fascinated by sci-fi movies. I would look at the hackers typing
something on the green screen and that inspired me. I got into development via
the web starting in the UI and then slowly moving to the back-end and the
architecture. I pursued computer science as my bachelor’s and from there, things
started looking good! I began working at [Zomato](https://www.zomato.com/) and
moved up the ladder from there. I always loved to write code from scratch.

I like experimenting with other languages. While we were choosing Go, we also
looked at Rust. There was a huge discussion going on in the community, but we
found that Go was a much more mature language. We are going to stick with Go for
the long term because we invested a lot into it. The learning curve with Rust is
quite challenging.

### What's the most interesting tech you're playing around with at the moment?

We are huge fans of HashiCorp’s tooling and use Vault and Consul heavily. We use
a lot of Kubernetes, specifically in Golang, and have written our own
boilerplate framework. We also make use of open source frameworks like
[Cobra](https://github.com/spf13/cobra),
[go-kit](https://github.com/go-kit/kit), [gin](https://github.com/gin-gonic/gin)
etc

### Describe your computer hardware setup

{{< img-center
src="/img/interviews/lambdatest-mayank-bhola-desk.jpg"
alt="The desk of Mayank Bhola, LambdaTest"
width="100%"
>}}

Right now, I'm using an M1 MacBook Pro with a 27 inch
[4K LG display](https://www.lg.com/4k-monitors). I use a
[Keychron mechanical keyboard](https://www.keychron.com/) and I have an Apple
trackpad.

I just switched to Apple HomePod Minis for a stereo pair, that was quite a
learning experience for me. Although I had some warnings from friends, I was
able to figure out that they work really well if you have a good router - the
latency isn’t a problem then because they do not use Bluetooth, they actually
use wifi for Airplay. Good wifi is the source of low latency!

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** VS Code.

**Source control:** Git.

### Describe your desk setup

I use a standing desk controlled by a mobile app. It gives me a signal if I’ve
been sitting for too long.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Tea.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I enjoy reading nonfiction, cooking Italian food and driving to discover places
nearby.

### Find out more

[LambdaTest](https://www.lambdatest.com/) is a cross browser testing tool. It
was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 14 Oct 2021. This interview was conducted on
12 Oct 2021.
