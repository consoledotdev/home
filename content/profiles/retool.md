---
title: "Retool"
date: 2022-04-27T12:00:00+00:00
draft: false
summary: Build internal tools remarkably fast.
metaTitle: Working at Retool - Console profile
metaDescription:
  What is it like to work at Retool?  Console profile behind the scenes at
  Retool - build internal tools remarkably fast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/retool.com.jpg
  URL: https://retool.com
  jobsURL:  https://grnh.se/fafcf1fb5us
  location: Remote, NYC, SF
  description: "Build internal tools remarkably fast."
  images:
    - url: /img/profiles/retool-profile-1.jpeg
    - url: /img/profiles/retool-profile-2.png
    - url: /img/profiles/retool-profile-3.jpeg
  product:
    name: "Retool"
    description:
      "Retool’s goal is to build internal tools remarkably fast. Despite 
      software’s massive impact on our lives, software development hasn’t 
      fundamentally changed in the past two decades. At Retool, we’re thinking 
      about what comes after programming languages: coding from scratch isn’t 
      something most companies should be doing in 15 years. We’re starting with 
      internal tools but our ambitions are much larger."
  techStack:
    - Typescript
    - Node
    - Kubernetes
  meta:
    - label: "Founded"
      value: 2017
    - label: "CEO"
      value:
        links:
          - href: "https://twitter.com/dvdhsu"
            text: "David Hsu"
            iconRight: "external-link"
    - label: "Employees"
      value: "~170"
    - label: "Stage"
      value: "Series C startup"
    - label: "Customers"
      value:
        - "Doordash, Brex, Amazon, Pinterest, Coinbase, Plaid, "
        - links:
            - href: "https://retool.com/customers/"
              text: "see all"
              iconRight: "external-link"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/retool"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/tryretool/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Developer Tools - Internal tools"
  topCategory: "Developer Tools"
  subCategory: "Internal tools"
  filterTaxonomy: "developer-tools, saas, typescript, react, cplusplus"
interview: retool-snir-kodesh
podcast: s01e06-appsmith-retool
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Retool{{</ rich-title-3 >}}

#### How are the teams structured?

We structure teams to optimize for both autonomy and focus. In general, our
teams are horizontal and span a large part of our product surface area. For
example, our app building team is the entirety of the core product – from layout
to UI to debugging code to the very frameworks that Retool is built on.
Similarly, the dev toolchain team comprises all of the tooling that a Retool
builder could benefit from in the Retool environment: testing, source control,
observability, etc. We have teams for the entire product surface area, several
emerging businesses, our (internal) developer experiences, our cloud/data stack,
and more!

We expect most product engineers to span the stack, though we also have deeply
specialized folks for both the backend and frontend.

#### Tech stack

We deploy in Kubernetes, Typescript/React on the Frontend, Typescript/Node on
the backend, and Postgres at the persistence layer. Our data/observability
stacks are all modern.

#### What tools do engineers use?

GitHub, Datadog, Amplitude, BigQuery, BuildKite, Sentry, k8s, and plenty more
here. The neat thing is we can also supplement a lot of our work with Retool
dashboards and apps! For example, our OKRs/product metrics are presented in
Retool apps!

#### Can developers pick their own tools?

Absolutely. We believe in moving fast and providing a lot of autonomy to our
team. Especially if something can be tested locally before rolling out, we’ll
embrace it. As an example, our CI recently went through a refactor when one of
our engineers explored several options before landing on BuildKite.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

- We support both cloud releases and on-prem (which itself is managed through
  our enterprise sales team and our efficient [self-hosted
  path](https://retool.com/self-hosted/)) variants.
- On cloud, we’re a modern CI/CD team – we cut our build daily and deploy
  same-day through staging and into production.
- For on-prem, our releases are batched into stable builds and released via
  those batches.
- With respect to how we work through features vs debt, have a fairly consistent
  portfolio approach to taking on work and like to pay down debt through the
  lens of feature-level work and company impact. In doing so, we can maintain a
  prioritization framework between the two.
- We plan quarterly, and teams locally plan leading up to that. We love getting
  everyone involved for planning, especially since we believe domain expertise
  is established by all members of our team.

#### How does code get reviewed, merged, and deployed?

- We have a fairly standard peer review process – code needs to be signed off by
  one peer on the team, though we have escape hatches for emergency deploys,
  hotfixes, etc. 
- Engineers are able to merge their own PRs directly into the main branch, and
  code is taken out daily through a centralized process. That said, there’s
  always the ability to deploy more as necessary.

#### What is the QA process?

We rely heavily on automation and tests to ensure code is robust and correct. We
currently don’t have a QA org, somewhat for deliberate reasons – we don’t want
to diffuse the responsibility and want SWEs accountable to the quality of their
work. This also encourages the right balance of automation and coverage.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

Building a real-time app development environment and it’s natural extensions,
for starters :) How do we support multiple concurrent users? How do we version
control Retool apps and help our customers deploy them across environments? How
do we support deep native integration to third party services (data warehouses,
datastores, custom APIs, etc)? The surface area that powers Retool today is so
vast, and we’re also innovating in adjacent areas!

The thing that’s most exciting about Retool is how much of a platform it is –
just permuting components + resources + code + Retool versions by our customer
leads to an unbounded set of possibilities. That’s fundamentally what allows our
customers to build anything with the product. By extension, supporting it across
all the permutations as we deploy at warp speed is a challenging
infra/correctness problem.

There’s a lot more here – from building a best-in-class layout and drag-n-drop
engine, running untrusted code safely, the tension between product
extensibility/power and performance, and making Retool even more accessible and
powerful.

#### How does on-call work?

We have multiple on-call rotations, mapping mostly to our product teams.
Engineers go on-call once every couple of months, and we pair primary rotations
with secondary support.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}}Hiring process at Retool
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

Once you [apply through our website](https://retool.com/careers/), we will
review your application and move to our multi-step interview process below:

1. **Recruiter screen:** this interview is an opportunity to chat with one of
   our recruiters about your background and what you are looking for in your
   next role. It is also a chance to ask questions about our process and the
   company.
2. **Phone screen:** during the technical phone screen you’ll be presented with
   a problem that you'll solve over screen share. This interview is meant to
   highlight how you think through problems, communicate your thoughts, and
   design algorithms.
3. **Onsite Interview:** you’ll meet with 4-5 engineers during a round of
   virtual onsite interviews. Each interviewer will have a distinct focus area
   covering topics such as general programming and product + systems design. 
4. **Timeline:** if all goes well post onsite, we’ll move straight to an offer.
   The overall interview process (pending candidate availability) should take no
   more than 2-3 weeks.

#### What is the career progression framework? How are promotions and performance reviews managed?

We have internal employee levels that are tied to certain expectations so
employees have a clear understanding of what success looks like in your role. We
have review cycles twice a year and pending on performance relative to the
expectations of an employee's level, they will be eligible for a compensation
adjustment.

{{< div--close >}}
