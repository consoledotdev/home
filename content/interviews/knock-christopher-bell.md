---
title: Interview with Christopher Bell, Knock
who: Christopher Bell
role: CTO
org: Knock
what: Product notifications infrastructure.
tags: ["Notification"]
date: 2022-03-30T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Christopher Bell, CTO, Knock
isPage: interviews
topImg1Src: /img/interviews/knock-christopher-bell-profile.webp
topImg2Src: /img/favicons/knock.app.png
ogImg: /img/interviews/knock-christopher-bell-desk.jpeg
---

### What is Knock? Why did you build it?

[Knock](https://knock.app) is product notifications infrastructure for
developers. We provide a set of simple APIs and a dashboard that developers use
to introduce thoughtful notifications into their products, without having to
build and maintain a notification system in-house.

Most products today end up needing notifications that go out to their customers.
Notifications become a core part of the product, but typically don't provide any
real differentiation and everyone is building the same system over and over.
These notification systems tend to start out simple, sending one forgotten
password email, but the complexity often ramps up as you introduce new features
like orchestrating across different channels, add cron jobs to handle delays and
digesting, and introduce per user preferences.

My co-founder and I experienced this pain firsthand when we worked together at
[Frame.io](https://frame.io/), a video collaboration product that was recently
acquired by Adobe.

We built a notification system in-house there which was this ball of mud that we
were constantly adding new features to. The notifications were a really
important part of the engagement loop in the product, but we were spending a lot
of engineering time maintaining and updating templates, shipping new
notification channels, and then experimenting with notifications as drivers of
growth. What we realized from building that, and talking to other folks about
building notification systems, was that so much of the system was generic, and
was filled with a lot of grunt work for engineers. We felt there was a great
opportunity to turn this into a service, and so Knock was born.

We don't send the notifications ourselves. We integrate with all of the
providers who are already doing that job today like
[SendGrid](https://sendgrid.com/), [Twilio](https://www.twilio.com/),
[Postmark](https://postmarkapp.com/),
[APNS](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html),
[FCM](https://firebase.google.com/docs/cloud-messaging), and
[Slack](https://slack.com/). You provide your credentials, and we'll manage the
delivery on your behalf. Again, removing this entire concern from your service
and making it our problem to reliably deliver messages to those providers. As
well as those "out-of-app providers", we give you an API to power a real time
in-app notification feed experience, and pre-built composable React components
you can drop into your product.

We also provide a full suite of management tools. We have git-like versioning
baked in so you can confidently make changes to your notifications before they
go to production. We have testing tools so you can send notifications without
invoking flows in your product. And we have fantastic observability. Everything
from the API request coming in, through the workflow engine that's invoked, we
give you logs that you can use to understand exactly what's happening and answer
the question of why or why not someone got a notification sent.

We definitely believe in this idea of using APIs all the way down in your
product, so you can focus on the bit that's differentiating for your business.
What we've found is that more often than not, notifications are a liability more
so than a differentiator and that's exactly what we're trying to solve with
Knock. Giving you a reliable, scalable piece of infrastructure you can leverage
to send high quality notifications to your customers with little engineering
effort.

### What does a "day in the life" look like?

I still code, about 30% of my day. My days are mostly spent fixing small bugs
for the team. I try not to take on too big feature work anymore, because as we
grow, I'm mostly fielding things like customer requests, security
questionnaires, etc. All of the fun stuff that CTOs end up having to do.

Otherwise, I’m working with my co-founder, thinking about the product strategy.
We make sure that what we're thinking about, in terms of the feature work, makes
sense and is cohesive.

I’m currently trying to give more of the team ownership, and responsibility.
This is a commonplace to be for a lot of early-stage CTOs, especially where you
were instrumental in building the first version. Now, you're figuring out what
the path forward looks like, handing off parts of it to the rest of the team, so
they can maintain it and take ownership. We don’t have dedicated product
managers, so a lot of the "product thinking" still lives with the founders.

### What is the team structure around Knock?

There’s myself, my co-founder, and then we have four engineers. We're a small,
but mighty team, getting things done. Everyone on the team is full stack right
now. That's a really nice attribute of being an early stage team, where you can
move super fast and everyone can think about customer value, more so than when
you have specialized roles because each engineer can write features truly
"end-to-end".

Everyone on the team writes Elixir, and TypeScript. All of our backend services
are written in Elixir, and then we have our control dashboard which is written
in React, Next.js, and TypeScript.

### Why did you choose Elixir for the backend?

When you are setting out a new project, and you are aiming to build a company,
you do the thing that you know best. I've worked in Elixir for the last six
years. I've been a big advocate of the language in the community, and have built
a lot of businesses using Elixir.

This is the best fit for a product using Elixir that I've ever had, in the sense
that a lot of how we've modeled the system really relies on the high concurrency
model that Elixir provides. When you think about notifications as processes, and
that those processes can be started and stopped, and really lean into this idea
of the actor, the model here can be powerful in how you can build these highly
performant concurrent systems.

Beyond that, Elixir is just a lovely language to write in. It's really nice to
express workflows and data transformations. A lot of what we do in our
notification engine, gets nicely represented in Elixir.

Functional languages have a great sweet spot in building backend services. On
top of that, Elixir is written on the [Erlang](https://www.erlang.org/) VM, and
therefore you get all of these amazing benefits of what has happened in Erlang.
There are 30 years worth of building highly reliable, concurrent, fault tolerant
systems. We get to build on the shoulders of that. You don't really have to
think about a concurrency model. You know the scheduler is going to "just work"
and handle sustained load at a high throughput.

### How did you first get into software development?

I started out building computers when I was 13 years old and fell into working
with Linux. I started reading
[The C Book](https://www.amazon.com/C-Programming-Language-2nd/dp/0131103628),
and then I really got into building websites for a gaming clan. Playing Call of
Duty 1 online and playing Counter-Strike, we needed to host gaming stats
websites, so I got into PHP development, and started hacking around open source
tools that you could deploy by yourself.

Later, I did a computer science degree and I haven't looked back since. I still
love programming, and can't even imagine what else I would do. You get to a
point in your career, where, "This makes sense to me." I love the problems that
we deal with, and the challenge of programming.

Web development is great because you can be You know the scheduler is going to
"just work" and handle sustained load at a high throughput. I truly believe in
the power of the web.

### What is the most interesting development challenge you've faced working on Knock?

The obvious answer would be thinking about scale, because we're dealing with
notifications, and therefore we need to deal with a high volume, high scale
system, but honestly, I don't think the answer is that.

I think it's the trade-off from building an infrastructure company, and the time
to get to market, that is the real challenge.

As an early-stage CTO, one of my jobs is not just to pontificate endlessly about
what we're doing. My job is to actually build something of value for people. It
was an interesting challenge because, on the one hand, I'm thinking, "Is this
business going to work?" Do we even know that we've got anything here, beyond an
MVP? On the other hand, you're thinking, "Okay. Well, I need to build this with
scale in mind. What happens if we get a big customer?"

That was an interesting balance of using Kubernetes and about using Terraform
for all our infrastructure so we’re ready for our SOC 2 requirements. How do we
architect this service, and make it good enough, so that we can get to the next
inflection point in scaling? Understanding what that point is by load testing,
and getting a good understanding of the system at large. That's good enough for
now, but how do we hire smart people as soon as we get to the next point and
then keep scaling?

This has been a hard problem to balance, because your instinct as an engineer,
and as an engineering leader, is "we should do really cool things, and make this
really complex”, but I've tried to keep it as simple as possible. We’ve tried to
build something that works from the beginning and delivers value.

### What is the most interesting tech tool you are playing around with at the moment?

I think a lot about databases at the moment. When you're building anything at
scale, you face problems like sharding, and horizontally scaling.

One company I've been really paying attention to recently is
[PlanetScale](https://planetscale.com/). They do a fantastic job on the
developer marketing side, and it is a super interesting project. How do you run
a database and shard it without bringing all of that logic into the application?

That's really interesting, but in the spirit of doing things that we've done
before, we're using
[Aurora Postgres](https://aws.amazon.com/rds/aurora/postgresql-features/)
specifically because I had a really good experience with it at Frame.io. We were
very early adopters. The block storage engine they have allows you to scale, but
you can't run a single database forever. Which is why I'm considering
alternatives that aren't Postgres, and why I've been playing with PlanetScale

### Describe your computer hardware setup

I use an [M1 MacBook Pro](https://www.apple.com/macbook-pro/) and a Kinesis
Freestyle Edge split keyboard with [MX](https://www.cherrymx.de/en) brown
switches so I'm not too loud when I'm working in my coworking spaces, as well as
a [Logitech MX mouse](https://www.logitech.com/en-us/mx/master-series.html).

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Airmail.

**Chat:** Slack.

**IDE:** [VS Code](https://code.visualstudio.com/)

**Source control:** GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/knock-christopher-bell-desk.jpeg" alt="The desk of Christopher Bell, Knock" width="100%" >}}

I'm on the road, so it's basically a laptop stand. I got one of those very small
collapsible laptop stands that I can put in my backpack, then I carry my split
keyboard, and my mouse, and that's my entire desk setup now.

I’m doing a live-work-travel thing (don’t call it nomading), right now. It’s a
nice perk of running a remote team that I can be anywhere.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

This is one of those "Do I have a life?" questions. Honestly, my favorite thing
to do is hang out in dive bars with my friends. Dive bars in the US are awesome.
I love to drink a rubbish beer, like a Miller High Life, sit there, in a bad bar
that's badly lit, and just hang out. Beyond that, I cycle, and play Squash,
because I have to keep my British thing going. I’ve also enjoyed dining out more
since I started traveling.

### Find out more

[Knock](https://knock.app/) is product notifications infrastructure for
developers. It was featured as an "Interesting Tool" in the
[Console newsletter](/) on 07 April 2022. This interview was conducted on 30
Mar 2022.
