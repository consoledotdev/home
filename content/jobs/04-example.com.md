---
title: "Example.com 4"
date: 2022-03-07T11:40:04+01:00
draft: false
summary: Next-gen open source observability software for cloud environments.
metaDescription:
  Next-gen open source observability software for cloud environments.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.example.com.png
  URL: https://www.example.com
  jobsURL: https://example.com/careers
  location: New York
  description:
    "Example is building the next generation of open source observability
    software for cloud-native environments. Keep track of code-level performance
    and monitor production incidents."
  images:
    - url: /img/jobs/example.com-01.jpg
    - url: /img/jobs/example.com-02.jpg
    - url: /img/jobs/example.com-03.jpg
  product:
    name: "Example"
    description:
      "Example is an open source, cloud-native observability platform that
      allows developers to monitor the performance of their code from dev to
      production. Integrated using our language-SDKs and connected either to our
      cloud service or a self-hosted container deployment, Example provides
      traces, profiling and logging for your entire tech stack. Metrics, alerts
      and dashboards are available through a web UI, API and CLI, so you can
      track down code bottlenecks, debug customer errors and monitor the
      reliability of your application."
  techStack:
    - Go
    - Elm
    - Postgres
    - AWS
  meta:
    - label: "Founded"
      value: 2009
    - label: "CEO"
      value:
        links:
          - href: "http://janeappleseed.com"
            text: "Jane Appleseed"
            iconRight: "external-link"
    - label: "Employees"
      value: "100-250"
    - label: "Stage"
      value: "Late-stage startup"
    - label: "Customers"
      value:
        - "Apple, Google, Microsoft, Amazon, Tesla, Samsung, Toyota, Intel., "
        - links:
            - href: "https://example.com/all-customers"
              text: "Yes"
              iconRight: "external-link"
    - label: "Social"
      value:
        links:
          - href: "#"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "#"
            text: "LinkedIn"
            iconLeft: "linkedin"
  customerCaseStudies:
    - client: "Tesla"
      text:
        "is using Example to monitor their EV telemetry platform. Hosted on AWS,
        Tesla vehicles report large volumes of performance data which helps with
        performance improvements and debugging issues reported by customers.
        Example was integrated into their C++ code using our SDK which reports
        sample code traces back to the Tesla-controlled infrastructure. Privacy
        and security are particularly important for Tesla, which is why they
        opted to deploy our Enterprise Edition to their own cloud environment."
    - client: "Samsung"
      text:
        "engineers deployed Example to one of their consumer-facing applications
        to help debug a specific error that was surfacing in particular edge
        cases. They were able to integrate the Java SDK into their mobile
        application within just a few hours, making use of the infinite
        scalability of our cloud service."
  type: "Other"
  category: "Security - Vulnerability management"
  topCategory: "Security"
  subCategory: "Vulnerability management"
  filterTaxonomy: "security, other, go, elm, postgres, aws"
interview: /
podcast:
review:
---

{{< rich-title-3 icon="checklist" id="key-features" >}} Development profile
{{</ rich-title-3 >}}

#### How are the teams structured?

We have several teams which each have responsibility for their own code from dev
to production. A team can be as small as 3 people, but for production code we
aim to have 6-8 within each team across different roles. A team acts as an
autonomous group and is able to plan features through to deploying code by
themselves, directed by the overall product roadmap.

#### What tools do engineers use?

Design: Figma Source control: Git & GitHub Issue tracking: GitHub Issues
Documentation: Docusaurus Incident management: DataDog Incidents Internal
communication: Slack External communication: GitHub Discussions, Discord Builds:
GitHub Actions Deploys: GitHub Actions Error tracking: Sentry Monitoring,
traces, logging: Example itself!

#### Can developers pick their own tools?

We have a general policy of developers picking the tools that they work with on
a daily basis e.g. their code editor, and we pay for team licenses for common
tools like JetBrains. We try to standardize on the above list in production, but
are open to projects trying new tools alongside them. There have been several
cases where a team has adopted something themselves which has then been rolled
out across the company.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

We make use of GitHub Discussions to keep the community involved with our
development plans. Features get upvoted on the public discussion board and we
run regular prioritization meetings that anyone in the company can join. This
allows input from all teams to help us understand things like tech debt,
annoying alerts, marketing launches, partner requests and feedback from our
support team.

We spec out features 3-6 months ahead of their planned release. Product managers
then form an engineering team around the project, usually involving frontend,
backend, design and devops. Our dedicated security team offers advice on
architecture if necessary. Engineers spec out the individual work tickets and
are responsible for “how” and the implementation. As the project nears
completion, QA and marketing (if needed) become involved. The product manager
has the final say on go/no go, and then the team is empowered to deploy to
production when they are happy with the release.

#### How does code get reviewed, merged, and deployed?

All development is done in branches against our monorepo. Our tooling makes it
easy for every engineer to have a full copy of the product with test data. We
encourage small commits, with regular rebasing from main. Some of the team do
pair programming, but it is not mandatory.

When the engineer is happy with their branch, they open a pull request. At least
one other engineer will review the code and then it will be merged into main. We
have good test coverage and automated builds. Feature flags and canary deploys
mean we can roll new code out gradually to our cloud users. We do packaged
releases for our enterprise edition every 3 months, with a hotfix route
available for any important bug fixes or security patches.

#### What is the QA process?

We have a QA team that is responsible for maintaining a robust set of tooling
for our developers. We have a manual test plan for some tricky tasks like
enterprise edition upgrades, but we try to automate as much as possible. This
involves tracking unit test coverage, integration testing of critical paths and
in-production metrics and SLOs. Although we have a monorepo, we also use error
budgets for critical components.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

The most interesting challenge is the volume of data we collect in our cloud
version - over 10TB of ingress per day. This means that code optimization is an
area of focus because it has a direct impact on our provisioned resources (and
hence the cloud bill!), but also means we require robust test, deploy and
rollback procedures. Our queuing system processes over 250k messages/sec, and we
have strict processing time SLAs.

These conditions have resulted in some interesting opportunities to optimize hot
code paths. Although we write most of our code in Go, we have been able to make
some performance patches to the Linux kernel and have even worked alongside AWS
to write code optimized for their Graviton2 chips.

#### How does on-call work?

Teams are incentivized to minimize in-production errors and alerts because they
are the ones on-call for their own systems. Teams are right-sized to ensure
there is always coverage, with slack for holidays, illness, and taking time off
the next day if you are paged out of hours. Everyone should expect to do a 1
week on-call rotation every 6-8 weeks and we report out of hours incidents to
senior management on a monthly basis, with time allocated as part of development
cycles to fix any tech debt or issues waking people up.

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We have a multi-step process:

1. Initial phone screen with senior management.
2. Take-home engineering task. This will be a self-contained project similar to
   something you would work on here. It is set up to take around 3-4 hours and
   we will pay you for your time.
3. Engineering discussion. We’ll talk through your code and how the project
   went.
4. Offer. We’ll fly you out to our office to meet the team.

We aim to get through the whole process within 2 weeks, but there is no deadline
for the engineering task.

#### What is the career progression framework? How are promotions and performance reviews managed?

We have formal levels with public salary bands. Managers have a bonus discretion
for their team and there is also an independent company-wide bonus scheme based
on company metrics, which we share on a quarterly basis. We do formal annual
reviews which are tied to goals that your manager discusses with you at each one
to one (monthly).
