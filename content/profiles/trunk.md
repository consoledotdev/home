---
title: "Trunk"
date: 2022-04-27T12:00:00+00:00
draft: false
summary: Simplified checking, testing, and merging your code.
metaTitle: Working at Trunk - Console profile
metaDescription:
  What is it like to work at Trunk?  Console profile behind the scenes at
  Trunk - simplified checking, testing, and merging your code.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/trunk.io.png
  URL: https://trunk.io
  jobsURL: https://trunk.io/jobs
  location: Remote (US)
  description: "Simplified checking, testing, and merging your code."
  product:
    name: "Trunk"
    description:
      "Trunk is building a unified DevEx Platform. Currently available for 
      macOS and Linux, trunk provides intelligent services that identify, 
      install, configure, and run the right linters, static analyzers, and 
      formatters on a code repository and orchestrates merging pull requests."
  techStack:
    - Typescript
    - React
    - Next.js
    - C++
  meta:
    - label: "Founded"
      value: 2021
    - label: "Co-CEOs"
      value:
        links:
          - href: "https://www.linkedin.com/in/davidapirian/"
            text: "David Apirian"
            iconRight: "external-link"
          - href: "https://www.linkedin.com/in/elischleifer/"
            text: "Eli Schleifer"
            iconRight: "external-link"
    - label: "Employees"
      value: "10-20"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Customers"
      value:
        - "Doordash, Waabi, Voxel, Hashicorp"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/trunkio"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/trunkio"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS / CLI"
  category: "Developer Tools - Code management"
  topCategory: "Developer Tools"
  subCategory: "Code management"
  filterTaxonomy: "saas, cli, typescript, react, cplusplus"
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}} How engineering
works {{</ rich-title-3 >}}

#### How are the teams structured?

We are not a hierarchical organization. Currently, we have two sub-teams, a
client team that focuses on C++ work and another team that focuses on anything
web based (both backend and frontend).

We think that when stand-ups grow too big it just becomes people standing around
talking and no one's paying attention. We try to organize team stand-ups in
small units so that everyone on the call cares about what other people are
saying. As the teams continue to grow over time, we'll continue to shard our
working groups so they scale for focus.

#### Tech stack

- **Frontend:** Typescript, React, Redux, Next.js
- **Backend:** Typescript, Node, AWS, CDK, k8s, gRPC
- **Observability:** Prometheus, Grafana, Kiali, Jaeger
- **CI/CD:** GitHub Actions
- **CLI/Daemon/LSP:** C++20, Bazel, LLVM
- **VSCode Extension:** Typescript
- **General:** GitHub, Slack, Linear, Slite

#### What tools do engineers use?

- **Machines:** Everyone has a Macbook to dev locally on and a remote Linux VM
  in the cloud
- **Editors:** VS Code or vim
- **Source control:** Git & GitHub
- **Deployment:** GitHub Actions (self-hosted runners)
- **Issue tracking:** Linear
- **Internal documentation:** Slite
- **Error reporting:** Sentry 
- **Infrastructure:** AWS
- **Communication:** Slack

#### Can developers pick their own tools?

We believe in all things product in being opinionated but configurable. That
product focus carries forward into our internal development practices. We don't
let engineers haphazardly choose their own languages or randomly pick different
services. We believe that the more you can move as a team together, the more
efficient you are. Our current hardware stack is MacBook M1 machines. Engineers
are encouraged to use VS Code, not only to create a unified developer experience
but to guarantee our own VS Code extension gets put through its paces during
development.

If you decide to go off those rails, we'll let you do it. Some of our developers
use Vim, but I think often the more variation there is in people’s development
environments, the more they're going to end up being less efficient. We have a
strong preference, but ultimately developers can choose if they want to.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

- Bugs, features, and tech debt are ticketed using Linear
- We work in bi-weekly sprint
- At the start of every sprint, we have a sprint planning meeting. In that
  meeting
  - We organize and prioritize backlogs.
  - Go through new tickets added during the sprint and discuss
  - Engineers are assigned tickets and they run with it. Sometimes, we lay out a
    rough sketch of how to solve a particular problem.
- We also balance inbound customer requests and continuously rebalance
  priorities to ensure customer facing bugs are squashed while maintaining new
  feature release velocity. 

#### How does code get reviewed, merged, and deployed?

- All code gets code reviewed, no matter whose it is. In reviews, we make sure
  that
  - Code is legible to other people
  - Tests are written (when appropriate)
  - Code organization is consistent with the rest of the repo
- Merging happens through Trunk Merge, our merge queue. It adds another layer of
  testing before automatically merging code to ensure there are no logical
  conflicts between multiple PRs.
- In general, we merge a lot of code. Engineers at Trunk average at least two
  PRs per day.
- Deployments are all automated as CI jobs via GitHub actions. Some need to be
  manually kicked off and given a version, and others run automatically via
  continuous deployment. 

#### What is the QA process?

All of our testing is automated, we have a very high bar for writing unit and
integration tests for new code.. We have layers and layers of increasingly high
level tests that mostly run as part of CI on every PR. Some of the slower tests
run in hourly jobs or nightly jobs.

- Unit tests
- Smoke tests
- Upgrade tests
- Integration tests
- Higher level integration tests: We clone popular repos in containers and run
  Trunk through its paces on themIf code passes all these tests, it should be
  good to go. We plan a release roughly every two weeks where we cut off head
  off of main and ship it.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We have Mac runners that run tests all day long, deployed on
[MacStadium](https://www.macstadium.com/). They don't spin up and spin down,
which tends to accrue garbage if you have processes not shutting down cleanly. 

Recently we upgraded to a new version of LLVM. On Rosetta, the x86 binaries were
taking 10 seconds to build instead of 3 seconds. Our tests all basically assume
that the system will connect up within three seconds, but that was timing out.
These timeouts meant the Trunk daemon kept respawning so we ended up with
thousands of them. This crashed the kernel of the OS and the system would
reboot. Tracking this down was complicated!

#### How does on-call work?

The on-call is just a rotation through the service engineering work. Engineers
cycle through support tickets during normal working hours.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We have a multi-step process:

- **Initial call:** Our recruiter verifies that the candidate is broadly suitable
  for the job profile they applied for and their interests are aligned with
  ours. In particular, we want to make sure they’re excited about working on dev
  tools and that they understand this is a startup.
- **Technical screening (1 hour):** CodeSignal test with one of our engineers.
- After that, there is a half-day where we run three interviews, plus have them
  chat with the founders.

#### What is the career progression framework? How are promotions and performance reviews managed?

We do performance reviews, but think it's super important to communicate to
employees, all the time. How they're doing and what's good, what needs
improvement. For engineers, we have the typical junior -> senior -> staff level
progression.


One thing that’s fairly unique here is that we have no typical bonuses, often
calculated from some complex but meaningless scheme. Instead, we just give high
base salaries. What we see in most orgs is that low bonuses are used almost
entirely as a way to softly tell someone “you’re doing poorly, please leave”.
That’s a broken system, there are better ways to communicate that. 

Our compensation strategy actually is built around making sure that in the
future, managers don't hide behind performance reviews or end-of-year
compensation discussions to actually address performance problems and engineers
don’t stick around for a big pay-off, any longer than they want to. We believe,
if you don't want to be here, you shouldn't be here. If you want to be here,
you're here.

{{< div--close >}}
