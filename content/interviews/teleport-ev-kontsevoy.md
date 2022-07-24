---
title: Interview with Ev Kontsevoy, Teleport
who: Ev Kontsevoy
role: CEO
org: Teleport
what: Open source access control plane.
tags: ["Security"]
date: 2021-11-29T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Ev Kontsevoy, CEO, Teleport.
isPage: interviews
topImg1Src: /img/interviews/teleport-ev-kontsevoy-profile.jpg
topImg2Src: /img/favicons/goteleport.com.svg
ogImg: /img/interviews/teleport-ev-kontsevoy-desk.jpg
---

### What is Teleport? Why did you build it?

[Teleport](https://goteleport.com/) is an open source project that's built for
engineers. It is the easiest, most secure, way to access all computing
infrastructure.

Today, developers run applications and deploy them to the cloud, and into
staging and production environments on Amazon, Google, Azure and many other
places. If you look into these environments, they're composed of layers and
layers of technology. This is why we call them tech stacks. You have some kind
of API to orchestrate virtual servers, they then have containers, and then you
have things like Kubernetes to orchestrate containers. You also have things like
Docker registries, databases, Grafana dashboards, Jenkins, and so on.

Every layer listens on a network socket, every layer needs encryption, every
layer has its own user management login, its own authorization mechanism, and
its own audit system.

If you want to do cloud computing today you have to configure all of these
layers. You have to have the expertise. That is incredibly painful and extremely
prone to user errors. That's the problem Teleport solves. We give you one place
where you can configure access to everything you have. That's why we built it -
because setting up access is dangerous, scary, annoying, and time-consuming.

Teleport is an open source project. We started to scratch our own itch, and then
eventually it became popular and became a commercial product. Developers would
be used to just SSHing, which is relatively straightforward if it's just a key.
However, if you go all the way to the other extreme - to a big enterprise
deployment with lots of different security requirements like single sign-on, the
idea is to solve that gap all the way to just a single server.

That said, I would argue that even with accessing a single server, most people
are not doing it properly. For example, when you say there is just the key, you
need to question where do you keep the key? How do you make sure your key is
secure? How do you deal with key distribution? If you have five servers, and you
have multiple people who need to access these servers, then what if you need to
prove that certain things happen or did not happen in the past?

We've seen companies doing all sorts of crazy things. They would have a private
Git repository that they would use to store keys that they try to encrypt, and
then the credentials for that repository would be stored in something like
1Password. Those are the kinds of contraptions that most engineers are building
to solve the access problem, and that is just SSH!

What if I need a different type of access? If I have interns and software
engineers, what is the difference between those two? I would argue this is not
just for big enterprises, even if you're a tiny company of five people and you
bring in a contractor, how do you manage the key for that contractor?

This is the problem that Teleport solves. We're basically saying: "No, SSH keys
are not secure." Keys of any kind, passwords, keys - so-called static
credentials - are not secure. Teleport enforces only certificate-based
authentication because a certificate is something that's issued to you in
real-time just to go get that access. Once you're done then it's revoked.

We made all this extremely convenient. It's actually just as convenient as using
a simple SSH key. You can apply rules to your entire fleet - Windows machines,
PostgreSQL databases, MySQL, etc. Access is granted across everything as needed,
and revoked in real-time at the end.

### What would a developer see working with Teleport?

They would probably not interact with Teleport directly. They would be using the
same commands as they normally do, such as, SSH, `kubectl`, `psql` - all the
clients that they would normally run to access infrastructure. It is likely to
be the first thing they run in the morning, it will trigger a login sequence
where Teleport will pop up the web browser on your machine and then you
authenticate through a single sign-on with an SSO provider.

We support all forms of single sign-on (SSO). You can authenticate via GitHub,
via Active Directory, whatever your company uses. Teleport will automatically
configure your machine with certificates for all the protocols that you need.
From that point, all of these command-line tools will continue to work as they
normally do, so you don't really feel any difference.

Your permissions will be enforced across all protocols and environments. The
cool thing is we will connect you to everything. If you're trying to connect to
a Kubernetes cluster that's behind a firewall somewhere, or if you're trying to
access some kind of drone that's flying in the sky, like an IoT device, Teleport
will create an inverse encrypted tunnel so you'll connect to it. It removes the
need for things like VPNs as well.

One interesting way to describe Teleport is it's an interesting cocktail of
developer productivity and convenience. It does feel that all of your
infrastructure is in the same room as you. That's why it's called Teleport. At
the same time, you get industry best practices for security and compliance.
Things like PCI, SOC 2, FedRAMP. They're almost free with Teleport.

### What does a "day in the life" look like for you?

My morning starts with a good cup of coffee and a bunch of emails - that's
probably the first couple of hours in the day, then I try to schedule most of my
Zoom calls also in the first half of the day.

Usually I try to skip lunch because we're sitting all day, we don't really need
that many calories. I try to make the second half of my day a little bit
quieter, so I can do some reading and writing.

The one thing I've had to endure switching from an engineering role to a more
business-facing role is to switch from writing in Golang, or Python, or C++ to
English. You have to write a lot as CEO. You're writing memos, you're updating
the company wiki, you're interacting with investors, you also try to blog.
Writing is the predominant way to communicate in a remote-first company. There
are just so many different things I could write about. That's a big part of what
I do.

### Are you still getting time to code regularly?

Not regularly, but I do code, and when this happens it usually happens in large
bursts. I don't have commit rights to Teleport core anymore. We're a security
company, so every person who has access to Teleport code has to do pull requests
and code reviews. I'm excluded from that process now.

The type of coding I'm doing is usually for personal projects. If there is a
project, it's a lot of fun to just dive in. Especially over a long weekend to
build a tool for myself.

## What does the team look like?

It's a fairly typical corporate structure. We have product and engineering, who
roll up to the CTO who reports to me. The CMO also reports to me. Then we have
sales and operations. Those are the teams that I interact most with.

We run regular one on ones and even randomized one on ones. We use this little
cool app called [Donut](https://www.donut.com/) for Slack, where we have regular
one on one conversations with randomly selected members of the Teleport team.
That's lots of fun because the company is growing quickly. We're adding people
from different states, countries, with different backgrounds. It's always
something I look forward to.

We're about 130 people now. I just got a notification that said, "Welcome, eight
new hires that are joining Teleport today." It’s not every day, but as it's a
Monday today, people usually start on Monday.

### Is everyone remote?

We are a remote-first company, which means that it doesn't matter where you are
to work at Teleport. If you need an office, maybe one day or two days a week,
we'll work with you.

Before the pandemic started we signed a lease for a gorgeous place in Downtown
Oakland, which right now is used by people who are based in the Bay Area. If
they feel like working out of the office they can show up. The number of people
who are there varies from four to maybe 15 on a day to day basis.

### How did you first get into software development?

I got into software through hardware. When I was a kid I was really interested
in electronics, so I started building toys that looked like, audio amplifiers,
or really primitive radios.

From there I got exposed to very early primitive computers. Once I got exposed
to those computers, I started to tinker with code to make them do things. One of
my very early memories of writing code was trying to control the refresh on an
old CRT monitor that ended up killing that monitor. That was quite scary because
those things used to be expensive back then, especially if you are 14 years old!

Because my early software projects were all about doing fancy things with
hardware, I would play with floppy drives that used to go into older machines.
You would use them to read or write data and they would make these noises
because that's the heads inside of the drive moving. I built something that
allowed you to play music by moving them really quickly. To do this I had to
learn the [Assembly](https://en.wikipedia.org/wiki/Assembly_language) language,
which is maybe a somewhat unusual first programming language to learn. All of my
programs were basically pranks.

I grew up in what used to be called the Soviet Union, and in the Soviet Union
they had this saying that ‘you become a computer scientist only after you fail
at being a real scientist’. They basically never treated computer science as its
own branch of science, so I applied to a maths program, but we didn't really
spend much time in front of computers at school.

Eventually, as probably most of the kids who are really into programming, I
tried building my own games. From there I went to C and then C++, and then I
started my professional career as a C++ engineer at a company called
[National Instruments](https://www.ni.com/) in Austin.

### What is the most interesting development challenge you've faced working on Teleport?

The challenges we face today are around how we implement modern identity-based
privileges on top of legacy infrastructure. Even if you take SSH as an example,
SSH has no concept of role-based access control. The protocol is extremely
simple. You get access to a machine as a certain user, then your security model
is tied to the UNIX security model.

You get sessions based on that specific user. The access industry is evolving
with capabilities like just-in-time access. For example, you're getting access
to a device, and then your privilege needs to be elevated or dropped. But SSH by
itself has no idea of what role-based access controls are.

Building these innovations on top of legacy protocols, maintaining strict
security and compliance requirements and full backward compatibility is
extremely challenging. That's why Teleport had to build its own SSH
implementation. Our SSH server is fully backward compatible with a traditional
OpenSSH. You could use an OpenSSH client to connect to Teleport.

We do a lot more on top of regular SSH that is Teleport specific. On a protocol
level, Teleport knows if the machine you're accessing is a staging machine or if
it's a production machine. In other words, the identity of hardware is also
taken into account where your access is granted or revoked; or keeping track of
all of your connections globally across the entire fleet.

For example, if you want to implement certain compliance access controls such as
if you take your hands away from the keyboard for a certain amount of time the
access needs to be cut globally. Imagine if you're a global company at massive
scale, with infrastructure all over the world. Then, if you have a connections
going everywhere, they need to be cut right away, across all these different
protocols, if your access is revoked

Those are the kind of things that the Teleport team is trying to solve. As we
add support for more and more and more protocols it becomes progressively
harder. We cannot be in a position where we say, "Hey, here is a feature. But it
only works for MySQL, Kubernetes, and Windows, but it does not work for MongoDB,
SSH, or some others. We try to have a very elegant compatibility matrix. If
Teleport promises a certain capability then it will be enforced for absolutely
everything.

### What is the tech stack behind Teleport?

Teleport is 100% Golang. It's extremely simple in this way, but it also gives us
tremendous advantages. It's much easier to scale an engineering team that's
standardized on the same technological base. Also Golang is refreshingly
legacy-free.

If you look at languages like Python and Ruby, not the languages themselves, but
the implementations that we use; under the hood they still are relying on a lot
of legacies. They rely on a lot of older technologies. Even the way they
implement crypto, most of them will go to OpenSSL.

They are effectively almost like a language front-end on top of legacy runtime,
which creates a certain amount of maintenance. That's one of the reasons why
Docker became so popular because packaging applications, moving them around, and
dealing with dependencies is just not trivial.

Golang is a clean-sheet implementation. It is statically linked, and the
batteries are included. Everything in Golang is written in Golang, including all
the crypto. If you look at all the vulnerabilities that are security-related,
and you pay attention to the traditional ecosystem-based around the old C
runtime, and then compare that to Go, it's a breath of fresh air.

### What is the most interesting project you’re playing around with at the moment?

In the last couple of years, I’ve enjoyed taking photos with old film cameras,
but you don't always want to print those pictures. Scanning an image from a
color negative into a computer file is a surprisingly complicated problem. I've
been learning about color theory, about color spaces, and signal processing.
Digitizing film is a problem that combines interesting software and hardware
challenges. I’ve always been attracted to hardware+software types of problems.

Closer to our industry, at Teleport we are working on a brand new and
fascinating open source project. The idea is to imagine a new terminal, which is
remote-first. We use terminals all the time in our lives but these are
local-first terminals, because they came from the era when all computing was
done locally.

What happens when you launch a terminal on your Mac? You get a bash prompt, or
whatever shell you're using. You're already logged in and it knows who you are
and where it is coming from. There's a context. Your login exists in the context
of your machine. There is a session and you are already part of a session. The
terminal is tightly integrated into it, but if you need to interact with remote
resources it's not as seamless because the context is lost. The terminal doesn't
know if you want to connect to a specific Kubernetes cluster on Amazon, or to an
SSH machine on Azure, or you need to get into a Postgres database that's in a
machine that's sitting right next to you.

You start tinkering with configs, and you need to create a `kubeconfig` file
over here, an `.ssh` file over there. We have to spend the effort to teach our
environment how to connect to all these different things.

If you flip this around and imagine what if there was a terminal, that's a
remote-first terminal, so it knows who you are within a global context, such as
your identity within a company. Then if you try to get to some other resource
anywhere on the internet, that is the context that it will use.

When you launch a remote-first terminal for the first time, there’s a question
of what do you get access to right away? It's not going to be localhost, it
needs to be something else. We had to rethink all of these concepts, and what
does it mean to have a session in a cloud environment?

It's not in a browser, but it is based on web technologies. We want it to feel
as native and as inviting as we possibly can. We don't want to be yet another
tab in the browser. That is just probably not what most developers would want
this thing to be. If your job is to interact with cloud infrastructure, that's
probably the first or second most important application on your machine. That's
the way we see it.

Slowly but surely, with these cloud technologies, we're now realizing that we’re
essentially building the matrix. Mark Zuckerberg made a lot of noise about the
Metaverse that they're going to build, but I'm arguing that we've already built
it. Every company has built its own Metaverse that probably lives on Amazon
somewhere.

The problem with it is that it doesn't really have a single entry point. It
consists of dozens, maybe even thousands of little components. Each of them you
need to configure to interact with. I am convinced that a remote-first terminal
is inevitable. That is the project that I'm fascinated by and we're working on
it at Teleport right now.

### Describe your computer hardware setup

First of all, I'm not really a laptop person. A laptop for me is a lightweight,
“read-only” version of my work environment. Convenient on the go, but I feel
limited by laptop screens and keyboards.

When it comes to actually doing work I still tend to use desktops. I try to get
the best machine money can buy every five years or so. Every five years I have a
machine that people say, "Yeah, Ev, this is absolutely crazy”, but then after
three or four years they'll say, "Hey, that's a retro technology you are
running."

At the moment my machine is what used to be a powerful
[10 core Intel i9 7900x Intel CPU](https://www.intel.com/content/www/us/en/products/sku/123613/intel-core-i97900x-xseries-processor-13-75m-cache-up-to-4-30-ghz/specifications.html),
64 gigs of RAM and a bunch of SSDs. It's still pretty snappy. It has a
[NVIDIA 1080Ti](https://www.nvidia.com/en-sg/geforce/products/10series/geforce-gtx-1080-ti/)
graphics card, which used to be top of the line back in the day, with a wide
34-inch monitor, a high resolution mouse and a mechanical tenkeyless keyboard.

I'm also somewhat anti-cordless. I have wires for everything. So my mic, my
speakers, my keyboard, my mouse, even my internet connection, it's all wired. I
prefer USB and Ethernet vs wifi or Bluetooth. I get the same predictable
performance, same latency, extreme reliability, so I never have to apologize on
a Zoom call that my AirPods are acting up today.

### Describe your computer software setup

OS: Both. I dual boot. Everything work-related is Linux first. Unfortunately,
Linux is not a great platform for photography, and as photography is my hobby,
lots of tools that I use work better on Windows. I've been running on
[Ubuntu](https://ubuntu.com/) with Gnome, with an occasional switch back to
[Arch Linux](https://archlinux.org/).

**Browser:** Firefox.

**Email:** The previous company I started was called
[Mailgun](https://www.mailgun.com/), so I was an email guy for a long time. I
used to host my own email server in my own basement back in the day, but then it
became harder to do. I'm a strong believer in paying for a premium email
service, because email is where most hacks happen. I've been moving around. I
used to be on Rackspace's private hosted email, and then I was on
[Proton](https://proton.me/mail) and [Fastmail](https://www.fastmail.com/). At
work, we use Google Apps for everything, so it's Gmail.

**Chat:** Slack.

**IDE:** Vi. That's another reason why I like Golang ecosystem so much because
it works quite nicely with simple editors. You don't really need a complicated
IDE to be productive in Go.

**Source control:** Git.

### Describe your desk setup

I have a standing desk, but I never stand. I'm tall, so most desks just feel too
low for me. It's a standing desk which I'm using as a sitting desk, but it's
really high.

{{< img-center src="/img/interviews/teleport-ev-kontsevoy-desk.jpg" alt="The desk of Ev Kontsevoy, Teleport" width="100%" >}}

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Coffee.

**Silence or music?** Music, but without lyrics.

### What non-tech activities do you like to do?

Sometimes I like to buy a broken or really old mechanical camera on eBay and
then try to repair them.

Repairing those old shutters is actually quite fascinating because it's an
extremely precise mechanical device, somewhat similar to watch movements. Their
service manuals are rarely available, and everything is small and delicate.

It's basically a real-world puzzle that you have to solve, and it's incredibly
satisfying when it starts to work. When you figure out what exactly is broken,
even if it's just lubricating something, you're not going to soak the whole
thing in oil, you have to be really surgical and precise to figure out which
piece needs lubrication.

### Find out more

[Teleport](https://goteleport.com/) is an open source access control plane. It
was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 16 Dec 2021 and 28 Jul 2022. This interview
was conducted on 29 Nov 2021.
