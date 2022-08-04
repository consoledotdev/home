---
title: Interview with John Amaral, Slim.AI
who: John Amaral
role: CEO
org: Slim.AI
what: Container analysis and comparison.
tags: ["Containers"]
date: 2021-09-03T12:00:00Z
draft: false
headerType: fixed
summary: Interview with John Amaral, CEO, Slim.AI.
isPage: interviews
topImg1Src: /img/interviews/slimai-john-amaral-profile.png
topImg2Src: /img/favicons/www.slim.ai.jpg
ogImg: /img/interviews/slimai-john-amaral-setup.png
---

### What is Slim.AI and why did you build it?

At [Slim.AI](https://www.slim.ai/) we build both SaaS software and open-source
software. My co-founder, [Kyle Quest](https://twitter.com/kcqon), and I formed
the company last year. Kyle invented
[DockerSlim](https://github.com/docker-slim/docker-slim), which is a piece of
open source software that has loads of stars, and 250,000+ downloads. DockerSlim
optimizes container images, gives developers the ability to see what's inside,
and helps them build production-grade containers better.

Our mission is to help developers create, build, deploy, and run cloud-native
applications. We've seen that through the interaction with the developers who
use DockerSlim, and through our own building of cloud applications for years,
cloud-native applications with containers have a lot of friction. Developers and
devops struggle to do that well.

We're building a platform for developers to build cloud-native apps faster.
Slim.AI makes them production-ready by building better containers that can go
straight from the developer's desk into production. We give them the tools they
need.

{{< img-center src="/img/interviews/slimai-john-amaral-product.png" alt="Slim.AI product screenshot" width="100%" caption="Slim.AI container analysis." >}}

### What is a “better” container?

We framed that around what's commonly understood as ‘container best practices’
from the likes of Docker, Google, and Amazon. They tell you a few things, such
as make your containers smaller and more secure. If you're using a public image,
make sure you look inside the image and know it well, take out all the software
you don't need, make sure that there are no vulnerabilities etc. There are a lot
of things you need to do.

Those best practices tend to go into how you might approach it, but don't give
you any concrete ideas about workflow. How does a developer actually do these
things, and turn it into an easy pipeline? We’re building a platform that does a
lot of this heavy lifting and makes the high friction stuff easy.

### How would developers do this today?

There are common open source tools that you'd run on your desktop, like
[dive](https://github.com/wagoodman/dive) and
[container diff](https://github.com/GoogleContainerTools/container-diff). Each
of them has its own learning curve - they're rather complex. None of them really
glues anything together. Dive is an amazing tool, but it relies a lot on
developer knowledge to really understand it. It gives you some very detailed
insights, but it doesn't really help you achieve the end goal, which is to
create a production-ready container. It just says, here are some things about
your containers, and maybe you can remove them.

What we've tried to build is a more automated experience. DockerSlim from the
beginning was always a tool that showed you what needed to be done and automated
it. You get an improved, better, smaller, more secure container because it uses
some intelligence to do the work for you.

We've turned this into a SaaS experience now where you can also use our SaaS to
extend that knowledge and understanding, but also plug it into your workflows -
CI/CD and GitHub, and other places where containers live. We allow you to have
automation in the plumbing. It's more than just a disparate set of tools. It's
an integrated experience with automation to solve the problems rather than just
help you find them.

### What does a "day in the life" look like for you?

My title is CEO but I'm also still very technical. We have a growing team with
an organization that's distributed around the world. We started with this
approach to be remote only, asynchronous, and global. For a small team, there's
a lot to do in just helping a team actually communicate and collaborate.

A lot of what I do is to try to help the team organize, coordinate, collaborate,
and think about the product we're building. I make sure that we're on the right
track to building something great. Product value is my primary concern, making
sure that we're doing the best we can to make that happen.

I still do a lot of technical stuff. I’ve been a software company CTO in the
past. This time round, my co-founder is an uber-technologist and software
developer. We collaborate to solve technical problems. I'm more from the product
thinking side, but I still write code and try to do experiments because I have
to be close to the tech to be an effective product leader. I want to keep that
current, so my main focus is running the team and building a product.

### What is the team structure around Slim.AI?

We're approaching 25 people, mostly split between engineering and product. We're
a seed-stage company, so we’re mostly focused on building a great product, and
then telling people about it. It's the two major things you do as a startup.
Build a great product, and don't be ignored, right?

The team is distributed everywhere. We have developers in Hawaii, Seattle,
Boston, New York, Kenya, UK. We have one team member who's nomadic. He is in a
different city every day! It's a really fun, eclectic group living a remote
asynchronous life.

[GitLab](https://about.gitlab.com/) is a great example of a company that has
been remote and asynchronous from the beginning. One of our advisors was an
early employee at GitLab, and we're learning a lot from their experience.

### How did you first get into software development?

I started programming when I was 12 years old on a
[TRS-80](https://en.wikipedia.org/wiki/TRS-80) home computer. I built a BASIC
game for a microcomputer using assembly language. You couldn't really buy games
then too easily, so you got a cookbook, and you typed in the assembly code, and
you had a game at the end. I have been in software and tech ever since.

I started with assembly, BASIC, Fortran, C, C++, and then it branched out to be
whatever I needed to do to build a functioning system. Java for a while, then
various front-end languages. Today I mostly do experimentation with software and
internal stuff. I leave all the heavy lifting for building product stuff to
Kyle. But we spend a lot of time talking about it together too. I have a
background in engineering, with a degree in engineering. I've been building tech
companies and tech products for a while now.

### What's the most interesting development challenge that you faced building Slim.AI?

I think it reverts back to how we decided to build the company. We're all in the
cloud. Not only do our products live in the cloud, but we also have open source
software, you can get it on GitHub and it is downloadable. We do all of our
development and collaboration in the cloud, and it's all asynchronous. People
don't have to show up in meetings together and do their thing. We wire up the
company so that it feels like it's hyper-connected, but we develop independently
together in asynchronous mode.

It has been a cool challenge about how we work, and how we make sure that we
build great connected customer experiences and software that runs in the cloud.

### What do you think about SaaS vs on-premises open source?

Our open-source users are free to do whatever they want with our open-source
software. We love it that way. They download that, and use it in containers, on
their desktop, wherever they like. Of course, they can fork us and do whatever
they want. We love free software. We use it and like to create it. It's fun and
a great way to learn and interact with developers who want to solve hard
problems.

Our SaaS is a new platform. It's not just hosting software because our software
is more of a tool to examine containers and optimize them. We've built a new
engine but at the core of it is a lot of the tech in our open source version
too.

That said, it's not meant to be a replacement for the open source product. It's
meant to be an extension of its value. If you're an open source user, there are
things there that you can do on our cloud that are difficult for you to do with
our open source, because it's hard to automate, plug it in, or visualize. It can
be hard to run it the way we do in our SaaS. We want to build a platform that
helps our loyal open source users work better, get more value. They're
compatible. I'd say one extends and advances the other.

At Slim.AI we will continue to grow the open source project. We will always do
that. We love the users who've given us great feedback. With open source, you
give, and then folks return the favor.

### What's the most interesting tool or tech you're currently playing around with?

I have a pet project that I'm working on, and it's part of some cool
experimentation we're doing. There are literally millions and millions of
containers that live in the wild. We've been doing a lot of scientific analysis
of how they're composed, where their software comes from. How does it get there?
What does the universe of containers really look like? How can that help us
shape our understanding and have developers become more effective?

We're doing a lot of analysis of the containers that live in the wild. We’re
using cool analytic methods, including processing with Python and R. We're using
our own SaaS, and our own DockerSlim to decompose and understand them. We're
trying to learn everything about the world of containers that exist out there
through users that interact with us that want to use DockerSlim, but also users
of our SaaS.

There's a long tail on the consumption of public containers, but there are a few
that get used a lot. There are one hundred containers that get downloaded
billions of times. Those change all the time. The maintainers maintain them,
which is great, right? But keeping track of all that change is hard for a
developer or a devops team to know when they should accept that change, or make
sure there was nothing bad introduced.

Through this project we hope we'll help the world understand a bit more about
the software supply chain. We’ve seen attacks happen with Bitcoin miners
inserted into containers and other supply chain centric attacks, such as the
[recent Solarwinds attack](https://en.wikipedia.org/wiki/2020_United_States_federal_government_data_breach).
There's a lot of interest in making users aware of where their software comes
from.

### Describe your computer hardware setup

I'm able to navigate around various operating systems, pretty easily. Linux,
macOS, and Windows. I try to keep my chops up on all of them. To my right, I
have a Windows machine. Right in front of me, I have a macOS machine. I have
various Linux machines running up in Amazon, and the various cloud platforms
that I interact with on a regular basis.

I use them for different purposes. One is just for doing my day job, interacting
with my team, and talking to the world. There's programming, which is a sort of
a Linux and macOS world. It's the foundation of all of the software that we
build. I use Windows for some tasks.

I'm a guitar player and singer in bands, so I do a lot of home recording and
have an awesome audio setup. If you've ever seen some of our videos, the voice
overs are done by me because I really enjoy doing the audio pre- and
post-production stuff.

I also have a separate setup which is a day trading platform that also doubles
as my gaming and audio workstation. It has about six square feet of monitors.
And it's got a high-speed video card, a really high-speed system. Six multi-core
CPUs. I got one of everything.

For work, it's a MacBook Pro. It's got the latest and greatest stuff on it. It's
plugged into a USB-C high-speed routing platform that connects it up to my
monitors and all that. I've got a 30-inch monitor and a wireless mouse.

One fun fact is that I also have a fully multi-monitor setup that folds into a
backpack, made by [GeChic](https://www.gechic.com/). So pretty much everything I
have here, a multi-monitor setup, and all the connections can be set up
anywhere. I often move it around with me to hotel rooms and to my apartment near
the sea. I never work without multiple monitors. At least two, and mostly three;
sometimes six.

{{< img-center src="/img/interviews/slimai-john-amaral-setup.png" alt="The desk of John Amaral, Slim.AI" width="100%" >}}

**Portable Monitor:** Gechic 1503H 15.6 inch IPS 1080p Portable Monitor with
HDMI.

**USB Powered Virtual Whiteboard:** iPad Pro (12.9-inch).

**Docking Hub:** Caldigit TS3 Plus Docking Station.

**Power:** Anker Power Strip Surge Protector 12 Outlets & 3 USB Ports with Flat
Plug.

**Laptop:** Macbook Pro 16-inch.

**Headset:** Razer Kraken Gaming Headset

**Backpack:** The North Face Borealis.

**Mouse:** Logitech M185.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome and Firefox.

**Email:** Gmail.

**Chat:** Discord and Slack.

**IDE:** I write a lot of Python so I have PyCharm as a nice debugging platform.
I also use Atom.

**Source control:** GitHub, and we use GitLab for our pipeline.

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I've been playing music for as long as I've been writing assembly code and
programming TRS-80. I started playing guitar at a very young age, and I've
continued to do that. It's the other side of the brain, and it's fun. I have a
family so there's good family stuff going on too. I like to be on the ocean, so
I like to boat too, but mostly it's work, programming, music.

### Find out more

[Slim.AI](https://www.slim.ai/) is a container analysis and comparison tool. It
was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 16 Sep 2021. This interview was
conducted on 3 Sep 2021.
