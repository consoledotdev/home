---
title: Decentralize your tech stack (Fission & AskGit)
who: David Mytton & Jean Yang
what:
  "Episode 8 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Fission - decentralized app backend for storage and identity,
  AskGit - query git repos with SQL."
season: 1
episode: 8
date: 2021-08-26T08:00:00Z
duration: 14:04
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/a13efbcc-f622-48c0-865e-c174f57f8c42/audio/fbf982ff-d25e-4bfc-b413-8375f0222152/default_tc.mp3
draft: false
summary:
  Fission (decentralized app backend for storage and identity) & AskGit (query
  git repos with SQL), a devtools discussion with David Mytton and Jean Yang.
metaDescription:
  Fission (decentralized app backend for storage and identity) & AskGit (query
  git repos with SQL), a devtools discussion with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/github.com.png
topImg2Src: /img/favicons/fission.codes.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/a13efbcc-f622-48c0-865e-c174f57f8c42?dark=true
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server 
  Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute 
  and cyber security company, StackPath. He is also researching sustainable 
  computing in the Department of Engineering Science at the University of 
  Oxford, and has been a developer for 15+ years.
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

Episode 8 of the Console DevTools Podcast, a devtools discussion with David
Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software).

Tools discussed:

1. [Fission](https://fission.codes/) - decentralized app backend for storage and
   identity.
2. [AskGit](https://github.com/askgitdev/askgit) - query git repos with SQL.

Other things mentioned:

- [InterPlanetary File System](https://en.wikipedia.org/wiki/InterPlanetary_File_System)
- [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly)
- [Okta](https://www.okta.com/)
- [Everybody Lies](https://www.harpercollins.com/products/everybody-lies-seth-stephens-davidowitz?variant=32123670888482)
- [Bogdan Vasilescu](https://bvasiles.github.io/)

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console DevTools podcast, a show all about interesting
developer tools. I'm David Mytton, co-founder of Console.

**Jean:** I'm Jean Yang, CEO of Akita Software, an API observability startup. In
each episode, we'll discuss two interesting developer tools. We're keeping this
to 15 minutes, so let's get started.

**David:** Our first tool this week is Fission, which is a decentralized app
backend for storage and identity. Fission gives developers APIs to build
authentication and storage by using peer-to-peer, decentralized technologies,
like the Interplanetary File System, (IPFS) without having to worry about the
underlying protocol.

If you remember back to one of our previous episodes, when we were talking about
offline first and owning your own data, this is really part of that same kind of
philosophy. If we go back to the original days of the internet, it really was a
distributed collection of networks with nobody in control. If you wanted to host
something, you could run a web server behind an IP address, buy a domain name,
and then point that to it. The challenge only really came if you wanted to
operate at scale. You would have to buy a lot of physical metal servers, find
space to rack them and that would just take a lot of time and money.

It's definitely better now that you get to access those compute resources in a
few seconds from the cloud. That helps a lot with innovation and
experimentation. The problem comes when a significant portion of the internet is
run by just a few companies. I think the big three cloud providers make up a
large number of services that we use today. More than 50% of emails go through
GMail, all videos are on YouTube, and through the dollar, the US controls most
financial transactions.

It just so happens that we're from the same kind of liberal society that those
companies base their principles on, but who knows how that's going to change
over the next decade? The point is that centralized control is fine, so long as
you agree with the philosophy of those in control. Whether it's through
Fission's APIs or something else, maybe using IPFS directly, or
WebAssembly-based computing, that's deployed through web browsers, do you think
it's a good idea to build on top of open web tech that no company is in control
of? What do you think, Jean?

**Jean:** I think this is a really interesting philosophical question because my
first response, when I came upon Fission was, oh, well, this seems cool, but who
would trust some random company I've never heard of to handle storage and auth.

Those seem like the two most important things. So I had sort of an opposite
response initially, that you do want the big companies with something to lose,
who you trust, with decades of proven track record, to handle this kind of
thing. I know this is antithetical to a lot of the culture of computing, but
it's one of those things where, it's one of those questions, would you rather
trust the government to regulate certain kinds of things, or would you trust
people to self-regulate? I guess I'm betraying some of my politics here, but I
would rather trust the people with something to lose. I think that without some
sort of governance, for lack of a better word, and without a reputation or
something on the line, I would not necessarily feel that my data is safe and
that there's enough oversight.

**David:** I definitely agree. I think if you're going to send your data
unencrypted to someone, then you want to be able to trust them. I suppose you
could say, well, back in the nineties, would you trust this little startup
called Amazon or Google? They've proven their trust over the years, through the
services that they've run. This is a new startup that's now appearing. If the
underlying technology, IPFS, means that the data is distributed and encrypted,
so you don't need to trust them, that's one of those challenges completely
removed.

**Jean:** There's, do we trust them with the data? And then there's, do we trust
them to have implemented the very tricky algorithms correctly? I don't know. I
think some people will say, well, if the code is open source and everyone can
read the code and everyone can test the code, then we should trust it.

Code is getting more and more complex. It's running on top of more and more
stuff. It's really hard to just look at code and understand what it does. Back
in the day, 10, 20 years ago, you could read code and learn to trust it. I think
that open source is really entering a new era, when the source code itself
doesn't actually tell you that much anymore because of everything else that's
going on. It's not just, do we trust the encryption algorithms? How do they
implement the encryption algorithms? Which encryption algorithms do they
implement? How's everything interacting together? What's this running on top of?
What's the infrastructure they're running on top of? Do they configure that
correctly? There are so many other questions now.

**David:** Yeah, absolutely. Just being able to read the source code, I think is
one of the biggest misnomers of modern open source, because just because you
can, doesn't mean you will, or you'll be able to understand why it's there in
the first place. Most people are just not going to read through the source code
of the Linux kernel or the web server they're using or the authentication system
they're using.

**Jean:** And I think even if we crowdsource, we assume everyone is an expert,
they know the language, they know all of the components of what's used. These
are not practical assumptions. I wouldn't even believe that one person could
reason about the complexity of all that in their heads.  I don't know, trust has
to be established through doing other kinds of things first. If your first act
is store all of your data with me and store all of your auth with me, how do I
trust you?

**David:** Auth potentially has another challenge. Just because if it's being
hosted by a small startup and they go out of business, as most startups do,
you've got all of your authentication tokens operated by some entity that no
longer exists. This is potentially a big problem if you're running an app.

**Jean:** There's also a big gray region where you're in the middle, you get
acquired by one of these bigger players. Now they own all of your auth. If that
was the thing you were trying to avoid, there you are again.

**David:** Fission's response to this would be, they're working on open
standards, they're making these standardized through the web standards bodies,
they're going to open source it so you can run everything yourself. How far do
you think that goes in mitigating this?

**Jean:** I think that does go quite far in mitigating the concern that you're
going to have to run it yourself. I do think that auth and things having to do
with security and those standards, are things that need to get updated. It's
critical that they do get updated. If you're building a command line tool that's
doing file processing, and you don't update it, there's maybe a file
vulnerability once every few decades or something like that. Auth is something
that's constantly evolving. There's no guarantees that once things evolve, your
auth is still going to be up to date. I think it makes it better, but I think
auth is definitely not in the same boat as a command line tool that's really
stable.

**David:**We've seen some quite successful large companies abstract away
authentication, like Auth0. The cloud providers have tried to create their own
equivalent services and not really quite reached it. They've not quite reached
the level that Auth0 has managed to. It comes down to which part of your tech
stack do you consider to be critical to the business, that you have to build and
run and operate and own yourself, and which can you send out to a third party
service?

**Jean:** For auth especially, it's really about who do you want to take on your
liability? Even for the size of the company I'm running, I've told my team,
look, let's just keep using Okta because if we have an authentication issue, I'd
much prefer that it's Okta's fault than our fault.

**David:** The final point about this is, who cares about this? The Web 3.0
movement, and that really just means blockchain at the moment popularized
through Bitcoin, but I can see it becoming a lot more important over the next
couple of years. Is this something that is a really a niche issue, that a small
number of advocate developers are gunning for. Users don't really care, because
they'd rather just have docs load in the web browser and everything work fine on
Google Drive? Do you think this is something that developers should actually
start caring more about?

**Jean:** I will go out on a limb and say, I think it's niche. I would love to
be proven wrong because that shows that I'm behind the times, and times are
progressing. I'd love to hear from our listeners, what they think.

**David:** Let us know. What do you think about decentralized technologies as
the backend to your own apps, as opposed to more consumer-facing apps, like
cryptocurrencies?

Our second tool is AskGit, which allows you to query git repositories with SQL.
Following on from our previous episode where we looked at code search, this
allows you to look at the underlying architecture and metadata that exists in
your GitHub repositories. I think we tend to consider git as a container for the
source code, and it's the source code that's most interesting; but git has
really become a database of all the history and the context about the project.

From a philosophical perspective, it's quite interesting when you have enough
history to be able to go back and see how things have evolved. If we think about
the real world, there isn't really anything that exists in the same way, where
you have basically a perfect record of the entire existence of a project. Being
able to query things like, who's committed the most code? What's changed? Which
files get attention? How the technologies are changing over time, I think has
some potential for some really interesting insights. What was your take Jean?

**Jean:** I think this is incredible. I love the idea of having data-driven
observations about how programmers develop. One of my really good friends is
this guy named Seth Stephens-Davidowitz. He wrote a book called Everybody Lies.
I'll shamelessly plug it here. He also writes New York Times opinion pieces
where he analyzes Google trends' data. He's analyzed Spotify data too, but he's
made some really interesting observations about the way people think and the way
people live, based on how they engage with Google Search and other kinds of
websites and web apps.

There are so many things I read about developers that aren't backed up by any
data. Most of the discussions about how do developers develop, are really
philosophical. They're based on each developer having their feeling about what
their life is, without even really quantifying their own development practices.

When I was a professor at Carnegie Mellon, I also had some colleagues do this
kind of research on git itself. There's one guy named Bogdan Vasilescu. He was
doing this git research mostly by hand, because I wanted this data sometimes
too. I was asking around, how are people scraping this data?

A few years ago, everyone was doing it by hand, they'd built their own
framework. I think it's awesome that people can now ask these questions in a
much easier, lower friction way. I hope that anyone talking about programmers,
or working on developer experience, developer tools, really makes great use of
this resource. Hopefully developers themselves and their own teams find that it
improves productivity and happiness and start using these kinds of data-driven
measures.

**David:** Absolutely. I think because git has quite a reputation for being very
difficult to figure out all the different commands that are available, it's
exposing it through an interface that probably every developer knows, which is
SQL. It is really easy to access that information. AskGit has just recently
extended their integration to allow you to search GitHub’s API through SQL as
well. You can querying issues, understanding who starred the repository and link
that into all the git commit data as well. This is particularly interesting,
given how much critical infrastructure and everything that we do as a society,
is based around software now.

**Jean:** There's so many questions that I've done by hand in the past, like
show me bug reports where this happened, or show me security vulnerabilities,
and how quickly did they get patched? What was the nature of the bugs? A lot of
the bug finding world I think could be really improved by better targeting this.
Understanding what gets fixed and how quickly, will really help with
prioritization. A lot of these studies have been done, very painfully, by hand.
So they're very few and far between right now.

**David:** I hope it also encourages people to have better git commit hygiene as
well, in terms of putting useful information into the commit messages.
Explaining why you've made a change is often more useful than just looking at
the diff, particularly when you're six months down the line and trying to
explain it to new people on the team.

**Jean:** Absolutely. Something I'm really excited about is the day when there
are automatic analyses that get included in the search as well. What kinds of
code changes were there? How big was the code change? Did it impact other parts
of the system? I think this will be a really interesting day when we can start
searching over that data.

**David:** All right, that's it for this week. Let us know what kind of things
you would like to be able to search for with a SQL query into your GitHub
repositories, and what you think about decentralized tech for your app backend?

Thanks everyone. See you next week.

**Jean:** Bye.

{{</ box-collapsible >}}
