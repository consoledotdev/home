---
title: "Primer"
date: 2022-05-30T12:00:00+00:00
draft: false
summary: Automation platform for payments and commerce.
metaTitle: Working at Primer - Console profile
metaDescription:
  What is it like to work at Primer?  Console profile behind the scenes at
  Primer - automation platform for payments and commerce.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/primer.io.jpg
  URL: https://primer.io
  jobsURL: https://primer.io/careers
  location: Remote
  description: "Automation platform for payments and commerce."
  product:
    name: "Primer"
    description:
      "Primer is an automation platform for payments. It offers unified checkout 
      and payments integration which lets merchants consolidate their payments 
      stack, plus add APIs and tools from across the web to build dynamic 
      end-to-end payment flows. Primer was founded by former PayPal employees. 
      Currently it has a remote-first team of 160 members in over 25 countries."
  techStack:
    - Python
    - React
    - Kafka
  meta:
    - label: "Founded"
      value: 2020
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/paul-anthony-462887129/"
            text: "Paul Anthony"
            iconRight: "external-link"
    - label: "Employees"
      value: "100-200"
    - label: "Stage"
      value: "Startup"
    - label: "Customers"
      value:
        - "Voi, Kilo.Health, Parkopedia, Freddies Flowers, "
        - links:
            - href: "https://primer.io/case-studies/"
              text: "see all"
              iconRight: "external-link"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/primer_io"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/primerapi"
            text: "LinkedIn"
            iconLeft: "linkedin"
  customerCaseStudies:
      - client: "Voi"
        text:
          "is Europe's fastest-growing eScooter hire platform. Primer has 
          allowed them to add several payment methods without building and 
          maintaining multiple integrations...helping us optimize the checkout 
          experience and expand fast to new markets."
      - client: "Kilo Health"
        text:
          "supports over 4 million customers globally, with a collection of 
          health and wellness subscriptions apps and digital products. Before a 
          centralised payments team was formed, every product manager had to 
          factor in the complexities of payments. Each product team shared 
          common challenges around risk, performance, and cost. Kilo Health 
          chose to partner with Primer to provide their unified infrastructure 
          for payments."
  type: "API"
  category: "API - Payments"
  topCategory: "API"
  subCategory: "Payments"
  filterTaxonomy: "api, saas, python, react"
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Primer{{</ rich-title-3 >}}

#### How are the teams structured?

We currently have five groups within Primer each with a dedicated product focus,
where a group can have two or more teams. Teams within the groups are structured
to optimize for autonomy and ownership. We like to think of a group as its own
startup, really emphasizing ownership in how they work. 

Teams are cross-functional - each team is structured differently depending on
the needs, but by default each team has a product manager, a team lead,
backend/front-end engineers and a designer (if needed). We try to divide
ownership between teams so that each team can own a specific set of services.
While there is shared ownership, we try to keep them to the minimum so the teams
can work as independently and move as fast as they can.

#### What tools do engineers use?

- **Design:** Figma
- **Version control:** GitLab
- **Issue tracking:** Jira
- **Documentation:** Notion
- **Design & document APIs:** Stoplight Studio
- **Monitoring and Incident management:** Datadog, incident.io, Sentry
- **Infrastructure:** GitLab CI, Terraform, AWS
- **Communication:** Slack 

#### Can developers pick their own tools?

Teams have full autonomy to choose the tools that they want. Everyone is
encouraged to suggest new tools and come up with suggestions. A lot of what
we're using right now came up from individuals, but the ultimate decision
depends on the tool itself.

If you're suggesting something that affects multiple teams, you need to get
check-in with them as well. For example, this might involve creating an RFC,
creating a rollout plan, and collaborating across teams. The key thing is
balancing being pragmatic and exploring new things.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

The development process varies depending on the team. Teams get to choose how
they work, some teams work in sprints, some teams work in kanban. One group
recently moved from sprints to kanban. The team gets to choose how they prefer
to work.

If you're working in Kanban, the product manager sets goals for the week and
then engineers choose and collaborate together on what to pick up. One other way
of working, still in Kanban, is that we work with projects called initiatives.
In this scenario we split the project and each component gets its own lead. They
have their own standups, they collaborate together with the PM and everyone gets
the chance to lead something if they wish.

