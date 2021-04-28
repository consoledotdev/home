---
title: Q&A with Ali Khajeh-Hosseini, Infracost
who: Ali Khajeh-Hosseini
role: Co-founder
org: Infracost
what: Cloud cost estimates for Terraform.
tags: ['DevOps']
date: 2021-03-01T12:00:00Z
draft: false
summary: Q&A interview with Ali Khajeh-Hosseini, Co-Founder, Infracost.
isSelected: qa
topImg1Src: /img/qa/infracost-ali-khajeh-hosseini-profile.jpg
topImg2Src: /img/qa/infracost-ali-khajeh-hosseini-logo.svg
ogImg: /img/qa/infracost-ali-khajeh-hosseini-desk.jpg
---

### What is Infracost? Why did you build it?

[Infracost](https://www.infracost.io/) is a cloud cost estimator. It works by
looking at your pull requests, examining the infrastructure changes you're
about to make, then telling you how much the change is going to cost.

The impetus came from when we were working on our previous startup, CircuitOps,
a devops hiring platform. We had to spin up multi-tiered stacks as part of the
code tests that candidates would run. Each time we had to spin up something new,
writing infrastructure code and sometimes launching lots of resources, it cost
us more money. We wanted to know how much. As the developer writing the code,
it seemed odd that I couldn’t see how much it would cost. Nowhere else on the
web have I seen an experience where you buy something without knowing how much
it costs.

To solve the problem my co-founder Alistair built a tool which he then open
sourced. CircuitOps unfortunately failed, but his tool started getting stars on
GitHub. We thought this was interesting, and having worked in the cloud cost
space before, we saw an opportunity. My first startup was acquired by
Rightscale (now [Flexera](https://www.flexera.com/)) and we explored a similar
problem there, but with a Rails app where you could pick and choose the
instances.

When we were building PlanForCloud and CloudAnalytics, we were digesting the
bills, and building charts and dashboards. Our users were in finance and
management teams but there was a lot of friction because they didn't understand
what was being launched. They were responsible for the bill, but they didn't
understand it. They would often interrupt the dev teams, put OKRs down and push
tickets, but this often resulted in a lot of back and forth friction.

This was in 2012, and it was based on my PhD research at a time when there were
no pricing APIs. I had to scrape prices from the different cloud vendor
websites. I remember in my thesis I had something over 10,000 prices from AWS,
Google, Rackspace, and several others. Over time, the complexity has increased
(today AWS has over 2 million price points) but developers don’t know what to
do about it. Nobody really looks at the costs involved.

Infracost is a workflow tool. You can set a threshold so that when costs change
by a certain percentage, Infracost will add a comment to the PR and show the
cost diff. Anything below that threshold doesn’t matter.

The systems have matured to the point where the developers know what to do with
that information. The security market is seeing similar things with scanning
tools that are all coming into the pull request. We believe cloud costs are
next. Cost is an issue, and there will always be waste. We want to see if we
can fix or improve the status quo.

{{< img-center
src="/img/qa/infracost-ali-khajeh-hosseini-product.png"
alt="Infracost product screenshot"
width="100%"
caption="Infracost CLI cost estimate output."
>}}

### What does a “day in the life” look like?

We're going through the Y Combinator program right now which is intense. Six
days a week, ten hours a day. It starts with me looking at our metrics, how
many people signed up yesterday? Who were they? What are they doing? Looking at
reporting to see if there are any new issues created, and doing a bit of
triage.

We try to do weekly sprints at the moment, focusing on one KPI. For example
this could be growth or retention, then we plan how to take on this KPI. We're
seeing an increasing number of contributors, so I’ll typically also be
reviewing code and giving feedback.

### Does that mean you still have time to code?

Yes, but it’s increasingly more the case that I review code. My co-founder
Alistair does a lot more of the heavy coding. I'm focusing mostly on CI
integrations and things like the resources we're adding. We've got to track
hundreds of resources across Google, AWS and Azure, so my focus is figuring out
how we add resources so they're consistent? How do we do them so the output
makes sense to a developer?

### How are you solving the challenge of so many cloud products and prices?

Through hundreds of hours of work! Infracost reads your Terraform configs so we
read every single parameter that is in the Terraform documentation, then map it
to every single price point from each cloud vendor. Once we figure out the
mapping for one service, the whole world enjoys it for free!

The challenge is that these mappings change all the time. Terraform changes,
AWS changes, Google changes, the prices themselves change. There is no code
generation magic here. It's just a lot of work, but that's where the value is.
We're doing the difficult work, so you don't have to make spreadsheets and have
lots of email discussions. You just run the CLI and it does its thing.

These are the initial set of features. We are already having discussions with
users that want custom price books, because they’ve negotiated special rates
with AWS. That's likely to be a paid feature. Similarly, management teams want
dashboards and analytics for what's happening across their teams. We haven't
focused too much on those yet because there's still a lot of work to be done on
the layers below, but we plan to add these types of features too.

Another challenge is that everybody runs Terraform in a different way. You
think Terraform is a CLI tool that is standardized, but there’s a range of ways
you can use it. With [Terragrunt](https://terragrunt.gruntwork.io/), with
[Terraform Cloud Remote
Executions](https://www.terraform.io/docs/cloud/overview.html#remote-terraform-execution),
Terraform has local states, and all sorts of other configs we need to handle.
It’s a fascinating problem to solve. We're making a CLI that should work with
different workflows, which means we need to have various edge cases in mind.

### Do you have a philosophy around open source vs paid?

The approach that services like GitLab are taking makes a lot of sense to us,
where it's buyer-based open source. If you're an individual contributor in a
company and you need to get your work done, use the CLI, it's free. If you're
the VP of Infrastructure at a big bank or at a car manufacturer, and you want
this tool to deploy on all your repos across all your teams, then these are
going to be paid features. You have a budget for that as a manager.

This is our first open source company. We have consumed a lot of open source
before, but this is the first time we're actually making open source software
ourselves. We're learning on the way and we know there are people who've done
it, that are much better and smarter than me, so we look to learn from them.

### What is the team structure around Infracost?

There are three co-founders. [Hassan
Khajeh-Hosseini](https://twitter.com/hassankhosseini) and I are brothers.
[Alistair Scott](https://twitter.com/aliscott) joined us when he saw our post
on Hacker News for our previous company around about eight years ago, just
after our Y Combinator interview in 2012. We are from Scotland, there's not
many companies who go to Y Combinator interviews from Scotland! Alistair
happened to study at the same university as I had been doing my PhD at, so he
reached out to us and joined our team. The three of us have been co-founding
companies since then.

There is also [a contributor community](https://github.com/infracost/infracost)
because it's open source, and we're very grateful for any help we can get.
There's about 25 contributors in total across the repos.

### How did you first get into software development?

In the early 2000s I was introduced to coding by a friend at school who was
doing an evening class. I was at school where I found the computing classes
boring. My friend said there's this course called ‘web development’, that he
recommended I sign up to.

The class was full of people in their forties taking psychology degrees, and
then there was my friend and me aged 14yrs old learning HTML, Javascript,
Pascal and Assembly. This course led me to doing an undergraduate, an MSc in
High Performance Computing and a PhD in Computer Science.

### What is the most interesting tech you are playing around with at the moment?

I'd probably pick [GraphQL](https://graphql.org/). At RightScale we built a lot
of REST APIs to try and describe cloud resources. Doing that with a REST CRUD
API didn’t really work so well - we had views and you could always see that the
front-end engineers didn't want what was returned from the backend. They wanted
all the sub-resources and relationships to be resolved so they could render
things easily on the frontend. GraphQL is making those types of APIs much nicer
to expose and work with on the front-end and on the back-end.

### Describe your hardware setup

My laptop is a 15 inch, mid 2015 MacBook Pro. That’s it!

I travel a lot. Before COVID-19 hit, I was doing a world tour and that's why I
just have a laptop. I used to live in Edinburgh then I migrated to California.
I lived there for a while, then migrated to the Middle East. So my setup is
simple - just a laptop and headphones, which means I can work from anywhere.

### Describe your software setup

**OS:** macOS.

**Browser:** Firefox.

**Email:** Gmail.


**IDE:** VS Code.

**Source control:** Git and GitHub

### Describe your desk setup

{{< img-center
src="/img/qa/infracost-ali-khajeh-hosseini-desk.jpg"
alt="The desk of Ali Khajeh-Hosseini, Infracost"
width="100%"
>}}

Due to COVID-19 we're not in the UK just now. We’re spending a few months in
Istanbul in an Airbnb. So it’s just an Ikea desk with a good chair.

I've been working remote or with remote teams since 2012. The office is fun,
but when we start a company, we always think, where's the best talent and who's
interested in doing this? It's so much harder when you want to relocate people
to an office. Infracost is all remote. We don't have an office.

### When coding

**Daytime or nighttime?** Nighttime

**Tea or coffee?** Water!

**Silence or music?** Music that's repetitive, so it doesn’t distract me.

### What non-tech activities do you like to do?

I used to do a lot more, but during this COVID time, it's all mostly been tech.
I don't normally watch much TV, but I'm going back to watching more as it seems
like a good break away from the laptop. You don't need to think, you just sit
there and watch.

### Find out more

[Infracost](https://www.infracost.io/) is a cloud cost estimate workflow tool
for Terraform. It was featured as an “Interesting Tool” in the [Console
newsletter](https://console.dev) on 28 Jan 2021. This interview was
conducted on 1 Mar 2021.
