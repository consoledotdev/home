---
title: "Socket"
date: 2022-12-28T12:00:00+00:00
draft: false
summary: Secure your JavaScript supply chain.
metaTitle: Working at Socket - Console profile
metaDescription:
  What is it like to work at Socket? Console profile behind the scenes at Socket - secure your JavaScript supply chain.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/socket.dev.png
  URL: https://socket.dev
  jobsURL: https://socket.dev/jobs
  description: Secure your JavaScript supply chain.
  product:
    name: "Socket"
    description:
      "Socket builds security infrastructure for the internet. Developers depend 
      on Socket to prevent malicious open source dependencies from infiltrating 
      their apps. Socket dramatically improves your open source security posture 
      by detecting and blocking the attacks that teams don't expect – malware, 
      hidden code, typo-squatting, and more. Socket improves security outcomes 
      and reduces work for security teams by surfacing actionable security 
      information directly to developers so they are empowered to make better 
      decisions."
  techStack:
    - TypeScript
    - React
    - Next.js
  meta:
    - label: "Founded"
      value: 2020
    - label: "CEO"
      value:
        links:
          - href: "https://twitter.com/feross"
            text: "Feross Aboukhadijeh"
            iconRight: "external-link"
    - label: "Employees"
      value: "10-50"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/SocketSecurity"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/socketinc/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Security - Supply Chain"
  topCategory: "Security"
  subCategory: "Supply Chain"
  filterTaxonomy: "security, saas, react, typescript"
podcast: s03e05-software-supply-chain-feross-aboukhadijeh
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Socket{{</ rich-title-3 >}}

#### How are the teams structured?

At the moment, we're one big cross-functional team just because of the size of
the team. Currently, the team is composed of mostly open source maintainers or
developers that come from open source so all of us really understand the problem
we're solving. We have seven engineers on the team and some other people in the
sales team as well. Everyone on our team is pretty experienced, so we're
actually able to punch above our weight in terms of what we're accomplishing
with the number of people on our team.

#### What tools do engineers use?

- **Source Control:** GitHub
- **Hosting Provider:** Render.com
- **Issue tracking:** Linear
- **Internal documentation:** Notion
- **Monitoring and Alerting:** Datadog and Zenduty
- **Error Tracking:** Sentry
- **Communications:** Slack

#### Can developers pick their own tools?

Everyone on our team uses a Mac right now, with the exception of one engineer
who uses Linux – we're nudging people to use Mac unless they feel super strongly
about it. We all use VS Code, but it is not a rule. We also have a default
configuration for VS Code that's pretty helpful, but it's not a requirement to
use it. If people want to suggest other tools, we welcome their suggestions –
that's how we started using Datadog. We've started considering Codespaces just
briefly, but we haven't actually made a decision on it yet. We were wondering if
we might be able to use it to make it easier to do local development. As you can
imagine, if you're writing a new analysis task to analyze something about every
open source package out there, you don't want to have to have a copy of every
open source package on NPM on your computer - that takes up a ridiculous amount
of space. So we are wondering if Codespaces would be useful.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

Right now, we have a planning meeting every Monday where the team meets. There's
a chair for that meeting who runs the meeting and we set some quarterly goals
together as a team. We all do a big brainstorming session where we talk about
what we think are the most important opportunities for the quarter ahead, risks,
and then list the engineering projects that we want to do, or any kind of tech
debt we want to clean up. Then we commit to a roadmap, or objectives for the
quarter. Once this is decided, weekly planning meetings to decide what we are
going to do this week, and usually it is a mix of new features, bugs and
backlog.

As long as we're making good progress towards the goals we set up at the
beginning of the quarter, then we add in other things like a customer request, a
new feature, or some other idea that we got in the middle of the quarter. We
don't want to be too rigid with sticking to the roadmap - sometimes we'll add a
new goal or even delete one from the quarterly plan in the middle of the quarter
if it makes sense. But it does help to at least have a plan even if it's going
to change.

We do daily standups, the team is small enough that it's actually pretty nice to
just quickly see everybody for 15 minutes in the morning. We do have folks all
across different time zones, but all manage to get together and have a daily
sync at 11:00 AM Pacific. And then on Friday, we do demos – we all like to show
off what we built that week and celebrate the successes of the team.

