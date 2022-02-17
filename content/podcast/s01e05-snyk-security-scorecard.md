---
title: Security metrics and monitoring (Snyk & Security Scorecard)
who: David Mytton & Jean Yang
what:
  "Episode 5 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Snyk - Dependency security monitoring, Security Scorecard - Security 
  health metrics."
season: 1
episode: 5
date: 2021-08-05T08:00:00Z
duration: 14:11
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/d80275f0-4cf4-4fd8-b63b-55ea67ad61b1/audio/c0ac707f-a50e-41e9-b4e3-4f866e21ef59/default_tc.mp3
draft: false
summary:
  Snyk (dependency security monitoring) & Security Scorecard (security health 
  metrics), a devtools discussion with David Mytton and Jean Yang.
metaDescription:
  Snyk (dependency security monitoring) & Security Scorecard (security health 
  metrics), a devtools discussion with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/snyk.io.jpg
topImg2Src: /img/favicons/github.com.png
ogImg: /img/favicons/snyk.io.jpg
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is co-founder of Console. From 2009-2018, David was CEO at Server Density, a
  SaaS server monitoring startup used by hundreds of customers to collect
  billions of time series metrics from millions of servers. He is also a
  researcher in sustainable computing at Uptime Institute and affiliated with
  Imperial College London. David has been a developer for 15+ years.
author2Name: Jean Yang
author2URL: https://twitter.com/jeanqasaur
author2Img: /img/podcast/akita-jean-yang-profile.jpg
author2Bio:
  is CEO of Akita Software. Jean earned her PhD in software correctness and
  programming language design from MIT and then became a professor in computer
  science at Carnegie Mellon University before she started Akita to build the
  future of API observability.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

Episode 5 of the Console DevTools Podcast, a devtools discussion with David
Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software).

Tools discussed:

