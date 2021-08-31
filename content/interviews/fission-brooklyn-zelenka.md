---
title: Interview with Brooklyn Zelenka, Fission
who: Brooklyn Zelenka
role: CTO
org: Fission
what: Decentralized app backend.
tags: ["Backend framework"]
date: 2021-08-21T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Brooklyn Zelenka, CTO, Fission.
isPage: interviews
topImg1Src: /img/interviews/fission-brooklyn-zelenka-profile.jpg
topImg2Src: /img/interviews/fission-brooklyn-zelenka-logo.png
ogImg: /img/interviews/fission-brooklyn-zelenka-desk.jpeg
---

### What is Fission and why did you build it?

[Fission](https://fission.codes/) is building the future of web apps at the
edge- it lets you build full, complete applications with only frontend skills
without having to write or maintain a server.

My co-founder, [Boris Mann](https://twitter.com/bmann), and I were coming out of
the Web3 space doing a lot of things with blockchains and saying, "Well, okay,
this stuff's all interesting, but very few people can actually use this. What if
we applied the same techniques outside of a blockchain context to the 99% of
developer problems. We thought we'd see what would happen if we completely
flipped the architecture and rethought the constraints for today, because things
have changed a lot since the web started in the late '80s / early '90s.

I’ve seen the same patterns over and over on web projects. Building a production
app today requires a lot of moving parts. There are now separate disciplines for
(at minimum) frontend, backend, and SREs/DevOps. Teams need to develop talent
and grow to cover all of these specialties. The distance between the end user
and much of the team is only growing as we have this tower of technologies.

As a full stack developer myself for many years, I witnessed the overall
complexity of applications that are about a user wanting to display, edit, and
share data. Teams want to iterate on problems, which requires staying nimble and
close to the end user. This can become challenging when you’re waiting on a
database change to be reflected in the [GraphQL](https://graphql.org/) layer
because the auth roles need to be updated after the production migration.

Fission helps you use frontend skills to ship full apps, without needing to
build and maintain servers. It empowers teams to ship more with less, and “make
the right thing the easy thing”. 

Our hope is that we could let people do more with less. Let smaller teams
compete with larger teams, and let people, even individuals, own their own data,
build little websites, have small businesses, maintain things and not need a
team of 30 engineers to get going.

{{< img-center
src="/img/interviews/fission-brooklyn-zelenka-product.png"
alt="Fission product screenshot"
width="100%"
caption="Fission Drive for user data storage."
>}}

### How do developers approach building with Fission?

Everything runs local-first. The constraints that we've set is that everything
has to work directly in a browser with no plugins, no extensions, without
degrading the user experience or security.

An end-user shouldn't even know that something interesting is happening, but for
the developers, it should be radically easier to build and run. You should be
able to have everything run totally offline.

If there's another device making changes, when you both come online they should
reconcile all of these things. The network latency really dominates when you
start looking at performance in applications.

If I'm going to send something to a server to pull some data out of a database,
process it and send it back to me, the long part isn't the computation, it's
sending stuff over the wire. If we can take network latency to zero as a
default, things will move very quickly. 

My iPhone has way more computing power than my first laptop ever did. These
things are very, very powerful, capable devices. Other than data locality,
there's no reason to ship data around, so we got rid of the data locality
requirement. We deal with the vast majority of compute locally. Aside from
checking if this person is actually allowed to push this new data, we
essentially do nothing on the server. Everything's done directly on the device. 

### What are the use cases for Fission? 

Like all emerging or new technologies, they take some time to catch up, and then
surpass what's there. For anything that's more of a transactional process or if
you want to make a post on social media, that kind of thing. All of that's
doable today. 

Fission lets you ship apps 10x faster. It lowers barriers to entry by only
requiring frontend skills. It helps you focus on the parts that are absolutely
essential: data and UI.

Due to these constraints, Fission takes a different approach to a lot of
problems. This leads to several additional features, including end-to-end
encryption and encryption-at-rest, user-owned accounts, passwordless logins,
global serverless files, file versioning, and offline support (among others),
all out of the box.

The interesting thing that this enables is edge computing. There's some changes
coming to the actual physical layer of the network in the next couple of years,
and this isn't just us hoping or guessing at this. Gartner, IBM and all these
big companies are doing research saying, "Three quarters of all computing is
going to happen outside of the cloud by 2025," which is very soon. With things
like 5G networks, [Starlink](https://www.starlink.com/) and new systems where
there's quite a lot of bandwidth, you can start really lowering even the latency
between systems.

You start hitting the physical limit of the speed of light very quickly. When
you have 40 millisecond and lower latency, you open up a lot of use cases. We’re
already seeing the use of sensors growing very quickly, and the volume of data
is enormous, and they need to be able to react in realtime. This makes things
like IoT a good use case, even though that wasn't our original intention.
Self-driving cars, extended reality, all of that work really well in this model.

When you get down to about 8 milliseconds, you can start doing all kinds of
stuff where the data getting crunched locally on a device can instead be pushed
out to compute resources that are literally across the street, next to the 5G
receiver. It feels completely transparent because it's an 8ms round trip. If
there isn’t one, then have the device to run it locally.

All of these interesting new things fall out of this. Now that I don't need to
maintain a server, data is owned by the user, compute can happen anywhere, the
end use cases beyond what’s possible today start opening up.

### What does a "day in the life" look like for you?

I don't know if I have a typical day. I end up bouncing between a lot of tasks
and contexts, switching quite a lot, which took some getting used to. For deep
work, I still try to defragment my calendar, so I'll usually try to take the
afternoon with as few interruptions as possible. I split my time between coding,
research and calls where I do team check-ins and talk to investors. 

We participate in some standards bodies for the tech that we use, such as [The
Decentralized Identity Foundation](https://identity.foundation/). A lot of our
stuff is a really nice fit for a lot of the other members. We're looking at
standardizing a lot of what we’re building.

Boris, my co-founder, handles most of the external facing stuff so I'm more
internal facing. I try to get chunks of unbroken time to do code or review PRs,
but the most valuable time is doing the research part of R&D and figuring out,
"Okay. Well, we don't have a central server. How are we actually going to make
the data sync up? What's the most efficient way to transmit changes in some
data?" 

We're fundamentally rethinking how web apps can be built. That means big chunks
of this time is spent trying things out: prototyping, writing a spec, talking to
the team, seeing what ideas they have, what parts can be integrated, balancing
trade-offs and seeing what works best.

### What do you think about the risk that you’re still quite early as a business?

From very early on, we decided that everything we would do is open source. You
can run your own Fission stack. For convenience reasons, probably people mostly
won't, but if they want to, we actively encourage them to do so because of the
way that a lot of the underlying technology works. It federates very easily.

With more people running both [IPFS](https://ipfs.io/), which is the underlying
networking and data stack (with our own additions), the availability of the data
is growing. It lowers our hosting costs because other people are also hosting
the same data. We've even thought about shipping people Raspberry Pis with the
complete stack on it, so you can just plug it in at home and run your own stack.

Standardization would be nice to inter-operate with some of the other people in
this space. If we get spec adoption, that's just having a good impact on the
world. We want people to run their own. We don't charge people today, but the
eventual plan is to charge for services, domain names etc. We see this as more
of a collaborative approach to the ecosystem as opposed to a winner takes all.

### What is the team structure?

There’s seven of us right now. Five engineers, our CEO and our head of product.
As you might imagine, it's very engineering heavy. People will talk to our CEO,
Boris, and think that he's a senior engineer, but he doesn't actually do any
active coding these days, he's the least “technical” on the team, but needs to
be able to think about the system in a detailed way, and communicate these ideas
to folks that aren’t with us in the R&D mines.

On the engineering side, aside from myself, we have someone focused on the
developer experience, someone that's more research focused and two that are
responsible for building the actual SDK and sample apps, so that people can get
a sense of how to use these things. Everyone wears a lot of hats at Fission, but
we’re roughly split between raw R&D to solve the underlying problems, and making
it a good experience for teams to adopt. 

### How did you first get into software development?

I fell into it pretty much by accident! It’s a bit of a winding story, so here’s
the short version:

I studied classical music in university, where I developed some Photoshop and
Illustrator skills to help with concert posters and pamphlets for my classmates.
After dropping out, I leveraged my skills as a graphic designer and worked a few
jobs doing that. Eventually I found myself at a startup. They asked if I would
be willing to pick up some frontend skills to help out, and sent me home with a
couple books over a weekend. It turns out that I was a better programmer than
designer, so I ended up switching careers!

That company was using a JVM-based framework for the backend — the selling point
was that you could mix various languages together for different tasks. The idea
was to “use the best tool for the job”, which in retrospect was more like “for
everything and nothing”. I ended up picking up a bunch of languages very early
on, like [JS (Rhino)](https://github.com/mozilla/rhino),
[Clojure](https://clojure.org/), [JRuby](https://www.jruby.org/),
[Groovy](https://groovy-lang.org/), [Jython](https://www.jython.org/),
[Java](https://www.java.com/en/), and a few others. I found that I had a knack
for languages, and started to really delve into PLT and falling in love with
functional programming in particular.

### What's the tech stack for Fission today?

The vast majority of things that people would actually touch are written in
[TypeScript](https://www.typescriptlang.org/). A lot of that will be getting
migrated to [Wasm](https://webassembly.org/) over time. For today, we want
things to also work on [Node](https://nodejs.org/en/), hence TypeScript.

Most of our first party apps are written in [Elm](https://elm-lang.org/). On the
backend it's [Haskell](https://www.haskell.org/). Our infrastructure runs on
AWS, and we're using the Golang implementation of IPFS.

### What's the most interesting development challenge that you faced building Fission?

Everything we do has to work in a browser with no extensions, without UX or DX
degradation, or security flaws. Architecture without assuming a central server
as the source of truth is very different, and the browser is an extremely
hostile environment. This has forced us to innovate in a number of areas
(“necessity is the mother of invention”).

This shows up in a plethora of ways, but to name a few: Access control has to
work locally, baked directly into data with encryption at rest. Accounts
originate from the user’s device, not an OAuth server, and finding a consistent
way to refer to data when there’s no database primary key.

### What’s the most interesting tool or tech you’re currently playing around with?

[Nix / NixOS](https://nixos.org/). We've ended up using it at Fission as well,
even though this was more a side thing for me. Some of the other engineers also
got interested in it. and so we've just adopted it now. 

It’s essentially a declarative package manager, but it also plugs into build
tools and scripts and ops. It is, by far, the best of that suite of tools I've
ever used. I use it to manage my Mac, and run a NixOS server.

I can't imagine going back to ad-hoc dotfiles and conflicting dynamic libraries
and changing versions of Node for different packages. Now, I'm in my Nix shell
and everything works, I don't have to mess around with anything. The main
downside is the documentation isn't quite there yet, but once you get over that
hurdle, it's really lovely.

### Describe your computer hardware setup

I have two setups. Pre-COVID, I was on the road a lot, so would typically travel
light with just a MacBook. I now have a M1 MacBook Air. I tend to use just the
main built-in keyboard when I'm on this machine.

The other setup is actually the one that I prefer. Whenever possible, I
[mosh](https://mosh.org/) into a DigitalOcean NixOS machine from my iPad Pro
using an app called [Blink](https://blink.sh/), using
[Tailscale](https://tailscale.com/). I have an Anne Pro 2 mechanical keyboard
with the really clicky blue switches which drives everyone around me to rage,
and a [Microsoft
Arc](https://www.microsoft.com/en-us/d/microsoft-arc-mouse-black/8mwhbv8qvskr)
mouse, which is a little bit like a slap bracelet in mouse form. The M1 Air is
just a spectacular machine, but the iPad setup has been my favorite, partly
because I have a little stand for it, which is so adjustable. 

I have an old neck injury, and so being in a more upright position really helps.
I can also switch modalities to the Apple Pencil if I need to take some notes or
draw a diagram and it's just right there. I don't have to mess around with the
trackpad or a mouse which is fantastic.

I was not sold on the idea of an iPad when it was first released, but it's
really become by far my favorite device. I wish Apple would stop welding the lid
on this thing shut so that we could install things on it, but that'll never
happen.

### Which one are you coding on?

Both. On the iPad, I'm remoting into the NixOS machine. On the Mac, I tend to
work locally. But because they're both managed with Nix, I have the same config
on both.

### Describe your computer software setup

**OS:** macOS and NixOS.

**Browser:** Firefox Developer Edition with [Vim
Vixen](https://addons.mozilla.org/en-GB/firefox/addon/vim-vixen/) so I get the
Vim bindings.

**Email:** Gmail, plugged into [Missive](https://missiveapp.com/).

**Chat:** Discord.

**IDE:** Emacs.

**Source control:** Git + GitHub.

### Describe your desk setup

No fancy chair. I try to keep my setup fairly light. I have an iPad stand for
when I'm using the iPad, and have a little portable riser for my laptop. When
it's not COVID I like to work from cafes a lot so I bring that and just lift it
up a bit and use it with the mechanical keyboard.

I have an Ikea adjustable standing desk. I used to work at a desk really
consistently, and I'm finding these days, especially as I'm working from home as
opposed to offices or cafes, I'm now standing, sitting and laying down quite a
bit more. Reclining on the couch, and then switching to a table, and then going
to the standing desk. Switching between those as needed.

This has been surprisingly good for me physically. As I mentioned before, I have
this neck injury of a compressed disc in my neck. For almost a year, I couldn't
look fully to the right, and keeping my neck in a still position was required,
but that made everything very stiff. I'm finding even just the change throughout
the day has been very helpful. 

{{< img-center
src="/img/interviews/fission-brooklyn-zelenka-desk.jpeg"
alt="The desk of Brooklyn Zelenka, Fission"
width="100%"
>}}

### When coding

**Daytime or nighttime?** Nightime.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

My biggest hobby right now is building an 8-bit computer from scratch!

Outside of tech, I really enjoy both cooking and fermenting things. A lifetime
ago I worked in a kitchen and that felt like work for a really long time. I've
been doing a classic French cooking course which has been fun. I have also been
brewing ginger beer and tepache, tweaking different spices, that kind of thing.
I'm getting very excited about braising things lately.

### Find out more

[Fission](https://fission.codes/) is a decentralizd app backend. It was featured
as an "Interesting Tool" in the [Console newsletter](https://console.dev) on 26
Aug 2021. This interview was conducted on 21 Aug 2021.
