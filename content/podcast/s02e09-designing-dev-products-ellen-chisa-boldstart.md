---
title: Designing dev products
who: Ellen Chisa
whoLink: https://twitter.com/ellenchisa
org: Boldstart
orgLink: https://boldstart.vc/
what: 
    We discuss whether that is the right way to think about coding, where no 
    code or low code fits into the modern development stack, how developers should 
    think about open source and the challenges of building dev tools versus getting 
    developers to actually use them.
season: 2
episode: 9
date: 2022-03-03T08:00:00Z
duration: 32:45
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/428ff543-da40-40c3-9772-31c5496cac63/audio/a98e5b20-4bed-44a2-87f5-acf98c8dfb40/default_tc.mp3
draft: false
summary:
 Designing dev products - a devtools discussion with Ellen Chisa (Boldstart). 
 Episode 9 (Season 2) of the Console DevTools Podcast.
metaDescription:
 Designing dev products - a devtools discussion with Ellen Chisa (Boldstart). 
 Episode 9 (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
 largeText: true
topImg1Src: /img/podcast/boldstart-ellen-chisa-profile.png
topImg2Src: /img/favicons/boldstart.vc.png
ogImg: /img/podcast/podcast-cover.png
twitterCard: https://player.simplecast.com/428ff543-da40-40c3-9772-31c5496cac63?dark=true
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

In this episode we speak to Ellen Chisa, who was previously CEO of
[Dark](https://darklang.com/), a programming language startup that allowed you
to focus on your backend code and forget about frameworks, deployments, and
infrastructure. We discuss whether that is the right way to think about coding,
where no code or low code fits into the modern development stack, how developers
should think about open source and the challenges of building dev tools versus
getting developers to actually use them.

Things mentioned:

* [The Self Provisioning Runtime - Shawn
  Wang](https://www.swyx.io/self-provisioning-runtime/)
* [Bret Victor](http://worrydream.com/)
* [Chris Granger](https://twitter.com/ibdknox)
* [Lambdragon](https://twitter.com/thelambdragon)
* [Future of Coding](https://futureofcoding.org/)
* [Steve Krouse](https://stevekrouse.com/)
* [Dark](https://darklang.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Azure](https://azure.microsoft.com/en-gb/)
* [Red Hat](https://www.redhat.com/en)
* [MongoDB](https://www.mongodb.com/)
* [Elastic](https://www.elastic.co/)

{{< rich-title-5 icon="future-head" >}}About Ellen Chisa{{</ rich-title-5 >}}

Ellen Chisa is a founder, angel investor, and engineer. She created Dark, a
programming language coupled to its editor and infrastructure. Previously, she
was the first employee at Lola, combining the best of technology and people for
travel planning. Ellen Chisa is currently a Founder in Residence at Boldstart
Ventures.

### Highlights

{{< podcast-episode/clipping time="01:20" >}}

**David:** ...

**Brooklyn:** ...

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console Podcast. I'm David Mytton, co-founder of
console.dev, a free weekly newsletter highlighting the best and most interesting
tools for developers. In this episode, I speak with Ellen Chisa, who was
previously CEO of Dark, a programming language startup that allowed you to focus
on your backend code and forget about frameworks, deployments, and
infrastructure. We discussed whether that is the right way to think about
coding, where no code or low code fits into the modern development stack, how
developers should think about open source and the challenges of building dev
tools versus getting developers to actually use them. We're keeping this to 30
minutes. So let's get started. I'm here with **Ellen:**. Ellen, thanks for
joining the Console Podcast.

**Ellen:** Thanks for having me. I've been looking forward to this all day.

**David:** Let's start with a brief background then. Tell us a little bit about
what you are currently doing and how you got here.

**Ellen:** Yeah, I've always been interested in both how people learn things and
then also how they go about building things. It kind of started from, I did a
lot of robotics in high school. I went to Olin College of Engineering in
Needham. Currently famous for a bit of controversial Facebook whistle blowing
alumni, but normally famous for trying to have people work on project based
learning rather than problem sets. And then from there, spent a bunch of time at
other companies who kind of thought about the same things, some time on OFS
mobile, some time working on Kickstarter. The awesome foundation did a brief
detour to do an MBA. And then most recently started a company called Dark, which
was a programming language integrated to its editor and infrastructure.

**David:** Okay. So one of the big ideas behind Dark was that the language and
the framework would be tightly coupled to the infrastructure, so that developers
essentially didn't have to think about it separately. What's your take on that
today?

**Ellen:** I still very much believe in that as a concept. So I guess today,
actually what I'm doing is I'm founder and residents over at Goldstar ventures.
And so that means I could spend most of my time kind of in conversations like
this, talking about interesting things in the future of tooling. And so I
definitely still think that should happen. There was a great article from Sean
Wang, Swyx recently about the idea of self provisioning run times. And so I do
really think at some point infrastructure will be part of the batteries included
that we consider when we consider languages, particularly for web development.

**David:** And how do you think that has changed since- I suppose Heroku was one
of the first platforms that tried to tie everything thing together, but now
developers are tying all their components from different projects and sometimes
different companies as well.

**Ellen:** It's interesting. I feel like I'm seeing more overlap between people
who are interested in pushing the state of the industry forward with people who
are actually tangibly building companies. So at a long time, I feel like
pre-Dark people only really talked about Brett Victor's work or about what Chris
Granger was doing at Eve. And so we did a lot of experimentation, but that was
more experimenting for the sake of where could we go rather than saying, "We're
going to do this experiment and have a company around it at the same time."
Whereas today I think we see a lot more integrated environments. So nado.dev by
Paul Shine is one which is kind of a Dark-like canvas where he is focused on
having JavaScript or Aldo is working on lamb dragon, which is the same kind of
concept but for TypeScript and integrated into VS code. Steve Krause from the
future programing community is doing stuff there. And I really actually even
think all of the companies that are popping up around notebooks and using
notebooks as part of how we think about our code are kind of moving in the same
direction as well.

**David:** And do you think that is what developers are looking for? Do you
think it kind of damages the idea of flexibility being able to drop and drag
things in to replace things that are not working or do you think kind of pushing
everything down more of a rails route is the way to go?

**Ellen:** I don't think there's one right answer to this. I think it kind of
depends on what you're doing and what is required of it. So the advantage of
having a fully integrated thing is you don't have to think about all of the
interfaces between the different components and you get some benefits out of
having that. In Dark, one example of that was because you had the real data, you
could actually see what every expression evaluated to as you were writing it.
And so that's something we usually only see in learning languages. And that was
very helpful and unique to the platform. On the downside, that meant you were
stuck with whatever built in data store existed and you might have preferred
something different. They were basically just key value stores and obviously
some people wanted a relational model instead. And so from that, I think it will
always depend on what an individual developer is trying to build. And which of
those trade offs they'll make, like anything else.

**David:** Because even looking at the AWS portfolio there, if you just click on
the databases tab, they've got a lot of products there and there are so many
different options for developers to choose from now, having that portfolio just
to pick the right thing, seems like giving developers, the flexibility is the
right option. But if you've got a framework where everything ties together
nicely, then you just get things out of the box and it's a lot easier to begin
with.

**Ellen:**Yeah. And I think, especially as companies get larger, there becomes a
point where you have enough developers on the team where doing that
specialization and going really deep on a topic matters. But especially at the
beginning, or if you're doing something where the infrastructure isn't a unique
part of the differentiation for your company, you don't necessarily want to
worry about all those trade offs.

**David:** And I suppose as project scale, that's where you start needing to
specialize the components. No code survives more than a couple of years in
production. You're always rewriting things. And it's always a big challenge
developers face of rewriting for the sake of it versus rewriting because there's
a business need or even a technology need.

**Ellen:** Yeah. I think that's actually, since you mentioned, right. I think
that's one thing we all struggle with is there is the right answer to a given
problem, but I think right answers only truly exist when you consider the
context. And so sometimes you are going to write worse code because it's faster
and it's important to get the thing done now, or you'll take on that technical
debt, or you will agree that you're going to have less options to customize, or
you will agree that this tool isn't the best possible version, but that can
still be the right answer, even if it's not what we would think of as being
technically correct.

**David:** I suppose that's almost similar to the idea of correctness in
software and that's one of the big appeals of Rust in that you're investing up
front and it might take longer to do the development, but the idea is you're
avoiding a lot of bugs and memory and security issues down the line, but then
you could argue that's at the cost of speed and being able to get things in the
production, particularly for startups, is really crucial. Don't you think?

**Ellen:** Yeah. It's one of those things where you only feel the pain of having
chosen the wrong language if it works well enough that you then have to redo
something. And so to some extent, would you have ever felt that pain, if you
hadn't made the technically incorrect choice at the beginning? Would you have
been able to go fast enough to get there?

**David:** Yeah, absolutely. I suppose, on a similar line, what do you think of
the idea of no code or low code and where that fits into the modern development
stack?

**Ellen:** Yeah. I tend to think of this more as a- I wish that this worked more
like a spectrum rather than someone saying, "I'm going to use a no code tool,"
or, "I'm going to use code." What I really care about is being able to compose
things into the right level of abstraction for someone who's looking at it. When
you think about that, you can imagine that the level you want to think about say
off, on is different, depending on who you are. If you're an average person,
just has an idea for software and you just want to have login, you're like, "Oh,
I just want off to work." And that's really all you want to think about. Whereas
there's a huge range down from there of you care about thinking about the O off
flow yourself, or you care about building a company that provides off and you
start to get into very different levels of that. And I think having a set of
tooling, such that different people can interface with it at the level that's
appropriate for them is where I hope we go over the next 10 years.

**David:** Right? And that's, I suppose what AWS calls undifferentiated, heavy
lifting. And there's a lot of things that are not really your core business,
that you should just hand off to someone else until you get to the scale where
you can really get competitive advantages from that. And we're seeing more and
more of those in the software side of things and logins dealing with permissions
and queuing databases. Everything now is starting to be picked away at different
startups. Where do you think the limit is with that? How far can it go?

**Ellen:**In terms of how many of your services you can outsource to other
people instead of building them yourself?

**David:** Until you get to the point where you've almost outsourced everything?

**Ellen:** I actually think that would be okay. I think a lot of the work we do,
and I think Gina said this before, too. It's how do you put those pieces
together in a way that matters for what you are building? It's not necessarily
everyone building each component themselves. I would be completely happy if we
ended up in a world where there are engineers who build those specialized
components. And we all work at primarily developer tooling companies, but that
most businesses, rather than having to employ their own large engineering teams
can have smaller teams that glue those permanents together.

**David:** Right, so that's the idea of low code or no code, right? So that the
undifferentiated aspects of building an interface for your support team or a
billing interface that every company has to have internally, all that stuff that
helps you run your business. Do you really need the top engineers internally
building those tools that don't actually create differentiation? Or can they
focus on making sure your product is innovative and they're actually building
the fun stuff that developers like to code on?

**Ellen:** Yeah. I mean, I think that's challenging too. I think what we think
we like to code and what we like to code actually might be different things.

**David:** Right, so it's like kind of the side project that people hack on at
the weekends versus things that are differentiated and actually have business
value for wherever you're working?

**Ellen:** Yeah. Sometimes the thing that creates the most business value, isn't
the most exciting thing to build. I guess I'm thinking of, with Dark, we had an
engineer Sydney who built the entire onboarding flow, which to a large extent
was like, "Oh, these are where widgets should pop up at a given time to
introduce a specific concept. And this is how we should do it such that it's not
annoying." And most products need some sort of interesting onboarding flow, but
I don't think that's the most technically fun thing to build, even though it was
really critical to what we were doing.

**David:** I suppose this comes into the product management aspect of how you
build tools in general and then building tools for developers. How would you
approach that? And in particular, given that developers are building developer
tools, which they may well use themselves, do you actually need a product
manager?

**Ellen:** It depends. I think a lot of developers really enjoy building. That's
the most classic product answer, by the way, I feel like anytime you ask a
product manager, something, they'll say it depends. But so if you're building a
tool that's primarily for yourself, so right before we hopped on this, I was
working on putting together a script to pull my Google calendar agenda into
obsidian in the exact format I want.

**Ellen:** And so for something like that, the only user is me. And if someone
else is like, "Oh hey, I happen to want this same exact calendar workflow." It
would be fine for them pick it up, but I'm not building it with the idea that
other people will use it in mind. And I think lots of developer tooling gets
built that way. And it's great. I think the issue is, especially as you continue
to build the tool and you want other people to adopt it, the type of people who
tend to enjoy tinkering on tools and wanting to optimize their workflows are
inherently a somewhat specialized group of people. If you spend all of your time
thinking about how your tool works today and how you want it to work, that's not
what most people are doing. And so you become inherently different from your
user. When you start to think in that mode.

**David:** It's almost a difference between people who buy Apple products
because supposedly they just work and arguably most of the time they do, and
people who are into the Linux ecosystem and wanting to customize absolutely
everything.

**Ellen:** Yeah. I will happily customize my set of tooling for software
development or for taking notes or for whatever it is to get to the exact right
answer for me. But most people just want something that's good enough and will
get the job done and they're not sitting there optimizing it. And I think that
jump as a developer tools company starts to grow, tends to be when you need
someone else to be also thinking about product and what the end users want, not
just answering your own problem anymore.

**David:** With developers being the customer of dev tools companies. How do you
see their interaction working in terms of user experience and understand the
idea behind developer experience? What's your take on that?

**Ellen:** Yeah, what we were just saying, the most important thing is for the
team to understand how they're the same or different from the developer who is
using the product. Dark actually is a great example of this. There were two sets
of developers who enjoyed and were interested in Dark. There were definitely
people who were just interested in the future programming, which technologies
and had a lot of opinions and were excited about how might the type system work
here and wanted to get into the nitty gritty of a lot of the trade offs we've
made.

**Ellen:** On the other hand, there were people who weren't necessarily the
strongest engineers. They just wanted to get something done. Maybe they were
more comfortable on the front end. Maybe they were even on the product or say
the data science side. And they had enough fluency to write scripts, but didn't
want to spend a ton of time. And the types of feedback from those two user
groups were completely different. And so a very important thing was keeping the
engineering team in sync with when feedback came in, which of those personas it
was coming from and how it made sense or didn't make sense at that moment in
time.

**David:** So you had specific personas to differentiate between those two
groups. And were you trying to prioritize a particular one based on your
understanding of who your audience was? I think

**Ellen:** That was always a challenge, particularly in tools in this space, we
tend to run into this. I think we often with these tools optimized for people
who are like us, who also care about building these tools and we end up pretty
far away from where we are today. One of the things I think about a lot more now
is how do we think about where we want to get to in 10 years? And then what are
the gradual steps that're going to happen to get us to that future reality,
where all our tools are integrated.

**David:** And you think that is where we're going? Full integration of
everything. Do you think that's going to come in the IDE or a terminal or
somewhere else?

**Ellen:** If I were to guess today, I would probably say in the IDE. I feel
like we've seen huge shifts even just in the last five years. So at the
beginning of Dark in 2017, people were still saying developers will never switch
editors. And then we saw the huge uptick in VS code. And then even after people
started agreeing that people would switch editors, everyone said people wouldn't
want their editor in the browser. And now we're seeing another round of that
with code spaces and that ties things more closely in the environment as well.
And so I think we keep seeing that editor extensibility, obviously while it's
always been a thing I think has continued to proliferate and continues to be
something we see. I think it's been really interesting to see command to line
type interfaces populate out into other products as well. Not just products for
engineers. I do think we're heading in that direction.

**David:** Whereas the command bar, that's why everyone sees the Command-K or
Control-P and you can then control the interface that you're working in.

**Ellen:** Yeah. That's another example of how you can think about building
things up over time, where often products will still have UI elements that lets
you learn those. And then as you become more accustomed, you will gradually add
one more hot key to your workflow. And then three years down the line, you never
have to touch them out, because you've memorized everything, but it's nice that
you can add it piece by piece rather than I think historically we tended to say,
we have an expert interface or we have a novice interface and we didn't have
that steady on-ramp for people.

**David:** What do you think it was that Microsoft did so well with the S code
that managed to become so popular?

**Ellen:** That's a great question. I think to some extent they're also just
riding on a couple other waves. So I think one is just, we have more and more
developers now. And so I don't think VS code did a great job of taking people
who had been hardcore vim or emacs users for 15 years and moving all of those
people over right away. But as we get more developers who are entering the
ecosystem, they're willing to pick up something new. And so I think they
probably did a very good job of reaching out to that community. On top of that,
I would guess that they probably, just since JavaScript is the most popular
language people use and people in the JavaScript ecosystem, since the frameworks
change fairly often to some extent, seem more willing to adopt new tools because
that muscle for learning new things continues to be there and learning new
tools.

**Ellen:** Not just learning new concepts. And so I think that was a big piece
of it. And I also think they hit good timing with Microsoft the company. I
worked at Microsoft still during the bomber era and I feel like externally now I
wasn't there during the transition itself, but the company choosing to focus on
cloud strategy rather than windows as the primary platform, I think aligned
nicely and resulted in positive external sentiment that I think also helps
people make that shift.

**David:** Behind all of this from Microsoft is obviously trying to get people
to use Azure, but it's interesting to see Microsoft come from pretty much a
hundred percent proprietary over to really embracing the open source community.
And do you think that's a necessary component to dev tools that they have to be
open source?

**Ellen:**I certainly don't think they have to be open source. This goes back
to, I don't think there's a right answer across the board for anything. I think
there's a bunch of different reasons that it can be beneficial. So lock in is
the obvious one that people always talk about. You want to be able to see what's
happening. There's the idea that you want to unblock people and allow them to be
able to contribute to the project over time. There's the PR hit, you can
sometimes get from it. But at the end of the day, I think there's a relatively
small number of people who will believe fervently enough, that they make their
tool choices solely about if something is open source or not. And that the
majority of people are more looking for what is the right thing that will solve
the problem for me efficiently for my business needs.

**David:** And how do you think people should think about the funding challenge
with open source? Obviously not a problem with Microsoft and the revenues that
they have, but that's probably an outlier in terms of the majority of open
source projects, but we're seeing more and more businesses peer behind the open
source tools. Red Hat is the traditional example, but it's by no means the only
example. And in fact, most open source dev tools companies or open source in
general are not going down the support route. That's an option, but cloud is a
big part of that. How do you think about this challenge and how developers
should think about the open source projects that they use?

**Ellen:** There's so much to unpack in this. So I think there's always going to
be, to some extent, there will always be large corporations who have the money
and the resources that they are able to support an open source project just
because they have the cashflow to do it. I'm not sure if that's what's best for
our industry overall, but it is definitely something that I think will continue
to happen. And we'll see a lot of things get pushed there, particularly things
like languages or like data storage, where you have to make a huge upfront
technical investment before you get any payback. That cycle doesn't always align
to how most software investing works.

On the other side of it, there's the large number of small projects that people
maintain as labors of love or as things that they really care about and want to
exist in the world. And I think those are much harder to make sustainable. I
think there's always been an attitude of like, "Oh, it's open source, therefore
we use it for free." And so I think from that perspective, I always try to
support the projects that I'm using. I think again, GitHub adding tipping is
something that's helpful there, but that's a personal choice and that doesn't
really make the ecosystem sustainable unless all of us decide to buy into it all
at once, which doesn't seem very likely from what I've seen so far.

**David:** (18:42):

Which route do you see startups taking once- often it's individuals or a couple
of co-founders who have created an open source project and then they want to
create a business behind that and it starts off with investor and then VC
funding, but how do you see them develop the project to become sustainable?

**Ellen:** Yeah. That is one of the nice things about Venture funding is you
have more resources up front to be able to hire the team and start to build the
other pieces you would want for the project. Be that more core functionality, be
that a hosted version, be that building services around the project. And so
that's one nice thing about Venture is compared to trying to bootstrap it over
time with tiny contributions from people. And so from that perspective, I guess
what I mostly see or what's been most common recently is people taking the
projects and then creating hosted versions, especially after their open source
audience says, "Hey, I like this and using it successfully, I really care about
it, but I just wish you had a hosted version." And so I think some of the best
companies come out of projects where there's already demand for that.

**David:** What do you think about the risk of someone else creating a hosted
version first or competing? I suppose we saw this first with MongoDB and them
changing their license and then also Elasticsearch and Amazon creating their
version. How should companies think about that?

**Ellen:** I think it's another one of those things where it's great if you get
to the level of success that you have that problem. And so most of the people
I'm talking with day to day, that's a pretty good problem to have, if you've
gotten to that level. At the beginning, people underestimate how hard it is to
build community around developer projects and developer tooling. That's why we
have so many tiny projects that only a few people use, or we have so many things
like what I build for myself where you build it for yourself and no one uses it.
I think people talk about the beginning of it's hard to build and they talk
about you don't want Amazon to copy you, but people very rarely talk about the
middle part, which I think is actually some of the most interesting work that
happens in tooling.

**David:** I just start to think about that and I suppose it's the challenge
between the building of the dev tool and the marketing of it and getting people
to use it. Where should startups start and how do you advise companies on that
challenge?

**Ellen:** Yeah. Okay. So you definitely have to build something first, so
someone can use it. And so a nice thing of coming out of an open source project
is you've built something so someone can use it and they're succeeding. So step
one, build something and then you have to get someone using it before you would
find it at all comfortable. I think people tend to skew towards the idea of,
"Oh, well I already know they're going to tell me that I need these 72 features
as part of this. So I might as well build all 72 before I give it to someone."
But at the end of the day, no one adopts a tool because it is all 72 features.
They adopt it because it solves this one thing really well. And so when you get
it into someone's hands that's when you're going to start understanding which
points of what you're trying to do, really resonate for someone and you can
build from there.

**Ellen:** And so the first thing I always tell people is, use it yourself. Once
you can do anything. Even if it's not very good, the first thing we built in
Dark, well, we went through a few rounds of it, but we built a programming
language that could only do Fibonacci sequences. Then we built one that added
conditional. So you could make fizz-buzz, leading to some of the most awkward
user interviews of all time. And then we get to the point where we could build
the backend for an existing front end blog. And once we had done those three, it
was like, "Okay, great. Now let's get someone else in building their actual
company who isn't just us thinking in a vacuum." And so get that first user. And
then once you have one person who really loves it, I think then people are like,
"Okay, one person loves it. Let's go big."

No. Go from one user who loves it to five users who love it to 10. And then once
you start to see a qualitative pattern in what's working for people and you
start to see a qualitative pattern to what people are asking for, hopefully
there's themes, not just fix these 87 bugs. I think that's when you can start
thinking about telling the stories of those early users and starting to expand
and build the community. But I think people tend to skip ahead to how it might
market to tons of people. I need a business-y person to market it. I just want
to build stuff and then have someone sell it. Instead of saying, I'm going to
build it in concert with my early users.

**David:** You just put it on GitHub and then hope that people find it? What
would you do first?

**Ellen:** (22:35):

Yeah. I also, I love talking about the stuff. If anyone is listening and just
thinking, "Oh, I wish to talk to someone about my project and how I might start
to think about community," you can reach out to me anytime. But so what I would
probably do is I would start to think about who do I know who also has this
problem? It might be a coworker from a previous job. It might be a friend. It
might be someone else who also cares about the space, but it doesn't have to be,
you just put it up and wait for someone to come, just go through your head and
be like, "Okay, who do I know who might use this?" And if no one who you already
know is a friend or you've collaborated with is the right user, it's kind of
like, "Okay, why am I solving this?"

But if you still feel like really confident in it, because you have the problem,
then start to go to your friends who know other people who are also writing
software and be like, "Hey, I'm working on this thing, this is why I think it's
cool. What do you think? Who do you think would benefit from it?" And see if you
can kind of get that second layer of people outside, and this can be
uncomfortable because it's talking to people. On the upside, it's more
comfortable. It's talking to people about software instead of the weather or
small talk or other uncomfortable things.

**David:**How would you know when the right time is to look for funding? Once
you've got that inkling of a community or a few stars on GitHub, at what point
should you start talking to investors?

**Ellen:** It's going to depend on the investors. And so people will tell you
this. And I think it actually does make sense. Your fundraise will always be
easier if you've built relationships up front and people have seen a track
record of what you've been building. And so if you have a project and you're
just curious about, could this thing be a company, what other companies exist in
this space? You can reach out to investors to talk about ideas. A secret is that
every investor always has a bunch of companies that it's trying to hire. That
are trying to hire engineers. So we're often pretty excited to meet people, even
if that's not necessarily the right project to need funding at a given time,
it's always fun to chat about where things are going. So that'll help. But if
you're already at the point where you've started building something, I think
it's when you understand what funding would enable you to do that you can't
currently do now.

And so often that's, "Hey, we have this thriving open source community. We have
people asking us for a hosted version. There is no way that us volunteering on
the side of our job can make a hosted version. But we've seen that there is this
demand here. And we know there are people in the community who want to work at
the company." So you have basically a team of people who want to work something
specific. I also think people sometimes think of funding as a milestone in
itself. Whereas it's really more of an event that allows you to reach the next
milestone. So you should always have the idea in your head of what are you
trying to get to when you were thinking about fundraising?

**David:** Yeah. I always say that once you have raised the money, that's when
the hard work actually starts. Going through the fundraising process is
challenging, but you've got all that money and now you need to actually do
something with it. Where do you see companies directing the funds first? Is it
just for hiring or building out the team members to help on things that you just
don't know how to do?

**Ellen:** It's pretty much always hiring. I think particularly with open source
companies and developer tooling, the common starting team is six to eight
people, all but one of those are usually writing code full time. And the other
one is some code and some operational overhead and some developer relations and
community building.

**David:** And on the community side of things. How do you think about the best
way to manage that community? Particularly if you are an individual who's just
got a project that's become very successful and you are getting bug reports
coming in and poll requests and people pulling on your time and it's not even
your full-time job.

Yeah. I think a big thing people underestimate, and this is so easy to do. I've
definitely been guilty of this at different points. It's really easy to just
become reactionary, where someone sends you a message or a bug report, so you
answer it and you just do the thing. It's almost a last in, first out type of
thing. And then you never get back to the beginning of what people have given
you, or on the flip side, if you go first in, first out, then you basically,
everyone just thinks you're completely not responsive forever. And so neither of
these are good experiences for the community. And so I think setting up front
what you're hoping for and what is likely to happen or not happen, can be really
effective. And so that can be, if you're hoping to let the community contribute,
taking the time up front before you launch, or before you start to build the
community of users, having the things of, here are good first issues for people
to fix can be helpful.

Or beyond that understanding, do you think people will contribute to the
project? In Dark, we had a lot of back and forth where Dark itself is open
source, but written in OCaml. And there was also a package manager in Dark where
you could share code you'd written in Dark. And so Dark users for the most part
already knew Dark because they were using it, and so they were happier to share
packages. Most of them, despite some similarities between OCaml and Dark at the
time, you don't mean very many people who like, "You know what I really want to
do? Contribute to an OCaml project." And so you have to make some trade offs
there, of what are you going to do with the community and how do you set the
community up for success?

**David:** Makes sense. So if you were building a dev tool today, what would you
do differently?

**Ellen:** A bunch of things. I feel like for any company you build, you're
always going to learn things about yourself and how you work and how you work
with others. And I think those tend to be more of the lessons you take away than
something specific to your domain. For developer tools in particular, I think
because there is so much investment in technical infrastructure, I think I tried
to work around it. So the first version of Dark was a fully- well, there are
many versions, there's a graph version. And then there was the version we called
the structured editor. And I spent probably a year trying to figure out ways to
teach people how to use the structured editor effectively because it was going
to be so much work to rip out all of the editor code and redo it. And then once
we actually did that, things were much better.

In some ways it was certainly much easier to teach people to use, it turns out
people have a hard time adjusting to structured editors. And I think I would've
done that much sooner. As soon as I knew it was going to be a no-go in the long
run instead of trying to paper over it for a while.

**David:** Makes sense.

**Ellen:** The other one, and this one I think is actually more applicable to
everyone, is I think even when you're building a holistic system, I think you
have to give people a steady enough on-ramp to feel like they are anchored, and
they are still an expert in something else they can bring to the table. And so I
think shifting people on their language, their editor, the fact the editor was
in the cloud and they didn't have to do anything with their infrastructure
configuration whatsoever, all at once, was really disorienting. And so if I were
going to do it again, I would always think about where does my tool fall into
what everyone else is doing and how can I orient them, so they feel like they're
successful right away, and that they're building a top of what they have instead
of doing something totally different.

**David:** So building something that solves a very particular problem with the
goal of expanding over time, rather than trying to do everything at the
beginning?

**Ellen:** Or even if you do everything in the beginning, helping people
understand where everything in the beginning falls, I think I would still
probably make it more narrow. The problem is if you make everything super
narrow, you might never get to where you're going. I think that tends to be
better business outcomes. But if, even if you want to do something large, I
would still think about, how is someone's mental model of the world going to
have to shift when they do this and how can you make that shift feel less
jarring?

**David:** And how do you get people into, I suppose, the philosophy and the
roadmap and selling them the future, but also giving them something they can use
right now?

**Ellen:** Elliot, who I work with has a great expression for this, that I'm
blanking on. But it's basically the idea of you want that emotional resonance
for the far off dream of the future, but you actually tangibly need something
you can do every day. And so to some extent you are selling the tangible thing
you can do today, but you're marketing the longer vision, I guess, is how I
would differentiate that. Of course, within any developer tools company, we
don't usually- especially early stage, say it's sales and marketing, but you do
have to have this hybrid of, you're painting the path of where we're going with
this very tactical, but here's what we're going to get done now.

**David:** The challenge I suppose, is then trying to commit to features that
you might change your mind on in the future and certainly giving release dates,
that's always warned against don't you think?

**Ellen:** Yeah. I don't think I've ever worked at a company that formally
committed to our release dates externally. I guess it would depend on how far
out it was. I think you always want your vision to be something where people
can- it's more of a direction and then you're adjusting as you go there. But
you're going to learn things over time. If I set out to build something and it
was exactly as I had envisioned it 10 years later, if it was exactly what I had
thought it would be, I have done something really wrong to not have learned in
10 years. And so that definitely needs the fluffiness. But in terms of what
problem are we solving for you today? I think that's important because that's
what's really going to get someone to adopt a tool.

**David:** Right. Makes sense. So before we wrap up, then I've got a couple of
lightning questions for you. What's your favorite dev tool right now? What are
you currently playing around with?

**Ellen:** I feel like this is asking- I don't have kids, but asking me about a
favorite child or something like that. That's definitely not a dev tool, but
like I said, I've been migrating everything I do over to Obsidian, so I can
customize everything which has been pretty enjoyable. As part of that. I've been
using a new terminal called Warp that I just got some invites for that I think
has been pretty interesting. It's built in Rust. It's very fast. So if anyone's
interested in that, I'm happy to share my few remaining invites. And so I guess
those would be my two. Another one, I like a lot. I've been thinking a lot about
the theme of code only- really just looking at lines of code isn't very
interesting. It's understanding how they actually fit together and what is being
used that's helpful. So I've been spending a lot of time with a company at bold
start Code C, which works on visualizing and creating maps of different code
bases. And so that's their first attempt at the problem of how do we make code
easier to understand. So that's been pretty cool too.

**David:** And then just your current tech setup, what do you use daily? What
hardware and software do you use?

**Ellen:** I'm pretty boring. I use an M1 Mac. It turns out you don't need a
very fancy computer. Most of what you do is hang out on zoom, but I do have a
very nice Sony, a 660 camera for the fact that I'm hanging out on zoom all the
time and a Shure MV7 mic.

**David:** Excellent. Well, thanks love for spending some time.

**Ellen:** Thank you for having me.

**David:** Thanks for listening to the Console DevTools Podcast. Please let us
know what you think on Twitter. I'm @DavidMytton and you can follow at
console.dev. Don't forget to subscribe and rate us in your podcast player. And
if you are playing around with or building any interesting dev tools, please get
in touch. Our email's in the show notes. See you next time.

{{</ box-collapsible >}}
