---
title: "daily.dev"
date: 2022-05-11T12:00:00+00:00
draft: false
summary: All the developer news in one place.
metaTitle: Working at daily.dev - Console profile
metaDescription:
  What is it like to work at daily.dev?  Console profile behind the scenes at
  daily.dev - all the developer news in one place.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/daily.dev.jpg
  URL: https://daily.dev
  jobsURL: https://it057218.typeform.com/apply?typeform-source=console.dev
  location: Remote
  description: "All the developer news in one place."
  images:
    - url: /img/profiles/dailydev-profile-1.jpg
    - url: /img/profiles/dailydev-profile-2.jpg
    - url: /img/profiles/dailydev-profile-3.jpg
  product:
    name: "daily.dev"
    description:
      "daily.dev is building a platform where developers can grow together. We 
      are a fully remote company and we work on a non-linear working schedule; 
      this means that you can schedule your day and align it to your personal 
      life. And also every feature we ship is used by more 100k developers."
  techStack:
    - Typescript
    - JS
    - Go
  meta:
    - label: "Founded"
      value: 2020
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/nimrodkramer/"
            text: "Nimrod Kramer"
            iconRight: "external-link"
    - label: "Employees"
      value: "12"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/dailydotdev"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/dailydotdev/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Developer Tools - Misc"
  topCategory: "Developer Tools"
  subCategory: "Misc"
  filterTaxonomy: "developer-tools, saas, typescript, node"
interview: dailydev-ido-shamun
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at daily.dev{{</ rich-title-3 >}}

#### How are the teams structured?

We create standalone teams that can work independently of each other. Right now
we have two teams in the development group; the web team and the platform team.
The web team is in charge of building the web application, the extension, and
doing API work. This team mainly focuses on getting the data from wherever they
need inside the architecture to the application itself. The platform team is in
charge of the deeper parts of the architecture like data engineering,
algorithms, microservices, as well as cross-company services.

#### What tools do engineers use?

* **Project management:** Confluence
* **Issue tracking:** Jira
* **Version control:** GitHub
* **Cloud provider:** Google Cloud Platform
* **Deployment:** CircleCI and Pulumi
* **Monitoring and logging:** Google Cloud's operations suite

#### Can developers pick their own tools?

Yes, so long as it speeds up development and can help us create a better
experience. This is one of the advantages of being a startup and having a small
team - we can be flexible in adopting new tools.

In addition, all team members get $3,000 for setting up a work environment at
home and we also donate $600 per year to an open source project of your choice.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

We are in the middle of redefining our development process. This has previously
been a straightforward Kanban approach where developers pick off a backlog.
We’re moving to Product Manager directed development with all the prioritization
in Jira and developing in two-week cycles. It’s somewhere between Scrum and
Kanban.

#### How does code get reviewed, merged, and deployed?

When the developer creates a pull request, two reviewers review their code.
Depending on the request, it can take a few days, but we try to work quickly. We
collect all the feedback, ensure best practices, follow the style guide and then
we do squash and merge.

#### What is the QA process?

We have unit tests and integration tests. It's enough to be certain that it
works and that in the future we will not break it, but it's not 100% coverage at
this stage. Every developer is in charge of testing their work.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We are working on a new browser extension feature which will show the daily.dev
metadata in a sidebar alongside every page you visit - comments, bookmarks, even
a tl;dr of the article. The challenge there was to not impact the performance of
the page. We see ourselves as guests on the page, so we don't want to hijack and
impact the behavior. We had to reduce the number of requests whenever a page
loads and make sure everything stays out the way. This was a very interesting
challenge.

#### How does on-call work?

We don't have an on-call policy yet. Luckily, the system is pretty stable at
this point. We have alerts, but they’re routed to the CTO. This will be changing
over time as we grow and services become more complex.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process at daily.dev
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We are not available for applications at all times, but once we open a position,
we ask applicants for their background and other relevant details. Usually, we
try to do the entire process as fast as we can. 

The process starts with a personal interview, then technical interview (system
design for platform team or React task for web engineers). Then we have an
interview with the CEO. And that's it. We send the offer, and if everything goes
well, we sign and start working together!

{{< div--close >}}
