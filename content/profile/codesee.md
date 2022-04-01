---
title: "CodeSee"
date: 2022-04-04T12:00:00+00:00
draft: true
summary: Visualize your code.
metaTitle: CodeSee - Console devtools jobs profile
metaDescription:
  Console profile of CodeSee - visualize your code.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.codesee.io.png
  URL: https://codesee.io
  jobsURL: https://jobs.lever.co/codesee
  location: San Francisco, Remote (North America)
  description: "Visualize your code."
  images:
    - url: /img/profiles/codesee-profile-1.png
    - url: /img/profiles/codesee-profile-2.png
    - url: /img/profiles/codesee-profile-3.png
  product:
    name: "CodeSee Maps"
    description:
      "CodeSee is a developer tool that visualizes how your code works for codebase onboarding, planning, and code reviews."
  techStack:
    - Typescript
    - Node
    - AWS
    - Postgres
  meta:
    - label: "Founded"
      value: 2019
    - label: "CEO"
      value:
        links:
          - href: "https://twitter.com/ShaneaLeven"
            text: "Shanea Leven"
            iconRight: "external-link"
    - label: "Employees"
      value: "13"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/Codeseeio"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/codesee"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Developer Tools - Code mapping"
  topCategory: "Developer Tools"
  subCategory: "Code mapping"
  filterTaxonomy: "developer-tools, saas, typescript, node"
interview: codesee-shanea-leven
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="development-profile" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Development profile
{{</ rich-title-3 >}}

#### How are the teams structured?

Today, we have one engineering team made up of a combination of principal
frontend, backend, and full stack engineers. As we continue to hire, will we
break up into 2+ teams, with each (as much as possible) focused on their own
areas of ownership.

#### What tools do engineers use?

- **Design:** Figma
- **Source control:** Git & GitHub
- **Issue tracking:** Linear
- **Documentation:** Coda
- **Incident management:** DataDog, PagerDuty
- **Internal communication:** Slack
- **External communication:** Discord, Slack, blog, intercom
- **Builds & deploys:** GitHub Actions
- **Error tracking:** Sentry
- **Monitoring, traces, logging:** Datadog

#### Can developers pick their own tools?

We have a general policy of developers picking the tools that they work with on
a daily basis e.g. their code editor, and we pay for team licenses for common
tools like IDEs. We try to standardize on the above list in production, but are
open to projects trying new tools alongside them. There have been several cases
where a teammate has adopted something themselves which has then been rolled out
across the company.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

We talk to our users with user interviews, feedback sessions and demos. The
backlog is balanced between requests from users, future vision stuff,
infrastructure, and tech debt. We work on weekly sprints with design and product
being about 2-3 weeks ahead so things move very quickly. The engineering team
lead runs sprint planning and breaks down the work into tickets alongside the
engineers. As the project nears completion, product reviews and devrel marketing
(if needed) become involved. The product manager has the final say on go/no go
but we are constantly deploying small incremental changes. This results in 1-5
deploys a day.

#### How does code get reviewed, merged, and deployed?

All development is done in branches against our monorepo. We encourage small
PRs, with regular rebasing from main. Some of the team do pair programming, but
it is not mandatory. We do have a very collaborative development team, and work
hard to prevent people being siloed. When the engineer is happy with their
branch, they open a pull request. CI runs. At least one other engineer will
review the code and then it will be merged into main. We have good test coverage
and automated builds. With feature flags we can roll new code out gradually to
our cloud users. We do single click push button deploys meaning we deploy
multiple times a day.

#### What is the QA process?

We try to write good automated tests. The Eng and product team test new features
and we do group bug bashes!

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We built real-time collaborative editing of our diagrams (think Figma) by
developing a websocket-based server that uses CRDTs and a zero-downtime
deployment using our own leader election implementation. This is a strong
foundation that we will be improving and building on top of for some time.

We are visualizing code and code changes in ways that have never been done
before, and making those visualizations interactive. This requires innovation
and iteration from everyone from the designer to the frontend engineers.

We are parsing code in a (growing) number of different languages in order to do
code analysis, and existing tools rarely do precisely what we want. This creates
challenges around tweaking existing libraries (and contributing back) or
building new ones. Then testing and deploying those polyglot libraries as part
of our workers.

#### How does on-call work?

Teams are incentivized to minimize in-production errors and alerts because they
are the ones on-call for their own systems. Teams are right-sized to ensure
there is always coverage, with slack for holidays, illness, and taking time off
the next day if you are paged out of hours. Everyone should expect to do a 2
week on-call rotation every 8 weeks (one week you are the primary and the second
week you are the secondary). Any big incidents we pull in other members of the
team to support one another.

#### How does the application process work? What are the stages and what is the timeline?

We have a multi-step process:

1. Initial phone/zoom screen with our Head of People.
2. 2 hour - pairing session on a coding problem. You can use any environment you
   want, any language you want. You can look things up and use libraries. This
   discussion is really meant to as closely as possible simulate a real day on
   the job.
3. 2 hour - System Design discussion. We’ll talk through a project that you’ve
   spent a lot of time on, your methods and thought processes.
4. 2 Hour - Top Grade: A top grade is an interview to understand you, your
   motivations and how you would be as an employee. We all are human beings.
5. Offer.

We aim to get through the whole process within 2 weeks, but can go
much faster if necessary and the candidate's schedule permits.

{{< div--close >}}
