---
title: Interview with Michael Grinich, WorkOS
who: Michael Grinich
role: CEO
org: WorkOS
what: Plug & play enterprise features.
tags: ["Enterprise Features"]
date: 2022-06-29T12:00:00Z
draft: true
headerType: fixed
summary: Interview with Michael Grinich, CEO, WorkOS
isPage: interviews
topImg1Src: /img/interviews/workos-michael-grinich-profile.jpeg
topImg2Src: /img/favicons/workos.com.svg
ogImg: /img/interviews/workos-michael-grinich-desk.jpeg
---

### What is WorkOS and why did you build it?

[WorkOS](https://workos.com/) is a developer platform that lets companies
quickly add enterprise features to the app that they've built. This lets them
sell it to larger customers without hassle.

If you build an app and you take it to market, and you get a bunch of users,
then suddenly a big company wants to start using it, say with several hundred
people, they're going to ask you for features like single sign on, SAML
authentication, directory integration, or SCIM provisioning, and many-many other
features. These are required in order to sell to those types of companies, those
features are pretty complex to build. They usually take a while and they're not
very fun for developers to do, but you literally can't sell that deal unless you
have those features. WorkOS is a platform which makes it really simple with easy
to use, modern APIs to allow you to add those features and close those deals.

A lot of people compare us to Stripe - WorkOS is the Stripe for enterprise
features. We take a lot of inspiration from them around great documentation and
developer experience. Previously developers were just building these features in
house, that would take a long time. In some cases, a third of an engineering
team would end up being the enterprise features team. A lot of companies just
wouldn't invest in building this and that meant they weren't able to go up
market. If you look back historically, a lot of SaaS companies didn’t open up to
the enterprise - it's not that there was a lack of demand, it's that
functionally those big companies couldn't use products like Dropbox, for
example, and that's why Box emerged.

WorkOS is so fast to drop in and it's so affordable, it's just usage based
pricing, it's very easy to just put in a credit card - it really changes the
equation. So even companies that are a year old that just had gotten product
market fit, they can put in WorkOS and go close enterprise customers, and it's
not an exaggeration to say that you can do something in a few hours that
otherwise would've taken a few months of integration. So it's pretty powerful
for those companies.

Whether you're using an existing service for an identity layer like Firebase, or
Auth0, or another system, or you have your user database in house, WorkOS just
provides that authentication gateway. So that's why it's so easy to bolt on to
an existing system. If you've been working on your app for 10 years, it's quite
easy to connect and go. Even if you just have one customer that needs SSO, it's
really fast just to connect for that one customer, you don't have to talk to a
sales team or sign an annual agreement - you just literally put in your credit
card and go.

### What does a "day in the life" look like for you?

I am pretty involved. I do wear all the hats being the founder, but over time,
I've been sort of giving away my Legos and having different people in the
company work on different things. I would say the area that I probably try to
spend the most time is with the engineering team around actual product
development. So, I sort of wear the head of product hat inside the company -
helping design and develop new API endpoints and capabilities, thinking about
the actual design and experience of our product, thinking about expansion
opportunities for existing customers, like people asking us for more features.

We don't have a sales team today and we don't have a marketing team. It's really
just a self-serve type of product, put in a credit card and our marketing is
more like DevRel - we do blog posts and technical articles and presentations. So
I also spend time with folks on that side to ensure that everything we build is
at the level of quality that we aspire to.

I don't necessarily work on features in our production code base because my time
is so burst-y here and there. It's harder for me to collaborate on projects with
people, but I do build stuff around WorkOS and explore new technologies that are
getting built and try to understand how the ecosystem is evolving - that's
usually more nights and weekends type of coding. Practically speaking, my day is
mostly meetings now. Usually I'll have a stack of meetings, but I like to always
keep some uninterrupted time to go deep and focus throughout the week.

### What is the team structure around WorkOS?

Our team is extremely collaborative, there's not really hard walls between areas
of the company. WorkOS today is a bit over 40 people, so it's still reasonably
small. There's three main groups in the company.

The first group is our core engineering team that works on our API platform,
building new capabilities and features, integrating with all the different
systems used by IT, and building brand new products.

The second team is what we call the DX team, developer experience. That really
is all the surfaces that developers touch, that includes our dashboard, set up
material and the onboarding experience. It also includes our documentation - we
consider our docs to be a product that we build.

And then lastly, we have something called the Developer Success team, which is
how we give support to our customers. It's really technical support, often
delivered in a Slack channel with customers. Those folks are also writing code
and building example apps and building SDKs, but they're really externally
focused to help our customers grow. That's where we are today. In the future,
we'll probably have a sales and marketing team, but we don't yet.

### How did you first get into software development?

I grew up in a pretty small town in rural Oregon, so I wasn't exposed to a lot
of the technology industry or the tech world there. And I think my entrance into
it was really the web. It wasn't when I got a computer that it really turned on
for me, it was when I got internet access. That's really when I started building
websites and learning about software, and I think keeping the dial-up modem on
for three days to download a Linux install, things like that. But it really
started taking off when I started building web apps and iPhone apps in high
school and college and kind of went deep into that. Through that process, I fell
in love with frameworks and tools and platforms - I've really been drawn towards
building, not just products for people, but products for people that make stuff.

In my first company, we wrote most of the stuff in the backend in Python. But
I’ve used Perl, PHP, Bash scripting early on, and a lot of Objective-C when I
was building iPhone apps, before Swift. Today, I really love TypeScript. I think
types are extremely powerful and Microsoft's done a great job making an
expressive language that doesn't get in the way, and it helps. I've played
around a lot with things like Erlang and Rust in particular, it's just really
fantastic. It's hard to pick a favorite language - it's sort of like if you have
a bunch of guitars and someone asks, tell me which one is your favorite. It's
like, well, they're all different - they all sound different, it's very hard to
pick.

### What is the tech stack of WorkOS?

We run in TypeScript, end to end - both the front and the back end are in
TypeScript. It's really powerful to have one language across the whole company.
It allows developers building new features to really work full stack without
having to set up a different environment. We have one tool set, one linter, one
test runner, all this. And that's a pretty unique feature of TypeScript. Before
that, the world was really fragmented. So we made that decision early on. It's
paid off pretty well so far.

### What is the most interesting development challenge you've faced working on WorkOS?

Designing great APIs is incredibly difficult. It is so not obvious how difficult
it is when you get started. Like many elegant products, when you look at them
and use them, you don't really see the sweat and iteration that went into it,
the same is true about designing APIs. We just spend an extraordinary amount of
time trying to just smooth out the rough edges and try to deeply understand the
data model of what we're trying to express and how it interacts with the
developer's application and their architecture. That just takes a lot of time -
it's wild. The end goal is people don't ever notice it, it's like a handle to a
door. The ideal scenario is you just go through the door, you don't notice
there's a handle - it doesn't feel weird, it's not rough, it's not a weird
shape, its form communicates exactly what it does to you right away.

There's this book I really like called Super Normal, it's by Jasper Morrison and
Naoto Fukasawa, who both are industrial designers and worked at Muji and some
other companies. The idea of supernormal design is that it's so refined that it
disappears into the background completely - you don't even notice it's designed.

I think the pinnacle of great API design is something like that, where it feels
so super normal. You can almost guess the endpoints and it just behaves as you
would expect. Getting to that point, when you're trying to build around a super
fragmented legacy system with tons of different edge cases, I would say that's
the most interesting and complicated challenge that we deal with on a day to day
basis and continue to deal with as we build new products.

### Do you have any principles or underlying philosophy that you use?

When designing an API, you have to taste it, you have to build something with
it. It's like cooking without tasting the food. You just won't cook anything
great. So you have to be tasting as you're going and building example apps and
really putting yourself in the shoes of a developer. I think it's extremely hard
for anyone to design an API that's not actively building something and writing
code. However, there's another question around levels of abstraction when
designing products. And I think that most developer products that fail, one of
the key reasons why, is they have a too high level of abstraction. The platform
is trying to do too much. It's trying to have too much magic in it. And for me,
the best level of abstraction that you can find is one notch below where you
start to see the value.

The goal is to give people primitives that they can compose in different ways,
as an example of this, WorkOS is not an identity product today - unlike Auth0 or
Firebase Identity, which manages all your users for you, WorkOS just does
authentication, this means that you need to do a little bit more work to wire it
up. It doesn't come ready out of the box, but the counterpoint is that it makes
it universally applicable to any type of application. Understanding that right
abstraction point requires humility and trust that the developer is going to
figure it out, you want to give them these atomic building blocks.

The principle that I have is: find the lowest level of abstraction that you
think attracts value. Then try to go one step below that and give people raw
tools and they'll surprise you on what they build with it.

### What is the most interesting tech tool/product/thing are you playing around with at the moment?

I'm really fascinated right now with WebAssembly. I think it's still quite early
and that there's not that many people using it, but it's sort of this
fundamental shift in how people think about web applications and web code - the
idea of having this portable executable that can run in the browser or on the
server in this very efficient, light code is extremely powerful. I wouldn't be
surprised if that ends up becoming the basis for a lot of new development
products and run times. I know Figma is using it for their rendering engine on
the browser, I'm quite intrigued by that.

The other one I like is Deno, the Deno project that Ryan Dahl's been working on,
which I just think is fantastic that he's taking a second swing at this and the
whole JavaScript ecosystem, and TypeScript ecosystem really will definitely
benefit from that.

### Describe your computer hardware setup

My main workstation is an M1 Mac mini, that I actually have mounted underneath
my desk. I use a LG 5K display, Logitech BRIO webcam. For us audio is really
important because we're a fully remote company, so I have an Audio Technica
microphone. All of my sound comes through a pair of Bowers & Wilkins MM-1
desktop speakers.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Google Chrome.

**Email:** Superhuman.

**Chat:** Slack.

**IDE:** VSCode.

**Source control:** GitHub.

### Describe your desk setup

In terms of peripherals, I actually have moved to using stuff from Logitech, for
better ergonomics. I use a Logitech
[ERGO K860 keyboard](https://www.logitech.com/en-us/products/keyboards/k860-split-ergonomic.html)
and
[MX Master 3 Mouse](https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006559.html).
Most of the time I'm sitting on an Aeron chair that I've had for a long time,
but I also try to stand throughout the day sometimes.

I live right next to Golden Gate Park in San Francisco. How I solve problems is
I go walk in the park by the lakes and that's usually where the best work is
done.

{{< img-center src="/img/interviews/workos-michael-grinich-desk.jpeg" alt="The desk of Michael Grinich, WorkOS" width="100%" >}}

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** Coffee.

**Silence or music?** Music in flow state, Silence thinking about something new.

### What non-tech activities do you like to do?

I am sort of a quintessential California boy at this point. I love skiing,
surfing, cycling, and running. In the summer, I love backpacking - I'm actually
going to Yosemite this weekend for the holiday. When I'm not in the city,
usually I can be found out in the wilderness, somewhere in nature.

### Find out more

[WorkOS](https://workos.com/) is a platform for enterprise features. It was
featured as an "Interesting Tool" in the [Console newsletter](/) on 14 July 2022.
This interview was conducted on 29 Jun 2022.
