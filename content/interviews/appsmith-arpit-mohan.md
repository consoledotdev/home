---
title: Interview with Arpit Mohan, Appsmith
who: Arpit Mohan
role: CTO
org: Appsmith
what: Open source internal tool builder.
tags: ["Internal tools"]
date: 2021-07-30T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Arpit Mohan, CTO, Appsmith.
isPage: interviews
topImg1Src: /img/interviews/appsmith-arpit-mohan-profile.png
topImg2Src: /img/favicons/www.appsmith.com.png
ogImg: /img/interviews/appsmith-arpit-mohan-desk.jpg
---

### What is Appsmith and why did you build it?

[Appsmith](https://www.appsmith.com/) is one of the quickest ways to build
internal apps that are hosted inside your own infrastructure and firewall. It
talks to your own custom databases or APIs and makes it easy to build admin
panels, CRUD apps and workflows.

I have a decade’s experience working across multiple startups, and one of the
things that we did a lot, especially in the initial days, was build a lot of
CRUD apps. Our support team needed access to account settings, the growth team
needed a dashboard, and all sorts of other internal requirements. So we stopped
doing our previous product and figured we should just focus on building a really
quick and easy way to build these tools.

Traditionally I come from a very back-end engineering world. I've coded in Java,
Node.js, Golang all my life...But mucking around with HTML or CSS is above my
pay grade! Styling and positioning something visual using a text medium is
beyond me. So the other driver behind Appsmith was for engineers like me, who
are not very good with HTML or CSS, to be able to build admin panels and
dashboards very quickly and easily.

{{< img-center src="/img/interviews/appsmith-arpit-mohan-product.gif" alt="Appsmith product screenshot" width="100%" caption="Create dynamic views." >}}

### Why did you decide to make Appsmith open source?

One of the first things we realized is that with any complicated piece of
software, it's nearly impossible to build that with no code. If you have no idea
how to write a SQL query, or you have no idea how your data is laid out, it's
hard to build anything that is remotely complicated.

We decided to focus on developers - people like me. One of the things that makes
any product attractive to developers is one that puts developers first. The
overwhelming answer was open source. It gives developers the trust to try out
the product without having to talk to a salesperson; you can download it on your
local machine.

You don't even have to send data to the cloud. With the idea to be developer
first, open source was one of the steps in that direction. When it comes to
internal apps, a lot of teams have some exotic requirements that an app should
behave in a specific way. Open source was one of the best ways to get people to
be able to customize Appsmith to suit their use case. The product evolves to
your use case versus the other way around where you are adapting yourself to how
a SaaS product is built.

### When you say "developer first", what does that mean to you?

As developers, we build software, we build apps, we are always building in the
service of somebody or something. We always build for the operations team, the
warehouse team, the support team or a consumer. We're always building service
for somebody else.

For us, "developer first" means that we will always focus on developers being
the primary users of the product. We start from the question, what will this
look like for the developer? Every feature begins with the question: ‘What would
a developer need in order to understand this better?’

Developers love good documentation, so we try to invest a lot there. They love
good logging systems so we try to log a lot of stuff. Everything we do starts
from: ‘What would a developer like?’, and it flows from there.

### What does a "day in the life" look like for you?

Until about a few months ago, I would spend a lot of time actively coding but
now we've expanded the team a little bit. I typically spend the first half of my
day reviewing code primarily and trying to set the direction and best practices
for the rest of the engineering team.

The rest of my day is spent in talking to various engineers across the team,
primarily to understand what their career motivations are. Not just what they
want to learn from Appsmith, but also what they want in life, and what can we do
within the team to help them move in that direction. We’re people first, so I
spend much of my day talking to people.

### What is the team structure around Appsmith?

We are an engineering focused product, so we are very heavily engineering based.
About 80% of the team is engineering, with about 20% divided amongst a few
technical writers, marketing folks, developer evangelists, and designers.

This is a spread across various experience levels. From staff engineers or
principal engineers with about 12 to 14 years’ work experience, to junior
engineers with two years’ experience. Across the board we try to pair a senior
engineer with a junior engineer, form a cohesive unit and then move that unit
forward.

### How did you first get into software development?

As a kid I always loved tinkering with stuff. Building things and taking stuff
apart, so that I could put it back together.

I first encountered coding through one of my cousins. He had built a custom font
on BASIC. It was a beautiful font for a six year old kid! That's when I started
picking up BASIC. I began programming properly when I was in college which is
where I got my first taste of professional programming. I started with BASIC,
then C, C++, then Fortran for a while, Java, then PHP, Node.js, Ruby, Golang.

At college I was working on training and teaching humanoid robots to walk and
dance. That was my first step up in life where I was no longer doing stuff for
assignments or just for fun, I was doing this for a very legitimate end goal. I
haven't looked back since then.

### What's the tech stack for Appsmith?

Our back-end is Java plus MongoDB and our front-end is React. We chose Java on
the backend, because we wanted something that was compile time and I'm a huge
proponent of compile time languages.

### What's the most interesting development challenge that you faced building Appsmith?

We look at Appsmith as an abstraction over JavaScript or React, which means we
face similar challenges that any other programming language would with respect
to parsing and executing the abstract syntax tree, the
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree).

