---
title: Can you rely on autofix? (Tyk & DeepSource)
who: David Mytton & Jean Yang
what:
  "Episode 9 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Tyk - API gateway, Deepsource - automated code reviews"
season: 1
episode: 9
date: 2021-09-02T09:00:00Z
duration: 15:23
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/640186a1-91f2-4c62-a312-93641b85671e/audio/fb8ffc23-cf6e-4e67-b4fe-e89a58f61600/default_tc.mp3
draft: false
summary:
  Tyk (API gateway) & Deepsource (automated code reviews), a devtools discussion
  with David Mytton and Jean Yang.
metaDescription:
  Tyk (API gateway) & Deepsource (automated code reviews), a devtools discussion
  with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/deepsource.io.png
topImg2Src: /img/favicons/tyk.io.png
ogImg: /img/podcast/podcast-cover.jpeg
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server 
  Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute 
  and cyber security company, StackPath. He is also researching sustainable 
  computing in the Department of Engineering Science at the University of 
  Oxford, and has been a developer for 15+ years.
author2Name: Jean Yang
author2URL: https://twitter.com/jeanqasaur
author2Img: /img/podcast/akita-jean-yang-profile.jpg
author2Bio:
  is CEO of Akita Software. Jean earned her PhD in software correctness and
  programming language design from MIT and then became a professor in computer
  science at Carnegie Mellon University before she started Akita to build the
  future of API observability.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

Episode 9 of the Console DevTools Podcast, a devtools discussion with David
Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software).

Tools discussed:

