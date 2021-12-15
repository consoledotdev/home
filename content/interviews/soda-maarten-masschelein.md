---
title: Interview with Maarten Masschelein, Soda
who: Maarten Masschelein
role: CEO
org: Soda
what: A tool for data observability.
tags: ['Data Observability']
date: 2021-11-25T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Maarten Masschelein, CEO, Soda
isPage: interviews
topImg1Src: /img/interviews/soda-maarten-masschelein-profile.png
topImg2Src: /img/favicons/www.soda.io.png
ogImg: /img/interviews/soda-maarten-masschelein-profile.png
---

### What is Soda? Why did you build it?

[Soda](https://github.com/sodadata) is a data observability company that
provides open source data reliability engineering tools and a data management
platform.

In our day-to-day lives, we are all using data more than we realize to make
decisions and our choices are driven by data, and in business, almost all of our
decisions - even the micro-decisions - are all heavily influenced or enabled by
data.

As we’re seeing this shift, data as a practice is still not as mature as what we
see with software engineering. Data is lagging behind about a decade or so,
notably in practices such as testing and monitoring. Without proper testing, as
new data comes in, things can fundamentally change with that dataset, think
structure, meaning, and completeness, leading to data issues with the reports we
use or the machine learning models we train.

Sometimes the dataset may not be refreshing, which is the worst problem. You
might not notice and your reports or data products will stop working, or they
will continue working, but with bad data. And that’s why we know that the
biggest problem faced by data teams today, is that they are flying blind.
Without a clear strategy to monitor data for issues, most organizations do not
know how to start addressing the problem which leaves their systems exposed and
can result in serious downstream issues for the data products they are building.

We have been in those situations where you build data products for teams that
need to do a lot of analysis at the end of a month or quarter. They are
typically in functions where they need to report KPIs at the end of a business
cycle, and all of a sudden they notice that the report is broken and they cannot
use it. That's a very frustrating feeling. It's really all about the ability to
trust the data that you have in your organization.

That's the core of what we're solving for at Soda: giving data teams the power
to create trusted data products, and an integrated platform to bring everyone
closer to data.

### How have engineers solved this in the past?

There have been some tooling solutions in the past. If you go back in history,
some of them got acquired by the likes of [Oracle](https://www.oracle.com/),
[Informatica](https://www.informatica.com/) and [IBM](https://www.ibm.com/).
They were tools that were tightly coupled with the data transformation layer and
tended to work as rule-based systems.

For example, you could specify certain rules like value ranges for each column
which would then trigger alerts if the data differed. This often involved a very
technical interface that was tedious to use, and you had to know all of the
business logic up-front. There was no automation.

Another way of solving this was to manually sift through samples of data at
regular intervals, such as every Friday or at the end of the month. You would
just take a dataset, grab a couple of records and sift through it to see if
there were any issues that could be identified.

Scheduled queries are another stop-gap solution we often see, where dashboards
are built for a set of regular queries. But again, they are manual-intensive and
don’t allow you to increase trust and reliability, at scale.

There has never been a structured way to deal with this in the past, nor has it
really been built into everyone’s day-to-day workflow in the past with as much
automation as possible.

The idea is that Soda fits in as part of your data reliability and observability
stack. Modern software products have an infrastructure layer, which comes with
infrastructure monitoring. Then there’s the app code itself which is monitored
by application performance monitoring. These two realms have their unique
differences, but they have a lot of similarities. The next layer is data, which
also includes Machine Learning (ML) models. Those are the four layers that we
see.

Data and ML are the two new kids on the block.

### What does a "day in the life" look like for you?

As the CEO of the company my day is quite varied, but it's mostly focused on
hiring new talent and ensuring our team members have what they need to get our
product and platform into the market. I’m also responsible for setting the
company strategy, communicating our objectives to the team, and dealing with
everything else involved in building a company, such as talking to prospective
customers or partners, and any legal or finance needs.

My co-founder, [Tom Baeyens](https://twitter.com/tombaeyens)’ day-in-to-day life
looks very different - he's one of the key people that we have driving our open
source strategy. He's currently working on a major new version of our open
source project, which will introduce a new language for data reliability (you
heard it here first!). He spends most of his day coding and speaking with
contributors, users, and customers with the community, figuring out what matters
most to them, so we can build an amazing product for them.

### What does the team look like?

At the moment we are product and engineering strong - the team is about 35
people. We're split across a number of domains that are strategic to the product
and our customers, and in turn the company.

For example, data testing is a domain for us. Data validations, automated
monitoring, incident management, they're all different domains. These domain
leads set the strategy and they have a team to build out that capability within
our products.

Our domains have an overarching product manager. The product manager speaks with
our customers, analyses product usage patterns, and figures out what's really
important for our community, and then each domain lead works together with the
product manager to set the strategy and priorities within that domain.

We’re building out our go-to-market and field team, and currently have roles in
business development, sales, and marketing. And we’re also supported by our
talent and operations leads.

### How do you handle the balance between commercial and open source?

When we started the company, what really made both Tom and myself click was the
adoption of our products. We don't like products that are gated behind a lot of
license agreements and not available to everyone. That was the spirit from day
one, we wanted to build products that we could put in the hands of everyone.

We started in closed source, so that we could understand all of the different
stakeholders that are involved in this problem. What we found was that data
quality is really a team sport. There are many people involved, it's not
something you can do on your own. Collaboration is key.

We figured out that what was truly important for data engineers, is that they
are able to easily integrate tools into their data pipeline as part of their
toolkit. They need to have flexibility in terms of how you test data from
different sources and ideally, they can easily add new data sources to test on.
Also, they found it important to understand the logic so that they could
configure our tools in ways that would deal with massive volumes of data. That
was a prime candidate to be open source. Being open source provides a lot of
value to our offering as well as our community

The cloud component of Soda is the management and collaboration layer - the
workflows, associated metadata, and results. Open source means every individual
can start using it today, and they'll get value from it. The commercial
component makes that a better experience for teams.

### How did you first get into software development?

I always had a fascination with software development. My first computer was an
IBM 486 that I tinkered so much with, that I broke it!

I started mostly with a bit of Java but today when I tinker, it's really only
Python. I also love trial and error, low code experiences like editing YAML
configuration files.

I grew up in a rural area, so the software world often felt quite far away, but
we were lucky to have a company called [Lernout &
Hauspie](https://en.wikipedia.org/wiki/Lernout_%26_Hauspie) that was in my
region. It specialized in speech recognition. I found what they did fascinating
and still cherish my experience of going there for the first time. They managed
to IPO, but unfortunately weren’t around for very long after.

After my studies I decided that I didn't really want to be developing and
building products as an engineer every day. I wanted to explore the business
side, so I decided to go into a role at a software company as a solution
architect. I helped implement data management and data management tooling at
companies, and evolved into management positions across the business from there.

### Is the Soda tech stack all Python?

It’s a combination. For everything open source that touches data, we use Python.
We might extend this more into Java, with for example
[Scala](https://www.scala-lang.org/). On our backend, it's a mix but
predominantly Java.

### What's the most interesting development challenge you've faced building Soda?

I think the most interesting thing is when we have a problem in which multiple
stakeholders are involved. It becomes super complicated to create a great user
experience for each stakeholder. It's already complicated to create an amazing
experience for a single type of user. So multiple stakeholders just increases
the complexity.

That user flow is an obsession! For engineers, this is typically the CLI -
things like clarity of error messages, how logging works, and how the pieces fit
together.

For a less technical user, it's very different. The UX is then primarily in the
cloud - easy signup and login, guided onboarding, and getting to value in
minutes.

Another thing currently in development is the Domain Specific Language(DSL)
we’re building for data reliability and observability. It is something that I
think is super exciting and particularly looking forward to its availability.

My co-founder, Tom, built a DSL in the Java workflow space a while ago, known as
[jBPM](https://www.jbpm.org/). Tools such as Activiti, which was a very sizable
project with great world-wide adoption, came out of that. The DSL made it easier
to configure the engine and ensure that less-technical users could get involved
in setting-up workflows.

We’re applying the same recipe to data reliability and observability.

### What’s the most interesting tool or tech you’re currently playing around with?

The most interesting one today in data is [dbt](https://www.getdbt.com/). This
notion of what [Terraform](https://www.terraform.io/) has taught the world of
"infrastructure as code". is just fantastic. Seeing that being introduced in
data, creates such an easy workflow.

We also just introduced [OpenTelemetry](https://opentelemetry.io/) to our own
stack so we now understand exactly how users are using our software, which CLI
commands they use, why they get stuck and so on. That is something we do using
both OpenTelemetry and dbt.

### Describe your computer hardware setup

At home, I have a desktop and then I use my laptop on the go. I'm an occasional
gamer so I have a gaming machine, and was fortunate enough to do my setup right
before prices skyrocketed (thanks crypto!). I have an [RTX
2070](https://www.nvidia.com/en-gb/geforce/graphics-cards/rtx-2070/), a
[Logitech
G502](https://www.logitechg.com/en-gb/products/gaming-mice/g502-hero-gaming-mouse.910-005471.html)
mouse, and a [Ducky keyboard](https://www.duckychannel.com.tw/en/Keyboards).

For my laptop, I really choose practicality and power, but it needs to be a
small device. For the last decade I’ve been using a 13 inch [MacBook
Pro](https://www.apple.com/shop/buy-mac/macbook-pro/13-inch).

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail, but I’m trialing [Superhuman](https://superhuman.com/) at the
moment

**Chat:** Slack.
  
**IDE:** Pycharm.  

**Source control:** Git.

### Describe your desk setup

At home, because I live in a pretty small apartment in Brussels, I don't really
have a proper setup like a home office desk, so I end up sitting around
different places.

It was a bit of a privilege during COVID that we had an office. We are fully
remote, so we couldn't do the team meetings at the office anymore, but it did
allow me to keep that habit. Some days, I like to be able to just get out of the
house and walk there. It makes for a clearer switch between work and personal
life.

The office is an amazing building, it's carbon neutral, and it has great views.
It's a former train station in Brussels where they used to gather all of the
goods coming from outside of the city into the city. It's a massive site, and a
really inspiring place to be.

### When coding

**Daytime or nighttime?** Night time.

**Tea or coffee?** Both. It depends on the time of day. Tea at night.

**Silence or music?** Both. If it’s music, it cannot contain lyrics. I like
either classical music or Berlin house or techno. Either work.

### What non-tech activities do you like to do?

I love board and computer games, particularly, strategy games like Age of
Empires. Outside of that, I'm a sucker for classic cars. I have a 50 year old
Fiat convertible. When the weather is good, I love to take it for a ride, be out
of the city, into nature, and then go for a hike.

### Find out more

[Soda](https://github.com/sodadata) is a data observability tool. It was
featured in the [Console newsletter](https://console.dev) on 9 Dec 2021. This
interview was conducted on 25 Nov 2021.
