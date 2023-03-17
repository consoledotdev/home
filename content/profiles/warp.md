---
title: "Warp"
date: 2022-09-22T12:00:00+00:00
draft: false
summary: The terminal for the 21st century.
metaTitle: Working at Warp - Console profile
metaDescription:
  What is it like to work at Warp? Console profile behind the scenes at
  Warp - the terminal for the 21st century.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.warp.dev.png
  URL: https://www.warp.dev
  jobsURL: https://jobs.console.dev/company/warp
  location: Remote (US)
  description: "The terminal for the 21st century."
  images:
     - url: /img/profiles/warp-profile-1.jpg
     - url: /img/profiles/warp-profile-2.png
     - url: /img/profiles/warp-profile-3.jpg
  product:
    name: "Warp"
    description:
      "Warp is a blazingly fast, Rust-based terminal reimagined from the ground 
      up to work like a modern app."
  techStack:
    - Rust
    - Go
    - React
    - Typescript
  meta:
    - label: "Founded"
      value: 2020
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/zachlloyd/"
            text: "Zach Lloyd"
            iconRight: "external-link"
    - label: "Employees"
      value: "10-50"
    - label: "Stage"
      value: "Series A startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/warpdotdev"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/warpdotdev/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "Desktop"
  category: "Developer Tools - Terminal"
  topCategory: "Developer Tools"
  subCategory: "Terminal"
  filterTaxonomy: "developer-tools, desktop, rust, go, react, typescript"
interview: warp-zach-lloyd
podcast: s02e10-terminal-tools-michell-lim-zach-lloyd-warp
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Warp{{</ rich-title-3 >}}

#### How are the teams structured?

We are a remote-first company, which means that we hire anyplace (in the US for
now) and do not have any expectation that employees will regularly come to an
office.  We do however have an “opt-in” office in the Soho neighborhood of NYC. 

For now we don’t have any standing “tech leads” who “own” different parts of the
code.  Instead, when there is a significant project to be done that requires
more than one engineer, we generally ask one engineer to be the “lead” for that
project pod.

The lead should be the “driver” on a project rather than a gatekeeper - the lead
needs to keep the project moving forward, should be responsible for
communication about its progress, timeline, goals, etc. The lead should
coordinate the work associated with the project - creating the tasks, driving
the design, talking to users. The lead is responsible for the overall quality
and timeline of the outcome - ultimately for any project what matters is (a) how
well does it work and (b) how long did it take and (c) was it built well so that
we can continue building on it.

