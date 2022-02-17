---
title: Devtools investing
who: Ed Sim
whoLink: https://twitter.com/edsim
org: Boldstart
orgLink: https://boldstart.vc/
what: 
 We discuss what engineers should think about when working on side projects, 
 when and if they should seek out investors, how to pick the good
 ones, whether raising money is even needed, and what the role of open source is.
season: 2
episode: 5
date: 2022-02-03T08:00:00Z
duration: 30:38
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/72a312a7-0768-4faa-a902-3bf9b9634fd0/audio/5fce0eb5-f702-49b3-abf4-a78c89e2d00c/default_tc.mp3
draft: false
summary:
  Devtools investing - a devtools discussion with Ed Sim (Boldstart). Episode 5 
  (Season 2) of the Console DevTools Podcast.
metaDescription:
  Devtools investing - a devtools discussion with Ed Sim (Boldstart). Episode 5 
  (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/boldstart-ed-sim-profile.png
topImg2Src: /img/favicons/boldstart.vc.png
ogImg: /img/podcast/boldstart-ed-sim-profile.png
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

In this episode we speak to Ed Sim, Founder and General Partner of
[Boldstart](https://boldstart.vc/), a venture investor specializing in DevTools
and software. Ed has invested in developer-focused companies like Snyk, Slim.ai,
and Jit Security. We discuss what engineers should think about when working on
side projects, when and if they should seek out investors, how to pick the good
ones, whether raising money is even needed, and what the role of open source is.

Things mentioned:

- [Snyk](https://snyk.io/)
- [Slim.ai](https://www.slim.ai/)
- [CodeSee](https://www.codesee.io/)
- [Atomic Jar](https://www.atomicjar.com/)
- [Testcontainers](https://www.testcontainers.org/)
- [Akamai](https://www.akamai.com/)
- [SourceClear](https://twitter.com/sourceclear)
- [Node](https://nodejs.org/en/)
- [RubyGems](https://rubygems.org/)
- [DigitalOcean](https://www.digitalocean.com/)
- [Atlassian](https://www.atlassian.com/)
- [Twilio](https://www.twilio.com/)
- [GitLab](https://about.gitlab.com/)
- [Bitbucket](https://bitbucket.org/product/)
- [Greenplum](https://greenplum.org/)
- [Eucalyptus](https://www.eucalyptus.cloud/)
- [Cape Privacy](https://capeprivacy.com/)
- [Gavin Uhma](https://twitter.com/gavinuhma?lang=en)
- [Dropout
  Labs](https://medium.com/dropoutlabs/introducing-dropout-labs-d1b96f638ae2)
- [TensorFlow encrypted](https://tf-encrypted.io/)
- [MongoDB](https://www.mongodb.com/)
- [Elasticsearch](https://www.elastic.co/)
- [Red Hat
  JBoss](https://www.redhat.com/en/technologies/jboss-middleware/application-platform)
- [Boldstart.vc](https://boldstart.vc/)
- [What’s Hot in Enterprise IT/VC](https://whatshot.substack.com/)

{{< rich-title-5 icon="future-head" >}}About Ed Sim{{</ rich-title-5 >}}

Ed is the Founder of Boldstart Ventures, a day-one partner and true believer for
developer first and SaaS founders. Boldstart is a lead investor and often
partners with technical founders at company formation, helping accelerate their
path to product market fit.

Ed is currently a board member/observer of Snyk, Kustomer, BigID, Blockdaemon,
Env0, Dooly, and Cape Privacy. Other notable day-one investments include
Superhuman, Security Scorecard, and Front. Ed previously co-founded Dawntreader
Ventures where he led first round investments in LivePerson (NASDAQ: LPSN),
GoToMeeting (acq. By Citrix), and Greenplum (acq. EMC/Pivotal). Ed has a BA in
Economics from Harvard.

### Highlights

{{< podcast-episode/clipping time="01:20"  >}}

**David:** ...

**Brooklyn:** ...

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console Podcast. I'm David Mytton, Co-founder of
Console.dev. Free weekly newsletter highlighting the best and most interesting
tools for developers. In this episode, I speak with Ed Sim, Founder and General
Partner of Boldstart, a venture investor specializing in DevTools and software.
Ed's invested in developer-focused companies like Snyk, Jeli, CodeSee and NZero.
We discuss what engineers should think about when working on side projects, when
and if they should seek out investors, how to pick the good ones, whether
raising money is even needed, and what the role of open source is. We even talk
about how AWS forking Elasticsearch and MongoDB has helped those companies grow.
We're keeping this to 30 minutes, so let's get started. I'm here with Ed Sim.
Ed, thanks for joining the Console Podcast.

**Ed:** David, thanks for having me. I've been an avid fan of Console. And I've
seen a number of the founders from our portfolio participate. Basically, I
started Boldstart in 2010 with my partner Eliot Durbin. And our goal is to be
the best day one founder for technical enterprise founders, which means we love
talking to founders when they just have an idea. And many times it may take six
months of just chatting or maybe there's an open source project. And we want to
be there at company formation with the check, ready to go, and helping them
scale. So some of our portfolio companies that have been on include Snyk, Slim,
CodeSee, and I think Liveblocks as well.

**David:** Yeah, it was really great talking to the companies you've invested
in. So let's start at the beginning then. Let's imagine that you've met an
engineer who has an idea for new DevTool. What would your advice they do first?

**Ed:** The question that I want to ask is the why. Why are you starting a
DevTool? And the best companies and the best engineers are all about solving
problems. And so, the problem that they may have experienced for their entire
life, or they think about it in the shower, or when they're on their commute, or
whatever, that's the engineer we want to back. And a good example would be Slim.

Kyle at Slim started seeing these containers become seven gigs, and trying to
ship those around when he was at Cisco. And he said, "There's got to be a better
way. What if I could minimize these containers?" And he created Slim, and put
that up in GitHub. Fast forward hundreds of thousands of downloads. And he was
able to minify containers down to 20 to 30 times their original size. And that's
a great example of solving problems with a pain that you experience.

**David:** So if engineers are just getting started on building something that
they've faced pain with, what problems do you think they come up with? And what
mistakes do they make that could come back to bite them later on when they're
thinking about converting into a company?

**Ed:** I think the biggest thing that founders and engineers have to think
about is not think about raising money. Do it not for us, do it for your user.
Tell me the persona, the user, the actual day in the life of that user, and how
are you building a product or a DevTool to make that user's life better, whether
it's abstracting away operations, whether it's allowing them to code faster,
whatever that might be. Think about who that individual user is. Because we
don't think about the unit of one and obsessed about that individual user. It
doesn't freaking matter what you do. There's no company.

If you do that, the best investors will understand how one user becomes 10
users, and then a hundred users, and then a thousand users. And they will not
force you to try to get revenue too early. And we can go through that whole
thing later, David, about why getting revenue to early can screw up a company.
But that's what we look for. We look for that obsession. And we know, the second
we meet these founders, when they talk about the problem, and the user, and the
pain they experience. You can just feel it viscerally through the Zoom. Because
right now, we're all on video, but you can feel it. You can feel the passion and
the energy. That's kind what we look for from the very beginning.

**David:** And that persona could just be themselves, right? If they've got a
problem they're trying to fix.

**Ed:** Absolutely. And usually it is themselves. It usually is themselves. And
then you start thinking about, okay, so how does that make everything better?
And by the way, I'm talking in the abstract without concrete examples at this
second, because we get in so early that a lot of the founders we meet with have
nothing built. It's really just an idea based on the history of kind of coding
over many years and saying, "I would like to solve this problem." So that's why
I'm talking more in the abstract than I am kind of in the concrete, because
that's how early we go.

**David:** Yeah, that makes sense. So how should an engineer think about
developing it once they've got something that's working for them? What kind of
polish do you think they need before they can get it released publicly or should
they just not? They just throw it out there and see who starts using it?

**Ed:** There's multiple ways to kind of crack the code. For example, AtomicJar.
I don't know if you've met Sergei and Richard North yet. They were the creators
of Testcontainers. And that is a project that they worked nights. I think
Richard started the project six years ago. And now I think there's a million
downloads or a million half downloads a month right now on the Testcontainers
project. And it's solving a very simple problem. It's how do I make integration
testing suck less? How do I shift it left? How do I make it very easy for
developers to spin up containers, to really test real kind of production style
databases, and things like that in a very simple way. And they're putting so
much time and effort on nights and weekends, that they were just dying to start
a company because all the things that their community wanted, they couldn't get
to. And they were just completely exhausted.

And they said, "You know what? It's time to start a company and time to make it
even easier for our developers for that community to use Testcontainers." And
obviously, the vision for them is to... I can't go into more details, but to
create a hosted version where they can do 10,000 things more than they can in
the regular community while still fostering the development of that community.
So that would be one example of someone that had a project and kind of built in
public, but their goal was never to build a company. Let me be very clear about
that. Their goal was to solve a problem and to service their community, right?
On Snyk, on the other hand, which you talked to Guy about, which is now an $8.5
billion company. We were fortunate enough to partner with Guy in his previous
company when he sold that to Akamai. And we kept bugging Guy every three months
and saying, "Hey, when are you ready to leave? When are you ready to start your
next company? What are you thinking about?"

And in Guy's case, he was creating a new market category, which was basically
shifting security left. And Guy will say more of an integrated whole, but
shifting left to developers. And for him, it was building kind of quietly behind
the scenes. And then, having some initial beta users. And my point really is
it's there's no right answer in terms of how someone does it. But the goal from
both of those companies was being obsessed with the end user and being
incredibly focused on the developer experience. That obsession carries through
in every single thing they do, whether it's a $8.6 billion company or just a
newly seeded company as well.

**David:** Right, so in terms of thinking about how someone should set up that
project, do you think stealth mode is relevant these days with open source
projects? And even commercial businesses like you say, being built in public.
How should you decide which approach is the right one?

**Ed:** I don't think about open source as the question. I think about what
business problem are you solving? What problem are you solving for the engineer?
And is open source the best approach to solving that problem? As you know,
tremendous benefits to open source. Obviously, it's a great lead gen mechanism.
It's a great way if you foster the right kind of community to get free QA, to
get great feedback, to also get enterprises in much earlier, because they maybe
feel safer that the code is open source, and they can freely use it, and change
it, and do things with it. But the question I think you still have to ask is a
higher level question is, does open source even make sense? And if I decide to
go open source, how do I kind of foster that community? And in the long run, if
you're talking about starting a company, what will my business model be? Will it
be selling services? Will it be doing an open-core model? Will it be doing a
hosted version?

Those are things before you actually decide to go open source, you should
probably think about if you decide to start a company. In the cases of Richard,
he was just solving a pain. And when you solve a pain, and you're kind of a
hacker, my perspective, you just throw it out there. Throw it up in GitHub,
start tweeting about it, get the feedback. Particularly, if you're not really
worried about starting that company, that I think is the most genuine, I would
say, artful form of solving problems and getting a community built, because they
know that you have genuine intentions. And then later on, you can think about
throwing up a company. I can't tell you how many times that we end up finding
creators of projects who, two years later, or three years later, even six years
later say, "Hey, I want to actually raise money, so I can better support my
community, and sponsor that community, and keep them happy, but also find a way
to make it even easier for them to use my product."

**David:** That's a good point to ask the question about when should someone
raise money. Is it just to do with, they need to take a salary because they
haven't got time to do everything they want to do? Or what do you look for in
determining when a project is ready to take that funding in?

**Ed:** Yeah, it's never about me determining when a project should take money.
It's about the founder wanting to express that interest to say, "I want to start
a business based on kind of the community that I have." And the best founders I
know, the case of someone that's already started community and not raise capital
say, "These are five things that I can never get to. Look at this roadmap that
my community wants me to build. I can't get to this. This will take me five
years to get there and get this going, but I've struck a vein. There's a lot of
interest in what I'm doing. There's a lot of people contributing. There's a lot
of pull request here. I need to do this full-time. And in fact, I've got three
or four people from the community that I've already talked to, ready to join me
right out of the gate. And this is what I'm going to do."

And by the way, I'm going to be very clear. The company is not the community.
They're going to be two separate things. And let's get going, because it's very
important as well that if you decide to go commercial that you don't screw up
what got you to them in the first place. But it's always about the founder. The
founder needs to determine that. And usually, it comes from a pain. And they
usually already have four or five people, their top contributors ready to go and
join them, because all of them been working nights and weekends, not getting
paid, and doing it as a passion project.

**David:** Right. So we've talked about the creation of a project, and we talked
about what comes at some point along the line when you're ready to take funding.
There's a big gap in the middle there. How do you see engineers move along that
in getting their first users in and starting to build up that community?

**Ed:** The best founders are already kind of, let's say, embedded in the
JavaScript community or embedded in a certain community. So for example, the way
that I think about it is, what is that initial wedge or the smallest concrete
problem that you can solve for an engineer that reduces the friction for them to
get it up and using the product? And a good example would be Snyk. When Snyk
started, we had a competitor out there called SourceClear. And what SourceClear
was doing was they were looking for vulnerabilities for developers, but they
decided to cover 10 languages at once. So on the surface, it sound like... Yeah,
and they've raised $10 million, we only raised three. On the surface, it sounded
like they're kicking the crap out of us. But they're already building for the
enterprise. The enterprise is not a user, that's a buyer. And so what happened
was, the engineers are saying, "Great, you're finding these vulnerabilities, but
you're not fixing them."

Guy's perspective was rather than go a mile wide and an inch deep, I'm going to
go an inch wide and a mile deep. And I'm only going to focus on Node. I'm only
going to look at the packages there. I'm going to analyze the dependencies, but
I'm not going to waste the developer's time. Because the second I waste their
time, they're gone, and trying the next thing. I'm going to actually, not only
found the vulnerabilities, but I'm going to reduce the load, and may pick three
or four, and actually create the pull requests for them to fix it. Absolutely
amazing. Every investor on the planet said, "This thing is too small. How's this
ever be? You're not even open source. They're just stupid Node." How has this
become a big business? Right? And so, that's kind of the obsession about the
individual user, the targeted persona down to Node, not even JavaScript, but
it's just Node only.

Okay, here's what we didn't know. So that's the zooming in part I like to say
is, you have to understand it. And we would never fund you if you can't
understand that persona and that user. But then, there's a zoom out question.
And here's the bet. Can we take that same framework that we built using Node and
add other languages to it? We didn't know. And how long would that take? Well,
that's the bet. I don't know. But of course, Guy architected with his team in a
way that he thought he could do it. And guess what? When we added our next
language, I think it was Ruby, RubyGems, It was much faster than we thought. And
once again, the developers absolutely loved it, because we did not waste it. And
guess what happened to SourceClear? That crazy company, Computer Associates,
which no longer exists bought the company for less than the funding we had
raised.

However, we were scared. I'll be dead honest with you. Because we thought they
had raised $10 million, they're covering all these languages. But the lesson
that I learned from that... And this was in 2016, 2017, a couple years after
existence is that, if you're obsessed about that one user, and you're solving
the problem, and doing it, that's the lesson I take into every company that we
look at is that lesson. And I hope that your listeners, when they're thinking
about is that, don't skip steps. You don't start with, let me start with 1000
developers at Salesforce. You got to start with that first one. That's how you
win.

**David:** So you start with the user that is probably yourself or someone
similar to yourself-

**Ed:** Yeah.

**David:** ... because you're building for your own need. How do you then think
about expanding that to use cases that you might not be familiar with?

**Ed:** Yeah, so what happens then is that if you do a good job, when you start
with yourself, then your existing team uses it. And then, they make referrals.
Because usually developers, the ones that want to start companies are probably
pretty well connected. They're probably plugged into an existing kind of
community, whether it be JavaScript, or TypeScript, or Ruby, whatever that might
be. That's the profile we see of our founders. Or for GraphQL, let's say,
they're plugged in. They know who the first three to five to 10 influencers to
go after. And they're probably connected to them, if not being one of them
themselves by constantly tweeting and talking about things. But the point is, is
then, can this go and be shared with another organization and another one person
uses it? And can this be shared extra?

So that's the first step in our minds is that, how many different people and how
many different orgs can start using it and feel that same kind of problem? And
usually it's word mouth. And the good news today versus six or seven years ago
is that, you can do stuff on Twitter, content marketing. I mean, DigitalOcean
did that whole playbook that people use a lot as well. It's like, "Hey, here's
the basics on whatever you wanted, in developer land. Here are the basics, and
look at the content marketing." And that stuff still works. But now if you're
looking at kind of the launch of new businesses, I got to tell you, Twitter is a
powerful mechanism. And a lot of the founders we back probably already has some
pretty good Twitter followings already of hardcore people that literally are
checking out what they're doing. That is always the first phase.

And the next phase, the question that you ask is, how does that one person
within one org share it with the second person on their team or the third person
on their team or the fourth person? So that goes from individual to team level
dynamics. And that's where you build in some collaboration, you build in some
hooks, share it with others, you build in some virality into that. So there's
elements of consumeresque growth elements kind of in there. Then eventually,
you're going to need a dashboard. And then eventually they say, "Hey, can you go
on-prem? Hey, can you do SOC 2 compliance?" But don't start there. Start with
that individual user first. And eventually it gets there. And by the way, it's
like a water faucet, just dripping and dripping and leaking. And that's what's
going to feel like, it feels like you never get anywhere.

But imagine if you put an empty gallon like milk jug under that water faucet,
eventually that thing will get filled. It might take a long time, but it'll be
filled. And when that filled, boom, it's just going to take off like that. But
you have to be really patient. And I see a lot of founders try to rush things
and skip steps. And that never works. And so that's what we preach when we
partner with the founders. You need a patient investor that understands how long
it's going to take. You could try 10 different things to go out and market and
reach these people. But if we all agree that these are the signs you're looking
for, based on what I told you about one user, multiple orgs, and expanding,
let's try to hit that goal. Because if you have no product, you got no company.

**David:** So the idea of the consumerization, suppose it started in consumer
tech, and has gone to enterprise. And now we're seeing the consumerization of
DevTools. And do you think that is the reason behind the change in investor
sentiment around DevTools? Five, six years ago was, you can't make money in
DevTools because developers don't buy. But it's not really the developers
buying, it's developers influencing. And then, it's the team features and the
company. Is that the right way to think about it?

**Ed:** You nailed it. So first of all, I've been doing VC for 26 years and
doing enterprise infra. And I would tell you, everyone always said you can't
make money from selling to developers because developers are fickle. They try
things, they have no budget. And then the second thing I would say is that there
are no comps out there. Believe it or not, when we wrote our initial investment
memo, working with Guy, we just said, "Hey, if we could be like New Relic, this
would be amazing." That was probably one of the only kind of developer [opsy
00:16:56] kind of companies that was public in 2015 we could look up to. And I
think it was only worth 1 billion. That was the mindset even in 2015. And I
think what has changed for every company as a software company. Everyone has
lots of developers.

And guess what? You know what? This [inaudible 00:17:11] is complicated. It's
not only one tool, but a day in the life of the developer. Then we had
[inaudible 00:17:15] 15 tools. They're expected to do a lot more. They're
expected to code fast and deploy. Well, what are all the steps between coding
fast and deploying? There's testing, there's security, there's integration. And
there's all these things that are kind of missed. I still believe we're in the
golden age right now. Because if you look at the top-down perspective of the
amount of money being spent online, especially during kind of the pandemic,
right? I almost think the pandemic fueled a lot of these things in terms of
where Nike is doing 30, 40% growth, and doing a portion that online, a huge
portion of it online. You're seeing that... Well, guess what?

More developers are coding faster. They're putting more products up, they're
building new applications. And here's the other thing that you and I were
talking about earlier today on the unnamed company is that you have to keep the
lights up and running 24/7. And by the way, in that company that we were talking
about is how do you shift that left even to the product managers? And how do you
shift that left to the engineer, so they can do more with less? And so right
now, I mean, look at GitLab. That's at $15 billion now. Look at Twilio, it's at
$63 billion now. Look at Atlassian. I mean, it's more than just kind of
Bitbucket, but it's at a hundred billion dollars right now. So I think that old
adage is dead. And I think it's simply because of how important software is and
the whole economy in every single industry.

**David:** What does that mean for the requirement to raise money to do
DevTools, enterprise tech, and SaaS broadly? When I started my first company in
2009, were maybe half a million or a million dollars. And now they're coming up
to 5 million. And you had examples from Basecamp, previously called 37signals.
But even Atlassian didn't raise money for a very long time to help them IPO. Can
you bootstrap a DevTools company today?

**Ed:** You certainly can bootstrap a DevTools company today. However, there's
so much money sitting in the market. And there's so many people just writing
machine learning algorithms just to figure out who gets stars from one to 10 to
a hundred, that people are getting pinged left and right. And I was joking,
three years ago, people were like, I'm a DevTools investor. And they were like,
"Oh, that's terrible. Why are you a DevTools investor? Why do you care about
this?" I mean, by the way, I made my first kind of dev-related, really
tool-related investment very early. I was involved in the first check writer of
Greenplum, which eventually sold to EMC, and became Pivotal Software. And I got
to kind of be on that whole journey there, and looked at Cloud Foundry, and
SpringSource, and all those things.

And in fact, Greenplum initially built on top of Postgres, because we said, "How
are we going to bootstrap our own kind of database community? Let's create this
thing called [Disgres 00:19:44], where you could have kind of multiple servers,
commodity servers working together. And we would be this layer on top. So that
was kind of the whole thing. [inaudible 00:19:52] that's where I learned a lot
of this stuff. I also was an early seed investor in Eucalyptus Software, which
was an open source company that was in the hybrid cloud, which never took off. I
was a little bit too early about that. But the point is, is that everyone now is
a DevTools investor. So for a founder, I want to reiterate the fact is, when
you're talking to a DevTool investor, make sure they're asking you the right
questions. Make sure you test them to understand that they know how to build a
DevTools company. That they're patient, that they do all these things.

So there's some founders that maybe they'll raise a million dollars. But I can
tell you right now, there's a lot of other founders that could raise three,
five, or 10. And the market is absolutely bonkers right now. And the only thing
that I can caution is pick the right partner because it's a long journey. And
really test call their portfolio company founders, test them, make sure that
they buy into the same vision that you have. And I can tell you this, make sure
that they don't push the revenue button too early, because that can [inaudible
00:20:52] kill a company. And then I keep saying that over and over again, it
can kill a company because what happens is, is that, if you do what you're going
to do right, whether you're an open source company or not, doesn't matter. But
you get out to the market, you hit a vein, and guess what? Some of these users
might be in enterprises, and they ping you and say, "Hey, can you actually
create an on-prem version for me? Can you actually go through a SOC 2
compliance? Can you do all these things?"

And what happens is, is that, then you'll spend with your very little resources
of time that you have six months trying to go through that process. Then you
only have one customer. And what you didn't do was focus on all the little
things that you're other individual users were talking about in the community,
in your Discord channel, and your Slack, whatever that might be. And you didn't
fix those things, because at the end of the day, if you can serve those
individual users who are telling you, "These are the things that I need to do to
reduce the friction, to make it easier for me to use." It'll only make it easier
for the enterprise eventually. You will get there if you solve that individual
problem, but don't skip steps. And then if you take your eye off the ball, then
you have a company of one or two, you're beholden to that company, and boom, you
forget about building the community. And then you've got to bootstrap this whole
top-down engine of selling. And that becomes a very complicated story that we
can hit another time.

**David:** So that means at the early stage, funding is to help you figure out
who your customers might be, and to build a product that uses one. And I
supposed to give you a salary and to give you that cushion, so you can actually
focus on the product, right?

**Ed:** Exactly. Because once again, go to the examples, whether it's Slim or
AtomicJar, or even CodeSee. Shanea had this burning pain that she was doing it
nights and weekends to help developers visualize and master Codebases to onboard
faster. Then it was finally like, "I can't do this anymore. I need to go faster,
right? I need to get this out the door." And so a lot of times when we invest,
there's no product. It's two founders. It's a well thought out idea. There's a
reason of being a raison d'Ãªtre that they have based on some unique technical
insight and pain that they have. And we're like, "Look, goal number one is, I
want to make sure..." By the way, here's another thing that I want to really
impress upon the engineers listening to this, is that, there's two kinds of
founders.

There's one founder that says, "Hey, I got this idea. I'm ready to go." And
there's another founder that says, "Hey, I've got this idea. I've got five
engineers. I've already recruited from my community or five engineers that have
worked for me previously. We've been working nights and weekends. And I need
money now to pay them, because I can't keep holding them on for free." And why
is that important? It's important because when you're investing in founders with
an idea, product velocity is probably the number one early indicator of success.
You get something, can you ship the product? That's the magic moment. Can you
get something out the door? Once you get something out the door, you can
iterate, you can fix it, you can change course.

But if you don't have the people ready to go out of the gate... And look, I know
that you're going to be one of the coders too, because that's usually... We only
fund technical founders. But if you don't have the four or five other people you
need too, that's going to take you six or nine or 12 months. This is a tough
market right now. That's six to nine to 12 months loss, and you're just burning
cash. So I want to impress on founders, you're going to start something, not
only you start something, but be dead serious, and find who your co-founder's
going to be. Find a couple other engineers. Prove to me that your story that
you're telling about why this developer pain exists and how you're going to
solve it is even more intriguing to the people that work with you previously, or
they might be experts in this space. That tells us a lot, that people are
betting their livelihood on you.

**David:** Well, I suppose people who are in the community, the open source
users of your product, people who are maybe committing here and there, or
answering questions on forums, there's a pretty big advantage of having an open
source projects.

**Ed:** That is one of the amazing things about open source projects versus
doing freemium, right? You can say, "Hey, there's similar motions, you get
user." But getting that open source community. So even like a company called
Cape Privacy, which is close on $20 million six months ago. The founder, Gavin
Uhma, was a founder we backed previously, and he sold his company to Salesforce.
But he started a project called OpenMined, M-I-N-E-D.org. And he recruited five
or six of the best kind of contributors in that community.

And they spun that out and started Dropout Labs, which spawned this new open
source project called TF Encrypted, which was TensorFlow Encrypted, which allows
people to use TensorFlow, but actually do operations on encrypted data. But that
company, the cryptographer, the best engineers who all pulled out that initial
project, and now we have Cape Privacy as part of that with a $20 million
[inaudible 00:25:13] years later. And so that's back to your point of mining the
community and finding the best engineers. You can see who they are, right? You
can test them, because you're seeing them contributing a ton of code and making
a bunch of pull requests. And you're like, "Oh my God, this person's
unbelievable. I want them on my team."

**David:** Yeah, they're already onboarded into the Codebase. And you can
literally just get them up and running within a couple of days.

**Ed:** Yeah, AtomicJar was instant company. I tell you, it was unbelievable.
They had their community dialed in. And that's one of the question we ask about.
Who do you think you can pull in?

**David:** One of the potential downsides of open source then is other people
taking your code, and in particular, running your service for you as a cloud
provider. What's your take on this? I suppose you've seen Elastic and MongoDB
react to moves by AWS recently. How do you think about that?

**Ed:** I think that even if you look over the last couple years, there was a
lot of like, "Holy [inaudible 00:26:06]. These companies are dead." I mean, look
at Mongo now. I think that forced them to actually be even more competitive, and
that stock and their revenue. Look at Atlas. Holy crap. I think that forced them
to innovate more on the hosting side, if anything. And look, Amazon's doing
quite well in their stuff. Elastic, Amazon forked off Elastic. And they all
change their licenses, whether it's SSPL or whatever. New license, new
[inaudible 00:26:29] created. But I think Elastic did just fine as well. I think
they bounced back. So I think on the one hand, I think it sucks because if
Amazon is not contributing to the community, and just kind of forking it, again,
using it for revenue purposes, that sucks.

But the flip side, man, it's creating a lot of visibility for these companies.
And they're still not part of the original community. If you have a vibrant
community, you will win. Why? Because there'll be more innovation in your
community. People are going to want to be in that community. People know that's
open. People know that you're doing the right thing. And I think Amazon's the
beast. So I think those two have proven that you can still compete and win. And
I think that's really awesome for all open source companies, that when you look
at the performance of those two that they have weathered the storm, per se, and
maybe even thrived. I mean, I would love to hear your thoughts on that too, but
that's kind of how I think about it.

**David:** No, I think that makes sense. MongoDB started off selling open source
support contract essentially for their open source version of their product. I
was one of the first commercial customers of MongoDB a very long time ago. And I
remember debugging issues in production with their CTO. And he had to disconnect
because he was going off on a plane, and then reconnected when he was in the air
to help us debug things. But they then hit a wall with that. And I'm sure they
were generating a decent amount of revenue on the support contracts. But like
you said, it wasn't until they started launching their cloud products. And we
started with monitoring and then backup. And now all the Atlas stuff. Does that
mean that cloud is the only viable business model for open source?

**Ed:** I wouldn't say it's the only viable business model, but let me give you
an example since you're bringing up being the original user of Mongo. Do you
remember JBoss? That was selling support contracts back in the day. They might
have sold for 350 to $400 million, which by the way, back in the day was a
pretty large exit for enterprise software companies, right? I mean, that was,
let alone, an opensource company. That was probably one of the bigger ones other
than the Red Hat going public without supports. Mongo kind of copied that. And I
can tell you this, and then look at GitLab. GitLab, their stuff is hosted. I
think the hosted model and the cloud model has been the biggest boon to the open
source industry period. It's the SaaSification of open source. It's freaking
unbelievable, right? And part of that wouldn't happen were it not for AWS
pushing the idea that cloud is acceptable for everyone.

And because that happened, then you had the SaaSification of open source saying,
"You know what? I guess I don't need it on-prem. Maybe I'll kind of get going.
And actually, I'm okay kind of using the SaaS version of this open source
company." Maybe like a Gitlab, right? I mean, GitLab was with that. So I think
that's the best thing that has ever happened to open source. And it's probably
one of the best models out there. Because then it goes back to the point that
you and I talked about earlier is just reducing the friction, ganging up, and
running it easier. Just not having to do the ops part, setting up and
maintaining servers, setting up a database, configuring all that stuff,
upgrading it. I mean, it's a poof. That's a disaster. What if you just hit a
button? Give the easy button. Developers want the easy button sometimes just to
get it up and running. And if their companies accept it, that's great.

**David:** Well, unfortunately that's what we've got time for today. Where can
people find you, Ed?

**Ed:** You can find me on Twitter, @edsim, E-D-S-I-M. You can find me at
boldstart.vc. You can find me at firstcheck.vc. You can find me at dayone.vc. I
think you get the point. And then, I have a very fun newsletter where I try to
throw in some fun gifts from the Simpsons or South Park, whatever. But talk
about kind of state of VC and enterprise called whatshot.substack.com.

**David:** Yeah. I definitely recommend your newsletter. It's one of the few
that I subscribe to. And it goes really well with the Console newsletter.

**Ed:** Your newsletter is one of the very few I subscribe to as well.

**David:** Excellent. Well, thanks for joining us, Ed.

**Ed:** Thank you for having me. I really appreciate it.

**David:** Thanks for listening to the Console DevTools Podcast. Please let us
know what you think on Twitter. I'm @davidmytton. And you can follow
@consoledotdev. Don't forget to subscribe and rate us in your podcast player.
And if you are playing around with or building any interesting DevTools, please
get in touch. Our email's in the show notes. See you next time.

{{</ box-collapsible >}}
