---
title: Interview with Chris Walz, bit
who: Chris Walz
role: Developer
org: bit
what: A modern git cli.
tags: ['git']
date: 2021-03-04T12:00:00Z
draft: false
summary: Interview interview with Chris Walz, Developer, bit.
isSelected: interviews
topImg1Src: /img/interviews/bit-chris-walz-profile.jpg
topImg2Src: /img/interviews/bit-chris-walz-logo.png
ogImg: /img/interviews/bit-chris-walz-desk.png
---

### What is bit and why did you build it?

I created [bit](https://github.com/chriswalz/bit) out of frustration with the
Git CLI. If you ask anyone new to the development community, they’ll say it is
a really big challenge to get ramped up on Git, and if you ask an experienced
dev they will tell you they still need to Google stuff about it. The main goal
is to save developer time. Bit is a solo open source project. I received input
from co-workers and fielded feedback from Hacker News and Reddit, but largely
it was just me developing it.

I saw potential in the concept and felt it would resonate with the hacker and
Golang communities. After building a prototype I felt I was ready to market it
through social media websites like Reddit and Hacker News. I also gave some
thought to the post title to make sure that people would upvote it by
researching what had been popular historically. I realised that images and GIFs
are great. Humans are naturally visual people, so it's helpful to have
something that sort of just pops out. The GIF in the readme shows the
autocomplete commands which shows how bit is different right from the start.

{{< img-center
src="/img/interviews/bit-chris-walz-product.gif"
alt="bit product screenshot"
width="100%"
caption="bit autocompletion of common git commands."
>}}

### Why did you write bit in Golang?

I like Golang a lot, it has some nice properties. For example, it's completely
self-contained, which is even more so with [Go
Embed](https://golangtutorial.dev/tips/embed-files-in-go/), since you can embed
static files into the binary. It is also easy to implement parallelization or
Go routines, which I often use. Not to mention Go has the fewest number of
keywords at 25.

I prefer Go to Java, as there's no first class functions in Java, which I've
always found frustrating. As a result, I write all of my side projects in Go,
such as bit and [GoSecret](https://www.gosecret.io/). GoSecret is a
side-project that allows you to send a disappearing message on any
communication channel. If you want to send a sensitive message on Slack, you
can write a message in GoSecret, and it will create a link. You send a link,
and then once the recipient views the message it will disappear forever.

I also have a project which I'm working on in collaboration with my brother
called [ReconBuddy](https://reconbuddy.com/) (in Beta). This is a tool for open
source intelligence (OSINT). Enter your website address and it will show you
potential risks for your website.

### How did you first get into software development?

I started in high school through a computer science introduction class. When I
started out, I thought I was really bad at coding, and struggled to make sense
of it. So when I went to college, I opted to do accounting and then soon after
finance since accounting was a bore.

All the while a lot of my friends were studying programming or engineering, and
it was through them that they made me want to give it another try. I read
[Java’s “Really Big
Index”](https://docs.oracle.com/javase/tutorial/reallybigindex.html) and
suddenly it made complete sense. Something just clicked. I’ve been coding ever
since and finished college with a computer science minor.

While at college I built an Android game because I love video games, and won a
competition hosted by Google. I ended up interning at Google and then after
graduating I started a fintech job which marked the beginning of my CS career.

From Java, I got into full stack development and learned React + Redux. I also
do a lot of full stack development, so I’m very familiar with JavaScript,
Typescript, Redux, Postgres, Java and Spring. One day maybe I’ll get a Go
job, or start my own company and finally be able to do it my way.

### What was the most interesting challenge building bit?

There have been many challenges along the way.

I originally planned to dynamically retrieve autocompletions programmatically
by simulating tab completing a git string. However, there's actually no way of
doing that, because you'd have to run it in the shell specific to that command.
Pressing tab doesn't really work, so I recorded a [macro
recording](https://www.macrorecorder.com/) that just went through all the Git
commands and literally pressed tab, and copied that huge output. Next, I wrote
[a Go
program](https://github.com/chriswalz/bit/blob/d895cdcbdf84cb50b6b669561c1cba9c1589d173/scripts/parse_zsh_output_and_generate_suggestions_tree.go)
that parsed the output from all the tab completions from ZSH, and outputted it
into a Go source file.

If you look at the GitHub for Bit, there's [this one file that is a massive
tree of
completions](https://github.com/chriswalz/bit/blob/d895cdcbdf84cb50b6b669561c1cba9c1589d173/cmd/code_generated_src.go),
and it's generated by the program. Solving this problem was a huge pain, but
hopefully I can apply the same approach to other CLIs.

### What is the most interesting tech you are playing around with at the moment?

[Argo](https://github.com/argoproj/argo-cd/) is a cool tool. It's also written
in Go. You can run it on top of Kubernetes and it's a way of describing complex
pipelines in YAML. I know people don’t like YAML, but it is still cool that you
can represent a fairly complex pipeline in YAML which is the power of Argo.

Additionally, I’ve been trying to resurrect some old family photos from the
1920s using [an image restoration
tool](https://github.com/microsoft/Bringing-Old-Photos-Back-to-Life).

### Describe your computer hardware setup

{{< img-center
src="/img/interviews/bit-chris-walz-desk.png"
alt="The desk of Chris Walz, bit"
width="100%"
>}}

**Computer:** MacBook Pro 2015.

**Chair:** [Herman Miller
Aeron](https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/).

**Desk:** [WorkFit-TL Standing
Desk](https://store.ergotron.com/stand-up-desks/workfit-tl-sit-stand-desktop-workstation.html).

### Describe your computer software setup

**OS:** macOS Big Sur.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack for work, Discord for gaming

**IDE:** [GoLand](https://www.jetbrains.com/go/)

### When coding

**Daytime or nighttime?** Night Time.

**Tea or coffee?** Coffee.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I enjoy gaming, table tennis, hiking, listening to music and of course Netflix.
Fun fact: My friend and I were the number one 2v2 team in Starcraft 2 when we
were seniors in high school!

### Find out more

[bit](https://github.com/chriswalz/bit) is a modern git client. It was featured
as an "Interesting Tool" in the [Console newsletter](https://console.dev) on 18
Mar 2021. This interview was conducted on 4 Mar 2021.
