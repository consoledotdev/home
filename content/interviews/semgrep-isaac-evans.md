---
title: Interview with Isaac Evans, Semgrep
who: Isaac Evans
role: CEO
org: Semgrep
what: Code analysis.
tags: ["Code analysis"]
date: 2022-01-26T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Isaac Evans, CEO, Semgrep.
isPage: interviews
topImg1Src: /img/interviews/semgrep-isaac-evans-profile.jpeg
topImg2Src: /img/favicons/semgrep.dev.png
ogImg: /img/interviews/semgrep-isaac-evans-profile.jpeg
---

### What is Semgrep? Why did you build it?

[Semgrep](https://semgrep.dev/) is `grep` that is optimized to match very
closely the syntax of each language that it supports. If you're writing in Ruby,
the code that you write is going to look very close to Ruby. If you're searching
Python, it's going to look very close to Python.

Imagine that you're trying to find a function named foo that has one as the
first argument. In most languages, you would just write foo(1). The cool thing
about Semgrep (the name stands for semantic grep) is if we want to find not just
all the cases where you have that literal string, but it would also imagine you
had:

```pseudo
const x = 1
var y = 2
foo(x)
```

Semgrep should match as well.

One of our early employees was the first program analysis hire at Facebook. He
was an early engineer there, and that's where Semgrep originated. [Yoann
Padioleau](https://github.com/aryx) built it at Facebook where it was called
`sgrep`. Even there, it was the successor to a system that he worked on at
Inria, the research institute in France called
[Coccinelle](https://coccinelle.gitlabpages.inria.fr/website/), which it
described as a system for semantic patching.

### Where would developers want to use this?

There’s a few cases worth highlighting. The most basic is using Semgrep for
one-off searches. Somebody has even made an integration to VS Code where you can
replace their built-in search with Semgrep. We have a pattern syntax e.g.
searching for foo(1), that's a pattern. We have a way to compose patterns and
actually mix and match them with other patterns. You can create many
combinations of patterns, and you can even create patterns that switch languages
within the pattern.

You could extract this section of an HTML document, and then treat that section
as a JavaScript pattern, and then treat some content inside there as just a
regular string, and write a Regex pattern on top of that. There's a level of
compose-ability.

However, I think where it really shines is where we see linter type use cases.
For example, if there’s an API v1 that everyone's using. I want to show people
we should use API v2, Semgrep actually has support for an auto fix operation.
It's not just “Find”, it's also “Find and replace”, so you can go through and
make those transformations. You can write a rule that says: anytime I see
somebody calling v1, suggest v2, and give them this message with context about
it. Thanks to our fantastic program analysis team, we can go beyond what would
typically be in scope for a linter tool, and bring in things that have
traditionally been available only in the more expensive commercial security
products like taint tracking.

The primary commercial use case is security scanning; using code search to find
interesting security issues. It is where we see the heaviest adoption, where
people are replacing their traditional security scanning tools. A linter rule
works well for pre-agreed conventions, but not for other types of code use. One
of the most common things is if you are looking for misuse of your authorization
or authentication framework. For example, if you've got some scary function that
could be ‘promote to super user’, you could write a Semgrep rule that's, "Who
called that and didn't call our authorization layer before they called it?" That
tends to make a lot of vulnerabilities just drop away.

It is very cool to see what the community has done, and we have a giant open
source repository of Semgrep rules that accompanies the tool. We've got
contributions from everyone from security consultancies like
[NCC](https://www.nccgroup.com/uk/) and [Latacora](https://www.latacora.com/) to
random people who have a very deep and specialized knowledge of some interesting
security facet.

### What is the relationship between the open source project and the business?

Semgrep is open source and not open core - it is fully LGPL. The business side
is true SaaS - Semgrep App. If you have set up Semgrep and been using it for
your custom linting or maybe some custom security checks, Semgrep App first
provides a free tier that has all of the rules and automation to be able to use
this on GitHub and GitLab.

Things like comments on the pull requests are enabled by a central server, which
can provide those sorts of integrations. Our goal is to make it something that
makes it easy to set up. If you are trying to figure out what to test for with a
baseline of security, the SaaS service will walk you through setting that up and
make it easy to deploy it across a bunch of repos.

One of the trickiest things are policies. Anyone who has worked with a linter or
had a linter imposed on them by someone else on their team can speak to how
frustrating it can be to have a rule that you haven't agreed on or gotten buy-in
on. When you think about the matrix of a company with thousands of projects, and
there are thousands of Semgrep rules, figuring out which ones are actually high
signal to enable becomes very tricky.

Semgrep App’s dashboard tracks things like the fix-rate and developer feedback
on the rules, to give signals. It's not just ‘enable this rule’ or ‘disable this
rule’. You could fork the rule and add some exclusionary clauses that make it
much more precise in the context of your company, which is not something that
you can do with a traditional security tool since they tend to be more black
box.

## What does a "day in the life" look like for you?

I always wanted to be the CTO of a startup, not the CEO! When I was talking with
my co-founder right after I signed the incorporation paperwork, we decided that
this division made a bit more sense.

My days are fairly meeting heavy. I'll usually have at least one or two
one-on-ones, although often they're concentrated on a single day of the week,
and team check-ins where we look at longer-term plans and what our priorities
are.

I also have an internal, global top priority list, which is what are our
initiatives that I'm pushing forward? For instance, one of the things right now
is, how can I encourage more over-communication amongst members of my team?
These days, that is more related to marketing, hiring, and product.

I really enjoy hearing about how people have used Semgrep, so we have a
community Slack where I can just see bug reports coming in or issues that people
are having. That's one of the coolest things about being an open source product.
We get so much direct, raw feedback from the users - you're talking about ground
truth.

Seeing the intersection of open source and business is interesting because you
realize that the open source model has a lot of advantages over a traditional
world, where the sales engineer talks to the account manager, talks to the
program manager, talks to the product manager? Here, we're all talking on GitHub
issues.

### What does the team look like at the moment?

We're heavy on engineering. There are three groupings on the engineering side.
The engine team, which is basically program analysis. The rules team, who are
trying to create a good standard library of rules that people can use, and
there's some work going on to make it easier to reuse components from one rule
in another rule as well. There’s the app team, who are covering the SaaS
product. There's a split in this team, with one side focused more on authorship,
i.e. how do we make it really easy for a new user to come in and write a Semgrep
rule for the first time, and a findings team, which is really focused on
ensuring that we give people good results in this final culmination of output.

Alongside engineering, we’ve also got a marketing, sales, and very small
operations and recruiting team.

### How did you first get into software development?

This is a funny question because my dominant memory of how I originally got into
it was because I felt like I was very behind all of my friends who knew HTML,
and I didn't! I went to the library, checked out a book, opened up Notepad and
Internet Explorer and started making websites. This was more out of social fear
of falling behind.

My more formative experiences were really around robotics. Lego built a pretty
cool robotics system called
[NXT](https://education.lego.com/en-us/downloads/retiredproducts/nxt/software),
and it had a ‘what you see is what you get interface’, where you would drag
blocks together to do programming. I found someone had created a C-like language
called [NXC](https://en.wikipedia.org/wiki/Not_eXactly_C), and a compiler for it
that you could use to target it. That delighted me.

### What languages do you use?

In those early days, it was a lot of C. The NXC language was C-like, and I was
very fascinated with cryptography, so I wrote a lot of terrible cryptography
programs in C. Now knowing what I know, no one should ever use C for
cryptography!

These days, we use a lot of TypeScript for Semgrep, which is fantastic. I feel
like Typescript is the ultimate proof of [Donald
Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)'s aphorism that programming
languages are just another form of pop culture. JavaScript became so popular
because of the web, even though objectively it had so many failings as a
language. It has now created a community that has the resources to do incredible
things like the TypeScript compiler, which I would describe as state of the art
in both type theory as well as user experience.

On the back end, we write typed Python, which is very accessible. At the start
we wrote in Scala. We had a massive transition moment where we realized we'd
hired a team that really was not comfortable or excited about contributing to
the Scala code base, and we ended up falling back to Python because of its
suitability for rapid prototyping and ease of understanding.

### What is the most interesting development challenge you've faced working on Semgrep?

The most interesting one has been the strategic decisions we’ve taken. When you
have a tool like Semgrep, you can go deep or you can go broad. You can say we
want to get really good at analyzing C and C++. There are many competitors in
that space, like [Coverity](https://www.synopsys.com/software-integrity.html)
and [Veracode](https://www.veracode.com/), who have built very deep analysis
engines that can answer very complex questions like: we've got this line of code
on file here - is it possible that it could affect something 20 files away?

When you consider the entire project, we decided not to do that. We decided to
make a condition that Semgrep would only analyze within a single file. That
means that it's much more parallelizable and much more performant, but it has
limitations compared to the traditional world of static analysis tools.

We were doing that, and we knew that we wanted to go very broad, so we wanted to
add support for as many languages as possible and not just traditional
programming languages. We wanted to be able to write rules for Docker files,
Bash scripts and Terraform configs. We had some cool moments where [Mitchell
Hashimoto](https://twitter.com/mitchellh?lang=en) from Terraform, actually
contributed grammar to the parser library that we're using.

We originally supported four languages, and now we support 27 without creating
an incredible maintenance burden as languages evolve and add new features. How?
There's a community project named
[Tree-Sitter](https://github.com/tree-sitter/tree-sitter) that we had heard
about that we decided to make a bet on. It is also contributed to by GitHub.

The unique thing about Tree-Sitter is that it creates parsers that are
incremental and have zero dependencies. Imagine you are editing a one-gigabyte
file in your editor, and you insert a character. You would rather not have to
re-parse one gigabyte of code. You would rather be able to just update the tree.
You're parsing raw text into an abstract syntax tree with your parser. If you
were going to parse Ruby, typically you would install the Ruby runtime, and use
the Ruby facilities to parse it, but that's a huge pain because if you're going
to support 27 languages, you have to install 27 different runtimes.

If there's a different version of the Ruby spec, you may need to have multiple
versions of it installed in order to perform the parsing. Tree-Sitter allows you
to define grammar in a DSL, and then Tree Sitter compiles it into a C program.
We link against the C programs via an [OCaml to C
bridge](https://github.com/returntocorp/ocaml-tree-sitter-core) that we wrote.
It has also been just a fantastic source of collaboration with GitHub. The
Neovim community it turns out are big users, as well as many other very, very
talented contributors. Switching from the Facebook era parsers to that was a
very difficult undertaking.

### What is the most interesting tool or product that you've been playing around with recently?

Over Christmas break, I worked on a personal iPhone app where I tried using
React Native for the first time, which was quite interesting. I also tried using
an on-device TensorFlow model, and an on-device Pytorch model. I have written an
iPhone app in Swift before, so was really because I just wanted to try React
Native.

We use React on the front end with TypeScript for Semgrep App and the website. I
wanted to see how good React Native was. Is it production-ready? Which of course
it is, but production-ready for others than Facebook?

It ended up being this confluence of things where you've got the TensorFlow
model, which is being loaded by JavaScript and React Native, but then you need
to talk to native iPhone APIs. You also have to have a React Native JavaScript
interface to an objective C module, which then talks to your Swift code, which
is talking with APIs!

Mobile development has gotten a lot better with React Native. I also learned a
lot about MobileNet, a local neural network model hyper optimized for running on
phones in terms of performance, but it's still not as good as the web in terms
of accessibility to other programmers. It was a very fun project that touched a
lot of parts of the stack.

### Describe your computer hardware setup

I've been a digital nomad during the pandemic, so I've given up a lot of the
niceties of my original setup in exchange for a much more portable setup. No
external display, no external keyboard, but I do have a very nice large 16 inch
[M1 MacBook Pro](https://www.apple.com/uk/shop/buy-mac/macbook-pro), which is
great. I also carry around a nice [Logitech
mouse](https://www.logitech.com/en-us/products/mice.html) that I can just throw
into a backpack.

We spent some time with my parents, and then my wife's parents. We road-tripped
west to east across the US a few months after the outbreak started, then, we
spent a few months in Hawaii which was really lovely. This year we've made plans
to bounce around various areas inside California.

### Describe your computer software setup

OS: Normally, I would dual boot Windows just to have the flexibility, but
because this MacBook Pro is now an ARM system, Windows for ARM is not yet
available. So it's strictly Mac OSX.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** [VS Code](https://code.visualstudio.com/), but I still use Emacs when I
want macros.

**Source control:** Git.

Since we're a security company, there's some additional special software that I
use for security purposes.

I use [1Password](https://1password.com/) as a password manager, [Little
Snitch](https://www.obdev.at/products/littlesnitch/index.html), which is a
host-based firewall for macOS, and I use
[Parallels](https://www.parallels.com/pd/virtual-machines-for-mac/) for VMs. I
have a strict policy around just not installing third party software unless I
can absolutely help it. So I will run it in Parallels. I will run it in Docker,
and as a fallback, I will install it through the Mac App Store. As a lower
fallback, I will install it through [Homebrew](https://brew.sh/), which does a
decent job of pinning as well.

We also use [YubiKeys](https://www.yubico.com/) for two-factor authentication.
The craziest thing I do is that on my Chrome corporate profile, I run with
JavaScript disabled by default, and I just have a big white list.

### Describe your desk setup

The large MacBook Pro and [Bose](https://www.bose.com/en_us/index.html)
headphones and [AirPods](https://www.apple.com/airpods/) are pretty much the key
to making it work everywhere. I did have a desk that was literally a bunch of
cardboard boxes in a garage for a few months, which I actually liked. I think
adjustable standing desks are the best, and the key to a happy work setup, for
myself.

{{< img-center
src="/img/interviews/semgrep-isaac-evans-desk.png"
alt="The desk of Isaac Evans, Semgrep"
width="100%"
>}}

### When coding

**Daytime or nighttime?** Daytime, especially morning.

**Tea or coffee?** Tea.

**Silence or music?** Music.

### What non-tech activities do you like to do?

While we were in Hawaii, because of the time zone difference, it made it easy to
get up early at 5am and be done with work by 3pm. I would then go scuba diving,
free diving (which is like scuba without equipment), trail running, and surfing.
Those activities were on heavy rotation.

### Find out more

[Semgrep](https://semgrep.dev/) is a static code analysis tool. It was featured
as an "Interesting Tool" in the [Console newsletter](https://console.dev) on 10
Feb 2022. This interview was conducted on 26 Jan 2022.