1. [Tyk](https://tyk.io/) - API gateway
2. [Deepsource](https://deepsource.io/) - automated code reviews

Other things mentioned:

- [Kong](https://konghq.com/)
- [Apigee](https://apigee.com/)
- [nginx](https://nginx.org/en/)
- [Go](https://golang.org/)
- [Akita Software](https://www.akitasoftware.com/)
- [EP5 Console DevTools Podcast](/podcast/s01e05-snyk-security-scorecard/)
- [EP2 Console DevTools Podcast](/podcast/s01e02-github-copilot-tuple/)

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console DevTools podcast, a show all about interesting
developer tools. I'm David Mytton, co-founder of Console.

**Jean:** I'm Jean Yang, CEO of Akita Software, an API observability startup.

In each episode, we'll discuss two interesting developer tools. We're keeping
this to 15 minutes, so let's get started.

**David:** Today, we're talking about Tyk, which is an API gateway. You may be
familiar with Kong;  this is a very similar open-source project that allows you
to support all types of API protocols. It handles API versioning, deprecation,
does things like hot reload without dropping requests, and it is designed as
what they call a one-stop shop to provide everything you need to offer APIs on
top of your application to users. In particular, it has some interesting
closed-source aspects of the project around helping you build a developer portal
and documentation, but the main project itself, essentially an API gateway
proxy, is open-source.

What do you think, Jean?

**Jean:** API gateways are going to become increasingly important as people have
more APIs and need to manage them. I had some questions for you, David, to
discuss about why someone would choose Tyk over some more potentially well-known
API gateways like Kong or Apigee. What are your thoughts on why someone would
pick Tyk over something else?

**David:** So firstly, thinking about something that probably doesn't actually
matter is the implementation details, which I feel like developers do focus on a
bit too much. Kong is built on top of nginx and has a Lua based open-source
codebase, whereas Tyk is all Golang and is a newer codebase, just because it's a
newer project.

To be honest, those are implementation details, and it doesn't really matter. It
comes down to the functionality and the performance. I feel like there is some
small use cases where you might want to edit the code or make some changes to
Tyk, and because it's Golang, which is a language built around APIs and web
technology, that might make it a little easier to contribute to or make changes
to.

Do you think that's a compelling argument?

**Jean:** This is where I’m not sure, because my experience is that adoption of
API gateways often happens top-down, because it seems hard to mix your API
gateways. Someone at the top has to decide, "All right, we're all going in on
this gateway." To me that feels less of a bottom-up open-source experience. I'm
curious what your thoughts are on that.

**David:** That's a really interesting point because Tyk includes a management
UI as standard. It's part of the product. Whereas Kong, you only get that if
you're paying for their enterprise version and you have to configure everything
through their API or their CLI. Whilst that might not make a difference to
developers, other than maybe being a bit easier, it may make a big difference to
management if they're making the decision based on being able to click buttons
and tick boxes in the settings with a control panel.

What do you think?

**Jean:** I think the big question with these API gateways moving forward is the
barrier to adoption. You have to get someone in charge to agree to it and unify
the adoption across the company?

A lot of what we're seeing with Akita is people saying we have a gateway for our
external APIs, but for our internal APIs, that would be just way too hard. I
think there's an open question of what is the role of gateways? Is it something
people really are going to have to change a lot? If it's just for an external
API, they don't change very much. It goes through a lot of layers of review and
people saying, "Yes, this is allowed."

I think part of the question of what kind of thing you want with your API
gateway has to do with what the future holds for them in general.

**David:** And it seemed incredibly complicated. All the components that you
have to get set up to get all the different features for Tyk. And not just Tyk,
Kong itself. There are so many different extras that you can add on. If you're
only adding a few things like API versioning or being able to handle
authentication in a better way, then it seems like it's a pretty heavy thing to
add into your tech stack.

**Jean:** Absolutely. I'm not sure what the benefit of the open-source is, but
I'd love to hear from our listeners because people probably have way more
diversity of experience than the two of us have.

**David:** Yeah, let us know. What do you think? Have you tried out Kong? And
how would you compare it to Tyk?

The second tool we're talking about today is DeepSource. This is an automated
code review tool that opens up pull requests and highlights problems by doing
static analysis against your code. They claim to be one of those
enable-and-forget tools, which really just helps you with code quality. It can
do automatic things like looking at coding style. It can highlight
inconsistencies in how you're implementing things. It could even do performance
warnings and highlight common anti-patterns. It's interesting to think through
how that's actually working behind the scenes, particularly if you could expose
the rules engine. You could define your own static analysis.

Jean, you said to me earlier that there's some potential limitations there. What
was your take?

**Jean:** I think that static analysis for linting is extremely useful. Because
essentially what static analysis does is it builds a model of your software, and
then it's able to analyze the software for all potential occurrences of certain
behaviors: everything from type errors, so type checking is a very lightweight
form of static analysis; to does this data value potentially flow to this output
channel or to this function?

The limitation of static analysis is that it is necessarily conservative. Most
static analyses are aimed to find all possible occurrences of something without
really having the ability to differentiate between how often it occurs, because
one thing about static analysis is it builds this model before the program runs
based on a mathematical model of the program. So you can't ask questions about
hot paths or, "Does this actually happen in practice?" because static analysis
by definition doesn't see that kind of behavior.

So I am skeptical that this is a set-it-and-forget-it tool for a few reasons.
One because static analysis necessarily gives a lot of feedback, only some of
which is useful. It depends on what you mean by set-it-and-forget-it, but I do
think there's a human pass that needs to go over it afterwards to understand the
results of it.

Something very interesting about the tool is that it says that it automatically
does fixes. If you are changing the semantics of your program in any way, if
you're not just doing basic linting fixes like "I'm going to clean up the
spaces," someone needs to be checking over that. Even the fanciest static
analysis can't do very much to your program without changing how it behaves, and
how that plays with other parts of the system that things depend on. Maybe what
they're changing is very limited, but I have a really hard time thinking of too
many examples where your program behavior doesn't change in a meaningful way if
someone's changing your code.

**David:** You often see auto-fix suggestions come up in a CLI context, so if
you're running it on the code in your IDE before you've even committed it, and
you're still in the development flow, sometimes that might come up as part of
the compiler. I know Rust is pretty good at making suggestions and often code
just won't compile if it thinks it's wrong. Where do you think that should fit
in the development flow?

**Jean:** That's a great question. I think the IDE is a great place anywhere you
need programmer oversight. The compiler is often too late if you're throwing a
lot of warnings, so what these static analyses tend to do is just throw a list
of all of the warnings. I've talked with a lot of security teams that use static
analysis, and what they say is, "Look, we often just ignore all of the warnings
because we are overwhelmed. It's not that static analyses didn't warn us about a
list of major breaches."

As a community. It's not that I talked to the specific engineers who were
involved in each of the breaches, but they said, "As a community, we were warned
about all these breaches by our static analysis tools. They just happened to
warn us about a million other things. So what are we supposed to do with that?"

It's sort of like that parent or that friend that tells you everything that can
go wrong every time. You just kind of tune them out a lot of the time.

**David:** And where would you say metrics come in? Because if it's always
surfacing lots of problems, how can you prioritize those? We talked about Snyk a
couple of episodes ago, where it has an understanding of the prioritization of
issues, which was useful for those top critical security issues, but when you've
got such a long list, it can be really difficult to triage those.

**Jean:** I would not call the prioritization of static analysis issues
"metrics" for the following reason:

I think that the most useful prioritization comes from either the tool itself,
where they impose their opinion where they say, "Look, we think this kind of
input validation issue is more important than a container issue. It's more
important than this kind of issue." Someone has to go through and do a ranking,
either the tool or the user, and I think the user probably is not going to do
that.

And so any kind of other metrics I feel like are much more useful in a dynamic
context. How often did this occur? What's the probability that this occurs based
on how many times you saw it occur in practice? I would call those "metrics." I
would say, "Static analysis can't do any of them."

I'm super curious to hear from our listeners which metrics are useful for
analysis and which ones can we get from static analysis, because I'm really
skeptical.

**David:** Deepsource seem to be starting to surface a few things there. In
particular they're showing test coverage, which was the one thing that I thought
was potentially useful in terms of metrics. Then the question is, "Well are you
trying to get to a hundred percent test coverage?" That's what it would seem to
be. Sometimes that might not be appropriate for the code, right?

**Jean:** Theoretically, I think that's useful. But here's the thing: A static
analysis will tell you anything can happen. Often tests are some percentage of
the things that can actually happen. My guess is that most people don't have a
hundred percent test coverage, but I could be very wrong. My bias is that most
people don't have a hundred percent test coverage and they don't want it, and
that a static analysis can't actually do a great job of determining the
percentage you want.

What a dynamic analysis can tell you is that  in practice about 70% of your code
branches actually get exercised. These are the branches you really want to go
for coverage. If you are building a spacecraft or you are building a plane, you
probably want to cover all the cases because there are these infamous stories of
planes crashing or spacecraft having issues because of one bug. But if you're
building the DoorDash app, I mean, come on, half the time I try to order food
from DoorDash, it doesn't work.

So I'm pretty sure for most of these apps, coverage does not matter that much.

**David:** Where do you think something like DeepSource fits into the tool
chain? We've got things that are all the way in the IDE that are showing up as
developers are coding, and then you've got the complete other side where you're
detecting things in production. DeepSource, I suppose, is sitting towards the
developer, so not quite in the middle but towards the developer, and trying to
surface things, before they get merged into production. Where do you think the
right position is?

**Jean:** Right now, I think DeepSource is sitting further right than it needs
to be. It's billing itself as the last gate before production. We give you a
list of issues. Set us, forget us, and we'll automatically change stuff before
you deploy.

I actually think that these kinds of techniques are better in the IDE, in the
development cycle itself. If you have a million potential issues, and you're
surfacing them as a dump right before someone is trying to get their code
merged, the experience of that is not nearly as helpful as in the IDE. If you’re
in the IDE and someone tells you something could happen, it's a little annoying;
but people get warned all the time as they go, and they can actually process
that in the moment.

You also get taken out of the context of your development process by the time
you've checked in your code and you're trying to merge it. But if you're in the
IDE, I think you can handle a lot of these reports and changes a lot better. I
would like to see something like DeepSource get pushed further left.

**David:** And this comes back to your general thesis around how important the
IDE is for developers in general. We kind of talked about this when we discussed
Copilot, and then last episode, about it taking you a little bit out of your
flow into the browser and how that may need to move into the IDE.

**Jean:** I'll admit I'm a Vim kind of person. I don't use IDEs. But I think,
hypothetically, if you want the juice of all this stuff, you’ve got to put it in
the IDE. I think the developers love IDEs now. I am not that profile, but this
is what I hear. I think that for a lot of these fancy programmer-helper kind of
things, you want it there.

**David:** All right, that's it for this week. Please let us know where you
think the IDE fits into the future of development, and what you're seeing with
the kind of tools that you're putting into your developer flow.

**Jean:** Yeah. Every week, we're talking about a lot of really interesting
questions about the future of programming, the future of API management, and
we'd love to hear from you. So tweet at us @consoledotdev. I'm @jeanqasaur. My
company is Akita Software. And David is @davidmytton. All on Twitter. We're
there all the time.

**David:** Thanks. See you next week.

{{</ box-collapsible >}}
