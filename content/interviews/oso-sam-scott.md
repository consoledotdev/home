---
title: Interview with Sam Scott, Oso
who: Sam Scott
role: CTO
org: Oso
what: A batteries-included library for authorization.
tags: ['Security']
date: 2021-02-23T12:00:00Z
draft: false
summary: Interview with Sam Scott, CTO, Oso.
isSelected: interviews
topImg1Src: /img/interviews/oso-sam-scott-profile.jpg
topImg2Src: /img/interviews/oso-sam-scott-logo.png
ogImg: /img/interviews/oso-sam-scott-desk.jpg
---

### What is Oso? Why did you build it?

Before [Oso](https://osohq.com) I did a PhD in cryptography at Royal Holloway
in London where I focussed on the applied use of cryptography. This involved
solving hard problems with novel cryptography, for example, key management and
password storage. When I came out of that PhD program, I had lofty ideas of how
I was going to use my research in the industry!

When I started speaking to companies and engineers and understanding what
problems they're struggling with, I realized that the academic research was
beyond what people were actually encountering on a day-to-day basis. I was
seeing a lot of problems that are considered solved problems in academia. The
problems developers were still facing basically came down to tooling.

One day I was trying to do something that on the surface was somewhat easy: I
wanted an encrypted token in NodeJS. I went looking through the libraries and
found four different crypto APIs. You needed a PhD to know which is the right
one to use! I thought: ‘that's terrible’, which led me to Oso.

Oso is both the name of the company and the product. The company is focussed on
putting security into the hands of developers. This has been our vision since
day one - to build better developer tooling for security. The Oso product is a
batteries-included library for authorization. It allows you to express who can
do what in your application.

My co-founder and I spoke to hundreds of engineering teams. Authorization came
up again and again as the problem that people would reinvent themselves from
scratch. Everyone would build it in their apps with custom code, and
understandably would not make the best choices along the way. After a while,
they'd end up having to refactor the system and redo the whole thing, becoming
this incredibly time-consuming thing for engineering teams.

This is an important part of any product that gives people access to things and
stops people from having access to stuff they're not supposed to, but it's not
really anyone's core business offering. No one makes money from having good
authorization, but it can be an important thing to get right.

[The Oso core](https://github.com/osohq/oso) is written in Rust [but developers
interact with the features via a
library](https://docs.osohq.com/getting-started/quickstart.html): currently
Java, NodeJS, Python, Ruby, Go, or Rust. It's super quick to get started with,
giving you a very simple API for authorization. Immediately it tells you how to
think about authorization: Who is the user, what are they trying to do, and
what are they trying to do it to.

We also have support for all the things you need to do when you're building
authorization into your app, which is more than most people think. This
includes data modeling and doing roles. The main objective is that they don’t
need to think about it.

Even better, there's no code to write, you get it all out of the box. As a
developer it allows you to drill down and focus on building your application.
What do I want my application to do? Who should have access to what? These are
the fun problems like ‘This person needs to have this role in an organization,
which allows them to see these resources.’

The library is backed by [a declarative policy language called
Polar](https://docs.osohq.com/learn/polar-foundations.html). This allows you to
customize Oso and specify who can do what. It is all very extensible. If you
need anything that we don't support out of the box, we have the policy language
there for flexibility.

{{< img-center
src="/img/interviews/oso-sam-scott-product.png"
alt="Oso product screenshot"
width="100%"
caption="Oso Polar policy language and an example denied request."
>}}

### Why did you choose Rust for the core engine?

When we started, we wanted a consistent experience across any language, so we
looked for something that could be embedded in other languages. At that point
we were looking at something that supports a C-style API, which meant we had
limited options.

The core benefits that Rust offers, whether security, speed and concurrency,
are phenomenal and work very well for security-sensitive, performance-critical
situations like authorization. It's on every request and you don't want it to
have vulnerabilities.

Personally, I think Rust is a fantastic language. The learning curve is kind of
steep but the developer experience is fantastic, especially around how it does
things like package management, linting, and testing. All that is incredibly
well done.

I started using Rust five or six years ago. When we started building the
company two and a half years ago, picking Rust was a somewhat riskier choice
than it would be today. The adoption it has since received from all the big
companies (Amazon has gone huge in Rust), made me feel somewhat validated about
the choice we made.

### What does a “day in the life” look like?

As CTO I wear many different hats. Typically my time is split between leading
and managing the team. I check-in with people, seeing where they're at on their
various projects, and help unblock them - reviewing code etc.. Otherwise, I'll
be in meetings with my co-founder or the team talking about where Oso is going.

We're currently working on our next three month roadmap. I could be in meetings
with potential customers, building demos for those customers, engaging with
people from the community on Slack and helping troubleshoot problems. I’ve also
given lots of meetup talks recently, trying to get the word out about Oso.
There’s no one same day, but the themes are consistent.

### Are you still doing a lot of coding?

Given the busy nature of my schedule it's hard for me to be a blocking concern
on anything. If anything depends on me to happen, then it's in massive risk of
it not happening! I'm trying to do more speculative proof of concept work that
doesn't need to get shipped.

### What is the team structure around Oso?

We're currently nine people. Two co-founders, one person in community
marketing, and the remaining six are all engineers. We’re pretty flat right
now, although, one of the engineers is moving into a manager role as we start
growing.

The thing I love about our engineering team is that we currently share all
responsibilities - product management, product ideas, engagement with the
community, getting feedback, it is all shared.

Building a developer-first product, it makes sense that the developers
themselves are engaged in that process, because these are the peers that
they're interacting with and trying to get feedback on what to build. That's a
really nice thing about building a developer tool or developer-focused product,
it's effectively building something that you yourself would want. We’re growing
a lot, and [hiring for technical and non-technical
roles](https://www.osohq.com/company/jobs).

### How did you first get into software development?

I think this has got to be a common story across developers. I was fresh out of
school and had a data-entry job that was super tedious. I'd spend my entire
Monday basically copy and pasting Excel columns around.

I thought, there’s got to be a better way and someone pointed me towards VB
Macros. This was a way to get into programming, but maybe not the best one! I
started automating my Monday, and it just became: click a button, let it run
for an hour and go get a cup of coffee. Luckily my employer didn't fire me on
the spot, because I had just made myself redundant. Instead, they suggested
I talk to some of the engineers at the company who helped me get set up
with SQL and things like that.

### Why did you decide to do your PhD in cryptography?

I did maths as an undergraduate. It was an area that I always enjoyed. The
problem solving nature of it appealed to me, but I was always looking to do
something more practical or applied around it. I first started getting
interested in number theory and then randomly got pointed in the direction of
cryptography. I read [a book by Simon
Singh](https://simonsingh.net/cryptography/) where he gives a nice history on
cryptography. I was immediately hooked. I started doing cryptography coding
challenges on the side, which ultimately pushed me down this path.

I ended up doing a master's in cryptography and then following it with a PhD. I
started out very much on the maths side of cryptography, focussed on
post-quantum cryptography, lattice-based algorithms and number theoretical
things, but my desire was to do something more applied. I want to solve
problems, so I ended up moving towards that end of cryptography as part of my
PhD. I ultimately ended up doing an internship at Mozilla and working on the
TLS specification.

### What is the most interesting development challenge you've faced working on Oso?

Some of the work I did at Mozilla on TLS involved formal proofs, so maybe one
day we will build that into Oso. AWS is taking that approach to prove that
their IAM system does the right thing, like ensuring that nobody can access
your S3 buckets. But that’s more long term.

Right now, what we're solving is focussed on the developer’s experience, making
the product as easy as possible to use. Many people aren’t aware that
authorization is a problem that can be solved by a product. They're used to it
being built into an app as part of the regular code. Not many people are
necessarily looking for something that solves it.

In the same way that everyone knows you're not going to build your own
database, you're going to immediately go and look for a database and find which
one's the right fit. You might not do that with authorization.

That being said, there are also some more challenging technical problems at
Oso. We recently added support for filtering data down to what a user can see
based on the policy. To make this happen, we made it possible for our language
to return a set of constraints instead of just yes/no answers. I will actually
be talking about this more on [my Twitch stream Tea with
Sam](https://www.osohq.com/post/tea-with-sam-building-data-filtering-in-oso-partial-evaluation).

### What is the most interesting tech you are playing around with at the moment?

I've been having lots of fun with [GraphQL](https://graphql.org/) and the
surrounding ecosystem.  GraphQL is a schema specification tool to expose an API
to various services or front ends. It has a declarative language (a schema
language) to query that API and allow you to get just the data you care about,
and choose precisely what fields, and what data you want to get back from it.

This is somewhat linked to Oso because of [how easy they can be plugged
together](https://www.osohq.com/post/demo-authorization-patterns-graphql-oso-python-graphene).
GraphQL is really just another API, like REST or a RPC API might be.
Authorization is a business logic concern that fits in the middle between
something like a [SQLAlchemy](https://www.sqlalchemy.org/) ORM and the output
in the form of GraphQL.

If you put Oso in the middle, now you now have this rich, expressive API where
all data is filtered by what permissions the user has, and the user can only
get precisely what data they are allowed to get. You end up with this
incredibly powerful, expressive API with strong authorization and fine-grained
authorization. It's a very nice interplay of some of those technologies.

### Describe your hardware setup

I had a desktop at home that I'd always SSH into from my laptop so I could work
from anywhere. Now, I work generally on my desktop.

My laptop is a Dell XPS, dual-booted - Windows and Linux. I used to be a
ThinkPad fan. I had a lovely ThinkPad that was my best friend, but after it
broke, I didn't want to carry around three tonnes of laptop anymore.

Lastly, I have to have some form of tiling window manager. On Linux it was
[xmonad](https://xmonad.org/). I feel someone dared me to install it because I
told them how Haskell was impractical. Nothing uses Haskell in real life. I was
young and naive and they were like, "What do you mean? There's a window
manager." I installed it as a joke then fell in love with it.

Windows has reasonable support built-in. If you have multiple desktops and then
Windows' Tab and arrow keys will switch you between desktops. Desktop one is
browser, desktop two is editor, desktop three is terminal. Switching between
them is super fast. That is important for me as I have so many windows open. I
hate alt-tabbing between things trying to find which one's up. Knowing I need
to go right to get to my editor, right twice gets my terminal and it will be
there. That's a must have for me.

**Mouse:** The mouse I use is a [Roccat](https://en.roccat.org/Mice). Again, I
got it because they had nice Linux driver support, though this is not much of
an issue now.

**Keyboard:** It's a standard [Logitech K120
keyboard](https://www.logitech.com/product/k120), that is halfway between a
laptop and a mechanical keyboard. It's a softer press, but it still has proper
keys. I bounce between desktop and laptop a lot, and it acts as a good middle
ground switching between the two. If you go from a proper mechanical keyboard
to a laptop with no give at all, it's horrible. This kind of gives me a proper
keyboard, but I'm not going to become useless on my laptop afterwards.

### Describe your software setup

**OS:** I am somewhat begrudgingly on Windows as my main operating system.
Although, I mostly did that for compatibility with various video communication
tools that wouldn't have worked from my Linux machine in the past. I've found
that the Windows development experience with the Windows Subsystem Linux 2, and
with VS Code is pretty amazing. I'm a bit of a convert to that setup.

If I'm full-time Linux, [Arch](https://archlinux.org/) is my go-to. I fell in
love with Arch because whenever I was doing anything Linux related,
[ArchWiki](https://wiki.archlinux.org/) would be where I’d go for any
troubleshooting. I decided it would be easier to be on Arch. I loved Arch with
its rolling updates, and enjoyed always having the cutting edge version of
things. It was a nice balance of customization. They give you a fairly bare
bones set-up, but not [Linux from scratch](http://linuxfromscratch.org/). You
get to build up what you want on top of it.

**Browser:** Firefox.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** [VS Code](https://code.visualstudio.com/).

**Source control:** Git and GitHub.

### Describe your desk setup

{{< img-center
src="/img/interviews/oso-sam-scott-desk.jpg"
alt="The desk of Sam Scott, Oso"
width="100%"
>}}

My desk setup is a little monitor propped up on a box. I got myself a nice
Herman Miller chair a few months ago, because I was getting some terrible
shoulder and neck pain. The chair has really helped with this. My current work
from home hack has been moving our dining table right up to the window and
working on my laptop there, so I get plenty of sunlight in the winter.

### When coding

**Daytime or nighttime?** Nighttime. I love coding between midnight and 4:00 AM
but rarely do this any more because it ruins my sleep patterns!

**Tea or coffee?** Both. Coffee in the morning and then multiple cups of tea
during the day.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I stopped doing it recently because quarantine got too bad in New York, but I
love climbing. It seems I share that hobby with a lot of other programmers. I
enjoy indoor climbing and bouldering.

### Find out more

[Oso](https://www.osohq.com) is a batteries-included library for authorization.
It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 18 Feb 2021. This interview was conducted
on 23 Feb 2021.
