---
title: Interview with Sean Rucker, Judo
who: Sean Rucker
role: Co-founder & CTO
org: Judo
what: Server-driven UI for iOS and Android.
tags: ["Mobile"]
date: 2022-05-12T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Sean Rucker, Co-founder & CTO, Judo.
isPage: interviews
topImg1Src: /img/interviews/judo-sean-rucker-profile.jpg
topImg2Src: /img/favicons/www.judo.app.png
ogImg: /img/interviews/judo-sean-rucker-desk.jpeg
---

### What is Judo? Why did you build it?

[Judo](https://www.judo.app/) is a platform for bringing server-driven UI to iOS
and Android apps. If you're not yet familiar with server-driven UI, the easiest
way to think about it is from the perspective of the problem it solves. Everyone
who works on native apps for iOS and Android knows the challenge - every time we
want to make a change to our apps, we've got to compile a release, submit it to
the App Store or the Play Store for review, wait for the approval, and only then
it will be available for the users.

The most obvious problem with that process is that it slows down experimentation
and iteration - we are waiting for long periods of time before understanding how
our users respond to changes.

The second problem is the versioning problem - some users will update the new
version of your app right away, whereas some will take their time and some will
never do. This creates a really fragmented user experience because different
users see different versions of your app. Judo aims to solve these problems by
connecting parts of your app's user interface to the cloud and having the layout
and the content be driven by the server itself.

Before Judo, server-driven UI was used mainly by bigger companies like Netflix,
Airbnb, and Lyft. They built their own proprietary server-driven UI with the
layout logic being on the server. They hydrate it with the data from their
business logic and then send it down to the app to be rendered. It's very custom
and would be difficult to build and implement if you are not a big tech company.

Imagine you have part of your app that you want to be powered by a server-driven
UI. Let's say you have a screen that has a list of users. Instead of building
that UI by hand and compiling it in the app release itself, you'll just have a
blank slate screen and that screen will communicate to the server and request
data. The server will then send down some form of markup that your app
understands.

This has many advantages over a WebView, which has all kinds of compromises -
the user experiences are lackluster compared to what you get with the native
frameworks on iOS and Android, and then you have to deal with all these
integration headaches. This is what Judo solves.

### What does a “day in the life” look like?

We are a startup of around 25 people. As the co-founder, I wear a lot of hats.
Every day is a bit different for me, but it usually involves working with
engineers, working on product strategy, product marketing, or preparing for a
tech podcast or an interview like this one.

### What is the team structure around Judo?

Half of the company is the product team, which is mostly engineers. We have a
couple of designers, and I'm basically playing the role of product manager. We
work with a lot of enterprise customers, so we do have a solid customer success
team, as well as sales and marketing.

### How did you first get into software development?

I started getting into it in high school, I guess you could say, building
websites for fun. And that kind of introduced me to programming with JavaScript
and led me to a degree in computer science. But I've always been a more
design-focused engineer with a passion for user experience. I'm much more
interested in delighting users with software than data structures and server
performance.

In university, I started building my own games with Adobe Flash, which I think is dating me, but that was super fun. My first real job was working for Research in Motion, now known as Blackberry. I was actually there when the iPhone was released, so I got to witness the organizational change from this mentality of confidence that we're the untouchable industry leader to this feeling of panic. I remember a box of iPhones being delivered to the Blackberry offices, and the engineers were like, "figure out how they did this."

As soon as I got my hands on the iPhone, I thought it was a game-changer, and I
left Blackberry. I started building apps for iOS and never looked back. Today
I'm really obsessed with Swift UI - we've built the entire Judo design system
around it. I think they really nailed the concept of stacks and spacers and
figured out how to build an intuitive and flexible layout system that is easily
achievable for engineers and also very understandable from a designer's
perspective.

### What is the most interesting development challenge you've faced working on Judo?

Developing for Swift UI itself is just a very interesting challenge. It's
certainly an emerging space. When bigger companies are building it for
themselves, they only need to build what they require. They probably have a
design system in place. Let's say they want to create their own proprietary
markup to be able to drive user interfaces in their app. They just need to
develop a markup that says, "render a button", and there's an agreement already
through their design system about what a button looks like. But if they change
their design system, then, all of a sudden, that agreement is broken, and they
need to do a traditional app release to bring the app up to speed about what a
button looks like. If they have to do that often, it defeats the purpose of a
server-driven UI.

With Judo being a platform approach, we've got to be able to work with any
customer, and we need to be able to offer ultimate flexibility. The markup
language between Judo's cloud and our customer's apps is Swift UI. We built a
very simple JSON wrapper around Swift UI's APIs, and we're using that as the
markup layer. We also have an SDK that lives in our customer's apps that does
that communication, so instead of the server telling the app, "render a button,"
the server can say, "render some text with eight points of padding and a
specific background color and a border radius." This gives ultimate flexibility
to developers as the design system can live on the server, and if you need to
make changes to your design system, you can do it there, and you don't have to
go through another app release.

Of course, we need to support Android as well. The equivalent of Swift UI on
Android is Jetpack Compose. We looked at having different types of markup for
the two platforms, but in the end, that introduced the complexity of authoring
those user interfaces server-side; you'd almost have to build them twice. So
instead, we took a different approach - our Android and SDK understand the Swift
UI markup and translate that into native Jetpack Compose components.

### What is the most interesting tech you are playing around with at the moment?

I'm going to say Apple's [App Clips](https://developer.apple.com/app-clips/).
I've been playing around with them this month in Xcode, and for anyone who
hasn't heard of them yet, they're basically a way to carve out a small portion
of your app that users can run without having to install your full app - they
could be launched by a QR code or a URL.

I absolutely love the experience. It's really magical that you could just take
out your phone and tap an NFC tag or scan a QR code and have this native
experience rendered immediately without having to install an app first. So I'm
surprised they're not more prevalent. I haven't run into them in the wild that
often. They've been available for a while, but I'm very interested in how they
could potentially solve the problem of app fatigue - where users are constantly
being prompted to install more and more native apps.

### Describe your hardware setup

I am running the new iMac 4K and I absolutely love it. I'm a bit of a minimalist
when it comes to design and I really like the aesthetic of an all-in-one machine
with a matching keyboard and the mouse. I've always been a firm believer in the
one monitor lifestyle, and I believe it enables the level of focus that you
can't get when you're constantly turning your head and switching from one screen
to another. To me, the iMac has always been my machine of choice, and I love the
recent iteration of it. The M1 processor is powerful enough for me, and I think
it's great.

### Describe your software setup

**OS:** macOS.

**Browser:** Safari.

**Email:** Apple Mail.

**Chat:** Slack

**IDE:** Xcode.

**Source control:** GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/judo-sean-rucker-desk.jpeg" alt="The desk of Sean Rucker, Judo" width="100%" >}}

I have a Herman Miller chair. I've had a few fancy chairs, but this one is
definitely my favorite. I just recently got a custom desk made that fits nicely
into a corner window.

Judo is a completely remote company. So, I work from home every day - having a
nice environment with lots of light to work in is really important to me.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I'm a big skier and mountain biker. I live across the street from a ski resort,
so I can get 10 runs in the morning before I start my day. In the summer, I get
out on my mountain bike. I find getting your heart rate up in the morning
energizes you for the rest of the day.

### Find out more

[Judo](https://www.judo.app/) is a platform for bringing server-driven UI to iOS
and Android apps. It was originally featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 2 June 2022. This interview was
conducted on 12 May 2022.
