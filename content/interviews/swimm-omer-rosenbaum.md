---
title: Interview with Omer Rosenbaum, Swimm
who: Omer Rosenbaum
role: CEO
org: Swimm
what: Platform for continuous documentation.
tags: ["Docs"]
date: 2021-12-16T12:00:00Z
draft: true
headerType: fixed
summary: Interview with Omer Rosenbaum, CTO, Swimm.
isPage: interviews
topImg1Src: /img/interviews/swimm-omer-rosenbaum-profile.jpg
topImg2Src: /img/favicons/swimm.io.svg
ogImg: /img/interviews/swimm-omer-rosenbaum-desk.jpg
---

### What is Swimm? Why did you build it?

[Swimm](https://swimm.io/) is a platform for continuous documentation. It allows
developers to create, find, and maintain documentation that is helpful and
practical. We call it Walkthrough Documentation. With Swimm, documentation
becomes a part of the company's development workflow, and Swimm is the only
platform that makes sure that documentation is always up to date as your code
quickly evolves.

We built Swimm to solve some of the biggest pain points that many companies face
relating to knowledge sharing, and specifically sharing knowledge about code.
Those pain points happen at many different points in the life cycle of
development. They occur when companies onboard a new developer, when developers
switch projects, and when you need to work on some new part of the code that you
haven't written yourself - or that you wrote a long time ago and forgot.

This happens all the time. When you need to understand code, poor documentation
can limit agility within engineering teams and the company's velocity overall to
reach the business goals. With Swimm, our users create Walkthrough
Documentation- documents that are code-coupled, which means that they explicitly
reference parts of the codebase.

Imagine a document with text and references to the code, such as complete
snippets of code, a path, function name, or names of variables. Swimm creates a
very vivid experience - like having the engineer who originally wrote the code
sitting right next to you, walking you through it. That's why we call it
Walkthrough Documentation. We developed a methodology of what we call Continuous
Documentation, which is creating, maintaining, and integrating code
documentation into the normal development workflow.

Swimm monitors the code and makes sure that the documentation is always up to
date. For example, by introducing live code snippets that auto-sync whenever
there are changes to the codebase. When the code changes, we help the developer
update the documentation automatically. This is our patented technology that
analyzes code changes to determine whether they make the documentation obsolete
or can be automatically updated. Our goal is for code and documentation to
always be in sync, or as we say at Swimm - "Make Docs Like Code."

### How does a developer interact with the code & the docs?

There are two ways to read Swimm documents or find them. One is within the Swimm
app - a web app that allows you to search for a document as you would on other
platforms. The other way is that you can actually find the document from within
your IDE while working on the code.

One of the advantages of having code-coupled documents is that you can link from
the document to the relevant part of the code, but you can also link from the
code to the relevant document. So while working on the code, you see it live
within our IDE integrations. You work on the code while reviewing the relevant
documentation.

### So it works as a plugin for VS Code and IntelliJ etc?

Exactly. Currently, we support all JetBrains products and have a VS Code plugin.
We also have integrations for CI/CD providers like GitLab and GitHub.  
  
When a new pull request is issued, we have a check that makes sure all the
documentation is up to date. If it is, it tells you everything is up to date and
all is good. If it's not, it tells you that the current PR makes this
documentation obsolete. Swimm can also offer to fix that for you. We synchronize
the documentation to the PR, and then you can accept those changes as part of
your pull request.

The document itself lives within the repository, so everything is
version-controlled.

### How have developers been solving this problem before using Swimm?

There is a lot of variance in terms of how developer teams approach the problem
of knowledge sharing. Some teams just choose not to invest time in
documentation. I think it's because they can’t be bothered since it's soon going
to become obsolete anyhow. Code evolves so quickly so that documentation that is
not coupled to the code base just becomes irrelevant.

Developer teams pay the high price for not creating documentation, both in
agility and because they put themselves at a high risk of knowledge loss -
especially when a certain team member has left, which happens very often.

It is hard for developers to know how to start writing documentation that is
practical and that makes sense for developers. Because the code changes so fast,
they usually don't describe what's actually happening in the code because they
know it's going to become obsolete.

They tend to either create high-level documentation which describes the big
picture but lacks the vital practical implementation details, or they just put
inline comments which tell only the very specific details of this specific line
of code and don't explain the full story. Sometimes developers write
documentation that explains the code and the full flow, but it's not coupled to
the code, and then it becomes obsolete. We heard from many developers that they
read those documents, lose their trust in documentation, and then don't bother
to read current documentation and don’t go on to create additional
documentation.

We’re striving to break this vicious cycle by creating documentation that is
both more straightforward from the code itself rather than from a blank page and
trying to fill it up with text. We also make sure that the documentation is up
to date, and we help you find it when you need to within the IDE while working
on a feature or fixing a bug.

### What does a "day in the life" look like for you?

It has changed a lot recently. When we started working on Swimm two years ago, I
was one of the four co-founders. I was implementing the initial versions of the
platform. This involved working with clients and working on fundraising. It was
a combination of talking to clients, design partners, working with investors,
and of course, implementing the code. As we grew, I became a team leader of a
small team of developers and gradually became responsible for two teams.

At the moment, I'm focused on creating unique technology for Swimm. This
involves researching and finding innovative solutions that will take our vision
even further. My days are quite bimodal, either packed with meetings that
concern the strategy of the company or mentoring some of our engineers -
especially in areas of the code that I was heavily involved with implementing or
designing myself. The rest of my time is dedicated to research.

### What is the team structure around Swimm?

We’re split into two squads. One is responsible for user engagement, and the
other is for the adoption of Swimm. The user engagement squad looks after
everything from the time the user sees or hears about Swimm. This team’s
priority is to make sure the user is engaged with Swimm and excited about the
product. For example, the user engagement squad created the awesome editor that
we have to make sure all the user experience for creating code-coupled
documentation is easy, clear, and exciting.

The second squad, the adoption squad, is responsible for the adoption of Swimm
within the company's organization. They make sure we're able to expand to
additional users and teams. The integration with GitHub and the IDE plugins that
I described earlier is an example of their work. Their focus is on how users
experience updating documentation in a way that is embedded within the
development workflow.

One flow would include a user that doesn't know Swimm in the organization,
issues a PR request, and finds out that their documentation is now outdated.
Swimm will help fix that by showing what is out of sync, suggesting what to
review in the document.

### How did you first get into software development?

When I was in 10th grade, I took a
[Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)) course. I
don't even remember how I heard about it. I think my parents may have sent me
there, but I really liked it. I loved learning how to create small games. Of
course, Pascal is not so useful nowadays, but it was a good starting point. I
got into software much more seriously when I accidentally installed a virus on
my machine when I was in high school, and I tried to remove it. It was hard to
remove, and I got to dig deeper into it.

