---
title: Interview with Donnie Hasseltine, PackageCloud
who: Donnie Hasseltine
role: CEO
org: PackageCloud
what: Hosted package repository service.
tags: ["Packaging"]
date: 2021-11-04T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Donnie Hasseltine, CEO, PackageCloud.
isPage: interviews
topImg1Src: /img/interviews/packagecloud-donnie-hasseltine-profile.jpeg
topImg2Src: /img/favicons/packagecloud.io.jpg
ogImg: /img/interviews/packagecloud-donnie-hasseltine-desk.jpg
---

### What is PackageCloud and why did you build it?

[PackageCloud](https://packagecloud.io/) is a hosted package repository service.
It offers a unified developer-friendly approach for all release artifacts. It
doesn't matter what the language or infrastructure is, we can take any package,
any language, and deliver it to any infrastructure.

It was originally built by [Joe
Damato](https://www.linkedin.com/in/joe-damato-683b053/), who created it as a
side project. He had developed and distributed software, but was always
challenged with getting packages built, managed, and transmitted effectively and
efficiently.

Starting out as a Ruby On Rails project in AWS, he expanded it from there. The
early customer feedback was really positive, because it focused on a few core
capabilities rather than try to offer all things to all users. For instance,
while Java wasn't initially supported, it offered great support for Debian and
RPM packages which got people excited.

We found that it was common to use a large number of different, specialist tools
for each repository they needed to manage - they struggled to find one that
could do everything and put them all in one place. If you're trying to develop
and release software, you don't want to have to log into fifteen different
things. You want to log in to one interface that has all your packages, that
tracks all of the updates, and manages each one for you.

### Why not just host your own repositories?

A lot of companies can build an internal manager, and you could probably host
and manage your own. It's not that complicated, but the problem is that when you
do that, you have to maintain it. That's the real challenge, to build and
maintain all the ancillary functions you would need to keep that software
running, and that's where it starts to become a problem.

What we've found with a lot of developers is it’s just so much easier to use a
service like PackageCloud because you don't have to worry about the maintenance
of it. It's a ‘buy versus build’ question. If you want to host your RPM, you
have to maintain an RPM repository. If you want to host Debian packages, now you
have to host your Debian repository. Same for all the others we support.

PackageCloud has everything. One single repository for all the different
artifacts, and it's built to be highly scalable. If you were to take an open
source RPM repository or demo repository, it's meant to be on a single server,
and it's not meant to scale that well. This is a solution that's built to scale.
Every package is delivered from a CDN, no matter where you are.

If you're just doing a single small project in a single language or framework,
maybe you can do it on your own. If you're now trying to distribute that
software across multiple different paths or frameworks or languages, it's far
more efficient to have it all in one place where you can look. You have it all
listed out and you can keep track of it much easier.

When you're building something, you want to focus on what you're building. The
passion that you have is on making something new or better and getting it out
for people to use.

The maintenance and logistics of that last mile to the customer is a painful
process. You'd much rather be doing more fun stuff on the coding side than
mowing the lawn and maintaining the highway.

We question what we can take out of a developer's hands that makes their job
more efficient, their workflow smoother, allowing them to focus on what they're
excited about, which is developing the software itself.

### What does a "day in the life" look like?

I do a lot more of the business management and cybersecurity.

The first thing I do in the morning is look at our support track and see if
anybody had any problems while I was sleeping. I’ll help triage those problems
and make sure that our development solutions engineers are identifying, and
racking and stacking those issues.

I try to move into an inbox zero state where I'm cleaning up and prepping for
the day. My day takes off later, because a lot of our teams are in the Asia
Pacific region. So between California, Australia, Tokyo, we have a lot of our
syncs in meetings across the team, and our one-on-ones, to identify and
prioritize what our next steps are, and check the statuses of things.

A lot of my job is communicating with customers, reaching out, and having
conversations with customers, talking to people that are trying to adopt the
platform, then talking to others that want to expand their usage of the
platform.

Much of the technical aspects are managed by our CTO, Khor, and his team in
Tokyo.

### What is the team structure?

We’re a small, but effective team. We have a lot of our sales reps and our
support folks are in the United States, spread out mostly in a couple of
different locations of the United States amongst California, Nevada, and Texas.

Our Director of Operations is in Sydney, Australia. And then Khor and our
development team are in Tokyo.

We also have a marketing and advertising team that is spread out between the
United States and Japan. In total, we’re about 12 people right now. Most of our
communication is asynchronous using email and Slack.

We also run weekly sync meetings where we line up and get everybody on the phone
just to have that human interaction, and talk. In a way that really encourages
asynchronous collaboration, so that we can constantly keep the ball moving
forward without having to stop and get everyone together on a call. It's really
important to us to have the teammates able to maximize their output in a way
that best suits them.

### How did you first get into software development?

I was a US Marine for over 20 years in the ground combat arms communities. Near
the tail end of my military career, I started seeing how impactful cyber warfare
was becoming. I could order anything I wanted on Amazon.com, but I had no idea
what happened when I pressed that button. Out of a personal curiosity, I started
digging into tech.

I had been stationed out in Silicon Valley, so I started building a lot of
friends in the startup space, and learning how startups were built on the
business side, but also getting a sense of some of the new technology that both
the military and the commercial sectors were looking at.

I took some Python courses and started getting into the basics of how software
works, and then jumped headlong into cybersecurity by taking a Masters in
cybersecurity. Initially, I joined [Xenon](https://xenon.io/) working as their
Chief Security Officer, working on cybersecurity across all of these different
companies.

I worked on application performance monitoring, did some work with ETL and APIs,
and then shifted gears and worked in password management and authentication, and
then came over to PackageCloud.

As I come from a security background, you’ll often find me saying to the team:
"Well, I bet we could get around it if we do this," or, "I bet it would break if
we did this." Or, "If I was trying to break into this customer software, this is
the route I would probably take conceptually."

This then allows us to then break apart that question, and say, "Okay, if that's
the case, what is our responsibility as a repository management service?" But
also, what are the things we can do to either protect our customers, or help
walk them through the steps that they need to take on their side to be more
secure?

### What's the most interesting development challenge that you faced building PackageCloud?

It's probably the one that we probably haven't released yet, and are working on
it right now. We started the project off the back of a really interesting
[article on dependency confusion by Alex
Birson](https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610).

Alex highlighted a novel way of conducting supply chain attacks where he was
able to start looking for software that was calling out to private repositories,
and registering public repositories in the same name. He found that in many
cases, the language of frameworks would default to the public repositories,
which allowed him to immediately access software in the wild, and potentially
drop in malicious code or other scripts.

Thankfully he was a white hat hacker, and he reached out to these companies,
and they started patching this issue. Our concern was, it's great if you're an
Apple, Netflix, or Google, because you have a massive team, but what about the
small start ups, or the independent developer that's releasing software? How are
they being protected from this sort of attack?

The first step is trying to figure out are there ways that we can prevent
dependency confusion, and make PackageCloud a single point of control and give
the ability to have some anomaly detection? Can we understand where the
dependencies are, understand what updates are out there, and make sure it's been
digitally verified with the proper authors and contributors? Can we scan it for
known vulnerabilities?

Ultimately, can we make sure that someone can't do what Alex did and hijack
someone's software. We've worked a lot with Google and the [Open Source Security
Foundation](https://openssf.org/), who are building a framework called
[Supply-chain Levels for Software
Artifacts](https://security.googleblog.com/2021/06/introducing-slsa-end-to-end-framework.html)
(SLSA). They have built a framework and shared the things that you need to do to
protect it.

The other piece that we've also looked at is, if we have your repository, how
can we give you a window into the past? Can we articulate, not just your
dependencies, but also the code ancestry, so you can see all the people out
there that contributed to the code?

If you're a small developer, you're probably calling out to different packages
via NPM, Ruby Gems, etc and bringing in a lot of diverse pieces that you don't
necessarily control or understand, especially if you're working from the command
line.

Once your software's all compiled and ready to go, can we give you a window to
say, here's the things that you might be concerned about that you might want to
dig into before you release this?

That's the challenge we're exploring. Our bread and butter is to support as many
packages as we can, and seamlessly deploy them out to customers, but I think the
next step is really, what can we do to help developers make sure their products
are more secure.

### What's the PackageCloud tech stack?

We're on Ruby on Rails and AWS.

### What’s the most interesting tool or tech you’re currently playing around with?

Every year, I work heavily with [Stanford's Hacking for Defense
program](https://www.h4d.us/). It’s a cool program in the United States where
they take the lean method that startups use to find product market fit and
analyse customer discovery, and then apply it to the Department of Defense and
intelligence community problem sets.

For example, you take a problem that the military and intelligence community
either couldn't figure out, or was working on, but hasn't quite got to where
they want to. These are problems they want to figure out, but that they don't
have the resources to apply it right now, so they give it to a team of smart
students and say, "Hey, you got 10 weeks. Your grade depends on it." And what
they come up with is pretty remarkable.

It gives us the ability to give back, and add mentorship to the next generation.
It also gives us the ability to see some new ways of thinking about old
problems. Not all of that is directly applicable to what we're doing at
PackageCloud, but it also helps open a lot of doors to the cyber security side,
and makes sure that we're tracking some of the new technologies out there.

### Describe your computer hardware setup

I'm on a MacBook Pro with a large Dell screen connected to it. I have it set up
with two laptops, and a bluetooth keyboard and trackpad.

{{< img-center
src="/img/interviews/packagecloud-donnie-hasseltine-desk.jpg"
alt="The desk of Donnie Hasseltine, PackageCloud"
width="100%"
>}}

### Describe your computer software setup

**OS:** macOS, but occasionally I will still operate in Windows.

**Browser:** All of them - many for testing. I use Chrome for Google workspace
stuff, but from a privacy standpoint I prefer to use Firefox.

**Email:** Gmail and Superhuman.

**Chat:** Slack and Zoom. Occasionally Skype to connect to people’s phones
internationally.

**IDE:** Atom.

**Source control:** GitHub.

### Describe your desk setup

Just a standard desk.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Music - I use a tool called [Endel](https://endel.io)
which provides a new age, white noise background sound.

### What non-tech activities do you like to do?

I like anything outside. If I have a break, I will take a walk, jump on a trail,
and try to get out. There's a few little open spaces around here in California,
so I'll try and get out into the woods, and get away from technology for a
little bit to reset. Stuff in nature.

### Find out more

[PackageCloud](https://packagecloud.io/) is a hosted package repository service.
It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 18 Nov 2021. This interview was conducted on
4 Nov 2021.
