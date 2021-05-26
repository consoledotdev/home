---
title: Interview with Jan Matas, Deepnote
who: Jan Matas
role: CTO
org: Deepnote
what: A platform for collaborative Jupyter notebooks.
tags: ['Data Science']
date: 2021-05-12T12:00:00Z
draft: false
summary: Interview with Jan Matas, CTO, Deepnote
isSelected: interviews
topImg1Src: /img/interviews/deepnote-jan-matas-profile.jpg
topImg2Src: /img/interviews/deepnote-jan-matas-logo.png
ogImg: /img/interviews/deepnote-jan-matas-desk.jpg
---

### What is Deepnote? Why did you build it?

[Deepnote](https://deepnote.com) is the best place to do any data analytics and
data science work. We are building a platform around the concept of
computational notebooks. It is like a programming environment that integrates
together the written text, code and the results in the same place. At a glance
you can see the story of your data and your analysis. You can write notes, run
the code and examine the results. This makes it the ideal environment to do any
sort of data analytics.

Readers might be familiar with [Jupyter Notebook](https://jupyter.org/).
Jupyter is amazing, and we are excited about all the developments in the
ecosystem, but it has some shortcomings. We built Deepnote to try to improve on
some of those aspects in three main areas.

Firstly, collaboration. We are making it extremely easy for you to share your
work with both your technical colleagues and non-technical stakeholders. With
Deepnote, when you do any sort of data analysis, it suddenly becomes accessible
to the whole organization.

Secondly,  ease of setup. It only takes a couple of clicks to get a full
fledged data science analytics environment. You don't need to mess with virtual
environments. You don't need to install libraries or make SSH tunnels. You can
just do your analysis and focus on the stuff that is important for you.

Finally, the integrations. You probably have your existing data science stack
or you have your data somewhere. We are trying to make sure that wherever it is
we integrate with this tooling and we make it easy for you to build the
integration. You don't need to move everything to Deepnote. You can use
Deepnote for the computational analysis itself, but you don't need to move the
data. You can connect to whatever source you have right now.

Before working on Deepnote I did some research on deep reinforcement learning
and robotics. It was about teaching robots to do different manipulation tasks,
for example, hanging clothes on a hanger. I was using mostly computational
notebooks for this, but I had a lot of trouble trying to share my work with
people around the lab because we were sending the notebooks back and forth. We
tried using Git but it’s not ideal for rich data. There were some videos, there
were some images and the diffs were massive. By the end, we had switched back
to vanilla scripts and generated the outputs elsewhere that were just direct,
like single blobs of JPEGs inside the repo.

Later, I worked in a hedge fund where I was building a platform for financial
modeling. This was also built around computation notebooks similar to Deepnote.
At this time I also talked with people at companies like Uber, Netflix and
Facebook, and discovered that they were all internally building this kind of
data science platform built around notebooks, which demonstrated the market
opportunity. Smaller companies don't really have the resources to build their
own platform, so I decided to quit my job at the hedge fund and go build
Deepnote.

Today with Deepnote, you can start the computation environment in a couple of
clicks. You can connect your database and immediately start analyzing data. You
can share the work with your colleague who will see exactly the same
environments. After you are finished, you can generate a report or you can send
it to other teams like marketing or sales, for example. We are making hundreds
of data science teams more productive, and are super excited to see the growth
continue.

{{< img-center
src="/img/interviews/deepnote-jan-matas-product.png"
alt="Deepnote product screenshot"
width="100%"
caption="Collaboratively editing a notebook in Deepnote."
>}}

### How do you see your relationship with the Jupyter Notebook project?

We are working very hard to stay compatible with the Jupyter format because we
feel that all of our users are very familiar with it. If you have a .ipynb
notebook, you can bring it to Deepnote. We are even using some parts of Jupyter
on our backend. For the frontend, we decided to do a hard fork of Jupyter and
build it from scratch in React.

Jupyter is a great tool and the leadership of the community is built like a
steering committee. They're all amazing engineers, but sometimes they have a
conflict of interest because some companies want to build one feature, and
another company wants to build a different feature. It's much harder being an
open source community to iterate quickly. When we decided to do the hard fork
we can just do discussions internally. We believe we can move much faster.

### What does a "day in the life" look like?

I'm still writing code most of the time. It probably takes up about sixty
percent of all my day. Our CEO and most of our team are engineers. They are
focused on shipping new features. We tend to own features end-to-end. If they
don't have a lot of experience writing, for example, front end code, they get
support from other engineers.

Being in a CTO position, I need to focus on certain things. It's mostly about
hiring, interviewing market research, thinking about architecture and strategy -
what features to implement and what features not to implement. Maybe twenty
percent of my time right now are sales calls and more general user interviews.
It's super exciting to learn about ways people use Deepnote and how we can
support them.

### What does your team look like?

I'm super happy with our team. We are sixteen people. Most of those are
engineers and we are spread all over the world, working remotely. We have built
an amazing team because we all come from different parts of life.

There are people that were leading data science teams, people working in
laboratories that were actually using the Jupyter notebooks full time, or
people building platforms for academic publishing and collaborative platforms.
There is a lot of different expertise in the team and all those points of view
merged really help with the Deepnote product direction. There is a lot of
diversity of experiences in the team.

We don't have too much of a structure. There is no separate backend and devops
teams. There are some people that naturally focus more on specific things, but
we like the approach of owning a project end-to-end.

If anyone’s interested, [we’re hiring at the
moment](https://deepnote.com/join-us).

### How do you think about UX and design?

The original founding team was four people, and two out of those were
designers. We use Figma to do the designs and the pipeline is pretty simple -
they start with a design, then do a bunch of user interviews to iterate. There
is a bit of a handover when they communicate with the engineer that it is going
to implement the feature end to end, then they follow up with a couple more
user interviews before finishing the release.

Figma is an inspiration for Deepnote because they are doing the same thing for
design that we are doing for data science. If you use Figma, you know that you
can literally just take the whole design, send it to other people for comments
and review while editing in real time.

### How did you first get into software development?

When I was in elementary school, I visited a robotic competition that was in my
hometown. I was super excited to see kids my age building cool stuff. The
robots were simple, but very exciting. They were things like small cars that
were doing different tasks. There was no robotic team around my hometown or
even in the region, so I asked a friend to start a robotics team. We raised
some money from local companies, met all the executives to make them understand
what we were doing, and managed to raise the money!

It was a super successful endeavor because we ended up winning the world
championship three years later in robotics. Although we started in C++ I later
learned about Python. Switching from C++ to Python was a great experience.
Everything was suddenly so much simpler, a tiny bit slower, but we bought
better CPUs and didn't care at that point!

Next, we bought cameras and started doing computer vision, and I pretty much
continued with this until college when I started doing AI for robotics. Later I
switched more into dev tools because I became bored. I really wanted to do AI
for robotics, but I realized that the tooling is just not there yet.

### What is the Deepnote tech stack?

We have a Kubernetes cluster that is doing all the orchestration for the user
compute environments and the microservices behind the scenes. They’re written
in Node.js with TypeScript.

TypeScript was a great choice because as the team ecosystem grows, it makes it
easier to do refactoring and improve our code quality. It is also easier to
document the code while we are writing.

We are running a multi-cloud, so we’ve got something in GCP, and something in
AWS. Everything is built to be cloud agnostic, because we are planning to start
doing on-premise deployments as well as cloud. So we need to make sure that
everything works regardless of the environment. The plan is to be able to run
on any Kubernetes cluster that is available on the common public clouds.
Kubernetes is always going to be there.

### What has been the most interesting technical challenge building Deepnote?

Real-time collaboration has been a challenge. There are multiple ways to do it.
There are conflict-free replicated data types (CRDT), operational
transformations (OT) and there are last write semantics. Where the document is
broken into small changes, you need sophisticated algorithms to figure out how
to merge the chunks.

We also found some open source libraries to help pull things together, but we
ended up with our own engine for operational transformations. The big challenge
is with performance and the number of requests going through our load
balancers. We often see spikes of traffic.

Now we’re thinking about how to break down the collaboration even further, so
that certain blocks, such as code, have very tight transformations to ensure
there is never any data loss during a session. For others, such as text blocks,
it’s a little less important. If you lose a character here and there it’s not
such a big deal. We are experimenting with these and A/B testing to try to find
out what works well for people, and our infrastructure.

### What is the most interesting tech are you playing around with at the moment?

I'm super excited about changing our editing experience. We are currently
following the standard Jupyter system where we have markdown cells and code
cells, but we will soon try an experiment moving towards a
[Notion](https://www.notion.so/)-like approach, where you can write headings, a
bullet list or a checklist then drag and drop the blocks around. This is an
experience that we are quite confident would really improve how people use
Deepnote.

We are thinking about using [Slate](https://github.com/ianstormtaylor/slate)
written by [Ian Storm Taylor](https://ianstormtaylor.com/). Ian is a co-founder
of [Segment](https://segment.com/). I am super excited about Slate because it
has a really great architecture. The core of the project is a set of tools to
build your editor inside the browser. The codebase is really small, but it's
really extensible. For example, I was able to build the drag-and-drop
functionality in an hour and a half and keep it completely separate from the
rest of the code base. This is cool because that kind of feature touches many
areas of the document, from rendering to the document logic. The editor API
makes it easy to build these complex features.

### Describe your computer hardware setup

It's all really standard. I've got a MacBook Pro that is connected to a wide
screen LG monitor. I really like that MacBook keyboard everyone was complaining
about! I know that is a bit controversial, but I like it. I even enjoy using
the touchpad, so I don't even have an external mouse and keyboard. There's an
added benefit that when I'm traveling, I have my whole set-up (apart from the
monitor) always on me.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** [Circle](https://circle.so) and Slack. We started our community on
Slack, but we realized that it is not well indexed and it's hard for people to
find information. So we moved it to Circle whilst still using Slack internally.

**IDE:** VS Code.

**Source control:** GitHub.

### Describe your desk setup

{{< img-center
src="/img/interviews/deepnote-jan-matas-desk.jpg"
alt="The desk of Jan Matas, Deepnote"
width="100%"
>}}

I’ve got the same Ikea standing desk at home and in the office. I prefer to be
in the office personally, but Deepnote itself is more of a remote first
company. Out of the sixteen people right now, two or three of us usually come
to the office. It's pretty empty. Pre-pandemic it was a bit better, maybe five
or six people would be in the office.

### When coding

**Daytime or night time?** I prefer daytime, but I usually end up coding at
night time as well.

**Tea or coffee?** Tea.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I really enjoy reading both technical and non-technical books, books about
philosophy and so on. Apart from that, I enjoy hiking and biking to very remote
places to disconnect for a while before jumping back to working at Deepnote.

### Find out more

[Deepnote](https://www.deepnote.com) is a platform for collaborative Jupyter
notebooks. It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 13 May 2021. This interview was conducted
on 12 May 2021.
