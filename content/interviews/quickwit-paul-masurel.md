---
title: Interview with Paul Masurel, Quickwit
who: Paul Masurel
role: CEO
org: Quickwit
what: Search engine for logs and chat.
tags: ["Search engine"]
date: 2022-02-24T12:00:00Z
draft: true
headerType: fixed
summary: Interview with Paul Masurel, CEO, Quickwit
isPage: interviews
topImg1Src: /img/interviews/quickwit-paul-masurel-profile.jpg
topImg2Src: /img/favicons/quickwit.io.png
ogImg: /img/interviews/quickwit-paul-masurel-desk.jpg
---

### What is Quickwit and why did you build it?

[Quickwit](https://quickwit.io/) is a search engine that specializes in
so-called "append-only" data. This includes application logs, system logs, user
action logs... but also emails, chats, and audit trails of all kinds.

We observed some frustration from users indexing logs in
[Elasticsearch](https://www.elastic.co/). The two common complaints we heard
were how difficult and time-consuming it is to manage a cluster, and how costly
it can be.

Generally Elasticsearch's architecture is a good one-size-fits-all solution to
search, but it is not really tailored for logs.

In many ways, log search can be quite extreme. It involves a large amount of
data, but generates comparatively few queries. Most of the CPU is spent indexing
not searching, and a given cluster has a lot of indexes with varying sizes.

We saw in these specificities an opportunity for a much better solution.

One big difference for instance, is that we store our data on Amazon S3 (or any
other object storage). This is already both a huge cost improvement and a great
reassurance. S3 offers 99.999999999% (that's eleven 9’s) for $25 per TB / month.

Another big difference is the replication scheme. Elasticsearch replicates
documents and builds its index separately on different replicas. In log search
use case, the CPU time is mostly spent in indexing so this is quite wasteful. In
comparison, Quickwit indexes your documents once and leaves it to the object
storage to replicate the index.

Also, Quickwit is implemented in Rust. The core engine is tantivy, a Rust search
engine library that I maintain, which is about two times faster than Lucene in
both indexing and search.

### What does a "day in the life" look like for you?

I wake up at 7:30 am or whenever my daughter wakes me up. I have breakfast with
my 4 year-old daughter and get her ready for pre-school until 9:00 am. I then go
to work in a co-working cafe near home, because it's easier for me to focus in a
different environment

Quickwit is a remote-first company. I live in Japan and the rest of the team
lives in different parts of the world. As a result, I usually enjoy the comfort
of having a solid four hours every day where I don't have any meetings. My
afternoon on the other hand can pack several meetings with the team, prospects,
or engineer candidates.

### What is the team structure around Quickwit?

We are still at an early stage. Quickwit is a team of five engineers, and a
marketing intern who just joined.

### How did you first get into software development?

I was born in 1982. When I was a kid we had a computer at home, which was very
rare at the time. There was no internet and having a PC at home did not have
much use apart from playing video games.

One day, I taught myself [QBasic](https://en.wikipedia.org/wiki/QBasic) out of
boredom. It was a popular entry point to programming at that time. I recall that
my first program was something that was computing the tides using the rule of
twelfths. It was silly, but I was too young to know about cosine.

### What languages have you learned over time?

I first got a copy of Visual Basic, and I played a little bit with it, then I
did some Perl. Later at school, we had some algorithm classes and learned Caml
Light which I thought was a really nice language. It is a functional programming
language.

Next, I did a little bit of C++, Python and Java, Javascript and CoffeeScript
professionally. I started using Rust in 2016. The first program that I tried to
implement in Rust was actually tantivy.

### What is the most interesting development challenge you've faced working on Quickwit?

I read a lot of source code and these days I've been interested in a Rust
project called DataFusion. It is a dataframe library that supports SQL querying.
It can read Parquet files. It is very modular and its creator -Andy Grove- even
implemented a distributed column database on top of it called Ballista. We might
at some point try to plug it with Quickwit.

### What is it about Rust that makes it so good for this kind of problem?

If I compare Rust to C++, there are two very large benefits. One that is often
discussed is memory safety. I used to be a C++ developer. Writing code,
especially multithreaded, was very scary! Rust makes a huge class of bugs
impossible thanks to its type system.

Rust also comes with a very nice package manager ecosystem called Cargo.
Code-reuse and packaging is something that the C++ ecosystem is really lacking.
Generally the Rust ecosystem has great tooling.

It is somewhat expected to hear Rust developers complain about Java. I actually
like Java to some extent, and I think the JVM is a fantastic piece of
technology. A search engine however, has a lot of CPU-bound operations. Doing
optimization in Java is extremely hard. You end up having to write code that is
not idiomatic Java, and have very little control over what code the JIT will
emit. You also have to fight with garbage collection. Rust on the other hand
doesn't have any GC. I can look at the generated assembly code in a hotspot, and
optimize my code in a nice deterministic way.

### What is the most interesting tech tool are you playing around with at the moment?

I read a lot of source code and these days I've been interested in a Rust
project called [DataFusion](https://cloud.google.com/data-fusion). It is a
dataframe library that supports SQL querying. It can read Parquet files. It is
very modular and its creator - Andy Grove - even implemented a distributed
column database on top of it called
[Ballista](https://github.com/apache/arrow-datafusion/tree/master/ballista). We
might at some point try to plug it with Quickwit.

### Describe your computer hardware setup

I use a
[Lenovo ThinkPad T14s](https://www.lenovo.com/us/en/laptops/thinkpad/t-series/ThinkPad-T14-G1/p/22TPT14T4N1).
At home, I use a Leopold keyboard and a wide external monitor. For meetings I
have a [Blue Yeti microphone](https://www.bluemic.com/en-us/products/yeti/) and
a [Logitech](https://www.logitech.com/) camera.

### Describe your computer software setup

**OS:** [Pop!\_OS](https://pop.system76.com/).

**Browser:** Brave.

**Email:** Gmail.

**Chat:** Discord, Slack.

**IDE:** VS Code

**Source control:** Git and GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/quickwit-paul-masurel-desk.jpg" alt="The desk of Paul Masurel, Quickwit" width="100%" >}}

I have an old Ikea desk and an Aeron chair.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I spend most of my free time playing with my daughter. I live in Japan and my
wife is Japanese. It's important for me to play a lot with my daughter, so she
can learn French too :).

### Find out more

[Quickwit](https://quickwit.io/) is search engine that specializes in
append-only data. It was featured as an "Interesting Tool" in the
[Console newsletter](/) on xx xxx 2022. This interview was conducted on 24
Feb 2022.
