---
title: Security
who: Thomas Ptacek
whoLink: https://twitter.com/tqbf
role: Developer
org: Fly.io
orgLink: https://fly.io/
what:
  In this episode we speak to Thomas Ptacek, currently a software engineer at
  Fly.io and previously a co-founder at security firms Latacora and Matasano
  Security. We discuss the state of software security in sectors like energy and
  healthcare,  how software developers should think about supply chain risk, and
  what they should do about securing their dependencies. We also explore how
  security threats have changed over the years, and what developers working on
  open source should do to improve their own security.
season: 2
episode: 2
date: 2022-01-13T07:05:00Z
duration: 32:13
draft: false
summary:
  Security - a devtools discussion with Thomas Ptacek (Fly.io). Episode 2
  (Season 2) of the Console DevTools Podcast.
metaDescription:
  Security - a devtools discussion with Thomas Ptacek (Fly.io). Episode 2
  (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcasts/fly.io-thomas-ptacek-profile.jpg
topImg2Src: /img/favicons/fly.io.png
ogImg: /img/podcasts/honeycomb-charity-majors-profile.jpg
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is co-founder of Console. From 2009-2018, David was CEO at Server Density, a
  SaaS server monitoring startup used by hundreds of customers to collect
  billions of time series metrics from millions of servers. He is also a
  researcher in sustainable computing at Uptime Institute and affiliated with
  Imperial College London. David has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode we speak to Thomas Ptacek, currently a software engineer at
[Fly.io](https://fly.io/) and previously a co-founder at security firms Latacora
and Matasano Security. We discuss the state of software security in sectors like
energy and healthcare, how software developers should think about supply chain
risk, and what they should do about securing their dependencies. We also explore
how security threats have changed over the years, and what developers working on
open source should do to improve their own security.

{{< rich-title-5 icon="future-head" >}}Thomas Ptacek {{</ rich-title-5 >}}

Thomas Ptacek is a leading security researcher. Best known as one of the
co-founders of Matasano Security, which was prior to its acquisition by NCC
Group one of the largest software security firms in the US. Working in software
security since 1995, Thomas was a member of the industry’s first commercial
vulnerability research lab - Secure Networks. Thomas is currently a software
engineer at Fly.io

### Highlights

{{< podcast-episode/clipping time="01:37"  >}}

**David Mytton:** What's your take on the current state of security in these
types of industries?

**Thomas Ptacek:** I guess it's a bit of good news and a bit of bad news. The
bad news is kind of the same bad news no matter who we're talking about, which
is, again, computers are garbage. Especially software. All software is trash.
So, the basic problem that everyone faces is no matter kind of what industry
you're working in, even if it's a heavily regulated industry, even if it's kind
of inconceivable that you could have terrible vulnerabilities and the sky would
not be falling or whatever, they're all built on the same basic couple of
software stacks. And those stacks were all generally kind of conceived of in the
1990's and early 2000's. And they're riddled with security vulnerabilities.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="21:15"  >}}

**David Mytton:** For developers working on open source, and on their own
projects, what can they do to improve the security of those projects for their
users?

**Thomas Ptacek:** Well, I don't want to be too patronizing, but the first thing
I'd say is work in a memory safe language. I think there are big classes of
vulnerabilities that you can get around just by working in modern languages that
don't have these problems.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" >}}

**David Mytton:** Welcome to the Console Podcast. I'm David Mytton, co-founder
of Console.dev, a free weekly newsletter highlighting the best and most
interesting tools for developers. In this episode, I speak with Thomas Ptacek ,
currently a software engineer at Fly.io and previously a co-founder at security
firms Latacora and Matasano Security. We discuss the state of software security
in sectors like energy and healthcare. How software developers should think
about supply chain risk and securing their dependencies. How security threats
have changed over the years. And what developers working on open source should
do to improve their own security. We're keeping this to 30 minutes, so let's get
started. I'm here with Thomas Ptacek: . Thomas, thanks for joining the Console
Podcast.

**Thomas Ptacek:** Thanks for having me on the Console Podcast.

**David Mytton:** Let's start with a brief background. Tell us a little bit
about what you're currently doing and how you got here.

**Thomas Ptacek:** I'm an engineer. I'm a developer at a company called Fly.io.
We're a fun way of running applications in the cloud, close to users. I can talk
more about what Fly does. I get the sense that when people want to hear from me,
they're generally interested in security stuff. I've been doing software
security since the mid 1990's. So, as a vulnerability researcher and as a
security consultant and doing lots of security work for startups as well. So, my
background is kind of heavily in finding vulnerabilities and working with
especially small tech companies to kind of navigate that whole space and figure
out what to do about that whole landscape of things. Everything's being broken
everywhere and all software being garbage. That's kind of my portfolio.

**David Mytton:**So, when we think of tech companies, we generally think of the
big names like Apple, Google, Microsoft, and Amazon. These are companies that
build software as part of their core business. And even though they invest
billions of dollars into security every year, there are regular major security
vulnerabilities in their products. I wanted to start a little bit outside of
this and talking about companies that use technology and software, but to help
them deliver on some of their core business like energy, transports, or
healthcares. Sectors where they might not have billions of dollars to spend on
security. What's your take on the current state of security in these types of
industries?

**Thomas Ptacek:** I guess it's a bit of good news and a bit of bad news. Right?
The bad news is kind of the same bad news no matter who we're talking about,
which is, again, computers are garbage. Especially software. All software is
trash. So, the basic problem that everyone faces is no matter kind of what
industry you're working in, even if it's a heavily regulated industry, even if
it's kind of inconceivable that you could have terrible vulnerabilities and the
sky would not be falling or whatever, they're all built on the same basic couple
of software stacks. And those stacks were all generally kind of conceived of in
the 1990's and early 2000's. And they're riddled with security vulnerabilities.
We've barely kind of come to grips with how to build software with even a
modicum of just basic security promises. Like if I can talk to it, I can't run
remote code on it. Right?

**Thomas Ptacek:** That's a problem we've barely figured out how to deal with.
The bad news is that if you're working on infrastructure or a regulated
business, or especially in places like energy or utilities or things like that,
you're facing a lot of the same problems, basically all of the same problems,
that everyone else does. But the kind of the subtext I get there is those are
places where technology is kind of a cost center. It's not the core thing that
people are building. It's something that people are taking advantage of to
reduce costs and things like that. And what that tends to mean is that those
companies, don't staff. Less so security people and more the kind of developer
that keeps kind of abreast of changes in how we're building software to make it
more resilient. So, in my previous life as a security consultant, I did kind of
a fair bit of work with large regulated companies, financial exchanges, energy
companies, and things like that.

And they're not less exposed to vulnerabilities than smaller tech companies. The
good news kind of is those companies tend to have more resources than a typical
startup does. And so there's a whole cottage industry of delivering kind of
consulting and security work, especially for people in the energy and the
transport sectors. There are whole well known security practices that just exist
to do security audits of trains and things like that. I don't know. Is there a
particular kind company in that space that you're thinking of? What's the model
of the small company that doesn't have ten million dollars to spend on security
consulting this year?

**David Mytton:** Right. So, I suppose we're hearing all the time about state
sponsored cybersecurity on critical infrastructure and that often centers around
the idea of shutting down the electricity grid is the big catastrophe that's
potentially out there. Do you think that is the right thing to be focusing on?

**Thomas Ptacek:** I'll say two things. Right? The second thing I'll say is
something that everyone's heard already before, and I don't have any real unique
insight to offer for it. The little bit of insight I can say here is that when
we think about things like shutting the electricity grid down, that's not an
overblown theory of what could happen. Right? There's good reason to believe
that attacks like that are totally viable. They're probably more viable than we
think they are. They're probably more viable today than they were 10 years ago.
So, like 10 years ago, when we were thinking about shutting electricity grids
down, we might have been thinking about somehow infiltrating the network of a
power grid operator and then blowing up a transformer by getting a remote code
execution on a controller somewhere. Or hitting directly a bunch of smart meters
and doing a remote shutoff on every smart meter in the area.

Those attacks were probably viable. They were certainly viable 10 years ago.
Maybe they're less viable now, but what we see now is back office attacks.
Right? I sound like a salesperson for a security product company. And I promise
I'm not a nihilist or a salesperson on any of this stuff. I'm really jaded about
all of it. But also I think it's becoming clear to us that we can shut down
companies like private companies that are offering these services just by
shutting their back offices down. Just taking down the computers that
administrative assistants are using to do data entry and things like that. If
you shut people's business operations down, you can shut those things down as
well. So, part of me thinks that we're not paying enough attention to it. And
then the obvious thing to say here, though, is that there's a reason this
doesn't happen all the time and it's not because the attacks are prohibitively
hard to do. It's because if they're state sponsored attacks and you shut down
all of public transportation in an area, or you shut down the electric grid or
something like that, the US response to that, or the UK response to that, won't
be a retaliatory cyber attack.

Right? It'll involve missiles. So, yeah, in the same sense that I think we're
all kind of at peace with the fact that you could also shut down the power grid
by planting bombs in a couple of strategic places or something like that. Right?
We live with that risk. And we just assume that if it's going to happen, it's a
prelude to a much bigger conflict. It's kind of out of our hands. So, it's worth
paying attention to. I'm thankful that I don't work in kind of a corporate IT
space where I'm kind of held hostage to the software that other people build.
I've spent my career mostly working, at least when I'm building my own stuff,
working in spaces where we're responsible for the software that we build and the
whole business is paying attention to how we build that software. It's much
harder if you're like a corporate IT person or an IT security person. And the
best you can do is get a consultant to kick the tires on something before you
buy it and operationalize it.

**David Mytton:** Right. So, it's more likely that it's going to be a ransomware
attack that's led into someone who's non-technical on the network rather than
some highly elaborate zero day and some control plane somewhere.

**Thomas Ptacek:**  I think both are possible, but I think the ransomware style
attack is more straightforward. It's more lucrative. I think it's more likely to
be the way we see it going down.

**David Mytton:** But how should the broader tech industry think about this
systemic risk, for example, will running our code in data centers that require
electricity?

**Thomas Ptacek:** Yeah. Your guess is as good as mine. If the question is about
whether we should use memory safe programming languages, I'm right there with an
answer. If the question is what we do about our enormous dependence and our
interdependence on all these different actors doing different levels of security
assurance for what they're delivering, I have no no freaking idea. I'm totally
lost. Someday the power is going to go down and I'm just going to live with it
until it comes back on.

**David Mytton:** Well, that's actually a good link into discussing open source
and our dependencies on a huge supply chain and all of those libraries that
we're all importing to our code that we can, in theory, look at the source code
for but very few people are doing. How should software developers think about
that supply chain risk with all the dependencies and the dependencies,
dependencies, and so on?

**Thomas Ptacek:** It's a real problem. So, from, I think, around 2016 to 2020,
I was a principle at a company called Lata Quora. And that company still exists,
I'm just at Fly now. We'd set up security teams for startups that were mostly
building on top of typical open source software stacks. Jango or a lot of
Node.js, A lot of NPM ecosystem stuff. Right? And we went in thinking that it
was going to be kind of straightforward for us to just vet packages and follow
dependency chains and keep up with security alerts. And it's a really difficult
problem. In particular, I think the test case for this is kind of Node.js where
literally every possible piece of software has been factored out of every other
possible piece of software and into its own package. And those packages have a
weird web of dependencies and maintainers, and I think it's basically hopeless
to keep up with are changes being introduced maliciously?

**Thomas Ptacek:** My odds of detecting that are really minimal. Right? There's
so much code in an NPM and a node setup. There's so much code that you're
pulling in through dependencies and in each of those dependencies you're using
so little of it and keeping a good map of which parts of which packages you're
working with is very difficult. I think the best advice I can kind of give there
is to be conscientious. Again, I think this is kind of straightforward. I think
people probably get this already, but to be conscientious about what depths
you're pulling in. I think if you're serious about being resilient against
supply chain attacks, for instance, if that's a real tenant of how you're
running your engineering team, you're going to make sacrifices in order to kind
of live up to that tenant. Right?

So, you might pick different dependencies. You might choose to build on
different and less shiny possible stacks just to avoid your exposure to left pad
or whatever the thing is now. I think it's worth being cognizant of the fact
that when you opt into kind of shiny new things, you're also opting into all the
dependencies that those things have. For a while, I'm sure it's still the case.
GitHub will give you alerts for all of the vulnerabilities detected in a node
package or really any package. Right? And those alerts are pretty close to
worthless because every single package you use has a dependency somewhere that
has some random vulnerabilities that's being detected every day. But the
annoying thing about it is that most of those vulnerabilities aren't relevant to
what you're building. And so you're getting a constant stream of alerts, but
those alerts aren't operationalizable. If it was the case that when you got an
alert from GitHub about something in your software stack, and it was a real
vulnerability, you'd be very attentive to that. Right?

You'd be quick to respond to it. And it'd be really easy to justify resourcing.
Constantly triaging and updating packages and things like that. But the reality
is that most of what's actually discovered in these packages are low tests, low
grade vulnerabilities. And they're also in corner cases for that software.
Right? It's difficult. For me, I would mostly opt into more mainstream packages.
So, for instance, I'd probably build on React and I'd probably keep it to
vanilla React as much as I could. Things like that. Right? Staying within the
golden path of the ecosystem. I really like Deno is doing here. Deno is that
Rust rewrite of Node that has its own kind of package ecosystem. They're kind of
doing things right there. I guess I'm contradicting myself as Deno is pretty
shiny as well, but I like where Deno is going with this.

I don't know that I have a clean answer for what to do about the supply chain
problem with things like Node.js. If you're not in Node.js, I'm not sure what
your excuse is. Right? If you're running lots of random stuff. A bit of advice
I've given and people always look at me weirdly when I give this advice is I
like the idea of being prepared to rebuild your own dependencies from scratch.
At least the big ones. You might remember, I think it was back in 2012, I'm
trying to remember the dates for Heartbleed. Right around the time of the
Heartbleed vulnerability in open SSL, the consulting company I was at at the
time, \[Monosomo 00:12:01\] Security, we were on an engagement and we found
almost identical vulnerability in nginx. So, it wasn't in open SSL. It was in
the web server itself.

You could send a request to nginx and if it had a null character somewhere and a
header, I'm remembering this weirdly, but you could send a malformed header and
the response would come back with random crud pulled out of the memory of the
nginx process, which is the exact same pattern of the vulnerability in
Heartbleed. And it worked that way. If you just repeatedly did that, you'd
gradually be able to gravel through the memory of the server process and you'd
get private keys and things like that. So, it's a major, horrible vulnerability.
Right? Was really trivial to find that vulnerability in the code. So, everyone
running nginx basically had this vulnerability. It was a real problem. But
people were waiting for their package managers to release updates that would
have that fix in it. And meanwhile, we're kind of standing there looking at the
one line of code that you need to change to fix the vulnerability.

It was really clear. And if you looked at the patch for it, it's a really benign
patch. Right? You can see how it's not going to blow things up. I get how if
you're a small startup, it maybe makes sense. You're not a huge target. It maybe
makes sense to wait for the official patch for things. But if you're a
relatively large company or if a lot of people are depending on your application
or if security's a big deal for what you're doing, it always made sense to me
that you should be able to, if push came to shove, apply a patch to nginx and
rebuild it yourself. It always seemed to me you should be able to make an
inventory of the major dependencies that you have in your environment. This is
not as doable in Node as it is outside of Node.

But for things you run on servers for databases, maybe even if you're in Jengo
or Ruby where dependencies are a little bit more overt, it should be possible to
kind of make an inventory of the major dependencies you have and then vendor
them and be prepared to apply patches to them. Also forces you to kind of update
those patches deliberately. Nobody does this. Right? I think it's a realistic
thing to do, but I think people flinch at the idea that they would ever
themselves build a version of a package they run. It's just a difference between
the way software was built when I was starting in the industry and the way it is
now, where it's all just kind of shrink wrapped and pin compatible, plug and
play, take the gem file or the MPM package and you're off to the races.

So, I think if you're serious about dealing with these problems, if you're
serious about addressing those things head on, those are some of the sacrifices
that you make is you'll spend engineering time to vendor out them major
dependencies you have so if you had to patch them, you wouldn't have to wait for
three days for a package update. The flip side of all this though is for most
companies, it doesn't make a whole lot of sense. For most small companies. It
doesn't make a whole lot of sense to put a huge investment in security, just
from a business perspective. Security is unlikely to be the thing that blows up
your business. Product market fit is the thing that's going to blow up your
business. Not building something that people want or want to use. Right? That's
the real problem. And so there's a fuzzy space between when you start the
company with two engineers and the business person or whatever that founding
team looks like, and when you get to around like 50 employees.

That's the place where most people start thinking about adding full-time
security. Where you're consciously making trade offs. You're trying to get to
market and find product market fit. And that's the thing that's most important
for your business. I'm not here to tell companies that they shouldn't do that. I
think that makes a lot of sense. I think there are exceptions, like if you're
building things where people's health or safety are on the line, obviously
that's out the window. But if you're building a cat sharing app or something
like that, it's just as likely that the way that security will burn you is that
you'll pay too much attention to it. You'll do a lot of Kabuki theater trying to
do kind of the cargo cult thing that you think you're supposed to be doing,
because this is what big enterprises are doing, keep things secure.

And the reality is that when you grow from five people to 50 people and you
bring in a security team full-time or whatever, they're just going to rip all
that up anyways. It's going to be the wrong stuff that you're doing to begin
with. I think there are some basic things that people should get right to begin
with that are worth investing in, but that a lot of it is not worth spending a
lot of effort on. I don't know if that sounded incoherent or not, but that's a
shotgun blast of my answer there.

**David Mytton:**That all makes sense. So, what are the things that those
companies in between one or two people and 50, what should they focus on first?

**Thomas Ptacek:** As people are probably aware, there is a huge industry of
products that are intended to increase security for networks or for software.
There are things that kind of will promise to watch your application to detect
attacks or block attacks or scan your code for vulnerabilities and things like
that. I'm not a big believer in any of those things. I think, in general, your
first reaction to any security product should be it's not for us. It's not going
to work here. It's intended for big companies with big IT staffs that might get
some 5% value from deploying it, but that's good enough for them. And it's not
going to work for you at all. Security products in general, I'm very down on.
With, I think, two exceptions. Right? One thing I think people could get right
from the beginning that's worth investing in and it's kind of a minimal
investment, I would, as soon as I possibly could, if I was starting a new tech
business or new project or whatever, I would get that project onto an FSO IDP
like Okta or Google Cloud auth, something like that, right away.

We spent some time interviewing chief security officers for large tech companies
that had been small tech companies recently. And every single one of them said
one of their first five things that they would do if they were taking over as
the chief security officer for a new big tech startup or a new little tech
startup is get Okta deployed. All of the applications that you're accessing, all
the software as a service things and all your internal tools as well, you're
logging in through Okta. You have a single central place where you're managing
who's allowed to access things and you can enforce two factor auth and things
like that.

So, a security product I would invest in, something like Okta or Google Cloud
auth. The easier thing to do there is probably just Google cloud auth. Right?
Once you do that, everyone logs in with their Google account and you can enforce
when they do log in, they have to use a two factor auth key, a Fido key,
something like that. Right? So, that works great. You should definitely do that.
Another thing I really like is Tailscale. I'm generally a big fan of a VPN
protocol called WireGuard. WireGuard is kind of a modern replacement for VPN
protocols like IPSec and OpenVPN, which are both terrible. Just piles of
software garbage. And WireGuard was kind of consciously designed to avoid all
the security missteps that previous VPN protocols had made.

WireGuard is part of Linux. It's upstreamed into the Linux kernel. If you
install a new distribution of Linux, you get WireGuard for free. Tailscale is a
company that has kind of taken WireGuard and made it kind of work magically well
on every mainstream operating system. On your phone, on your MacOS computer.
Works great on Linux. I love Tailscale. I can't say enough good things about it.
So, getting all the things that you're running internally off the public web and
onto a Tailscale network also makes a lot of sense to me, especially because
most people inevitably end up setting up some kind of access VPN at some point.
And it's always a terrible project that no one wants to work on. And the VPN has
always set up pretty badly. Tailscale just does all that work for you. It
integrates with your existing SSO IDP. It's fantastic. I love it. I am not paid
by Tailscale to say this.

So, two things I really believe in are centralizing access control to the extent
that you can also centralizing how you're managing your network. Probably a lot
of people that hear this have already heard of Tailscale, And all I'm really
saying is yeah, Tailscale is really great. You should look at Tailscale. But
things like security scanners, security scanners generate a lot of noise. And if
you're taking them seriously, if you're doing anything with them, they're
generating a lot of work. And it's hard to say that that work is really like
they're not finding necessarily the most important vulnerabilities. They're just
finding the low hanging fruit in your code that may or may not even be
exploitable. The market for those products, rewards companies and scanner
products, that flag more things.

And most of the things they flag are not the things that you should be paying
attention to. I've never seen a security scanner that did a good job with
anything. Detection I think is out the window. There's a weird thing with
security attack detection products where the trick here is that if you start
watching for attacks on your application or on your network, what you quickly
learn is that you're constantly under attack. Everything on the internet is
being attacked 100% of the time. So, we run kind of an application hosting
company here at Fly and so a thing that people are doing is they're booting up
applications and they're coming up on our Anycast network and you can watch the
internet start to talk to these applications. And the first thing that happens
with any application that we boot up, even if I just boot up a little test
application that no one's heard of before, the first things I see in my log are
just random internet scanners hitting them and looking for dumb PHP
vulnerabilities from 2005 or whatever. Right?

The thing about that is it's easy for detection companies to demonstrate value
because if you set something up there to listen for attacks, it's going to find
attacks. You're constantly being attacked. But almost all of those attacks fail.
The real figure of merit is is it detecting the attacks that are likely to
succeed and there's nothing good that does a good job with that. I'd probably
think more about before I spent any money on any product that was going to watch
for attacks or things like that, or scam my code,. I think about setting aside
money to have somebody come in and do an assessment of my code and find
vulnerabilities. I'm not a security consultant anymore. So, I'm not talking my
book when I say that. That's, I think, a more valuable thing to think about
doing than deploying products. I'm really jaded about products, but I do really
think that people tend to put off getting single sign on set up and the earlier
you do that, the easier it is to scale it across your company. You really want
that set up early. So, I'm a big fan of doing things like that.

**David Mytton:** Flipping it over to developers working on open source, then on
their own projects, what can they do to improve the security of those projects
for their users?

**Thomas Ptacek:** Well, I don't want to be too patronizing, but the first thing
I'd say is work in a memory safe language. So, I think there are big classes of
vulnerabilities that you can get around just by working in modern languages that
don't have these problems. In my head right now, I'm trying to think of what the
unique risks of being on an open source project are. And I think they're kind of
obvious. Right? I think that people that are running major open source projects
are already doing PRs. They're already watching what code they're emerging in.
It's not like it's really super easy to trick people into adding malicious code
to your own project or things like that. Right? And for the most part, when
people are building open source projects, they're not so much running their own
infrastructure, which is a nice thing about being an open source project, is
that you're mostly thinking about the code and not thinking about the cloud
software as a service provider that runs that code.

So, the problems of being the person running that code are trickier than the
problems of being in the open source project itself. But most of my thoughts
here for software security are about vulnerabilities. Are about paying attention
to the right vulnerabilities. About foreclosing the possibilities of other
vulnerabilities. So, for example, I think that some of the most important
vulnerabilities are underappreciated outside of security. I think that people
don't pay enough attention to, for instance, what's called SRF or a server side
request forgery, which is just the idea that if you're building a product, if
you're building a piece of software, that makes its own HDP requests on behalf
of users, if your program can be turned into a proxy, that's usually a game over
vulnerability. Surprising, right? It's not intuitive that just being able to
proxy HDP request would be that big of a deal.

But when software is deployed for real in production environments, that ability
to make an arbitrary HDP request is usually the end of the story. Right? From
there you can bounce to some internal tool that people didn't expect you to be
able to talk to and then take over machines and things like that. I think it's
worth trying to get a beat on what the most important vulnerary abilities are
for the platform that you're building on. It's good to think about there are
things that you can build that are riskier and there are things that you can
build that are less risky. I think it's probably a little bit underappreciated
how risky it is to build with cryptography. I would always recommend that people
avoid building new cryptography and instead use things like libsodium that have
already gotten these things right. I think those things are surprisingly hard to
get right. It's a good question. I feel like my answer here isn't that great,
but that's the first thing off the top of my head is just thinking more in terms
of vulnerabilities and how you're getting your head around with the
vulnerabilities are that you're trying to mitigate.

**David Mytton:** How do you think that's changed over the time you've been in
the industry? Or how do you think the vulnerabilities or the security issues
developers have to face and mitigate have changed? Or is everyone just making
the same mistakes?

**Thomas Ptacek:**  We're making new mistakes. When I started the default
language that almost any open source project would be built in was C and
thankfully C is now a rarity. Good bit of advice for people thinking about
adding dependencies to their stack is to avoid the dependencies that are written
in C. We're on our way towards eliminating memory corruption vulnerabilities. I
think that's increasingly a problem for Google and Apple, where they have tens
of millions of lines invested in memory unsafe code, and they can't get rid of
them. And they just have to keep playing cat and mouse with people who are
finding ways to weaponize memory corruption vulnerabilities. And if you're a
smaller company or an open source project, you don't have that problem. You can
just use Go or use Python or use Rust. And those are all great decisions. And
you should do that.

I've been doing this since the '90s and when I started the vulnerabilities that
I'd mostly care about would be buffer overflows. Would be things I could write
shell code for and take systems over. And then in the early aughts things
shifted towards web vulnerabilities. So, SQL injection was the big one for a
long time. And I think people still aren't really great at thinking through web
vulnerabilities. And that's the place where I'd probably pay the most attention
to, especially because almost anything you build now is going to somehow be
connected to HDP. So, I think a lot more in terms of web vulnerabilities than I
would classic buffer overflows and things like that. You can pay attention to
things like PortSwigger is a really good example of this. PortSwigger is a
website and a company and I'm a little bit hazy on how all this works, but they
make a product called Burp Suite, and Burp Suite is the industry standard web
application security testing tool.

Literally every single consultant that does any kind of security assessment work
has a license for Burp. Burp is pretty good as a tool. There's a free version of
it. You can download and use to test things. Minimum proxy or MITM proxy, man in
the middle proxy, is kind of an open source equivalent to Burp. I kind of
recommend that people take a look at Burp itself. So, another random little bit
of advice is if you're at the point where you can actually invest something into
doing security for your startup or for your open source project, I'd look at
getting a license for Burp if web vulnerabilities are relevant to what you're
doing. Burp is pretty great tool just in general for testing applications, not
just security vulnerabilities, but PortSwigger itself, the company that does
Burp, has a really good news site for new vulnerabilities.

If you're serious about keeping up with this stuff, I'd probably recommend
paying attention to they highlight new vulnerabilities. They're kind of
connoisseurs of new web vulnerabilities, which I am too. So, maybe I'm biased. I
just like it more than ordinary people would. But pay attention to when people
announce. In particularly when places like PortSwigger kind of highlight new
vulnerabilities that they think are really clever and just think about how those
things might apply to what you're building as well. They're usually pretty ahead
of what's going on. Every year there's a conference called Blackhat, which is
kind of the major industry software security vulnerability research conference.
And every single year, there's a talk from the PortSwigger people on some new
vulnerability they've discovered. Sounds kind of silly when I say it, but pay
attention to PortSwigger. A bit of advice I have there.

**David Mytton:** Would you say that a lot of the attack surface has now
essentially been outsourced to the cloud providers, given that we're running, at
least a lot of new projects are deployed, on the cloud? Is that how developers
should think about that?

**Thomas Ptacek:**  I'm a hundred percent biased here. Right? Fly.io is a cloud
hosting provider. Right? We're doing essentially the same things that AWS does.
We run some of AWS's code in that we run Firecracker for virtual machines.
Speaking against my own interests. Right? There's definitely a big sense in
which when you deploy things on cloud providers, you are handing over a lot of
security decisions to those providers. And your default assumptions about what
those providers might or might not be doing for security are... I trust Amazon a
lot. I trust AWS a lot for security stuff. They have just an army of very smart
people just working on security problems there. When you're working with smaller
companies, and we're a smaller company, you should think about how they're
keeping up with that same work with far fewer people doing security work there.

For instance, there's lots of places that will run a Docker container for you or
that'll check code out of GitHub for you, build it and run it on their cloud
environment. I think it's worth asking yourself how that stuff is being actually
run. What's the multitenant environment for it? Are they just running Docker
containers? How have they locked down those Docker containers? Things like that.
It's worth asking that question and getting a sense of it. There is something to
the idea of you're trusting the engineering team for that hosting provider to
provide a big part of your application security.

**David Mytton:** Before we wrap up that then, I have two quick fire questions
for you. So, first is what is the current favorite dev tool that you're using at
the moment?

**Thomas Ptacek:**  I will tell you, but it's a terrible answer. Right? So the
favorite dev tool that I've kind of adopted over the last year is Emacs Tramp.
Emacs' the editor everyone knows. Emacs' the list operating system that is also
an editor. Has a feature called Tramp, which has been around forever but I've
only been using it for the past year. I'm in a place now where my daily driver
is a MacBook, but a lot of the software that I build now is very Linux specific.
So, for instance, kernel BPF code to do network management and stuff like that.
That code is very difficult to test even in a virtual machine on my MacBook. So,
I have a dev machine, which is like an Intel Nuc that sits there running
precisely the version of Linux that we run in production. And I build all my
software there.

And Tramp makes it completely transparent to edit code on that Nuc as if it was
on my local daily driver dev machine. Everyone that's ever used Emacs
apparently, besides me, knew this forever. I always got the idea that you could
use Tramp to edit the file on a remote system. Sure, it'll copy the file over
and you can edit it and it'll copy it back. But no. Tramp does way more than
that. Anything you do in Emacs to syntax highlight your code or check for
problems in your Go code, everyone that uses Emacs also uses a tool called
Magit, which is the Emacs' get interface. And Magit alone is a reason to use
Emacs. Magit works over Tramp. I sort of know intellectually how that works, but
it still blows my mind that that works. So, my recommendation is switch to Emacs
because it's the best possible editor and then use Tramp because Tramp is
amazing.

**David Mytton:** You partially answered my second question, which is what is
your current tech setup? Hardware and software that you're using on your daily
driver?

**Thomas Ptacek:**  I have a MacBook. It runs Emacs and it runs terminal
Windows. It could be any MacBook. It would be just fine for me. So, I'm typing
right now on a 2018 Intel, 15 inch MacBook. And my keyboard reads Q, W, 6, B, T,
Y. I've gradually harvested keys from other computers that I have in my office
as the keys on this one fail and just looking at the new keyboard I'm super
psyched. So, I maxed out a new... It's pretty ridiculous. I have no use for
almost anything in the new computer, but I've got a maxed out 16 inch MacBook
coming to me next Tuesday. I'm very excited to have a keyboard where the keys
will actually be the keys that I'm typing on. But really it's almost just a dumb
terminal for me. Right? I just need Emacs to work. I need Emacs and Twitter to
work and then I'm kind of off to the races. So, I'm pretty easy.

**David Mytton:** Excellent. Where can people find you online?

**Thomas Ptacek:**  I'm noisy on Twitter. My Twitter name is TQBF, the quick
brown fox on Twitter. I'm pretty easy to find there. There's a site many people
are familiar with called Hacker News. I think if you took the three highest
karma, kind of biggest losers, on Hacker News and combined them, they still
would not be as big of a Hacker News loser as I am. By a factor of three I'm the
highest karma person on Hacker News. Which is where I waste a lot of time. So
I'm \[tptacek 00:31:25\] on Hacker News if you want to see me ranting about
random legal things or the tech industry there as well. So, Hacker News and
Twitter are where to find me, unfortunately.

**David Mytton:** Excellent. Well, that's all we have time for today. Thanks
very much for joining the Console Podcast.

**Thomas Ptacek:** Thank you very much for having me. I appreciate it.

**David Mytton:** Thanks for listening to the Console Dev Tools Podcast. Please
let us know what you think on Twitter. I'm @DavidMytton and you can follow
@consoledotdev. Don't forget to subscribe and rate us in your podcast player.
And if you are playing around with, or building, any interesting dev tools,
please get in touch. Our email's in the show notes. See you next time.

{{</ box-collapsible >}}
