---
title: Interview with Nick Bransby-Williams, GitLive
who: Nick Bransby-Williams
role: CEO
org: GitLive
what: Real time collaboration for your IDE.
tags: ["IDE"]
date: 2021-06-08T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Nick Bransby-Williams, GitLive
isPage: interviews
topImg1Src: /img/interviews/gitlive-nick-bransby-williams-profile.png
topImg2Src: /img/favicons/git.live.png
ogImg: /img/interviews/gitlive-nick-bransby-williams-desk.jpg
---

### What is GitLive? Why did you build it?

[GitLive](https://git.live) is a VS Code extension and JetBrains plugin that
extends your editor with real-time collaborative superpowers. I started GitLive
before COVID hit because I've always had a bit of a penchant for working
remotely, or at least having a flexible schedule, but things really accelerated
as people were suddenly forced to work from home. We’re trying to provide the
things that you miss out on when you're working remotely and create a better
experience than you would have even in the office by improving
developer-to-developer communication.

Our goal is to solve the problems that distributed teams experience. I felt a
lot of the information a team needs to exchange during the workday could be
provided without the need to ask questions and interrupt people. Also, if
someone is asking for help, reducing the time it takes to reach a solution as
often the majority of the conversation is a question of "Where are you? I need
context for the conversation" such as "What branch you on?".

That's an example of something that we show in the GitLive tab in your IDE. At
any moment, you can see who's online, what repositories they are on and their
current branch and issue; as well as the changes they're making at the file/line
level.

{{< img-center src="/img/interviews/gitlive-nick-bransby-williams-product.gif" alt="GitLive product screenshot" width="100%" caption="Conflict detection and cherry picking in GitLive." >}}

### How do people solve this at the moment?

Painfully. Going through a barrage of Q&A to get the background behind a
question. Cutting and pasting snippets of code into Slack or Microsoft Teams.

As a human there's a combination of laziness, being very focused on what you're
doing, and having your own perspective. When you approach someone else,
especially over instant messenger, you don't give them all the information they
need to understand the background to what you're doing. Someone might ask you a
question about a piece of code to which you cannot give an answer until you have
asked five questions back.

And if it's too complicated, as a last resort, you might push your work in
progress to Git just to be able to share them with your teammate. Nobody wants
to push broken changes just so they can be shared.

It can be very painful because, as developers, we don't really have the tools we
need to communicate effectively. We use generic tools that everyone else uses.
Google Meet, Slack etc., they're great tools; but I think they could be a lot
better if they were specifically designed with developers in mind.

### What does a "day in the life" look like for you?

In a small start-up the CEO is really the dogsbody. I try to help my team be as
productive as possible. Having written the initial prototype, I'm a well of
knowledge for team members. I try to make myself as available as possible to
help when needed. Outside of that, I do as much coding as I can because that's
still what I love to do. We're still small enough that I can get away with it,
but I don’t know for how much longer.

### What is the team structure around GitLive?

Currently, the team is less than 10, we’re also remote-first. We're mostly in
Northern Europe, although we aspire to hire from around the world. We don't want
to be geographically restricting ourselves when it comes to talent.

One of the challenges we’ve seen when explaining our product is that you really
need to be an engineer to understand the issues of sharing code pre-commit. This
has influenced our desire to try to only hire people who have at least some
coding background, even if it’s just a few fun scripts here and there.

Also, we've had a positive experience with hiring coding bootcamp graduates from
[Le Wagon](https://www.lewagon.com/) in case anyone reading is considering a
change of career!

### How did you first get into software development?

My mother bought me and my brother a Nintendo when I was 10 years old, I didn't
know what I wanted to do for a career before that point. It was soon after that
I decided I wanted to make video games for a living. I was obsessed about it
enough to teach myself how to code. I eventually grew out of video games, and
had a moment where I was thinking: “I like coding, but what am I going to
build?”

I started coding on the Amiga with BASIC dialects. There was one called Easy
AMOS, specifically for people to learn how to code. This came on the cover of
Amiga Format magazine, so I started with that. Another one, which is called
Blitz BASIC, was a more C-like language specifically for making games, but still
not too difficult for juniors and newbies to learn. From then on, I've learnt
many more. I mostly stuck to object-oriented languages - C++, Java, etc. We use
Kotlin and TypeScript at GitLive.

### What’s the GitLive tech stack?

We're big believers in the cloud. GitLive is a cloud-only product. We run on the
Google Cloud Platform.

Probably the most interesting thing about our stack is how we share code across
different platforms. At the moment, we've got plugins for the JetBrains family
of IDEs, VS Code and Android Studio. The JetBrains IDEs run on the JVM (one of
the rare Java desktop applications still in the wild!) and VS Code is Electron,
which runs on Chromium and Node.js. We use Kotlin's multi-platform technology to
cross-compile Kotlin to share code between these two platforms.

### What about security?

Being a cloud-only service, security is a particularly interesting topic because
you don’t have the traditional route of creating a self-hosted version for
security conscious organisations to host on-premise, safely behind their
firewall.

Our decision to be cloud-only is part of a modern trend that includes industry
giants such as Slack, who are cloud-only, and
[Atlassian](https://www.atlassian.com/), who announced this year they will stop
supporting on-premise, although I'm sure they'll end up extending the deadlines
because they’ve still got so many self-hosted users!

Currently, we support encryption at rest and in transit and will be soon adding
support for end-to-end encryption. As our customers are developers they are
often particularly security conscious, for example, when it comes to end-to-end
encryption, total control of their encryption keys is something that is
important to them.

And there’s a growing ecosystem around how to manage encryption keys in the
cloud that we are building integrations for. Services such as
[Hashicorp Vault](https://www.vaultproject.io),
[AWS Key Management Service](https://aws.amazon.com/kms/) and
[Google Cloud Key Management](https://cloud.google.com/security-key-management)
allow organisations to retain control over their encryption keys. You can revoke
them whenever you like. You can give different keys to different members of
staff, and know who's still got access through those keys. It's the solution for
cloud-based products to offer the level of security you would traditionally get
only through on-premise self-hosting.

### What is the most interesting development challenge you've faced so far?

[Operational transformation](https://en.wikipedia.org/wiki/Operational_transformation)!
Part of the GitLive product is real-time collaboration, Google Docs style, so
developers can see each other's cursors and edit a document at the same time.
The implementation needs to ensure that when two people are making edits
simultaneously, they both end up seeing the exact same thing.

GitLive supports real-time collaboration on a video call via
[Live Share](https://www.microsoft.com/en-gb/resilience/remote-development-solutions)
(VS Code) and
[Code With Me](https://www.jetbrains.com/help/idea/code-with-me.html)
(JetBrains), which are their equivalents to that Google Docs feature. But we
also have our own IDE-agnostic version because, for example, if a team member is
using WebStorm, and another VS Code, they can't use either of those products. In
that case, we use ours.

Operational transformation is the mathematical model typically used to implement
this. Fortunately, there's lots of good documentation on it and open source
implementations but it's still quite hard to get your head round.

### What is the most interesting tech tool you've been playing around with recently?

There’s an open source project I found the other day called
[GitHub OneSecond](https://github.com/conwnet/github1s). When you're on the URL
for an open source repository, if you just put ‘1s’ after GitHub but before the
.com, it loads within seconds. What's most impressive about it is you get VS
Code in the browser, it's read-only, but you can browse the repository’s files.

### Describe your computer hardware setup

I am moving around a bit at the moment, which means I’m working off my laptop.
I'm very tall, so I have a lot of problems with posture and making sure that
I've got a good setup. I have a little stand to hold the laptop up and I've got
a separate keyboard and mouse. I rarely use my laptop as an actual laptop. I got
the
[ASUS Zenbook Duo](https://www.asus.com/us/Laptops/For-Home/ZenBook/ZenBook-Duo-UX481/) -
the one with the two screens - so I have a dual monitor setup with me wherever I
go.

As the keyboard is at the bottom of the base to accommodate the second screen it
means there's no rest for your wrists so not ideal to actually use as a laptop,
but when you put it on the stand, it's really good to have that second screen.

I don't have anything special in terms of the keyboard. I have a Bluetooth
keyboard and mouse from Amazon, probably the cheapest one.

### Describe your computer software setup

**OS:** Agnostic! But currently Windows.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** I spend most of my time between IntelliJ, because we write Kotlin, and
VS Code for the TypeScript stuff.

### Describe your desk setup

{{< img-center src="/img/interviews/gitlive-nick-bransby-williams-desk.jpg" alt="The desk of Nick Bransby-Williams, GitLive" width="100%" >}}

Nothing fancy. I work from cafes and all sorts of places. I use the Nestling
Portable Laptop Desk with a separate keyboard and mouse. I picked this one
because it was the smallest I could find and just about fits in my bag.

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I enjoy running, it’s what I do to clear my head, it feels good to be healthy
and not just sitting at a laptop all day drinking coffee.

### Find out more

[GitLive](https://git.live) brings real time collaboration to your IDE. It was
featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 17 Jun 2021. This interview was
conducted on 8 Jun 2021.
