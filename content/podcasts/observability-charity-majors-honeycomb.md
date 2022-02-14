---
title: Observability
who: Charity Majors
whoLink: https://twitter.com/mipsytipsy
org: Honeycomb
orgLink: https://www.honeycomb.io/
what:
  In this episode we speak to Charity Majors, CTO at Honeycomb, an observability
  tool for distributed systems. We discuss why observability is based around
  events and not metrics, how developers should think about achieving
  appropriately observable systems, why Honeycomb implemented their own
  distributed columnar data store, and how you can delete most of your alerts by
  implementing service level objectives.
season: 2
episode: 3
date: 2022-01-20T07:05:00Z
duration: 27:37
draft: false
summary:
  Observability - a devtools discussion with Charity Majors (Honeycomb). Episode
  3 (Season 2) of the Console DevTools Podcast.
metaDescription:
  Observability - a devtools discussion with Charity Majors (Honeycomb). Episode
  3 (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcasts/honeycomb-charity-majors-profile.jpg
topImg2Src: /img/favicons/docs.honeycomb.io.png
ogImg: /img/podcasts/honeycomb-charity-majors-profile.jpg
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

In this episode we speak to Charity Majors, CTO at
[Honeycomb](https://www.honeycomb.io/), an observability tool for distributed
systems. We discuss why observability is based around events and not metrics,
how developers should think about achieving appropriately observable systems,
why Honeycomb implemented their own distributed columnar data store, and how you
can delete most of your alerts by implementing service level objectives.

{{< rich-title-5 icon="future-head" >}}About Charity Majors
{{</ rich-title-5 >}}

Charity Majors is an ops engineer and accidental startup founder at
honeycomb.io. Prior to this she worked at Parse, Facebook, and Linden Labs. She
is the co-author of O'Reilly's Database Reliability Engineering.

### Highlights

{{< podcast-episode/clipping time="01:20"  >}}

**David Mytton:** ...

**Charity Majors:** ...

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" >}}

**David Mytton:** Welcome to the Console podcast. I'm David Mytton, co-founder
of console.dev, a free weekly newsletter highlighting the best and most
interesting tools for developers.

In this episode, I speak with Charity Majors, CTO at Honeycomb, an observability
tool for distributed systems. We discuss why observability is based around
events and not metrics, how developers should think about achieving
appropriately observable systems, why Honeycomb implemented their own
distributed column data store, and how you can delete most of your alerts by
implementing service level objectives. We're keeping this to 30 minutes, so
let's get started.

I'm here with Charity Majors:. Charity, thanks for joining the Console podcast.

**Charity Majors:** Yeah, thanks for having me. We go way back now, don't we
David?

**David Mytton:** That's right. I go all the way back to the early days of
MongoDB. A long time.

**Charity Majors:** 2012?

**David Mytton:** Yeah. Yeah.

**Charity Majors:** Almost a decade? Holy crap.

**David Mytton:** I know. All those conferences, touring the world with Mongo.

**Charity Majors:** Yeah. We were their favorite non hired \[inaudible
00:01:06\] folks there for a while I think.

**David Mytton:** The outsource marketing team.

**Charity Majors:** Yep.

**David Mytton:** Well, let's start with a brief background then. Tell us a
little bit about what you are currently doing and how you got here.

**Charity Majors:** Well, I'm the co-founder and CTO of honeycomb.io, which is,
I would say the world first actual observability tool or platform. We got here
because, as you were just saying, Parse early Mongo days and everything. Parse
was mobile backend as a service. We were doing a lot of things before its time.
We were doing microservices before there was really a term for it. We were doing
a lot of platform things that the existing set of tools just really didn't work
for, well, all the aggregates and everything. When you've got a million users
and a different app hits the iTunes top 10 every week, you can't really predict
and make dashboards, and just use that to explain what's going on in your
system.

So Parse got acquired by Facebook and it was professionally embarrassing to me
how often we were going down. It was just every day we'd go down and I could go
on and on about that, but TLDR, we started using this one tool at Facebook
called Scuba, which was this butt ugly, aggressively hostile to users tool, but
it let you do one thing and one thing only very well, which was slice and dice
on high cardinal dimensions and basically in real time, and not only that, but
at high dimensionality as well, because you can do that as many times as you
wanted, you can slice and dice by... You could see a spike of errors, then you
could go "what is it?" Well slice and dice and figure out that, oh, all of these
errors are coming from this version of iOS, right? This version of the build
running, this language pack in this region, using these queries, it was infinite
how many you could string together on the fly.

This was just world changing for us, because the amount of time it took us to
identify and solve these really complex problems dropped like a rock, from
hours, days to seconds, not even minutes. It wasn't even an engineering problem
anymore, so much as a support problem, you could just click, click, click. Oh,
there it is. Because it wasn't like with dashboards, you're very much jumping to
the end of the story. You're like, oh, maybe it's this scenario, and then you're
looking to validate, oh, maybe it's this scenario. Instead, with our workflow,
with Scuba, was you were following the trail of breadcrumbs. You didn't have to
know where you were going to end up in order to debug it. So I was leaving
Facebook after a couple years and planning to go be an engineering manager at
Slack or Stripe or something.

That's when I kind of went, "oh, I don't know how engineer anymore, without
these tools that we've been using and developing around". So Christina and I
started Honeycomb, and for the first six months, we realized pretty quickly that
we were going to have to write a storage engine from scratch, which is something
I was spent my entire career telling people, never write a database, never write
a database, but we had to. We had to start writing it from scratch, because we
needed a column restore and we needed all these things that nothing an open
source would address. Honestly, the hardest part wasn't the column restore. The
hardest part was trying to figure out how to talk about it to people. We knew
that what we were doing wasn't anything like monitoring, it wasn't going to be
post talk. It wasn't going to be around dashboards.

We knew it was supposed to be interactive, almost were like running GDP against
a network piece of software with anything on the market. And I think it was
July. Like we started in January and in July is when I first Googled like what
does observability mean? And I found the mechanical engineering definition for
it. It's the mathematical do of controllability, observability is how understand
the inner working of system, just by asking question from the outside, without
any prior knowledge of where it's supposed to go. And I went like, oh my God,
light bulbs are just like, ah, this is what we're trying to build. This is
exactly what we're trying to do. Then about three years, just trying to
evangelize that and trying to explain to people, everybody had been told that
high cardinality was impossible, that they just, it just couldn't be done.

And they just accepted that. It is impossible when you start with metrics
because the cost of them rises linearly with your cardinality. It's not
impossible if you use these arbitrarily wide structured data blocks, which is,
you know what, we were basing our \[ bleeped 00:05:14\] on. So it took about
three years, I think for us to find product market fit, it was grueling. And
honestly it was just as much the world changing to meet us as it was us changing
our product to meet the world. But finally, it all clicked when we introduced
these sort of auto instrumentation and the landing page where you would be met,
not with an empty query browser, but with the traditional errors, latency,
requests per second, people could orient themselves. So at this point, we're
almost six years in. We really hit our stride around year four and a half, which
is forever in VC years.

We went through a few different investors who are just like, "If you haven't
succeeded yet, you're never going to succeed." And I'm like, "But we had to
write a storage engine. You don't understand how long this takes." There are so
many barriers to actually innovating in the infrastructure space that we finally
got there. We finally have investors who believe in us and we finally are
hitting all of our numbers and doing that growth curve, like a hockey stick. And
what I will say is that as people have tried us, we have almost no churn. Almost
nobody goes back because once it's clicked in your mind, you just write software
so much faster and so much better. And it's so much clearer and it's so much
more attractable. And one of our best sources of new customers is when an
engineer leaves a company that was using Honeycomb and they to go to a new
company and they have the exact same experience that I did, which is just like,
"Holy, I don't know how to engineer without this anymore." And they bring us in.

**David Mytton:** Can you explain what you mean by high cardinality and what
that means for focusing on events rather than metrics?

**Charity Majors:** Yeah. High cardinality is, well, imagine you have a
collection of a hundred million users and you've got all of these variables
about them, like gender height, wait, first name, last name. Well anything like
first name, last name is going to be very high cardinality. Anything that is a
unique ID is going to be the highest possible cardinality, social security
number. Anything that is a single value, like species equals human will be the
lowest possible cardinality. And the thing about metrics is a metric is a single
number with a few tags appended and metrics are really designed for efficiency
and not for describe ability or correlation or anything like that. They're
designed to be very efficient, but they only really handle low cardinality
dimensions. They can be aggregated really easily on things like gender or
species, but they cannot be aggregated on things like social security number or
weight or height because there are just too many possible values.

And when you're using events instead, you have these arbitrarily wide structured
data blocks. And when I say arbitrarily wide, like a well instrumented system
using Honeycomb tends to have like 400 or 500 dimensions. So that's 400, 500 key
value pairs per request that come in. And the beauty of that is that any one of
those can be high cardinality. All of them can be high cardinality. None of them
can be, you can have a tag equals everything from operating system to tag equals
the build ID, tag equals height, weight, whatever. It really doesn't matter. And
using the column store like Honeycomb has, you can then just slice and dice and
perform these queries really fast. This is the other thing people get hooked on
is that it's like make the change and it's there. There's none of this lag.

When you're using metrics and aggregates, there's always a window which the
window has to close so it can aggregate the values. And just traditionally, when
I was using Datadog, I'd be like four or five minutes until I get my change
back. What the hell is this? That's an eternity in SRE years. But with
Honeycomb, we actually have an end to end check that will go off and page
someone, if it's been more than 10 seconds from when the record was written when
you can read it back because it needs to be that fast. And your ability to ask
these questions needs to be that fast because you need to be in a state of flow.
You can't have to compose a query and then go to the bathroom or get your coffee
before it, that's not debugging. That's like doing BI stuff. The whole point of
observability is that you should be able to iterate swiftly, like is it this? Is
it this? That is it that? And just like follow the path.

**David Mytton:** So take us through the decision to build your own data store
then because if we go back to, when we first met, there were a few options for
data stores. MongoDB was the brand new shiny one and there were SQL databases,
relational databases. And there are a few new ideas coming around with
Cassandra. But today, if you just look at like AWS's database tab on their
website, they've got a lot of products there. So how have things evolved?

**Charity Majors:** We would still need to write our own, sadly. We did a lot of
investigation at the time and, and we tried out a bunch of things. And honestly
the one data storage type that we came closest to using was called Druid. I
don't know if you're familiar with Druid IO, but Druid, it's a high performance
database that was basically developed for some marketing stuff it's associated
with. I don't remember what the name of the company is, but it had a lot of the
things that we wanted, like the capacity to ingest any type of data, whether
it's strings or numbers or whatever. The one thing that it didn't do, we
estimated we would've had to rewrite about a third of the database just to get
what we wanted, any ingest layer, which was arbitrarily wide.

**Charity Majors:** You can't have to deal schema if you're dealing with
observability, anything that is schema based is verboten, because you need to be
able to toss in a new key value pair whenever it comes up and you need to be
able to stop writing that. It has to have that flexibility and that fluidity in
order for you to have the value of observability and most databases don't like
that. Most databases for good reasons, for efficiency and for all this stuff,
they want you to define schema. MongoDB famously is one that doesn't make you,
you can do some fancy tricks with Postgres. Postgres has now JSON block store
and everything. But in the end, having the ability to do completely flexible
schema was huge for us. And we also knew that having a column or database was
key.

**Charity Majors:** For those who don't know having column or database is
basically like the opposite of an RDBMS. Everything is an index. Everything that
you put in there is an index. And then the way we developed it, based on this
\[Scuba White Paper 00:11:27\] was in a widely distributed fashion where, well
we use \[Kafka 00:11:31\] , the events come in through the API, they get dropped
into Kafka. And then we have a pair of retriever data stores reading each topic
from Kafka. Each topic translates into a column. You can distribute any user's
traffic widely over many columns, over many nodes. It's very flexible. We've
got, I don't know, a couple hundred data store notes at this point. Each have a
pair for fail. But it's just really flexible and elastic the changes that we
needed to make. And we actually age out the data to S3 after just a couple hours
too.

**Charity Majors:** And our query planner, this is funny. Our query planner runs
mostly in serverless queries, Lambda, AWS queries. We move the query planner to
AWS. We thought that it would slow the whole thing down, turns out it didn't,
the performance footprint is different, but not slower on the whole. At the end
of the day, having that ability of control over also how many databases will
take the trade off of fast and close to right is better than done and perfect?

**Charity Majors:** For databases, that's not a good story to tell, but for ours
it is because it matters way more for people to be able to get their results
very quickly. And if it's off, by 0.5%, once in a while, doesn't matter so much
as it getting to them very swiftly. We're actually working on a blog post right
now. The title is like, "10 reasons why you really don't want us to open store
our data store." And it basically just comes down to all these reasons. It's
narrowly optimized for observability use cases and for our use cases. And it
would be pathologically difficult for most people to run because it's not just
like spin up a node. It's at the level of complexity of you remember anything
that had to use Zookeeper back in the day, it's like, okay, now I've got five
problems.

**David Mytton:** Right. So it's optimized for those really high performance
queries in a very short time window where you're debugging something happening.
And then the S3 latency is acceptable for the longer queries?

**Charity Majors:** Actually our 99th percentile latency is still under a
second. S3 is faster than you'd expect when you're fanning it out widely enough.
Not if you're running a query over 60 days worth, then it might take a few
seconds, but it's pretty fast. I mean, aging out is key too, but also just the
ability to distribute it horizontally. Because you're basically going to be
doing a full table scan across all of the indexes that you're trying to pull
from having the ability to write out columns that are very wide strings and
index on those and do groupings with all the other SQL operators and stuff.
There's just a lot of stuff that nobody in their right mind would write a
database to handle.

**David Mytton:** And how does cost come into the equation? Because that was
always the big issue with trying to get really good before from queries is just
the cost of memory or some specialized database that you might buy as a service.
How have you thought about that?

**Charity Majors:** (14:22):

Yeah, that's a great question because I think that observability, the reason it
came around when it did apart from us being there, it is like any scientific
invention when the time comes, someone able to figure it out. The converging
reasons that this was the time for observability I think is because the
cheapness of hardware like SSDs are now, at Facebook, they were in all the
\[Bleeped 00:14:44\] Ram, they had these giant Ram discs that they would... And
nobody's going to pay for that, but now we can put it on SSDs and then age it
out to S3 pretty quickly, given that like over 90% of all queries are for within
the last day or two. So we run that on SSDs that are local run the rest in S3,
you can handle some stuff visually to be like, okay, here's the fast results
waiting a couple seconds to you load the S3 results. People are really happy
with that.

So I think that the emergence of really fast commodity hardware and coupled with
the rise of microservices, because when what you had was the web tier, the
application, the database, all the complexity was basically bound. 90% of it was
bound up in the app and the rest of it was bound up in the database. And there
wasn't really, if alls failed, you could attach DBD and step through it or you
could do a bunch of fancy, MySQL stuff, whatever.

But the hardest problem with modern systems is not so much debugging your code.
It's where the \[bleeped 00:15:41\] in the system is the code that I need to
debug when you bought hundreds of services? Everything is a high cardinality
field now. The number of servers, the containers that you have, the number of
queries you run, the number of just everything. And so much of modern stacks may
not even run on your own hardware. It might be a third party thing. It might be
Lambda jobs. Anything that you could instrument for yourself though, should be
able to be collected and in one place that you can tell just that at a glance
where the problem is coming from.

**David Mytton:** Where do you see the role of some of the more specialist time
series databases becoming quite popular now, particularly open source databases?
Are those still relevant? Could developers just run their own?

**Charity Majors:** People could get a lot out of metrics. It's a 30 year old
technology. We have gotten used to contorting ourselves in all sorts of ways and
it's the thing that people are familiar with. At the end of the day, I wouldn't
actually call anything that's built on time series database observability that
I've seen. It just doesn't measure up to the level of... Which is so unfortunate
that people have co-opted the term observability for anything that you're doing,
"Oh, we have metrics, logs and traces. Therefore we have..." In my mind, if you
have to hop from tool to tool to tool to answer the question, that's definitely
not observability, but I have no match for hundreds of millions of dollars in
marketing spent. So we are where we are. But I will say that the engineers who
experience the difference, understand it and won't go back.

**Charity Majors:** There's always going to be use cases for time series
databases, they're so good at aggregating stuff. They're so good at doing things
cheaply and at Honeycomb, we just added a metrics capability, both so that
people can get more easily onboarded and because there are a few metrics that
are worth paying attention to. In my mind, most of the metrics stuff should be
infrastructure because it's stuff that you're interested in asking the, for the
perspective of your service or the perspective of your hardware. You're asking,
am I good? Am I safe? Am I running as expected? Metrics work really great for
that because that's how you aggregate. For observability, it's really centered
around how is my user's experience? How is each and every one of my users
experience today, being able to slice and dice by that high cardinal dimension,
which is your user ID and just ask, how is the application behaving for them?

**Charity Majors:** There's non overlapping or minimally overlapping \[inaudible
00:18:05\] where if you run a lot of infrastructure, absolutely need lots of
time series databases. If you mostly run your own software, this is the stuff
that's your bread and butter that you ship every day, you mostly need
observability. But you still probably want to answer the question, if I just
shipped some code, did my memory usage triple or did the CPU usage spike or did
my data usage explode? Other than those three questions, it's not clear to me
that you need much more of that from your infrastructure layer. I think
honestly, that thinking about instrumentation, the way the serverless kids do is
the right paradigm moving forward. You don't have access to a lot of the low
level infrastructure stuff, but you ask the questions that you need to know in
order to keep your users' experiences healthy. Maybe a container isn't
performing well anymore. Just stop sending traffic to it, because that's someone
else's problem. Your problem is keeping track of your user's experience.

**David Mytton:** And is this where the concept of appropriate observability
comes in? What does that mean for granularity and developers having to
instrument everything? Or is it just certain things?

**Charity Majors:** I think the right way to instrument for observability is,
like I said, by aggregating around the user's experience, which means like the
way Honeycomb does it is the request enters a service. We open a new Honeycomb
event. We pre-populate it with everything we know about it. The variables that
we fed in via the request, anything about the AWS environment, anything about
the language internals, all that stuff. While that request is executing, you as
a developer could go, what might be useful to be in the future? Oh, user ID
might be useful. Pop that one. Copy code ID might be useful, pop that one.
Whatever you think might be useful to you in the future. And then as the request
is ready to exit or error that gets shipped off in one arbitrarily wide
structured data block. And what you basically end up with is one of these events
per request per service, which is how you can tell at a glance where in your
entire system the badness is coming from.

**Charity Majors:** And because you have these wide events, you could correlate
a \[ 00:20:07\] ton of information. You can go, "Oh, all of these errors have
these 20 different variables in common," or stuff like that. Which is materially
different from what you did with metrics, because if you wanted to be able to
ask those questions, you had to predict them in advance. You had to go, "Ah,
maybe someday we will get a bunch of errors that are coming from this iOS
device, this version, this build ID." You have to predict and create a dashboard
up front for it. And there's just an infinite number of things that can go
wrong. That just doesn't work anymore.

**David Mytton:**Does that mean you are storing all of the raw data all of the
time or does sampling come in?

**Charity Majors:** Well, that's a client side decision. We don't make that
decision for you. Our client side libraries support dynamic sampling, because I
mean like at the end of the day, if you want your health check request to have
the same level of importance as your errors to slash payments, that's up to you.
Many people don't, but that's up to you, but we store it all. We give everybody,
even our free tier, 60 days worth of storage because storage is cheap now it
really me off the way. So many companies are still charging on storage like
that's what's costly for them. That's not costly at all. What's costly is the
engineering effort to make a great user experience.

**David Mytton:** That makes sense. So in terms of the next step, once all the
data's in there, I suppose there's two route to using it. There's something's
gone wrong and you need to access the data, you are running some kind of query,
but then the step before that is knowing that something has gone wrong and
that's alerting. And the typical problem is too many alerts, alert fatigue. How
do you think about that?

**Charity Majors:** Oh, I'm so glad you asked. What we see is that when people
adopt SLOs, they get to delete like 90% of their paging alerts. You want to
align your alerts with your customers actually being in pain and you want to
align them with as this alert is being burned down, is it so bad that you need
to wake someone up in the middle of the night or is it not? So you get to
optimize for engineering happiness. Besides that though, I really think that
observability demands a different of interacting with your data than monitoring
does. Monitoring is all about, you should never have to look at your dashboards.
It will alert you. It will tell you when it's time to look at it. Otherwise you
don't have to look at them at all.

With observability, I think it's about being a constant kind of conversation
with your code in production, as you're writing and shipping code. Hopefully you
have very short feedback loop between the time when you write the code and when
it's live in production, that's what makes this magical. If it's 15 minutes or
less, you're writing it and instrumenting it with an eye to your future self.
How will I know if this is good code or not? How will I understand if this is
working or not, then you merge it to main in a few minutes, it's live. And then
you go look at it and you ask, is it doing what I expected it to do? Does
anything else look weird?

Most bugs that we write will never actually rise to the level of paging us. They
shouldn't. In distributed systems, your system is comprised of so many bugs
right now. The joy is not making it so there are no bugs it's making so that
it's resilient from lots of bugs, but you should have a habit of just going and
looking at it and seeing if it's doing what you expect it to do.

This is how you build your intuition, the intuition that any senior engineer
should have, just the gut feeling of what is happening. Does it feel right? I
think of instrumentation as being commenting, but for real, because you include
the state of production in your actual commenting. So you're asking the system,
is it doing what I expected it to do? And getting yourself into that feedback
loop and learning to go to go look at the system and explore the system and
follow the...

I feel like so often we put new engineers on call and they'll see red on the
screen. They're like, "Ah, something's wrong." And we're like, "Oh grasshopper,
so many things are wrong. Don't waste your time trying to figure out what it
is." But with observability, I feel like you can often follow that trail and
figure out pretty quickly what it is and if it matters and you can fix the
thing. We became engineers because we love solving problems. And once you hook
up that joy and that feedback loop, that dopamine hit of being able to answer
the questions and figure out what's happening and fix the problems and make your
system much more tractable and comprehensible, over time that leads to a much
better systems. And it leads to a culture where people aren't afraid of
production and at least to a culture where people want to see what's happening.
They're not afraid to see what's happening. And that I think is the ultimate
goal.

**David Mytton:** And this plays into the idea that developers should be
responsible for the code that they write. Once it goes into production, it's not
just throwing it over to another team, right?

It's inevitable. I mean, our systems are becoming so complex that you can't run
them like black boxes. I come from ops. I think this is wonderful for ops people
and SREs. I know that this is can sound a little scary and we can be a little
resistant to change. And I know that our scars come from a good place. We've
been scarred. We've seen engineers do terrible things, but it's not that we want
to invite software engineers into our tendencies for masochism. That's not the
goal here. The goal is to make it actually better for all of us. And honestly,
systems are getting to the point where the only people who have any hope of
debugging them quickly are the people who wrote them. So our jobs as ops people
are much more to create guardrails, to make it safe for engineers to be in
production, to bring observability to the team, to train them on how to have
that virtuous feedback loop, where you're looking at it to take their hands and
lead them to the water, so to speak because it doesn't work any other way.

**David Mytton:** Great. Well, before we wrap up, I have two lightning questions
for you. So first is, are there any interesting dev tools that you're playing
around with at the moment?

**Charity Majors:** Yeah. I've been looking at \[Akeda 00:25:50\] and some other
of the streaming software stuff. I'm not quite sure how it fits into the future
yet, but there's something there. I'm afraid that it's going to be like the way
tracing was for too long and still kind of is where it's off putting and
complicated and only the top 5% of elite engineers ever interact with it. That's
the bad view, but I'm trying to figure out how it could be better than that. And
\[Liz Fong-Jones 00:26:14\] and I have been talking about, maybe this is
actually the answer to auto instrumentation. If we can be generating source
graphs and providing a glimpse into here's where your code is actually failing.
I don't know. We'll see.

**David Mytton:** And then the second question is what your current tech setup,
what hardware and software are using on a daily basis?

**Charity Majors:** MacBook Pro, Chrome and Quip, sadly. I still use VIM for all
of my to-do lists and stuff, but it's been a long time since I've actually
gotten a log-in or do anything useful.

**David Mytton:** Excellent. Well, that's all we've got time for today.
Unfortunately. Where can people find you online?

**Charity Majors:** My personal site is charity.wtf. Honeycomb blog is
honeycomb.io/blog, and I'm occasionally on Twitter at Nipseytipsy.

**David Mytton:** Excellent. Well, thanks joining the Console podcast.

**Charity Majors:** Thanks for having me, super fun.

**David Mytton:** Thanks for listening to the Console Dev Tools podcast. Please
let us know what you think on Twitter. I'm at David Mytton, and you can follow
at console.dev. Don't forget to subscribe and rate us in your podcast player.
And if you are playing around with or building any interesting dev tools, please
get in touch. Our email's in this show notes. See you next time.

{{</ box-collapsible >}}
