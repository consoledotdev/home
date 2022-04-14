---
title: Interview with Julien Danjou, Mergify
who: Julien Danjou
role: CEO
org: Mergify
what: A tool for automating GitHub pull requests.
tags: ["Code review"]
date: 2021-10-28T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Julien Danjou, CEO, Mergify
isPage: interviews
topImg1Src: /img/interviews/mergify-julien-danjou-profile.jpg
topImg2Src: /img/favicons/mergify.com.svg
ogImg: /img/interviews/mergify-julien-danjou-desk.jpg
---

### What is Mergify and why did you build it?

[Mergify](https://mergify.com/) is an automation tool for GitHub pull requests,
with a merge tool behind it.

My co-founder, Mehdi Abaakouk and I used to work on
[OpenStack](https://www.openstack.org/), where they don't use
[GitHub](https://github.com/) or anything similar. Their own development system
is based on [Gerrit](https://www.gerritcodereview.com/), which is a review
system from Google.

We were used to a certain workflow involving automation, such as a merge queue,
where you rebase pull requests on top of each other. We were used to using that
process, then we switched one of our projects from this platform,
[OpenDev](https://opendev.org/) to GitHub. When we arrived on GitHub, we were a
bit frustrated because there was nothing like the automation, work queue, or
merge queue, so we decided to scratch our own itch, and ended up building
Mergify out of that. Funnily enough,
[GitHub recently announced](https://github.blog/changelog/2021-10-27-pull-request-merge-queue-limited-beta/)
that as a feature in beta!

We started with auto-merge which enables you to merge a pull request as soon as
the CI passes, and as soon as it's approved by reviewers. Then we added rebase
functionality which allows you to align pull requests on top of each other after
being merged, so they're re-merged. We started three years ago because we needed
the system. We were the first users of Mergify.

### What benefits do those two features bring to developers?

Having a way to automate everything means you don't have to wait for the CI to
finish. The typical use case is that you or your colleague are doing a PR,
saying, "Hey, can you review it?" You review it, you approve it, and then you
realize that the CI did not finish because your CI takes more than an hour. This
is stupid because it's ready, it has the right label, it has the right approval,
it has the right CI passing, whatever your rules are.

When you use something like Mergify, you actually write code to define your
merge policy. It's automated, so you don't have to wait for anything.

The other challenge is where a PR is sitting waiting for review for some time.
CI passed too long ago so in the meantime, you've merged a lot of things in the
main branch and your PR is outdated, code-wise. It's still green, the CI said,
"It worked one week ago, so it's fine to get merged." You approve it, you merge
it, and after that, you see problems arise because of the changes that were
merged in between.

As we see more and more people deploy automatically from the main branch, you
also want to ensure that the PR stays up to date with main. This is essential to
get the velocity where you can deploy 10-20 times per day.

### What does a "day in the life" look like?

It's chaotic. It changes every day, but most of the time I start my day by doing
code reviews. I do a lot of code reviews to make sure I know what's going on,
and so I don't block other people who might be waiting on me. I don't
necessarily take the time to write a lot of code nowadays, because there are so
many things to do when you run a company. The rest of my time is spent talking
with customers or potential customers who are interested in what we're doing at
Mergify. I will also spend time planning the product and the roadmap.

### What does the team look like?

We are six people now. Two people in marketing, reaching out to people, writing
blog posts, etc., and then we have three people working on the product, plus me.

### How did you first get into software development?

I started coding in C when I was 14 years old, next I learned Perl and Bash. I
spent a lot of time coding in Perl in my early days. I also started to explore
things like Linux.

I switched to Python about 10 years ago. I was curious about learning about
object-oriented programming, but I was not doing that on Perl, so I learned
Python. I’ve stuck to Python since because it's easy to write anything.

### What's the Mergify tech stack?

We're using a lot of Python. We use some PostgreSQL. We don't use it as heavily
because we don't store a lot of data in it, but we are big fans of PostgreSQL.
We're also using Redis a lot, because it's easy to use and really powerful.

### How do you interface with Git?

We use the GitHub API to do most of our operations when you're automating with
Mergify. There are some things where we do things GitHub doesn't know to do -
more advanced git commands. In that case, we call the git binary directly. It is
a bit heavy in the sense that you have to call out to the binary, but so far
it's worked pretty well for us.

For example, we'll do a Git clone of the repo with the right settings, then
we'll do whatever we need to do to build the right branch and the right tree for
you, and then push that back to GitHub.

### What's been the most interesting development challenge building Mergify?

I think it's been working with the GitHub API because we use them heavily. We
use every corner of the API. A lot of our job is talking with GitHub tech
support and engineers because we are regularly finding bugs in the GitHub API!
We use it in a way nobody does.

Once, one of the GitHub engineers reached out to us, because they broke
something and we were the only user of that API. It's very interesting because
you get a lot of access to Git via their API, but not many people use it!

One of the big challenges is working with the GitHub API rate limits. We
automate a lot of git actions for you so that necessarily means calling the
GitHub APIs. We have to be able to access the latest state for things like pull
request labels, files, CI status, git tree, etc. With a limit of 5,000
requests/hour that can be really difficult. We cache a lot of things!

So for us, it’s not a fancy algorithmic thing, but it's the reality that when
you deal with another system from other people, it's really challenging to make
them work in the way you want and to not break, which results in a lot of time
and effort.

### What's the most interesting tech you're playing around with at the moment?

We recently added some APM. We're using Datadog for this. We didn't use APM at
the beginning but when we started to use it, it gave us a lot of insight into
the software we wrote.

You think your code does one thing, but in reality, it does something completely
different. We got a lot of insights, learning what happens when your code runs
and what you could do better, or you could implement it in a different way that
would make things faster or more optimized. We realized that some of our old
code was not doing the right thing, which is easy to miss.

Generally, testing against third party APIs is difficult. The rate limit makes
it impossible to just run the real code against the real APIs. Our approach is
to run the requests once, record them, and then replay for subsequent tests.
Having something like APM is really useful in that sense - it gives you a lot of
insights into your software and shows you what it does for real!

### Describe your computer hardware setup

I'm using a 13” MacBook Pro, but I should upgrade to a new M1 soon because this
one is getting slow. I use my laptop with two screens and a standard Apple
keyboard and a mouse.

{{< img-center src="/img/interviews/mergify-julien-danjou-desk.jpg" alt="The desk of Julien Danjou, Mergify" width="100%" >}}

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail via [Mailplane](https://mailplaneapp.com/) for work and
[Gnus](http://www.gnus.org/) for personal emails.

**Chat:** Slack.

**IDE:** Emacs.

### Describe your desk setup

I wish I had a standing desk. We have invested in good chairs from Steelcase as
it’s important to have something decent when you spend eight hours a day on it,
but nothing else special right now.

### When coding

**Daytime or nighttime?** Nightime.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I run, which I do as often as I can, and I enjoy cooking a lot, usually spending
an hour or so every day cooking something.

### Find out more

[Mergify](https://mergify.com/) is a tool for automating GitHub pull requests.
It was originally featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 25 Nov 2021. This interview was
conducted on 28 Oct 2021.
