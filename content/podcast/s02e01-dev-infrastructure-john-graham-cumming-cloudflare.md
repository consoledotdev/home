---
title: Dev infrastructure
who: John Graham Cumming
whoLink: https://twitter.com/jgrahamc
role: CTO
org: Cloudflare
orgLink: https://www.cloudflare.com/
what:
  We discuss the philosophy behind the idea that the network is a computer, why 
  developers should be able to ignore the low level details of where their code 
  runs, and the challenges of deploying data centers on Mars.
season: 2
episode: 1
date: 2022-01-06T06:00:00Z
duration: 33:18
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/a810f07c-1df0-4198-bd2f-a2629d3eeee3/audio/17a8dc25-bab4-473a-8d7d-8d66124778b2/default_tc.mp3
draft: false
headerType: fixed
summary:
  Dev infrastructure - a devtools discussion with John Graham-Cumming
  (Cloudflare). Episode 1 (Season 2) of the Console DevTools Podcast.
metaDescription:
  Dev infrastructure - a devtools discussion with John Graham-Cumming
  (Cloudflare). Episode 1 (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/cloudflare-john-graham-cumming-profile.jpg
topImg2Src: /img/favicons/www.cloudflare.com.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/a810f07c-1df0-4198-bd2f-a2629d3eeee3?dark=true
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server 
  Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute 
  and cyber security company, StackPath. He is also researching sustainable 
  computing in the Department of Engineering Science at the University of 
  Oxford, and has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode we speak with John Graham-Cumming, CTO of
[Cloudflare](https://www.cloudflare.com/), a global web platform built for
security and performance. We discuss the philosophy behind the idea that the
network is a computer, why developers should be able to ignore the low level
details of where their code runs, and the challenges of deploying data centers
on Mars.

Things mentioned:

- [Apple silicon](https://support.apple.com/en-gb/HT211814)
- [Arm](https://www.arm.com/)
- [IBM](https://www.ibm.com/)
- [Intel](https://www.intel.com/)
- [Starlink](https://www.starlink.com/)
- [Donald Knute](https://en.wikipedia.org/wiki/Donald_Knuth)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [V8](<https://en.wikipedia.org/wiki/V8_(JavaScript_engine)>)
- [Go](https://go.dev/)
- [Rust](https://www.rust-lang.org/)
- [WebAssembly (Wasm)](https://webassembly.org/)
- [COBOL](https://en.wikipedia.org/wiki/COBOL)
- [Green Compute](https://blog.cloudflare.com/announcing-green-compute/)
- [Cloudflare Wrangler](https://developers.cloudflare.com/workers/cli-wrangler)
- [J programming language](https://www.jsoftware.com/#/)
- [Raspberry Pi](https://www.raspberrypi.org/)
- [Jgc.org](https://www.jgc.org/)

{{< rich-title-5 icon="future-head" >}}About John Graham
Cumming{{</ rich-title-5 >}}

John Graham-Cumming is the CTO of Cloudflare and is a computer programmer and
author. He studied mathematics and computation at Oxford and stayed for a
doctorate in computer security. As a programmer, he has worked in Silicon Valley
and New York, the UK, Lisbon, Germany, and France. His open source POPFile
program won a Jolt Productivity Award in 2004.

He is the author of a travel book for scientists published in 2009 called The
Geek Atlas and has written articles for The Times, The Guardian, The Sunday
Times, The San Francisco Chronicle, New Scientist, and other publications.

### Highlights

{{< podcast-episode/clipping time="12:41"  >}}

**David Mytton:** One of my favorite Easter eggs is in the Starlink terms and
conditions about how their legal jurisdiction changes as you leave Earth and
transit through space and then ultimately land on Mars. That introduces
potential interesting questions around latency between Earth and Mars. How would
you think about architecting for that kind of problem?

**John Graham-Cumming:** The latency is enormous. You're going to have to move
the data and the application to Mars, or maybe in orbiting around Mars. I think
once we get to that point, no one's going to be doing anything interactive
directly with the Earth. And then what will happen is all of the interesting
stuff will be around synchronization between Earth and Mars, which is what this
solar system serverless platform will have to deal with. Once again, I think
this becomes not an application developer problem but actually a problem for the
platform to deal with.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="07:44"  >}}

**John Graham-Cumming:** I think we're going to enter a world in which the
latency is much, much lower on average. And the interesting question is how is
that going to change things for developers? And I think the big question that's
going to come about is, "Do I put code on the end user device, be it JavaScript
in a browser or an app or something like that? Or is it sufficient that I put it
close to the end user on a serverless platform and I have a much thinner client
on the end user device?

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to season two of The Console Podcast. I'm David Mytton,
co-founder of console.dev, a free weekly newsletter highlighting the best and
most interesting tools for developers. In this season I'll be interviewing 11
interesting people about a specific technical topic. From security to dev
focused infrastructure and from homomorphic encryption to privacy and
decentralization, we'll get into the details, covering what developers need to
know.

In this first episode, I speak with John Graham-Cumming, CTO of Cloudflare, a
global web platform built for security and performance. We discuss the
philosophy behind the idea that the network is a computer, why developers should
be able to ignore the low level details of where their code runs, and the
challenges of deploying data centers on Mars. We're keeping this to 30 minutes,
so let's get started. I'm here with John Graham-Cumming. John, thanks for
joining The Console Podcast.

**John:** Well, thank you very much for inviting me. It's lovely to get a chance
to chat.

**David:** Let's start with a brief background, then. Tell us a little bit about
what you're currently doing and how you got here.

**John:** Well, I'm John Graham-Cumming. I'm the CTO of a company called
Cloudflare. How did I get here? Well, I got here because I met Matthew Prince,
the CEO of Cloudflare, years and years and years ago, so long ago I don't want
to tell you how long ago it was. And I'd had a long career in a sequence of
unsuccessful or relatively unsuccessful startups following on from having done
computer science and mathematics at university. And somehow Cloudflare, I wanted
to work for Matthew, I wanted to work for Michelle, and luckily it turned out
not to be just good people to work for but a company that has become very
successful.

**David:** Well, Cloudflare started life focused on some core network services
like content delivery, security and DDoS protection. But in the last few years
you've been working up the layers and compute and storage are now core parts of
the service. What's the philosophy behind this approach and the building blocks?

**John:** Well, I think the ideas or a few different aspects we saw, when you're
talking about now, in 2010, 2011, that only a few companies really got the best
out of the internet. And what I mean by that is they had the best security, they
had the best performance, they gave you the best online experience. And the
thing was, there were really a small number of them. If you think about Amazon
and Google, Yahoo at the time, these were companies that could do all of that,
and everyone else was sort of catching up.

And we thought that that was silly, that the history of software really is that
things tend to get more democratized, and it would be potentially a very
successful thing to do to say, "Look, everybody should have the speed of Amazon,
the security of Google, all that kind of thing." And so we really laid out a
plan to bring those attributes to anything connected to the internet. And over
time, we have built that out. I mean, we started out with really for the web,
really for websites, and really now it's anything connected to the internet.

**David:** And you have this concept of the network is the computer. What does
that actually mean?

**John:** Well, I think that obviously that's an old slogan that came from Sun
Microsystems. And Sun was really one of the first companies that was shipping
all of its machines with network cards in them and seeing the network as
fundamental to how things operate. I think what we mean by it now is that if you
think about how we've got used to the cloud as something we just connect to and
we never talk about connecting to a server. Someone like the average person
doesn't say, "I'm going to go to my computer and connect to a remote server in
order to access some data." They say something like, "I'm going to use the
internet," or, "I'm going to use the cloud." And from the end user's
perspective, the cloud, the internet is this big computer. It just happens to be
connected with networking stuff.

And I think from a developer's perspective, the opposite is true, right? We're
concentrating on the servers and the rollout and the scaling and the securing
and all this kind of stuff. But we'd really quite like to treat it as just one
big machine. And so that's what we're trying to do. We're trying to make it a
place you can put your content, put your code, and we'll worry about how we get
it to the end user, how we scale it, how it gets secured. And that way, the
network looks like a computer. And really, for me, it's just a lot of nostalgia,
isn't it? Because I grew up in the 8-bit era where you had a computer in front
of you, you wrote some code and it just ran on that computer, and you didn't
worry about anything else. So I'm really trying to bring the 8-bit age to the
entire world and make it as easy as those days with a home computer in the
1980s.

**David:**  Right. So developers don't have to worry about the idea of what is
happening on the low level. They can just hand over the code and you're dealing
with and abstracting all of those difficult problems.

**John:** Yep, exactly. There are times when it's interesting to worry about the
performance of the machine, the architecture of the processor, all the
idiosyncrasies about the memory and everything, but there are many times you
just want to run your code. And if you think about it, we stopped programming,
for the most part, in assembly language quite a long time ago and we started
using compilers. I mean, compilers were this great innovation, right? "Oh, you
can actually write in the higher level language," and moving away from the
hardware. And what we're really saying here is, "Yeah, let's just not worry
about these underlying layers. Let's not even worry about the scaling and all
those kind of things. We'll run your code for you and we'll run it where it
needs to be run."

**David:** And how do you think that is exposed to developers? Because for a
long time you could just assume, well, your code's going to run on Intel
architecture chips, but that's started to change quite a bit with Apple Silicon
and ARM chips, and now you've got to deal with FPGAs and GPUs, and RISC is
making a comeback. Do developers really need to care about all that?

**John:** Well, I mean, if you think about Intel obviously is a really, really
popular platform, but the reality is that ARM is everywhere because it's in your
phone, and there are billions and billions of phones. And so the idea that the
Intel architecture was dominant is actually kind of wrong. We're actually living
in a world in which there are other architectures. And obviously, there were
others like the POWER architecture and obviously some of the Motorola things.

I think that there are a group of people who need to worry about the underlying
architecture, and they're writing operating systems and they're writing
extremely high performance code. They're optimizing things for a particular type
of hardware. And frankly, we do some of that because we need to, but most people
are just writing to get a job done, right? So they are out there with some
service to write or app to produce. And frankly, whether it's targeting ARM or
whether it's targeting Intel is irrelevant. I mean, I know if you get on the
plane, you mostly don't think if it's a Boeing or an Airbus, you mostly think
about the destination. And I think that's what most engineers are thinking about
when they write code.

**David:** And what about network latency? Developers, do developers need to
care about that? How should they think about it?

**John:** Well, it depends what you're doing. I mean, I think that we are
definitely entering an era where there will be low latency from an end user's
device, be it a computer or a phone, to a place where their code runs. And the
reason that's happening is not sadly that we made the speed of light faster,
that we've failed to do, but two things are going on. One is that we've moved a
lot of the places where code gets executed closer to end users. And that's what
serverless is about, that's what some of these edge compute things are about.
They're about fighting against the speed of light and bringing stuff close to
the end user. And the other thing is we're going to get 5G at some point, and 5G
is going to have lower latency. So from a mobile device, you'll be getting down
to very low latencies.

And so I think we're going to enter a world in which the latency is much, much
lower on average. And the interesting question is how is that going to change
things for developers? And I think the big question that's going to come about
is, "Do I put code on the end user device, be it JavaScript in a browser or an
app or something like that? Or is it sufficient that I put it close to the end
user on a serverless platform and I have a much thinner client on the end user
device?" And I think that's the world we're entering, and that's probably really
the question developers will need to ask, unless they're doing something that
genuinely requires low latency, such as gaming or virtual reality or something,
in which case they'll be seriously concentrating on latency from the beginning.

**David:** Does that assume much more processing either on the device or very
close to the device as opposed to centralized?

**John:** Well, if you think about the hyperscalers like Amazon, I mean, they've
been very successful by building these very, very large data centers, right? And
that's fantastic. I think that as we get to low latency, you're going to want to
be near the end user. We're obviously already using quite powerful devices in
general, but not everybody is. It's not uniform, right? People are using a
variety of devices, the computers they use or the phones they use. And we saw
this in the pandemic, right, where people got sent home, kids got sent home from
school, and pupils' even schooling was depending on the types of machines their
parents could afford to buy. And so you've got to realize that the end user
stuff is not uniform.

On the other hand, the edge compute platforms will tend to be very powerful. So
depending on what you want to do, it may really make sense to push it into the
edge, into the serverless platform, and not worry about the power on the end
user device. And you really see this sometimes. Sometimes you see these
incredible demos of stuff and they look really good if you've got a gigabit
connection and the latest Mac, but the average user doesn't. And so I think this
does provide an opportunity to use the very high performance of these serverless
platforms and, frankly, the really good connectivity of those serverless
platforms. If you're talking to other APIs that are on other services, the fact
they're really well-connected means that you can do things really, really fast
on the serverless platform. So I think there is really a future in which
serverless becomes enormously important.

**David:** So it kind of removes the latency question from the user perspective,
using a service. Is there still a question in terms of the internals of when
you're building an application as a developer and thinking about what callbacks
you might be doing to backend services? Or do you think those will be co-located
closer to the user as well?

**John:** I think some of them will be co-located. I also think just the fact
that a platform like ours or others, they have really good connectivity to the
internet. In our case, we have our own fiber backbone, so we can move stuff
without it going over the internet. I think it'll just be such a great developer
experience to be on the serverless platform.

**David:** Right. And then you've also got the different connectivity types. You
talked about 5G, and that's the latest technology that we're hopefully seeing
being rolled out, but then there's satellite and Starlink where there might be
high throughput but you've got quite significantly higher latency, but also in
developing countries where the infrastructure's not quite as advanced and they
might be several generations behind. Does that introduce different tiers
potentially that developers need to consider?

**John:** Well, so Starlink's interesting because Starlink latency is pretty
good. You're talking tens of milliseconds. And the reason for it is is that it's
easy to think, "Well, it's in space, so it's far away." And if you're old enough
to remember transatlantic phone calls that went via satellite, there was a big
delay every time you said something, and everyone had to pause, and it was
difficult to talk. The reality is those satellites are in low Earth orbit.
They're only actually hundreds of kilometers high. And you think about hundreds
of kilometers on the Earth's surface is really not far away. So in fact, the
latency across networks like Starlink can be very, very good. And I know that
they are trying to optimize for realtime gaming. So I actually think Starlink
improves the latency situation enormously.

When you think about internet access in different parts of the world, I think
you obviously see it's obviously not uniform at all and I think you see
different environments. In some countries, Sudan, for example, pretty much
everybody accesses the internet using mobile phones. In Switzerland, the
opposite is true, actually desktop tends to dominate. So you have different
technologies. But if you have a very large serverless network around the world,
then where it's close to the end user, then no matter where they are they can
get a good experience and actually pretty much no matter what end device they're
using. So I think the serverless platforms, the ones that are very, very large,
actually can have a big difference on everybody around the world because they
give you, the developer, a place to run code that you know is high performance
and well-connected to the internet even if the end user's connection isn't as
good as the lovely gigabit connection you have at home.

**David:** One of my favorite Easter eggs is in the Starlink terms and
conditions about how their legal jurisdiction changes as you leave Earth and
transit through space and then ultimately land on Mars. That introduces
currently hypothetical but potential interesting questions around latency
between Earth and Mars, obviously completely hypothetical. How would you think
about architecting for that kind of problem?

**John:** Well, I mean, obviously, you can get relatively high bandwidth, but as
you say, if you've watched The Martian, you may remember how many minutes Mark
Watney was waiting for a reply every time he sent a question.

**David:** Right.

**John:** The latency is enormous. So what you're going to have to do is you're
going to have to move the data and the application to Mars, right, or maybe in
orbiting around Mars. So I think once we get to that point, no one's going to be
doing anything interactive directly with the Earth, they're going to be doing
anything interactive locally. And then what will happen is all of the
interesting stuff will be around synchronization between Earth and Mars, which
is what this solar system serverless platform will have to deal with. So once
again, I think this becomes not an application developer problem but actually a
problem for the platform to deal with.

**David:** So given that we're still quite early on in the development of
serverless platforms, where do you see things going in terms of improving
developer experience, so things like logging, error reporting, build, test,
deploy cycles, that kind of stuff, that's already quite mature in other
environments?

**John:** It's funny, I once attended a talk by Donald Knuth in Menlo Park, and
at the end of it somebody stood up and said, "Which do you think is the better
language, Java or C++?" which dates when that talk was done. And he replied,
"Which one has the better debugger?" And I think you highlight the important
point, right, which is like, it's the tooling around what you're doing that
really matters. And so debugging, logging, tracing are very, very important
things. I also think that coordination is important, like maybe rolling out new
versions. Are you coordinating a large number of services? That itself is also a
really important part of the platform.

I think we are maturing now. We're definitely past the initial phases. We have
hundreds of thousands of developers on our platform actually writing code,
deploying things. It's clearly recent inflection point, I think, where it is
usable. And I think this will end up being the default way that developers think
about building something that's exposed to the internet. They will just say,
"Right, well, I'll just build it on a serverless platform because I don't have
to worry about all sorts of features." And we see it from the people who use our
platform that they just never even think about the scaling or load balancing or
anything like that.

**David:** What does that mean for optimization and thinking about performance?
Can you just throw hardware and resources at a problem?

**John:** Well, it depends what the problem is. Let suppose you're trying to do
a simulation of something in physics where you really are going to spend a lot
of time optimizing how you do that and working on probably some high performance
computing environment. That is going to be a very, very specific situation. I
think though for the people like us, when we're building the platform, yeah, we
can go out there and we can essentially throw hardware at the problem. I mean,
we actually design our own hardware and roll it out around the world and have
built a system that can bind together multiple generations of hardware in such a
way that the end user has no idea. So I think the future is that you just
shouldn't have to be thinking about the hardware, or the operating system, or
the architecture, you should just be thinking about writing code in the language
that you prefer.

**David:** And the constraints are changing and improving. Like, you've just
increased the execution time, for example, on Cloudflare Workers. Do you think
that developers should just expect that to get better over time, and the
constraints they see today will be vastly improved in six and 12 months time?

**John:** Yes, absolutely. I mean, obviously, we are growing and building out
our platform at the same time. So initially, we had constraints just because we
were overwhelmed with demand. As we've grown out, we've increased. And as we've
seen the demand actually for other applications to be on our platform, we've
increased the runtime constraints. I think eventually, yeah, I mean, this will
become how people build stuff.

**David:** And how does that play into technology choices? So for example, the
V8 engine that Workers is based on is written in C++, but end developers write
in JavaScript or anything that can compile into WebAssembly, and you're big
users of Go and Rust internally. How do you think about those different
technology choices?

**John:** Well, from our perspective, what V8 gave us was a highly optimized,
very widely used, very well-understood runtime environment, which we were then
able to wrap around our own security features to be able to allow us to allow
others to write code on our platform. We wanted to use V8 for two reasons. One
was, I was adamant that we support JavaScript from the beginning. JavaScript is
the world's most popular language. And what you want from a platform is that
people can get up and running with the language that they like. So, that was one
thing. And the other thing was that it was pretty clear that WASM was going to
be a sensible way to take another language and execute it safely, especially if
we had all the infrastructure in place for the rest of V8. So I think those two
things together came together to say, "This is a good place to begin."

**John:** Will we use V8 forever? I have no idea. You can easily imagine a world
in which in five years' time there's so much WASM that maybe we want to do
something entirely native with WASM or maybe we've made silicon that runs WASM
directly. But I think that it is clear that WASM is a very good target
environment for a lot of languages. And what we'll want to do is allow
developers to use their language of choice. So JavaScript was really the first.

Obviously, we would support anything else. I mean, I personally got GnuCOBOL
running and I have a demonstration up on the Cloudflare blog about how to write
COBOL on our platform because it goes to WASM. The crust is fully supported by
our platform. I think we'll just see, yeah, as WASM itself becomes more popular,
our platform gets more popular. So I feel like the question about V8 is a little
bit like the question about the target operating system or the target processor,
which, from an end user perspective, you shouldn't worry about it. You should
just make sure that we run your code as fast and as securely as you need it to
be run.

**David:** And how have you approached the security aspects of that? And I
suppose being able to compile into WebAssembly is the key there, so that you can
do interesting things like changing how the date API in JavaScript is working
internally so you can prevent those timing attacks. What can you tell us about
your approach to the platform level security?

**John:** Well, we have a really long post, actually, about this on the
developer region of the Worker stuff for Cloudflare, but obviously, V8 itself is
highly scrutinized, right, because it is in every browser out there. And of
course, people would like to attack it. And we built an environment where once
the V8 team revs something for security reasons, we can push it out very, very
quickly, within hours, to our platform. We also sat down and built around V8 our
own sandboxing so that we can control if something did manage to escape or they
would actually be able to get access to.

And another thing we did was we were concerned about the effects of things like
Spectre. And so we paid for and collaborated on research with the original
Spectre finders, actually, to look at our environment and look at what we were
doing. And of course, one of the nice things is because we control everything,
we can arbitrarily move processes around, we can kill processes and restart
them. And so we have a tremendous sort of toolkit for dealing with potential
attacks on our platform. And it's something that the team actually from the
very, very beginning spent a long time looking at to make sure that we thought
we could actually safely run other people's code, because literally, you can
sign up for free and run code today. And I think that it's something you never
stop working on, but it is something that we think the combination of what we
did and the work the V8 team does, it is a good platform to write code on.

**David:** How have you managed to achieve that such rapid rollout speed
across... You've got hundreds of edge locations around the world. How is that
architected to avoid problems showing up in production and detecting those kind
of things at scale?

**John:** So there's a few things. So the way in which Cloudflare works is we
have an internal system called Quicksilver, which binds together all of those
machines around the world and allows us to push out configuration to them. And
that happens very, very rapidly, seconds to around the world. Or we can push out
changes to the WAF, a customer clicks a button in their UI, it changes, and also
push out code to the edge. So if you look at it, we already had that
infrastructure in place. From an end user's code perspective, I mean, if their
code fails in some way, that's their problem, right, if it's not behaving in the
way they want it. We obviously are able to control time limits and CPU limits
and all that sort of stuff like that so that their code can't harm others.

But the real question is how do we do it for our own software deployments? And
actually, we have a staging environment, we have a dogfooding environment, we
have staged rollouts, we have all sorts of monitoring going on. So we're able to
do this. And we do software changes continuously on the platform. And over time,
we have got pretty good at being able to spot when software is having problems
and able to roll it back. The other thing I would say is we have a piece of
software that's called Unimog, and there's various other variants of it called
Plurimog and other things, which actually are monitoring the performance of
every machine around the world and actually moving traffic around to keep us all
at pretty much exactly the same CPU utilization around the world. So whether
it's a third generation machine or a 10th generation machine, we're able to use
its CPU effectively and safely.

**David:** Is that entirely automated? How's that evolved over time?

**John:** Yes. I mean, so it used to be entirely manual, right? So it's like,
"Oh, that machine's a bit over load. Let's move some traffic around." Then we
did a sort of semiautomatic mode where we did modeling of what normally
happened, and we set up load balancing to machines based on that modeling. And
occasionally, we'd refresh the model. And by occasionally I mean every few days
or weeks, which isn't ideal, right? And then we set out to build this layer for
load balancer, which is aware of the load on the machines in our global network
and is able to move traffic around within a data center but also actually move
traffic from data center to data center so that the load is automatically
spread. And it's incredibly effective. We basically run all the CPUs around the
world at exactly the same level, no matter what the load is, because we're able
to move the traffic and keep things flowing. And it's made us incredibly
efficient.

**David:** Is that linked into how you handle very large DDoS attacks as well?

**John:** So, yes and no. Large DDoS attacks are something we've been dealing
with right from the very beginning at Cloudflare. We'd always been a company
that would deal with DDoS attacks, and over time we built a entirely separate
DDoS system. And actually, we have more than one. We have a system that operates
independently on every machine, is able to detect a DDoS, and then we have one
that fits together with all of the stuff and takes intelligence from the entire
network.

And this is one of those areas where you really want to get into low level stuff
because you're trying to drop packets, trying to recognize packets that are bad
and drop them very, very rapidly. And there's a whole team that works on that.
And that is something which obviously does affect CPU on the machines, but we do
it in such a low level way and with specific network adapter cards that we've
got pretty good at being able to recognize and drop packets at incredibly high
speed. In particular, using the express data path stuff in Linux has helped us a
lot, using a thing called eBPF, which allows us to recognize particular packet
types that run in the kernel very, very fast. A lot of this stuff has been built
up over years to the point where just the other day we handled an almost two
terabits per second DDoS without any manual intervention.

**David:** Where do you see VMs and containers fitting into this, as the classic
building blocks of applications compared to the much smaller layers that the
serverless functions exist in and then your own software layer?

**John:** Our guess is that some people will still want to run a container where
they've set everything up and they want to give us the container. We're not
ready yet to offer that service. I think that it is possible that we will. We've
talked a little bit about our sort of thinking on this in the past. So it is
likely at some point that that becomes a, "Maybe we should be doing this on our
platform." But moreover, we think that people are moving their applications to
serverless. And it's not just functions, it's whole applications. And I think as
that gets built out, it'll just become natural to not even worry about the
container with all of the dependencies. We'll say, "Oh yes, I can run it on this
platform because that platform exists."

**David:** And does that make it a lot easier to do these lower level
optimizations you're talking about with even the custom silicon when it's
running on the serverless engine?

**John:** Yes, definitely. I mean, I think, if you're able to control the
environment you're running in, then, yes, you can absolutely make all sorts of
optimizations. I mean, the fact that we have hardware built for us allows us to
pick exactly the CPU we want, exactly the memory, exactly the network card. And
again, we can do the same thing at the software level where we can decide
exactly what we're going to do. And it is inevitable that we will explore making
our own silicon for some of this stuff because it will turn out to be the right
optimization. But from the end developer's perspective, they shouldn't have to
worry about any of that. They need to say, "Oh yes, I'll just run my code on
this incredibly inexpensive, incredibly flexible, scalable platform," and it
just works.

**David:** How do you think about aging out those different components of the
infrastructure? Is that how it ties into your efficiency management layer, so
even when you have the older generations of equipment, you can still manage them
with the latest versions?

**John:** Yeah. I mean, that's one of the things we do, right, which is that. So
there's a financial component to this, right, which is the depreciation on the
hardware, right? So over time you've paid for it essentially, right? The real
thing to look at is what we really care about is requests per watt. So if you
think about the fact that once you've bought the hardware, all the cost is
around the power and cooling. So how many requests per second can you do per
watt of power, right? And so over time, when you look at the blended cost of
running our service, at some point, some of those older machines start to look
expensive because they're more power hungry per request.

**John:** And so by having this Unimog software layer, we can make that decision
based on nontechnical reasons. It's not like, "Oh, well, it's too old because we
don't like this machine because it's got DDR, whatever memory in it." But it's
like, "Oh, it's actually too expensive for us to run." And therefore, we can age
that machine out and replace it with something newer. That has allowed us to be
incredibly efficient. And one of the reasons why the business has done so well
is that ability to really drive down the cost of operating the thing through
software and software on top of this platform.

**David:** Right. And the computational efficiency but also the sustainability
of the platform when you're thinking about carbon intensity per kilowatt-hour
and how that blends into your global estate of locations. How are you thinking
about the sustainability? Is that just linked into the efficiency?

**John:** It's not just linked into the efficiency, right? So, yes, we want to
be more efficient, absolutely, because that makes sense from a financial
perspective and from a carbon perspective, but it's also like, how do we power
this? And so we're looking at, where are we getting our electricity from? Where
are we getting our cooling from? And so that's something we've been on a long
journey around, either buying offsets or directly sourcing power which is from
renewable sources. And we'll continue to do that.

**John:** We have this thing called Green Compute, actually, where you can
choose that your code will only run in data centers where we've all already got
to a acceptable level of carbon use, which I think is a cool thing. And again,
it's one of these things where you don't have to worry about the machines and
the operating system, all this stuff, it's that you can literally press a button
in the UI and say, "I only want this run in data centers which are sustainably
powered," which is pretty amazing.

**David:** So it's essentially a config flag and you can trade off different
things like locations that you require and the sustainability?

**John:** Yeah. And eventually, of course, you won't have to make this trade-off
because we're pushing to make the whole thing sustainable, and then you won't
have to worry. But if you want to do it today, you can absolutely do that.

**David:** Before we wrap up, I have two lightning questions for you.

**John:** Go for it.

**David:** So the first one is, what interesting dev tools are you playing
around with at the moment?

**John:** I don't code that much anymore because the CTO role at Cloudflare, I
started out as a programmer and I wrote loads of code, and then I ended up being
the CTO and running everything, and now the CTO role is very much around
outbound stuff, stuff like this interview with you, talking to customers,
thinking about the longer term strategy things.

The tool I have actually been playing with is our own internal tool, so
Wrangler, which is a tool for using our serverless platform. I like to use our
tools as an end user, and I actually have accounts on Cloudflare that I pay for
out of my own pocket. So I see the real end user perspective. So, that's the
world that I've been playing with. The thing I really want to get into and I
never have time, and one day this is my retirement plan, is there's a very
interesting mathematical language called J, and one day I'm going to sit down
and really learn J properly, and which will take me back to my original roots as
an undergraduate mathematician.

**David:** Hopefully, you can compile it to WebAssembly and run it on a Worker.

**John:** Maybe. Maybe, yeah. Maybe that's what I should do. Get it running
there, yeah.

**David:** And then the second question is, what is your current tech setup?
What hardware and software do you use on a daily basis?

**John:** So I have sitting in front of me a MacBook Pro, which I access
everything from. I have probably within striking distance of my desk here about
eight Raspberry Pis, because I love Raspberry Pis. I love anything to do with
microcontrollers, anything to do with small compute platforms. I have a house
full of gadgets made out of those kind of things. But the Mac has become my
world for a lot of things. And obviously, from there I can SSH into anything.
And I have various machines around the world if I need to run something there.
But more and more, I'm actually just using Cloudflare's platform to run things.
It's just easy and I don't have to worry about updating and scaling it.

**David:** Excellent. Well, that's all we've got time for, unfortunately. Where
can people find you online?

**John:** Obviously, Cloudflare is where I work, but my website is jgc.org. It
has various things about me. And obviously, Twitter is my primary sort of public
face, which is jgrahamc is my Twitter. And I'm very happy to interact with
people there. I do it on a pretty much daily, maybe even hourly, basis.

**David:** Excellent. Well, thanks for joining The Console Podcast.

**John:** It was very lovely to talk to you. Thank you so much for taking the
time to have me and inviting me, and I hope people think about this serverless
future and in particular tell us what we've got wrong, because I'm sure we've
got a million things wrong.

**David:** Thanks for listening to The Console DevTools Podcast. Please let us
know what you think on Twitter. I'm @Davidmytton and you can follow
@consoledotdev. Don't forget to subscribe and rate us in your podcast player.
And if you're playing around with or building any interesting dev tools, please
get in touch. Our email's in the show notes. See you next time.

{{</ box-collapsible >}}
