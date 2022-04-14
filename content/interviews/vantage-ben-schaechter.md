---
title: Interview with Ben Schaechter, Vantage
who: Ben Schaechter
role: Co-founder
org: Vantage
what: An alternative AWS console with a focus on cost transparency.
tags: ["Cloud"]
date: 2021-03-12T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Ben Schaechter, Co-founder, Vantage.
isPage: interviews
topImg1Src: /img/interviews/vantage-ben-schaechter-profile.jpeg
topImg2Src: /img/favicons/www.vantage.sh.png
ogImg: /img/interviews/vantage-ben-schaechter-desk.png
---

### What is Vantage and why did you build it?

[Vantage](https://www.vantage.sh/) is an alternative to the AWS console with a
focus on cost transparency and an improved experience for developers.

My background is in public cloud infrastructure, having worked at both
DigitalOcean and AWS. From my time at these companies I saw that DigitalOcean
has a great developer experience compared to AWS’s rougher experience, but great
underlying services.

The original rationale for Vantage was, what if we took the developer experience
of DigitalOcean and applied it to the larger public cloud infrastructure
providers? However, as we received feedback from customers, we've placed more
focus on cost transparency.

{{< img-center src="/img/interviews/vantage-ben-schaechter-product.png" alt="Vantage product screenshot" width="100%" caption="The Vantage AWS console resource view." >}}

### How are you approaching the challenge of cost transparency?

We've been fortunate that we started by focusing on the console first. We did a
lot of upfront work to integrate every single AWS service. This included pricing
APIs, building out our own syncing and pricing engine that takes into
consideration run rates at a point in time as well as historical accrued costs.
It is a substantial problem and one that we continue to work on. Luckily, the
work we put into the syncing engine during the first six months of the company
has paid off, so applying pricing to that has actually been the easier part.

### What do you think about competing with AWS's tools?

I don't see us as a competitor, we're extremely complimentary. Vantage is a
great companion app to anyone who has a certain threshold of complexity with
their infrastructure, resources and costs. If we did think about it in that
regard, we would probably lose because, from a feature parity perspective, it's
nearly impossible to compete with the thousands of engineers they have.

We've really looked at how we can refine our value proposition and use cases to
provide what our customers are asking us for. Our focus is to make pricing
simple and manageable for customers on top of these public cloud infrastructure
providers not how we can provide a competing feature set to them.

It takes a really long time to learn how AWS APIs work, and considerable time to
even work with the primitives. Alternatively, you can come and use Vantage and
we’ll do everything out of the box. The chances are we can do it a lot faster
and better because we're doing it on behalf of thousands of customers out there.

### What is your philosophy around good UX?

I don't know that we've necessarily had a hard and fast philosophy. There's a
limit to how much front-end resource AWS can invest in any one service, as a
result they have a different console experience for every single service. On
Vantage you have one consistent experience. We offer uniformity across all
resource types and all services. A customer doesn’t need to learn hundreds of
different consoles. They can come into Vantage and know where to look for the
attributes, relationships and pricing data.

The big challenge we've solved is distilling down the price of resources into a
simple rate. For anyone who's worked with AWS, they will understand the
complexity of this. Even just getting a price for how much an S3 bucket costs is
extremely complex. We've put a lot of work into making it possible to dive into
the pricing for a specific attribute, or look at a higher level and see what
you’re paying for on a per resource basis.

### What does a "day in the life" look like?

My days are split across a few different things. The majority of my time is
spent on engineering work such as feature development, bug fixing and so on. I
also spend time with customers to understand their use cases, as well as talking
with prospective customers to find out what they're looking to accomplish.
Lastly, I find time to focus on our marketing strategy. I would say the bulk of
my time these days is on engineering, but as we hire more people I'll shift to
focus more and more on other things.

### What does the team look like?

There's three of us at the moment. Myself, my technical co-founder and a
designer.

### How did you first get into software development?

When I was around 7 years old, my older brother was writing some code in QBasic.
I thought it was magical, so I started writing little QBasic scripts to make
games for myself. It evolved from there. I've always been naturally interested
in computers, so throughout high school I taught myself how to code. I was
fortunate enough to get a number of internships where I could learn. I had a
software internship in high school at Lockheed Martin and then worked at a few
startups throughout college. Those taught me everything I know programming wise.

At Lockheed I was using either Java or C. In high school I also took computer
programming classes that were Java. I don't know if you would consider this a
programming language, but I also did a bunch of work in MATLAB at Lockheed. The
internships throughout college were all Ruby and that's what I primarily program
in these days. I learned Ruby from a guy named
[Chris Eppstein](https://chriseppstein.github.io/), a very prominent open-source
person who created a [Compass](http://compass-style.org/), which was a CSS
authoring framework.

### What's your stack at Vantage?

We're primarily a Ruby shop. It's a Ruby + Rails + PostgreSQL as the database,
then we're using the [Stimulus JS framework](https://stimulus.hotwire.dev/) on
the front-end.

We are looking to hire strong Ruby developers who have some experience with
infrastructure at the moment, so if there’s any readers that are interested in
our work, then they should [get in touch](mailto:support@vantage.sh).

### What is the most interesting challenge you’ve faced working on Vantage?

Before Vantage began, we built this piece of technology that we call the syncing
engine. It's a core part of Vantage. Essentially when someone begins using
Vantage it's hard to know what resources they have in their AWS accounts, what
the state of those resources are, and how they change. You can imagine
infrastructure changing all the time: resources scale up, scale down, and change
in size. There's different demands that may impact them. We built the syncing
engine to scale well when interacting with customer’s AWS resources and ensure
everything stays up to date.

### Describe your computer hardware setup

I've got a 27" iMac as my main development machine. I have the new M1 MacBook
that's primarily my travel machine, although I'm not doing a lot of that these
days.

Unfortunately, the M1 chip has not been great for development. There's a number
of things that are just not supported, like Docker, which is an issue. I have
faith that the community will add support to these things going forward.

### Describe your computer software setup

**OS:** macOS Big Sur.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** [Sublime Text 3](https://www.sublimetext.com/3).

### Describe your desk setup

{{< img-center src="/img/interviews/vantage-ben-schaechter-desk.png" alt="The desk of Ben Schaechter, Vantage" width="100%" >}}

My desk and swivel chair are both from Amazon. I've got a fairly basic set-up.
The one unique part about it is my apartment is actually slightly crooked, and I
had to wait for a hot weather day for the walls to open up for it to fit
perfectly. This desk will never move from where it's currently at unless it's
demolished! This is the desk I will always have. I can't move it even if I want
to.

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Coffee.

**Silence or music?** Music. Typically really bad pop or EDM.

### What non-tech activities do you like to do?

As I live in New York City, I love just walking around Manhattan and spending
time around the city discovering new bars and restaurants. I live very close to
the Hudson River and I walk up and down the river all the time. Outside of
exploring New York and spending time with my girlfriend, I'm into Peloton. I’m
normally a big biker, but in Manhattan it's not as easy to go on long bike rides
compared to when I lived in California.

### Find out more

[Vantage](https://vantage.sh) is an alternative AWS console with a focus on cost
transparency. It was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 14 Jan 2021. This interview was
conducted on 12 Mar 2021.
