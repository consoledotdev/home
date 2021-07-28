---
title: Interview with Guillaume Salles, Liveblocks
who: Guillaume Salles
role: CTO
org: Liveblocks
what: Real-time collaboration API.
tags: ["Collaboration"]
date: 2021-07-26T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Guillaume Salles, Liveblocks
isPage: interviews
topImg1Src: /img/interviews/liveblocks-guillaume-salles-profile.jpg
topImg2Src: /img/interviews/liveblocks-guillaume-salles-logo.png
ogImg: /img/interviews/liveblocks-guillaume-salles-desk.jpg
---

### What is Liveblocks? Why did you build it?

[Liveblocks](https://liveblocks.io/) is a set of APIs and guides to help other
companies create collaborative applications. [Figma](https://www.figma.com/) and
Google Docs offer a really good collaborative experience. You see when people
are in the same room as you and any conflicts are solved when somebody is makign
edits. You can also work offline and they will deal with the sync. Building all
this infrastructure is hard. We’re trying to make it a commodity.

Ten years ago, everyone was building their own smart analytics service in-house,
or a login mechanism or something like that, now it's all third party. At
Liveblocks, we think the future for collaboration is providing all the building
blocks you require to create a good collaboration experience, by offering
conflict resolution, commenting and making sure it all runs fast, so that you
can focus on your core product.

The starting point for Liveblocks came from our background. We’re from the
design industry which was completely blown away by Figma when it launched. Figma
represented a huge shift to web based, collaborative tools from tools like
[Sketch](https://www.sketch.com/) and [InVision](https://www.invisionapp.com/).

We decided to build the infrastructure ourselves and to see if there's a market
for something that delivered the right trade-offs. Not so complex that it would
have to support an infinite number of clients, but at the same time, powerful
enough to give you the tools to go to an existing application and turn it into a
collaborative experience.

### How would developers solve this problem before Liveblocks?

If we talk about the collaborative path, you can do this with
[WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) or
[WebRTC](https://webrtc.org/), but it’s not easy to do. It's easy to have a
proof of concept where we put a few people using WebSockets in the same room,
and it's working, but to make it scale with the correct load balancing, to deal
with conflict resolutions and for everything to work, is really complex.

Figma and Google Docs are using different approaches, and there is a lot of
literature, as well as Open Source projects, but it is fairly difficult to
implement and scale. We realized that it is not as easy as
[Next.js](https://nextjs.org/) where you can code and deploy and you don’t have
to think about lots of branches etc. There is a big gap between the research and
actually releasing a product that is easy to use within the collaboration space.

### What does a “day-in-the-life” look like?

I'm pretty lucky because I work with my co-founder
[Steven Fabre](https://twitter.com/stevenfabre) and he can do pretty much
everything. He can do front-end development but he’s also good at speaking to
customers, investors and even overseeing legal stuff.

I don't have a lot of meetings, so I can focus on the product. I can talk to our
customers, and concentrate on creating the best API possible. A normal day is
probably two-thirds spent on pure engineering, and the rest is spent
brainstorming with Steven and talking to customers.

### How are you approaching the API design and documentation?

This is one of the big challenges we face. There are always trade-offs and it's
extremely difficult to create a good API. We try to find the right balance
between ease of use and being powerful enough to build highly scalable products.

To do so, I try to spend as much time as I can with our customers and potential
users to find the right abstractions for the API. When something is a bit
complex, but can’t be solved with an API, there is the possibility to solve the
problem with guides, examples and documentation. Our goal is to make it as easy
as possible to use and look forward to getting more feedback from customers.

### What does the team look like?

There’s two of us right now, myself and Steven. We’re planning to hire two
engineers soon, with one engineer already starting in September.

### How did you first get into software development?

When I was 12 years old, I realised that you could build your own website. I
started by learning to code in HTML then C and C++. I learned using a really old
French website called “Le site du zero” (“Website for zero”). Unfortunately, it
no longer exists.

Even in 2002, the tutorials were good enough that as a 12yr old I could
understand everything and build a site. I started by playing with code and loved
the puzzle part of code - solving particular problems.

When I started working professionally, I used C# and
[Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight). It wasn't
the right horse to bet on! It tended to be used in the B2B industry when I
started out. Afterwards, I moved to Javascript. I love learning new languages,
so I’m not attached to a particular language. I like to pick the best language
for the job.

### What's the Liveblocks tech stack?

We're using Typescript and Next.js for the product dashboard, documentation and
website.

For the backend, we're using AWS and [Cloudflare](https://www.cloudflare.com/)
to manage our WebSockets connections. We don't use WebRTC yet but it's something
we're considering for some use cases.

### What was the most interesting development challenge building Liveblocks?

The scalability of WebSockets is definitely challenging, but the bigger
challenge is about designing high quality APIs with the developer experience in
mind.

There are some people that are super-technical and want full control of
everything, and then there are other people that want something they can build
really quickly and aren’t concerned about the technical details. They just want
to copy examples.

Finding the balance is really tough. I need to accept that it will never be
perfect. When you work in another company, it’s easier to make these
compromises, but when it’s your own company it’s hard to accept this reality.
There's no perfect API solution.

### What's the most interesting tool or tech you're currently playing around with?

One thing that I find fascinating is tools like
[esbuild](https://esbuild.github.io/), an extremely fast Javascript bundler.
This tool created a solution that is 100x faster than we had experienced before.
Everyone accepts that a process is slow, then someone comes along and makes it
really fast. I’m trying to take that philosophy and put it to work on the API
we’re building at Liveblocks. Taking something that is accepted within the
industry and taking it so much further. I find this fascinating.

I’ve also been following [tldraw](https://www.tldraw.com/sponsorware), which is
a sponsorware app by [Steve Ruiz](https://twitter.com/steveruizok). This is a
clever project and I like his approach to working with sponsors.

### Describe your computer hardware setup

My setup is pretty limited. I lost most of my stuff in a fire a year ago, so I’m
using an old Macbook Pro from 2015 with a trackpad. I have an ASUS external
monitor. In this respect, I’m not too picky about the tool I use. I don’t feel
that what’s limiting me is the speed of the keyboard, but more how I approach
the bigger picture.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome, but it depends on what I’m testing.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** VS Code.

**Source control:** Git + GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/liveblocks-guillaume-salles-desk.jpg"
alt="The desk of Guillaume Salles, Liveblocks." width="100%" >}}

I work from a small wooden desk that I built myself with some Lego and plants.
It’s very minimalist. The one thing I’ve invested in is a
[Herman Miller](https://www.hermanmiller.com/) chair. I feel it is important to
have a good chair, as I spend 10 hrs per day on it.

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Coffee. I drink a lot of coffee!

**Silence or music?** Music.

### What non-tech activities do you like to do?

For the last two years, I’ve started to play chess. I find it fascinating as
it’s one of the activities that I can do where I forget about work and
disconnect completely.

I also try to workout throughout the day, so I’ll play tennis, squash or go for
a long walk.

### Find out more

[Liveblocks](https://liveblocks.io/) is a real-time collaboration API. It was
featured as an "interesting tool" in the
[Console newsletter](https://console.dev) on 29 Jul 2021. This interview was
conducted on 26 Jul 2021.

Console is an investor in Liveblocks. We are actively investing in devtools
related startups that fit our [selection criteria](/about/#selection-criteria)
for the newsletter.
