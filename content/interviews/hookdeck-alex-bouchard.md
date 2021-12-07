---
title: Interview with Alex Bouchard, Hookdeck
who: Alex Bouchard
role: CEO
org: Hookdeck
what: An inbound webhook store and forward proxy.
tags: ['DevOps']
date: 2021-05-07T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Alex Bouchard, CEO, Hookdeck
isPage: interviews
topImg1Src: /img/interviews/hookdeck-alex-bouchard-profile.png
topImg2Src: /img/favicons/hookdeck.com.jpg
ogImg: /img/interviews/hookdeck-alex-bouchard-desk.jpg
---

### What is Hookdeck? Why did you build it?

The idea for [Hookdeck](https://hookdeck.com) originated from when I ran a
large Shopify store. We had our own tech stack to manage the business
operations. We had been working a lot with the Stripe webhooks. Stripe has this
UI to see your webhooks and retry them - this saved me a few times when we had
a bad release or a 3rd party dependency was down. You can just generally trust
that you’ll know if something goes wrong and you’ll be able to do something
about it.

But with Shopify there's not much we could do when things went wrong with the
webhooks. That left me with a very sour taste: "Why can't everybody be like
Stripe?". I started brewing around this idea, why can't we make the webhooks
independent to the platform sending them?

Once I started talking with other people in the field, I realized that what was
really going on is that many teams were building around this problem. They
would essentially be rebuilding the same things on top of GCP or AWS to put in
place those ingestion systems, queues, logging, alerting, etc. This is
expensive - spending developer time on things that are not really contributing
to the end user. It's more of a necessary evil for the whole product to work.
It's rarely the actual product.

We've found there's two different categories of tech teams right now working
with webhooks. The first is companies running at scale where they have a big
team and can dedicate time to solving this themselves. Sometimes things go
wrong, such as when there's very large spikes during Black Friday type of
events, but they often have their homegrown solution.

On the other side of the spectrum (which I used to be in), there are companies
like small ecommerce sites where it's not reasonable to invest two months
trying to build webhook ingestion and processing infrastructure. What tends to
happen is you essentially just accept errors as part of the cost of depending
on webhooks.

This is where Hookdeck comes in. It gives you the option of not having to bear
the developer (or infrastructure complexity) cost because we can provide it for
you within a few minutes, and scale as you grow. You never really have to think
about it.

Often teams will leave it until too late. You might be aware of the problem but
then suddenly you’ll hit a point where errors are starting to happen at a
higher frequency and start getting really concerned by it. Then it becomes much
more of a last minute fix. This is when problems arise. Everyone underestimates
the challenge. If you just get started on Hookdeck, you don't have to bear any
of that cost. As you scale, you will never really hit any of those points,
because it will just scale with you.

It's a classic buy versus build problem. In our case, we found it makes a lot
of sense for most teams to be using a third party for something like this.

{{< img-center
src="/img/interviews/hookdeck-alex-bouchard-product.gif"
alt="Hookdeck product screenshot"
width="100%"
caption="Hookdeck CLI receiving webhooks locally."
>}}

### How are developers solving this today?

In development most people use [ngrok](https://ngrok.com). But the free version
only gives you ephemeral URLs, so people are always spinning up new URLs to get
requests proxied locally. As we started venturing into this we've decided to
offer local development URLs completely free of charge. As of a few days ago
everything that's development related can be used without a Hookdeck account.
You can just generate a URL and receive your webhooks locally.

In production, the most popular solution is [SQS](https://aws.amazon.com/sqs/).
I often get asked, why can't I just use [Lambda](https://lambdaschool.com/),
and SQS, and so on? You realize that the webhook ingestion problem is much
bigger than that. Partly because it's not just about receiving it and queuing
it. You get all the concerns around logging, retrievability and
troubleshooting. We find that, even though you'll have this built out, you'll
spend days just being in your logs in
[CloudWatch](https://aws.amazon.com/cloudwatch/) trying to figure out what
happened and trying to retrieve data to replay it.

SQS is really just the tip of the iceberg. There is still quite a bit of code
that you'll need to write and deploy through Lambda functions, to properly
interact with those queues. Queues seem simple until you start working with
them, and then it always ends up being a lot more time than you thought it
would.

A lot of edge cases arise because of the fact that you don't really control the
volume nor do you control the payload itself, which is why it makes sense to
offload that to someone like us.

Even if you know that you've missed, say 50,000 webhooks in a weekend because
of a bad release, or because a third party dependency went down, there's really
nothing you can do about it. You'll have to write a script to go and pull those
events from the original API and try to replay them. In Hookdeck, there's a
little retry button you can hit and the problem is solved.

### What does "a day in the life" look like?

I work on Hookdeck most days, but I manage to make the most of the days by rock
climbing, skiing, or doing something of that sort! I spend a lot of my day
outdoors doing different kinds of sports.

It works especially well during the ski season, because it's one of those
sports where you get completely cooked in two or three hours. I used to go to
the hills, ski like a madman for three hours, then have the rest of the day to
work...which I'm super grateful for. I try to schedule my meetings and calls
with customers and prospective customers in between my rock climbing sessions
now. I've been extremely lucky to be able to do that.

Otherwise, I’m working on Hookdeck. I'd say about a third of my time is spent
on the product design and user experience, a third of doing outreach, and a
third one working specifically on the tech, architecting new features and
writing more tests.

### What does the team look like?

There's four of us right now. Three engineers working on the technical team,
then my co-founder [Eric Bang-Tri Tran](https://ericbangtri-tran.com/), who is
in charge of the business side of things like operations and business
development. [Shawn Parent](https://www.linkedin.com/in/shawnparent/) and
[Maurice Kherlakian](https://twitter.com/mkherlakian) are senior engineers -
very experienced with large scale, high reliability and concurrency systems.

I work on the product side of things. I started my career as a product
designer. For me the development and technical side of things has always been a
means to an end, building the vision for a product that I had. I'll spend more
of my time and more of the effort on that side of things.

But of course everybody does whatever is the most important at that time.
Reliability is the most important thing on the engineering side, so this is
where most people are focused.

### How did you first get into software development?

In a previous company I worked at, the founder of the company kind of made me
pick. He told me, "Alex, you can't really do both design and engineering." I
picked design, but then maybe three or four months into that job I was already
working on the backend. I can't quite recall how that happened. I say I started
as a product designer, but the truth is, in my heart, I've always been doing
both.

The way I really started was with video games. When I was about thirteen years
old, I started working in Unity building games and so on. I remember writing
game design documents that would be 20 or 30 pages long for games that I was
sure I would release one day, but then obviously never did.

Then I moved into web-based technologies. I'm still self-taught in the sense
that I didn't have formal studies in it. I've just been hacking away for a
decade or so, and that's how I got where I am.

### What's the most interesting challenge you faced building Hookdeck?

Let me start with reliability. One of the interesting technical challenges has
been, what credible things can we do and say to make it sufficiently reliable
for someone to believe that we'd be more reliable than their own system? We're
trying to have better odds at ingesting and delivering your webhooks then you
would.

I see a lot of startup founders saying, "Oh, reliability is a priority, and we
will not go down.” Frankly, that's just a little bit delusional, in the sense I
know I'm not going to do better than the folks at GitHub, or AWS, and so on.
Everybody has their outages.

As a small startup, we can't make the argument that you have 200 SREs working
on this. So we think about the things that we can do for someone to believe in
the reliability of Hookdeck. Our approach has been to say, "Well, listen, the
most critical part for us is the ingestion. As soon as we've received and
captured a webhook, what happens down the road, we can recover from, but if we
miss the webhook, we're in a very bad spot, because then there's really not all
that much we can do about it."

We've decided to completely isolate the ingestion from the rest of the system.
There's no shared dependency, there's no shared code, there's no shared
deployment pipeline. Any form of code changes to the core would not deploy or
re-trigger a new deployment on the ingestion. We've also kept the number of
dependencies to a minimum.

The second challenge, which is maybe a little bit more practical in terms of
feature set, is throttled delivery - to be able to act as a queue. We tell you:
don't use a queue, respond directly and synchronously to webhooks coming from
Hookdeck. Hookdeck is behaving as a push queue. For those that are familiar
with Pub/Sub, it's similar to that in many ways, with just a lot more control
over it.

That always felt like something that was essential. Otherwise, it wasn't really
credible to say we were helping you with your webhooks, but then you still need
to set up your own queues to handle our requests to you. We took a lot of time
to figure out the design of how this would work. The main reason for this is
that our queue needs to be configurable per destination, per endpoint and per
server.

We wanted the rate limit to be dynamically adjustable - you can manually or
automatically set the rate limit via our UI or API, and it updates very
quickly. We also wanted to be able to adjust that algorithmically, based on
response time from your servers, and we wanted that to scale to potentially
hundreds of thousands of different destinations. We've had to redo the design
for this feature three or four times! On the fourth design I think we got it
right. That's been the most complicated feature to build in a way that is
scalable, stable and reliable.

### What's the tech stack?

Hookdeck runs on [Node.js](https://nodejs.org/) and
[TypeScript](https://www.typescriptlang.org/). Right now, we're mostly using
[Kubernetes](https://kubernetes.io/). The ingestion specifically is using
[Pub/Sub](https://cloud.google.com/pubsub) and [Google Cloud
Functions](https://cloud.google.com/functions) for limitless horizontal
scaling. We're also using Postgres for storage, [Redis](https://redis.io/), and
now [Go](https://golang.org/). Go was introduced recently with the introduction
of the CLI and the local development tools.

### What’s the most interesting tech you’re playing around with at the moment?

I used to spend a lot of time playing around with many different tools, but
trying to balance rock climbing and Hookdeck, means I have less time for that
these days

Recently, there's three things I found very interesting to explore whilst
solving some issues at Hookdeck. One has been Kubernetes. Coming into Hookdeck,
I had very little experience with it. It is now a key technology to make
Hookdeck possible.

A couple of years ago, I would push everything through
[Heroku](https://www.heroku.com/) but that would be completely unsustainable
for something like Hookdeck. Bridging the gap between Heroku and Kubernetes is
a very interesting opportunity. Just recently, we had to deploy some websocket
servers through Kubernetes, and seeing the breadth of things that you can
really do with it has been really good.

I used to fight my way through [CircleCI](https://circleci.com/) yml files.
[GitHub Actions](https://github.com/features/actions) has been a blessing. Now,
everything at Hookdeck is fully automated in terms of deployment, testing, and
so on. The only frustration is that it was so hard to debug. It was great to
discover [Act](https://github.com/nektos/act) in the latest Console newsletter,
so I’m going to be trying that!

The third thing for me, which is kind of a more personal thing, is that I've
always had a little bit of an imposter syndrome. Maybe because I was mostly
working in TypeScript and JavaScript because they were tools that lended
themself better to the web stuff I was working on prior.

I've been through some of other languages, like C#, and PHP, and so on, but
part of me felt like I needed to pick up something else to just feel a little
bit better about myself. Go is just perfect to build a CLI. It bundles into an
executable which makes it a very good candidate for that. I've been really
excited to pick something other than JavaScript.

We built our CLI fully in Go. That was my first time using it. I love it so
far. One of the issues with Hookdeck is that we are indirectly competing with
SQS and Pub/Sub on pricing, so working with more lower level languages may help
us there. Maybe Go, but I’ve also been thinking that Scala and Rust will be
really interesting to explore.

### Describe your computer hardware setup

One of the problems going around and chasing the rocks is that it's hard to
carry your setup with you. I actually have a van that I travel in. I don't work
from it, but I’m not carrying my desk and full setup. I do carry around a
25-inch monitor because I just can't live without it. So I'm working off a 13”
MacBook Pro, and I have a 25” Dell Ultrasharp monitor.

For the keyboard, I'm using the [Apple Magic
keyboard](https://www.apple.com/uk/shop/product/MLA22B/A/magic-keyboard-british-english).
My mouse is a [Razor Death Adder
v2](https://www.razer.com/gaming-mice/razer-deathadder-v2/RZ01-03210100-R3U1).
I've had the DeathAdder for the last 15 years, since it was released. Every two
or three years, it gets just too dirty that I need to buy a new one. I'm
possibly on my sixth or seventh DeathAdder. I do work a lot just from my laptop
nowadays though, because my girlfriend and I basically have to share the
monitor. So we have a rotation and a time allocation on it.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack, and we’ve recently introduced Basecamp. It's a great tool for
asynchronous communication.

**IDE:** VS Code.

**Source control:** Git.

### Describe your desk setup

{{< img-center
src="/img/interviews/hookdeck-alex-bouchard-desk.jpg"
alt="The desk of Alex Bouchard, Hookdeck"
width="100%"
>}}

Usually it's just the table that is available. A dining table we just pull up
the monitor onto. Because we travel between places, we just go around and make
do with what we have.

### What do you do for internet access when you're just driving around?

Usually, the LTE is pretty good, so I'll just pop that on and it does the job.
I've been looking into getting an antenna on my truck, because it's actually a
thing you can do to get a little bit better reception on the LTE. Perhaps
[Starlink](https://www.starlink.com/) will finally allow traveling around!
Fingers crossed. I'm in Canada, so at least I’m in the right latitudes for
Starlink. Maybe we'll get lucky.

### When coding

**Daytime or nighttime?** Day.

**Tea or coffee?** Tea.

**Silence or music?** In theory, music, but I get into this thing that my
girlfriend calls the ‘vortex’, where I just forget about the whole world around
me, and I forget to put on the next song. Music lasts for maybe half an album,
or an EP, and then I forget to play anything else, and I'll go on for hours in
silence.

### What non-tech activities do you like to do?

Obviously, a bunch of things outdoors. We travel around, find cool places to
climb, ski or hike.

### Find out more

[Hookdeck](https://hookdeck.com) is an inbound webhook store and forward proxy.
It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 6 May 2021. This interview was conducted on
7 May 2021.
