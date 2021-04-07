---
title: Q&A with Petr Nikolaev, Raycast
who: Petr Nikolaev
role: Co-founder
org: Raycast
what: a quicklauncher that lets you control your tools with a few keystrokes.
date: 2021-03-17T12:00:00+00:00
draft: false
summary: Q&A interview with  Petr Nikolaev, Co-founder, Raycast.
isSelected: qa
topImg1Src: /img/qa/raycast-petr-nikolaev-profile.png
topImg2Src: /img/qa/raycast-petr-nikolaev-logo.png
ogImg: /img/qa/raycast-petr-nikolaev-desk.png
---

### What is Raycast? Why did you build it?

[Raycast](https://raycast.com/) makes it easy to control your tools with few
keystrokes without context switching. We built Raycast because we were tired of
slow interfaces, web browsers and products that we felt like were not built for
efficient workflows.

Previously, working in a big organization (Facebook), we would spend a lot of
time on communications, task management, code review and other non-coding
things. It felt so slow. Even if you just go and do something quickly in a
browser, you end up in a chat, and then half of the day is gone.

At Facebook, as side projects, we built a few micro productivity tools which is
why we started thinking - what if we had some kind of a framework for this, an
app where you can do these things. This is how it started.

{{< img-center
src="/img/qa/raycast-petr-nikolaev-product.png"
alt="Raycast product screenshot"
width="100%"
caption="Raycast integration with Jira issue tracking."
>}}

### How have you thought about building a tool for developers vs general users?

This is interesting because we don't really see ourselves as just a developer
tool. It's how we target the audience at the moment, but if you look on our
website, we don't mention developers that much. You don't have to be a
developer to use Raycast, it's very similar to Apple's Spotlight.

Developers are the audience that will help us to bring the ecosystem to the
level where we have a lot of extensions. Actually, the main product that we’re
building right now – API for extensions – is not yet available to the public.
We want to make it super easy to build productivity tools without you needing
to know how to build desktop apps or websites.

We knew that we couldn’t start with the platform, so we wanted to first test
different use cases. We started interviewing people, and the biggest pain point
among the services was Jira. It’s just notoriously slow. Almost every developer
complained about this. We built the first version with basic Spotlight
functionality, built the Jira integration and then it picked up interest so we
kept adding more and more extensions from there.

We recently stopped adding new extensions so we can focus on building our
JavaScript API that will allow our community to integrate other services with
Raycast.

### What does a "day-in-the-life" look like for you?

There is no universal day! Sometimes I go deep into coding to ship a feature,
other times there are days where I need to be more involved in other projects,
maybe reviewing something or onboarding people or dealing with the community
and feedback. During these periods, I don't get too much coding done.

As we grow, it's getting harder and harder to dedicate time for coding. I'm
also not great at switching between things. To code, I need a few hours without
distractions. Going forward, unfortunately, it's going to be less and less
coding for me.

### What is the team structure around Raycast?

Last year, there were five people: me and my co-founder, Thomas, two engineers
and one designer. Now there’s ten of us. Majority of the team is focused on
building the API and the extension store.

### What is your tech stack?

We made a deliberate choice to go the hard route and build a native client. We
want to be a Spotlight replacement and be as close to the system as possible.
Choosing Electron would mean a lot of fighting with CPU consumption, resources
and binary size. We update, for example, every week and we don't want our users
to download hundred-megabyte binaries every time.

It also was where our domain knowledge was, having worked on native iOS and
macOS clients at Facebook. Raycast is written in Swift using AppKit for UI,
which has been the only technology for a while. Now we have a little bit of a
back-end for the upcoming extension store. For the website, we use
[Vue](https://vuejs.org/), which is really lightweight.

### What's your approach to cross-platform?

Right now we want to focus on macOS. The market is big enough. People know the
concept well. It makes it easy to explore the UI and the concepts with just a
single app without the need to keep multiple clients in sync.

The goal for the API is that it is consistent across all platforms for all
extensions. We also want to move all our current extensions with third-party
services to [TypeScript](https://www.typescriptlang.org/) as well at some
point.

Once we have the platform and we see that everything works and it's growing, we
will hire people to write the Windows client. I'm not sure when Linux is going
to happen. It feels like a bit of a niche market, so maybe at some point.
[1Password](https://1password.com/) recently added their client for Linux. It
took them a while.

### How did you first get into software development?

I started at university studying computer science, but I also wasn't too
passionate about coding because we were doing some very abstract things. It was
not connected to the real world. I'm not sure if that's the problem of my
specific university or if it's a common problem.

As a student I was mainly playing online poker as a way to earn money. When I
got tired of it, I joined a small agency as a junior Flash developer. By this
point, Flash was already dying. Soon after I joined the company I got an
opportunity to work on an iOS project which is when I found my passion in UI
and building nice interfaces. From there I moved to VK (Russian Facebook) and
after a few years I ended up at Facebook, where I switched to macOS, and then
Raycast.

### What's the most interesting development challenge you've faced with Raycast?

The biggest challenge in Raycast is the design and UX because the UI is
constrained in size. We need to make lots of trade-offs. Everything should be
keyboard-driven, the UI patterns and interactions should be consistent across
various extensions, etc. These constraints make your brain hurt when you try to
figure out how to build a particular flow! AppKit also is not easy to tame,
especially when you want to have a custom look and behavior. AppKit's default
components were never meant to be used in the context that we use them
(keyboard first), so we ended up building a lot of custom UI.

Apple doesn't make it easy to build good desktop apps, so I'm not surprised
people choose Electron.

### Why did you decide to go with local auth for third-party integrations?

This was a thing that makes sense for users and it also makes our life easier.
We don't need to worry too much about the security of our backends right now.
We don't have a backend. Everything is in the client. Whenever somebody asks
us, ‘Hey, how secure it is?’ we say, 'It's all on your machine, you can check
your credentials in the keychain.’

### What is the most interesting tech you are playing around with at the moment?

There are two apps that I’m enjoying. One is [Linear](https://linear.app/).
We're friends with the team and are big fans of their approach.. Mainly because
they try to make these work tools enjoyable. Beautiful design, fast
interactions.

Another is [Figma](https://www.figma.com/). It's just hard to imagine how
complex the implementation of this must be, where everyone just can collaborate
in the real time. Especially in a world where I experience some connection
issues and I can't send a message, but in Figma, cursors are moving live. It's
amazing.

### Describe your computer hardware setup

This one is going to be really boring. It's all Apple. I don't have any fancy
cool keyboards that a lot of developers have. Apple MacBook Pro 16", Apple
keyboard, Apple mouse with an LG UltraFine monitor.

I try to avoid depending too much on additional hardware because I often want
just to take my laptop and sit and code.  I don't want to feel like I can't
work on my laptop because I'm missing my keyboard or my super mouse or
something like that.

### Describe your computer software setup

{{< img-center
src="/img/qa/raycast-petr-nikolaev-desk.png"
alt="The desk of Petr Nikolaev, Raycast"
width="100%"
>}}

**OS:** macOS, Catalina.

**Browser:** Chrome.

**Email:** [Front](https://frontapp.com/) for work, Apple Mail or
[Mimestream](https://mimestream.com/) for personal.

**Chat:** Slack.

**IDE:** Xcode for macOS work, and VS Code for everything else.

**Source Control:** [Sublime Merge](https://www.sublimemerge.com/) for Git.

### Describe your desk setup

My standing desk is from [Jarvis](https://www.fully.com/standing-desks.html).
Nothing special apart from that.

### When coding

**Daytime or nighttime?** Daytime, sometimes early morning time. Never nighttime.

**Tea or coffee?** Tea.

**Silence or music?** Music.

### What non-tech activities do you like to do?

That question is like a punch in the face during the pandemic! Especially being
a founder of a startup, you're fully consumed by the startup in your head. It's
really hard to switch from it. In normal time, I enjoy sport: squash, running,
tennis.

### Find out more

[Raycast](https://raycast.com/) is a quicklauncher that lets you control your
tools with a few keystrokes. It was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 25 Feb
2021. This interview was conducted on 17 Mar 2021.
