---
title: Q&A with Yifan Gu, vmcli
who: Yifan Gu
role: Creator
org: vmcli
what: a set of utilities to help you run Linux VMs on M1 Macs.
date: 2021-03-02T12:00:00Z
draft: false
summary: Q&A interview with Yifan Gu, Creator, vmcli.
isSelected: qa
topImg1Src: /img/qa/vmcli-yifan-gu-profile.jpg
topImg2Src: /img/qa/vmcli-yifan-gu-logo.png
ogImg: /img/qa/vmcli-yifan-gu-desk.jpg
---

### What is vmcli? Why did you build it?

[vmcli](https://github.com/gyf304/vmcli) is a set of utilities to help you run
Linux VMs on M1 Macs.

I need to be able to work with a Linux VM, working inside Linux from time to
time. When I use Windows, I would use Windows Subsystem for Linux, which nicely
bridges Linux and Windows together, however, I couldn't find such a lightweight
approach to run Linux VMs on a Mac. The only other options are Parallels and
QEMU, but Parallels is not free and QEMU can be a bit heavyweight for my
liking.

I happened to run across the [Docker M1 tech
preview](https://www.docker.com/blog/download-and-try-the-tech-preview-of-docker-desktop-for-m1/),
which talks about how to seamlessly utilize the visualization of the new [Apple
Virtualization
Framework](https://developer.apple.com/documentation/virtualization). Upon
further investigation it didn't seem to be too hard to use, and there had
already been a few proof of concepts. This encouraged me to build my own
solution over a weekend.

{{< img-center
src="/img/qa/vmcli-yifan-gu-product.svg"
alt="vmcli product screenshot"
width="100%"
caption="Setting up a VM with vmcli."
>}}

### How did you find working in Swift?

It was my first time using Swift. There was a bit of a learning curve to get
used to it. The Swift language didn't hold me back, it was trying to make
something that directly interfaces with macOS that was challenging - especially
with [Grand Central
Dispatch](https://en.wikipedia.org/wiki/Grand_Central_Dispatch). The Swift
language in my opinion is good.

The company where I work usually uses Golang and TypeScript, so in my day job I
tend to use these two languages. In my own projects more recently I've been
coding in C and C++. I just built a virtual LAN or VPN on top of Discord, so
that you can game with friends. I also sometimes code in Python, because I work
in a computer vision company.

### What does a "day in the life" look like?

I currently work at [Zensors](https://www.zensors.com/) as a founding software
engineer. Zensors is a computer vision platform that allows you to connect to a
CCTV camera and turn it into a smart sensor. For example, if you have a CCTV
camera on a street lamp post pointing towards a trash can, you can draw a
boundary on the trash can, and our software and cloud platform will tell you
when the trash can is overflowing.

We're a start-up, so anything can happen in a day. Some days I’ll be focused on
coding, other days I am in charge of doing DevOps. I'm currently in the process
of writing a few Terraform scripts, which are "fun" to do. On occasions I also
work directly with clients discussing where to install CCTV cameras. That
occasionally involves physically travelling to the client's location (pre-COVID
of course).

### What is the most interesting development challenge you've faced recently?

Following a project through to completion! I find it is really easy to get
distracted, and often leave a project hanging for a couple of months before
returning to it. There's so many fun things out there to explore. I need to
convince myself that it is worth committing a weekend or a couple of days to
figure a project out.

For work, simply what has to be done has to be done. For my personal projects
it's mostly about fun. If something looks awesome to play with and won't take
more than a few weekends to complete, then I'll probably just go and do it.
Sometimes these projects last more than like a few weekends, but in general
'fun' is the main motivating factor for me to work on personal projects.

### What is the most interesting tech you are playing around with at the moment?

My Discord VPN side-project has had some interesting challenges. It uses the
[Discord network SDK](https://discord.com/developers/docs/game-sdk/networking)
and combies it with [Wintun](https://www.wintun.net/), a layer 3 TUN Driver to
create a network adapter. This was fun to work with because it allowed me to
make a zero-install VPN on top of Discord. Users just download the app, click
host, then others can join and you're all on the same LAN.

I've also been working again with Ethereum using a P106 which is a Nvidia 1060
card without a display output. At Zensors, we needed inexpensive cards to run
machine learning jobs on, so when we purchased them for the company, I bought a
few at the same time for personal use. As the Ethereum price is at a high point
again, I've been using these cards to mine cryptocurrency. I have an Ethereum
mining rig in my basement which is generating around $10 per day, a bit more
than [my recent experiment mining ethereum on my M1 Mac
GPU](https://blog.yifangu.com/2021/02/26/mining-ethereum-on-a-m1-mac-gpu/)! I'm
also trying to reimplement the ethash algorithm in HLSL, as a DirectCompute
shader.

### Describe your computer hardware setup

{{< img-center
src="/img/qa/vmcli-yifan-gu-desk.jpg"
alt="The desk of Yifan, vmcli"
width="100%"
>}}

**Keyboard:** A no-brand, blue-switched, mechanical keyboard.

**Monitors:** A refurbished Dell monitor and an ultra wide
[Sceptre](https://www.amazon.com/Monitors-Sceptre-Computers-Accessories/s?rh=n%3A1292115011%2Cp_89%3ASceptre).

**Mouse:** [Logitech
G502](https://www.logitechg.com/en-gb/products/gaming-mice/g502-hero-gaming-mouse.html).

**Computer:** [OVERPOWERED PC](https://www.walmart.com/ip/66JOIO7GH9ZB).

**Laptop:** MacBook Air.

I use both Mac and Windows. I don't really have a huge preference of Windows
versus Mac. I'm the only person in the office who uses a Windows laptop, and an
iPhone! I don't have brand loyalty.

My work is mostly done on Linux VM. So we set up Linux development VMs on a
server that we self-hosted. I'm also the de facto DevOps person in my company.
so I have to use Linux. This means I use all three OS's, which is not super
common to see.

### When coding

**Daytime or nighttime?** Strictly nighttime.

**Tea or coffee?** Currently drinking bottled tea, when at work I drink coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I enjoy cycling, but because I live in Pittsburgh there's a lot of mountains.
The steepest street in the United States is actually about ten blocks from me,
which makes cycling extremely hard (and fun when you’re going down the hills).
I also like to hike on the weekends.

Otherwise, I spend most of my time doing tech-related activities. I have a
laser cutter in my basement and a 3D-printer. One of the things I made with my
laser cutter is a map coaster. I drew the map of Pittsburgh onto a piece of
wood to make the perfect coaster.

For the 3D-printer, it's mostly just random parts of things. I printed a part
for my washing machine. I've also printed a door handle. The house I live in is
quite old and I wanted to install a smart lock, but unsurprisingly it
didn't come with an adapter for a lock that's made in the 1940s, so I
printed my own adapter for that lock and my own door handle to work with it.

### Find out more

[vmcli](https://github.com/gyf304/vmcli) is a set of utilities to help you run
Linux VMs on M1 Macs. It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 21 Jan 2021. This interview was conducted
on 2 Mar 2021.