1. [Snyk Open Source](https://snyk.io/product/open-source-security-management/)
   - Dependency security monitoring.
2. [Security Scorecard](https://github.com/ossf/scorecard) - Security health
   metrics.

Other things mentioned:

- [GNU C Library (glibc)](https://www.gnu.org/software/libc/)
- [Dependabot](https://dependabot.com/)
- [Ngnix](https://hub.docker.com/_/nginx)
- [Linux Foundation](https://www.linuxfoundation.org/)

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console DevTools Podcast, a show all about
interesting developer tools. I'm David Mytton, co-founder of Console.

**Jean:** And I'm Jean Yang, CEO of Akita Software, an API observability
startup. In each episode, we'll discuss two interesting developer tools. We're
keeping this to 15 minutes, so let's get started.

**David:** This week we are focusing on security and have two interesting
tools to discuss from that space.

The first of these is Snyk Open Source, a security monitoring tool that helps
you look at your dependencies and get a view of the security status of
everything. It goes all the way down through your full dependency tree, so you
can actually view the security posture, which means vulnerabilities inside the
dependencies of your dependencies. It is quite interesting to get a view of
everything you're actually relying on all the way down to the operating system
level, and even some of the libraries that the operating system is using, like
glibc. This gives you a proper view of everything that might affect your
security.

The challenge, of course, is what are you going to do about that? The
dependencies that you're actually pulling in to your application you can
obviously update, or you can patch them or mitigate any vulnerabilities. If your
code is relying on some underlying operating system issue that doesn't have a
patch yet, or isn't going to be patched, the question is how are you actually
going to approach that? One of the great things about Snyk is the flexibility it
gives you.

One of my friends was a co-founder of Dependabot, which many of you will
probably have you used through GitHub after the acquisition. My experience with
these kinds of tools is through that, where you get all of these PRs open all
the time, and Snyk just adds multiple options on top of that, so you can choose
how you do the fixes. There's a CLI in beta that allows that to automatically
remediate and fix all the vulnerabilities, which is pretty cool. It gives you
much more visibility than something just like a pull request being opened. How
do you see it, Jean?

**Jean:** I, like you, have only used Dependabot, and I've used it because
it shows up in my GitHub repositories. I'll be honest, normally we don't do
anything unless it tells us exactly what to do, which is pretty often, so that's
pretty good.

I think Snyk has really found the right sweet spot between developer tools and
security in that it's easy to install, it's a scanner, you don't have to do
anything special to use it. The presentation is really helpful. In some way, it
doesn't require deep security expertise. It shows you what's going on. I believe
it does more than Dependabot does, unless I'm missing some dimension of
Dependabot. and it's easy for developers to pick up. It's open source, so you
can just use it.

I have the same question as you. First of all, why would someone use this
dependency scanner over Dependabot, especially when Dependabot is inside GitHub
already, and that's where we host all of our code. I would also love to see more
than just dependency scanning, because I feel like the security dev tools
companies, where they found a home, is license scanning for compliance,
dependency scanning. I know that other things are harder. Code search is
something harder, but Snyk has done such a good job in scanning containers,
scanning dependencies that I wonder how much they can go beyond scanning for
actionable things like automatic fixes and things like that.

**David:** It's really interesting because of the depth that it goes
into. It's true if you just want pull requests opened up with an updated version
string in your requirements file for Python or whatever the module system you're
using, then Dependabot does the job. Snyk goes into the containers to look at
the operating system packages that are underlying them, and it just gives you
much more depth in understanding all of the things that your code is relying
on.

It's a challenge in terms of what you have to do with them next. For example, I
had to a really simple Nginx Docker container that was fully up to date as far
as I was concerned, but Snyk revealed 169 issues, two of which were critical,
but there were no fixes available. That's interesting if I want to mitigate them
myself, but how do you actually approach dealing with that?

**Jean:** Right, so that's my question too because I feel like our
infrastructure vulnerabilities aren't really something we have a lot of control
over. You just either downgrade or wait for the next patch. What we worry about
is, are we exposing data? Are we encrypting everything we should be? Things like
that.

I wonder if it's sort of like getting a house inspection and people saying,
"Well, the ground that your house is on is shaky," but you can't really get a
new ground that your house is on, whereas you can get better windows and doors
and things like that. That's something I'm curious about. Where in a developer's
priorities or a security team's priorities do these bugs actually fall and is it
possible to get to a higher set of priorities by going deeper somehow?

**David:** The relative security scoring was interesting to see because
it helped me understand which issues I should focus on. Those 169 issues, most
of them are not relevant to me, so highlighting just the two that were critical
that I may want to think about was particularly useful. I also liked how it
separates the dev dependencies from production, because although I do want to
fix the dev vulnerabilities at some point, they're not in production, so I'm
going to deprioritize those and focus on other things.

**Jean:** Right, that is helpful. My question, though, is are there 300
more relative priorities that are higher priorities than what you can scan for?

**David:** Exactly. So the question for the audience is what are you
using to manage your dependencies, and do you use anything? How do you know when
there are updates? Let us know on Twitter at the consoledotdev Twitter handle.

The second tool that we're talking about today is Security Scorecard. This is an
open source project that has been released by the Open Source Security
Foundation, which is part of the Linux Foundation. A lot of the development work
has been done by Google. This provides you an assessment report on criteria that
are documented and consistent, so that open source projects can start to adopt
best practices across the industry. It makes it really easy to assess the
security posture of all of the different projects that you rely on, but it's
really designed for the owners of the open source projects to start putting
policies in place to help protect their users.

One of the great things about this is it can scan GitHub, but it can also infer
the dependencies from your NPM, PyPI, RubyGem package names, all that kind of
stuff. As developers, we really need to get a lot better at understanding all
the different components that we rely on in our software. There's certainly been
instances recently of supply chain issues where malicious packages have
appeared. So far the industry has got on with good luck and goodwill of
developers, keeping things up to date. Most of the time people just end up
blindly including dependencies from the different package repositories.

I see two central users for this. The users of libraries who actually just want
to assess their supply chain risk, and then owners and the developers of the
libraries who want to follow the best practices.

My question is who's deciding on these assessment criteria? Google's potentially
a good arbiter of this, and they're accepting contributions to the project, but
some of these may be onerous for very small projects or just individuals who are
developing projects that turn out to be really successful.

**Jean:** I think that's great commentary, David. I think the answer to
who's deciding often in companies seems like not many people at all. Back when
Akita, my company, had more of a security focus, I used to interview a lot of
security teams.

What they said was their own OKRs were often very fuzzy, and imposing metrics on
the rest of the company about what security means. It was often up to them to
define it, and depending on how strong the security team was, they either got
the chance to define it a little bit or not at all. This was something I saw
often.

I love this idea of this out in the open Security Scorecard determined by a
major player like Google saying, "Hey, here's a set of practices that we figured
out and we're giving you a workflow management tool for doing it." This could
really lift the security posture of a lot of much smaller companies.

This is also related to something else I discovered with these security user
interviews, which is companies that have something like a Security Scorecard
really have made a lot more progress in influencing their developers to write
secure code. If you have metrics, you can measure against those metrics and
people are much more incentivized to optimize for them, especially if you gamify
them.

This is a little bit my concern with our last tool, with the security scanning
of the infrastructure. That's something you can do and something you can count
down, but are we getting stuck in a local optimum? Something I really liked
about Security Scorecard is it's counting down some things that you can't
actually measure always in an automated way, but it does seem to be asking a lot
of the right questions. For example, are code reviews in place, is static
analysis in place, is fuzzing in place? Those aren't things that you can always
just auto-detect, but they are nice metrics. They seem to make a lot of sense.
Humans are very metric incentivized people,  so I'm really into it.

One question I had: There's this interesting conversation around when is it good
to use open source software for and when is it good to pay for it? It's really
interesting that this tool is just open source, out in the open.

Will CISOs be incentivized to pick this up because it seems like it's much more
of a goodwill thing, than a chief information security officer being able to
point to it: "Well, there was a leak, but I used this open source scorecard
system and everything was fine."  What happens is a company making a scanner is
taking on not just the role of scanning, but they're taking on the liability. In
my view, this is why you end up with a lot of scanners that aren't actually that
useful; but they're taking on some of the CISO's liability, where something like
this is very useful, but it may not be taking on that much liability from a CISO
perspective.

**David:** What do you think the responsibility of modern developers is
for security? Tools like Snyk and Dependabot are putting developers in charge of
merging pull requests and dealing with the vulnerability reports, basically
moving away from the idea of having a security team that forces best practices
on the organization and perhaps building a split like we've seen with DevOps and
SRE. You have specialists SRE teams responsible for the platform and for
reliability, and they might come in on almost like a consulting basis to advise
engineers, but really...engineers, you build it, you run it, and now you've got
to secure it.

**Jean:** Seeing security as something after the fact only made sense if
you're securing infrastructure, not code. If you think about what happens in
code and it is considered as security vulnerabilities, like injection attacks,
memory leaks, using dependencies that you shouldn't be able to, a security team
can't just shut that off because that breaks the functionality of your code.

Security is very much something that you can't just scan infrastructure for.
Security is very much something that's tied to the code. Developers should have
responsibility because that's where it falls. That's where I see the tension
with modern tools, because pretty much all of the successful commercial security
tools are scanning tools. Many of those security bugs that a developer has
control over are deeper. I think this relationship needs to evolve, but I don't
know what has to happen for it to do so.

**David:** Making security developer friendly is something we were
talking about earlier, and I think that has been a big success of a Snyk and
their approach to it.  Rather than developers using a tool they don't actually
want to use, this comes down to the developer experience across all tools.
Making a product that developers actually want to use is probably one of the
biggest barriers for any adoption of any kind of best practice.

**Jean:** Yeah, absolutely.

**David:** So if you're developing an open source project, tell us how
you're managing the governance of things like pull requests and who's involved
in the organization.

**Jean:** And tell us how you balance this with other priorities and what
can help.

**David:** Alright, that's it for this week. Please tell a developer
friend about the podcast if you enjoyed it, and remember to look at the weekly
Console newsletter with the best tools and beta releases for developers at
console.dev.

**Jean:** Please talk to us, tell us what you want to hear about
@consoledotdev. You can also find me @jeanqasaur on Twitter, and you can also
read more about my company @AkitaSoftware on Twitter as well.

**David:** Thanks. See you next week.

{{</ box-collapsible >}}
