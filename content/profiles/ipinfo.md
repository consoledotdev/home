---
title: "IPinfo"
date: 2022-11-14T12:00:00+00:00
draft: false
summary: IP address data API.
metaTitle: Working at IPinfo - Console profile
metaDescription:
  What is it like to work at IPinfo? Console profile behind the scenes at IPinfo -
  realtime as a service.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/ipinfo.io.png
  URL: https://ipinfo.io
  jobsURL: https://ipinfo.io/jobs
  description: IP address data API.
  product:
    name: "IPinfo"
    description:
      "IPinfo is a leading provider of IP address data. Our API handles over 
      40 billion requests a month, and we also license our data for use in many 
      products and services you might have used. We started as a side project 
      back in 2013, offering a free geolocation API, and we've since 
      bootstrapped ourselves to a profitable business with a global team of 17, 
      and grown our data offerings to include geolocation, IP to company, 
      carrier detection, and VPN detection. Our customers include T-Mobile, 
      Nike, DataDog, DemandBase, Clearbit, and many more."
  techStack:
    - NodeJS
    - React
    - Go
    - Python
  meta:
    - label: "Founded"
      value: 2013
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/company/ipinfo/"
            text: "Ben Downling"
            iconRight: "external-link"
    - label: "Employees"
      value: "<50"
    - label: "Stage"
      value: "Mature business"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/ipinfoio"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/ipinfo/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Developer Tools - API"
  topCategory: "Developer Tools"
  subCategory: "API"
  filterTaxonomy: "developer-tools, saas, node, python, go"
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at IPinfo{{</ rich-title-3 >}}

#### How are the teams structured?

There are four different engineering teams. The web team focuses on the website
and the backend team focuses on the billing system, the API and its underlying
implementation. There is also a devops team under the backend team.

The data team manages all the data pipelines and sources - they oversee how we
get data and how we store it. 

Finally, the integrations team focuses on a lot of our open source stuff. You
can find our SDKs, the CLI, and some third party plugins on our website - all
done by the integrations team.

#### What tools do engineers use?

- **Infrastructure:** Google Kubernetes Engine
- **Logging and Monitoring:** Google Cloud Monitoring
- **Design:** Figma
- **Planning and coordination:** Notion and Linear
- **Version Control:** Git and GitHub

#### Can developers pick their own tools?

For something trivial like code editors, developers can pick whatever they like.
For other tools, they should confer with the rest of the team. If there's a need
for a tool for some particular use case, we will consider it. People are
encouraged to go and discover these things, figure it out, then present their
reasoning and logic for why that's the best thing to use. We provide freedom,
but the decision to use it has to be justified.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

The product manager decides the general direction. Any tech debt that needs to
be worked upon is handled by having one week cool off period within a four work
week cycle. In that one week cool down period, we focus on tech debt and any
other minor issues that come up.

#### How does code get reviewed, merged, and deployed?

After tests, someone will review the code to see if it hits the code quality
requirements. We don't have super stringent requirements, but we do use a lot of
tooling to help us automate those decisions.

We use GitHub pull requests - once the reviewer, whoever it might be, reviews it
and approves it, it gets merged into the main branch. We deploy things to
production in an automated fashion every day.

#### What is the QA process?

Currently, there is no formal process. We rely on engineers to test their code
while writing it and run the automated tests before every pull request is
merged. We have an expectation that if there's anything new being developed,
you're going to either write a test or manually test it yourself. 

We have some automated unit tests, as well as some end-to-end tests in our
review process. There's also a staging environment where we test any changes
before it gets to production.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

The primary challenge we've faced this year is converting our frontend from
rendering via a server-side templating engine in NodeJS, to React, and then
later adding NextJS in the middle for optimizations. The biggest challenge was
simply that we had a very large frontend app, with a sophisticated dashboard,
many marketing pages, and a lot of stakeholders that needed to ensure their
needs remained met during the transition.

Another challenge we faced was when we were getting attacked by some DDoS
adversaries. They were trying to DDoS our website by spiking the request count
to millions of requests per second. We had to work hard to build a strategy that
would fend off the attacks. We found some interesting ways to avoid these insane
request spikes by just making our system more scalable and react very fast to
these changes.

#### How does on-call work?

Currently, we don't have an on call process because it's a very small team.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process at IPinfo
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

The application process is straightforward and should not take more than two
weeks for most candidates. The stages of application process are as follows:

- **Initial technical screen (30-45 min):** Candidate is evaluated on their
  technical knowledge by a project manager This stage includes an introduction
  followed by basic technical questions.
- **Personality interview:** A short call to check if the candidate is a good
  fit for the role and team.
- **Technical project:** A short take home test for candidates to demonstrate
  their technical skills. 
- **Interview with CEO:** A general interview to discuss your role and
  responsibilities. 

#### What is the career progression framework? How are promotions and performance reviews managed?

The team has been very small for a very long time, and now it's suddenly
growing. We don't have a formal performance review process in place, yet. At
this stage, people are almost the founding members of the team - everyone is
really important. We're assuming everyone can wear a lot of hats and manage
themselves.

{{< div--close >}}
