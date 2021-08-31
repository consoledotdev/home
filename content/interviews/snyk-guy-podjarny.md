---
title: Interview with Guy Podjarny, Snyk
who: Guy Podjarny
role: Founder & President
org: Snyk
what: Security monitoring.
tags: ["Security"]
date: 2021-08-26T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Guy Podjarny, Founder & President, Snyk
isPage: interviews
topImg1Src: /img/interviews/snyk-guy-podjarny-profile.jpg
topImg2Src: /img/favicons/snyk.io.jpg
ogImg: /img/favicons/snyk.io.jpg
---

### What is Snyk and why did you build it?

[Snyk](https://snyk.io/) is a developer-first security platform. It's a security
solution that really thinks about the developer’s needs first and foremost. We
start by thinking, "If I'm a developer and I want to tackle the security threat,
what is the ideal solution for me, the ideal company to deal with, and the ideal
product as I tackle it?"

This concept comes from the realization that in the world of devops, developers
have to embrace security tools. The whole notion of digital transformation all
predicates on independent development teams that are able to continuously
deliver software. Security has been left outside and hasn't really come along
for this ride.

Our view was that this doesn't scale, and it can't continue that way. The way to
break through, and to get developers to embrace security, is to build a
developer tool, not a security tool. To build a tool that really walks and talks
and acts like the best tools in their arsenal. That's what we did, we built a
developer tooling company.

Snyk helps you secure your use of open source, your code, your containers, and
your infrastructure as code. The general mission is to secure everything in the
repo, including all the components of a cloud native application, which includes
far more than just the code and libraries.

The world of development is growing to embrace security. There's a certain
amount of giving developers the tools to be able to own security, but there is a
need for the developer community itself to rise to the occasion. To accept that
“you build it, you run it” also means you secure it.

At Snyk, we can get you to the water, but we can't make you drink. It needs to
be your responsibility. If you want independence, if you want pride in what
you're building, to be allowed to make your own trade-offs and be empowered, you
have to take the responsibility of also keeping it secure. Your customers and
your users trust you to do so.

There's a need for developers to embrace this new responsibility. The end result
is a safer digital world for all of us.

{{< img-center
src="/img/interviews/snyk-guy-podjarny-product.jpeg"
alt="Snyk product screenshot"
width="100%"
caption="Security vulnerability dashboard."
>}}

### How were developers solving this problem before?

For many developers, the answer was inconsistent and manual. Security is
naturally invisible. It doesn't have a feedback loop, it doesn't hurt until it
hurts really bad. If you're not intentionally investing in security, you
wouldn't know that you've made a security mistake. No matter how you spin it,
you need to ask a security question? "Is this secure? Should I do this?" Or use
a security tool that helps flag those for you at the relevant time.

For enterprises this problem was shoved down the throats of developers by some
central security team and was either rejected, and therefore worked around, or
slowed things down because the security team said so. Snyk has a much more
empowered view of it, which is, "Think of security as an aspect of quality, as a
continuous thing - continuous security."

For smaller businesses and online developers and the people that are building
for themselves, most of the time the end software that was shipped was insecure.
We try to give you another option, which is a security tool that you actually
enjoy using.

Developers take pride in building quality software that is secure while working
the way they like to. Still shipping stuff fast, still being empowered. A lot of
what we do is to help shed light, telling you if there was a security concern.
We explain it in developer terms and help simplify remediation.

If all I do is tell you about problems, you're not going to like me very much.
If I help you actually remediate it, if I open fixed pull requests, if I
simplify how to actually do something about it; now I'm helpful. That's what
we're trying to do.

### Where do you see the security team fit in this model?

Security teams should generally follow the steps of the ops world. Instead of
being system administrators that actually operate systems, or in security terms,
the ones that actually scan the applications and find vulnerabilities and
prioritize them, they should be more like site reliability engineers (SREs).
They should be building platforms that embed security controls in, be an
escalation point for harder decisions, and be a governance entity that actually
monitors the things that are being done and that the system is improving.

I think we have a great model in devops. Just like system administrators turned
into SREs, security people should go from being the ones scanning the
applications and prioritizing, to being the ones building platforms and
governing. DevSecOps is a buzzword and different people have different meanings,
but it is increasingly important.

I don't think security teams are ever going away. It is a complex and important
problem. Not only is security expertise not going to go away, I think it's
probably going to increase in demand.

### What does a "day in the life" look like for you?

I'm not a developer any more. My time is spent mostly helping others in the
business to ensure we are thinking ahead.

I do a lot of one-on-ones and strategy meetings and spend a big chunk of time
talking to customers and to partners. Sometimes to help them understand the
product, oftentimes to learn from them. I host a podcast called
[The Secure Developer](https://www.devseccon.com/the-secure-developer-podcast/)
where I get to talk to smart security leaders and actually give them a stage to
share their learnings with the world.

As the majority of the company focuses on execution, my job is to think further
out. I always have some strategic initiatives that I'm driving. Sometimes it's
acquisitions, sometimes it's a strategic project. A recent one was
[the Team Edition that we launched](https://snyk.io/blog/secure-development-for-teams-snyk-team-product-tier/),
which had its own concept of continuous security.

In practice, my day is typically made up of back-to-back meetings touching all
of these things.

### Do you get any time to code these days?

No, I'm a terrible coder. Well, I think I'm a terribly rusty coder. I think I
used to be a pretty good coder. I haven't written a line of code in Snyk. I have
reviewed code in Snyk, but I have not actually written code in Snyk. However, in
my previous startup, I wrote the majority of the code!

### What is the team structure around you?

Snyk's R&D is made up of empowered teams. We have teams of typically three to
eight engineers and a product manager, sometimes with an architect or designer,
that have reasonably clear ownership and empowerment to build some component in
their product.

We have two independent product and engineering organizations that are mostly
mapped to one another. They're not always identical because it is important for
the product scope to roll up separately from the engineering scope. Those are
different needs, but we do want clear alignment and having product and
engineering feel like they're one unit.

Then we divide those teams. We have a group that focuses on developer journeys
and product growth, and we have a group that is focused on platform, enterprise
and accessibility. We also have a group focused on the engines - the core
algorithmic and data components of our system.

Then we have the product line, which has the actual complete products in them:
[Code](https://snyk.io/product/snyk-code/), [Open
Source](https://snyk.io/product/open-source-security-management/),
[Containers](https://snyk.io/product/container-vulnerability-management/) and
[Infrastructure as
Code](https://snyk.io/product/infrastructure-as-code-security/). The product
organization mostly mimics that, plus a design organization.

Personally, I run a small labs team, which helps us explore things that are a
little bit further out. We work with the rest of the organization to ensure that
innovative ideas, or slightly more wild thoughts, get to be explored.

### How did you first get into software development?

I was a programmer when I was a kid. I think my first programs were in
[Logo](<https://en.wikipedia.org/wiki/Logo_(programming_language)>) but my first
real program was a keyboard piano I wrote in
[Pascal](<https://en.wikipedia.org/wiki/Pascal_(programming_language)>) that I
tuned with my guitar on MIDI sounds. I subsequently studied some computer
programming in high school, then I got into the cyber parts of the Israeli army
in which I learned a bit more how to program. That was a bit more heavy duty!

When I got out of there, I went straight into the industry. I'm self-taught. I
don't have a degree. I tried to get an open university degree, but then I
realized that wasn't really necessary for me.

I've always been a very passionate developer. I identify as a developer in terms
of my view of the world. That has evolved into a technical product manager type
view, because I think more today about user needs and user problems and how the
appreciation of technology can help them. Maybe with an ability to communicate
those ideas to a wider audience.

I think communication is generally an underappreciated skill in software
development. We build software for people and it's built by people, so being
able to explain what you're doing and how you're doing it in a succinct,
collaborative, inspiring way can make a dramatic impact. Communication is
massively important. It's important in developer tools because you want to help
the community understand why you're building this tool and what you are looking
to help them with.

You need to communicate with your users so you understand what you got right,
and what you got it wrong. You need to communicate with your peers, your
collaborators and your company as it grows to ensure everybody's rowing in the
same direction. If you don't have good communication skills, you are going to
hit a ceiling as a developer, and it might be sooner than you think. There are
exceptions to this statement, but for the vast majority, I think it's a critical
skill for a software development career.

There's room for flexibility around how you communicate. Some people communicate
better in text, some better in voice, some do it better in long form, some in
short form, some better in forums and on-the-fly thinking versus others that
like methodical articles.

The important thing is to just be mindful. Are you taking others along for the
journey and are you listening to others to calibrate your journey? If you're not
doing either of those, most likely there is a problem.

### What's the most interesting development challenge that you faced building Snyk?

The original challenge was to get developers to embrace security. Making money
in security is a fairly well understood playbook. It's never easy, but security
people are used to paying substantial amounts. Getting developers to embrace a
security solution without somebody forcing them is what hasn't been done before.
That was our biggest problem and our biggest focus. We've succeeded with doing
that pretty much from the beginning. We had many problems and mistakes around
the exact product, but I think we were on a good trajectory early on.

The next big problem was the conflict between developer needs and security
needs. Developers want depth. If you're a JavaScript developer, you couldn't
care less about other platforms. You care about your stack and it better be
amazing.

If you're a security person, and I give you a solution that tackles a risk for
20% of your applications, you need to buy another security solution for the
other 80%. Security biases in favor of breadth. Our primary challenge was to be
able to remain depth-first.

We ship quality products, but we start with narrow products that do narrow
things very well, appealing to the developer's needs. Then we broaden it to
provide enough depth to actually satisfy the security person's needs.

Today, we do this intentionally, but in the first iteration it was hard. It took
us about two years, and at that point we only had $100k in annual revenue,
which, for startups generally, is considered a failure. Fortunately, right
around that time, we managed to crack the code on having enough breadth to get
security to buy...and the developer love and adoption fueled what has become
exponential growth since.

### What’s the most interesting tool or tech you’re currently playing around with?

Machine learning blows my mind. Our code static analysis engine, which we
acquired through a company called
[DeepCode](https://snyk.io/news/snyk-announces-acquisition-of-deepcode/), is
heavily machine learning based. It learns from the world of GitHub, including
all the history, to identify API entry points. You give it sources of form
fields and point it at database calls, and it builds an understanding of the API
in a semi-supervised fashion. How accurate those results are once the rules
scale is amazing. You have to get over the fact that you don't have a specific
logic to say how that happened.

The most interesting work we're doing right now is understanding how to apply
that same type of learning in the context of program analysis, to other aspects
of the application, not just your code, but across the holistic view of the
entire application. The intent is being able to understand how your application
operates across all of its different components. I believe that if we crack
that, we can really build a platform that simplifies software development, not
just security. That would be very powerful.

### Describe your computer hardware setup

I used to be a MacBook Pro user primarily for portability. Now that we're mostly
working from home, it couldn't quite cope with my setup, so I have an iMac with
a separate 150% wide screen. I have the 27” monitor, and then I have an external
monitor that is 50% wider.

I also use an app called [Divvy](https://mizage.com/divvy/), that allows you to
configure keyboard shortcuts to place a window. I think about that big screen in
six parts, and put my video at the middle top when I'm on zoom calls, then
surround that with elements.

I use [Obsidian](https://obsidian.md/) for notes, typically positioned below
Zoom. I’ve invested in the audio and visual - I have a
[Shure SM7B microphone](https://www.shure.com/en-GB/products/microphones/sm7b)
and a digital SLR as my video camera, given this is my primary interface to the
world, and also for my podcast.

I use an Apple wireless keyboard. I like touch pads, not mouse, so I have a
Bluetooth trackpad.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** [Superhuman](https://superhuman.com/).

**Chat:** WhatsApp and Slack.

**IDE:** When I was coding, I was using [Atom](https://atom.io/) before VS Code
really built up its fame. Atom was the latest IDE. I had my stretches on Visual
Studio and Eclipse when I was building in .NET and Java respectively. I used to
be a heavy user of Chrome DevTools for front-end stuff, especially when I was a
CTO at [Akamai](https://www.akamai.com/).

**Source control:** GitHub. We use [CircleCI](https://circleci.com/). We run on
Kubernetes on a mix of Google Cloud and AWS.

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Coffee, strong coffee.

**Silence or music?** Music, but instrumental so it reduces distractions.

### What non-tech activities do you like to do?

I love jigsaw puzzles. They're my form of meditation. So listening to a podcast
while putting together a 1,000 piece puzzle is a treat.

### Find out more

[Snyk](https://snyk.io) is a security monitoring tool. It was featured as an
"Interesting Tool" in the [Console newsletter](https://console.dev) on 5
Aug 2021. This interview was conducted on 26 Aug 2021.
