---
title: Interview with Jesse Orshan, WayScript
who: Jesse Orshan
role: Co-founder
org: WayScript
what: A rapid scripting platform for developers.
tags: ['API']
date: 2021-03-18T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Jesse Orshan, Co-founder, WayScript.
isSelected: interviews
topImg1Src: /img/interviews/wayscript-jesse-orshan-profile.jpg
topImg2Src: /img/interviews/wayscript-jesse-orshan-logo.png
ogImg: /img/interviews/wayscript-jesse-orshan-desk.jpg
---

### What is WayScript? Why did you build it?

[WayScript](https://wayscript.com) empowers developers to take tools that they
want to build and seamlessly turn them into cloud-based production tools.

For example, if you have a Python script that's running on your local machine
with inputs through the command line, and you want to turn that into an API,
there's a lot of work you have to do beyond the actual problem you're trying to
solve.

My co-founder and I both came from programming backgrounds in different
industries but we had both spent a lot of time building internal scripts and
tools. We were building automations, scripts and dashboards. There's a lot of
added complexity that comes through turning that into a production tool.

A simple example is a Python script with command line options. If I wanted to
turn that into a tool that another person in the company could use, suddenly I
have to provision a server, build an interface, actually build the server
endpoints and elements, set up a database for credential management and other
types of things.

Not to mention monitoring, logging, reliability, redundancy, security... It's
so heavyweight for what we were trying to do where really you just want this
thing to execute seamlessly in a cloud environment.

My co-founder and I thought that there should be a platform that's just
dedicated to making that easy for developers. WayScript gives you a virtual
code space where you can put your files, repository or code, and then
seamlessly turn them into tools that are executing in a production cloud
environment without any real work at all. This allows developers to focus on
the core logic of what they're trying to solve.

For example, event based triggering. You can create a Salesforce or Slack
trigger, a cron timer, or HTTP endpoints, and say "When a user hits this
endpoint, execute the script." Data from the different components can be
injected directly into your code. You get an isolated virtual code space that
you can put files into, execute scripts, generate files and folders, and move
things around. It is a flexible environment that's meant to feel very much like
a localhost environment, but running in production without having to change the
way your code works.

You could have data scientists who are using PyTorch and generating massive
data sets and files that are presenting on the system, and you could have IT
people who are building SQL automations based on events that are happening in
the database, DevOps people that are triggering remediation or scripts based on
alerting from S3 or AWS or Datadog. You can all do that in the same
environment.

The goal of WayScript is we can create uniformity and cohesiveness, no matter
what the developer is actually doing.

{{< img-center
src="/img/interviews/wayscript-jesse-orshan-product.png"
alt="WayScript product screenshot"
width="100%"
caption="The WayScript visual programming interface."
>}}

### What does a "day in the life" look like?

For a long time at the company I was writing a lot of code. My co-founder Lane
and I are both software engineers. We recently raised funding and are now
growing our team, so are now involved in more high level activities like
recruiting, product strategy and roadmap planning. A lot of my time is spent
interacting with our engineering teams and talking to our customers.

We are hiring, so if there is anyone interested in joining our team, they
should [get in touch](mailto:jesse@wayscript.com).

### What's your approach to engaging the developer community?

We're very community driven and focused. We believe holistically in the notion
that if you build a product that developers love that really solves real pain
points for them, it will naturally grow within those communities. When
developers find tools that they love that work and solve problems for them,
they tend to not only stick with them and use them a lot, but they also preach
about them too.

There is a whole new world now, everything from YouTube and Twitch to Udacity.
Lots of developers are not going to school to learn, they're learning through
these channels, and that is an amazing thing.

The democratization of that skill and accessibility of that kind of knowledge
is a really wonderful thing. It's a powerful medium, actually getting
instructions, seeing how they're working and the thought process of the
developer who's actually building something in front of you.

There are a lot of visual elements to WayScript itself, so it lends itself well
to that kind of platform. Our philosophy is that visual and low-code elements
are good when they help save time, but bad if they get in your way. We try to
strike a balance.

### What does the team structure look like?

We're still a small team. It's very engineering-heavy, as you'd expect, because
we're building a developer tool. We have all experienced the pains of setting
up servers and doing these types of things that are just horrible. This is
great as it creates a lot of passion to build a tool we love to use.

The team is front-end engineering, backend engineering, design, and we've just
brought on a product manager. We also have a technical writer who's putting out
tutorials about how the system works.

We've very much taken an intentional stance of trying to build relationships
with the end developers who are using our products. We have a very active
Discord forum where we're constantly talking to our users. We also put out
content in tutorials on YouTube, and do live demos every other week where we
answer questions live. We are trying to be super-accessible to developers who
are using the platform.

We have talented people on our team who are the reason that this has gotten as
far as it has.

### How did you first get into software development?

I started when I went to college. I play guitar and thought I was going to be a
musician. I fortuitously fell into starting a company building software for
guitar players. It was a company called Thinkplay. That was my first
introduction into software development. I started with the goal of solving a
problem, which I think is a really great way to learn software development

Python was my first really serious language. Some of the early stuff that I was
learning was around digital signal processing and audio stuff, given the nature
of my first company.

In the world of learning web tools, I also learned databases and front-end
development along with JavaScript and things like that. The exciting part has
always been thinking through how to solve the problems and challenges and then
trying to pick the language that works best for that.

### What's the most interesting challenge you've faced working on WayScript?

We're building a system that is very flexible in terms of the type of tools
that are being built on top of it. As a result, we're constantly debating
around customizability versus accessibility and ease of use. For example, you
can configure things through just ticking a few checkboxes for an HTTP
endpoint, but then you can pass variables directly to a Python script and write
your own code - those are two very different UX problems.

We've adopted philosophies and frameworks for how we approach those problems.
Thinking through holistically how to create a user-friendly experience that
hits a large percentage of the use cases, but still creates mechanisms by which
somebody can get under the hood and customise if they need to.

Building a system of interconnectivity for all these different data types was a
core technical challenge that we faced, and something I think we've done really
well. We're continuing to add more and more functionality around this.

For example, we're working on a command line tool where you can pull files
down, work on them in a local editor and then throw them back up. This is very
similar to a Git or a command line deployment experience. Trying to build a web
app like this, it's meaty, for sure.

Of course there are other challenges around event management and detailing with
many different connecting components, even some polling (we try and avoid it),
but it all ultimately comes down to UX.

We are product-first, then code to make that product experience.

### What is the WayScript tech stack?

Our back-end is Python running on AWS. We use a variety of tools for queue and
task management. We use Docker for sandboxing and other technologies for queue
management. For the front-end, we mainly use React these days. When we started
we were writing vanilla JavaScript for most of the interface, but as our team
has grown and we've become more sophisticated, we ported over to React, which
was a good decision.

### What is the most interesting tech you are playing around with at the moment?

We've been using a product called [Linear](https://linear.app/) for our task
management, which has been awesome. Our team has grown so quickly with venture
funding, and this tool has really helped us stay organized.

We've also been using [Figma](https://www.figma.com/) a lot for UX interaction
design. It is inspiring seeing what these companies are pulling off in browser
environments, blurring the line between application and website.

### Describe your computer hardware setup

{{< img-center
src="/img/interviews/wayscript-jesse-orshan-desk.jpg"
alt="The desk of Jesse Orshan, WayScript"
width="100%"
>}}

It's super basic. I have a MacBook Pro laptop with two widescreen LG monitors.
I have one specifically for code, and the other one is for emails and things
like that. Then I have a [Razer
Blackwidow](https://www.razer.com/shop/keyboards/gaming-keyboards-and-keypads/razer-blackwidow)
Elite mechanical gaming keyboard for coding. We used to joke all the time
(pre-COVID-19), that we had the world's loudest office because you'd just hear
the clacking of everybody coding. In the general environment, I have two dogs
that hang out with me throughout the day while I'm working.

### Describe your computer software setup

**OS:** macOS, Catalina.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack internally, Discord for users.

**IDE:** I use [Sublime](https://www.sublimetext.com/) and
[iTerm](https://iterm2.com/). I would be remiss not to shout out that my
co-founder, Lane, is a hardcore Vim advocate. He loves Vim.

### What about your desk setup? Do you have anything fancy, desk or chair?

Nothing fancy. As we continue to be more remote, I'm probably going to upgrade
at some point to a standing desk, but right now, it is still a product of
throwing things together based on COVID.

### When coding

**Daytime or nighttime?** Morning.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I love playing music. I'm also a big reader, and particularly like sci-fi,
though I've recently been reading a lot of history books. I'm a big dog person
too. I have two dogs, and I like going on walks with my dogs and things like
that.

### Find out more

[WayScript](https://wayscript.com/) is a rapid scripting platform for
developers. It was featured as an "Interesting Tool" in the [Console
Newsletter](https://console.dev) on 25 Mar 2021. This interview was conducted
on 18 Mar 2021.
