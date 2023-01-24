---
title: "Grit"
date: 2023-01-23T12:00:00+00:00
draft: false
summary: Fix technical debt automatically.
metaTitle: Working at Grit - Console profile
metaDescription:
  What is it like to work at Grit? Console profile behind the scenes at Grit -
  fix technical debt automatically.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.grit.io.png
  URL: https://www.grit.io
  jobsURL: https://getgrit.notion.site/Grit-Job-Board-31942eda7b0e49478ed7b0d6d2361f1f
  location: Remote (Americas)
  description: Fix technical debt automatically.
  product:
    name: "Grit"
    description:
      "Grit is on a mission to crush technical debt. We believe that a big challenge in the next decade will be crumbling digital infrastructure. Our entire modern economy runs on code, but we haven’t developed appropriate tools to ensure software remains reliable over time. Companies know that technical debt threatens the reliability of their services and slows down the pace of innovation, but struggle to find enough engineering talent to fix issues—most software maintenance today is still done manually and delayed as long as possible. We believe there is a better way: we’re building Grit, a query language for automatically maintaining software. Underneath, we use advanced parsing, static analysis, and machine learning to make the magic happen."
  techStack:
    - Scala
    - TypeScript
    - React
    - GraphQL
    - Rust
  meta:
    - label: "Founded"
      value: 2022
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/morgante/"
            text: "Morgante Pell"
            iconRight: "external-link"
    - label: "Employees"
      value: "<10"
    - label: "Stage"
      value: "Early stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/gritdotio"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/getgrit/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Developer Tools - Coding"
  topCategory: "Developer Tools"
  subCategory: "Coding"
  filterTaxonomy: "developer-tools, saas, typescript, react, rust"
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Grit{{</ rich-title-3 >}}

#### How are the teams structured?

We're an early stage company, so it's only six of us right now. It’s a very flat
hierarchy: everyone is empowered to commit anywhere in the monorepo and
engineers mostly build features end-to-end. Of course, people have their areas
of expertise but overall we aim for minimal boundaries.

#### What tools do engineers use?

- **Version Control:** GitHub
- **CI/CD:** GitHub Actions
- **Issue Management:** GitHub Issues
- **Monitoring and Error tracking:** We run on GCP so use the full Google Cloud
  Monitoring suite.

#### Can developers pick their own tools?

We don't prescribe what you have on your workstation. If you want to use Linux,
that's fine; if you want to use Windows, that's fine too. Most of the team is
using a Mac, but we provide a budget for anyone who wants to buy an M2 Mac or
equivalent.

For our production stack, anyone can suggest a tool with a brief RFC. We’ll
discuss it as a team, then I’ll ultimately make the final call on whether we
adopt it or not.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

We keep the process as lightweight as possible, with a single Kanban board that
everyone works from. Our only standing meeting is a weekly demo day where we all
share what we built that week—sometimes a huge new feature, sometimes improving
reliability of a test suite. Our first priority is fixing bugs that impact our
customers, then pushing out new features. We don’t spend much time on cleaning
up technical debt, but instead dogfood our own product to enforce consistency
and clean things up automatically.

#### How does code get reviewed, merged, and deployed?

When someone opens pull requests, they get a review from anyone else on the team
before it is merged in. Anyone can merge if they have 1 approval and tests pass.
The main branch is deployed straight to production.

#### What is the QA process?

There's no formal QA process but we instead rely on dogfooding and automated
tests. We don't really believe in manual QA - our manual QA is us dogfooding the
product ourselves a lot. Our testing phase is all automated tests with unit
integration tests implemented in the native language test framework. We have
integration tests in all of our core workflows.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We're constantly solving relatively interesting problems, mostly around program
analysis and machine learning. A fun project we’ve recently been tackling is how
to expand our tool to support additional languages by parsing and rewriting ASTs
from tree-sitter grammars. This involves understanding how to programmatically
transform the AST while preserving correct syntax and intent, while writing code
that interoperates between Scala and Rust.

#### How does on-call work?

We don’t have formalized on-call yet, but instead an #infra-alerts channel in
Slack. Whoever sees an issue first jumps on it (usually the founders). When the
load becomes higher, we’ll plan to introduce a rotation but this is working fine
for our current stage.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process at Grit
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

The process is simple, it usually takes two to three weeks to go from the
initial interview stage to the offer stage. The application process is divided
in following stages:

- Initial 30-minute interview to determine overall fit with the company
- In-depth interview including problem-solving, where you get a chance to solve
  some problems using our product
- A trial, paid, project where engineers work on a relevant issue for up to 10
  hours.

#### What is the career progression framework? How are promotions and performance reviews managed?

As an early-stage startup, success is not measured by internal promotions, but
rather by the success of the company as a whole. Everyone in the company holds
significant equity, so the biggest career progression comes from making the
company successful—not trying to “advance” within a small organization.

Of course, I have managed teams at Google and do believe in giving regular
performance feedback. I provide ongoing feedback every month and reassess roles
and responsibilities regularly. Grit should be a place where everyone feels like
they’re doing the best work of their lives

{{< div--close >}}