One of the most interesting challenges that we worked on over the last year or
so has been performance optimizations on Appsmith's AST. We internally construct
an AST as to how an app is built and executed. Working on performance
optimizations on the AST has been so much fun, because performance is a never
ending game. It's a great way to hunt for bugs, as you go deeper and deeper into
the stack.

### What’s the most interesting tool or tech you’re currently playing around with?

I've been using [VS Code](https://code.visualstudio.com/) for about three years
now. It’s my primary IDE, but in the last quarter or so is when I actually
started to dig deeper and try to understand the nuances of the software.

It's been a fantastic learning journey to see how the VS Code team has taken the
idea of an IDE, which is universally believed to be heavy and slow (if you
compare it to [Eclipse](https://www.eclipse.org/ide/) or
[NetBeans](https://netbeans.apache.org/) or
[IntelliJ](https://www.jetbrains.com/idea/)), and how they've just changed that
perception. VS Code is performant, it's super quick, it works really well, it
allows other developers to write plug-ins and extensions.

I've been trying to understand the VS Code ecosystem better because I think a
lot of stuff that we do at Appsmith can be inspired from the way VS Code - the
product and the team - looks at the world.

### Describe your computer hardware setup

This is a place where I think I differ a little bit with most engineers. I have
a 15 inch MacBook Pro and that's it. I don't use an external keyboard, monitor
or have a mouse. I dislike extraneous devices and having a single screen helps
me focus. I don't even have a split screen.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Firefox.

**Email:** Gmail.

**Chat:** Slack and Notion. We have a very active community on Discord, so I’ve
been spending a lot of time on Discord recently too.

**IDE:** VS Code and IntelliJ.

### Describe your desk setup

Minimalist again. I have a wooden desk and an office chair and that's it.

The one thing I like about my work setup is not so much the desk and the chair,
but the window in front of which I sit because it overlooks green fields with
cows walking through it for the entire day. It's very peaceful to look at during
the day.

We are a distributed team, so it's all work from home. We don't have a regular
office setup. My co-founder has a much more interesting setup, where he's
hand-built his own standing desk. It's a very fun table to work with and he has
a Herman Miller chair. He likes to hand-build his stuff! For me, it's just a
regular desk, and an old office chair.

{{< img-center src="/img/interviews/appsmith-arpit-mohan-desk.jpg" alt="The desk of Arpit Mohan, Appsmith" width="100%" >}}

### When coding

**Daytime or nighttime?** Early daytime - 7:00am in the morning.

**Tea or coffee?** Spiced tea.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I love playing the flute, and spend a considerable amount of time playing it.
The flute is super soothing, it’s a very peaceful instrument. Apart from that,
I'm trying to get more physically active, so I try to go for at least two or
three runs a week to keep me moving. This is how I spend most of my evenings.
Either, I'm playing the flute or I'm going out on a run.

### Find out more

[Appsmith](https://www.appsmith.com/) is an open source internal tool builder.
It was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 12 Aug 2021. This interview was
conducted on 30 Jul 2021.
