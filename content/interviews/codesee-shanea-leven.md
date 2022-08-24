---
title: Interview with Shanea Leven, CodeSee
who: Shanea Leven
role: CEO
org: CodeSee
what: A tool for developers to visually map their codebase.
tags: ["Code"]
date: 2021-04-16T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Shanea Leven, CEO, CodeSee
isPage: interviews
topImg1Src: /img/interviews/codesee-shanea-leven-profile.jpeg
topImg2Src: /img/favicons/www.codesee.io.png
ogImg: /img/interviews/codesee-shanea-leven-desk.jpg
---

### What is CodeSee and why did you build it?

[CodeSee](https://www.codesee.io/) is a developer tool. We help developers to
visually understand how their code works, and continuously document and share
their large-scale codebases.

I had the idea a couple of years ago when I was working at
[Docker](https://www.docker.com/). We were building this new feature that we
were really excited about. It was really helpful for the company to show
security vulnerabilities in Docker images.

When you download a Docker image, you want to know how many potential
vulnerabilities you have. Two days before we were set to launch the feature, we
discovered a bug, and we had no idea how to fix it!

As we dug into it, we found the bug touched a part of the codebase that an
engineer who had left the company had been working on. It would take a month to
really understand this part of the system before we could change it, so we
didn't launch the feature. No one knew how it worked. We didn't want it to cause
catastrophic downstream effects to other parts of the Docker system. We were too
terrified to touch it. I started asking myself, "Why do we not know how our
systems work? Why do we not understand all of the complexities of our system?"

CodeSee solves that. At any point in the codebase, it allows a developer to
understand the code, see how it works, and build a full understanding of what’s
going on. CodeSee allows you to visually see how your code works. The use cases
include onboarding new team members, or debugging new parts of the codebase, or
even just coming back to a component you’ve not touched for a while. Whether
that’s whilst debugging or during code review, building a new feature, or any
time you need to understand how the code works, we can help you.

### How does it work?

Using a plugin, in just two easy steps a developer can integrate with their
development process. Download our NPM package, and change a couple of lines. It
typically takes just a few minutes. You’ll then get a really cool floating
action button - we call it the CodeSee Eyeball - that allows you to create
recordings of your code and travel around your codebase.

Once you’ve “recorded” the action you want to inspect, we create a Code
Execution Map which we call a Data Flow. This is every single line of code that
ran between when you hit start and stop, in code execution order. We can make a
visual map of how the computer sees your code - frontend, backend and network
requests - all of the things that would be of interest to a developer.

This helps you deeply understand how the code works, what it’s doing, and what
the runtime data state is as well. Everything you might be maintaining in your
head as if you were stepping through the execution is visualised by CodeSee.
It's basically like if you were to put a print statement everywhere.

{{< img-center src="/img/interviews/codesee-shanea-leven-product.png" alt="CodeSee product screenshot" width="100%" caption="CodeSee Data Flow in action." >}}

### How have you found people solve this problem before they come to CodeSee?

The problem is they are not solving it. Typically when I talk to developers
there are only two ways to solve this problem today. You need to read the code
line by line and build a mental model of how the code works in your head, or you
ask someone "How does this thing work?"

You can write a failing test and try to make the test pass, but that doesn't
necessarily say that you have a good test. If you're trying to understand what
you did, or what someone else did, and why someone else did it - the only way is
really to read the code. There's also documentation, but no one really trusts
documentation. That's why we leave it out, because if you do use it, it could be
totally out of date or wrong.

Code is changing so quickly that the old methods just don't work. We end up
missing something. We think we understand, but in actuality, it doesn't work the
way that we think, or there was something else that we didn't initially see
because it's out of the scope of the task.

That's where CodeSee really shines. Critical errors occur when people think it
will work one way, but then there’s some other thing that was built three years
ago that’s not been documented or commented, and the original coder has left.
That's when critical errors happen.

### What does "a day in the life" look like?

I talk to developers every single day about the process of how they understand
code, and then take that feedback back to the team. I get to try new things,
install CodeSee on open-source codebases, and then take that feedback to help
make the product more stable.

I get to do a lot of things where I'm talking about this problem of continuous
understanding, which is really fun for me.

### What does your team look like?

Our team is really fantastic! Beyond my co-founder,
[Josh Leven](https://twitter.com/thejosh) and myself, we have an engineering
team of three people, one person in devops, and a designer. Every one of our
developers have over 15 years of engineering experience. They are really a dream
team.

[Cubes Silverstein](https://www.linkedin.com/in/cubesebuc/) was an early
engineer at Eventbrite, [Grayson Hay](https://twitter.com/graysonarts) and
[Liz Erickson](https://www.linkedin.com/in/elizabethlainerickson/) previously
worked together at Tableau. [Peter Cho](https://twitter.com/pcho), who's our
head of design, used to lead design at Medium and Pocket.

[Julia Gilinets](https://twitter.com/JuliaSourceress) is our head of strategic
accounts. [Jess Rose](https://twitter.com/jesslynnrose) and
[Ramón Huidobro](https://twitter.com/hola_soy_milk) are our two developer
advocates. Jess led developer programs at Mozilla and Ramón used to be a part of
the TechSpeakers at Mozilla. We also have a couple of part-time folks that help
out as designers, and a CFO to help me with finance things. We also have Tommy
(our dog) who is on his walk right now.

### How did you first get into software development?

I used to be an analyst where I had to write a lot of macros for Excel. I worked
at an outreach company that helped to manage Obamacare. My job was to combine
lots of data, back when [Tableau](https://www.tableau.com/) was the new hotness.
I started trying to analyze all of this data writing macros, and started to
think: "Oh. How do I make programs do what I want them to do?"

Randomly, I then met someone at a party who asked me if I know how to ‘do
Facebook?’. At the time I was about 19yrs old. I started to help her and that
blossomed into a web development and social media agency that I started. I was
building websites for other people, which became somewhat successful. I kind of
self-taught myself, but realised that I had a lot of gaps in my knowledge, so I
went back to get a Computer Science degree to deepen my abilities and really
understand how to be a better developer.

I started with JavaScript, and ended up going to Python, then Java, and now I’m
right back to JavaScript. CodeSee only works on JavaScript at the moment. So,
I'm right back to where we started.

### What has been the most interesting development challenge building CodeSee?

JavaScript is... everywhere. It's also incredibly fragmented. There's a new
build system every week. We're still finding new build systems, which is crazy!
So how do you make JavaScript easily accessible when there's all of these
different build systems?

We also show deep runtime data. That depth comes with its own technological
challenges e.g. how do you send a 300MB recording over the wire? How do you deal
with this huge JSON blob with all of these events? It's really a challenging
problem to be able to manage all of this data.

Of course we’re using compression, but we also have different data modes: high
and low. This allows us to toggle the deep data analysis on and off depending on
what a developer wants to do. It is also able to build other views of that data,
and summarize it, depending on what developers are trying to get and where
they're trying to get it.

There’s a balance of making sure that, if a developer did want all the data,
e.g. five levels of data deep, that it’s available to them. It's a unique thing
that only we've done so far. Thanks to the depth of the data that we have, it
enables things that have never really been possible before, like full search of
the runtime state.

### Describe your computer hardware setup

I have a 16” MacBook Pro for now - we're building a developer tool so I didn't
want to take the risk on an M1 just yet!

I have a vertical mouse for ergonomics but just a regular Apple keyboard, and a
32” curved Phillips monitor. I have my laptop on an arm swing next to the curve
monitor. I've always liked having one big screen that curves.

My headphones are the
[Sony MX4](https://www.sony.com/electronics/headband-headphones/wh-1000xm4) - I
really love Sony with the double tap buttons!

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**Source control:** GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/codesee-shanea-leven-desk.jpg" alt="The desk of Shanea Leven, CodeSee" width="100%" >}}

I have an [Uplift](https://www.upliftdesk.com/) standing desk. It has a bamboo
top with a curved middle, so I can actually scoot all the way up to it, instead
of having this flat desk poking me in the stomach.

My chair isn’t fancy - my co-founder uses our fancy chair, which is a
[Herman Miller](https://www.hermanmiller.com/en_gb/products/seating/office-chairs/).
I got my chair from a girl in my apartment building who was giving it away.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Ocean white noise. It's called
[Pure Focus by Kelly Howell](https://open.spotify.com/album/4BVAg0EjkyZZlJuF87Rvwb).
I've been using that same track for a decade. It's an hour line and I just cycle
it. I’ve been doing the Pomodoro technique lately. I play it one time, get
focused and then take a break and do other non-technical things like emails.
Then, I do another hour.

### What non-tech activities do you like to do?

I love eating ... I'm definitely a foodie. I love walking the dog, just going
outside. I like sitting on beaches. That's an activity, right? The beach sounds
really calm to me, which is where the white noise comes from, I guess.

### Find out more

[CodeSee](https://www.codesee.io/) is a tool for developers to visualize their
codebase. The beta release was featured in the [Console
newsletter](https://console.dev) on 22 Apr 2021. It was also featured as an
"Interesting Tool" on 30 Sep 2021 and 25 Aug 2022. This interview was conducted
on 16 Apr 2021.
