---
title: Interview with Quentin de Quelen, Meilisearch
who: Quentin de Quelen
role: CEO
org: Meilisearch
what: Open-source search engine for websites and applications.
tags: ["SDK", "Search"]
date: 2022-01-28T12:00:00Z
draft: true
headerType: fixed
summary: Interview with Quentin de Quelen, CEO, Meilisearch.
isPage: interviews
topImg1Src: /img/interviews/meilisearch-quentin-de-quelen-profile.jpeg
topImg2Src: /img/interviews/meilisearch-quentin-de-quelen-logo.svg
ogImg: /img/interviews/meilisearch-quentin-de-quelen-desk.jpeg
---

### What is Meilisearch and why did you build it?

[Meilisearch](https://www.meilisearch.com/) is an open source, user facing
search engine built in Rust. We created Meilisearch because we were fed up
seeing people use terrible search bars in their most loved applications. I was
very frustrated because I use a lot of very well known applications every day
which have search engines where the search experience is so bad. As developers,
we understand that if those search bars are so poor, it's because the search
engines that exist are complicated to implement or complicated to configure and
maintain, so that's why we decided to create our own.

[Algolia](https://www.algolia.com/) is a good search engine, and they are
building something very powerful, but they are mostly targeting the biggest
ecommerce websites in the world. That is overkill for most use cases, so we
decided to create Meilisearch to serve this global search issue. This is also
why we released it open source - as a way to share this good search experience
with everyone, not only companies that have a lot of money to invest in search
engines.

### What is the business model behind Meilisearch?

A lot of open-source-based companies start with a small team contributing to a
project for free for many years, then they see that they have a lot of traction
on the product so then decide to create a company. We started the project with
the idea to create a business from the beginning.

We started with a contract with Louis Vuitton in France where we were building a
search engine for them. From the outset we had the idea to make it open source,
but also to create a real business on top of it.

The business model will be a cloud offering where we will manage, update and
check the security of the servers for companies, because most people don't want
to manage code they didn't write. They prefer to give us their data and just
trust us, and they're right to do that.

Working with the open source community has been an incredible experience so far.
It's not something we thought about at the beginning, but it has turned into
something we love everyday. For example, we changed our branding two days ago
and the first thing we did was change the Slack icon. Two seconds later, we had
people on Slack and saying, "I see we have a new logo here, what's happening?"
And we received lots of congratulations and kind words from the community.

We have a lot of people contributing, helping us, and so we now invest a lot in
the community. We have our team working every day with them to help them to
progress their programming language (one of our team contributes to the Rust
language core), and to help them to contribute to the project - it's something
we consider to be very important for Meilisearch.

The open source community has also changed how we think about the types of
candidates we want to hire and how we interview. When we talk about product
management, the community has an effect on the role of product management. When
we talk about hiring, having a community changes everything because you start in
your community before hunting elsewhere. The whole company is different thanks
to the community.

### What does “a day in the life” look like for you?

I currently work remotely. I start my day between 6:30am and 7:00am. The first
thing I do is I take my cat from my bed and try not to wake up my girlfriend!
After that, I brew coffee and some eat bread.

My morning can take from 15 minutes to two hours depending upon what is on
YouTube. If there is interesting news or a new video about science or something
I like to watch. Usually, I start my day at 8:00am.

I check my emails and key metrics every morning. This could be the number of
stars if we're close to a milestone, or it could be how many people we have on
our waiting list, or the number of shares on an article. I like to check KPIs to
have this power inside me and the energy that gives me the power to do my day
ahead.

I typically take 2hrs for lunch during which I try to do some sport. In the
afternoon, depending on my meeting schedule, I’ll try to help some of my
colleagues on a task, or focus on a specific project. From 5:00pm onwards, I
have meetings with providers, users, investors or entrepreneurs.

### What is the team structure around Meilisearch?

The team is now 24 people. We have 12 people working on the open source, two
people working on the devrel team, creating content and interacting with our
community. We also have 3 people working on the cloud team, which is a new
product that will be launching in Feb.

Within the open source team, we have three sub-teams. The core team works on the
search engine in Rust. This includes a development manager and a product
manager. We have 3 people for documentation, including the guides, the API
reference, and everything that is written for developers. Lastly, within this
team, we have 3 people for all the integrations we do. This could be for tools
or languages. For example, we integrated Gatsby this week.

Outside of engineering, we also have a group of people supporting the whole
company. An HR, a knowledge manager, and someone focussed on onboarding new
starters and ensuring the wellbeing of employees.

### How did you first get into software development?

It's not super clear in my mind when I started, but I think it was when I was 16
years old. I started by creating some HTML pages and dabbling in JavaScript. I
started to really focus on software development during my degree in networking
and communication when I learned Objective-C for iOS development.

When I wrote my first application, I loved having the power to build stuff.
Since my childhood I have enjoyed building things, I think because my father is
a carpenter. I worked with him during some summers when I was younger and I
believe that being a carpenter and a developer is very similar. Both are
creating stuff from the ground up, and it's very exciting working towards a
finished product.

### What languages did you progress through?

I’ve learned a lot of languages. I did some languages during my time at school
like Java, PHP, Ruby, Python, but I also did JavaScript, Swift, Objective-C.
I’ve also coded in Rust, Go. I’ve tried a lot of languages. I love to switch
between different languages, but my favorite one is Rust.

### Why did you pick Rust for Meilisearch?

It was an easy choice for us, but some people consider us crazy for using it
when we started. Three years ago, Rust was not as famous as it is today. We
built the first version of Meilisearch in Golang. We had a lot of issues with
performance, so we had to choose between C++ and Rust, and my co-founder,
[Clément Renault](https://github.com/Kerollmops) (also named Kero), was a
contributor to the Rust programming language. He's been writing Rust at the time
of release of the v1 of Rust, so he knows it really well.

We chose Rust because Clément knew it well and could help other developers in
the team learn. I've learned and progressed a lot thanks to him. Also, from a
performance and security perspective, Rust is a good option.

### What's the most interesting development challenge you’ve faced building Meilisearch?

There have been many challenges. As we are building a search engine, it's
similar to a database, but with more constraints.

Delivering relevancy, performance and user experience all at the same time in a
software is super complex. Focusing on all three has been difficult. Our
competitors don't have such a great developer experience, so this is something
we’ve worked hard to provide a ‘wow-experience’ for developers, so that it works
straight away when you deploy it.

### What's the most interesting tool, project or framework that you are playing around with at the moment?

I've been playing around with
[Cloudflare Workers](https://workers.cloudflare.com/) for the last few weeks and
it is incredible. I used it to do a cron job to take my from some APIs and put
it on [Amplitude](https://amplitude.com/). I've also used it for managing the
waitlist for the Meilisearch Cloud product. I am automating a lot of things with
Cloudflare Workers. It's so easy to use. The only issue is that you don't have
any versioning so if you share your Workers with someone else, they could
destroy what you did without any revert possible!

### Describe your computer hardware

I'm an Apple addict. Everything I use is Apple. I have a
[MacBook Pro M1](https://www.apple.com/macbook-pro-13/). It's incredible to use
and really fast. I use the laptop when I'm on the move, and when I am in my home
office, I have an [iMac 5K](https://www.apple.com/imac-27/) alongside an extra
screen. I also use the Apple keyboard and mouse.

### Describe your computer software

**OS:** macOS.

**Browser:** Firefox.

**Email:** [Superhuman](https://superhuman.com/).

**Chat:** Slack.

**IDE:** VS Code for JavaScript & Sublime Text for Rust.

**Source control**: GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/meilisearch-quentin-de-quelen-desk.jpeg" alt="The desk of Quentin de Quelen, Meilisearch" width="100%" >}}

I have a good chair. Otherwise, I have my Lego Millenium falcon set up behind
me, and I have some things doing an infinite loop with a magnet.

### When coding

**Daytime or nighttime?** I like to work in both, but I think I'm more efficient
during the day.

**Tea or coffee?** Coffee in the morning, tea in the afternoon.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I tend to spend my time doing sports, playing video games with my colleagues,
co-founders with friends. I also enjoy doing manual stuff like crafting with
wood. I just built my cat a house. I'm also doing Lego construction and I just
finished my Millenium Falcon, which I’m proud of!

### Find out more

[Meilisearch](https://www.meilisearch.com/) is an open-source search engine for
websites and applications. It was featured as an "Interesting Tool" in the
[Console newsletter](/) on xx xxx 2022. This interview was conducted on 28
Jan 2022.
