---
title: "Snaplet"
date: 2022-05-11T12:00:00+00:00
draft: true
summary: Safely code against actual data.
metaTitle: Working at Snaplet - Console profile
metaDescription:
  What is it like to work at Snaplet?  Console profile behind the scenes at
  Snaplet - safely code against actual data.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.snaplet.dev.png
  URL: https://www.snaplet.dev
  jobsURL: https://www.snaplet.dev/careers
  location: Remote
  description: "Safely code against actual data."
  product:
    name: "Snaplet"
    description:
      "At Snaplet, we provide realistic database snapshots for development and 
      testing. Our mission is to be the first tool that developers think about 
      when dealing with data at scale. We’re a remote only organization and we 
      aim to create a space where you can achieve a harmonious integration of 
      work and life. We want you to do the most challenging, exciting, 
      meaningful work of your career at Snaplet."
  techStack:
    - Typescript
    - RedwoodJS
    - Prisma
  meta:
    - label: "Founded"
      value: 2021
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/peterpistorius/"
            text: "Peter Pistorius"
            iconRight: "external-link"
    - label: "Employees"
      value: "2-10"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/_snaplet"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/snapletinc/about/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Developer Tools - Testing"
  topCategory: "Developer Tools"
  subCategory: "Testing"
  filterTaxonomy: "developer-tools, saas, typescript"
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Snaplet{{</ rich-title-3 >}}

#### How are the teams structured?

We have a small team, small enough to not be siloed. The team structure is very
flat, and the engineers report to me (Peter). There are three team members who
assist with non-engineering work like marketing, operations, legal, and finance.
We have multiple interesting parts in our product and because we're a startup,
everyone wears many hats. It takes time to build up the experience, especially
in a database product, but no one is forced into a particular role.

#### What tools do engineers use?

* **Design:** Figma
* **Source Control:** GitHub
* **Build:** GitHub actions
* **Docs:** MDX with Docusaurus
* **Communication:** Discord and Loom
* **Monitoring and Alerting:** Sentry and Papertrail
* **Serverless infrastructure:** AWS Fargate

#### Can developers pick their own tools?

Yes. The only requirement that we have is that people use a Unix based operating
system, so macOS or Linux. If you introduce something to the team and we think
it's a good idea, we'll adopt it.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

We work in a weekly cycle where every Monday we have a meeting with the
engineering team and we all show off the feature that we were working on so that
we can get feedback from the rest of the team before shipping it. 

We frequently present demonstrations of our product before we release them to
collect feedback and validate that what we're building makes sense. For product
features, we have a wishlist of items that are described via our roadmap then we
split them off among various people. So various people on a team will take a
feature from end to end. 

We fix bugs as they occur, as quickly as possible. And when we encounter tech
debt, we pay that off when it becomes painful. There’s always a balance because
we don’t always know the full situation until we have to work with that code
again, which is often the best time to pay it off!

#### How does code get reviewed, merged, and deployed?

It's a fairly straightforward process. We ask people to be considerate of other
people’s time and to review their own pull request before they ask other people
to do so. When a pull request is significantly complicated, we try to create a
Loom video that is associated with the pull request which describes the
narrative.

As a reviewer, videos are helpful because you have to try and understand what
the intention of a pull request is when the story is completely broken apart. So
we include a Loom video where you can quickly just tell someone why you did
things, what was complicated, and what the outcome was. Having a narrative
around a feature is super helpful; as a team, we're getting into practice for
doing this and it's feeling good. You can conclude the narrative, which works
really well for us.

#### What is the QA process?

We rely heavily on testing, specifically end-to-end tests. We have tests for
both our CLI and our web product. I think testing is probably one of our
superpowers that allows us to ship with confidence and refactor with confidence.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

One of the most interesting challenges that we recently tackled was when we
introduced the ability to subset a database, which is when you take a large
database and reduce it down by some sort of requirement. For example you might
say, "I want 1% of my users." In order to do that, you have to understand the
relationships and the dependencies of the relationships in your database. You
have to sort them in a way that they don't introduce broken relationships. This
was fairly complicated, but now that we understand it, it's kind of fascinating.
You use topological sorts and it's all doable. Everything that feels impossible
is doable if you just approach it from first principles and then work through
it.

#### How does on-call work?

We're still in open beta so we don't have SLAs, but our product is reliable, and
it doesn't go down all that often. We don't have a formal process for that yet.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process at Snaplet
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We think it's kind of strange that companies have an interview testing process
that doesn't actually reflect reality. We try to make our application process
mirror an ordinary workday at Snaplet. The process starts with an introductory
email followed by a 30 minute conversation. If we feel confident that you have
the skills that we're looking for, then we move into a technical screening
stage. 

For technical screening, we invite you to a GitHub repo which has three problems
in it that are reflective of an ordinary day at Snaplet. You create PRs for each
problem, it shouldn't take more than an hour to do the problem solving.
Afterwards, we jump on a call and we speak about how you approached everything
and solved the problems. If we like the work, we do a brief culture fit
interview with some other members of the team, and if the references on your
resume check out, we make an offer. Our typical time to hire from the first
email to an offer extended is around two weeks.

#### What is the career progression framework? How are promotions and performance reviews managed?

We don't have a formalized career progression framework in place yet. We're
taking a lot of inspiration in building out that framework from who we perceive
to be leaders in the field, like GitLab, Khan Academy, and some others.

However, what we do have is a standardized and benchmarked set of job levels for
the engineering team with a track for individual contributors and for managers.
Pay and equity across all of our various levels is banded and benchmarked
globally as well. And we're in the process of building out a framework for
career progression that we will be able to share with the team in a way that'll
be very easy to understand, very fair, very transparent, very competitive.

{{< div--close >}}
