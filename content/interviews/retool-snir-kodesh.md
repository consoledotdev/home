---
title: Interview with Snir Kodesh, Retool
who: Snir Kodesh
role: Head of Engineering
org: Retool
what: Internal tool builder.
tags: ["Internal tools"]
date: 2021-08-10T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Snir Kodesh, Head of Engineering, Retool.
isPage: interviews
topImg1Src: /img/interviews/retool-snir-kodesh-profile.jpeg
topImg2Src: /img/favicons/retool.com.jpg
ogImg: /img/interviews/retool-snir-kodesh-profile.jpeg
---

### What is Retool and why did you build it?

[Retool](https://retool.com/) is the fastest way to build internal apps and
tools. We all used to work on internal tools ourselves, and we realized that we
were building tools that were quite similar. That’s how the idea for Retool came
about.

Internal tools are not particularly desirable to write for most software
engineers, in the sense that they don't really progress the art form of the
business model. At least from my personal experience, they are a bit of a tax
when you're building product: you build the internal tool in order to support
that product in the wild.

This creates a good opportunity for us to effectively group the common pieces,
and ship them as an abstraction. This is what Retool does— it allows people to
build internal tools easily, in a highly accelerated way.

Every internal app has some sort of view and a connection to a datastore. Retool
is a collection of drag and drop components that allow you to construct that
front-end, and hook into your back-end. We also make all of that really simple.
You can get what might take the order of weeks in just hours, and be set up with
a tool and process that works out of the box. It's also beautiful, elegant, and
a lot easier than writing everything from ground up.

{{< img-center
src="/img/interviews/retool-snir-kodesh-product.gif"
alt="Retool product screenshot"
width="100%"
caption="Building interfaces in Retool."
>}}

### How have you seen developers solve this in the past?

Part of the reason I came to work on Retool is that I realized every role I’ve
had, both as an individual contributor and as an org leader, would have
benefited from a product like Retool.

Prior to Retool, developers would build bespoke interfaces over and over again.
It is very similar to the cloud providers. People used to manage their own data
center and build their own networking stack over and over again - it was fairly
repetitive. In the Retool case: the same pattern is applied to a different
application. Company to company, tools solve the same set of problems and do so
through similar interfaces which are always built zero-to-one.

Building from scratch is still the "best alternative" to Retool, but people come
to us to accelerate that path to production, and free up engineers to be that
much more productive across the board.

### What does a "day in the life" look like for you?

A lot of my day is spent on execution at an org level: hiring, ensuring we’re
progressing to our goals, and identifying opportunities to improve the execution
of engineering.

I also spend a lot of time writing docs, in meetings, and in one-on-ones. I
don't write that much code anymore. It's been several years since I was in the
critical path, though I do build Retool apps! I think that's really important
from a ‘dogfooding’ perspective; especially for someone like me who hasn’t built
web apps in a long time.

### How are you approaching org design as Retool is scaling?

Today, we're a very small team - 27 engineers - which for a product of our
ambition and for the type of traction that we have, is overwhelmingly low.

I would say we're probably a third of the size that we should be today on the
whole, partially because our business can extend horizontally. A big part of
internal tools extends beyond the front-end. They involve server-side logic and
server-side computation, and we have an opportunity to extend into that. You can
imagine a whole set of products that can come out of Retool beyond what we do
today.

We need to grow across the board. Hiring and recruiting are one of the most
important investments for us right now.

### Who do you consider your users?

Definitely developers, though I’d extend that to any technical author. We see a
lot of positive traction in the data science community as well. Anyone with a
basic knowledge of JavaScript and SQL would be our target user.

### How do you think about building for developers?

There's a little bit of an ‘aha’ moment for folks when they see Retool, coming
from the sheer power of the product today.

For example, you can author a Retool app that functions as a test suite for
another app. Another example is that we support building custom components. We
don't ordain to think that we have defined everything for everybody: if you want
something custom and bespoke you can still pull that in.

More often than not, when folks see a low-code product, they assume it's also
low fidelity, and that's not the case with Retool. We're not huge believers in
no-code, because we want to give extensibility to developers. We see ourselves
as a platform and any platform doesn't want to constrain what can be built on
it.

We know Retool is a place where you can build great CRUD applications, and bring
disparate sources together (for example, your core user store and the Stripe
ledger) into one cohesive view. The gold standard for ourselves is to get to a
place where people build amazing things on Retool that we couldn't have
conceived. In order to do that, we have to give control and power to the end
user—the technical author. That's what we're thinking about a lot: the tension
between staying delightful and easy to use while offering a powerful, extensible
and flexible product.

### What is the team structure around Retool?

Today our grouping is somewhat intuitive, with a focus on the core product,
which is what our customers see and interact with. We have our infrastructure
team which helps us move faster: testing frameworks, deploying processes,
provisioning, developer productivity etc.

We also have a team that is effectively around the developer workflow for our
customers. Retool itself is an application environment, and is by extension a
code environment. Think of all the things you can do with your microservice
today: versioning, deploy pipelines, testing suites—we want to enable all of
that for Retool.

This structure is a reflection of our team size today. As we scale the team, I
can envision 20 teams focusing on the different parts of our product ecosystem
and going much deeper than we do today. The same is true of infrastructure and
our core product platforms.

Performance is a really good example of something that's critical for us. We're
a complex product with a complex front-end, which is a bit of an exception with
most apps (web or otherwise)—we cannot be a thin client. Retool’s front end is
really meaty, and that implicates performance. Again, there’s a healthy tension
there—we want to push more compute and product function to our end-user but
don’t want to negatively affect the performance of the browser.

### How are you thinking about SaaS vs self-hosted?

Both are important parts of our business. We want people to come to Retool and
be able to explore, build and experience its power with very little oversight
from us. We've also supported deployable Retool instances for a while,
especially for customers that have data sitting in their private cloud that they
can’t expose otherwise. We have always been happy to have a more conventional
licensing type of model, where we send an image and our customers will deploy
it. But we also have a cloud-hosted option.

In the past, our on-prem model required an escalation to our sales and support
teams—you couldn’t get off the ground without engagement from HQ. Expanding our
self-hosted option so that startups and individuals can self-serve themselves is
important so that even more people can use our product with as little friction
as possible.

Ultimately we care about all of our customers; organic discovery and
self-enablement is going to be relevant for us in perpetuity.

### What is the most interesting development challenge that Retool faces?

From a technical standpoint, our front-end is really complex. Again, it's a
little meta, but treating the browser/client as a development environment, and
having dependency graph construction for an app live locally while doing
everything client side is hard.

What's interesting about Retool today is that no customer-generated code runs on
our back-end. As we change that, that'll be an interesting problem: managing
thread pools, sandboxing, ensuring performant logic, and preventing resource
starvation. There's a lot of cool stuff that happens once we descend into that
arena.

### What is the tech stack?

It's mostly React, JS, and TypeScript. The back end is written in NodeJS.

### How did you get into software development?

Computer science has been a constant for me since grade school with
[Logo](<https://en.wikipedia.org/wiki/Logo_(programming_language)>). I was
programming little games growing up, and then accelerated my own learning with
Java in high school.

I majored in computer science, followed up with a masters in it. The power and
scale of software is compelling. Software is so unique in that it scales
universally with very little marginal cost. I subscribe heavily to Marc
Andreessen's quote, "Software is eating the world” - yet another reason I’m
excited about Retool.

### What is the most interesting tool you've been playing around with recently?

[GPT-3](https://en.wikipedia.org/wiki/GPT-3) is really compelling, especially
because they've got some really cool code generation systems, which I've been
tinkering with.

### Describe your computer hardware setup

At home I have two external monitors, a mechanical
[Das keyboard](https://www.daskeyboard.com/daskeyboard-4-professional/) with the
cherry MX switches and a gaming mouse from my gamer days. It is still good, 12+
years later.

My computer is a MacBook M1.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack for work. I use all forms of chat, otherwise WhatsApp, Signal,
WeChat, Google Chat.

**IDE:** I actually got made fun of when I was last on critical path because I
would actually use [Vim](https://www.vim.org/) with my styles in a console. My
team made fun of me, and called me a dinosaur, so I adopted
[PyCharm](https://www.jetbrains.com/pycharm/) and
[GoLand](https://www.jetbrains.com/go/).

**Source control:** Git + GitHub.

### Describe your desk setup

{{< img-center
src="/img/interviews/retool-snir-kodesh-desk.jpg"
alt="The desk of Snir Kodesh, Retool"
width="100%"
>}}

I just got a sit-stand desk. For two decades, I was using the same IKEA sheet of
glass held by two planks, so I got a grown-up desk for a change. That's about
it.

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Tea.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I like playing music. I haven't had a piano of my own in a while, but I played
both piano and saxophone. I spend a lot of my time with my two kids and my wife.
If I can get time to myself, I love movies and the occasional video game, but
that's never happening these days.

### Find out more

[Retool](https://retool.com/) is an internal tool builder. It was featured as an
"Interesting Tool" in the [Console newsletter](https://console.dev) on 12
Aug 2021. This interview was conducted on 10 Aug 2021.
