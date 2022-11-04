---
title: "Replay"
date: 2022-11-03T12:00:00+00:00
draft: false
summary: Time-travel debugger.
metaTitle: Working at Replay - Console profile
metaDescription:
  What is it like to work at Replay? Console profile behind the scenes at
  Replay - time-travel debugger.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.replay.io.png
  URL: https://www.replay.io
  jobsURL: https://www.replay.io/about#jobs
  location: Remote (US)
  description: Time-travel debugger.
  product:
    name: "Replay"
    description:
      "More than a video. Replay lets you jump to any point in execution, add 
      Console logs on the fly, and squash bugs as a team."
  techStack:
    - React
    - TypeScript
    - C++
  meta:
    - label: "Founded"
      value: 2020
    - label: "CEO"
      value:
        links:
          - href: "https://twitter.com/jasonlaster11"
            text: "Jason Laster"
            iconRight: "external-link"
    - label: "Employees"
      value: "<20"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/replayio"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/replayio/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Developer Tools - Debugging"
  topCategory: "Developer Tools"
  subCategory: "Debugging"
  filterTaxonomy: "developer-tools, saas, typescript, c-plus-plus, react"
interview: replay-jason-laster
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}} How engineering
works at Replay{{</ rich-title-3 >}}

#### How are the teams structured?

We have a bunch of talented people working really closely together. There used
to be eight people in a team and it was hard to imagine going up to 10 or 12. So
we divided it into a front-end team with two people, a back-end team with four
people and a runtime team with two people.

#### What tools do engineers use?

- **Project management:** Linear
- **Communication:** Discord
- **Documentation:** Notion
- **Builds and Deploys:** GitHub.
- **Infrastructure:** Kubernetes on AWS
- **Error Tracking and Monitoring:** Sentry, Honeycomb, Datadog

#### Can developers pick their own tools?

We are at a stage where the first 20 people are going to set the environment for
the next 200. We're looking for people who are really creative and want to
design that environment. So if you want to use Emacs instead of Vim then you can
do that, but the more exciting thing is thinking about how to design the
environment for Replay as a whole and shape it for the future.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

To us, the most important thing is quality. We have a score called “the butter
score”, which was there to say, "Hey, if it's a hundred, we're giving our users
a buttery smooth experience." You can start the Replay quickly, you can interact
with it well, it doesn't get in your way, it never lies to you.” We just got to
the point where half of the sessions have a butter score of 90. When we started
measuring this, our P50 was 30. When we get to a P50 of 100, it will be the
first time that half of all sessions are buttery smooth, but we won’t stop until
we get to a P90 of 100.

#### How does code get reviewed, merged, and deployed?

We use GitHub. We do code reviews, we trust you to do great work so we try not
to get in your way, but at the same time we know that we're all solving really
difficult problems and so we try to support one another as well.

#### What is the QA process?

We have the best automated tests. We fuzz at every single level, a standard test
would be a unit test where you have very defined inputs and outputs for one
component - you can go up to a functional test where you say, "Hey, I care about
this piece of functionality and I'm going to test multiple systems at once." And
then you have an end-to-end test where I'm going to pretend to be the user. 

That's all well and good and we have all of those but the highest level of
testing, in my opinion, is generative testing where you try to stress test the
system and you let the computer come up with new cases that we've never thought
of. So we are constantly fuzzing at the runtime level, going to random websites
and recording them, at the protocol level, opening recordings and issuing
thousands of requests to try automated debugging in the most strenuous way
possible to discover new issues.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

On the runtime side, one of the very interesting problems we faced was the
ability to snapshot a runtime state at the C++ level so that you can write it to
disk and then load it up later. It's like a save button in your browser so you
can shut it down and then open your browser up exactly at that point in time,
then in that space we have the ability to do lightweight forking. The snapshot
persists to memory or disk and it's hundreds of megabytes; you get a new content
process in under a second and it just keeps on running. 

On the back end, the most interesting thing we're doing is turning compute -
browser compute and NodeJS compute - into a state in S3 that we can query as a
database. You're turning imperative execution into something functional and
queryable later, which you do to improve performance and reduce further
computation.

And then on the front end, we're building dev tools: elements, console, network
monitor, debugger, and trying to do that in a functional way because we have a
time travel debugger. We started with something like Chrome dev tools and
Firefox dev tools, but runtimes are by nature imperative so a tool like Redux
made a lot of sense. Now that we have something more functional.

#### How does on-call work?

We don't have a formal on-call, but we might have to bring that on in the next
six months. Currently, we have Slack Connect with our top customers, and we have
great observability and alerting. If there is an issue, we use Discord to start
the conversation and the right people can come in.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}}Hiring process at Replay
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

As a general rule of thumb, we believe everyone applying here is technically
strong. I don't think you should apply to work with this team if you aren't
excited about the future of software and making software more understandable.
Everything else in the interview process is testing for fit. "How do you like to
work? What are your biases and trade offs and priorities? How do you like to
collaborate?" Getting to know us. I think, if we design the process right, you
will have a chance to say, "Hell, no," to us. ‘cause you've got to know us just
as well as we've gotten to know you.

We think that the best people aren't looking, we try to talk to them three
months, six months, two years before the timing works. Some people really want
to come on when the team's five people, others really want to come on when the
team's 20 to 50 and some people are just happy where they are. If someone is
actively looking, we can get to a decision on their timeline very quickly, even
within a week, but usually it would be two to four weeks.

#### What is the career progression framework? How are promotions and performance reviews managed?

At this stage, the most important thing we do is equity and ownership. The first
20 will shape the next 200. So as a technical leader, you help define the
technical primitives that we will build on top of. You also get to shape the
technical processes for how we collaborate, plan, prioritize, diagnose issues,
recruit. We don't really do titles, but we do recognize ownership in a pretty
big way.

{{< div--close >}}
