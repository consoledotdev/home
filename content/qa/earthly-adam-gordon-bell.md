---
title: Q&A with Adam Gordon Bell, Earthly
who: Adam Gordon Bell
role: Software Engineer
org: Earthly
what: Containerized reproducable builds.
date: 2021-03-08T12:00:00Z
draft: false
summary: Q&A interview with Adam Gordon Bell, Software Engineer, Earthly
isSelected: qa
topImg1Src: /img/qa/earthly-adam-gordon-bell-profile.jpg
topImg2Src: /img/qa/earthly-adam-gordon-bell-logo.png
ogImg: /img/qa/earthly-adam-gordon-bell-desk.jpg
---

### What is Earthly? Why did you build it?

If you have a build process that is complicated and want to simplify it then
[Earthly](https://earthly.dev/) can help.

Building software is hard, particularly developing a quick build pipeline. It
is really important to have a good development workflow with fast feedback
cycles. This is more complex than simply turning some source code into an
output. There will be dependencies to download, unit tests and integration
tests to run. These could also involve a database with some sample data to run
tests against, an external service or third party dependency. Ideally, it is
possible to do all of this very quickly and in a repeatable fashion.

With so many different build tools, it’s important not to be tied to a specific
vendor. This is the messy problem that we're trying to solve. Earthly is a
syntax for defining how you build your software, with an open source tool for
executing it. We're trying to make it easier to build a continuous integration
pipeline.

I like to think of our solution as a modern version of a makefile. Lots of
people are familiar with makefiles, but it's old technology. What does
modernizing it look like?

First, it involves making sure each step is containerized so that each build
step runs in an isolated environment. Second, there must be no dependencies
that haven't been explicitly listed.

Third, makefiles don't run well in parallel unless you do specific things. If
we are able to isolate each step, then we can separate what depends on what,
and run those in parallel.

Earthly is also cache aware. We can tell if nothing’s changed, or even if an
input has changed but that doesn’t mean the cache needs to be invalidated. This
can speed things up dramatically because we can use a cached result from a
previous step.

Working with multiple repos is another interesting case. Oftentimes people
might have a dependency that lives somewhere else. Can we pull that in? How do
we make that easier?

Our big idea is having an easy to understand syntax so that the build doesn’t
become a magic combination of various technologies. In my experience, a lot of
builds are a mix of things: Bash scripts, docker files, Gradle. A whole grab
bag of technologies. We're trying to come up with methodology that can be used
by everybody.

{{< img-center
src="/img/qa/earthly-adam-gordon-bell-product.png"
alt="Earthly stack diagram"
width="100%"
caption="Where Earthly fits into the stack."
>}}

### Is the fact that Docker is well known why you use a similar syntax?

Exactly, we are using a Docker-like syntax so that people who’ve written Docker
files before will understand it. We would prefer that the way we specify things
be easy to understand versus absolutely perfect, so that you don't work in the
builds every day you can still see what’s going on. There may be a very concise
way to specify a concept, but if it means it is hard for you to remember when
you go back to it, then I don't think we'd want to make that trade off. We want
it to be understandable.

### What does a “day in the life” look like?

I work from my home office, and have been working remotely for nine years now.
I usually start the day by working out what I want to accomplish, creating a
small list, and blocking off some items in my calendar. For example, I might
block out two hours to work on a blog post, then we have our standup where I
meet with the rest of the team to discuss what everybody's working on.

Part of my job is to be the public face of the product, so I spend time
answering people's questions, putting together sample code for the product,
talking to people about the problems they're having and communicating that to
the rest of the team. It's my first time in a role like this and I'm enjoying
it quite a bit. I have some very minor code contributions to the core product
too, but it's not my core job. I am more often talking with somebody in Slack,
responding to issues and writing up things we're working on.

### What is the team structure around Earthly?

We’re a remote team of four. Our founder [Vlad A.
Ionescu](https://twitter.com/VladAIonescu) is based in the Bay area, I'm in
Peterborough, Ontario, Canada, Alex is in Victoria, British Columbia and Corey
is based in Utah. It's nice to be able to have a full company meeting every
day.

### How did you first get into software development?

When I was in high school, I took a class on computer programming. It was in
Turbo Pascal, which probably doesn't see much use nowadays, but the class was
super fun. We were split up into teams of two and had to build a
[Yahtzee](https://en.wikipedia.org/wiki/Yahtzee) game. After an initial half
of the semester spent explaining things to us, we had the remaining time to
build the game in DOS. If you're not familiar with Yahtzee, you roll a number
of dice and it's scored like poker hands, so part of the challenge was writing
simple rules around calculating the score based upon what you rolled in the
dice.

I loved it so much. It was hard at times, but I really liked the quick feedback
loop of making a change, running it and then seeing what happens. Maybe this is
why I’m interested in continuous integration now. From here, I went on to
university to study computer science, then got a job as a developer and I've
been doing it ever since.

At university, I explored a lot of languages with a heavy focus on Java and
some C. My first job was with C#, then I was a Scala developer for quite some
time. Now I work primarily in Go.

### What is the most interesting challenge you've faced working on Earthly?

The hardest thing that we’ve had to deal with is the fact that the world of
building software is very diverse. There's lots of different tools, languages
and combinations of these things.

A specific challenge we’re currently debating is caching. We have caching
support that works well in most cases. We're able to say, if your files didn't
change then we don't need to rerun that step, and it works great, but our
customers often request more advanced caching.

There’s a tradeoff we’re trying to work through. It is important that these
builds are repeatable, always getting the same result, but caching has the
potential to invalidate it. We're trying to find a way to specify these more
advanced rules where a particular step doesn’t need to be rerun, without
endangering the process. We want our customers to be able to override cache
invalidation, such as when something looks like it’s changed but actually the
developer knows it hasn’t really, so we can still use the cache.

With a Java VM, for example, we might have an old build in Earthly where there
are lots of dependencies that get pulled down which we can cache. If the
dependencies haven’t changed, then we won't have to re-download all these JAR
files. The challenge is when a new dependency is added, we’re invalidating the
steps by re-downloading JAR files.

I would like to keep everything that's there and rerun it with the new files on
top. We're trying to solve this problem but there is a danger that we are
accumulating dependencies over time and that's not something that we want to
happen. Ultimately, we want to have a way to make sure that people can get
these fast build times. Once we have an approach that we think will work, we
plan to release it as an experimental feature.

### How have you found interacting with the Open Source community on experimental features?

This is my first time where the business I work for is an open source product.
People have been great at reaching out, providing feedback, testing scenarios,
contributing code. It's really been terrific.

For example, I spent some time working with the Elixir [Phoenix
Framework](https://www.phoenixframework.org/) project. Phoenix is a web
framework that has had problems running integration tests. I spent a couple of
weeks putting together a build for them and working with some contributors on
their team, showing them how the tool works. They were so excited for my help
and I was getting feedback on our product. It’s a virtuous circle.

### What is the most interesting tech you are playing around with at the moment?

I'm enjoying using [Roam Research](https://roamresearch.com/), a note taking
tool. It's a very simple concept, just like listed bullets of notes in a Wiki
format, but very intuitive to use and has been great for keeping track of
things.

Thinking about software, there’s a project called
[BuildKit](https://github.com/moby/buildkit) that came out of the team behind
Docker. It’s open source and allows you to turn a Docker file into an image, so
it's sort of a compiler, but a compiler that is compiling software artifacts.
We are using it to power some of the reproducibility steps that we use. It’s a
cool piece of tech. It's not bound to anything specific to Docker, and was
built to be generic to take instructions and bring things together to figure
out how to execute things.

### Describe your computer hardware setup

I have a 16-inch MacBook Pro plugged into a [CalDigit docking
station](https://www.caldigit.com/docks/). My laptop is closed, with everything
I use docked into it. The docking station has my headphones, a [LogiTech C920
camera](https://www.logitech.com/en-gb/products/webcams/c920-pro-hd-webcam.960-001055.html)
and two external monitors and my mic plugged into it. I use an Apple Magic
Mouse with a bluetooth wireless Apple keyboard, nothing too fancy.

My two monitors are pretty big. One is in landscape and one's in portrait. The
nice long sideways view is good when you have to have a big page full of code.

I have [a podcast that I do on software development](https://corecursive.com/),
so my audio setup is a bit fancy. I use a [MixPre
6](https://www.sounddevices.com/product/mixpre-6/), which is like an audio
interface that can also record and take in various outputs. The microphone I
use is a [RE20 Electro-Voice](https://products.electrovoice.com/na/en/re20). It
avoids picking up sounds outside of a couple of feet from it, which is very
handy for home work. I also have sound panels on the wall, which are handy for
reducing external noise.

### Describe your software setup

**OS:** macOS Catalina.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** VS Code with vim keybindings.

**Source control:** Git.

### Describe your desk setup

{{< img-center
src="/img/qa/earthly-adam-gordon-bell-desk.jpg"
alt="The desk of Adam Gordon Bell, Earthly"
width="100%"
>}}

I have a custom-made standing desk. I got it from a home office place and they
made it, so the legs came separately with the adjustments on, and then you
could pick the top. I got the largest one they had, so my side of my room is
taken up with this seven foot by three foot desk. As it's quite large it
accumulates all kinds of stuff on it!

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Instrumental music.

### What non-tech activities do you like to do?

I read a lot - fiction and nonfiction. I’m currently reading ‘Ambergris’ by
Jeff VanderMeer and ‘The Soul of a New Machine’ by Tracy Kidder.

### Find out more

[Earthly](https://earthly.dev/) is a system for containerized reproducable
builds. It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 11 Mar 2021. This interview was conducted
on 8 Mar 2021.
