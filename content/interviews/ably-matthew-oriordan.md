---
title: Interview with Matthew O'Riordan, Ably
who: Matthew O'Riordan
role: CEO
org: Ably
what: Realtime as a service.
tags: ["Messaging", "Realtime"]
date: 2022-09-01T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Matthew O'Riordan, CEO, Ably
isPage: interviews
topImg1Src: /img/interviews/ably-matthew-oriordan-profile.jpg
topImg2Src: /img/favicons/ably.com.png
ogImg: /img/interviews/ably-matthew-oriordan-desk.jpg
---

### What is Ably? Why did you build it?

[Ably](https://ably.com/) is a serverless WebSockets provider at the edge. Our
goal is to make it easy for developers to deliver realtime information and live
collaborative experiences to people on devices they use. 

I started Ably because, around 2013, realtime experiences in web applications
were pretty novel. I think before that, there were a few people hacking stuff,
but it was still static web applications. I had sold my previous business and
decided to take some time out, but got bored very quickly, so then I started
working on my next startup. I worked on so many different ideas. I was
deliberately doing lots of different things, to see what worked. I started with
building a prototype and that's where I came across the realtime side of things
and started adding these live collaborative features into products I was
building. In 2012, when Trello first brought out live collaborative features
like Google Docs, with live document editing, that showed what was possible.

That's kind of how I came across the opportunity, because I thought, hold on a
minute, this is quite hard, and the solutions available don't solve the problem
properly, and I have to worry about scaling. They don't offer integrity, so I
have to build a layer of integrity on top of it. That's how I came to Ably, and
it took us three and a half years to build the product!

We believed that realtime wasn't going to augment experiences, though, it was
actually going to underpin them. I think Figma's a brilliant example of this -
they came into a crowded market, they thought about live collaboration from the
ground up. Then the whole product is built on that basis, and they've just
killed it - they came from nowhere and gained a huge market share. That was our
belief - that these things will be transformational, not just add-ons for your
product.

We believed that every consumer will just see this as table stakes at some
point. It was novel then, but we believed that industries were moving towards
realtime experiences as standard. Today I’d say it's largely true, I don't think
people are amazed by realtime functionality - they kind of expect it. However,
actually adding these realtime capabilities is non-trivial. There's things like
Socket.IO, and other open source solutions, but once you start thinking about
functionality, it's more complex. How do you do presence indicators or
concurrent editing and resolving conflicts? How do you start to think about the
operational side of how you make it highly available, scale it, and then ensure
low latency globally, because it's all realtime? That complexity, the pain,
scales as well!

What we did is, we looked at CDNs as a model. CDNs did something quite complex,
but it was trivial to integrate. You just added the CDN to a website, and you
suddenly got static assets, caching, and all these performance improvements.
Ably cannot be quite that simple sadly, but that was the model. We built a
global edge network where we now process billions of messages through simple
APIs for developers who can now add live collaborative features into their
applications and not worry about operations or scale.

We've done that as a serverless platform. The word serverless didn't exist back
then, but the principle was quite simple - I was a developer, I knew the way I
wanted to buy products, I knew that I didn't want to think about infrastructure.
We realized to build a realtime solution we had to provide the edge
infrastructure. That was a core part of what we did. Now we've ended up with a
much more sophisticated product, which happens to meet all the buzzwords, but
that wasn't the reason - it was because that's what we needed, and that's what I
wanted as a developer.

### What does a "day in the life" look like for you?

Sadly, I'm not coding very much anymore, I wish I did. Coding is one of the
things I enjoyed the most, but it's not what I need to do right now. I did land
a PR the other day, and it was quite amazing! I asked someone in the
infrastructure team to oversee what I was doing, because I didn’t want to become
that CEO who sends pull requests and breaks things. We are around 140 people
now, so the reality is I spend most of my time with the exec team. I try to stay
as close to the product as possible, because we’re a product-led business and
that's the part I'm most passionate about.

Before Series B, if anyone asked me what was the most important thing, I would
always say it's product, people, and then revenue. But now, actually, I'll say
it's the other way around - it's people, product, revenue. Because I can help
people build a successful product, but I'm not going to be the one telling them
what to build. I just have to give them an environment to succeed, and give them
direction, and things like that. It's weird how series B changed that, it made
me flip my perspective.

### What is the team structure around Ably?

There's about 140 of us. The last year has largely been about building the
C-suite and wider team. My co-founder, Paddy Byres, has actually moved into a
new role as Chief Scientist - he was a CTO before. I've been a CTO previously,
and then I met Paddy and realized I didn't know all that much, so it was quite
humbling. Now Paddy has moved to the Chief Scientist role so he can focus on
innovation and R&D. We brought in a CTO and then it's just been a suite of C
people. Chief customer success, chief revenue, chief marketing, chief everything
you can think of, we've got now.

We are a developer experience team as well and so, as developers, there's always
the question of where does developer experience sit. We've actually moved it
into product, so developer experience is developer education, developer
relations. Just the necessary things that you need to do when you start to get
bigger.

When we started hiring, I was adamant that we had to have a minimum of 60% of
the team would be engineers. And to be honest, it's quite hard to do that,
because when you look at what needs to be done across all functions, it is hard
to achieve. I had this belief that as an engineering first, developer first
company, we have to have more engineers working on the product than anything
else. Now we're about just under 50% product and engineering. Everyone in the
C-suite comes from engineering - they either were engineers in the background,
or from engineering heavy companies. For example our Chief Customer Officer,
Eleanor O'Neill, is unbelievable. Eleanor got a PhD in computer science, was a
CTO, and then moved into more commercial roles before coming here - so
everyone's pretty technical.

### How did you first get into software development?

When I was very young, I moved schools, and I got buddied up with someone for my
first few weeks, to have a friend, basically. And he was a geek like myself. I
hadn't gone into computers at that point, but he had a computer, and we started
exploring stuff. He showed me some things, and then I bought my first computer
(I think it was an 8086), and started coding. But then as a teen, I wouldn't say
I lost interest, but it just wasn't the thing that I was doing all the time. 

I kind of fell into this career serendipitously. I got asked by someone just
after I finished school, while I was taking a year out, to teach them how to
build a webpage. Maybe this is the entrepreneurial side of me, I sort of blindly
believed it can't be that hard to build a webpage. And that's how it started. I
did teach this person - very badly, by the way - and then a friend needed a
website built, and it just took off from there. I fell into web engineering and
loved it, and I continued to do web development all the way up until I met my
co-founder, where we started to do more systems type stuff. But it wasn't the
route that I planned to do as a teenager, even though I love coding!

In terms of languages, I started with Delphi, and I did a bit of Commodore64
programming, and some versions of Basic. And then when I started working
commercially, it was mainly the Microsoft stack, so I think I was one of the
very few people who did ASP. They had a JavaScript or a VB version, I used the
JavaScript version. That is basically what I did for 10 years. I set up an
agency along the way, and when I left the agency, I threw my Windows laptop away
because I realized I needed to change - I needed something different. Microsoft
today is a very different world than it was then. It was a very proprietary
ecosystem. And so, I chose Ruby because of the community. 

I went and hung around with a few different open source communities and the Ruby
community at the time was just buzzing. People were really cool and excited.
I've worked with other languages, but I used a lot of Ruby over the last 10
years.

### What is the most interesting development challenge you've faced working on Ably?

I think the thing that has been fascinating is, when we were fundraising, a lot
of VCs were saying, why have you not patented what you've done? The thing that
we told them, and it's part of what the challenge is, is that what we're doing
is productizing solved problems. There's plenty of academic papers on how to
build distributed systems, and the trade offs you need to make. What actually is
hard is operationalizing it, taking the academic ideas, and implementing them,
and then thinking of all the sort of second or the third order problems that the
academic papers didn't think about. 

Once you solve one hard problem in distributed systems you often find that it,
in turn, creates a scaling problem somewhere else in the system. You constantly
have to put out fires in the earlier stages of development. At the beginning, it
was quite exciting, because you bring the system up, and something would fall
over, and then you would solve that next problem. It's nice to work in the
abstract of how you solve these problems. I think when I worked on building web
applications, CRUD killed me in the end. You're always doing the same thing,
even though it was slightly different. Whereas with what we are doing,
everything is new almost all of the time.

To give you an example, when we first started the business we found that
sometimes nodes in the system would fail, so I built this health service. The
idea was, if a particular part of the system fails, it would restart it. All the
things that Kubernetes does now, but back then, it was all containerized - and
we built systems just to manage the containers. Very, very early, maybe even pre
launch, we had one region which got overloaded (we have to deal with volatile
workloads all the time as we don’t know when our customers have big events), so
one region got completely overloaded. This caused all the health servers on
every single node to detect that the nodes were failing, to restart them, which
created more load in the system, which meant that they started scaling up, which
meant the load shifted to the next region.

We built the health service to be globally available with the idea that not all
the regions are going to go down all at the same time - that should be
statistically near impossible. But what we didn’t take into account was this
cascading effect, because the health servers didn't talk to other health
servers, but they all thought that the whole system was unhealthy. And in the
end, we just had to turn the whole thing off, and turn it all back on again.
These are the kinds of things that I love, you wouldn't have thought of that
problem until it happened and then you're like, right, okay, well, we should
have thought of that.

### What is the most interesting tech you are playing around with at the moment?

I know it's pretty topical right now, maybe not particularly exciting, but I am
just constantly amazed at what could be done with GPT-3 and DALL E and Stable
Diffusion, and things like that. I know everyone's doing it, so it's not unique
to me, but I just kind of love showing people, when we're talking about a topic,
and you say, let me show you what can be done. It's astonishing. It's showing
people how much further along the tech is than where they think it is. 

We are also seeing some shortcomings - you can ask GPT-3 questions like, how
many legs does a ball have? And it comes up with an answer, it's kind of doing
this pattern recognition, so it's brilliant in one way, and completely flawed in
another. I found that quite fascinating.

### Describe your computer hardware setup

I have a super wide 49-inch curved screen. I've got three desktops, and then,
three workspaces, so that gives me nine effective desktops. I use a MacBook,
everything else is pretty standard, iPhone, Apple Watch. I have a standard Apple
keyboard. I feel like I'm in the ecosystem. But it works, it works well, so I'm
okay with it. I use a window manager called
[Magnet](https://magnet.crowdcafe.com/) to keep it all under control. I also
love [CleanShot](https://cleanshot.com/), a really great screenshot tool.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Brave.

**Email:** Superhuman.

**Chat:** Slack.

**IDE:** I've finally ditched Sublime Text and switched to Visual Studio Code,
but it’s slow to launch. For very quick edits I'm using CotEditor.

**Source control:** GitHub and Git.

### Describe your desk setup

I have a standing desk and a Herman Miller office chair. It's the first time in
my life I bought an expensive chair, but I bought one, nothing too unusual
besides that.

{{< img-center src="/img/interviews/ably-matthew-oriordan-desk.jpg" alt="The desk of Matthew O'Riordan, Ably" width="100%" >}}

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** Coffee.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I just moved to France a year ago. I live in the mountains. I did that because
of outdoor activities. I ski, I snowboard, I hike a lot. I used to do a lot of
skydiving, and although I still do a bit of that, I'm just loving paragliding
now that I live in the mountains. I'm in the early days of my paragliding
journey, but that's my new thing that I'm picking up.

### Find out more

Ably is a realtime platform as a service. It was featured as an "interesting
tool" in the [Console newsletter](/) on 22 Sep 2022. This interview was
conducted on 1 Sep 2022.