#### How does code get reviewed, merged, and deployed?

Our process is pretty standard - we use GitHub to request a code review. When
you make a pull request, you can tag anyone you think should review it. All the
tests need to pass before things get merged. We have a staging environment so as
soon as a branch is merged, it goes out to staging and we can test it out and
play with it. Then we decide when we want to deploy it to production, which we
do several times per week.

We pay a lot of attention to code review, you can't merge a PR without a review.
It's very important with a security tool, and just in general for any company,
so we take that really seriously. We also scan everything with Socket. If it
finds anything, then we have to either acknowledge it and say that we don't
think it's a risk, ignore it, or pick a different dependency if it's not
resolvable.

#### What is the QA process?

Our GitHub app is the most critical part of our product right now. Most of our
users are using our product through our GitHub app, but that's something that we
don't have tests for yet because it involves interacting with the GitHub API.
It's harder than other parts of our app to automatically test, but it's
something that we want to do in the near future. So in the meantime, when we do
any release that involves changes to the GitHub app, we do a manual smoke test
where we run through the critical workflows related to the app. But other than
that, we rely on tests and monitoring Sentry for errors after deployments

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

Building the data pipeline is probably the most interesting challenge. It's
similar in spirit to Apache Spark – it's a distributed system that allows you to
run tasks. You can think of tasks as just function calls. It can run these tasks
on a cluster of workers and it runs them lazily. We do a combination of
pre-processing and lazily processing NPM packages. We do this because we want
all the most common stuff that people might ask us about to be fast and the data
to already be there. This allows us to proactively analyze any new packages that
are being published in real time so that we can detect threats and hopefully
find bad stuff and get it taken down, even for folks that aren't using Socket,
so that we can protect the ecosystem.

So that's all happening proactively and then if a customer or a user asks us
about a package which we haven't analyzed yet, then we'll do that on demand.
There's always work for the workers, but then there's also these ad hoc tasks
that come in. What's really cool about the system is that it's built in a way
that it doesn't waste time recomputing anything that it's already computed
before if possible. We use content based addressing to store the results of
tasks in a blob store, and then if that task ever needs to be run again or if we
ever need the result of a task again in the future, it'll just have the answer
immediately. The default is that every task is cached forever, which means that
stuff can be really, really fast, unless we change the task or if the task
relies on any kind of external data.

For the most part, everything is immutable. For example, if an open source
maintainer publishes a new version of a package, often most of the files are
exactly the same. They might have just changed one file or something like that.
And so even between package versions, we can actually reuse the results of much
of our analysis. We can make it work this way, which is way faster than if we
were just naively analyzing everything and sticking it into a database.

#### How does on-call work?

We do have an on-call rotation – everyone takes a one week shift. Every engineer
takes part in the on-call rotation, so everyone does their fair share and helps
keep things online. I can't remember the last time we had an alert, we're pretty
good about trying to avoid that. But the way it works is if no one acknowledges
it, then it goes to the CEO after 30 minutes. Everything is pretty standard. We
want everybody to feel like they're free to build whatever they want, but then
with freedom comes responsibility.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process at Socket
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

Feross Aboukhadijeh, the CEO, conducts initial interviews with engineering
candidates to assess their background and fit for the company. The next step in
the hiring process is an evaluation of the candidate's technical skills, which
may be assessed through a take-home test or live coding interview. If the
candidate has open source experience, their projects will also be reviewed. The
company then conducts a number of additional interviews with team members before
making a decision on whether to offer the candidate a position. The hiring
process is designed to be efficient and respectful of the candidate's time, with
the goal of providing a conclusive answer as quickly as possible.

#### What is the career progression framework? How are promotions and performance reviews managed?

We are still in the early stages of our company's growth, so it is too soon for
us to decide on promotions. While we do have a standard framework for positions,
many of our employees are currently taking on multiple roles. We have not yet
implemented a formal performance review process that leads to promotions, but
our goal is to do so as the company grows.

{{< div--close >}}