I started learning about malware, how to perform malware analysis while still in
high school and got more and more into that. I ended up starting my own online
forum to help people remove malware from their machines at home, just for fun.
That used to be my hobby. Later, I served as a developer and researcher in a
technological unit as part of our obligatory military service in Israel, which
is a common route for Israeli entrepreneurs.

I stopped with Pascal quite early, though we did use Pascal for the high school
exams. Next, I got into C, C++, Python, and even Assembly for a while. Later I
shifted into JavaScript and TypeScript.

### What's the tech stack for Swimm today?

For the web app, we use NodeJS with TypeScript. Our frontend is implemented in
Vue.js. We use [Firebase](https://firebase.google.com/),
[Firestore](https://firebase.google.com/docs/firestore), and GCP. We also have a
GitHub app and various IDE integrations, and we're gradually adding more and
more components. We do have some microservices that are also different. We also
used to have a desktop application that uses Electron.

For the documentation itself, we have our own format called `sw.md`, which is
basically a Markdown file with some extras. This means you can consume it from
anywhere, even without using the Swimm app - but then when you read it in Swimm,
it adds a lot of cool insights and enhances the experience.

For example, if you see the name of a variable, Swimm would tell you exactly
where it's embedded, where it was declared in the code, and if it changed. If
the variable was renamed since someone wrote the document, we show you the
previous name versus the current name and why we still think it's the same
variable - and that you should update it accordingly.

### What is the most interesting development challenge you've faced working on Swimm?

The most interesting recent challenge was finding a solution to automatically
update the documentation in a way that makes sense for developers. It's
something that many people told us, in the beginning, would be impossible.
You're either going to make something that's very specific or something that
just doesn't make sense.

We wanted to find a solution that supports all programming languages. We had to
understand a lot of Git internals and look at a lot of data, especially with our
first design partners, to gain the right insights and create an algorithm that
works across all languages. Finding the right algorithm and then implementing it
in a way that would also be efficient and also something that makes sense to the
user was an interesting challenge to solve - both technically and product-wise.
It also ended up being Swimm's first registered patent.

### What’s the most interesting tool/product you’ve been playing around with recently?

I've been playing with some interesting static analysis tools. We analyze code
at Swimm for various reasons, so I got to play with static analysis tools and
also the internals of Git and the GitHub API.

We’re trying to help developers create documentation continuously as opposed to
approaching it in concentrated sprints. One of the things we're doing now is
creating a way for our users to create documents directly from pull requests.
When a developer finishes working on a new feature or fixing an interesting bug,
we want to create documents straight from the pull request itself - specifically
from the code changes introduced within that pull request.

I got to play with the GitHub API to make sure we render only the relevant
changes from the pull request. Libraries such as libgit have been useful in that
case.

Technologically, it's really interesting, but also from the product's
perspective, it becomes a really good starting point for a document because you
start with actual code changes. When you've just introduced those changes,
everything is very fresh in your mind as it is something you've just finished
implementing as opposed to something you created and implemented a few months
ago.

We found out that when our users create documentation as part of the pull
request, it actually helps the code reviewer. It helps the code review
processes, as they have the relevant documentation that provides the bigger
picture. Our goal is to gradually meet the user in more places alongside the
development workflow.

### Describe your computer hardware setup

I have a [Lenovo ThinkPad](https://www.lenovo.com/us/en/c/laptops/thinkpad) with
a Dell widescreen monitor, a wireless Microsoft keyboard and mouse. I also have
a [Yeti microphone](https://www.bluemic.com/en-us/products/yeti/). My phone is a
[Google Pixel 6](https://store.google.com/us/product/pixel_6?hl=en-US). You'll
most likely find the small espresso cup by my keyboard at all times. It's
essentially a part of the computer setup, I guess.

{{< img-center
src="/img/interviews/swimm-omer-rosenbaum-desk.jpg"
alt="The desk of Omer Rosenbaum, Swimm"
width="100%"
>}}

### Describe your computer software setup

**OS:** Windows with WSL.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** VS Code and [IntelliJ](https://www.jetbrains.com/idea/) products.

**Source control:** Git & GitHub.

### Are you based in an office?

We are hybrid now post-COVID. Everyone is at the office at least three days a
week, and then we have two days where people choose to work remotely or from the
office. I do both.

When we started Swimm, our first employees onboarded during the first lockdown.
We were onboarding using Swimm for the first time, which was a very cool
experience. We're very lucky that we get to use Swimm here on a daily basis.
Every employee who joins Swimm goes through onboarding using Swimm. And on a
daily basis, the team gets to create and share documents written by Swimm.

This ability for developers to use the tool they're working on, on a daily basis
ensures that they really understand the product and can affect what the product
looks like. Since it's a tool for developers, we want our developers to
influence how it's implemented and how it interacts with the users.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee. At Swimm, we have a small coffee shop within the
office called Caffe 7 because it used to be the RGB for our initial brand
colors: C-A-F-F-E 7.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I like having coffee with people and making my own coffee. Coffee is definitely
a hobby. I also enjoy taking walks, especially with my wife and my dog.

I also like creating content for people to enjoy. I got to write a [textbook
about computer networks](https://data.cyber.org.il/networks/networks.pdf), and I
also have a [YouTube
channel](https://www.youtube.com/channel/UCgIxN1uPgvn5ItMOD2fUU-w) where I post
mostly about Git or computer networks. I also play freestyle Frisbee and enjoy
reading books.

### Find out more

[Swimm](https://swimm.io/) is a platform for continuous documentation. It was
featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 20 Jan 2022. This interview was conducted on
13 Dec 2021.
