---
title: Interview with Patrick Teague, Dodgeball
who: Patrick Teague
role: CTO
org: Dodgeball
what: Fraud prevention.
tags: ["Anti-fraud", "Security"]
date: 2023-02-16T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Patrick Teague, CTO, Dodgeball
isPage: interviews
topImg1Src: /img/interviews/dodgeball-patrick-teague-profile.jpg
topImg2Src: /img/favicons/www.dodgeballhq.com.png
ogImg: /img/interviews/dodgeball-patrick-teague-desk.jpg
---

### What is Dodgeball? Why did you build it?

[Dodgeball](https://www.dodgeballhq.com/) is a single integration for managing
fraud and malicious user behavior on any application. Dodgeball protects
applications by tracking visitors (this is optional) and by executing
checkpoints at key moments of risk, such as account opening, login, and
payments.

It doesn't stop at just those use cases – you can use a checkpoint to secure
anything, so anytime you're developing a new feature for any sort of product,
particularly two-sided marketplaces, you can put in a checkpoint to address risk
that might evolve over time. A classic use-case is when a fraudster comes in and
starts posting stuff on your platform, which decreases trust and safety in your
platform, and you need a way to secure that for a two-sided marketplace, and put
in a checkpoint. You can start adding in things like IDV, do MFA for helping to
prevent account takeovers, without needing to make a single line of code change.

Our mission is to make it a no-brainer for every company to protect their
applications from fraud. You can integrate it into your application in 5
minutes, it's free for startups, and well-documented. We believe if we can make
it easy for companies to increase trust and safety on their platforms, by
extension we can make the world a safer and more trusting place.

We built Dodgeball to shut the fraud up. Adam, Andrew, and I all come from
technical leadership roles. One of the biggest challenges you face when building
something new is figuring out how to protect it; there's always someone out
there looking to abuse it. While there are many point-solutions available for
addressing pieces of the fraud stack, there's no single solution that combines
them all into one offering.

In a previous role with a Fintech startup, we saw a huge influx in the amount of
fraud on our platform as we grew. The best solution we could find was to
duct-tape together a bunch of point-solutions, each with their own sales
process, credentials, documentation, and integrations. The development overhead
to get something in place was massive and maintaining it was a nightmare.

Since fraud is constantly evolving, what we were looking for was something like
[Segment](https://segment.com/product/developer-toolkit/) for security; a
solution where we could turn-on integrations as needed without needing to do a
new integration. We couldn't find anything like that, which as an entrepreneur
sets off alarms that you might be onto something. I then met Adam and Andrew who
had similar experiences and that's when Dodgeball was born. We interviewed trust
and safety teams from Uber, Google, Spotify, and AirBnB (to name a few) who also
had these problems, which guided us to build Dodgeball as it exists now.

### What does a "day in the life" look like for you?

It really depends on the day. I use a lot of time-boxing to ensure key functions
get fulfilled, while using the remaining time to code. Those core functions
consist of reviewing PRs, doing 1:1s with team members, jumping on impromptu
calls to assist with issues, designing future UX, writing external
documentation, and technical sales calls. At the end of the day though, there's
no set structure and I have to be prepared to have my entire schedule
reshuffled. There's no "that's not my job" in a startup; you just do it.

### What is the team structure around Dodgeball?

We're a small dev-heavy team. We currently have 5 full-time engineers, a head of
trust and safety, a head of growth, and of course our CEO.

### How did you first get into software development?

I first taught myself to program when I was 15 years old. I did it out of
necessity as I started by making robots from scratch (designing circuit boards,
soldering, selecting microcontrollers) to challenge myself to learn more than
what I was being taught in school. I used those robots to design an experiment
to test Robert Triver's theory of reciprocal altruism.

I've been professionally programming since I was 18 years old, when I got my
first paying job as a junior javascript engineer building NordstromRack.com.
Since then I've worked at various sizes of company in roles ranging from senior
engineer to chief software architect to CTO.

I initially started with Java and C, then I went to PHP and then to Node.js and
JavaScript. The JavaScript ecosystem has really evolved a lot when it comes to
server side JavaScript. With the advent of TypeScript, it solves a lot of the
big pain points.

### What is the most interesting development challenge you've faced working on Dodgeball?

Dodgeball is a way to vary data between these different integrations and
different systems. If you really look at it, that's like a classic ETL problem,
so we've got data in this one place, it needs to be in this format to get to
this other place. The hardest part is the UX that's involved, especially for
non-technical users. How do you make it clear how you're mapping data from one
place to another place and not overwhelm them?

The existing ETL UX didn't cut it for a non-technical user, so we had to go back
to the drawing-board to create something intuitive. We've gone through 3 or 4
iterations on it to get it to the point it’s at now. If you have to, you can go
in and do the manual data mappings through a pretty intuitive user interface,
but the goal is that you actually don't even have to touch it. 

For a non-technical user, the best experience is not having to touch data
mappings. Figuring out how to make dragging-in a new integration to a checkpoint
"just work" without the need to do any manual data mapping work has been the
biggest development challenge, because it's something where there's not a lot of
examples that you can refer to.

### What is the most interesting tech you playing around with at the moment?

I'm 100% devoted to Dodgeball, so I don't really have extra time to poke around
with other tech. I've been following the latest advancements in generative AI
(ChatGPT, Stable Diffusion), along with the newest technologies to detect them
as they are ripe for abuse.

### Describe your computer hardware setup

I've got four different laptops I've acquired over the years that I use for
various different purposes, one of which is to test Dodgeball's device linking /
ATO protection. I use them on a VPN and then have them pretend they're in
separate locations to make sure that we are able to actually link them all
together and detect that it's an ATO that's being attempted, so for validation.

I have a LG curved display, it's pretty wide, a Logitech keyboard, and a Magic
Mouse. I have the [reMarkable 2](https://remarkable.com/), I use it for taking
notes during meetings. I've gone through binders and binders and binders, and
you lose all that stuff, because you put it in the garage or somewhere, and it's
just impossible to find things. With this, you can search the text, you can
upload it. It's pretty great.

### Describe your computer software setup

**OS:** Mac.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** VSCode.

**Source control:** GitHub.

### Describe your desk setup

I have a desk that I converted into a standing desk in the other room – my wife
uses that. On occasion, I'll go in and use it, but for the most part, I just use
a normal desk. I’ve got a gaming chair from Costco and an Apple magic mouse.

{{< img-center src="/img/interviews/dodgeball-patrick-teague-desk.jpg" alt="The desk of Patrick Teague, Dodgeball" width="100%" >}}

### When coding

**Daytime or nighttime?** Most days I'm coding from 9am to 6pm, then from 8pm
until 11pm. Occasionally I'll pull a late one and code until 2am.

**Tea or coffee?** Tea.

**Silence or music?** Music.

### What non-tech activities do you like to do?

Long-distance running, marathon training – I especially like half marathons. I
think they're the perfect distance, especially if you don't have as much time to
go on those longer training runs. Gardening and making fermented hot sauce from
scratch, from the garden. I breed rare peppers and then use those to make a
fermented hot sauce. I'm expecting to be a dad in two or three weeks, and
that'll consume quite a bit of my time soon!

### Find out more

Dodgeball is a fraud prevention API for developers. It was featured as an
"interesting tool" in the [Console newsletter](/) on 9 Mar 2023. This interview
was conducted on 16 Feb 2023.
