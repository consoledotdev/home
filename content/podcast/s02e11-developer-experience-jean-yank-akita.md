---
title: Developer experience
who: Jean Yang
whoLink: https://twitter.com/jeanqasaur
org: Akita
orgLink: https://www.akitasoftware.com/
what: 
    We discuss the software heterogeneity problem, why it isn't better to 
    rewrite in rust and how the language wars have actually been won. We also 
    explore how the big fight today is about infrastructure and why 
    microservices are the solution to the ever-growing complexity of software.
season: 2
episode: 11
date: 2022-03-17T08:00:00Z
duration: 33:51
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/b8afcf2e-a50a-46ad-8088-7a8f771a7f8c/audio/304e9877-5489-4d64-bd5d-c6b3cab57264/default_tc.mp3
draft: false
summary:
 Developer experience - a devtools discussion with Jean Yang (Akita). Episode 11 
 (Season 2) of the Console DevTools Podcast.
metaDescription:
 Developer experience - a devtools discussion with Jean Yang (Akita). Episode 11 
 (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
 largeText: true
topImg1Src: /img/podcast/akita-jean-yang-profile.jpg
topImg2Src: /img/favicons/www.akitasoftware.com.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/b8afcf2e-a50a-46ad-8088-7a8f771a7f8c?dark=true
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

In this episode we speak with Jean Yang, CEO of [Akita
Software](https://www.akitasoftware.com/), an API observability startup, which
she founded after leaving her role in academia as a computer science professor.
We discussed the software heterogeneity problem, why it isn't better to rewrite
in rust and how the language wars have actually been won. We also explore how
the big fight today is about infrastructure and why microservices are the
solution to the ever-growing complexity of software.

Things mentioned:

* [Zenoss](https://www.zenoss.com/)
* [Taming Go’s Memory Usage, or How We Avoided Rewriting Our Client in
  Rust](https://www.akitasoftware.com/blog-posts/taming-gos-memory-usage-or-how-we-avoided-rewriting-our-client-in-rust)
* [Splunk](https://www.splunk.com/)
* [Datadog](https://www.datadoghq.com/)
* [Prometheus](https://prometheus.io/)
* [Grafana](https://grafana.com/)
* [The Everything store](https://en.wikipedia.org/wiki/The_Everything_Store)
* [Zapier](https://zapier.com/)
* [Clay](https://www.clay.com/)
* [Zoom Bachelor](https://www.zoombachelor.com/) \-
  [https://www.zoombachelor.com/](https://www.zoombachelor.com/)
* [Zoom bachelorette](https://www.zoombachelorette.com/)
* [Vim](https://www.vim.org/)
* [#PLTalk](https://www.twitch.tv/jeanqasaur)

{{< rich-title-5 icon="future-head" >}}About Jean Yang{{</ rich-title-5 >}}

Jean Yang is the founder and CEO of Akita Software, a developer tools company
that is bringing structure to observability. Previously, Jean was a professor of
Computer Science at Carnegie Mellon University. Jean has a PhD from MIT, holds
software tools patents from work at Microsoft Research and Facebook, and was
selected as one of the MIT Technology Review's 35 Innovators Under 35 in 2016.

### Highlights

{{< podcast-episode/clipping time="12:39" >}}

**Jean:** The next generation of developer experience needs to focus on
complexity-embracing tools. How do we help developers accept and deal with the
mess that is their software systems? What I mean by abstraction tools is full
automation tools. This idea you can call an API, makes your problems go away.
You can use this low code tool, to make your problems go away. Those are great
individually. But then even if the sum total of your system is abstraction
tools, it actually is a much more complex problem now. Because what happens when
you have a bug? Where did it come from? How do you isolate it? How do you fix
it?

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="18:07" >}}

**Jean:** There's a lot of quiet power shifting. Who owns the
infrastructure and who owns data about your production deployments? That's who
is getting to call the shots about the tooling of the future. It's not the
languages, it's not the language creators, it is for sure, not the steering
committees of the languages. I don't know. I would love to see more fights
around that stuff.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:**  Welcome to the Console Podcast. I'm David Mytton, co-founder of
console.dev. free weekly newsletter highlighting the best and most interesting
tools for developers. If you've listened to season one, you'll be familiar with
Jean Yang, who rejoins me for the final episode of this season of the Console
DevTools Podcast. Jean is the CEO of Akita Software, an API observer as a
startup, which she founded after leaving her role in academia as a computer
science professor. We discussed the software heterogeneity problem and why it
isn't better to rewrite in rust, how the language wars have actually been won.
The big fight today is about infrastructure and why microservices are the
solution to the ever growing complexity of software. I'm here with Jean Yang.
Jean, it was great to work with you on season one. Welcome back to the new
format for season two.

**Jean:**  I'm super excited to be back.

**David:** For our listeners who haven't yet gone back through season one, tell
us a little about what you are currently doing and how you got here.

**Jean:**  I'm the founder and CEO of a company called Akita Software. We're
going after the goal of one click observability. You can call it no code for
observability. But the idea is software systems are getting more complex, it's
getting harder and harder to understand them, and we don't want people to need
to learn a whole new expertise just to understand are their endpoints falling
down? What endpoint is slow? What's going on across all of their APIs?

**David:** Makes sense. This is really about making easy for developers, which
kind of ties into what you've been talking about a lot around developer
experience. What does that actually mean?

**Jean:** I think one group of developers that I've been talking a lot about
recently is people who don't work at the fangs, the Facebooks, Amazons,
Netflixes of the world. They're not at a company where there are whole teams of
people. Whose whole job it is to make sure that developer productivity is good,
and that there's the tooling in place, or there's a whole team of people where
you can offload observability expertise. I've been talking about how process or
teams like that often looks a lot different than what the influencers are
saying, I think in the observability space. It's not surprising that this
happens is the people with the most expertise or the people with the most
developer privilege, shall we say, come up with techniques. That's where a lot
of the innovation happens.

The other thing is if you're just showing all of what's going on across APIs,
that's wire shark that exists already, and so how can you model what's going on?
But how this relates to my views on developer experiences, I think that tools
can do a much better job of meeting developers where they are. They can do a
much better job of meeting, quote, unquote, real developers where they are. I'm
not saying that your Facebook developer isn't real, but that's somewhat akin to
your influencer with the hair team and the makeup team and the stylist sending
them, your Balenciaga clothes, and then they just like snap a photo, I woke up
like this. No, your photographer did that.

**David:** They can choose the best tools or they can just choose to rewrite
things, kind of arbitrarily and spin up a new team just to focus on something
just because.

**Jean:** Exactly. They can choose rewrites. They can choose tools that are high
cost to adoption. Let's take any of the hot new tools. How do you get that to
work with your legacy code base? Either you spend a lot of time figuring out how
that interfaces, you spend a lot of time migrating or you don't adopt at all. If
you have teams to burn, not saying you're literally burning your teams, but you
can afford options one or two or three. Everybody else, they have option three.

**David:** What do you think of the idea of one tool to rule them all like AWS,
providing all of your infrastructure services rather than what I suppose a lot
of people do, cobble together, lots of different things.

**Jean:** One tool to rule them all is a great business dream. I think if you
end up being a monopoly like AWS, maybe that's achievable, and they're in it for
the long game. I think for most other things, I joked about a term I called
Xenos migration where migrations... They're not really discrete things if they
start at all. That's a big if, because something I noticed among teams that we
work with and talk to is they'll have the top of mind things that they're doing
right now. And then they'll have the migrations that they want next quarter or
two quarters from now. It seems a like for a lot of teams, there's always some
migration that's consistently the same number of quarters away, which I guess is
maybe not quite as migration, it's something else.

I don't know that AWS is winning there. Maybe I should say yet I don't know.
Time will tell. But I think for any other company that's not AWS if you think
about how they're adopting software, let's say the migration takes in the years,
is that company still going to even be dominant by the time the migration is
finished? Or is it just time to turn around and start migrating something else?
Really unclear. People love the narrative of silver bullets.

They love the narrative that there's going to be one language to rule them all,
and we're finally migrating onto that language, we're finally migrating onto
that infrastructure. But the reality is if we look historically, that's never
happened. There's been heterogeneity across programming languages,
infrastructures, tools. What happened is that I think believing in one language
to rule them all means not believing in progress, because if you really believe
that tools have frozen in time and that the set of assumptions that is the
starting set of assumptions for iterating on a tool or a language or something
like that is going to be the best historically that you ever do, given all
conditions, sure, then there's one tool to rule them all.

**David:** It applies to the idea of big rewrites then as well, because
developers often like to propose that as the way to solve problems of legacy
code. That they just don't like or tech debt and complexity. I assume the same
challenges applies there.

**Jean:** I think if you look at most cities, the houses don't get rebuilt every
few decades. One analogy I like to make is a software system is like an
organically evolving rainforest. Sometimes I guess you have controlled burns of
your forest. Maybe not the rainforest. Maybe I'm mixing my forest here. But you
don't raise your whole rainforest and start over most of the time. I think that
when software is small, people were in more of a planned garden mode. Now
software is like a rainforest or a city. I think the most interesting cities
have layers and layers of centuries of history. There are cities that were known
for their planned nature that were beautiful because they were planned at some
time. I think now it's getting pretty clear those cities are frozen in the
century where they were planned.

**David:** Startups had the luxury of making that initial plan, but it always
changes as you build, right?

**Jean:** Especially if you want to modernize. I think if... The best made plans
for knowing what you know, knowledge progresses, the tools progress. Do you
really want to be stuck in that?

**David:** How do you advise developers to deal with that? Because they often
don't like the legacy code and that's the reason why you're having to read
someone else's code. How can you shift your mindset to actually get comfortable
with working with these old systems?

**Jean:** Well, first of all, heterogeneity, it's a reality. Developers need to
accept and embrace heterogeneity when they're thinking about their system and
they're thinking about that hot new tool. That's not going to be forever. Maybe
you're new, maybe you have complete control right now, maybe you expect that hot
new tool to evolve. That's a lot of ifs, because for that tool to evolve, what
does it mean? It means the tool itself needs to evolve to the needs of all your
software. The community needs to grow at the rate of software progress, the
libraries, the tooling, everything. That's a lot of things to come together.

To me, the more realistic alternative is to accept heterogeneity, design, and
plan for heterogeneity. I think actually microservices are a great way to accept
heterogeneity because they allow you to quarantine your code in certain ways.
Put it behind an API, call it across the network, call it a day. But our
application level tooling... Most developer tooling is application level when it
comes to debugging, when it comes to managing complexity, when it comes to doing
a lot of things. That's getting outdated because most of those tools assume
homogeneity.

**Jean:** One thing that's hot right now is code search. Code search works best
in homogeneous environments. It works best if you assume you can understand the
code. If you plan for heterogeneity and you plan for the next thing I'm going to
talk about, needing to accept, which is codes should be block boxes. That
becomes really hard. Why do I think code should not just be accepted as
heterogenus but block boxes, is because of the rise of APIs, the rise of low
code, the rise of no code. If we look at all the trends that are big in software
right now, they are pushing us to think of code as block boxes.

You don't want to do payments called Stripe. You don't want to do SMS called
Twilio. You don't want to write part of your thing, or you have non-developers
working system with you, use Zapier. You don't see any of this code. This is
functioning with your other systems. We have Lambdas that are being invoked from
Zapier, they're interacting with other things. They're interacting using data
that is also being invoked with Zapier. I recently discovered that Zapier is
apparently my programming tool of choice based on how many days a month I spend
engaging with it. I have a computer science PhD. I think that people should give
up on understanding all of their code. They already don't understand the actual
source code for everything they run. It's only going to get worse. That's what
led me to work on observability, and observability in a block box way, because
that looking at what is, looking at how do we measure, how do we understand the
systems that we have, to me is the logical way to deal in the face of
heterogeneity and code being block boxes.

Our way is not the only way. I think that there are tools that help you get more
mileage out of your APIs, out of your code as you're writing it. But I think
tools that are cross language, that are natively cross language, and what I mean
is they were designed to be language agnostic, cross language tools, I think
that's going to become more and more important as we go. The more language
agnostic tools are the better they're going to scale to the complexity of modern
software.

**David:** Right. Because if you are consuming various APIs, they're all written
in different languages and you may not understand all of them. Just switching to
microservices that brings... It kind of shifts the problems, doesn't it? Because
you then have all these issues around observability and understanding what those
systems are doing and what you're depending on. How do you think about all those
challenges, and I suppose solving them?

**Jean:** Great question. I've written a bit about what I call abstraction tools
versus complexity embracing tools. One of my views on developer experience is
that we focused on abstraction tools. That comes with a set of things that I'll
talk about. The next generation of developer experience needs to focus on
complexity-embracing tools. How do we help developers accept and deal with the
mess that is their software systems? What I mean by abstraction tools is full
automation tools. This idea you can call an API, makes your problems go away.
You can use this low code tool, makes your problems go away. Those are great
individually.

What the software industry has picked up from general, I guess tech startups did
start in the software industry. But the general startup culture is we demo, we
show our value very, very quickly. If it takes few years to get into production
properly, who are you? But if you look at the tools that are actually helping
developers embrace complexity, they are engaging with the complexity of the full
system. They may not demo. Well, I don't know, show me a debugger with an
awesome demo.

I think that if you have all the context of the language and the bugs and
whatever environments you're working with, sure. A debugger, a demo can be jaw
dropping. But most of these tools are not sexy. I think that to properly embrace
this, we first need to change what people focus on. Because if software teams
are spending 95% of their early stage time on the demo, sure, you're not going
to get work on the complexity embracing stuff. And then I also think that it's
just a hard problem if you're fully automating something away. The design
problem is much easier, you own the whole space of what can happen. If you're
engaging with someone's mess, that's a hard problem.

**David:** It takes a long time to get to that end point. Often people shift to
a new technology before they've reached that goal. Very few environments that
have that full debugger now, and often people are just putting print statements
or console.log.

How much should the programming language do for the developer? As one side,
you've got C, which lets you do absolutely everything, and there are potential
risk in that. And then the other side is rust where there are a lot of
guardrails. What do you think about the trade offs and what should languages do?

**Jean:** I'll zoom out and say that I think that the language wars have been
fought and they've been won and some have been lost. I think the application
layer is just becoming increasingly small piece of the whole thing. I think that
languages can do a lot for people. The tools you have can do a lot for you.
Memory management really increase productivity by a huge amount among
programmers, but there's still people who need the power tools of managing their
own memory. I think rust is a beautifully designed language. I think it's done a
really good job of being usable, being friendly.

It's shocking to me that so many people would go back and do manual memory
management. I don't think it's necessary. In fact, one of my team members, Mark
Gritter recently wrote a blog post on how we avoided switching to rust just by
doing better performance engineering in our garbage collective language Go. This
is a bit of fired situation, but my kind of controversial view on rust is that
most people don't need it. When the trends move on, a lot of people are going to
be very happy they have memory management again. But going back to what I said
before, I don't know, I think these language war stuff are becoming a bit of
a... Well, distraction is kind of patronizing. But I think they're kind of a
distraction. Because look, our software system... There's so much going on with
our software systems.

There's infrastructure as code. Infrastructure is becoming complex enough that
it is programs now. Isn't that nuts? If we look at the place that had the
simplicity, that code historically had, that is infrastructure now. This means
we've zoomed a whole level out about what's happening. We're seeing
infrastructure wars playing out, except I would say still not with the level of
enthusiasm and vitreal as a language war surprisingly.

I once watch a documentary about how, in history in general, there's a lot of...
There's where the hype is, there's where people's attention is, and then there's
power shifting quietly behind the scenes. That power is happening in the
infrastructure wars right now. It's happening with the service mesh, it's
happening with API protocols, it's happening with everything that feels less
sexy and less important than the language wars I put my jobs in the language
wars daily. I am at fault here too. But there's a lot of quiet power shifting.
Who owns infrastructure and who owns data about your production deployments?
That's who is getting to call the shots about the tooling of the future. It's
not the languages, it's not the language creators, it is for sure, not the
steering committees of the languages. I don't know. I would love to see more
fights around that

**David:** Is that vendors fighting over the different components of the
infrastructure? Is it GCP versus AWS or is it specific components much lower
than that with the different vendors?

**Jean:** It's everything. It's who owns the cloud. It's who owns your
observability data. Right now I think there's interesting fragmentation across
your observability stack. Almost everyone I encounter who uses observability and
monitoring, they have an entire stack. There's Splunk, there's Datadog, there's
Grafana, there's Prometheus. No one has won it all. No one owns the whole thing.
There are various plays that, well, just give all of your data to us, we'll take
all of it. There are these conversations about how data rules everything and how
most of what's interesting about your software systems happen in production.

I think people spend a lot of time thinking about why aren't my software tools
better? The people who call the shots don't care. The people who are going to
call the shots in the future are the people who own your monitoring data, the
people who own your cloud. Push back against them now vote with your dollars,
with your feet. Who do you trust to control your developer experience in the
future? This is who you're empowering to do so.

**David:** Do you think that's a war between proprietary/cloud and open source?
Is that the battle?

**Jean:** I don't think it's between proprietary and open source at the moment.
David, we've talked about this before, but I think that the people with the
capital and the army of developers to fight these wars are all proprietary. Some
of them well, at least has open source. Open source is a strategy for them. But
at the end of the day, it's enterprise companies versus enterprise companies
determining the future of developer experience.

**David:** Does interoperability solve all that? You've written a little bit
about this and why it's important. Can you elaborate a bit on that?

**Jean:** If you think about tech stacks and you think about where languages
exist, I think that a lot of people still think of programming language
primarily as the application layer. But what about SQL? That's also a
programming language. What about your infrastructure as code? That is also a
programming language. The fact that these are programming languages is important
because program mobility means complexity. When you have complexity across all
of your layers, when you have your layers that are complex needing to play well
with each other, that's where interop across different components, interop
across your layers to some degree becomes very, very important.

**David:** Everything is becoming so much more complicated. Just trying to build
a very simple well application that has a front end and maybe a couple of APIs,
just the number of frameworks you've got to choose from and all the different
options available, it's quite overwhelming.

**Jean:** I think before, sure, when you had mud huts, you just wash your mud
hut away if something was wrong with it. But you don't wash whole cities built
on brick and stone and concrete away. You accept it. You grow on top of it.
People need places to live. Because the other thing is once you've built some of
these structures that are permanent, people come to rely on them and people come
to base their other plans and their daily routines and all that around them. You
can't just rip things out anymore. Planning a city is a very different game than
building mud huts and coordinating among small groups of people.

**David:** Does that mean that there's to your roles for the developer. First
one is connecting these different services together and just making sure they're
delivering on whatever the business goal is or the application goal. And then
the second one is specialization using their experience as an engineer to solve
a very specific problem that can't be solved by one of these plugable tools.

**Jean:** That's a really interesting point. I think there has been a lot more
specialization among developers. I also think that there's more than ever a role
for the glue developer, the full stack developer that's really good at putting
things together and orchestrating it and doing whatever it takes to make it
work. But back to the specialization point, I've been having some really
interesting conversations where I came up in an era where people were still
learning assembly as one of their first formal education languages that they
were taught. Systems programming was very important. Everybody needed to know it
in some sense because you needed to engage with low level systems. Things to
even make whatever you were building perform enough.

I remember in my machine learning class in college, I wrote all of my programs
in C. No one in machine learning is doing that in C anymore. The reason I was
doing it is because we didn't have that many assignments, but they were all
graded on, I guess how well we understood the models we built. I was just able
to run my models way more times than my classmates who had written in OCaml or
Python or anything like that. I was just able to collect way more data because I
was writing in C. Not even C++, C. I don't think that's necessary anymore
because... The decade I was in school, Google came up with all of this
infrastructure. That was the decade they made MapReduce, they made Bigtable,
they made the Chubby file system. They had to build all that from scratch.

**Jean:** People working on search engine had to do all that to make things
work. Same thing with Amazon. I was reading The Everything Store. My first
reaction, I will admit this publicly, was why didn't they just use, "Oh wait,
they built AWS to build this." People buy infrastructure now. They buy their
cloud, they buy their file system, they buy their data stores, they buy their
data streams. This stuff is not so necessary to understand how to build
yourself. Systems programming in itself has become a specialization. That's
different specialization than machine learning. That's a different
specialization than web. Yes, there's definitely a lot of specializations. And
then there's the rise of the powerful generalists. Before if you were so
generalists that you weren't deep into systems programming, there wasn't much
you can do. Now there's a ton you can do.

**David:** Why do you think the interesting innovation is happening then if a
lot of these problems at scale have been solved and then our APIs, you can just
buy in kind infrastructure services, where we're seeing the innovation in tech.

**Jean:** I think those will have some amount of traction as well. Will those
win? I don't know. This probably will come back to haunt me if I say, look,
heterogeneity is inevitable and there's always going to be new things. I think
things like that will always have some amount of market share. I think that
there will always be new adopters to adopt it. Whether they get replaced by a
new, new thing, I don't know.

**David:** Well, before we wrap up then I've got two lightning questions for
you. The first one is what interesting dev tools are you playing around with at
the moment?

**Jean:** I realized that I'm a Zapier. I'm a Zapier primary programmer these
days. I'll give you an idea of what my role is. Now I spend a lot of time
talking with developers, understanding what they want. My main role at my
company is really product person part, developer advocate part. Just a person
who engages with a developer. A lot of my time isn't spent developing these
days. For our main command line agent or how we collect data, that I don't
really touch that stuff. It doesn't make a lot of sense for me to touch that
stuff. But I have a lot of other things that I manage, like our developer sign
ups, developer onboarding, keeping track of what developers are up to.

**Jean:** We're also trying to build our team. Being able to programmatically
manage data about who's out there, who's out there in spaces we're interested
in, how can we find them easier? A lot of my work is basically calling APIs
using Zapier, and putting together workflows. I could have written a series of
scripts to do this, but Zapier gives me a bunch of tooling that I wouldn't have
otherwise. They let me rerun. They tell me when there are errors, they give me
summaries of what got run. I get emailed updates. I get slack updates. The team
gets updates whenever things happen. I used to scoff a lot about low code for
people who knew how to code. I used to scoff a lot about, I don't even need
types anymore. I know how to do this stuff. Here I am realizing that my primary
tool is a no code, low code tool. I've also tried out some other ones.

**Jean:** I met this company called Clay through investors I'm trying to dig
into. Who's starring us on GitHub? Who's following me on Twitter? That kind of
thing. Through loading things into Clay spreadsheets. That I would say, what I
want to do is still somehow in between... I've tried community tools like Orbit.
I think that what I want right now is still more specialized than that. I've
been trying to see how I can do it with Clay. I might have to Zapier it myself.
But I think the most surprising thing is I went from teaching myself languages
like Haskell and Idris in my free time to just doing no code.

**Jean:** I just use Zapier. We pay for the Zapier that allows for more stuff.
I'll say I have a whole other set of things. I use type form for my forms. I
don't like code the front end and backend for my forms, but I pay for the type
form that lets me have all of the complex conditionals and jumps and stuff like
that. Because I'm like, well, this is a program. And then I debug it like a
program. I test it. I test all the corner cases. I do all the stuff. Sometimes
I'm like, how does someone who isn't a very experienced engineer use this stuff,
there's a lot of corner cases here.

**David:** That's all in the browser. Right? But when you are actually coding
your Vim user.

**Jean:** I'm a Vim user. But I only use Vim for random Python scripts I run to
do stuff now. I will say I've just been in the browser with my low code tools.
But those low code tools, if you want to do crazy stuff and if you want to do
stuff that pushes the boundaries of your tools, which I think I've always tried
to do no matter what I've programmed in, you still have to apply engineering.

**David:** Excellent. Well, that's all we've got time for today. Where can
people find you online?

**Jean:** I'm mostly on Twitter. I'm @jeanqasaur on Twitter. I've been doing a
weekly Twitch livestream as well, called PLTalk. But if you follow me on
Twitter, you can get that too. I'm the same handle on Twitch.

**David:** Thanks for coming back on the Console Podcast. Good to chat again.

**Jean:** Thanks, David. Great to talk as usual.

**David:** Thanks for listening to the Console DevTools Podcast. That's it for
season two. Let us know what you think and who you'd like to hear from in the
next season. I'm @davidmytton on Twitter. You can also follow @console.dev.
Don't forget to subscribe and rate us in your podcast player. We'll see you
later in the year.

{{</ box-collapsible >}}
