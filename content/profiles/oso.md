---
title: "Oso"
date: 2022-04-04T12:00:00+00:00
draft: false
summary: Batteries-included authorization.
metaTitle: Oso - Console devtools jobs profile
metaDescription:
  Console profile of Oso - batteries-included authorization.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.osohq.com.png
  URL: https://www.osohq.com
  jobsURL: https://www.osohq.com/company/jobs
  location: NYC or Remote
  description: Batteries-included authorization.
  images:
    - url: /img/profiles/oso-profile-1.png
    - url: /img/profiles/oso-profile-2.png
    - url: /img/profiles/oso-profile-3.png
  product:
    name: "Oso"
    description:
      "At Oso, we're building the first batteries-included system for authorization so developers don't have to roll it on their own anymore. We're building slick APIs so they can get started quickly, and a fully-fledged policy language under the hood so they can customize their system however they need. We don't rely on product managers to spec out projects–the engineers on the team take big problems, experiment with solutions and ship a superhuman experience for our users."
  techStack:
    - Rust
  meta:
    - label: "Founded"
      value: 2019
    - label: "CEO"
      value:
        links:
          - href: "https://twitter.com/grahamneray"
            text: "Graham Neray"
            iconRight: "external-link"
    - label: "Employees"
      value: "10-20"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Customers"
      value:
        - "Fiddler, Intercom, Wayfair, Visa, Codecademy "
        - links:
            - href: "https://www.osohq.com/company/jobs"
              text: "See all"
              iconRight: "external-link"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/osoHQ"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/13056430/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  customerCaseStudies:
    - client: "Fiddler"
      text:
        "dopted Oso as a way to retrofit access control to their existing product. The documentation, examples and the support provided on the slack channels is just plain awesome."
    - client: "Wayfair"
      text:
        "spent that first week implementing and quickly had our design implemented using the Oso framework. This let us write an authorization policy in their declarative language, Polar."
  type: "Open source"
  category: "Developer Tools - Authorization"
  topCategory: "Developer Tools"
  subCategory: "Authorization"
  filterTaxonomy: "developer-tools, open-source, rust"
interview: oso-sam-scott
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="development-profile" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Development profile
{{</ rich-title-3 >}}

#### How are the teams structured?

2- or 3-person teams organized temporarily around high-level goals.

#### What tools do engineers use?

- Git for version control
- **Development:** GitHub (Actions for CI)
- **Issue tracking:** Linear
- **Diagrams:** Excalidraw
- **Communication:** Slack
- **Documentation:** Hugo
- **Infrastructure:** Fly.io, AWS
- **Monitoring:** Honeycomb

#### Can developers pick their own tools?

Yes! 🌈

#### How does the development process work? What's the process for working through bugs, features and tech debt?

- Weekly cycles
- Everyone participates in product work: new concept ideation, project
  definition, prioritization thinking, etc.
- Projects are prioritized around blend of
  - Net new capabilities/features/functionality, while
  - Maintaining a bound on identified technical debt;
  - With an eye toward customer acquisition

#### How does code get reviewed, merged, and deployed?

- Post in Slack when code is ready for review
- Common to do a live walkthrough for larger pieces of work
- Code can only be merged to main when it has at least one approval

#### What is the QA process?

- Tests run on every pull request. Tests must be passing in order to merge.
- Additional tests run on merge to main (e.g. the vast majority of the release
  process if tested on merging to main, failures are notified in Slack).

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

Some examples of things we’ve worked on are:

- We designed new built-in authorization primitives for our declarative policy
  language,
  [Polar](https://docs.osohq.com/python/reference/polar/polar-syntax.html),
  taking inspiration from interfaces and traits in Rust, and function prototypes
  in C.
- We built an interactive
  [debugger](https://docs.osohq.com/python/reference/tooling/debugger.html) and
  [tracing](https://docs.osohq.com/python/reference/tooling/tracing.html) to
  help users understand their policies and improve our internal development
  process.
- We tracked down [a memory leak in our Go
  library](https://github.com/osohq/oso/issues/944) by looking at a user’s
  memory usage charts from Datadog.

#### How does on-call work?

Weekly rotation where you’re responsible for community Slack, customer chat, and
Github issues.

#### How does the application process work? What are the stages and what is the timeline?

Our interview process is posted on [our career’s page
FAQ](https://www.osohq.com/company/jobs), which includes detailed information on
the specific questions we ask.

Stages: Initial screening, debugging exercise, onsite interview, references,
offer Timeline: We work with each applicant’s timeline and needs as it relates
to their readiness to make a decision.

We can move as fast as a few days and as slow as a month, but we prefer to move
as fast as possible 😊

#### What is the career progression framework? How are promotions and performance reviews managed?

Currently, career progression is tracked and scaled individually. As we continue
to grow the team, we know that this won’t be possible moving forward, so we are
working to build a program that is suitable for all team members.

{{< div--close >}}
