---
title: Interview with Vlad Ilyushchenko, QuestDB
who: Vlad Ilyushchenko
role: CTO
org: QuestDB
what: Open source time-series database.
tags: ["Database"]
date: 2021-06-15T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Vlad Ilyushchenko, CTO, QuestDB
isPage: interviews
topImg1Src: /img/interviews/questdb-vlad-ilyushchenko-profile.jpeg
topImg2Src: /img/interviews/questdb-vlad-ilyushchenko-logo.jpg
ogImg: /img/interviews/questdb-vlad-ilyushchenko-desk.jpg
---

### What is QuestDB? Why did you build it?

[QuestDB](https://questdb.io/) is an open source time-series database. We built
it to facilitate high ingestion rates and to work in environments where there's
a huge amount of data.

My trading background was the starting point. Everybody uses
[kdb](https://en.wikipedia.org/wiki/Kdb+). There's no feasible replacement for
it, but it's so painful to use. Back then we were just trying to remove the pain
working with data that kdb induces.

Say you’ve got an idea and want to analyze some data. With kdb, it’s tough to
overcome the language difficulty. It’s so hard to understand how to interact
with the system. You need to hire multiple consultants charging thousands per
day. You need to tell them what you want, and there’s always a back and forth
telling them what you need; what you get back is not quite right. You interact
with this data by proxy, through consultants, and it’s just a pain for people
who want to know more about their own data.

I started working on QuestDB about seven years ago as a side-project that I
would spend evenings and weekends working on. Regular traditional databases
didn’t seem to have time series on their radar at all. Looking back, it was an
emergent data type, and people would probably use whatever tool they had at hand
to handle it. Typically, users put time series data into Oracle databases or
something open source, like PostgreSQL or MySQL.

The first decision was to ditch the exotic query languages. Regular SQL made
sense from an accessibility aspect, so this was our language of choice. I went
through several different designs for the storage model to get to something
close to what today’s version looks like. I was heavily inspired by the
vector-based append-only architecture that kdb+ had because of the advantages of
speed and the simple code path.

Regular databases insert data in different ways and rarely use linear storage.
Storing time-series data in general-purpose databases is definitely possible.
Still, you’ll start to see the query and insert speeds degrade because they’re
not optimized for specific usage patterns.

I continued working on QuestDB in my free time, adding a REST API and eventually
a web console to run queries. I had enough money set aside that I could leave my
full-time job and work on QuestDB, and I wrote a bit about that journey for
[our Hacker News launch](https://news.ycombinator.com/item?id=23975807).

With QuestDB, my goal was to build the highest performance database I could,
while making it accessible for developers and adding SQL as a query language.

### What does a “day-in-the-life” look like?

I’m mainly programming and remain very hands-on. I just was debugging a memory
leak five minutes ago!

### What does the team look like?

We have a small team of eight. I make sure we move in the right direction and
have fun together, and ultimately build what people want. We try to keep our
eyes on the prize, so to speak.

We’re all engineers, but the product also needs an educational side to it,
because it's fairly complex. We have some new concepts that people are not
necessarily familiar with, so we have spent time hiring technical writers
earlier on in order to help our customers, who are engineers. Ultimately, we're
trying to move the product forward on the technical side, and also to raise
awareness at the same time.

### How did you first get into software development?

When I was in my fourth year of Uni, I saw an ad in the newspaper looking for a
software engineer. I tried my luck, and the first interview went really well. I
hadn't any professional experience at this stage, so they wanted me to complete
an assignment to write some software. The only problem was that I didn't own a
computer, it was summertime, and all of the university facilities were closed.

I had to get my hands on a machine by some means, so I started searching outside
of the Uni. I managed to find a computer I could use at an Agricultural College
on the outskirts of town. They were using it during the day, and I had to plead
with them to give me a set of keys to their office so I could use it after
everyone left. I had to take a bus to this Agricultural College at 6pm each
evening to plug away at their assignment and grab the last bus home at midnight.
This went on for two weeks until I figured I was done. I submitted the software
(an inventory management tool), which they loved, and I got the job on the spot!

### What languages did you start with?

Back in the day, it was
[Clipper](<https://en.wikipedia.org/wiki/Clipper_(programming_language)>). There
was a database called [DB4](https://en.wikipedia.org/wiki/Db4o) and Clipper is a
language used to talk to databases, so I started there. These are quite high
level languages, but then I went to the other end of the spectrum because I was
interested in how hardware works. So I learned assembly!

After that I got into Delphi because it’s a very popular language in Eastern
Europe. It’s still in use for some reason!

Java came next, and then C++. I try to use the language that solves a problem.
They're like children, you don't have a favorite. You pick the one that does the
job. I like them all for different reasons.

QuestDB is written in Java. People say, "High performance database in Java? Are
you kidding me?" I’ve spent a lot of time on trading floors, writing electronic
trading software, and the Java that we use is called "Zero GC Java." We also use
C++. We connect Java with C++, and keep data structures and processes with C++,
so it's a mixture.

### What is the most interesting challenge you faced working on QuestDB?

Recently, we released what we call
["out of order" append](https://questdb.io/docs/guides/out-of-order-commit-lag).
This could be because of some backfill event, or even clock skew. Now data can
be ingested in any order rather than requiring it come in ordered by time.

This was really difficult to do because of how the data structures work with the
order of the data coming in. It's basically a combinatorial explosion. We have
to process our data in a lot of pieces, which makes it really challenging to
keep track of. There's so many combinations of things that your brain hurts
putting them back together. That was difficult.

### What's the most interesting tech you're playing around with at the moment?

The Apple M1 CPU blew my mind. I have a £5,000 computer that struggles to
compare to what the Apple M1 CPU can deliver.

### Does QuestDB run on the M1 and other Arm chips?

It's not designed to but it does. We run on multiple platforms like M1 and
ARM64, but it's an emerging technology. We like to pay attention to it.

There's a misconception, that if you run a database you need some huge server to
run them. That’s not the case. One of the reasons I started building QuestDB was
because I became fascinated by how fast the hardware is if you treat it
properly.

Everybody says, "My software is slow. I'm going to get a bigger box. More RAM is
going to make it faster". I always thought, that's not the case in 99% of the
circumstances. QuestDB, runs fast enough on ARM. In fact we run 50 times faster
than Mongo on ARM64 compared to Mongo running on x86. It's just insane. We think
ARM64 will be the future, and M1. When they start putting these things in
servers, that's going to be amazing.

### Describe your computer hardware setup

I use a mechanical keyboard, but people with the proper mechanical keyboards
say, "This is not a proper one." It's a gaming keyboard I bought ages ago.

I have a single monitor, but it's a big one. It's a 48”
[ASUS PA329Q](https://www.asus.com/Displays-Desktops/Monitors/ProArt/ProArt-Display-PA329Q/).
I would get a second monitor but they just would not fit on a WeWork desk.

### Describe your computer software setup

Generally people who work at QuestDB use what they like. I use Windows, but I'm
the only one using Windows. The main reason is so I can test across all
environments. This is easiest to do on Windows, but we also test extensively on
Linux and in various cloud and bare metal environments.

**OS:** Windows when I’m in the office, otherwise I’m on macOS on my M1 Macbook.

**Browser:** I prefer Safari if I’m on a Mac, otherwise Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** IntelliJ IDEA.

### Describe your desk setup

{{< img-center src="/img/interviews/questdb-vlad-ilyushchenko-desk.jpg" alt="The desk of Vlad Ilyushchenko, QuestDB" width="100%" >}}

I am always in the office, but the team is not always here. They work from home.
I enjoy coming into the office when I commute on the electric scooter. It clears
my mind a little bit. It’s also more challenging to code when the kids are home!

Other people who don't have these issues or live further away, tend to work from
home. We’re not really forcing anybody to come back.

### When coding

**Daytime or nighttime?** Nightime.

**Tea or coffee?** Coffee.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I like driving and I ride my scooter like a maniac.

I’ve done a few big road trips. The longest trip was travelling from London to
central Russia. It was a poetic thing to do. I think it was a 10,000 mile round
trip!

### Find out more

[QuestDB](https://questdb.io) is an open source time series database. It was
featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 20 May 2021. This interview was
conducted on 15 Jun 2021.
