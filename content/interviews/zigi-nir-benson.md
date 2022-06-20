---
title: Interview with Nir Benson, Zigi
who: Nir Benson
role: CEO
org: Zigi
what: Dev workflow assistant.
tags: ["Assistant"]
date: 2022-06-08T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Nir Benson, CEO, Zigi
isPage: interviews
topImg1Src: /img/interviews/zigi-nir-benson-profile.jpg
topImg2Src: /img/favicons/zigi.ai.jpg
ogImg: /img/interviews/zigi-nir-benson-desk.jpeg
---

### What is Zigi and why did you build it?

[Zigi](https://www.zigi.ai/) is a personalized workflow automation assistant
that helps dev teams focus on coding & reduce noise. We offer a hands-on
approach to minimize admin work, clear obstacles, and drive dev forward, all
from Slack. We built Zigi to help developers navigate their day with minimal
distractions. 

We started Zigi based on our past experience. I'm originally a developer, and in
the last 10 years, I've been managing big dev teams and products used by
millions. I'm also an Agile coach. And what I found is that we all want to be
productive, we want to work well as a team, and the waste is in the small
details. It's in all those interruptions and multiple notifications. The world
is currently experiencing a massive shift and for developers, the workload is
increasing, teams are growing, people are working remotely and often in
different timezones, there are constant changes and interruptions, inefficient
processes, more and more tools, unclear priorities, and drifting timelines.
Basically, the noise is only getting louder.

We believe a paradigm shift is needed in how we view productivity for
development teams.

We want to offer help for everyone based on their workflow, to clear those
obstacles, provide focus, clarity, and recognition. And we believe that's the
true way to move the needle as a team. We feel that in this new era, this is how
work should happen.

The way it actually works is that we integrate on a user permission level with
all the tools that we use on a daily basis. Zigi examines your activities in
Jira, GitHub, Bitbucket, and more. Then we analyze and cross-reference the data
in those systems in real-time to learn your work habits and figure out what
you’re actually working on and what your priorities are, even when you forget to
update Jira.

We do all this to help manage all your mundane coding tasks directly from Slack.
This means that Zigi users start their day with a personalized checklist of all
the action items that are on their table. We help them streamline collaboration,
like identifying pull requests with no reviewers and offering it up, reminding
the team members to complete the review. We also help them as a real-time
assistant throughout the day with just the right information that they need,
taking different time zones and work weeks into account. 

Zigi also takes care of non-coding tasks, like correlating tickets with PRs,
updating tickets, and many other workflow processes that you usually need to
remember and keep in your head.

Basically, we designed the architecture to fill in the data gaps in the dev
lifecycle process, and interact with developers to offer meaningful help,
providing information that isn’t usually available. 

So Zigi scans through all that noise, all those notifications and interruptions,
and cherry-picks the information that you actually need. So, for example, if
someone commented on a ticket that I'm not even working on, but it's assigned to
me and it's in my backlog, why do I need to know about it right now?
Alternatively, if it's actually the task I'm working on right now, I should
definitely know about it. 

We also use this view to identify risks and bottlenecks and lay it out for the
developers so they can do something about it. And for team leaders, Zigi is like
a command center within Slack. The goal is to help them focus more on people and
less on the operational side. So Zigi brings a real-time view of what everyone
is doing, how busy are they, who's overloaded, what's stuck and needs their
attention - so team leaders can offer help, remove obstacles and drive
development forward.

We believe that currently, the way the R&D environment is set up creates a lot
of noise, because most of the systems are not really up-to-date, and task
management tools don't really paint the picture. Managers are forced to spend so
much time trying to understand the status that they’re constantly pinging
developers and interrupting them. Developers also feel that this is like, "Why
don't you trust me? We talked about it this morning." So by giving everyone the
data and visibility they need, it's a way to create a more empowering dev
environment and a far more pleasant way to work.

Our experience led us to the understanding that the noise in development lies in
the invisible tasks, in the work processes - that’s where we’ve put our focus. 

Zigi is most helpful to dev teams larger than 30 who work with Slack, Jira,
Github, and Bitbucket (cloud versions) - but we’re adding support for more and
more tools as we grow.

### What does a "day in the life" look like for you?

This has evolved as the company evolves - it's really different now from the way
it was when we started. When we started Zigi, I wanted to make sure that my
thesis works. So at the start - I was Zigi. I started with one main customer
(who’s still one of our biggest), and I created the original Zigi messages in
Slack, which were based on how I managed large development teams. 

I really love the product side, and trying to solve the riddle - how do we
provide great value to developers that really helps them? I spend a lot of my
time talking to our beta users - understanding how we can do a better job in
supporting them, and working also according to our manifesto, managing the team,
showing them the vision of where we want to go, where we are right now, the
impact of everyone within it. 

Another part of my day is focused on building the team, working with our
investors, and focusing on growing Zigi according to our vision.

On the personal side, I'm also married and a father of three. I really enjoy
spending time with my family, and it’s important for me to make this a
priority.  

### What is the team structure around Zigi?

Well, so far we've been a lean,  targeted team of 7 people. The developers on
the team are super professional, and have a lot of experience in building
complex systems. These are developers with years of experience, who really
understand the vision, and experience the problems and pains that we are solving
on a day-to-day basis. 

We started working in Python, but because of the type of product we’re building
and the type of performance we need, we just moved to Go, which has been an
amazing experience.

Now that Zigi’s ready to grow, we’re extending our team, focusing on building a
strong, remote-first team of domain experts around the world, who are passionate
about revolutionizing the way that development teams work. 

### How did you first get into software development?

Both Omri (Zigi’s CTO) and I came to the world of programming out of a love for
solving complex problems. We both studied computer science in university, and I
also studied business management, and I’m constantly moving between both
business and programming. 

When I started my career, it was in C, C#. That was before the internet exploded
around 2008, 2009. Omri is also a computer science graduate. He grew up in an
agricultural village in the south - part of a family of farmers who always liked
to disassemble and assemble things. Omri built his career in networking, cloud
computing, and deep-learning companies.

We both connect to the creative process and are passionate about building
solutions for complex problems. Taking a complex problem and providing a simple,
straightforward solution that answers that question. 

### What is the most interesting development challenge you've faced working on Zigi?

Basically what Zigi is doing is creating context. The way we look at it, it's a
matter of data sources, and we need to catch an event that happens in one
system, then understand the context, what happened in the other systems, and
what can we learn from that? Also, who's the specific person that is the user?
What are their specific workflow and habits? We observe that automatically, and
we also learn from their past activity. All of that is to provide them with
actual help, figuring out what’s the next step? 

And we need to be accurate all the time and be always up and running, because
with the type of help that we are providing, you can't fail.

So doing all of that while still having the security level that enables us to
work with any type of organization, enable every developer that wants to use
Zigi to clear obstacles, and provide those insights within Slack - that's all
part of the challenge.

### What is the most interesting tech tool/product/project/thing are you playing around with at the moment?

Well, besides playing with Zigi and Excel, and opening tasks, I don't have much
time.my 10-year-old son is tring to teach me how to trade in NFTs, and I think
I'm starting to get the hang of it.

### Describe your computer hardware setup

I'm an Apple person, so I have all the gear. I have my iPhone, I got my MacBook
Pro M1, and my mouse and keyboard by Apple, and two screens to get it all. Omri
also has a MacBook Pro M1, a 28-inch screen, and a Samsung Note 20 Ultra.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Google Chrome.

**Email:** G Suite.

**Chat:** Slack.

**IDE:** Vim

**Source control:** GitHub.

### Describe your desk setup

We both work from the office and from home alternately, although we both have 3
children at home who’ve more or less take over our workstations. 

Everyone in the office has a computer, a desk, and a wall to play around with
new ideas and thoughts on.

{{< img-center src="/img/interviews/zigi-nir-benson-desk.jpeg" alt="The desk of Nir Benson, Zigi" width="100%" >}}

### When coding

**Daytime or nighttime?** 6:00 AM in the morning to code.

**Tea or coffee?** Coffee and whiskey.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I really love the desert and I often need some decompression time with the kids,
so every two to three weeks, we go for a weekend in the desert with the tent and
hiking. I’m an abseiling guide,  which means I get to take the kids and friends
to some pretty extreme and isolated spots. I also believe that we need to feed
the soul, and part of it is to treat your body well. So two nights a week a few
team members go to a CrossFit gym right across from the office to work out
together, to put some energy back.

### Find out more

[Zigi](https://www.zigi.ai/) is dev workflow assistant. It was featured as an
"Interesting Tool" in the [Console newsletter](https://console.dev) on 23 Jun
2022. This interview was conducted on 8 Jun 2022.
