---
title: Interview with Chris Evans, incident.io
who: Chris Evans
role: Co-founder
org: incident.io
what: Automate incident processes and fix vulnerabilities.
tags: ["incident management"]
date: 2022-05-12T12:00:00Z
draft: true
headerType: fixed
summary: Interview with Chris Evans, Co-founder, incident.io.
isPage: interviews
topImg1Src: /img/interviews/incidentio-chris-evans-profile.jpeg
topImg2Src: /img/favicons/incident.io.jpeg
ogImg: /img/interviews/incidentio-chris-evans-setup.jpg
---

### What is incident.io and why did you build it?

[Incident.io](https://incident.io/) is an incident management platform. We sit
within your Slack workspace and make it easier for you to respond to your
incidents right from where you are already communicating.

We believe that great incidents are founded on good communication. Because
you're using us to declare incidents of all types we become a sort of
observability platform for your entire organization. You get to have insight
into all the different corners and pockets of your business. How things are
working and when they're not working, why, who's involved, and how many
customers are impacted. It gives you a view of your organization you wouldn't
otherwise see if you didn't have that kind of process and system in place.

Before starting this company I worked at [Monzo](https://monzo.com/). When I
joined in 2017, I was tasked with looking after and building the on-call team,
which at the time was four people supporting a bank, which was quite a big task
for them! It was very hard for folks to get onto on-call rotations because there
was so much knowledge and it wasn't clear what to do when things went wrong.

I built a very simple system which created a chat channel and gave a few rails
to run an incident with the intention of making it easy to learn what was going
on in a nice way. That took a life of its own and became a big system that we
later open-sourced at Monzo called
[Monzo Response](https://github.com/monzo/response). It got a great reception.

### What does a "day in the life" look like for you?

In the early days, there was a lot of coding. Early mornings, late evenings.
These days, it's a blend for me as a founder. I spend probably a third of my
time talking to customers either doing sales calls or understanding their pain
points or working in a more consultative fashion to help them with incidents.

Part of my time is also spent on the company building. Hiring, legal, ops and
things like that. Lastly, I spend about a third of my time working on the
product. I've been an engineer my whole career and spent a lot of time being
that bridge between customers and product teams. Sadly, I don’t spend much time
writing code these days. Occasionally, I’ll do some late-night code bashing to
add a feature, which I’m increasingly being told not to do. As a senior person,
you should just step away from the code!

Starting a company is all-consuming, and I have two kids. I try to structure my
time that my Monday to Friday is just absolute carnage and accept that I will
see them a couple of days a week for bedtime and bath time, but it's full-on.
Weekends are very much down tools for me and I try to step away from the laptop.
I’m adopting a hard line on this.

### What is the team structure around incident.io?

We’re a team of 24 at incident.io. Eight in product engineering. We're probably
an engineer or two away from splitting that into two product teams and we'll
start them working on things in parallel. We've got three people in sales, the
three founders, three people in talent, a customer success person and then a biz
ops generalist.

### How did you first get into software development?

My dad was a structural engineer, which is a weird tangent, but he ended up
writing in BASIC a bunch of tools for structural engineering. It was pre-Excel
being very powerful. They had a thing that worked out the amount of deflection
that would happen on a beam. He wrote all this in BASIC and he wanted someone to
make some changes to it because he was busy doing structural engineering. I was
in primary school at the time and I had sort of been dabbling in BBC BASIC - I
think it was just print statements, and asking for inputs. Anyway, I ended up
doing some work for him.

My progression was basic stuff around a terminal, then I found Visual Basic. I
remember when Visual Basic 6 came out and it was incredible. Infinite
possibilities to do things with graphical interfaces. I ended up writing a bunch
of terrible games in it with a friend at school, then I sort of ended up not
doing anything with computers or engineering at university. I went into pure
math for my undergraduate, then back into it for a master's in computer science.
I really got into computer vision and spent seven years doing a bunch of
low-level algorithms, and embedded type coding in C and C++. From there, I ended
up working in platform teams, running SRE platform type teams at various
companies, which led me right up to Monzo.

If I look at my pure progression, it would've been Basic, Visual Basic, C, C++,
Python, and then Go. Go is my default these days, which I learned on the job at
Monzo. I learned it from my coding interview there and really enjoyed it. It
felt really familiar as someone coming from C++. It was like C++, but with all
of the rough edges smoothed over a little bit.

### What's the tech tech stack for incident.io?

The bottom layer we run on is Heroku. We have Heroku Postgres. Our tech stack is
relatively ordinary, which is pragmatically based on speed and familiarity. The
backend is written in Go.

We use React and TypeScript for our front end. It's a very simple setup. We use
some GCP managed services such as Pub/Sub for asynchronous messages, BigQuery,
and Cloud Storage. The direction of travel for us is to not have to run a
platform. I come from a world at Monzo where I ran very big Kubernetes clusters
that were completely hand-rolled. I want to steer clear of that!

### What would you say has been the most interesting development challenge building incident.io?

At the tail end of last year, we built part of the product called Workflow. We
had customers paying us using the product and alongside the product they always
had a companion document that we’d written which was about how you run an
incident with incident.io.

For example, critical incidents might need to be escalated to senior management.
Incident.io was making things easier, but not really taking the process off
their plate. The customer problem was: how do we build a lightweight automation
engine on top of our product? We built a workflow engine that allows you to
connect triggers. From things happening within the platform to arbitrary
downstream steps. When an incident was declared as critical, it could escalate
to a person, send an email or an SMS.

Behind the scenes, this was challenging because we decided to write it in a way
in which it would be usable, not just for this sort of workflow product, but as
a foundational building block of the entire product.

We built part of it called the Engine, which is a small programming language
that lets us represent resources that we might want to interact with. That could
be a severity or a custom field, or even an external thing like a GitHub repo or
[PagerDuty](https://www.pagerduty.com/). It would have conditions on those
resources, and we would expose them primarily through workflows. We're using
them now to build other parts of our product quickly. When we go back in and
change the engine to add some new functionality, the entire product levels up as
a result.

As a startup, we've gone further than typical to invest in some very strong
technical foundations. This is one of those investments where we spent a lot
longer than that to get it right and it is paying off dividends.

### What thought have you given to that and the resilience and reliability of the platform?

We are in the enviable position right now that we are dealing with very low
transaction volumes. If you look at PagerDuty, they're ingesting thousands and
thousands of events per second with people firing alerts. They've got to figure
out what to do there. Our primary source entry point is Slack and that's driven
by people doing things.

We have some guarantees with Slack around this. Slack will do all sorts of nice
redelivery and we have mechanisms internally to make sure that we are handling
those things. When we need a guarantee that things are happening, we are using
Pub/Sub as our intermediary to make sure that work is done.

A PagerDuty type product is something that we're thinking about for the future.
How do we build it in the cloud and how do we convince people it's reliable
enough and as good as PagerDuty? Does that mean multi-region? Does it mean
multi-cloud multi-region? There are all sorts of fun challenges to come.

### What's your take on ChatOps as a philosophy?

We're very pro ChatOps. I think ChatOps is moving work to where people are
rather than asking people to come away and use a separate platform to do what
they want to do. It seems very en vogue right now, but it genuinely works. If
I'm in an incident, every time that I step away from a channel where people are
talking and communicating, that's an opportunity for me to lose context. If
you've got 20 people in there and there are messages flying by, that can be
really harmful. Augmenting that process and being part of that is a big deal.

When I was at Monzo running platform we were being pitched some products such as
rebooting your server from within Slack. That I literally would never want to
do! I will use the tool that is closer to where that is, and I can get better
feedback from it. When you're dealing with things that are much more
straightforward and simple and I just want to put some data here or update a
thing, I think it's a really powerful paradigm.

### What interesting tools and products are you playing around with at the moment?

It's a tricky question because I'm not coding much anymore. One thing that's
constantly blowing my mind is [Copilot](https://copilot.github.com/) from
GitHub. I used [GoLand](https://www.jetbrains.com/go/) as my IDE and I'd
installed Copilot, then forgotten about it. I came back to it and was writing
some code, and I didn't even know what was happening. This thing has read my
mind somehow. It was amazing. Hit and miss a little bit, but I can see the
future there, removing a whole bunch of low-value work.

My life sadly has moved a lot towards email and I use
[Superhuman](https://superhuman.com/) for that. It is genuinely the best
experience for email that I've ever had in my life. It's just amazing. It's not
wildly different to Gmail, but I think it highlights the importance of UX. The
net result is I actually feel on top of an inbox that was previously completely
unwieldy.

The final thing I'd like to recommend is an app called
[Detail](https://detail.co/). I have a very nice camera rig at home. I spend a
lot of time on calls and I want to have good lighting and everything else.
Detail is [OBS](https://obsproject.com/), but for non-nerds. You can have
multiple scenes set up and you can do all sorts of nice things and it just
works. It can do things like face tracking if you want it to keep the focus on
you.

### Describe your computer hardware setup

I use an [M1 MacBook Pro](https://www.apple.com/shop/buy-mac/macbook-pro). I
absolutely love it. I use it with a
[Logitech MX Master 3 mouse](https://www.logitech.com/en-gb/products/mice/mx-master-3.910-005694.html),
which is a glorious mouse. I have a FILCO Convertible 2 mechanical keyboard. I
have two [Elgato Key Light Airs](https://www.elgato.com/en/key-light-air), which
do nice lighting. I have a
[Fuji XT30 mirrorless camera](https://fujifilm-x.com/global/products/cameras/x-t30/),
which I did not buy specifically as a web camera. It's my camera for doing stuff
and it's connected via an
[Elgato Cam Link 4K](https://www.elgato.com/en/cam-link-4k). For sound I use a
[Wave Link microphone](https://www.elgato.com/en/wave-3).

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** (Superhuman)[https://superhuman.com/].

**Chat:** Zoom and Slack.

**IDE:** GoLand and VSCode

**Source control:** GitHub.

### Describe your desk setup

I have a [Fully Jarvis Bamboo](https://www.fully.com/standing-desks/jarvis.html)
standing desk with a
[Humanscale Freedom](https://www.humanscale.com/products/seating/freedom-headrest-executive-chair)
chair, which I bought primarily because I wanted something not too big that I
can push underneath my desk when not in use.

{{< img-center src="/img/interviews/incidentio-chris-evans-setup.jpg" alt="The desk of Chris Evans, incident.io" width="100%" >}}

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

Anything with my kids. They are nine and seven, so they're sort of at peak fun
age and want to spend all the time in the world with me. It typically involves
football at the park or other sort of fun outdoorsy things. If I'm not doing
that, I'm running or playing the guitar.

### Find out more

[incident.io](https://incident.io/) is an automatic incident management tool. It
was featured as an "Interesting Tool" in the [Console newsletter](/) on 26
May 2022. This interview was conducted on 12 May 2022.