Right now for instance we have about 5 pods going, focusing on different
features and infrastructure areas – everything from single-user improvements to
Teams and cloud infrastructure. [We have a public Notion
doc](https://warpdev.notion.site/How-We-Divide-Eng-Work-at-Warp-46275bfbaafa4cab9878b1ffd12d6409)
that describes our structure in more detail.

#### What tools do engineers use?

- **Design:** Figma
- **Builds/CI:** GitHub Actions
- **Source control:** GitHub
- **Issue tracking:** GitHub issues for external tracking and bug reports.
  Linear for internal issue tracking.
- **Error reporting:** Sentry
- **Monitoring/logs:** Sentry, Amplitude
- **Chat:** Slack
- **Wiki:** Notion

#### Can developers pick their own tools?

Yup, except everyone uses Warp as their terminal, since that's our product :)

#### How does the development process work? What's the process for working through bugs, features and tech debt?

Every quarter we develop a set of OKRs that are the high-level goals we want to
achieve as a company and an engineering team.

OKRs are typically focused on moving user metrics like retention, growth, NPS,
etc.

We have product pods that form to tackle the product initiatives that we think
are most likely to help us achieve the OKRs.

On a weekly basis, each of these pods prioritizes what it wants to get done and
creates a set of tasks in Linear, our task tracking tool.

In addition to feature pods, we also have a separate “Product Quality” rotation,
where 1-2 engineers every week focus solely on moving through our backlog of
user issues.  Besides this rotation, engineers generally are responsible for
fixing bugs related to any features they are working on.  And we have a culture
that encourages engineers to fix any bugs they find, no matter who wrote the
original code.

We don’t have a dedicated track towards fixing “tech debt” as I think that’s an
anti-pattern.  Any tech-debt change or refactor or code improvement needs to
come with a user-facing improvement, which is in line with our general
orientation of building code to fix user needs, not building beautiful code for
its own sake.

#### How does code get reviewed, merged, and deployed?

Our development process is based around using local branches, making small
incremental changes, pushing them to GitHub and picking a code reviewer. We take
code review very seriously – it’s one of the main tools we have for ensuring
code and product quality.

Please refer to [How We Code at
Warp](https://warpdev.notion.site/How-We-Code-at-Warp-257fe43d556e4b3c8dfd42f70004cc72)
for a very detailed description of our coding processes.

#### What is the QA process?

QA starts with automated tests that accompany PRs.  Generally we have three
types of tests: unit tests, functional tests, and integration tests.  Engineers
are encouraged to write whatever makes the most sense for verifying their change
– we favor pragmatism here above all else.

On top of automated tests, engineers are expected to manually test their own
features and bug fixes – there is no external manual QA team.

In addition to testing and manual QA, our releases go through various stages of
canarying and dogfood – we have a nightly build that the whole team uses, and
then a canary build for external testers.  We do one production push a week.

Moreover, features are typically developed behind flags so that we can enable
them once they are ready.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We have a ton of great deep-dives written by our engineers that explore a number
of interesting technical challenges that our team works through while building
Warp. Check them out on [Warp’s Engineering Blog](https://www.warp.dev/blog)!

Specific examples:

- [Adventures in Text Rendering](https://www.warp.dev/blog/adventures-text-rendering-kerning-glyph-atlases)
- [Rust’s Rules are Made to be Broken](https://www.warp.dev/blog/rules-are-made-to-be-broken)

#### How does on-call work?

We have a weekly rotation, but engineers are not on 24/7 oncall because our app
is primarily client side right now.  That will likely change as we add more
server features.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process at
Warp {{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

1. An initial phone call where we go over the basics of our product, company,
   roadmap and culture. We also want to learn about you, your interests and
   career goals, and see if there’s a good match with what we are looking for in
   an engineer.
2. A second phone call with an engineer on the Warp team to discuss what it’s
   like working at Warp, and to answer any further questions that might
   determine whether to start the formal interview process.
3. A 2-hour technical session. This has 3 sections - coding, algorithms and
   runtime analysis, system design. The primary goal of the session is for us to
   get a sense of your level as an engineer and make sure that you’d be able to
   succeed technically at Warp. The questions do not test for knowledge of any
   particular language or stack, and are intended to assess general programming
   and problem solving ability. 
4. A 1-hour product session. This happens on a separate day from the technical
   session. The goal of the product session is to see how you think about
   product issues in general, the terminal in particular, and to see how you gel
   working with us as a team. There are no right or wrong answers in this
   session, and it’s meant to simulate us really working together.  It’s meant
   to be pretty low stress and even fun.
5. A decision on an offer, followed by a call with Zach (Warp’s founder and CEO)
   about offer details. All of our offers give candidates a sliding scale of
   equity and cash to choose from, and come with a model for understanding what
   the equity is worth in different scenarios.  We think this is important, as
   startup equity can be difficult to value.
6. A couple reference checks.
7. An optional conversation with one of our investors about why they invested in
   Warp and how they see the opportunity.

A more detailed breakdown of [the process is available in the Warp Notion
doc](https://warpdev.notion.site/How-We-Hire-Engineers-at-Warp-8431f40209c743c091c18428df560c08).

#### What is the career progression framework? How are promotions and performance reviews managed?

We do not yet have a formal promotion process and ladder and at the moment are a
very flat, non-hierarchical company. Most engineers report to an engineering
manager or directly to the CEO (who is an engineer and manager himself).
Managers focus on giving constructive feedback about how to grow technically,
culturally, and in user-orientation that is driven by the [Warp Growth
Rubric](https://warpdev.notion.site/How-Engineers-Grow-at-Warp-3f8cb777b30745548c09057cd1287051).

We plan on adding a ladder once the company has around 20 engineers. We will do
this while trying not to create [a promo-oriented
culture](https://www.warp.dev/blog/problems-with-promotion-oriented-cultures).

See more in the [Warp Notion
doc](https://warpdev.notion.site/How-Engineers-Grow-at-Warp-3f8cb777b30745548c09057cd1287051).

{{< div--close >}}
