---
title: Interview with Arjun Iyer, CEO, Signadot
who: Arjun Iyer
role: CEO
org: Signadot
what: Test environments for microservices.
tags: ["Test Environments"]
date: 2022-10-07T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Arjun Iyer, CEO, Signadot.
isPage: interviews
topImg1Src: /img/interviews/signadot-arjun-iyer-profile.jpg
topImg2Src: /img/favicons/www.signadot.com.jpg
ogImg: /img/interviews/signadot-arjun-iyer-desk.jpg
---

### What is Signadot and why did you build it?

[Signadot](https://www.signadot.com/) is a new way of thinking about test
environments for microservices. We enable lightweight test environments in
Kubernetes called sandboxes that are very cost effective. You can create
thousands of these lightweight environments to support the whole notion of shift
left testing. Since it's very cheap and quick to spin up, developers can do that
even before merging code. It is a completely different way of thinking about
high-fidelity environments - these are not mocked up. 

A key concept that we are focusing on here is that of multi-tenancy, because
you're spinning up so many of these environments, you need to make sure that
they're safe to enable concurrent testing on the same cluster. We enable
multi-tenancy at the application layer. Instead of using the traditional model
of duplicating everything at the infrastructure layer where you may be
duplicating everything, we actually allow you to share the same underlying
infrastructure, but we isolate at the request level. We have a way to
dynamically route requests within these environments such that every test tenant
can have a unique path that their requests flow through in the cluster. This
allows them to achieve the testing set up that they actually intended to, which
is, "I want to be able to test a few microservices that I'm changing at a given
time, but use the remaining set of microservices that are not changing".

Before this, I used to work for this company called AppDynamics which was
acquired by Cisco. My team built the next generation backend for AppDynamics -
we had to ingest terabytes of data every day, so it was a real time streaming
solution. We built everything using cloud-native stack, microservices and
everything. However, as the stack got increasingly complex, my team was always
struggling to get test environments where they could have high confidence that
their changes would work. It became very difficult to spin up things locally. It
just was too diverse a stack and too complex to do things locally so they
increasingly started to rely on the pre-production environment, which we call
staging. That's where the majority of the testing would happen.

But unfortunately, that environment is typically shared by all teams because
it's very expensive to set up and duplicate. There was no isolation and people
would step on each other. If I introduce a regression in that environment, that
environment is broken, and now other people that rely on that environment can't
use it anymore. Troubleshooting that environment was also a big challenge
because there's so many commits going in from different teams, it becomes very
hard to know what's the offending commit if something broke.

So developers either depend on staging and waste a lot of time or do some kind
of mock up testing earlier on, which is fast, but it's not high-fidelity and
doesn’t simulate what they would see in production. That was the challenge, we
wanted to give developers a much better way where they can do high-fidelity
testing, but in virtualized environments, which are quick and very cheap to spin
up. This completely changes the workflow. Now you can actually test much, much
earlier, even before you merge code, but you're testing in a real environment,
because Sandboxes are created in an existing pre-production staging cluster. 

### What does a "day in the life" look like for you?

As a CEO of Signadot, I spend a lot of time thinking about the bigger picture,
the strategy of the company, and making sure that engineering, product, sales
and marketing all align with that strategy. All that takes quite a bit of effort
and focus to make sure that I separate that strategic thinking with the more
operational sort of work that I need to do; a good chunk of my time is around
that alignment. We recently started to use OKRs to actually set up these goals
for the company.

On a day to day basis, my work depends quite a bit on the need of the hour, but
usually I reserve the mornings, when I'm most productive, for strategic
thinking. I do most of my meetings and other mundane work in the afternoon, I
reserve it for after lunch. 

### What is the team structure around Signadot?

My co-founder, Anirudh, he's the CTO of the company, he handles engineering and
product. He was previously a part of the Kubernetes team at Google and he's very
well versed in this domain. And then we have David who heads marketing, he's a
one man team right now, but we'll hopefully expand that down the line. I own
sales.

In the rest of the team, we have about five engineers who are really skilled in
distributed systems, they're all Golang programmers and we are hiring three more
backend engineers as we speak, so we'll be a team of probably eight engineers by
the end of the year.

### How did you first get into software development?

I did my undergrad in mechanical engineering from IIT Kharagpur in India, but I
was pretty interested in computers and computer science. So I took a few
electives on algorithms and data structures, and I found that fascinating. Then
I picked up my first programming book, Programming in C by Brian Cunningham and
Dennis Richie. And I've been programming ever since. My first computer was a 486
back in the early nineties, it was the first computer that I had access to. 

I started programming with C, then I did C++, then I got into Java - that was
the enterprise language of the day back then. And then slowly now it's evolved
to more Golang. I'm not dabbling much with the front end side. It's always been
mostly on the back end side and more systems level programming.

### What is the most interesting development challenge you've faced working on Signadot?

The challenges that we face are mostly around scaling and reliability, because
we work with companies that have hundreds of microservices, and Signadot is
integrated into their core development workflow. If Signadot doesn't work, our
customers can't ship to production. So we spend a lot of time making sure that
our solution scales in the presence of hundreds of services, complex
infrastructure and cloud resources. And also in terms of reliability, we need to
make sure that there are very few bugs in the core product. Since our
multi-tenancy is based on traffic labelling and routing, we also integrate with
Service mesh and other tools like OpenTelemetry; making it all work together was
the most interesting and challenging part of the development process.

### What is the most interesting tech thing are you playing around with at the moment?

One thing that we are pretty excited about is the plugin framework that we
developed. As part of this sandbox offering, we heard from our customers that
they want the ability to include stateful resources within the scope of a
sandbox. For example, a cloud resource, like an RDS instance or a message queue
or some resource that is more stateful and gives them data segregation. So we
have actually published a very unique open source framework called [the resource
plugin framework](https://github.com/signadot/plugins), which allows developers
and DevOps folks to introduce plugins that actually cater to these resources.
This allows you to write a plugin that includes an ephemeral resource.

For example, a database schema - it doesn't have to be an entire database
instance, but from a testing perspective, all I need is a separate schema within
an instance that I can use for my tests where I can actually load data and have
that data isolation. We make it very easy for somebody to write these plugins
and be able to include arbitrary logical resources. These could be, for example,
a topic in a message queue. It doesn't have to be a whole message queue
instance. It can be just a topic that is isolated for this sandbox and now I can
leverage these ephemeral resources as part of my testing flow, where I can get
data segregation in the sandboxes. That's something that we are pretty excited
about.

### Describe your computer hardware setup

I'm on a MacBook M1 Pro 14 inch, I really love the M1 MacBooks - they're so
quiet and amazing for productivity. I have a 32 inch 4K display, I really like
to have these large displays where I can have multiple windows at the same time.
I have an Apple keyboard, a basic Logitech mouse, and my phone is an iPhone 12. 

### Describe your computer software setup

**OS:** macOS. **Browser:** Chrome. **Email:** Apple Mail. **Chat:** Slack.
**IDE:** VS Code. **Source control:** GitHub.

### Describe your desk setup

I just recently got a standing desk that can alternate between sitting and
standing postures. I love it so far, it gives me a different feel when you're
standing and doing meetings and demos and stuff like that. And I recently
invested in a drawing pad, I believe it is called XPPen, because we often
discuss architectural diagrams and product architecture and things like that. It
becomes very easy for me to write with a pen rather than with a mouse.

{{< img-center src="/img/interviews/signadot-arjun-iyer-desk.jpg" alt="The desk of Arjun Iyer, Signadot" width="100%" >}}

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** I've given up on both of them.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I'm a big tennis fan, but I haven't been playing as often as I would like to.
That’s been a big passion of mine. And other than that, we just do family movie
nights, we do camping, we go out to the ski resort in winter where I do
snowboarding and my kids do skiing.

### Find out more

[Signadot](https://www.snaplet.dev/) is a tool to create ephemeral test
environments. It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 20 Oct 2022. This interview was conducted on
7 Oct 2022.
