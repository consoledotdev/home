---
title: Interview with Ben Orenstein, Tuple
who: Ben Orenstein
role: CEO
org: Tuple
what: Screen sharing optimized for developers.
tags: ["Collaboration"]
date: 2021-07-09T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Ben Orenstein, Tuple
isPage: interviews
topImg1Src: /img/interviews/tuple-ben-orenstein-profile.jpg
topImg2Src: /img/favicons/tuple.app.png
ogImg: /img/interviews/tuple-ben-orenstein-desk.jpg
---

### What is Tuple and why did you build it?

[Tuple](https://tuple.app/) is an app to do remote pair programming on macOS. We
built it because we wanted to stop using generic screen-sharing tools. We felt
Zoom was too heavyweight, Google Meet's quality wasn't quite high enough and
Slack calls didn't have remote control. As programmers we felt we deserved a
tool that was tailored towards our use cases and the things we cared about. We
are now actively working on our latest client to open up Tuple to non-Mac users.

### How are you different from Zoom and others?

We decided very early on that latency was important. A direct peer to peer
connection is usually your best bet at having the lowest latency possible. The
fewest hops between the two peers is great. Every hop introduces a little extra
slowness. It also keeps our infrastructure simple. If you have media servers,
you need to distribute them globally and maintain them. As we are a small
start-up we wanted to avoid this.

We're now starting to look at that decision and considering alternative
approaches because one of our very popular requests is to support more than
three people. Three people work in a mesh network bandwidth-wise, but going to
four or five or ten, it's going to fall over. For those cases we're going to
have a centralized server in place. We've started researching this and looking
for people to help us build these solutions.

We also do a lot of work to maintain a super high quality on the screen share
stream. This matters a lot when your pair has an 8-point font on a dark
background.

Finally, we wrote the heart of our client in C++ so we tune like crazy and
reduce CPU consumption.

### What does a “day-in-the-life” look like?

I’ve been a developer for more than a decade, but for Tuple, I haven’t written
very much of the code. I helped write some of the server backend in the early
days when we were first getting off the ground. These days I spend most of my
time on recruiting, sales, and marketing.

I'm doing the CEO tasks that developers are typically afraid of. Fortunately,
I've always enjoyed doing those types of things, particularly the marketing
side. I enjoy recording podcasts and being on Twitter and thinking of
interesting ways to get the company in front of people that won't make our
developer audience cringe and hate us.

### How do you approach marketing to developers?

Developers are very hard to market to if you're trying to give them something
they don't want, or that they're not asking for. Developers love to talk about
the tools they use, thanks to this we benefit from word of mouth. They're all on
Twitter, so we are pretty active there.

One thing we do is ask our customers after they've had a string of highly rated
Tuple calls to tweet about the app. We're very honest and say: "We're a small
company, a big way that people find out about us is through Twitter. If you
would share that you're using us and you like us, that would be great". If you
search [@Tuple](https://twitter.com/tuple), you'll see that there's a fairly
steady drip of these coming out. A few people each week are having a good
experience. Our main channel is word of mouth.

We also have people that will leave their employer, go somewhere else and then
introduce Tuple at their new job. People talk about us on forums, conferences,
user groups and on Slack etc. We've been fortunate that we've made something
that some people like enough that they're willing to share it with their
colleagues

### What does the team look like?

We’re pretty small. We have three co-founders.
[Spencer Dixon](https://twitter.com/spencercdixon) is our CTO and
[Joel Sutherland](https://twitter.com/robamaton?lang=en) is our COO. They both
mostly write code. We have a full-time engineer who lives in Paris and we have a
part-time support person who lives in Portland. We also use an outsourced QA
firm that helps us ship fewer bugs and that's about it.

We’re currently looking for an experienced Linux developer. We'd like to hand
off ownership of the Linux client to someone that knows Linux well. If somebody
has experience or if they're just incredibly fired up to learn this kind of
thing, we’d love to talk to them. If that's you, please email me directly at
[ben+linux@tuple.app](mailto:ben+linux@tuple.app).

### How did you first get into software development?

I think the first program I ever saw was
[GORILLA.BAS](<https://en.wikipedia.org/wiki/Gorillas_(video_game)>) on a DOS
machine. It was like a QBasic program. It had super simple graphics and an
interesting little physics engine in it.

The first time I really started writing code for real was my senior year of high
school where I took a class at the local college that was teaching the basics of
C. That was the first time I started to understand some of the lower level stuff
going on in a computer; managing memory, pointers, and that sort of thing.

The next one I bumped into was Java at college. I guess maybe Scheme and then
Java. I was technically programming, but they were all class assignments. I
wasn't building something I wanted. I was studying computer science, which was a
lot of math, a bit of theory, and a bit of programming. The first language that
I really used quite a bit was Ruby. That's been more or less my home since then
with some dabbling in things like Closure and Elm.

### What's the Tuple tech stack?

Tuple is a native app that runs on your desktop. The client is a Swift app for
the UI layer and then underneath it is a C++ engine that handles the real time
work. We use [WebRTC](https://webrtc.org/) under the hood.

It was a massive undertaking to split those pieces effectively so that we can
start building on other platforms like our upcoming Linux client. Then the
backend is a Rails app that just handles user creation, subscription management,
billing, that kind of thing.

### With the C++ foundation does that mean you’ll use something native like GTK on Linux?

Exactly, it is [GTK](https://www.gtk.org/). Our philosophy is that it's worth
having native clients so we have full access to the operating system's APIs.
This lets us have a thin, fast UIs that feel like first-class citizens.

In the early days we tried an electron app and we couldn't get the performance
we wanted. It felt heavy and we were not really accessing the APIs as we wished
we could. Our plan going forward is native UI, backed by a cross-platform C++
engine.

### Did you consider using a browser instead?

There are some niceties with using the browser version for sure. However, we
wanted control of all the performance knobs and dials.

### How are you thinking about Windows support?

I have a slight hope that it might just work with
[WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)! That might be
a nice stop gap for a little bit. However, because we believe in the native UI,
that wouldn't be a long-term solution.

We’ll see how Linux goes first though. We're still a very small team to be
supporting tens of thousands of users and multiple platforms, which is why we're
hiring. Once we get our feet underneath us with multiple clients, we're going to
see how we feel about Windows. It's certainly the right call from a market share
point of view. The pure capitalist's answer would be obviously we're going to
Windows as soon as possible, but as someone that cares about quality of life for
all of us, it's not totally black and white.

### Why Linux next?

We got about twice as many requests for Linux as Windows. Also, we like Linux.
We are excited to work on that platform and we're excited to have Linux machines
in the office, but there's not really anyone on the team that's particularly
excited about Windows at the moment!

### What was the most interesting development challenge building Tuple?

The hardest part was the fact that the three of us were web developers. If you
asked us to build a CRUD app, no problem. But Tuple is as different from a CRUD
app as it gets. It is a native desktop app with real-time communication and some
thorny problems to solve.

This shows up when we search around for other people who have worked on similar
projects. Screen sharing is never the demo app in anyone's tutorial or blog
posts! We're always on the non-happy path. The APIs are never quite right for
us. The examples are never quite right for us. When we use third party vendors,
we always ask, "Do you have a C++ client?" And they're like, "LOL, no, obviously
not".

I guess the biggest challenge was just how different it was from everything
we've done and how off the beaten path of an app it is. This made it an
interesting challenge, but also quite painful. Fortunately, my co-founders are
badasses and we made it through to the other side.

### What's the most interesting tool or products you're currently playing around with?

I can't live without [Alfred](https://www.alfredapp.com/). I’m a huge keyboard
advocate. My editor is Vim and has been for more than a decade now, so I want
that experience in all of my environments. I even use
[Vimium for Chrome](https://github.com/philc/vimium) so I can navigate that with
the keyboard. Pretty much every time I have to put my hand on a mouse, I'm a
little bit disappointed.

### Describe your computer hardware setup

I'm not writing much code day-to-day now, so it's somewhat on the basic side. I
have a Mac, a 2018 MacBook Pro and an LG 27 inch display. I use a
[Kinesis Advantage Pro keyboard](https://kinesis-ergo.com/shop/freestyle-pro/),
which has that split situation. It's not a super crazy setup at the moment.

The interesting setup would probably be my co-founder, Spencer's desk. Because
we make a peer to peer collaboration app, you pretty much need two machines to
test it. Now we have a Linux client as well in development, so he has four
machines. Traveling and doing development for our engineers means a very heavy
backpack.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome + [Vimium](https://github.com/philc/vimium)

**Email:** Gmail + [Superhuman](https://superhuman.com/).

**Chat:** Discord.

**IDE:** Vim.

**Source control:** Git + GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/tuple-ben-orenstein-desk.jpg"
alt="The desk of Ben Orenstein, Tuple." width="100%" >}}

I have an
[Aeron chair](https://www.hermanmiller.com/en_us/products/seating/office-chairs/aeron-chairs/)
in tall. My desk is a [Fully](https://www.fully.com/) desk that I try to stand
in most of the time. At home, I have another standing desk and I don't even have
a chair next to it so I'm forced to stand, especially as I game. That's my trade
off with myself. I can play as many video games as I want, but I have to stand
the whole time.

### When coding

**Daytime or nighttime?** Daytime afternoon.

**Tea or coffee?** Coffee.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I like to do indoor rock climbing and am also picking up tennis and golf. My
biggest hobby is singing. I sing in a barbershop quartet and also a classical
chorus.

### Find out more

[Tuple](https://tuple.app) is a screen sharing tool optimized for developers. It
was featured as an "interesting tool" in the
[Console newsletter](https://console.dev) on 15 Jul 2021. This interview was
conducted on 9 Jul 2021.
