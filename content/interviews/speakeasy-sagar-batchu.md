---
title: Interview with Sagar Batchu, Sagar Batchu
who: Sagar Batchu
role: CEO
org: Sagar Batchu
what: Developer experience for APIs.
tags: ["Devex", "APIs"]
date: 2022-09-22T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Sagar Batchu, CEO, Sagar Batchu
isPage: interviews
topImg1Src: /img/interviews/speakeasy-sagar-batchu-profile.jpeg
topImg2Src: /img/favicons/www.speakeasyapi.dev.jpg
ogImg: /img/interviews/speakeasy-sagar-batchu-desk.jpeg
---

### What is Speakeasy? Why did you build it?

Today APIs are exploding in popularity. We have so many API-first businesses
across different verticals. For more and more companies, their success is tied
closely with API usage - the more your API gets used the higher chance that your
company is leading the market. But for most APIs today, the status quo of
integration and usage is still a big bottleneck to growth. Companies continue to
support a lot of API users with just static documentation. There's a lot of hand
holding and there's an immense support load andnd a developer's experience
burden, just using APIs, could be a lot easier than it is today. It hasn't quite
caught up to how crazy popular they are. 

That was the very basic thesis around why we started
[Speakeasy](https://www.speakeasyapi.dev/). We just wanted to make it really
simple for developers to both produce and consume APIs.

In terms of products, we do two things today - we provide a set of composable
developer portal embeds that are powered by an SDK that you put into your API.
We capture data directly from your API to power experiences like usage
dashboards and request viewers that enable the end user to unblock themselves
when using your API without getting on a call with your dev team or sharing logs
over a ticket. It provides a great devex for your end users, as well as reduces
work for the API for your team. We're starting with devex today, but in the
longer term, we really want to address everything about producing and consuming
APIs

We go beyond the world of documentation and offer a world class developer
experience portal with very minimal effort. You can think of Speakeasy as the
API platform team at your company that builds internal tooling that helps
externalize information to your users in the form of dashboards, client-SDKs,
tooling, and  documentation. 

We've turned this into API ops - our vision is that developers get to focus 100%
of their time on the API code itself. And at some point we get to this place
where you git commit and you have a fantastic devex spun up for your API much in
the way that we have seamless infrastructure hosting. That's come out of
companies like Heroku, where you just push your app, you have it hosted. There's
a similar, analogous story for APIs that's evolving.

We want to wrap that all up into a product that can be used instantaneously with
your existing APIs. Companies use Speakeasy as a way to provide an interactive
and powerful developer portal experience as well as client SDKs for the users to
actually consume those APIs. So it really just comes down to spending less of
your dev time on support. The success of companies like Twilio and Stripe has
set the expectations of what a good API is.

### What does a "day in the life" look like for you?

The days are long, but the weeks are short! Each day is a fun mix of customer
calls, standups, and technical deep dives with the team. Then collaborating in
person with my co-founder Simon, who I'm very lucky to have in this journey to
make this happen. I'm a developer myself - it’s what I've been doing for a
number of years. I think in my past, I've been a very regimented person with my
schedule. So this has put a lot of stress on me to figure out how to maintain
that while having an inherently ambiguous job. I do try to maintain a little bit
of structure, try to get up pretty early around 6am and get a 30 minutes of
quiet time before the day starts, do the rituals of yoga and coffee and start
planning up the day. 

I have a schedule here written down, but just looking at it, I don't know how
closely I follow that actually. We have a distributed team that's on the West
Coast PST in the U.S., and then in London, in the UK. And so we're split, which
means our standup starts pretty early for me - 8:00 AM - and then we have
collaboration time when we're pretty live online on Slack and Zoom. After that,
the other sides of the day for both time zones of more quiet kind of deep focus,
quiet time.

That's how the day goes. I try to make sure I do get some amount of reading
every night. That's not necessarily Speakeasy-related, although APIs are
everywhere.

### What is the team structure around Speakeasy?

We’re a seven person team right now - five of us doing development (Thomas,
Tristan, Alexa, Anuraag and myself) , Nolan, who's heading up developer
relations, content and marketing, and then Simon, my co-founder is doing all
things - from going to market with products to figuring out how we serve
enterprise as well. It is a very flat company, there's no hierarchy at the
moment. [Autonomy and ownership](https://www.speakeasyapi.dev/join-us) are our
core values. Everyone is trusted to go from user interviews, to design all the
way to shipping to a customer. Every engineer is their own product manager and
everyone is owning the complete life cycle of the product.

One of the awesome things about being a developer focused company is that all
developers are able to be involved in the full scope of the business all the way
from sales calls to marketing, to writing blog posts. It’s very much a dev first
company.

### How did you first get into software development?

I studied physics in undergrad, focused a lot on experimental physics and
spending a lot of time in the lab. I realized that the thing that I enjoyed the
most was not the time in the lab, but the exercise, after taking that data,
building simple software around it to actually make the analysis work and
actually make a project. In my last year of undergrad I started freaking out
that I didn't want to do a PhD, and I didn't want to spend more time in the lab.
So I started to cram in as many CS courses as I could.

When I came out of school, I worked for a couple places, a little bit closer to
hardware, doing software and firmware and working at an IoT company. That's how
I got into software, with more and more work with software teams working on big
data APIs, building enterprise software. Most recently I lived in London for a
number of years, working to help start and grow an engineering team for
LiveRamp, a U.S. based company out there. Then I moved back to the Bay Area. I
am really lucky to have an awesome network here. London is amazing but the Bay
Area has this intensity around startups and entrepreneurship

I spent a number of years coding in Java, I had a little stint with Kotlin too
which I found super fun to play with. At Speakeasy, we've built the core
platform in Go, but being a product that plugs into APIs, we have to support a
variety of languages. These days we're all polyglots, doing everything like JVM,
Python, Go, TypeScript, even Rust. So at this point, I hardly think about what
languages we're using.

### What is the most interesting development challenge you've faced working on Speakeasy?

With a developer product, you have to get a lot of feedback, a lot of time
invested in thinking about the surface area of the product because dev products
are very much things you touch and feel every day. There's an ergonomics
question that takes a long time to figure out, and that can dictate the
direction of the product as well. 

Early in Speakeasy's history, we were kind of working with different techniques
like static code analysis and annotations. And as we did that, we realized that
the ergonomics were not nearly as good as having a code-first SDK. Going through
that debate, working with customers to understand what made sense, was one of
the more interesting parts of our journey so far. We ended up going with the SDK
approach, which helped us scale and support multiple languages more quickly.

Then more recently we've had to think about how to be an enterprise friendly
product which has meant building a product that's fully self-hosted.

### What is the most interesting tech tool you are playing around with at the moment?

I recently shifted over to using Warp as my terminal and it's really amazing to
see a terminal getting closer to a web browser. Between Warp and the new GitHub
CLI, you have to leave your terminal less and less. Warp has embedded AI command
search, which is fantastic. Natural language search for arcane commands you've
forgotten is great. I'm looking forward to building more plugins into Warp and
taking advantage of the kind of collaborative feature set between devs and
teams. I know that you can build workflows with this, so building a Speakeasy
workflow would be pretty cool. Merging the browser and the terminal seems like a
very interesting idea. I also want to give a shout out to Linear for making dev
standups so much easier :) 

### Describe your computer hardware setup

I am a Mac user, but I have not moved to M1 yet. Until recently, I was the only
one in our team who could do infrastructure work because there were modules that
you had to compile yourself if you're on M1! 

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** IntelliJ with GitHub Copilot.

**Source control:** Git & GitHub.

### Describe your desk setup 

I used to have a lot of fancy stuff, but with the more fragmented day and
lifestyle I'm kind of moving around a lot now. So I just use this laptop. 

{{< img-center src="/img/interviews/speakeasy-sagar-batchu-desk.jpeg" alt="The desk of Sagar Batchu, Speakeasy" width="100%" >}}

### When coding

Daytime or nighttime? Daytime.

Tea or coffee? Coffee.

Silence or music? Silence.

### What non-tech activities do you like to do?

I could say a lot of typical Bay Area things like hiking, but honestly, the
thing that I've been doing a lot of recently is playing
[pickleball](https://en.wikipedia.org/wiki/Pickleball). It has taken over the
U.S. So if you haven't played pickleball, try it out. It’s a great sport
somewhere halfway between tennis and table tennis.

### Find out more

Speakeasy is a developer experience portal for APIs. It was featured as an "interesting
tool" in the [Console newsletter](/) on 3 Nov 2022. This interview was conducted
on 22 Sep 2022.
