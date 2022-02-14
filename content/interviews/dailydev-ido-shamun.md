---
title: Interview with Ido Shamun, Daily.dev
who: Ido Shamun
role: CTO
org: Daily.dev
what: Developer news aggregator.
tags: ['Cloud']
date: 2022-01-27T12:00:00Z
draft: true
headerType: fixed
summary: Interview with Ido Shamun, CTO, Daily.dev
isPage: interviews
topImg1Src: /img/interviews/dailydev-ido-shamun-profile.jpeg
topImg2Src: /img/favicons/daily.dev.jpg
ogImg: /img/interviews/dailydev-ido-shamun-desk.jpg
---

### What is daily.dev? Why did you build it?

[daily.dev](https://daily.dev/) is a news aggregator for developer content. We
aggregate hundreds of sources every few minutes and we create a personal feed
for you according to your interests, whether it's web dev, data science, or
Elixir. Anything you might be interested in, we have the content for you.

We have a community of over 100,000 developers that visit us weekly. We built
daily.dev because it's hard to stay up-to-date in the tech industry. As an
engineer, every day, you have new content, a new library, a new framework. Today
it's React, tomorrow it's Svelte, in three days it's something else. The
industry keeps changing. As an engineer, we have to keep track, but it can be
very hard to get the relevant content. We built a centralized place that removes
the hassle. You don't have to do anything besides telling us what you want, what
you want to learn, and we will give it to you on a daily basis.

We deliver the content via a browser extension, web app and a mobile app. Our
main product is the browser extension. Every time you open a new tab, you get a
feed of articles. We decided to start with the new tab browser extension,
because we thought that consuming articles in a passive way is better - you
don't have to think about it. You don't have to say, "Oh, I want to get
updated." Many people don't think about it, and don't manage to read the news
they want. We understand that this is a very opinionated approach, which is why
we also offer the web application and mobile application.

### What does a "day in the life" look like for you?

I usually start my day with daily.dev reading the news, then I’ll do some kind
of exercise. It can be a workout, running, and perhaps stretching out a little.
This tends to be followed with checking analytics, my inbox, messages, pending
PRs. I try to start out my morning by removing all the blockers for the team so
they can do whatever they do best without me blocking them. This then gives me
space to work on my own tasks involving a lot of backend work, improving the
feed algorithm, our infrastructure, hiring people and product stuff which fills
my remaining time.

### What is the team structure?

We are a fully remote team of seven people running from five different
countries. Our team consists of Nimrod, our CEO, Francesco, our dev advocate,
Tsahi, our designer, four engineers including myself.

We are also building out a backend team that will consist of two or three
engineers. We plan to double in size this year.

### How did you first get into software development?

When I was 14 years old at middle school, we started learning C. This was my
first experience with software development and I loved it. At first, it was a
kind of dummy CLI, but slowly, I got into game development with 3D using
[OpenGL](https://www.opengl.org//) and
[DirectX](https://en.wikipedia.org/wiki/DirectX). I even managed to get paid a
few bucks for a project I did. Slowly I fell in love with this area and have
been coding ever since.

I started with C followed by C++ then C#, going back to C++. Seven years ago, I
got into web development with JavaScript, Node.js, and some Python for data
analysis. Now I'm very curious about Elixir. I don't have time for side
projects, unfortunately, but I'm trying to keep thinking about it and seeing
where it fits. I'm very interested in the paradigm, and mental model of Elixir,
which is almost purely functional.

### What is the most interesting development challenge you've faced working on daily.dev?

The biggest challenge is deciding what content to serve you so you will be
happy, you will get what you need, and what you want to learn.

Until not so long ago, we were in this perspective where most of our users have
the same persona of someone working in webdev. Now we understand that we have
many users that are no longer part of this persona and we have to adapt the
product. We have to bring more devops, data science and tech news. We have to do
it in a way that will be relevant to you. Our focus as a team is how to
understand what you need and want, and deliver it to you in an efficient manner.

### What are some of the things that the algorithm considers?

There are the obvious things like publication time and clicks, compared to how
many impressions it got, the topics that the article focuses on, the source that
it comes from, how many up-votes and comments it has. All this stuff goes into
the algorithm and then it decides how to rank.

One of the interesting steps that are coming very soon is that we shift from a
global rank for everyone to a personal rank that we calculate on the fly for
every person. This comes with a massive technical challenge to do it all in real
time efficiently. We believe that this is the key, for better personalization
and making the community more inclusive in a way that we welcome everyone, not
just a specific persona.

### What is the most interesting tool that are you playing around with at the moment?

[Elixir](https://elixir-lang.org/) is very interesting. I really want to dive
deep into it more, especially to all this HTML over the wire of stuff that's
going on. It seems like this is all the rage currently on web dev.

In terms of daily.dev, I recently got to know a service called
[TinyBird](https://www.tinybird.co/) that encapsulates
[ClickHouse](https://clickhouse.com/), which is a database for big data. The
feed runs on TinyBird and so now I'm checking how we can do this shift to
personal ranking with it. One of the things that I like is that there is a good
developer experience. It's very easy to try out new stuff, and being a single
engineer that focuses right now on this part, it's very important to be able to
iterate fast.

### Describe your computer hardware setup

I recently got the latest Apple M1 Macbook Pro. I have two monitors, 24-inch, a
mechanical [Das keyboard](https://www.daskeyboard.com/) and a [Logitech MX
3](https://www.logitech.com/en-us/products/mice/mx-master-3.910-005647.html).
I'm trying to keep my desktop clean and without anything besides my notebook,
and a whiteboard in the room. I work from a standing desk.

{{< img-center
src="/img/interviews/dailydev-ido-shamun-desk.jpg"
alt="The desk of Ido Shamun, Daily.dev"
width="100%"
>}}

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email** Gmail.

**Chat:** Slack.

**IDE:** IntelliJ.

**Source control:** GitHub.

### What's the tech stack for daily.dev?

The front end is Preact, which is a compatible version of React, just smaller.
We use Tailwind on the front end as well. We run it as a monorepo to handle the
extension, web app, and everything. On the back end side, we have Node.js for
APIs with PostgreSQL mainly.

We use Python for scraping content, and Golang for very specific ETLs, like
high-performance analytics systems and processing. We also use ClickHouse,
BigQuery, Google Cloud, CircleCI for CI/CD and Pulumi.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Water.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I enjoy doing sports, and try to do different things like street workout,
running and bouldering. I used to do scuba diving before the pandemic, but with
covid-19, and renting out equipment you put into your mouth, it didn’t feel like
the right thing to do! I also play the guitar, and have weekly lessons with my
teacher. When I have time I’ll also play games with friends.

### Find out more

[Daily.Dev](https://daily.dev) is a developer news aggregator. It was featured
as an "Interesting Tool" in the [Console newsletter](https://console.dev) on 3
Mar 2022. This interview was conducted on 27 Jan 2022.
