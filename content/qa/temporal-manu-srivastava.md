---
title: Q&A with Manu Srivastava, Temporal
who: Manu Srivastava
role: Engineer
org: Temporal
what: a workflow orchestration platform.
date: 2021-03-24T12:00:00+00:00
draft: false
summary: Q&A interview with Manu Srivastava, Engineer, Temporal
isSelected: qa
topImg1Src: /img/qa/temporal-manu-srivastava-profile.jpg
topImg2Src: /img/qa/temporal-manu-srivastava-logo.jpg
ogImg: /img/qa/temporal-manu-srivastava-desk.jpg
---

### What is Temporal? Why did you build it?

[Temporal](https://temporal.io/) is a workflow orchestration platform. It deals
with everything needed to run a task - reliability, retries, redundancy - so
you can focus on the task itself.

I met the CTO, Samar, at Microsoft where he was building a code replay
workflow engine. I was initially skeptical of its value as I thought anyone
could write their code to persist checkpoints and deal with retries. However it
turned out to be much more complex at scale! We ended up using this engine
quite a bit at Microsoft, such as for Azure resource provisioning.

Samar met our CEO, Maxim, at Amazon where they were working on the AWS Simple
Workflow Service. However, the three of us actually met ten years later at Uber
where they had created an extensive workflow engine called Cadence. Our team
was using [Cadence](https://cadenceworkflow.io/) for compliance workflows and
it was this that highlighted the real value: checkpoints, handling messaging
and state management across multiple systems. It meant we had to write less
code.

This is what inspired Temporal. We wanted to build something that any developer
could use, whilst adding extra functionality around execution history, logging,
debugging and analysis of past runs.

### How have you thought about open source vs cloud?

One of the main things I'm working on at Temporal is the cloud-hosted service.
You can host everything yourself but it really requires a lot of operational
experience.

Operating a Temporal cluster requires dealing with upgrades, making sure you're
scaled appropriately and debugging potential issues. This will take a team of
five to ten people. We've spoken to other companies who've said, "Hey, let's
try self-hosting." They've gotten the estimate and they've come back and also
said, "Yeah, this will take too many people. Can you host it for us?" People
want to use it, but they don't want to run it. Just like people want to use a
database, they don't really want to operate and run it themselves.

### What does a "day in the life" look like?

I joined Temporal in the middle of the COVID-19 pandemic, so I’ve only
physically met all my co-workers once at a summer barbecue (wearing masks!).
I've been remote from the day I joined. We have a daily standup and sub-team
standups, then there's some structured meetings, along with a lot of organic
ad-hoc discussion.

A lot of my time is spent working on greenfield projects, which is what I enjoy
most. We're building brand new things, so there is a lot of learning and
exploring. Creating new things versus dealing with and patching up legacy
systems. That's what makes it really exciting. I was the eighth full-time
employee, and right now we're a team of twenty people.

As we are a remote first company, our toolset and our development process is
oriented around that. We do bi-weekly sprint planning and sprint-close retros.
We use [Notion](https://www.notion.so), which has been really good for
collaborating. We do all our task management in it, and all our notes and
design documents live in there.

### How did you first get into software development?

My dad was a software engineer. Growing up, in addition to teaching me math, he
introduced me to computer science. I realized I was really into computing when
I just started to break stuff. My mom had a PhD thesis on her Tandem computer,
which I accidentally formatted when I was seven years old...she was not happy.
I remember that day vividly!

In middle school (before malware detection was a common thing in the late 90s)
I found some keylogger software. I put it on a school computer and lo and
behold, anything that people typed, it would just stream to a text file. To
prank some friends in middle school, I installed it and got into a significant
amount of trouble.

My first programming language was QBasic, then at high school I moved on to
Java. In the US there is an advanced placement curriculum course you can take
that was pretty much all in Java. At Microsoft everything was .NET and C#. At
Uber, it just happened to be Go. I am most comfortable with those two
languages: Go and C#. I also know Python and sometimes play around with some
bash scripting.

I always knew that I liked messing around with computers, breaking them, and
then hopefully fixing them. Along with my dad's influence, that is how I got
into computing.

### What is the most interesting challenge you’ve faced working on Temporal?

When I joined Temporal we hadn't released v1 of the open-source product yet.
The first priorities were focussed on stabilisation, fixing bugs, stress
testing and validation etc.

One of the issues we faced was dealing with an activity heartbeat. The idea is
that you launch Temporal and it deals with the task management. If the machine
running a task dies then the heartbeat timeout expires, and Temporal knows that
the machine that was running the activity has probably died. We noticed that
during high load, the heartbeat would expire but the task wasn’t getting
rescheduled to another machine.

Solving this problem required me to go extremely deep into the task dispatch
logic, getting into the Cassandra persistence layer and piecing it together
from the bottom up. We discovered the issue reproduced on a Temporal server
reboot. The timer deduplication logic was incorrectly dropping certain
heartbeat timers on server startup due to an initial cursor value that was too
high. The fix was simple - on reboot, set the cursor value to zero, as it's
okay to initially process duplicates. Figuring this out was challenging, but
incredibly satisfying.

### What is the tech stack?

There are three engineering teams at Temporal, and they use different
technology suited to the use cases:

* The open source server team primarily build in Go.
* The client SDK team works across the various languages we support. We're
  creating a Rust core because there is a lot of shared logic for the workflow
  state management, which can be pretty complex, and Rust has great
  interoperability with other languages. The replay semantics and having to
  deal with cancellation and other edge cases also need to be handled robustly.
* The cloud service team where we use Terraform, EKS, and Docker. We started
  with a lot of bash scripts but have been refactoring and automating the
  control plane.

### Describe your computer hardware setup

{{< img-center
src="/img/qa/temporal-manu-srivastava-desk.jpg"
alt="The desk of Manu Srivastava, Temporal."
width="100%"
>}}

The desktop itself is something I ordered from [Origin
PC](https://www.originpc.com/) five years ago so it's a pretty old machine now.
I use it with an [Acer Predator Gaming X34 Curved 34" UltraWide QHD
monitor](https://www.amazon.com/Acer-X34-Pbmiphzx-UltraWide-Technology/dp/B079FV8S5M/),
which I can split screen.

For the camera I have a standard [Logitech
1080p](https://www.logitech.com/en-gb/products/webcams/c922-pro-stream-webcam.960-001088.html).
My microphone is an [Audio Technica ATR 2500 X
USB](https://www.audio-technica.com/en-gb/atr2500x-usb), and my keyboard is a
[Razer](https://www.razer.com/gb-en/gaming-keyboards-and-keypads) BlackWindow
with green mechanical switches. I'm not even a gamer, but I like keyboards that
make large sounds and have good tactile feedback. Then as a bonus with this one
the color rotates so it'll cycle through all the colors. My mouse is also a
Razer DeathAdder Chroma - Multi-Color Ergonomic Gaming Mouse.

### Describe your computer software setup

**OS:** Windows, but all my development happens in a virtual box running
Ubuntu.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack for team communication, but each of our own sub-teams has our
own Discord channels. Discord is really good for ad hoc discussions because I
just unmute my microphone and say, "Hey, Sergei, what do you think about X, Y,
Z? Or can we talk about this pull request?"

**IDE:** VS Code.

### Describe your desk setup

My desk is a [BDI Sequel adjustable standing
desk](https://www.woodleys.com/bdi-sequel-6052-lift-standing-desk-66x30/6052-1729/iteminformation.aspx),
so it can go up or down if need be. The chair is a [BDI Powell Office
Chair](https://www.kasala.com/catalog/product/bdi-home-sale/bdi-powell-office-chair-fabric/).

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Neither, I prefer 70% Theo's salted almond, dark chocolate.
That's where the caffeine will come from!

**Silence or music?** Music.

### What non-tech activities do you like to do?

I'm an instrument-rated private pilot, and right now I fly once per month to
stay current. I also enjoy playing piano but I haven't practiced it in a year
or so. Swimming is something I do regularly too.

### Find out more

[Temporal](https://temporal.io/) is a workflow orchestration platform. It was
featured as an "Interesting Tool" in the [Console
Newsletter](https://console.dev) on 1 Apr 2021.  This interview was conducted
on 24 Mar 2021.
