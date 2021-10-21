---
title: Interview with Jerónimo Irazábal, immudb
who: Jerónimo Irazábal
role: Chief Architect
org: immudb
what: Cryptographically verifiable database.
tags: ["Database"]
date: 2021-10-18T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Jerónimo Irazábal, immudb
isPage: interviews
topImg1Src: /img/interviews/immudb-jeronimo-irazabal-profile.jpg
topImg2Src: /img/interviews/immudb-jeronimo-irazabal-logo.jpg
ogImg: /img/interviews/immudb-jeronimo-irazabal-desk.jpg
---

### What is immudb? Why did you build it?

[immudb](https://github.com/codenotary/immudb) is a cryptographically verifiable
multilayer database. This is often assumed to mean immutable, but whilst immudb
is indeed immutable, it’s also important to highlight that everything that is
written into immudb can be verified by a client application later on.

You can use immudb for logging events which can then be retrieved by the event 
identifier and verified, however, immudb can be used as a standard key-value 
store and as a relational SQL database, with the added benefit that everything 
is verifiable.

This allows client apps to check whether the data has been tampered with, even
if someone has access to the file system or underlying storage. This can be
detected.

The database is also intended to be run by a single owner, which is one of the
differences when comparing immudb to blockchain. With blockchain, ownership is
decentralized, whereas immudb can run on a single server. Clients do not need to
trust the server because of the underlying verification capabilities.

When I started to work on immudb, there was nothing else that allowed for single 
ownership with verification. The only alternative was to use a blockchain 
platform, but that comes with much more complexity, such as smart contracts, 
limited throughput, wallets etc. 

Another factor was the focus on use cases. When you look at the general database
landscape, none were being built from scratch with immutability in mind. Today,
we see more and more special-purpose databases, however, none that I could find
offered high scalability, ease of use, and cryptographic verification, as well
as the ability to travel through the change data in time.

This retention of history makes immudb very suitable for regulated
organizations, where they don’t want or can’t use a blockchain. I thought people 
want to have a database, they don't want a blockchain. They want to store rich 
data, not just hashes for transactions. They want to trust the whole database 
content. That is why I started working on immudb.

Over time, immudb users showed us lots of new use cases. For example, protecting
important documents. We even know of one organization storing the last known
location of a submarine in immudb running on board. That’s very interesting
because there is no internet connection on a submarine, thus blockchain is not
an option. But they still want to make sure everything is stored tamper-proof,
so that they can retrieve the location data when the submarine is back in the
harbor, and ensure that everything is still tamper-free.

The supply chain security use case is what we’re exploring with our commercial 
service, [CodeNotary](https://www.codenotary.com/).

### What does a "day in the life" look like for you?

I usually start my day at 7.30am. While it might be early for me, it’s actually
almost noon for the majority of the team, which is distributed in European
countries. So I quickly sync with them, address anything I can contribute on,
check our Discord channel and GitHub repo looking for reported issues or
contributions.

Most of the time I have pending work related to novel features we’re
incorporating into immudb. Since we added SQL support, there are a lot of
interesting and useful functionality immudb needs to support in a verifiable
manner, so this has been the type of task I’ve been involved in for the last two
months or so.

I’ve been working from home long before the pandemic, so my home was already
prepared and I have my own home office. My daughters usually come in
just to say hi or to play a little bit - if I’m not solving something that
requires my exclusive attention, I spend a few minutes with them and then I
continue working. As we live in a very small city - around 15,000 people -
distances can be measured with the fingers of one hand, giving me the chance to
bring them to school during lunch time.

During afternoons, my home is as quiet as in the first hours of the day, so I
have a lot of time to make progress and extend our time-zone availability for
community interaction or anything that could suddenly require immediate
attention.

I spend all my time working on immudb, either thinking about new functionality
or coding. For instance, adding SQL support has been interesting because SQL was
not designed for immutability. This has resulted in working with customers,
users, and getting feedback at the same time as exploring how it should be
implemented in a standards compliant manner.

immudb is open source, so I also spend a lot of time working with the
community - going through feedback, responding to issues and making sure we’re
responsive to our open source community.
[Our discord channel](https://discord.gg/ThSJxNEHhZlink) has lively discussions
about immudb with many community users.

### How did you first get into software development?

I’ve always had a curiosity about computers from when I was playing games on a
console - how the game was created and how the players were moving. So when I
got my first computer at the age of 13, I started building a Carmen
Sandiego-style game. That was the first game I implemented, all self-taught,
because no one in my family was connected to the internet back then.

Later, when I was 15 years old, I started dissecting printers. Using the
parallel port, I was able to move the motors. A couple of years later, I
realized that I had defined a domain-specific language for specifying the
coordinates the motors should achieve in order to physically shape a piece of
wood. I created a language with a parser, emulated rendering and everything!

Before university, I had also already implemented a Spanish card game called
Escoba de 15, which I used to play with my family when I was a kid. This was a
complete game with machine learning so you can play with other players, or you
can also play with the machine with different difficulty levels. That was the
first time I dealt with some kind of machine learning.

I started in Basic and Pascal, once in university I moved onto functional and
object oriented languages like Haskell and Smalltalk. I was mainly coding in
Java during my professional career but discovered Go when contributing to the
[Hyperledger Fabric](https://www.hyperledger.org/) project. Since I joined 
CodeNotary, it’s my language of choice.

### What has been the most interesting challenge building immudb?

In the beginning, immudb was built on top of
[BadgerDB](https://github.com/dgraph-io/badger), another key-value store backing
a graph database. We knew that we clearly needed our own storage back-end. So
this was the biggest challenge, to write a whole new storage engine. It is not
so common to find a database that you can use as an immutable, verifiable log
store on its own, and that works really, really fast.

What we ended up with was a system that, when we benchmarked it, could do 10
million writes per second. That’s really fast! And the storage layer is
plugable - it can be a single file, multi-file, in-memory, or even backed by
Amazon S3, so you never have to worry again about running out of disk space!.

Another thing is the possibility to work with eventual indexing, allowing you to
store and commit data very fast. The indexing of the key will happen
asynchronously. You can store extremely fast, without waiting for the index to
be generated.

However, we found that this approach can be quite confusing for users, so it
actually waits for the index by default. If someone wants to maximize
performance, they can switch it to decouple the indexer.

### What's the most interesting tool you're playing around with at the moment?

Well, that’s easy: immudb! I always wanted to implement a storage engine. so I
find this project really interesting both professionally and personally.

One of the things I’m trying to understand is our primitives for building immudb
from the cryptographical point of view - the hash functions. We take these hash
functions as the primitives for building the cryptographic data structures and
proofs.

Being able to mathematically prove facts is amazing and I'm convinced this
capability will be incorporated in a huge class of applications in the near
future.

### Describe your computer hardware setup

I use a standard MacBook Pro. I find it really useful if I need to travel or
move, although that’s not so common at the moment! I use an external monitor
that I find really comfortable, and I miss it when I travel. It's a 32-inch
Samsung monitor. I do have a second one, but I couldn’t find any practical use
of it.

{{< 
img-center src="/img/interviews/immudb-jeronimo-irazabal-desk.jpg" 
alt="The desk of Jerónimo Irazábal, immudb" 
width="100%"
>}}

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack & Discord.

**IDE:** VS Code.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Mate and coffee.

**Silence or music?** Both work for me.

### What non-tech activities do you like to do?

I practice many sports. Mostly those related to or that involve running. I used
to run long distances such as ultramarathons, until a few years ago. Currently,
I am mostly playing soccer and padel (a racquet sport similar to tennis).

I also enjoy riding my motorbike (alone or with friends) or the truck on field
roads with my family, walking along the river and rails, and visiting small
villages.

### Find out more

[immudb](https://www.codenotary.com/technologies/immudb/) is a cryptographically
verifiable multilayer database. It was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 21 Oct 2021. This interview was
conducted on 18 Oct 2021.
