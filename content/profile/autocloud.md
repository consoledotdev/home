---
title: "AutoCloud"
date: 2022-04-04T12:00:00+00:00
draft: true
summary: Consistent & compliant DevOps.
metaTitle: AutoCloud - Console devtools jobs profile
metaDescription:
  Console profile of CodeSee - consistent & compliant DevOps
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/autocloud.dev.png
  URL: https://autocloud.dev
  jobsURL: https://autocloud.dev/jobs
  location: Remote
  description: "Consistent & compliant DevOps."
  images:
    - url: /img/profiles/autocloud-profile-1.png
    - url: /img/profiles/autocloud-profile-2.jpeg
    - url: /img/profiles/autocloud-profile-3.jpeg
  product:
    name: "AutoCloud"
    description:
      "At AutoCloud Our mission is to make DevOps as effortless as possible so that Ops teams can automatically generate secure, production-ready infrastructure as code that is customized to their business. Once workloads are deployed, AutoCloud gives users multi-cloud visibility and ensures that every cloud resource is aligned with their business."
  techStack:
    - Typescript
    - React
    - Node
    - GraphQL
  meta:
    - label: "Founded"
      value: 2019
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/tkunovsky/"
            text: "Tyson Kunovsky"
            iconRight: "external-link"
    - label: "Employees"
      value: "20"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/AutoCloudDev"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/autocloud"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "DevOps - Compliance"
  topCategory: "DevOps"
  subCategory: "Compliance"
  filterTaxonomy: "devops, saas, typescript, node"
interview: autocloud-evelyn-latour
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="development-profile" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Development profile
{{</ rich-title-3 >}}

#### How are the teams structured?

We are a relatively flat organizational structure with all teams reporting to
their respective team leads who in turn report directly to our CTO.

#### What tools do engineers use?

Gitlab, Jira, Slack, Sentry, DataDog, AWS, k8s, PagerDuty.

#### Can developers pick their own tools?

Yes.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

Two-week agile sprints with all of the typical sprint ceremonies (standup,
backlog grooming, sprint planning, demo, retro...) Rapid deploys using
pipelines, GitOps, and K8s for everything. We leave 10% of the sprint capacity
unallocated for bugs and other issues.

#### How does code get reviewed, merged, and deployed?

Code requires two +1’s before being merged to dev, developers can merge their
own code when they meet that requirement. That kicks off a pipeline that builds
and deploys code to our dev env. From there, manual approval is required from a
tech lead to go to staging, and then our CTO/a VP of tech does frequent prod
deploys using our pipelines.

#### What is the QA process?

Developers are expected to write their own tests, and when reviewing pull
requests developers are asked to pull down their peer’s code and test to make
sure it works in addition to looking and reviewing the code on Gitlab. PMs do
manual and regression testing in staging before prod releases.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We are building a Type-safe definition of the entire public cloud ecosystem that
is backed by a powerful graph database that lets you query and mutate data using
GraphQL. There are some interesting challenges here with making this real-time
and at scale!

#### How does on-call work?

Given our enterprise nature, we have SLAs that require same-day business support
meaning we have 12 hours to get back to clients. This means that developers are
not getting woken up at 2 am ever. If anything is on fire our CTO, CEO, and VP
of tech rotate every week to deal with any P1s... We do a lot of testing so we
very very rarely have these.

#### How does the application process work? What are the stages and what is the timeline?

For the moment, the application process is to send the CEO an email and he’ll do
his best to respond in a few business days. AutoCloud is hiring on all fronts,
but in particular, we’re interested in full-stack and infrastructure-curious
engineers that want to build something amazing that solves a real enterprise
problem.

#### What is the career progression framework? How are promotions and performance reviews managed?

We’re in the earliest stages of developing a structure to support clear career
paths. Our current team composition is only senior engineering and design talent
that we anticipate will become the senior leadership of the company as we scale
to 50 then 100+ employees.

Obviously joining a sub-twenty-person venture-backed team is high-risk/high
reward, The current team is working tirelessly to make this a huge success and
we’re conscious of the fact that a big part of this is to create opportunities
that exceed the status quo at FAANG companies where any of our engineers could
get a job tomorrow if they were inclined.

{{< div--close >}}