Our general approach is to identify how we get to customer value as quickly as
possible. We make sure that we can test features and provide them to our
merchants, who are our users, as fast as possible, then add improvements as we
go. 

We follow a similar approach with tech debt. At the end of the project, we go
into a cool down period where we choose what we want to work on and tackle that
for a period of time. This is where the tech debt often gets paid off.
Otherwise, we plan it into the initiative where it makes sense to make
developers' lives easier.

#### How does code get reviewed, merged, and deployed?

We work in branches so after opening a merge request, at least one review is
required to merge changes. We try to keep pull requests as small as possible to
allow for a faster review cycle. Currently, we're working on getting a Slack bot
to notify developers to streamline the process. We also use LinearB which sends
a heads up when a request has been open for too long so we can avoid PRs
stagnating for a long time.

After review, each developer is responsible for getting their work deployed and
making sure that it's working end to end. Firstly, the merged code gets deployed
to staging and tested; next, it gets deployed to a sandbox and tested; and then
finally, it gets deployed to production. We're automating the deployment process
into GitLab right now.

#### What is the QA process?

The engineers own their own tests, this includes unit tests, integration tests,
and some end to end tests. We're trying to move away from too many end to end
tests to contract based testing. We've recently hired QA engineers working
within each group and their focus is not going to be as much on writing tests as
working on frameworks that help engineers develop tests faster and instill a QA
mindset within the team, building tools to track the quality of our tests, and
so on. 

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

One exciting development project is moving from AWS RDS to CockroachDB, which is
a distributed SQL database. There's a lot of excitement in the team working on
this. The technology itself is very interesting and challenging, and not a lot
of people in the team had experience with it, given that it's fairly new. So
that's currently something that is very exciting. 

Another thing that some teams are working on, which requires a lot of
collaboration is moving to an event driven architecture. We're not there right
now, but we're slowly introducing Kafka - to start streaming data out of
services and then establish an event driven architecture. 

#### How does on-call work?

We have multiple on-call rotations, so each team has a primary and a secondary
support. We also have on-call communication leads who are responsible for
communicating with merchants because some incidents can affect payments. This
needs to be dealt with swiftly so we can properly communicate with a merchant to
assess the impact.

People need to be comfortable to handle an incident on their own. We have two
responders in each team - primary and secondary. We run training to become a
secondary responder to gain context and develop communication skills which would
then transform them into primary responders.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}}Hiring process at Primer
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We have a hiring team that responds to candidates as fast as possible, we reply
either the same day or next day. The entire process can take around one week,
maximum two weeks -  it mainly depends on the candidate's availability. The
hiring process has following steps:

1. Recruiters within our team screen CVs. 
2. **Quick call:** The recruiter aligns motivations, talks to you about your
   interests, tells you a bit about Primer, and explains the hiring process.
3. **Hiring manager screen (30 min):** The engineering manager discusses the
   applicant's technical background, previous work, and what motivates them.
4. **Technical interview:** This is different for each application. For example,
   when applying for a senior position, pair programming followed by a system
   design interview.
5. **Cultural interview:** Candidate meets two team members who will work with
   them in the future and gets to ask questions about their future role.

#### What is the career progression framework? How are promotions and performance reviews managed?

We have a growth framework right now for engineering and we're currently
building one for the management track. The framework contains levels - it's not
intended to be a checkbox exercise, but rather than a guide to engineers -
showing them the behaviors and qualities expected of at each level. Twice a
year, you do a self-reflection and then your manager does a review where you
check-in together to align on your level and what to focus on next for your
growth. The promotions are given by moving through levels within this framework.

Compensation is not just tied to this conversation - at Primer compensation is
dynamic, it is also tied to tenure - your time at Primer and performance. We
want these review conversations to be more focused about your growth and what
you want to do, but if you're happy within your current role and you're
performing really well, that shouldn’t mean you get stuck. We regularly assess
the market to make sure that we're paying market rate and adjust compensation
accordingly.

{{< div--close >}}
