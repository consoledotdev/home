---
title: Interview with James Little, Stork Search
who: James Little
role: Creator
org: Stork Search
what: A full-text search tool for static websites.
tags: ['Search']
date: 2021-03-10T12:00:00Z
draft: false
headerType: fixed
summary: Interview with James Little, Creator, Stork Search.
isPage: interviews
topImg1Src: /img/interviews/stork-search-james-little-profile.jpg
topImg2Src: /img/interviews/stork-search-james-little-logo.jpg
ogImg: /img/interviews/stork-search-james-little-desk.jpg
---

### What is Stork Search? Why did you build it?

[Stork Search](https://stork-search.net/) is a free open-source full-text
search tool primarily for static websites. If you give it a corpus of content,
it will build a search index file that you can upload to a web server or a CDN.
Then, it provides a JavaScript library that will analyze that index file and
build a rich, search-as-you-type, full-text search interface for you.

I built it for static websites, but it's usable for a lot of different types of
websites: sites that follow the [Jamstack](https://jamstack.org/) philosophy
primarily, but also WordPress or Ghost blogs, even video or podcast sites.
Stork has full support for subtitle files. You can give Stork a bunch of
subtitle files and when you search for a word that is in a video or a podcast,
you can set it up so it will link directly to that timestamp.

There are two parts to Stork. First is the command line tool that builds the
index. Second is the JavaScript library which loads up a WebAssembly binary.
The WebAssembly binary and the command line tool are built from the same Rust
code base. It's just two different compilation targets.

One of the driving concepts behind Stork was if you have a limited corpus of
text, you can precompute search results for any query ahead of time. There's a
lot of work that goes into optimizing what actually gets stored in the index
file versus what the web assembly binary is doing as pre-processing. There's no
actual search algorithmic work going on once you're in the web assembly binary.
It's just looking up from a hash table that is encoded in the index.

Basically any site that doesn't update too frequently is a good candidate for
use with Stork. Any site that has a moderate amount of text content that you
can search through and where that text content is addressable by URLs will
work. You can build the index as part of a build process, or even just on your
own laptop if it's not changing frequently.

I have been doing web work for a long time. I'm completely bought into the
Jamstack style of web development, but I never really found a search solution
that I was excited about using. They all have their own problems, so I built
Stork to be a modern, forward-thinking search tool with the best interface and
developer experience that I could design.

{{< img-center
src="/img/interviews/stork-search-james-little-product.gif"
alt="Stork Search product screenshot"
width="100%"
caption="Stork Search demonstration."
>}}

### Why did you write it in Rust?

This is my first Rust project. I had played around with the language a little
bit, but Stork is the first thing I really built and went all in for, mostly
out of necessity. I knew I wanted to use
[WebAssembly](https://webassembly.org/). The whole impetus of the project was
that WebAssembly will make this kind of computation fast and doable.

At that point there were two languages that could easily compile into a
WebAssembly binary: Rust and Go, and I chose Rust. I liked the syntax and the
community more. There's so much tooling in the Rust community for turning your
Rust program into a WebAssembly program. The people behind Rust and the
WebAssembly working group are really smart, and I'm lucky that they've done all
the work for me, so I don't really have to think about WebAssembly as a
compilation target. I just compile it and know that it works.

I think picking Rust was the right choice, and it has been fun to explore the
hidden depths of the language via this project.

### What does a "day in the life" look like?

Stork Search is an [open-source](https://github.com/jameslittle230/stork) side
project, so Monday through Friday, 9am to 5pm, I'm at my day job at
[Stripe](https://stripe.com/). When I do get a chance to work on Stork. I want
to keep a close eye on GitHub issues and discussions. There is a fledgling
community growing around Stork, and I want to make sure that I'm fanning that
flame wherever I can, helping people out.

Part of working on this is that I get to decide what the community ‘feel’ is
like, and I want it to be a very personal thing. For example, in the footer of
every [Stork Search web page](https://stork-search.net/) it says, "I'm very
excited that you're here. Thank you for checking it out" and that's the
mentality that I want to bring to any of the community interactions.

A lot of what I do is around planning: What features should I build, what bugs
should I fix, what do users want, and how can I build the best search tool that
I can? As I have limited time, planning is super important for this kind of
project. If I've planned everything out nicely and I know what I want to build,
I might spend an hour or two in the evening writing some code or documentation.
At weekends I get to spend a little bit more time.

One thing that I've been playing with recently is [streaming development on
Twitch](https://www.twitch.tv/jameslittle230). I think it's a good way of
introducing the code base to people. It's something that I've never really done
in my development practices before: live coding, live explaining what I'm
doing. It's a lot harder than it looks, but it's been a fun exercise and
definitely something that I want to keep doing and keep growing.

### How did you first get into software development?

When I was a kid, I loved playing little Flash games - like platformers. I have
an uncle who is in technology, and I think he wanted to take the energy I put
into playing Flash platformers and turn it towards exploring how websites are
built. He taught me how to set up an HTML project on the Windows XP computer
that my family had at the time. He bought me an HTML for kids book when I was
around seven years old.

It was a hobby that I quickly realized I wanted to keep spending more and more
time doing. I learned about PHP when I wanted to make the sites I built a
little bit more dynamic. Really, I didn't want to write the same navigation
header a dozen different times for a dozen different HTML pages, so PHP’s
[include directive](https://www.php.net/manual/en/function.include.php) became
magical for me.

I took programming classes in high school - I was lucky to go to a high school
that offered that sort of thing. This class had me programming games in Java
applets, so I think the first repositories on my GitHub profile are Pong and
Asteroids! Later I went to major in computer science at college, and that gets
us to where we are now.

### What is the most interesting development challenge you've faced working on Stork Search?

The challenge with Stork has mostly been centered around designing the
developer and end user experience. How does it feel as the developer building a
search index, and how does it feel if you're the person coming to the website
trying to search for something? That's the experience that I wanted to hone
throughout the development process.

Working with Rust is tricky, too. If you haven't played with it for long,
things like figuring out the lifetimes of my data and modeling how it
transforms as it weaves its way through the indexing system has taken me a
while

The third challenge has been dealing with data structure design and data
compression when building the search index. I want that search index file to be
as small as possible, but also to hold as much information as possible, so that
it can have the excerpts below the search results to see the context of the
thing that you've searched for. Making sure that all of that can get packaged
together in a small enough way has been a tricky problem. I don't think I've
solved it yet, but it's something that I feel is always at the back of my head:
How can I inch a few kilobytes off of my search index?

I tend to think of the search index in the same vein as the images on a site.
It's just a bag of bytes and you don't really need to know what's in the bag of
bytes, but the browser - or in Stork's case, the JavaScript library - knows
what to do with it and can turn it into a search interface on the screen.

### What is the most interesting tech you are playing around with at the moment?

I'm lucky to live in an apartment with fast internet speed and a girlfriend who
is very patient with me when I want to play around with the home network. This
has been a fun distraction for me. I set up a [Ubiquiti UniFi
network](https://unifi-network.ui.com/dreammachine) that runs in my apartment.
When I completed my computer science degree, I had a very abstract
understanding of how networking works, so I've been setting up subnets and
VLANs and things like that, actually seeing everything in detail and trying to
decide how everything on my network is going to be segmented.

I set up a [Pi-hole](https://pi-hole.net/) as a network-wide DNS server to
block out ads, which has been nice for when I'm playing Boggle With Friends,
which is a very ad-laden mobile game. I also have a 4-bay [Synology
NAS](https://www.synology.com/) that is self-hosting some applications, and all
of the computers in the apartment back up to it too. It feels a bit like a
house of cards that I get to very precariously maintain! It's a fun project.

### Describe your computer hardware setup

I am running an [M1 Mac mini](https://www.apple.com/mac-mini/), which is the
first desktop that I've personally ever owned. It's all been laptops before
then. I love it. It sits in the corner of my desk and is incredibly quiet and
fast. All of the rumors you hear about the M1 computers being shockingly
amazing are true.

I have a single monitor. It's a [Dell 24-inch 4K
thing](https://www.dell.com/en-us/work/shop/cty/dell-24-ultra-hd-4k-monitor-p2415q/spd/dell-p2415q-monitor)
that I picked up secondhand. I'm using a [Logitech MX vertical
mouse](https://www.logitech.com/en-us/products/mice/mx-vertical-ergonomic-mouse.910-005448.html),
after the MX master was hurting my wrist. I have a [Vortex POK3R
keyboard](https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=165)
that I've had for five years at this point. It's got cherry MX clear switches.
I use an [Apple
trackpad](https://www.apple.com/search/Magic-Trackpad-2-Silver?tab=accessories)
so I can do the multi-finger gestures when I need to. And I have an iPhone 10S.

### Describe your desk setup

{{< img-center
src="/img/interviews/stork-search-james-little-desk.jpg"
alt="The desk of James Little, Stork Search"
width="100%"
>}}

Due to the Coronavirus pandemic, I’m working from home in the corner of my
apartment's living room. My desk is a butcher's block that I got from a
hardware store that I stained and waxed. I’ve put it on some motorized standing
desk legs, so it can raise and lower - I’ve found that I enjoy standing in the
morning.

The computer is plugged into a [CalDigit
dock](https://www.caldigit.com/docks/), which is one of the best things that
I've purchased for my setup. It gives me one cable that I can move between
computers, and I have a lot of little accessories that I like to keep plugged
in, like a [Blue Yeti microphone](https://www.bluemic.com/en-gb/products/yeti/)
for Zoom calls.

I also have a [Magni Modi Schiit Stack](https://www.schiit.com/products) as my
headphone amplifier and my DAC so I can listen to music through headphones. I
also have a [HomePod mini](https://www.apple.com/homepod-mini/) also on the
desk for when I don't want to put the headphones on and I just want to have
something on in the background.

I have a desk lamp with a [LIFX bulb](https://www.lifx.com/) that can change
colors. I never really change the colors, but it's fun because I'm all in on
HomeKit for home automation. I have some NFC tags that I stuck to the underside
of my desk, and that lets me wave my phone under my desk and the lights will
turn on, which is pretty fun.

### Describe your computer software setup

**OS:** macOS, Big Sur.

**Browser:** Safari for casual browsing. Firefox for development.

**Email:** Apple’s Mail.app. It's backed by Gmail but I like having it open as
a native app in the background.

**Chat:** Slack

**IDE:** [VS Code](https://code.visualstudio.com/) as my main text editor, but
I also have [Sublime Text](https://www.sublimetext.com/) and Vim open, and use
them for their own separate reasons. [iTerm2](https://iterm2.com/) is my
terminal emulator.

**Source control:** Git for source control, but I use
[Tower](https://www.git-tower.com/) as a user interface on top of it.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Music. Usually something pop-y with a good beat.

### What non-tech activities do you like to do?

I live in San Francisco near Golden Gate Park. I've been a runner for a while,
so I'll go out for a run in the park sometimes. I read a fair amount of books,
and I try to alternate between fiction and nonfiction. I'm currently reading
The Artist's Way by Julia Cameron. The book introduces the concept of morning
notes as a tool for creativity.

During quarantine, I've been taking piano lessons over Zoom, which is an
interesting setup. Internet delays don't always make it ideal, but it's
something that I did as a kid and was something that I wanted to get back to so
that I'm not staring at a screen all the time. It's been fun to play the same
songs that I played when I was 10 years old.

### Find out more

[Stork Search](https://stork-search.net/) is a full-text search tool for static
websites. It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 14 Jan
2021. This interview was conducted on 10 Mar 2021.
