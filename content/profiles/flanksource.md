---
title: "Flanksource"
date: 2023-01-03T12:00:00+00:00
draft: false
summary: Mission Control for Enterprises.
metaTitle: Working at Flanksource - Console profile
metaDescription:
  What is it like to work at Flanksource? Console profile behind the scenes at 
  Flanksource - mission Control for Enterprises.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.flanksource.com.png
  URL: https://www.flanksource.com
  jobsURL: https://www.flanksource.com/careers
  description: Mission Control for Enterprises
  product:
    name: "Flanksource"
    description:
      "A platform providing multi-dimensional system visibility with integrated 
      incident lifecycle automation, empowering diverse teams, executives and 
      vendors to coordinate and communicate better."
  techStack:
    - Go
    - React
    - Kubernetes
    - Postgres
  meta:
    - label: "Founded"
      value: 2020
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/moshe-immerman/"
            text: "Moshe Immerman"
            iconRight: "external-link"
    - label: "Employees"
      value: "<15"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://www.linkedin.com/company/flanksource/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "Open Source"
  category: "DevOps - Platform"
  topCategory: "DevOps"
  subCategory: "Platform"
  filterTaxonomy: "devops, open-source, react, go"
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Flanksource{{</ rich-title-3 >}}

#### How are the teams structured?

We have a flat hierarchy at the moment, although we are quite small – we're 
currently only 10. As we grow a little bit larger, we'll spread out into more 
focused teams but the goal will be to always maintain a flat hierarchy.

#### What tools do engineers use?

- **Source Control:** GitHub
- **Project Management:** GitHub Projects
- **Monitoring:** Prometheus
- **Frontend Components Development:** Storybook
- **Deployment:** Netlify
- **Chat:** Slack

#### Can developers pick their own tools?

Developers can use whatever OS or whatever tooling they want on their desktop.
From a code and a library perspective, we're not too prescriptive, as long as
you can make a logical argument to include a library that is somewhat well
maintained and has a compatible license, we will use it.

From a programming language perspective, we're pretty fixed on Golang and
React.. We have gone all in on Postgres as our database. Those are the only
things that you can't choose, but everything else is open for debate.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

We don't really separate features, bugs, or tech debt. We follow a Kanban
workflow, so we have a backlog. We put stuff at the back of the backlog and
people pick a task from the top to work upon. We'll set some directions
dictating where we want to go but that’s pretty much it. For example, if we're
working with a customer and we want to prioritize them, then we’d convey that to
the team. We also don’t ask our engineers to do time estimates for their work
#NoEstimates.

#### How does code get reviewed, merged, and deployed?

When you open a PR, we run a lot of PR based tests and integration tests. We
have linting rules set up to check everything automatically. We also have a few
mandatory tests, but if you break the other tests, you're going to be expected
to fix them at some point.

Although we encourage reviews, it's not a hard requirement. If you don't have
the time for it, it's not a hard and fast rule, but it's something that is
recommended. I'd say approximately 95% of PRs get reviewed before they are
merged.

For deployment, we have a Sandbox environment, and as soon as you merge into
main, it will be deployed into that environment.

#### What is the QA process?

The solution that we're building is not a SaaS offering at this point. It's
designed to be deployed inside customer networks. So our Sandbox environment
acts as our QA environment, and from there, we tag a specific build of that for
promotion into customer environments.

For customers, it's deployed as a Helm chart. You can pick the version of the
Helm chart that you want to run and you can override individual versions of some
of the components if you just need a hotfix or something similar. But other than
that, it's just a matter of creating a new tag for us to release an updated
version.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We use Postgres JSON support quite a lot, we decided to use it rather than
introducing a separate document data store. As a result, there's a lot of
interesting, complex JSON queries that run on Postgres. We have implemented a
new Postgres SQL variant designed for our dataset, that includes a SQL parser
and a conversion engine. 

A lot of the configurations that we use have plugin points where customers can
write custom code in several different languages. This is an interesting
challenge because we need to support everything from a common expression
language to JavaScript.

There's a lot of data manipulation that is not CRUD, we actually don’t do any
CRUD. We have PostgREST that sits in front of our database and we push most
things through that. There are a couple of SQL functions, and some graph related
work.

#### How does on-call work?

We have an on-call system, but so far it's never been activated. We have two
teams – a development team and an SRE team. Currently, the SRE team is handling
on-call. We normally run shifts where you can pick an individual shift or an
individual week, and then you get paid for the on-call time that you're on
standby. 

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process at Flanksource
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We aim to finish the entire process in three weeks but it might stretch a little bit beyond that. We divided the interview process into following stages:

- In the first stage, we normally do a screening call which is about 15 minutes
  and is focused on compatibility.
- After that, we will either do a take home assignment, or if the applicant has
  enough public code, we'll review that public code.
- In this stage, we do a 75 minute read test. In that test, we'll ask the
  candidate to walk through our code base, and trace a particular function call.
  We then ask a systems design question based on the code that was walked
  through. 
- In the last stage we check for candidate’s compatibility with our team culture
  and verify their past references.

#### What is the career progression framework? How are promotions and performance reviews managed?

We have given thought to it, but we haven't implemented it yet. We don’t have a
specific process because of the size of the team, but it is under discussion.

{{< div--close >}}
