---
title: Q&A with Jason Bosco, Typesense
who: Jason Bosco
role: Co-founder
org: Typesense
what: a search engine optimized for performance and ease of use.
date: 2021-03-29T12:00:00+00:00
draft: false 
summary: Q&A interview with Jason Bosco, Co-founder, Typesense.
isSelected: qa
topImg1Src: /img/qa/typesense-jason-bosco-profile.jpg
topImg2Src: /img/qa/typesense-jason-bosco-logo.png
ogImg: /img/qa/typesense-jason-bosco-desk.jpg
---

### What is Typesense? Why did you build it?

[Typesense](https://typesense.org/) is a search engine that's optimized for
performance and ease of use, that you’d use to build search-as-you-type
experiences.
  
With Typesense we're trying to essentially build an open source search engine
like [Elasticsearch](https://www.elastic.co/) or
[Solr](https://solr.apache.org/), but with “out-of-box-ness” in mind - sane
defaults, intuitive APIs and simpler configurations and low operational
overhead.  Currently, to implement site or app search using one of these
services you have to wade through thousands of configuration parameters to
implement what you’re looking to do. Typesense simplifies things so that out of
the box, as you enter every key press, it starts returning results right away.

Typesense stores the entire index in memory, unlike Elasticsearch or Solr,
which makes it super fast. We typically try to serve results in less than 50
milliseconds. The speed is of course a function of the size of your dataset,
but I've been able to get sub-50 millisecond searches for as many as 10 million
documents in an index. We're trying to make it easy for everyone to have access
to search-as-you-type experiences, which I would say
[Algolia](https://www.algolia.com/) has done a fantastic job of. Many folks now
understand the power of instant search, thanks to Algolia, but it is a
proprietary platform, and very expensive at even moderate scale.

We're trying to democratize that Algolia-like search-as-you-type experience, so
anyone can get up and running really fast, all the way from your development
machine to production. We've also tried to simplify the ops overhead involved
in deploying a search cluster. With Elasticsearch, you have to tweak the JVM,
and there's lots of things that you have to get it to do to make it production
grade. We're trying to solve that piece as well.

{{< img-center
src="/img/qa/typesense-jason-bosco-product.gif"
alt="Typesense product screenshot"
width="100%"
caption="Search as you type interface with Typesense."
>}}

### Did it start as an open-source project?

We started as an open source project. When we started in 2015, it was a nights
and weekends project. We open sourced it in 2018, until then we were just
trying to see if this is even a thing that could work. It was born out of our
own pain with setting up an Elasticsearch cluster. We thought: "What would it
take to build our own search engine?" It was kind of naive at the time. It
turns out it takes a lot of work, which is why there are not many people doing
this around the world, but I'm glad we stuck to it!

In 2020 we started working on the commercial aspects. It's interesting that it
actually came out of users asking us for a hosted version of the product. In
September 2020 we launched Typesense Cloud. We still run the same open source
product in Typesense Cloud, but we've built a lot of automation and tooling
around being able to provision clusters, and around self-healing. If anything
happens, we are able to detect that automatically, and then the infrastructure
self-heals, and has mitigative actions in place.

We've had strong interest, and it seems that Algolia has continued to raise
their prices in the meantime, so we're on a nice collision path with Algolia!
In January 2020, before we had even started the commercial version, we did a
[Hacker News post](https://news.ycombinator.com/item?id=22181437) saying this
is an open source alternative to Algolia, which seemed to resonate well with
the community. We got almost 440 points and were on the front page for 24
hours. That was fun, and felt very validating.

### What's the logic behind writing it in C++ and distributing as a single compiled binary?

The C++ ecosystem is very mature at this point as people have been running C++
code in production at scale for a long time. This means we’ve been able to use
community-released libraries that have been used at large scale. The core
search algorithms are custom built but for things like the HTTP library we use
an open source project called [H2O](https://h2o.examp1e.net/). This is run by
[Fastly](https://www.fastly.com/) on their production edge nodes, so it’s
proven.

We also use a clustering library called
[Braft](https://github.com/baidu/braft), that's run by Baidu in production.
We’re able to take advantage of the mature ecosystem around C++, and it's saved
us a lot of time.

I’ve been a fan of the way GoLang compiles code down to a single binary. It
makes deployments just a matter of running that binary in production. Contrast
that with something like Elasticsearch where you have to install not just
Elasticsearch, but also the JVM and then some more to get it to run anywhere.
Given that our goal is to minimize operational overhead, we drew inspiration
from our past experiences and decided to ship Typesense as a single binary with
no external dependencies. It makes things so much more easier.

### What does a "day in the life" look like for you?

Of course there's the desired ‘day in the life of’, and there's an ‘actual day
in the life of’, what I’m explaining is the actual ‘day in the life of’! I
start the day with my co-founder, Kishore and I chatting about what happened
the previous day. We live in different time zones with almost a ten hour
difference, so this is typically doing a handoff: Did we see any production
issues? Sharing what we've been working on or helping test each other's work,
talk about architecture etc.

After that I typically look at our support channels on GitHub, email, or Slack,
and see if anyone's asked any questions, then reply to them. It typically takes
me three hours to clear messages, then after lunch is when my focus time
starts. Whatever project is at hand I spend at least four to five hours of
focused time on that.

By that time one of us has started the next day. We connect again and talk
about what happened. Usually after dinner, I find time for an hour or two for
more focused work. I try to isolate my meetings in the afternoon for a two hour
block. If someone wants to chat about Typesense, or live support.

My desired schedule would be to have some physical activity somewhere in there
too. Some exercise, or maybe I’d go out on a walk. Take some time to think
about things without sitting in front of a computer. I'm slowly starting to
consciously unplug from sitting in front of a computer, and a keyboard, and
spend time just thinking about things rather than always sitting in front of
the computer.

### And the two of you run the project?

Yep. It's just the two of us.

Our goal is to democratize access to good instant-search technology and we
could use all the help we can get. So if there’s anyone using different web/app
frameworks and would like to use Typesense with it, we’d love to partner to
build an integration.

Similarly, we need more client libraries. We recently got asked for a Rust
client library. The community has built like a Google client, a PHP client, and
a .Net client. Java is probably our next biggest thing, so if anyone has
production level experience in these, then we’d value getting help from the
community around client libraries.


### How did you first get into software development

I started programming when I was 11 years old. My dad is a software engineer,
and he taught me the basics of C. We went from nothing to parsing command line
arguments with C in the first week. That was one of my first memories of
learning programming. I learned a little bit of Java in high school, then I
discovered Visual Basic.  That was fantastic for me, because it had a GUI, so
you can point, and click, and build the interfaces. It also had great
documentation which helped pick things up quickly.

Next I discovered web development. PHP was my first web language. I then picked
up Erlang and Node. These days my go-to coding language is Ruby.

### What has been the most interesting development challenge building Typesense?

I've been a back-end engineer for the majority of my career. Slowly over time,
I also started picking up an interest in visual, and UI design. It’s very
interesting implementing designs and using modern frontend tooling. The most
interesting thing is working on UI such as the landing pages for Typesense,
mainly because I get to wear the hat of both a designer and a developer.

My approach is that I won't start developing until I finish designing, which is
a challenge as an engineer, as you're itching to start developing. Along with
that, I also picked up [Vue](https://vuejs.org/), [Nuxt](https://nuxtjs.org/),
single page apps, and the Statically Generated Site ecosystem. That was super
fun. The more challenging part was to say, I'm not going to start working on
the tech until I finish thinking through the end-to-end user experience.
Learning the design world and how making something look good and function well
is actually not as simple as I thought.  It takes a lot of work and has been an
interesting challenge.

In the Typesense core itself, I would say a challenge is maintaining the core
performance. Every little code change we do, even if it introduces a
millisecond of slowdown, will stop it from working as search-as-you-type.
Keeping a very close eye and benchmarking things with every little change has
been a nice challenge.

We’re currently using [k6](https://k6.io/) locally but I am planning to
automate it now so that every change automatically runs performance benchmarks
in our CI environment.  That's going to be an interesting thing to set up,
because you can't just use something like CircleCI to throw a bunch of traffic.
We’re probably going to have to set up our own performance testing environment
with every build. I'm looking forward to that.

### What is the most interesting tech you are playing around with at the moment?

The [Nuxt](https://nuxtjs.org/) framework is something that I've been playing
around with. I love how it simplifies a lot of boilerplate things that you have
to deal with when building a Vue application. It’s a nice package during the
development workflow; you can statically generate your entire site, and deploy
just a bunch of HTML, CSS and JavaScript files. I started using it for a new
documentation site, and I've been loving it so far.

[k6](https://k6.io/) is another project that I regularly use. I now use it
exclusively for load testing, after having used
[ab](https://httpd.apache.org/docs/current/programs/ab.html),
[Siege](https://github.com/JoeDog/siege) and
[JMeter](https://jmeter.apache.org/) in the past.

I feel anything that makes the development experience easy seems to be catching
on. Even if it's technology that's been around forever, like load testing is
not a new thing, but k6 makes it easier.

This is what we're doing for search with Typesense. Search has been around
forever, we are simplifying it, and making it super easy to use, so it's one
less thing on your plate. Other examples are
[Netlify](https://www.netlify.com/) and [Cloudflare
Pages](https://pages.cloudflare.com/).

Anything that simplifies a developer's life is a net positive.

### Describe your computer hardware setup

{{< img-center
src="/img/qa/typesense-jason-bosco-desk.jpg"
alt="The desk of Jason Bosco, Typesense."
width="100%"
>}}

I use a Macbook Pro (16 gigabyte RAM machine with a one terabyte SSD) with an
external 27" Dell monitor with the Apple keyboard. I still use the 2015 version
and haven't found the heart to upgrade after the old keyboard fiasco. I’m
wondering if I should consider switching to a Mac Mini for my next upgrade.

### Describe your computer software setup

**OS:** macOS Mojave.

**Browser:** Chrome.

**Email:** Gmail. For support emails I use HelpScout which is like a ticketing
system, and it has built in chat and a knowledge base.

**Chat:** Slack and WhatsApp.

**IDE:** I'm a big fan of the [JetBrains](https://www.jetbrains.com/)
ecosystem. So I use RubyMine, WebStorm, PhpStorm, Pycharm, CLion, and IntelliJ

**Source control:** Git and GitHub.

### Describe your desk setup

My setup is a home office + home studio. I work from a standard corner desk,
and have some soundproofing material and a camera. I just started setting up a
better camera. I learned from someone else that you can actually use DSLRs, and
set them up as a webcam so I just started playing around with it. My video
quality should increase dramatically.

### When coding

**Daytime or nighttime?** Night time.

**Tea or coffee?** Neither.

**Silence or music?** Music if I need focus to avoid distractions.

### What non-tech activities do you like to do?

I play the keyboard and my wife sings. Every now, and then when we find time,
we record things, that's my main creative outlet. Otherwise, I enjoy watching
shows and movies. I generally discover shows past their hype season. I recently
finished watching Homeland which was wonderful.

### Find out more

[Typesense](https://typesense.org/) is a search engine optimized for
performance and ease of use. It was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 8 Apr 2021. This interview was
conducted on 29 Mar 2021.
