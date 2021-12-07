---
title: Interview with Robert Ross, FireHydrant
who: Robert Ross
role: CEO
org: FireHydrant
what: Incident response automation.
tags: ['DevOps']
date: 2021-10-21T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Robert Ross, CEO, FireHydrant
isPage: interviews
topImg1Src: /img/interviews/firehydrant-robert-ross-profile.jpg
topImg2Src: /img/favicons/firehydrant.io.png
ogImg: /img/interviews/firehydrant-robert-ross-desk.jpeg
---

### What is Firehydrant and why did you build it?

[FireHydrant](https://firehydrant.io/) is a reliability platform. We build tools 
for teams to help them improve their system reliability, whether it be incident 
management, publishing retrospectives, status page communication, service 
ownership, and so on...we run the gamut. 

Before FireHydrant I was a site reliability engineer, and I felt what was 
missing from my toolchain was something to help me with incident management, 
as well as service ownership and deployment tracking, things like that. As an 
SRE, I said, "Screw it, I'll build it myself. I still joke that, "I 
accidentally started a company."

We envision a world where all software is reliable. It’s something we say in 
every company all hands meeting. Every technologist who hears that goes, "Yeah, 
right." But that’s the reason why it's our vision, we're never going to run out 
of things to do! We're always going to have something to build. 

A core value of ours is trust because as a customer, you are relying on us to 
be available at challenging times. You trust your data with us. We work to gain 
that trust.

We also consider ‘continuously improving’ and ‘acting with integrity,’ to be 
important company values - making sure that we're always getting better at 
everything we do, and bringing wholeness to our team and mission.

### How do SREs solve this problem right now?

A lot of the time it tends to be manual, and the goal of FireHydrant is to 
automate the processes behind handling an incident so you can focus on 
mitigating it. For example, we help people with the declaration of an incident. 
You can say, "Create a Slack channel. Create a Zoom bridge. Create a bunch of 
things." Before FireHydrant people tend to experience ad hoc freakouts. 

There are a few open source tools. [Monzo](https://monzo.com/blog/2019/07/08/how-we-respond-to-incidents) 
built one called ‘Incident Bot’ that people are using. Some people would create 
very simplistic bots using the [Hubot](https://hubot.github.com/) framework or 
something like that. Ultimately, they became very dusty and not well maintained 
so people would replace it a lot of the time.

There are also commercial tools, like [PagerDuty](https://www.pagerduty.com/), 
but really, it was just scratching the surface. We take it a lot further.

### What does "a day in the life" look like?

I went from a full-time programmer and full-time SRE at [Namely HR](https://www.namely.com/), 
and before then at [DigitalOcean](https://www.digitalocean.com/), to building a 
team at FireHydrant. Hiring a bunch of people, sales, engineering and marketing. 
My focus now is building the company. 

The biggest thing I'm trying to do right now is help developers that may not 
have economic buying power. They don't have a company card, they don't have the 
authority, but they still want to try our product.  They have that constraint, 
but they still want to try FireHydrant, so the aim is to allow people to create 
free tier accounts and get a better sense of control over incidents and 
reliability.

### Are you still getting time to code?

Oh, yeah. I just dropped off of a debugging session, which was really fun. 
They're like, "What is this code you wrote three years ago?" I'm like, "Ah, 
sorry."

### What does your team look like?

We’re a pretty large team now. It started with just me building on the side and 
then I had two co-founders join that are old friends of mine. The moment that 
the seed investment hit the bank account, we started hiring more engineers, 
sales, marketing, and recently, a VP of People. Now, we're a full blown company. 

We're up to 75 people with a number of clients, millions in revenues. The team 
has expanded and many of the things I used to do have been delegated.

### How did you first get into software development?

I was 12 years old and I Googled, "How to make a website?" I’ve had no formal 
training ever since. I didn't go to college after high school. I made websites. 
That's how I made my money as a kid. All my friends were mowing lawns, waiting 
tables. I was nerding out in my bedroom, building websites for small companies. 

What I didn't realize at the time was that I was also building a portfolio for 
myself. When I graduated high school, I got a job three months later at a web 
development firm in San Diego. That was a very fortunate thing that started my career

I mostly have always focused on web-based technology. In 2003, I started 
learning about HTML, then I thought "Well, how do I make this look better? 
Okay. CSS.” I learned JavaScript. From there, I moved to PHP for way too long, 
and then to Ruby and Go. I've also made some iPhone apps that have had a lot 
of downloads. I've run around quite a bit language-wise.

### What's the tech stack for FireHydrant?

We are a Ruby on Rails shop, but we do have some Go microservices here and 
there. We are strictly on Kubernetes on Google Cloud. We use Postgres for our 
database. We use Google Cloud Pub/Sub for all of our message queues which 
handles all the inbound events in a reliable way.

On Google Cloud, we're using Google Cloud load balancers, which goes into our 
NGINX routing layer. This then goes down to our Ruby on Rails application,
which is hooked up to the database. It's actually a fairly simple application 
right now, but the important thing is reliability.

### How do you ensure the reliability of the platform?

Right now, we have a big push for multi-region. We use Fastly for a CDN and 
we’ve been working on adding another provider.

We also are looking at how we can do data evacuation from one region to the 
other using Google Cloud SQL. They recently updated features for that. The way 
we view it is that something is going to break, so it’s about how fast you 
respond to it. Enabling our team to respond quickly to incidents is a big focus of ours.

We use our own tool for that. We use FireHydrant to declare incidents, get the 
right people on the right call, and also just making sure that people have the 
right access while also maintaining good security around it for SOC II 
Compliance. I want to ensure that folks don't come up against a blockade because 
only I have the keys to it, or I was the one that created that service years 
ago. Trying to make sure that people have the appropriate access to do their 
work autonomously.

Of course we run our own tool in a separate environment from production! Our 
mascot is Patchy, which is a dalmatian dog. Naturally, our separate environment 
of FireHydrant is called Dogfood.

### What has been the most interesting development challenge building FireHydrant?

The challenge with building an integration platform is you're trying to map 
abstract concepts into FireHydrant, maybe an incident or a ticket or a document 
of some sort, to multiple applications or multiple third parties.

For example, in FireHydrant, we have a challenge with our ticketing integration 
because a Jira ticket is different than a ServiceNow ticket that is different 
to a Shortcut ticket. When we say, "Create a ticket in FireHydrant," it will 
sync to your ticketing provider. 

There's a lot of Extract Transform Load jobs that need to happen before it can 
actually end up in the ticketing provider. The ticketing providers also have 
different versions of their software. Not only are you trying to map from a 
FireHydrant ticket concept to Jira, you're mapping to Jira server 7 or Jira 
server 8.

Now you have an even bigger challenge like, "Right now, I need to figure out 
which version of Jira I'm working with to then transform it again." The way 
that we've done that is that every integration of FireHydrant relies on the 
idea that we always store it in FireHydrant first. We never exclusively store 
the information in the integration itself and then try to retrieve it every 
once in while, because it can move, and it can change. 

We always start in FireHydrant, then sync. To do this we've built a concept 
called capabilities, and an integration can define what capabilities it 
supports. You can label it and say, "This code path supports ticket syncing," 
then FireHydrant knows, "Okay. Well, I have this interface. I'm just going to 
give it a FireHydrant ticket." Whoever's built the client just needs to handle 
ETL over to Jira.

We've built a system that can add clients pretty rapidly. We can add anyone as 
a ticketing provider. Thanks to this concept of a capability client, we were 
able to build a Shortcut integration in two weeks and get it out to production. 

These capability clients are really the right way to do it, but you do 
encounter the challenge that sometimes data just doesn't map perfectly. You 
have to create field mapping and that's the new challenge. How do we map 
required custom fields in Jira to fields that don't exist in FireHydrant. 
That's an interesting challenge for us.

Defining this as a structured system for integrations has helped as we scale 
the team, which has been another challenge recently. We doubled the engineering 
team in only a few months. The challenge is that you actually lose velocity 
because your team is interviewing people. As people come on, they're helping 
onboard those people. You lose a lot of output and productivity from your 
engineering team because of that. That's also been a challenge, but it's a 
good one. We hired so many great people. I'll take that trade any day.

### What interesting tech are you playing around with at the moment?

We're in a very API-focused shop. We build everything API-first and then the 
frontend on top of that. Our customers get the same API that we do, which 
means that they get the same guarantees that we give ourselves. We're not 
going to break our own frontend by changing our API. One of the advantages 
that comes with that is we've built components in our frontend design system.

We're using React and [Chakra](https://chakra-ui.com/) for the design system. 
This brings a lot of advantages around having a consistent API that we can 
easily build new UI components for.

A good example is our recent release of a status page subscriber list feature. 
A frontend developer was able to make a page in two hours from start to 
production deployment. 

It's not exactly a new technology, but the melding of strict API conventions 
with a strong design framework in front really helps. I haven't seen a company 
in my career do this well, so it's exciting to finally see it kind of happen. 
I think that it's just harder to do it when you're older as a company. It's not 
that these companies can't do it. It's just, it's way harder to get to that 
point if you don't do it early. 

We're about to hit three years. A lot of companies start thinking about design 
systems and API conventions right around that mark, because you're just fighting 
to survive as a startup. We said we're going to risk it all and make sure we do 
these conventions early. That's a lot of compounding interest for the company 
over the last three years. 

### Describe your computer hardware setup

I have a MacBook Pro 16-inch that just got upgraded. I'll have the new one on 
release day - the M1 Max with 16-inch screen and 32GB onboard memory. I’m 
excited for that to arrive and things to become a lot faster. Zoom, Slack and 
Notion all use a lot of CPU cycles!

I have a really nice [LG screen](https://www.apple.com/sg_smb_5200/shop/product/HMUB2PA/A/lg-ultrafine-5k-display). It's the one that Apple recommends. It has an 
integrated camera that works beautifully with the MacBook Pros. The brightness 
keys work on this screen really nicely. 

I also have the space black keyboards from the 10-key that Apple provides, and 
the one with the touch ID that only works with M1. I'll be using that soon and 
also the [Apple Magic Trackpad](https://www.apple.com/shop/product/MK2D3AM/A/magic-trackpad) 
too.

Lastly, I have a [Rain stand](https://www.raindesigninc.com/mstand.html) to hold 
your laptop at the perfect angle.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**Source control:** GitHub.

### Describe your desk setup

{{< img-center
src="/img/interviews/firehydrant-robert-ross-desk.jpeg"
alt="The desk of Robert Ross, FireHydrant"
width="100%"
>}}

I have an [Uplift Desk](https://www.upliftdesk.com/) that's on back order. They 
keep pushing out the delivery. I ordered it four months ago and now it's going 
to get delivered in February next year!

### When coding

**Daytime or nighttime?** Morning.

**Tea or coffee?** Coffee.

**Silence or music?** Really loud music.

### What non-tech activities do you like to do?

I've recently taken up skiing. I've also gotten into bike riding. Otherwise, 
I do a lot of tech related things.

### Find out more

[FireHydrant](https://firehydrant.io/) is an incident response automation 
platform. It was featured as an "interesting tool" in the [Console
newsletter](https://console.dev) on 28 Oct 2021. This interview was conducted
on 21 Oct 2021.
