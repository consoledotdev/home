---
title: Interview with Martin McKeaveney, Co-Founder, Budibase
who: Martin McKeaveney
role: Co-Founder
org: Budibase
what: Open source low-code platform.
tags: ["Low-code"]
date: 2021-12-16T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Martin McKeaveney, Co-Founder, Budibase.
isPage: interviews
topImg1Src: /img/interviews/budibase-martin-mckeaveney-profile.jpg
topImg2Src: /img/favicons/budibase.com.jpg
ogImg: /img/interviews/budibase-martin-mckeaveney-desk.jpeg
---

### What is Budibase? Why did you build it?

[Budibase](https://budibase.com/) is an [open
source](https://github.com/Budibase/budibase), low-code platform for building
business applications and internal tools. We make it easy and fast for
developers and IT professionals to create their own software, by providing a
visual app building experience with three main pillars: data, design, and
automation.

The data aspect is where you can configure your data sources like
[Postgres](https://www.postgresql.org/), [MongoDB](https://www.mongodb.com/),
[MySQL](https://www.mysql.com/), [Amazon S3](https://aws.amazon.com/s3/),
[CouchDB](https://couchdb.apache.org/), [Airtable](https://www.airtable.com/),
REST APIs, and more. We even have our own internal database, so you can create
apps from scratch with your own data. You can write custom queries against these
databases, or you can have Budibase automatically generate and map from your
database schemas and generate the queries for you. You can also convert your
existing database into a fully functioning web application with just a few
clicks. The data UI is also responsible for authorization and role based access
management.  

The design part is the UI of your application, where you create screens to
display and visualize your data and perform CRUD operations on it, as well as
editing colors,themes and other visual aspects.

The automate part is the brains of a Budibase app. From here, you can set up
workflows and model business processes like approval workflows, onboarding
flows, or more simply for sending Slack or Discord notifications.

My co-founders and I have built many internal applications and business apps in
our careers, and we realize that it's something that's not only expensive, but
not the best use of developer time, and it's not really the most fun part of
software development.

Companies often use a hodgepodge of different SaaS products, pay for expensive
subscription support contracts, and generally hack around the tools and their
APIs to get them to work together. Often they are trying to implement that
little edge case that it just doesn't do well.

We set out to create a large ecosystem that allows people to create these tools
themselves in a much more efficient manner. Compared to other platforms, we
wanted Budibase to be as accessible and open as possible, with a real focus on
user experience and ease of use, which is why it's open source and
self-hostable, in addition to our cloud-based solution.

We like to say Budibase is simple by default, but very powerful and extensible
as well, if you want to go down that path. Budibase dramatically reduces the
time it takes to build full-stack web applications. Being able to create
well-designed, responsive, secure, and performant web applications in record
time is what Budibase is all about.

We envision a world where full-stack development is more democratized, and users
can create their own software to solve their problems. There's no longer a
bottleneck on dev teams to create every piece of software for the whole org.
Code is optional in Budibase, but engineers who know how to code can use it to
speed up their workflows, so they can focus on the hardest engineering problems.

### How do you think about that trade-off you mentioned around speed vs supporting advanced development needs?

Modeling the most common workflows is important. Like setting up your data
sources, pulling the schema, your tables, that sort of grunt work that every
developer does when they're building an application.

They write a bunch of APIs and endpoints that they've done hundreds of times,
and then you can get into that specific business logic. It's automating those
things that everybody has to do, and making them super simple, and then allowing
code and more extensible parts to model business logic and custom pieces of
functionality. Sometimes it's almost easier to represent certain pieces of logic
with a line of code than it is to have a whole bunch of wizards and modals to do
it. Striking that balance is important, but we think we do it quite well.

### What does a "day in the life" look like for you?

My morning generally starts with a cup of coffee, planning the day, responding
to emails and having a look at the product board to see where we're at in the
current iteration with our work items.

After that, I generally try to spend mornings doing deeper work like programming
or writing product specs. Right now, a lot of my focus is on DevOps, product
management, and architecture work. I don't really have as much time for purely
programming or feature work, so I spend most of my time trying to unblock the
team, working with them to architect new features for upcoming iterations. I'll
spend quite a bit of time talking with my co-founders around company strategy
and direction. In the afternoons, I prefer to have meetings and spend time doing
code reviews or product roadmap planning.

### What is the team structure around Budibase?

The company is split into three sections or pillars: business, growth, and
product. I lead product, which includes engineering. The engineering team is
remote. There are six engineers who work across front-end, back end, DevOps, and
QA. We run regular one-to-ones and monthly release cycles. Everyone has a good
amount of autonomy in Budibase and is empowered to ship code to production on a
regular basis.

As a remote team, we like to have a culture of writing, so things aren't lost
and they can be communicated effectively amongst the team. We're growing at the
moment and are recruiting engineers and other positions, and we hope to double
or more over the next year.

### How do you think about the balance between the open source code base and your cloud product?

The whole team works on [the Open Source
product](https://github.com/Budibase/budibase), and the code base is shared
between the two. We do have things in there, like conditionals for certain
things that are in the cloud product, but there's not really any features that
are enabled on the cloud side that you can't do in the self-hosted version. The
only difference is, some of the ones in the self-hosted solution, you'd need to
configure yourself, like sending emails, for example.

The way we think about it is if something's going to be widely useful for the
whole community, that'll be part of the open source product. Right now, we don't
have any closed source code in Budibase. The plan is that in the future for
larger organizations and more team-based ororganization-based structures, we'll
have features that will be part of an open core model, so they'll pay for a
certain plan and they'll get those features on top.

With the cloud product, the same thing applies to subscription-based members.
They can pay to get certain features in the cloud. The way we like to think
about it is, for more scale-related features, those are the things that'll be in
the closed source product, but the features that are going to be useful to the
wider community and smaller deployments, in general, will mainly go into the
open source product.

### How did you first get into software development?

I've been interested in computers from a young age, originally for things like
gaming and media, where I used to play around with mods for my PC games and
rooting games consoles, and things like that. I had my first foray into
programming when the first iPod touch came out. I became fascinated with
jailbreaking these devices, and eventually, I was doing a lot of iOS stuff for
my friends. To begin this was working with UI-based tools that just did it for
you, and then eventually editing [Homebrew](https://brew.sh/) apps and writing
very basic scripts and config files and automations in Objective-C and
PowerShell.

At the time, I didn't really even know I was programming. I was just trying to
get things to work and changing variables around, so I didn't have to keep doing
things manually.

At my local college and then university, I had exposure to some basic C#, Java,
SQL, but my first real dev internship was when everything really clicked for me.
I built web applications there, but during that time, I became obsessed with
learning lots of different programming languages and tools. I picked up
[Java](https://www.java.com/en/), [JavaScript](https://www.javascript.com/),
[Ruby](https://www.ruby-lang.org/en/), [Python](https://www.python.org/), and
some more functional languages, like [Haskell](https://www.haskell.org/), just
for fun. I always enjoyed the different rules and paradigms of each language and
learning different styles of programming. I finally decided to go deep on
JavaScript, due to the fact it was so versatile.  
  
Later, I got into Linux and worked a lot with infrastructure and automation
tools as well, mainly on AWS. I loved the automation of infrastructure, and with
tools like [Terraform](https://www.terraform.io/) and
[CloudFormation](https://aws.amazon.com/cloudformation/resources/templates/).
This was a whole new world for me. I thought it was awesome how you could just
represent infrastructure as code. I always really liked the idea of working
across the stack, and never really wanted to be siloed in the front-end, back
end, or DevOps. I always enjoyed doing it all.

### What is the most interesting development challenge you've faced working on Budibase?

Working on Budibase is a very interesting development challenge, given the fact
that we're building an app that builds apps. We have to think about things not
only from the standpoint of the visual builder itself, but in the output, the
generated app that Budibase creates, the builder creates JSON that gets stored
in the database, and then gets converted directly into a fully functional web
application at runtime.

It's important for us to maintain backwards compatibility while shipping new
features, and provide smooth upgrade paths for old applications to use new
Budibase features.

Budibase connects to a ton of different data sources. As I mentioned, you can
write queries for them, but with the ability to generate tables in Budibase that
are directly derived from SQL schemas, and handle all the CRUD operations in
Budibase apps, so you don't have to write any queries yourself. Making this as
seamless as possible for the user, was a real challenge. By building our own
mini ORM over the top of Postgres, MySQL, Microsoft SQL Server, and Oracle, that
can be controlled completely visually.

On the subject of databases, one of the other really big ones was our in-built
database, that's built on top of Apache CouchDB. We faced some serious
challenges trying to make it as simple as possible to use, introducing schemas,
relationships, and creating all the different data types that Budibase supports.

The awesome thing, in the end, was that it makes Budibase apps super portable
and easy to replicate, to other databases. For example, you can create full
Budibase apps from templates that we've created in one click, including a
pre-seeded database. An employee application tracker is one of our templates.
You click that and it just opens it in the builder, with data and everything.
That's quite hard to do with an external database because we can't rely on your
database credentials or your database schema. If we shift all that with the app,
then you can get started straight away and maybe add your own data after.

The scope of a tool like this is very broad. We're constantly facing challenging
engineering problems that allow people to do things visually that you would
generally perform by writing code. As with any visual software experience or
software development experience, we're constantly debating between
customizability and ease of use. How do we make it visually simple, but powerful
enough to be extended or configured through snippets of code?

### What is the Budibase tech stack?

We're pretty much a full JavaScript house. The whole back end is written with
[Node](https://nodejs.org/en/) and [Koa](https://koajs.com/), and our whole
front end is written in [Svelte.js](https://svelte.dev/), which we really love.
The back end for app metadata, as well as the internal DB, is all running on
CouchDB. Our cloud platform is all run inside AWS, and the production platform
uses Kubernetes for management.

### What interesting projects are you playing around with at the moment?

In terms of Budibase, our production infrastructure's all based on
[Kubernetes](https://kubernetes.io/) and managed with [Helm](https://helm.sh/).
It's been cool to use that to create scalable infrastructure and use all the
tools surrounding the Kubernetes ecosystem. The team at Budibase has a lab day,
once a month, where the team gets to work on whatever they want. Lab days can be
for anything, but generally, it manifests itself in experiments of what's
possible with Budibase. There's been some really amazing things built over the
course of lab days, and some of them even get shipped.

The scope of a tool like Budibase allows for a lot of possibilities. Some
examples are a full database editor that allows you to modify SQL schemas in
Budibase, a text editing experience that allows you to edit the text in the DOM,
kind of like Google Docs, a Google Sheets integration, and cURL and Swagger
importers that just create REST data sources in Budibase by pasting those things
or point into a definition.

More personally, I've been diving into some stuff around the Ethereum
blockchain, and building little side projects for creating tokens and minting
NFTs, just to understand how these things work under the hood. I don't feel
strongly about crypto either way, but it's cool to play with new tools and a
different way of programming, thinking about things in a different way.

3D modeling and WebGL also blow my mind. Some of the visual experiences that can
be created in the browser are incredible.

### Describe your computer hardware setup

I'm using a 15” MacBook Pro at the moment, but I have a new one waiting for me
at home, which I'm looking forward to getting. I have [Bose
Quietcomfort](https://www.bose.com/en_us/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_silver)
headphones that are essential for focus, a 27”, [144Hz BenQ
monitor](https://www.benq.com/en-us/monitor/gaming/ex2780q.html), and a [Filco
Majestouch](http://www.filcokeyboards.co.uk/) keyboard that's been likened to a
drum kit by the team, because it's very loud.

### Describe your computer software setup

**OS:** macOS Catalina.

**Browser:** Firefox.  

**Email:** [Spark](https://sparkmailapp.com/).

**Chat:** Discord.

**IDE:** [VS Code](https://code.visualstudio.com/).

**Source control:** Git.

### Describe your desk setup

When I'm traveling around, mainly in Spain and Portugal, I usually spend a few
months in each place and just work mainly from my laptop, with no monitors. At
home. I've got a monitor and a Herman Miller Aeron chair and a nice hardwood
desk that I do miss sometimes, hunched over a laptop.

I prefer to work remotely, but as a company, we tend to have strategy meetings
in Belfast and company off-sites, which I will come back for. We spend some time
talking about strategy and planning. The main benefit is really just to get the
team together and spend some time in real life. We will have an office very soon
in Belfast, which I'll try to go to when I'm home.

{{< img-center
src="/img/interviews/budibase-martin-mckeaveney-desk.jpeg"
alt="The desk of Martin McKeaveney, Co-Founder, Budibase"
width="100%"
>}}

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** I love both, but I couldn't live without coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I love learning languages and can speak Spanish and Portuguese. I think it
stretches your brain in a different way, and I like being able to communicate
with people that you otherwise wouldn't be able to. I like to keep active, go to
the gym, and train in Brazilian Jiu-Jitsu. I also love cooking, reading, and
writing as well.

### Find out more

[Budibase](https://budibase.com/) is an open source low-code platform. It was
featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 3 Feb 2022. This interview was conducted on
16 Dec 2021.
