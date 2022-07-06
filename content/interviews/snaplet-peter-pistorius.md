---
title: Interview with Peter Pistorius, CEO, Snaplet
who: Peter Pistorius
role: CEO
org: Snaplet
what: Safe database snapshots.
tags: ["Databases"]
date: 2022-05-02T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Peter Pistorius, CEO, Snaplet.
isPage: interviews
topImg1Src: /img/interviews/snaplet-peter-pistorius-profile.png
topImg2Src: /img/favicons/www.snaplet.dev.png
ogImg: /img/interviews/snaplet-peter-pistorius-desk.png
---

### What is Snaplet? Why did you build it?

[Snaplet](https://www.snaplet.dev/) gives developers safe access to data in a
production database. We give them the tools to snapshot their database in their
own infrastructure, transform the data, and to remove private information in
their development workflow. 

A few years ago, I was working for a startup called
[Chatterbug](http://chatterbug), iIit was started by the co-founders of GitHub,
where you could schedule live language lessons, and there was a bug in
production. It was a scheduling bug, which had to do with date and time and time
zones, which are notoriously difficult to reason about, and I just couldn't
figure it out.

I needed access to accurate data. I was one of the early engineers, and it was a
startup, so I was able to connect directly to the database. Generally, you don't
want to do that because you could potentially delete everything, and cause a
major outage. But I did, and I could see the data, but what I really wanted to
do was see how the data was flowing through the code on my development machine,
so I could introspect and understand it by logging things out, adding debugger
statements, and stuff like that.

We were a globally distributed team, so I had to wait for a devops person to
wake up, then I interrupted the start of their day to kick off a snapshot of the
database. It was a 50 GB dump, so they had to upload it to S3, and then I had to
get keys to grab it down. It was just a terrible experience. As a senior
engineer, well into my career, I was struggling to do my job, because I just
didn't have access to the data that would help me figure things out. Things were
on fire, and I couldn't do anything about it!

Us developers have to pretend that we know what's going on, like we're coding
blind, and I kept thinking that if there were someone else on my team, a junior
or even a mid-level engineer, what would they do in that scenario? They would be
completely stuck. None of what I was doing that day felt like it was my job,
which was really to write code, to understand the business, and to help them
succeed.

I want Snaplet to reduce anxiety for developers, and help keep them in flow by
giving them access to production accurate data. I’ve heard dev-tools companies
say, "we’re building tools that focus on developer experience." But, what does
that mean? What is the daily experience for a developer? In my career, it's been
this ability to get into flow. To be frustrated by trying to solve a problem for
several hours, and then the euphoria of finally figuring it out.

For me, the developer experience is a Zen mode, a flow, and I don't want flow to be interrupted because you don't have access to something that would help keep you in code. Snaplet is there to help a developer maintain their state of Zen, their flow, to improve the developer experience, the day to day life of a developer. 

### What does a "day in the life" look like for you?

I'm no longer a developer. I still code, but I'm a founder, so my number one
responsibility is to make sure that the people who do write code on my team are
empowered to do their job, so that they know what they need to be doing. If
they're stuck, I can help them. I spend a lot of time in Discord, looking at
chat ops to see if everything's running well, and making sure that members of
the team understand what they need to build. Basically, getting everyone on the
same page. It's so varied. I don't get to flow anymore at all. 

### What is the team structure around Snaplet?

We'll be a team of nine by May. We're a flat structure. Five of those are
developers. All of different backgrounds and experiences. I would say we're all
generalists. We have Rubyists, people that have been doing Kotlin and mobile
development for several years, and TypeScript developers. Some of us are self
taught and some of us have CS backgrounds.

I wanted the team to reflect the industry, so I picked generalists from any kind
of background, just so long as they were really into solving problems. That's
what we're doing at Snaplet, we're solving problems for developers, and I want
to steal ideas from different development groups and share them with everyone.

### How did you first get into software development?

I lied my way into software development. I had a misguided youth, in that I
thought I could impress my friends by building websites. They didn't care about
websites, because it was the early 2000s, and it just wasn't interesting to the
general public.

Soon enough I was hooked on that endorphin rush of figuring things out, figuring
out how to use a computer to make it do what I want. 

I kept trying to build elaborate things, and eventually someone asked me if I
could code, and even though I was 16 year old, still in high school with no
formal training, I just trusted that I could figure things out. They offered me
a part-time job whilst I was completing high school. Since then, I've used this,
"I don't know how, but I'll keep trying to figure it out" mentality to achieve
things. There's no growth without pain.

I started out with PHP, I think that was the soup of the day, and very
accessible. It was very easy to get code running on a server, just FTP something
into a machine, reference that piece of code on a URL, and it just worked!

I did PHP for a long time. I actually became a Zend Certified Engineer, which
was a waste of time, but it felt like I was validated through certification!
Next, I learned Python and Django and I enjoyed that framework. When mobile
“feature phones” started coming out and I actually did some J2ME, which really
sucked, because the platform was so fragmented and impossible to reason about.
When the iPhone came out I did iOS development for a number of years,
Objective-C for maybe eight or so years, until Swift came out, and I decided
that I didn’t want to write apps in a closed ecosystem anymore" and quickly
jumped onto React and JavaScript, where I ended up building a framework called
RedwoodJS with Tom Preston-Werner.

### What is the tech stack for Snaplet?

Snaplet is TypeScript and it is built in [RedwoodJS](https://redwoodjs.com/),
although it's mutated so much that you wouldn't be able to recognize much of
RedwoodJS inside of it anymore. Everything is TypeScript, with Postgres as the
database, and Prisma as the ORM. 

To communicate from server to client, we use something called
[tRPC](https://trpc.io/), which is a typed RPC client. It has nice ergonomics
when you're trying to figure things out. We use [Jest](https://jestjs.io/) and a
tool called [Wallaby](https://wallabyjs.com/), where you can visually see your
tests in your editor, which is amazing.

### What has been the most interesting development challenge you’ve faced building Snaplet?

Right now, one of the most interesting challenges that we're facing is we're
building this product called Snaplet Proxy. It sits in between your database
client and your database, and it introspects all the traffic that goes through
this proxy. We pull apart the wire protocol and see what you're doing. We
introspect your database and we merge the intentions of the SQL statements and
the structure of your database to determine how we should modify your database
in real-time.

We have some ambitious ideas for this. It's currently read-only, but we have
ambitious ideas where we will compute the writes that you're doing against the
database. We'll mutate them in memory, and we'll keep them in memory, and then
we'll merge this along with responses. You could have a read-only connection to
your database and we would pretend that you're writing to it, so you can run
“real” tests. 

We can also support creating fake values, so you don't see any real production
values. You could imagine in staging, or in an end-to-end test, that you're
obviously not mutating the structure, but you're mutating the data in a pretend
way, and it will give you realistic enough results that you could be happy with
your end-to-end tests or even when you're coding.

I've never done very low-level network programming. It's interesting to get into
that mind space, but once you get there, it's still not technically very
difficult, it's just different.

### Are there any interesting tools or projects that you've been playing around with?

I'm really enjoying the [Firecracker
VM](https://firecracker-microvm.github.io/). It's interesting to me that you can
suspend a machine, keep the state in the disk, and then resume it in an instant.
It feels like a superpower that everyone should have access to. You can run
thousands of VMs on a single machine. It seems like such a wonderful, powerful
tool and they're isolated and completely protected.

Snaplet wants to provide developers with databases. Maybe there's an opportunity
for us to provide VM databases that start up in an instant and shut down in an
instant that you can have to run tests against, or run staging against, or even
code against, without having to incur the cost of having a machine on all the
time in the cloud somewhere.

### Tell me about your hardware setup

Nothing fancy, just a [MacBook Pro](https://www.apple.com/macbook-pro/). The 14
inch is fantastic. It's just got 16GB of memory. I use it with a Dell 27 inch 4K
monitor, an Apple keyboard with a fingerprint reader, which is amazing, and a
[Logitech](https://www.logitech.com/) gaming mouse from several, several years
ago. 

### Describe your computer software setup

**OS:** macOS.

**Browser:** Firefox.

**Email:** Gmail.

**Chat:** Discord + [Loom](https://www.loom.com/).

**IDE:** VSCode.

**Source control:** GitHub and Git.

### What about your desk setup? 

I've got a standing desk and a [Steelcase Series 2
chair](https://www.steelcase.com/products/office-chairs/steelcase-series-2/).
Before this, I had my grandfather's chair from a restaurant he had in the 80s.
It's an amazing chair and it's one of my favorite things.

{{< img-center src="/img/interviews/snaplet-peter-pistorius-desk.png" alt="The desk of Peter Pistorius, Snaplet" width="100%" >}}

### When coding

**Daytime or nighttime?** Early morning or really late at night.

**Tea or coffee?** Both. I start the morning with a cup of tea, black tea with
milk, and during the day just coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I cycle a lot. A couple of years ago, I entered a race called the [Desert
Dash](https://desertdashnamibia.com/), which is a 400 kilometer race over the
desert. I trained in Germany, which was great, because Germany is one of the
flattest places. I got to the desert and it was the most hilly place I've ever
been to. It's all dunes, so you're riding on a hilly dirt road for cars. I
didn't finish the race, but it was excellent. I really enjoy cycling and I enjoy
nature.

### Find out more

[Snaplet](https://www.snaplet.dev/) is a tool to help developers safely create
database snapshots. It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 7 Jul 2022. This interview was conducted on
2 May 2022.
