---
title: Interview with Jay V, Seed
who: Jay V
role: CEO
org: Seed
what: A deployment system for serverless.
tags: ['Serverless']
date: 2021-03-05T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Jay V, CEO, Seed.
isPage: interviews
topImg1Src: /img/interviews/seed-jay-v-profile.jpg
topImg2Src: /img/interviews/seed-jay-v-logo.svg
ogImg: /img/interviews/seed-jay-v-desk.jpg
---

### What is Seed? Why did you build it?

At [Anomaly](https://anoma.ly/), we’ve been building products for some time
now. A few of them were quite popular, including one that was in the top 100 in
the App Store. At some point in the product’s lifecycle we would hit some
scaling and operational challenges. For a small team, this ended up being very
time consuming.

So when we discovered the serverless approach, it just made so much sense for
us. We started using it internally. The first problem we hit upon was that
there were no resources to help us get started. So we created [a really
comprehensive guide for building full-stack
applications](https://serverless-stack.com/#guide). We made it completely free.
Our guide is now the most widely read resource for serverless.

While using serverless internally we realized that setting up a CI/CD pipeline
and managing deployments for non-trivial serverless apps was quite complicated.
We wanted something like Heroku, where you could just git push to deploy. We
spoke to a few of our readers and eventually built Seed.

[Seed](https://seed.run) is a service that makes it easy to deploy, manage, and
monitor serverless apps on AWS. We've built a custom infrastructure to
incrementally deploy serverless apps, speeding it up 100x. It also includes a
fully featured CI/CD pipeline that's a little like Heroku. And a dashboard that
shows logs, metrics, and issues for your serverless apps.

For teams that are
building serverless apps at scale, managing a deployment pipeline can get
really complicated and slow. It's not uncommon to see deployments that take
45mins. And build scripts that grow over a thousand lines.

Seed fixes this by
supporting serverless apps out of the box, so you don't need a build script.
And our custom infrastructure speeds things up by incrementally deploying your
apps.

Another area of particular interest for us was the local development experience
for serverless. Seed is almost entirely serverless. So this is something that
affects us everyday. We spoke to our users and readers and found that
almost everybody was having a bad experience. One of the teams we spoke to
mentioned that they had toyed with the idea of using something like
[ngrok](https://ngrok.com/) (or tunneling) to proxy the Lambda function
invocations to their local machine. And that got us thinking about how we
could build that idea into a development environment that automatically did
that for you. That idea led to us creating [Serverless Stack
(SST)](https://serverless-stack.com/).

{{< img-center
src="/img/interviews/seed-jay-v-product.png"
alt="Seed product screenshot"
width="100%"
caption="Seed deployment pipeline dashboard."
>}}

### What does a “day in the life” look like?

I check my emails and messages right after I wake up. I meditate. I always had
the habit of meditating since I was a child. But as I grew older my meditation
practice was more on and off and I was lacking direction. A couple of years ago
a friend recommended reading "[The Mind
Illuminated](https://www.simonandschuster.com/books/The-Mind-Illuminated/John-Yates/9781501156984)”.
It’s a more practical guide to meditation. I’ve been following its practice
since and it’s had a huge impact on my day to day life.

Then I workout, these days that means running since all the gyms are closed.
Shower, have breakfast, and start working.

I usually have one big thing I'm trying to accomplish for the day. It can range
from development for Seed, I do the frontend, so React. Or for [Serverless
Stack](https://serverless-stack.com/), our open source framework, it's mostly
Node. To product design for the Seed console or visual design for our marketing
pages. Also writing, adding to our [Serverless Stack
Guide](https://serverless-stack.com/#guide) or just plain old documentation.

I also try to do all our support, look at issues on GitHub, and spend time in
our community Slack channel.

### What is the team structure around Seed?

It's my co-founder [Frank](https://twitter.com/fanjiewang) and I. We are both
engineers. We go way back. We met in first year university, back in 2003. We
were roommates, and have been working on projects together ever since. He does
more of the infrastructure and backend. While I do more of the frontend and
design.

### How did you first get into software development?

I think I might've learnt Logo, Basic, and some other educational languages in
school as a kid. It wasn't until high school when I first made software outside
of what was required in class. That was through Visual Basic on a PC I built
with my dad, and it gave me a taste for building products that people could
actually use. I was fascinated by the programs on my computer and wanted to
make something like that. With all the icons, splash screens, wizards, and what
not.

I didn’t build anything commercial with VB. But I went overboard for a school
project and made a Dragon Ball Z turn-based game. Pretty much because I was
into online gaming back then and wanted to make something fun.

Then in my second year in university, while I was stuck in an incredibly boring
internship, I learnt web development and built my first website. I quickly got
into Ajax and the whole Web 2.0 craze and started trying to make my own JS
frameworks like YUI or Ext.js back in the day. I had a coworker at that
internship that was equally bored, he helped me when I had questions. This was
pre-Gmail, so doing anything Ajax related felt really cutting edge and cool to
me.

I've been building products ever since.

### What is the most interesting development challenge you’ve faced working on Seed?

As Seed grew, we started getting more feedback around the deployment speed.
Many teams had deployments on Seed that took nearly half an hour. This seemed
crazy to us. We did a couple of small optimizations along the way but soon
realized that we needed to rethink the deployment infrastructure for it.

So, a couple of months ago we launched [Incremental Deploys in
Seed](https://seed.run/blog/incremental-lambda-deploys-in-beta). That required
us to break down each and every part of the deployment process and think about
optimizing it. We have hundreds of teams deploying through Seed every day, so
we had to figure out reliable and scalable solutions to a whole host of
problems.

Serverless apps are organized into separate services, where each service is
made up of dozens of Lambda functions. Most reasonably sized serverless apps
have at least 20 of these services. A serverless deployment at its core is
bundling and packaging individual functions. The tooling out there wraps around
all this and provides a single CLI command that deploys a service. Our old
infrastructure would basically run these commands when a git commit was pushed.
There were some optimizations but Seed would treat the command as a black box.

With Incremental Deploys, Seed now operates at an individual function level. It
stores the deployment state of the entire app down to each Lambda function. It
then uses Lambda to run concurrent checks on what needs to be updated. We use
[Step Functions](https://aws.amazon.com/step-functions/) internally to
coordinate these Lambdas and to handle retries.

We also have another set of optimizations around caching dependencies and
making sure they are restored in time before the functions are packaged.

We also had to figure out how we were going to roll out these changes. We ended
up doing it in phases over the course of a month and half as we created a
completely new infrastructure and slowly shifted all of our workloads over. The
older infrastructure was more straightforward. Provisioning a fleet of
containers and running these build jobs. But the new one is a mix of serverless
functions and containers that we manage ourselves.

### What is the most interesting tech you are playing around with at the moment?

Our open source framework for serverless is based on
[CDK](https://aws.amazon.com/cdk/). And so we've been spending a lot of time on
that. It allows you to use regular programming languages for creating
infrastructure. That gives rise to [some very interesting
patterns](https://docs.serverless-stack.com/design-principles#progressive-disclosure)
as you can compose and reuse constructs in novel ways. From a design and
developer experience perspective it can be very interesting.

### Describe your hardware setup

A late 2013 MacBook Pro. For better or for worse I've gotten used to not using
an external display. And no external keyboard or mouse either. I have an
external USB hard drive that I connect to once in a while and it runs Time
Machine.

I have an iPhone SE that I'll probably upgrade to a Mini. I like phones that I
can use in one hand. And I think the iPhone 4 and 5 were the best designed
ones.

### Describe your software setup

**OS:** I'm on macOS Catalina, I'll need to upgrade when I get a chance.

**Browser:** I prefer Safari because it consumes less battery.

**Email:** I use the standard Apple Mail app that connects to Gmail.

**Chat:** iMessage to talk to Frank and Slack for our open source community.

**IDE:** I use [MacVim](https://github.com/macvim-dev/macvim) and Git through
the terminal.

### Describe your desk setup

{{< img-center
src="/img/interviews/seed-jay-v-desk.jpg"
alt="The desk of Jay V, Seed"
width="100%"
>}}

I have an Ikea table and the Markus chair.

I have a pair of AirPod Pros that I leave on all the time. I recently got a new
[Logitech c920
webcam](https://www.logitech.com/en-us/products/webcams/c920-pro-hd-webcam.960-001055.html)
and a [Snowball Ice mic](https://www.bluemic.com/en-us/products/snowball-ice/),
to not look and sound terrible on Zoom.

These days it's all from home. But before the pandemic, it used to be from
other workspaces, so I preferred having a lighter setup.

### When coding

**Daytime or nighttime?** I have a couple of sessions throughout the day. I try
to focus on the harder stuff during the day but somehow it always bleeds into
the night.

**Tea or coffee?** I don't usually drink tea or coffee while I work. But lately
I've gotten on a sparkling water habit.

**Silence or music?** Silence or music? I usually have some music playing. And
I'll change it based on what I'm working on.

### What non-tech activities do you like to do?

These days sadly not very much. I've picked up running. I started running for
the first time when the pandemic started. I'm trying to run a 5k in under
20mins. I'm getting close, I'm running it at a little under 21mins. But I'm in
Toronto and the winters have spoiled what work I can do!

### Find out more

[Seed](https://seed.run) is a deployment system for serverless. It was featured
as an "Interesting Tool" in the [Console newsletter](https://console.dev) on 21
Jan 2021. This interview was conducted on 5 Mar 2021.
