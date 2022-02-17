---
title: Terminal tools
who: Michelle Lim & Zach Lloyd
whoLink: https://twitter.com/warpdotdev
org: Warp
orgLink: https://www.warp.dev/
what: 
    We discuss the historical significance of physical terminals, terminal 
    emulators, pseudo-terminals and the shell. We also explore why Rust is a 
    better technology choice than Electron for building a new terminal, why GPU 
    acceleration matters, how it works with the macOS Metal APIs, and discuss 
    the challenges garbage collection brings to high performance UIs.
season: 2
episode: 10
date: 2022-03-10T08:00:00Z
duration: 28:07
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/18f6d195-23a1-4b52-b9b5-42693c26967e/audio/eceae148-5838-405f-91ea-c613069fc4ac/default_tc.mp3
draft: false
summary:
 Terminal tools - a devtools discussion with Michelle Lim & Zach Lloyd (Warp). 
 Episode 10 (Season 2) of the Console DevTools Podcast.
metaDescription:
 Terminal tools - a devtools discussion with Michelle Lim & Zach Lloyd (Warp). 
 Episode 10 (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
 largeText: true
topImg1Src: /img/podcast/warp-michelle-lim-profile.jpeg
topImg2Src: /img/favicons/www.warp.dev.png
ogImg: /img/podcast/warp-michelle-lim-profile.jpeg
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
 is co-founder of Console. From 2009-2018, David was CEO at Server Density, a
 SaaS server monitoring startup used by hundreds of customers to collect
 billions of time series metrics from millions of servers. He is also a
 researcher in sustainable computing at Uptime Institute and affiliated with
 Imperial College London. David has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode we speak to Michelle Lim and Zach Lloyd, both of
[Warp](https://www.warp.dev/), a terminal designed to make developer workflows
more productive. We discuss the historical significance of physical terminals,
terminal emulators, pseudo-terminals and the shell. We also explore why Rust is
a better technology choice than Electron for building a new terminal, why GPU
acceleration matters, how it works with the macOS Metal APIs, and discuss the
challenges garbage collection brings to high performance UIs.

**Things mentioned:**

* [iTerm](http://iterm.sourceforge.net/)
* [VT100](https://en.wikipedia.org/wiki/VT100)
* [tmux](https://en.wikipedia.org/wiki/Tmux)
* [Fish](https://fishshell.com/)
* [SSH](https://en.wikipedia.org/wiki/Secure_Shell)
* [bash](https://git.savannah.gnu.org/cgit/bash.git)
* [GitHub Actions](https://github.com/features/actions)
* [Rust](https://www.rust-lang.org/)
* [Electron](https://www.electronjs.org/)
* [Garbage
  collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))
* [OpenAl](https://openai.com/)
* [Metal](https://developer.apple.com/metal/)
* [Xcode](https://developer.apple.com/xcode/)
* [OpenAi Codex](https://openai.com/blog/openai-codex/)
* [Retool](https://retool.com/)
* [Keyron](https://www.keychron.com/)
* [CLion](https://www.jetbrains.com/clion/)
* [Logitech Ergo
  K8060](https://www.logitech.com/en-us/products/keyboards/k860-split-ergonomic.920-009166.html)

{{< rich-title-5 icon="future-head" >}}About Michelle Lim & Zach Lloyd{{</ rich-title-5 >}}

Zach Lloyd is the founder and CEO of Warp, a Rust-based terminal for developers.
Michelle is a software engineer who joined early on. Prior to Warp Zach
co-founded SelfMade, was CTO at Time Inc., and ran the Google Sheets team at
Google. Michelle graduated from Yale and previously worked at Robinhood, Slack,
and Facebook.

### Highlights

{{< podcast-episode/clipping time="01:20" >}}

**David:** ...

**Brooklyn:** ...

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console Podcast. I'm David Mytton, co-founder of
console.dev; a free weekly newsletter highlighting the best and most interesting
tools for developers. In this episode, I speak with Michelle Limand Zach Lloyd
, both of Warp; a terminal designed to make developer workflows more productive.
We discuss the historical significance of physical terminals, terminal
emulators, pseudo-terminals and the shell. Why rust is a better technology
choice than Electron for building a new terminal. Why GPU acceleration matters,
how it works with the MacOS metal APIs, and challenges garbage collection brings
to high performance UIs. We're keeping this to 30 minutes. So let's get started.
I'm here with Michelle Lim and Zach Lloyd. Michelle, Zach, thanks for joining
the Console Podcast.

**Michelle:** Thank you for having us.

**Zach:** Thank you for having us.

**David:** Let's start with a brief background. Tell us a little about what
you're currently doing and how you got here.

**Zach:** I'm Zach, I'm the founder and CEO of Warp. We are building a new
terminal that is trying to modernize the product that is very, very widely used,
but hasn't changed much in the last 40 years. The goal of it is to build a
terminal that is more powerful than anything that's existed before, but also
more accessible to all developers. And very briefly, my background, the way I
got here is I was a engineer for quite a long time at Google. I used to run
engineering on Google Sheets, and then I was a Principal Engineer on Google
Docs. And I've been a terminal user for the last 20 years and always wondered
why it worked the way that it does and was excited to start a company around
trying to build a product that I'd always wanted it to be.

**Michelle:**And my name is Michelle. I am an engineer on the Warp team and I
had joined over a year ago when it was just Zach, the founder and designer CQ. I
joined because when I was starting to learn coding, the terminal was one of the
biggest blockers. And then as I started getting better at the terminal and
started using Docker and Kubernetes, I realized that there were a lot of
productivity blockers still. And so I wanted to co-build this experience that
could make all developers from all backgrounds more productive. Before that, I
graduated Gale and had interned at Facebook, Robinhood and Slack.

**David:** Let's start with the origin of the terminal, which is properly called
a Terminal Emulator. What does that mean?

**Zach:**: I'm not a terminal historian, but the basic terminal was an actual
hardware device. So if you look back maybe late sixties, early seventies,
terminal was sort of the main interface to your actual computer. And what it was
really was a device that allowed you to input characters. So you have a keyboard
and input characters. And then on the other end, there would be something that
would interpret those characters. And then it would send characters back to the
terminal. And this all happened over a sort of serial line input.

And then what the terminal would do was interpret what came back and basically
render the characters on a screen. And there was a, and actually still is a
encoding that the terminal uses to know how to render those characters, which is
a bunch of sort of escape sequences. And so for instance, if you want to tell
the terminal to draw something in color, you basically the thing that's sending
characters back would send back a bunch of characters that sort of surround the
text that's being rendered. And then the terminal interprets that and draws it
on the screen.

And so that all was physical hardware. And that's where terminals came from.
When you run a terminal today on your modern Mac, you're actually running a
terminal emulator like you said, and that's a piece of software that is copying
the behavior of that hardware. And so the terminal emulator, when you run
terminal.app or Warp or iTerm, it's an actual sort of native GUI app that runs
on your Mac. It's pretending to be this piece of hardware. And it's pretending
to do that at a pretty deep level.

The sort of Mac based and Linux based OSs actually have something that looks
like a device, which is called a pseudo-terminal, which your terminal app takes
your keystrokes, sends them into that device. On the other end of that, you have
a shell like Bash or csh that reads them out, writes characters back. And then
the Mac app, iTerm terminal has the same parsing logic as one of these old
hardware devices. The canonical one was a VT100, which was something that was
made by the digital equipment corporation, and your terminal interprets those
character codes and basically paints characters on the screen.

**David:** Why do you think that terminals stuck around for so long? What is it
that makes it so powerful?

**Michelle:** Yeah. The terminal is a platform for running text based apps, and
compared to GUIs, text based apps are much faster to build because there's no
UI. You can configure and build an infinite number of options. It is composable,
in that you can pipe output from one program into the input of another, and it's
easily scriptable. And the terminal is keyboard driven, which is much more
ergonomic for some developers. Historically though, even though the terminal is
powerful, it is still very hard to get it. It is not discoverable. You have to
memorize a lot of keyboard shortcuts and commands and Flex, but once you do
master it, you can be very efficient. And that's probably why it's still stuck
around.

**David:** You mentioned the idea of it being a platform. What does that mean
to you? Why do you think that application should be built on top of the
terminal?

**Zach:** The things that Michelle said touch on a lot of it. Text based apps
have a lot of these inherent advantages of being composable and scriptable and
easiest apps to write. And so, one way you can think about the terminal is it's
a platform for running these apps. So in a similar way to iOS is a platform for
running mobile apps or Linux is a platform, people are constantly writing these
text based apps. They're distributing them. There are users on the other end who
install them and who run them and who configure them. And so if you think of a
terminal in a broad sense like that, it's a platform. It also is interesting as
a platform in that, in the same way that you can kind of configure your phone or
your desktop computer to work in a certain way, or even the web; you can install
Chrome extensions. The terminal itself is very, very configurable.

And so there's a big ecosystem of projects out there that make the terminal
better in one way or another. So for example, you can install a bunch of things
that make it easier to complete commands. You can install things that make your
terminal themeable, or that make session management and the terminal better like
Tmax. You can install things to let you search through your history better like
FCF. And so it's this kind of ecosystem where developers are contributing and
trying to make sort of the running and installation and management of all these
text based apps as seamless and powerful as possible.

**David:** How do you think about these as different layers? The shell, the
terminal, where does that come in? How can you interact with those different
layers?

The basic thing is the terminal is the thing that's emulating the device that I
talked about at the beginning. And so it's responsible for characters in, and
then it takes characters out and renders them on the screen. The shell is your
kind of command interpreter. It's the thing that makes sense of those characters
and it interfaces with the system and lets you sort of launch apps and route
those apps outputs back to the terminal. And so the cool thing about the
terminal shell interface is that it's all text based. And what that sort of
allows is, when you run a terminal locally, you might Bash or csh, but it sets
up very well to doing remote access to machines. So when you run something like
SSH, the exact same protocol that works with running a shell locally, works with
running a shell when you're on some machine in some cloud at some place.

And so I think it's a powerful system, but it also has made the terminal
relatively hard to innovate on, because those two pieces of it; the terminal and
the shell sort of need to move in lockstep, meaning there's a, it's not a super
standardized interface, but a well-defined interface between the two of them.
And so if you're building a terminal, you want to build it to respect the output
of all the common shells. And then you also have to be aware that the shell that
it's interacting with might not even be on the same machine that you're running
the terminal on. So you can't really build... it's very hard to build a fully
integrated thing that will actually work for developers current workflows.

**David:** What do you think about the limitations of all of that history? So
having to have the antsy escape codes you mentioned, and the pseudo-terminal and
the shell, and all these different layers; do you think that's had an impact on
the ability to innovate over the years?

I do. I mean, so for Warp for instance, we're building a new terminal. We're
trying to build it in a way that's backwards compatible, because if it's not
there's a tremendous amount of: A; existing script that's been written in Bash
and csh, which I think it'd be very difficult to break for developers. B; muscle
memory. So there's just habits that people have in terms of using terminals and
existing ecosystem and plugins. So I think the trick if you want to innovate in
this area, is to find a way where you can be mostly backwards compatible, but
also push the world forward. That's sort of a delicate balance to strike. I
think if you try to go to straight to the ideal solution and rewrite everything
at once, you're going to really have a hard time getting adoption. I don't know,
Michelle, do you have any other thoughts on that?

**Michelle:** Yeah. So the current architecture is such that the terminal has no
concept of what program is running, or anything that's really going on in the
shell, all the terminal does, is it reads and writes bytes, and it displays
characters according to those escape sequences. It is really hard to innovate on
the terminal in that, the way that developers think about the terminal is in
terms of groups of commands and their corresponding outputs. But the way that
the architecture is set up is that the entire terminal is a grid of characters,
a buffer of text. So at Warp what we did was, we hooked onto the shell's
\[inaudible 00:10:45\] and pre-command hooks and send those bytes over to the
terminal in the way that communicates when a previous output ends. And that's
how we try and group the commands and outputs together. So it's easier for the
user to navigate, but still the hard part is that we still have to have every
grid implement of VT100 spec.

**David:** So you're trying to innovate with features like the \[inaudible
00:11:11\] to understand where the processes are running and their current state
whilst maintaining compatibility with a spec that is several decades old.

**Zach:** That's exactly right. Michelle described it. It's the way that we try
and innovate is by working within the framework of the existing shells and by
configuring them to do a little bit more than they have traditionally done. And
then on the Terminal side we try to push the UI forward, but in a way that
doesn't break backwards compatible, it's tricky.

**David:** How have you approached the testing of that to make sure that you are
not breaking backwards compatibility? Is a lot of manual work or have you
managed to automate it in some way?

**Zach:** It's both. I think on the automation side, we have done something
interesting where we've built our own integration test framework. So you can
run, for Warp, you can essentially run a headless version of it that will run
against different shell configurations. So meaning, we can launch Warp through
GitHub actions on a MacCloud that will run against Bash at a particular version,
csh for a particular version and try to test things like that. But we are far
from having sort of complete coverage with that. And so we end up having to do
decent amount of manual stuff as well. But the ideal world in my mind would be
able to get as much integration test coverage with these other, basically by
running it against all these different sort of shell combinations as possible.
Kind of what people used to do with browser tests, where you would run it
against IE, and you would run it against Chrome and you'd run it against
Firefox.

**Michelle:** Yeah, another complexity is that we build our own text editor as
the input area for the terminal. And what that means is that we have to
reimplement all the keyboard shortcuts and bindings that developers are used to.
So I remember the start of the year, I had to go through the entire list of
index findings and link Control-A; okay, move cursor to the start of line,
Control-E; move cursor to the end of the line. And that was pretty, pretty
manual. And over time we've gotten a lot of feedback that we were missing one or
two more shortcuts. And this morning I just pushed another shortcut that we
missed. There is a lot of manual work as well.

**David:** The editor component for what sounds like is an interesting
challenge. Can you walk us through the architecture of that and how you've
approached designing what people might think is just a ubiquitous component that
should be in any application, but you've implemented it in quite an interesting
way.

**Zach:** The broader context here is, usually command editing is done at the
shell layer, not the terminal layer. And so we've pulled it up to the terminal
layer. And the advantage of doing that is that you can make an editing
experience that matches what I think people expect from an editor these days. So
it works much more like editor that you'd see in VS code than a command line
editor. And so really what that means we have to do is, we have to buffer the
input that goes into the shell. Whereas in a typical shell, every character goes
into the shell and gets echoed back. In Warp, we sort of gather all the input
and then send it into the shell. I guess the why that we did that was to get
intuitive, something that matches what people are used to. And then also it
gives us the ability to build really cool features and have sort of complete
control.

So for instance, it lets us do multiple cursor editing like what you get in vs
code, or we could build syntax highlighting. We haven't quite done it yet, but
we could build code formatting, we could build code folding. So any sort of
input interaction that requires a little bit of a richer GUI, we now have the
ability to do, whereas if you're limited to the character grid and the editor in
the shell, it's just you're not going to be able to do that. That's a why.

And then the sort of the how, the broader context is that we have our own UI
framework that we've developed in Rust. And there isn't really an off the shelf
editor component that we could sort of easily plug into that, because we're
basically doing everything from defining what the elements are like, to
constructing a scene, to actually running shader code that draws pixels on the
screen using Metal. And so once that's the world you're living in, we went down
the road of building the editor ourselves. I should say we did this in
conjunction with Nathan Sobo, who has a different developer company, which is
using similar code, but it's something that we want to open source and is
totally kind of a homegrown UI system.

**David:** So the code base is in Rust, but you originally started using
Electron, Webtech. Can you take us through the decisions behind that and why you
decided to switch?

**Michelle:** Yeah, so we started first with Electron because our team has a
background in Webtech and we thought that the iteration speed will be very fast.
But as we started experimenting, we realized that binary size was too large and
the performance was pretty slow. So I did a test where I started drawing 200
buttons on an HTML overlay and started scrolling our terminal and the scrolling
was extremely slowed down. So we found ourselves slowed down by testing
performance at every commit. And so even though code compilations faster,
iterations faster, in the end our entire development speed was pretty slow. And
so we started looking into native solutions. So we didn't want something that
had garbage collection. So that meant we had to choose between C, C++ plus and
Rust. And Rust just had strongest developer ergonomics. There are a lot of
guarantees of memory safety, threat safety, and it's just as low level as C++.
And so we could easily call into the C based APIs of the operating system.

**David:** Why did you want to avoid garbage collection?

**Zach:** My experience with UIs and garbage collected languages is that you,
it's sort of unpredictable and you have a lack of control over when the garbage
collector is going to do its thing. If you want sort of consistently smooth
performance, and I think it's interesting we think about performance in terms of
frame rate, which is probably not what terminal developers typically think of
it. But we want perfectly smooth scrolling, perfectly reactive event handling.

If you're going to have a garbage collector that is deciding to sort of clean up
objects in the middle of that, I feel that gives you unpredictable performance.
We certainly saw that a bunch on Google Sheets when we were working with large
data in the browser, that performance problems would be caused by us not having
control of memory allocation and de-allocation. And so I think Rust as a super
elegant solution to that, where it's safer than C++ the way that Rust lifetimes
work, and you have a sort of guaranteed smoothness around it, and then you also
have sort of complete control. So that's why we decided to go that direction.

**David:** And you've also implemented GPU acceleration. Why does a terminal,
which is most the text need GPU acceleration?

**Michelle:** The terminal has to render oftentimes full screens of text output
on very large screens. And there are many programs that will output this text
very quickly, which means that you have to repaint all this text in the
subsecond speed. And so it is pretty much extended across all terminals to have
GPU acceleration. We think that rendering the GPU gives us more clock CPU cycles
for our product features. And plus because our graphics primitives are pretty
limited, writing the shader code will really easy and fast. It is currently only
lesser than 300 lines of code and we've barely had to touch it since January.

**David:** That's implemented currently using MacOS's Metal API. Why did you
choose that over OpenGL?

**Zach:** We looked at OpenGL. We decided to go with Metal. I would say prime
primarily because it's the more officially supported tool or API I should say on
Mac practicing the GPU. The biggest win for us with Metal has been around the
debugging tools that you get through Xcode. So there's all sorts of instruments
to let you sort of examine textures and understand your frame rate in a way that
the tooling is not quite as good for OpenGL. The downside is if we had done
OpenGL, we could probably do a one to one port to another platform. But like
Michelle said, it's actually pretty wild. It's only 300 lines of shader code are
needed to do all of the primitives in the Terminal, which if you think about
them, it's really we render rectangles and rounded rectangles. We render icons
and images, and we render glyphs. It doesn't take a ton of shader code. So we
decided to go with a thing that has the best developer experience for the first
platform we were launching on.

**David:** You mentioned that you shifted out of Electron as a desktop
implementation of webtech. Did you give any thought to browser based webtech,
especially with the popularity of compiling, something like Rust into web
assembly these days?

**Zach:** The Answer is yes. The other major reason that we chose Rust besides
just performance, and the community, and the niceness of the Rust development
experience, is that Russ is pretty good for cross platform. And the second
platform will support will either be Linux or the Web. We're trying to figure
that out. But the plan fully with Rust is to compile our Rust code base to web
assembly, and then to port our Metal shaders to WebGL and do the rendering that
way. I actually think there's interesting Terminal use cases for a browser, the
most interesting ones are if you're working against a session that is hosted in
the cloud some place, you really maybe don't need a desktop app for it. And if
you want to work in a way that's more collaborative, I think it's really cool to
have the option to sort of collaborate by sharing links and not make people
install native software. We're very interested in using our Rust code base to do
a browser based rendering, not so much an Electron based rendering. Because for
that, we'll just be full native, but for the browser, yes.

**David:** And people tend to think about the terminal and the command line as
something that's on Linux or MacOS, but Windows has always had a terminal as
well, that they tend to call it the console. Do you think there's a difference
in philosophy behind how Windows users think about interacting with the
terminal, the console and Unix, or how have you approached thinking of that
starting on Mac first?

**Zach:** It's probably not going to be the best answer, because I am a lifelong
Mac user and I'm not at all an expert on Windows Console or Windows Terminal.
The reason we started Mac is I would say it's primarily because I've used it a
lot. The people on our team have used it the most. And then we all come from
companies that are heavily reliant on Linux. And so the Mac/Unix/Linux all have
very similar command line environments. I think that those are the most
important ones to support in the sense that most of the internet is running some
version of Linux at this point.

I heard a stat, even Microsoft's cloud is primarily moving towards Linux, and
Microsoft launched the subsystem for Linux. And so the Linux command line is
actually sort of becoming more ubiquitous compared to the Windows one. We do get
a lot of requests around supporting Windows, which is interesting, because I
think the default Windows terminal experience isn't that great. I actually don't
feel comfortable sort of speaking too much to sort of the technical or even
really the user facing differences in it, because I'm so not from that world.

**David:** And what does a multiplayer terminal look like in the future?

**Michelle:** Yeah, I think multiplayer has two components to it. Most people
think about the realtime synchronous component. So imagine being able to jump
onto a terminal together with your team for firefighting when there's an outage.
But at Warp we also think about the asynchronous multiplayer experience. So
being able to share environment variables within your team, or if you have a
bunch of very useful commands that your team could use, you could easily share
that or share workflow in something a very nice actionable read me file, or if
you've configured your terminal in a beautiful way, you can share your themes
and you can share the settings of how you set up your themes and your
environments.

**David:** Where does open source come into that? Because almost every terminal
application that you can download today is open source, but you are not quite
there yet. How are you thinking about open sourcing your code base and using
that as a way to reach developers?

**Michelle:** Yeah, we're definitely thinking of open sourcing it. We want to
open source our UI framework, and we want to open source our terminal client
code. So right now we are not ready yet, because our UI framework is still not
cross platform. But we've already to open source ways for you to tweak Warp. So
we've already open sourced our themes, so any developer now can contribute
themes to Warp and we are probably going to open source on completion specs
next.

**David:** Before we wrap up, I have two lightning questions for you. So
Michelle, do you want to take the first one? Are there any interesting dev tools
that you are playing around with at the moment?

**Michelle:** Our teammate Kevin has been playing with Open AI's codex, and he
managed to create a prototype where you could type in our terminal, "Discard
Previous Commit," and then it would return, "Get Reset Hard Hit." And there also
a couple of other examples that he came up with, and that's really exciting to
me because imagine not having to go to Stack Overflow through Google pretty
standard common commands.

**David:** And Zach, what about you? Interesting tools?

**Zach:** We are using retool as a kind of a cool way of building some internal
applications that let us do things like wait list and invite code management.
I've been impressed with how easy it is to... without really writing any code,
build something that's pretty useful for us.

**David:** And then the second question you can go first on this one Zach, what
is your current tech setup? What hardware and softwares are your daily driver?

**Zach:** I'm on an iMac M1. And then the other notable thing that I have is I
bought this mechanical keyboard that's a keychron that is extraordinarily loud
and drives my fiance crazy. It makes it sound like we're in a 1950s office and
I'm using a typewriter to enter things into the terminal.

**David:** And Michelle, how about you?

**Michelle:** I'm using CLion and Warp as my daily driver, and my keyboard is
the K860 Ergo from Logitech. It's curved, but not separate. And I have one in
the office as well. And my coworkers there roast me every day because it's
unusable to them.

**David:** Excellent. Well that's all we've got time for today. Where can people
find you online, Michelle?

**Michelle:** Warp.dev.

**David:** And Zach?

**Zach:** Zach I'll say Warp.dev. And then we're also on twitter, @warpdotdev
also spelled out. So W A R P D O T D E V. We have a discord where people are
interested in what we're doing. They should go to our website and click on the
community and join us.

**David:** Excellent. Well, thanks both for joining The Console Podcast.

**Zach:** Thank you so much for having us.

**Michelle:** Thank you, David.

**David:** Thanks for listening to the Console Dev Tools Podcast. Please let us
know what you think on Twitter. I'm @davidmytton and you can follow
@console.dev. Don't forget to subscribe and rate us in your podcast player. And
if you are playing around with or building any interesting dev tools, please get
in touch. Our emails in the show notes. See you next time.

{{</ box-collapsible >}}
