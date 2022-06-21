---
title: Privacy Engineering
who: Cate Huston
whoLink: https://twitter.com/catehstn
org: DuckDuckGo
orgLink: https://duckduckgo.com/
what:
  We discuss why developers should care about privacy, what technologies and
  tools are available for building privacy-driven features, how DuckDuckGo
  manages performance when doing lookups against tracker lists, and the full
  stack of privacy tools, from search to the browser to email.
season: 3
episode: 4
date: 2022-06-30T06:00:00Z
duration: 24:04
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/7c610a77-33a4-4c99-8032-4395237cb5cd/audio/1617bfd4-a52e-43cb-969c-2445087346f4/default_tc.mp3
draft: true
summary:
  Privacy Engineering - a devtools discussion with Cate Huston (DuckDuckGo).
  Episode 4 (Season 3) of the Console DevTools Podcast.
metaDescription:
  Privacy Engineering - a devtools discussion with Cate Huston (DuckDuckGo).
  Episode 4 (Season 3) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/duckduckgo-cate-huston-profile.webp
topImg2Src: /img/favicons/duckduckgo.com.svg
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/7c610a77-33a4-4c99-8032-4395237cb5cd
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server
  Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute and
  cyber security company, StackPath. He is also researching sustainable
  computing in the Department of Engineering Science at the University of
  Oxford, and has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode we speak to Cate Huston, Engineering Director at
[DuckDuckGo](https://duckduckgo.com/). We discuss why developers should care
about privacy, what technologies and tools are available for building
privacy-driven features, how DuckDuckGo manages performance when doing lookups
against tracker lists, and the full stack of privacy tools, from search to the
browser to email.

Things mentioned:

- [DuckDuckGo](https://duckduckgo.com/)
- [Automattic](https://automattic.com/)
- [Smart Encryption](https://help.duckduckgo.com/duckduckgo-help-pages/privacy/smarter-encryption/)
- [Tracker radar](https://github.com/duckduckgo/tracker-radar)
- [1Password](https://1password.com/)
- [DuckDuckBot](https://help.duckduckgo.com/duckduckgo-help-pages/results/duckduckbot/)
- [Visual Studio](https://visualstudio.microsoft.com/)
- [Glowforge](https://glowforge.com/)
- [MacBook Pro M1](https://www.apple.com/macbook-pro/)
- [1Password](https://1password.com/)
- [Spotify](https://www.spotify.com/)

{{< rich-title-5 icon="future-head" >}}About Cate Huston{{</ rich-title-5 >}}

Cate Huston is Engineering Director at DuckDuckGo and an advisor at Glowforge.
She previously worked at Automattic, where she led the mobile, Jetpack, and
Developer Experience teams. Huston admins the New-(ish) Manager Slack and writes
regularly for Quartz.

### Highlights

{{< podcast-episode/clipping time="01:30" >}}

**Cate Huston:** Well, developers are users. No one's building absolutely
everything they use, except possibly Richard Storman. Yeah. Let's not get into
that one. But secondly, who's implementing all these things? Developers. And so,
I think being aware of the implications is part of how we do right by the people
who use up the products that we build.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="09:49" >}}

**David Mytton:** Can you tell me about any of the things they might consider,
as part of that process?

**Cate Huston:** One of the things I think is really interesting is K-anonymity.
Iif you are in a crowded city block searching for what's near me, then you are
actually relatively anonymous. Because there's a lot of people there. And so you
can look at a smaller geographic area and get the right mix of accuracy, without
compromising somebody's privacy. If somebody is in the middle of nowhere, then
their location is much more revealing. And so you need to have a much lower
fidelity of their location and a much further distance of what constitutes near
me, in order to preserve their privacy.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton** (00:05): Welcome to the Console Podcast. I'm David Mytton,
co-founder of Console.dev. The free, weekly newsletter highlighting the best and
most interesting tools for developers. In this episode, I speak with Cate
Huston. Engineering director at DuckDuckGo. We discuss why developers should
care about privacy. What technologies and tools are available for building
privacy driven features. How do DuckDuckGo manages performance when doing
lookups against trackerless. And the full stack of privacy tools. From search,
to the browser, to email. We're keeping this to 30 minutes, so let's get
started. I'm here with Cate Huston. Cate, thanks for joining the Console
Podcast.

**Cate Huston** (00:46): Oh, hey. Thanks for having me.

**David Mytton** (00:48): Let's start with a brief background. Tell us a little
bit about what you're currently doing, and how you got here.

**Cate Huston** (00:54): I'm an engineering director on the native apps team, at
DuckDuckGo. Prior to DuckDuckGo, I worked at Automattic. Where I ran a number of
different teams including the native apps team, for a while. Automattic works on
WordPress, so another open source and really interesting project. And before
that, a failing startup. And before that, I was actually an engineer at Google.
That was what I did right out of university.

**David Mytton** (01:19): Let's start with your take on why developers care
about privacy. Isn't that an issue mainly for users?

**Cate Huston** (01:30): Well, developers are users. No one's building
absolutely everything they use, except possibly Richard Storman. Yeah. Let's not
get into that one. But secondly, who's implementing all these things?
Developers. And so, I think being aware of the implications is part of how we do
right by the people who use up the products that we build.

**David Mytton** (01:48): And how should developers try and convince their team
to care about it then? If you've got an individual developer who's really
interested in the privacy aspects, but they're always competing business needs.
And depending on where you're working, how should someone think about that?

**Cate Huston** (02:03): Yeah. I mean I'd encourage people to think not about
what they can add, but what they can remove. Like, what analytics frameworks
have been added? What are you really getting from them? And what do you really
need? And all of the things that you add to an application. For example, add to
the bill time, add to slow things down. And many of them, for what purpose?
There's so many apps that are getting shipped with so many different analytics
frameworks embedded, all tracking different things. I am very skeptical that
anyone's getting that amount of value there, relative to the cost of what it's
adding to the app.

But then the second thing... I think this is why what Apple's been doing is so
important. Because, they ask the app not to track things. It's not clear that
many apps are obeying it. But actually the threat of not making it through the
App Store process, has always been one of the strongest levers that developers
have had to do the right thing. And so now it's like, well, we have to respect
this setting. Because otherwise, we can be rejected from the App Store. And
that's a strong starting point.

**David Mytton** (03:03): So that's the benevolent dictatorship model I suppose,
of someone like Apple, who's got the power to force that. Even though there's
not really any code level or programmatic enforcement of it. It's just a
preference box to the user. It's forcing the developers to be better.

**Cate Huston** (03:17): Well just because they can't now or don't now, doesn't
mean that they won't be able to. And they also have the privacy nutrition
labels, and those were pretty telling.

**David Mytton** (03:29): Yeah. So you saw all the apps update those, and then
there were some companies that didn't update for a while because they were still
thinking -

**Cate Huston** (03:35): Yeah. I wonder why. It's such a mystery.

**David Mytton** (03:39): Okay. So where would you advise developers to start,
if they wanted to build privacy as a core feature into their product?

**Cate Huston** (03:46): Yeah. So I think looking at metrics is a really good
place to start. For example, we don't track our users. We have anonymous
metrics. And so what we can know is, how many times certain things were done.
But we can't know who did them, and what they were doing at the time when they
did it. So this does make some things harder. So sometimes, tracking down
crashes is a bit more like being a detective. But mostly, it's good enough
information for us to make informed decisions. And this is why my first set was,
delete your analytics frameworks. Or at least some of them. Just delete one, to
start with. Maybe another one next month. People are collecting all this data,
but they don't use it. They can't use it, and they don't know what to do with
it.

And if you start from this different mindset of, we're going to collect nothing.
What do we actually need to make decisions? What anonymous metrics would help us
make decisions? Mostly about... For example, the relative importance of a
feature. So if we know the fire button gets tapped X number of times a day, that
helps us know that the fire button is a useful feature. And whether it gets
tapped more than the bookmarks button, for example. That is enough information
to make a lot of the decisions that you need to make, to implement your product
roadmap. And we don't need to know anything about people's real behavior or any
of their personal information, to have those metrics.

**David Mytton** (05:10): So these are more counters, rather than just dumping
everything that the operating system can give you?

**Cate Huston** (05:16): Yeah. Exactly. But I think this is the default often,
is to just dump literally everything. And it's creepy, but it's also useless.

**David Mytton** (05:25): Yeah. I suppose the justification is well, what if we
need it in the future? But I suppose that's an interesting question. In what
cases do you think it would be useful to have more data about users?

**Cate Huston** (05:36): I mean, that's just the justification for digital
hoarding in the modern world. And there's still a cost to storing all this data
somewhere. And so it's like, oh. We're paying X number of dollars to keep this
useless amount of data for an indefinite time. Is that actually the most useful
way to spend that money?

**David Mytton** (05:55): Yeah. That's right. And I suppose, you could always
opt the user in. You could say, we want to send this extra information. Would
you like us to do so in a way that attaches to your identity, so we can follow
up? Would you think that would be acceptable?

**Cate Huston** (06:09): We do allow people to send feedback, but we don't
collect anything from it there. We also have an email address. Sometimes people
email us with their feedback. We do respond to them and try to help them where
we can. But I just think most of the justifications that people have for
hoarding data, they just never happen. Having data from three years ago... If
you wanted to make a product decision today, you wouldn't say, oh. Let's go back
and look at our data from three years ago. You'd be like, oh. Well, so much has
happened by then. It's really a miracle that humanity is still going. We must
collect that data again, in order to make a new decision.

**David Mytton** (06:43): Right. So I suppose that's another factor. First one
is, do you need to collect anything in the first place? And then if you are
collecting things, how long do you store it for? And products like Gmail which
just later archive, have taught that you can store unlimited amounts of data
forever. But really, you don't need most of that for very long at all.

**Cate Huston** (07:01): Yeah, but it's the starting premise. I must have
everything forever, versus I'll just take what I need. I'll just count what I
need, literally.

**David Mytton** (07:10): Yeah. And then, that applies to everything else. All
my emails get deleted automatically after 18 months. And if there's something
critical I need, then I'll save it on my computer and sync it somewhere. But
most of the time, you don't go back through emails from 15 years ago.

**Cate Huston** (07:29): I mean, that's true. Sometimes I reply to an email from
over a year ago. But maybe I should just delete all my emails after a month, and
just accept that I'm never going to get to it, or the next day. If I haven't
replied in 24 hours, no joy. It's never going to happen.

**David Mytton** (07:42): Just gone. I suppose, that's the disappearing messages
that you see on Signal. And now, WhatsApp has it as well. I think there's a lot
of stuff that we say to each other that in the past, you'd have just said it in
person and it wasn't recorded. And it was just an ephemeral conversation. And do
you really need all that history and everything? Yeah.

**Cate Huston** (07:59): Yeah. There's some comfort that humans have in saving
everything, like they'll come to it later. But I do believe that the things that
we really care about, we end up curating on some level. It's like photographs.
If you have millions of digital photographs, how many of them do you ever look
at? But people used to curate photo albums that tell the story about something
important that happened to them. And those, they would look at again and again.
And in this default to just saving everything, it just becomes too overwhelming
to think about what do we even want to look at.

**David Mytton** (08:29): That's a good point. And I suppose the storage of that
data is also another interesting technical question. So, you can remove all the
analytics as a product decision. But then if you've got to store the data,
what's your take on how developers should think about doing that with
encryption? Obviously, everyone does, hopefully... full disk encryption, but how
do you think about that in the database or field level encryption? What's your
take there?

**Cate Huston** (08:53): I might be alone in developer saying this, probably
because I rarely get the opportunity to write code. But I actually think the
GDPR was a good thing. Because, it forced people to think critically. I mean, it
was incredibly annoying. The physiotherapist office tells me I have to fill in a
form about GDPR. But I think it forced everybody to think critically about the
data they were storing, and how they can get rid of it. That's a good thing.

**David Mytton** (09:16): Yeah. Makes sense. So, DuckDuckGo is associated mostly
with the privacy-first search engine. What can you tell me about how the product
architecture is designed around privacy?

**Cate Huston** (09:26): We don't talk about the architecture of the search
engine publicly. I can tell you that privacy is just top of mind, for everything
we do. We design everything with privacy in mind. We have a dedicated privacy
team. We have a process called Privacy Triage. So if you want to build a
feature, the privacy team needs to look at it from a privacy perspective, and
sign off that it is sufficiently privacy preserving.

**David Mytton** (09:49): Interesting. Okay. And can you tell me about any of
the things they might consider, as part of that process?

**Cate Huston** (09:54): Yeah. So one of the things I think is really
interesting is K-anonymity. So this is particularly interesting I think, when it
comes to location search. And so it's like, what... I'm going to absolutely
butcher the explanation of this. But it's like, if you are in a crowded city
block searching for what's near me, then you are actually relatively anonymous.
Because, there's a lot of people there. And so you can look at a smaller
geographic area and get the right mix of accuracy, without compromising
somebody's privacy. If somebody is in the middle of nowhere, then their location
is much more revealing. And so you need to have a much lower fidelity of their
location and a much further distance of what constitutes near me, in order to
preserve their privacy.

**David Mytton** (10:41): Are there any privacy related tools or technologies
that you think developers should be aware of, or should consider using in their
own implementation of functionality?

**Cate Huston** (10:49): Yeah. So actually, we have a couple of open source
projects that other companies can use. So if you deal with external links... So
for example you have a social feed or a news feed, we have a Smarter Encryption
data set. So companies like Pinterest use it to make sure that their users view
the web through encrypted connections, wherever possible.

And another data set that we provide is called Tracker Radar. So it gives
insight into third party domains on the web. And so you can learn how prevalent
a domain is on the web, who owns it. If it's known to use additional cookies, or
other tracking technology. So it can come in handy when you're auditing your
product, or evaluating third party solutions that you want to use.

**David Mytton** (11:28): Okay. So this is almost like a client side library
that you're collecting and updating on a regular basis, but can be evaluated as
part of someone else's application?

**Cate Huston** (11:37): Yeah. I mean, this is what we use in our own
applications. We use a Smarter Encryption and a Bloom filter, to do local HTTP
upgrades. And we use the Tracker Radar data set to filter out as much tracking
as possible, as users browse the web.

**David Mytton** (11:50): Yeah. That makes sense. And how do you make the trade
off with those kinds of lookups I suppose, in terms of performance? If you've
got a very large data set of things you've got to compare against, that could
potentially have a performance impact when you're just browsing the web.

**Cate Huston** (12:04): Yeah. So, it depends. So the Smarter Encryption like I
mentioned, uses a Bloom filter. Which is just a very performing data structure.
On iOS, we use the content blocking technology. Which I think, compiles
everything into a set of regex that runs before things load and it's also
extremely effective.

**David Mytton** (12:22): Makes sense. And how do you think about the
differences in the implementation on desktop, versus mobile? Is there any
difference at all?

**Cate Huston** (12:29): So, the vast majority of our privacy code is shared
between macOS and iOS. So you can actually see it on GitHub, as BSK kit. Apple
engineers on the team might focus on one platform or another, but most of them
work at least somewhat across both. The bigger difference is less about how
we're building things, and more about what are the key features on the desktop
that haven't really mattered as much on the mobile browser, but the desktop
users will find really pressing? So our new macOS browser which shipped this
week, and it shipped with password management. Which is something that we have
had a huge amount of growth on iOS and Android, without.

**David Mytton** (13:04): And you are essentially implementing your own password
managers, like a competitor to... I suppose 1Password is probably the most
popular one on Mac. And there are others as well.

**Cate Huston** (13:13): I wouldn't say we're thinking about competing with
1Password. It's more about meeting people's expectations for their browser. They
want their browser to remember their passwords. They expect it. And their credit
card information. This is always my big complaint. I'm like, I need to be able
to shop with my credit card remaining wherever it lives.

**David Mytton** (13:32): Yeah. Okay. And how have you thought about the
security architecture of that? Because it's quite critical information, storing
all the passwords and credit cards.

**Cate Huston** (13:40): Yeah, totally. So everything is encrypted and stored
locally, on device. We're very intentional about it. Very intentional

**David Mytton** (13:48): Is that open source? People can inspect it?

**Cate Huston** (13:51): So eventually, the Mac browser will be open sourced. As
with all our engineering work. The BSK kit is already open source, so I think
some of it is there. We've just been really focused on getting it out the door.
So we have to just, I don't know. Tidy things a little bit, before we put it in
a public repo. But that definitely will be coming soon.

**David Mytton** (14:12): Makes sense. And so, this is a shared library across
both platforms. And are you implementing that in Swift or some other language?

**Cate Huston** (14:21): Yeah. That's in Swift. Yeah. The Smarter Encryption,
also on GitHub, is implemented in C++. And we share some code through
JavaScript. And iOS and macOS. The majority of the code is written in Swift. And
on Android, the majority of the code is written in Kotlin.

**David Mytton** (14:38): Okay. And how are you thinking about cross platform?
The strategy around that for I suppose, Windows would be the next logical step?
But Android, or maybe even Linux.

**Cate Huston** (14:48): Yeah. No comment on the Linux thing. So, it's really
interesting. We are doing the same thing on all the different platforms. But on
every platform, we're pretty constrained by the way that the WebView on that
platform works by default. It's like I said, on iOS we do a lot of stuff via
content blocking. On Android, we spend a lot of time on the network calls that
we do have access to. Which isn't all the network calls.

We can share code at the very top of the stack. So we do use some JavaScript
injection to protect against certain things. And we can share code at the very
bottom of the stack. So the Smarter Encryption Bloom filter performant lookup,
[inaudible 00:15:27] in C++, but in between, having to work the WebView. And
actually, it's very hard to share code there with that huge constraint on each
platform that just works completely differently on each platform.

**David Mytton** (15:39): And I suppose the trade off there is not having to
either implement, or fork your own rendering engine. Like the Chromium engine,
or something like that.

**Cate Huston** (15:49): Yeah. Oh my God. That would be a world of pain. A
relatively small engineering team focused on what is our core value proposition,
which is privacy simplified. And the rendering engine, I think, is a commodity.
People at Mozilla would disagree, but it doesn't add unique value to what we're
doing.

**David Mytton** (16:09): Yeah. So going back to the search side of things, what
can you tell me about the infrastructure and the scale challenges of having to
deal with I think, it's over a hundred million queries per day. Right?

**Cate Huston** (16:22): Yeah. So our infrastructure consists of hundreds of
Linux systems, which is spread around the world. And our search engine is
primarily powered by Pearl actually, which we use to learn many different
services, and provide all our features. As our user base continues to grow, we
just continue to expand our systems and global footprint.

**David Mytton** (16:40): And how does the index and ranking work? I know that's
a great secret for my search engines, but what can you tell me about that?

**Cate Huston** (16:49): Yeah. Well when people search, we believe that they're
really looking for answers as opposed to just links. So, there's many categories
of searches. So restaurants, Kardashians, code documentation. And there's a
specialized search engine, like Trip Advisor. Or a content site, like
MetroLyrics. Or some other source like Stack Overflow, that really does a better
job at actually answering the searches than a general search engine does with
just links.

So our long term goal is to get people instant answers, from the best sources.
So to do that, we get our results from over 400 sources. And these include
hundreds of vertical sources delivering niche, instant answers. And there's
something called the DuckDuckBot, which is the crawler. And they crowdsource
sites like Wikipedia, which is stored in our answers index.

Of course we have more traditional links in the search results, which we also
source from multiple partners. Although most commonly from Bing, and never from
Google. We just continue to partner with more sources, to bring people the best
instant answers from the best sources. And our focus is synthesizing it all
together into a superior search experience.

**David Mytton** (17:58): And how do you think about the trade off between
privacy and search quality? Because I suppose the argument that Google would
make is, they know more about you so they can give you more relevant results.
And ultimately, more relevant ads. Which if you are getting relevant ads to
searches, that could be argued to be a good thing.

**Cate Huston** (18:17): So we actually don't believe that they're at trade offs
for search quality, as it relates to privacy. But many of the harms that exist
on the internet today are due to a lack of privacy and data collection. So
unlike other search engines, we don't alter results based on somebody's previous
search history.

There would be no way for us to do that, because we don't track our users. So
this helps people get out of the filter bubbles, or avoid that rabbit hole in
the first place. Because in other search engines, they're feeding them the
results that have the highest likelihood of getting clicked. Which just creates
this reinforcing cycle. Rather than showing them the result that's actually the
most relevant.

**David Mytton** (18:54): And how does that then impact on your ability to deal
with the people who are working against you? So, people who are doing search
engine optimization. Which can be legitimate in some cases, but often results in
a lot of spammy content. And then ad targeting, how to improve that. Because
there are ads on. DuckDuckGo, right? How does that work?

**Cate Huston** (19:14): Yeah. They're contextual ads. I wouldn't say people are
working against us. People are normally working for their own agenda, and it's
normally just marketing metrics. And they're doing what they think will help
them meet those metrics. So I think we have to show people that there's another
way. DuckDuckGo is profitable without this level of data, without tracking
people's behavior. So, it's clearly possible. Contextual advertising can and
does work really well. And I don't think it makes sense to demonize individuals,
when the problem is really at the platform level. Google has trackers on nearly
80% of all sites.

**David Mytton** (19:50): Wow. I suppose that is either... Well in the old days
it was the +1 button from Google Plus, which has disappeared now. But I assume
that this is Google analytics, and they're using that data to learn a lot about
how people are behaving on sites.

**Cate Huston** (20:03): Yeah. Totally. Google Plus turned up in my website
analytics recently. My default website analytics was provided by WordPress. And
I was like, who knew Google Plus was still a thing?

**David Mytton** (20:19): Yeah. I think there's a product that they still have
internally for Google workspace users and all those kind of things, so you can
still make use of it.

**Cate Huston** (20:27): Yeah. I thought it was so funny.

**David Mytton** (20:31): And what do you think is the role of the web browser
in protecting user privacy? And how are you thinking about this with your own
browser product?

**Cate Huston** (20:39): Yeah. If you look at the sets of products that
DuckDuckGo is rolling out, you can see it's moving down the stack. So, a search
engine protects your search history. But to protect the tracking on the website,
so the things that causes creepy ads to follow you around the web. You need to
operate at the level of the browser.

And now we're moving down to the operating system level. So we have device wide
app tracking protection on Android, because that's how you protect people from
some of the really creepy things that apps are doing. So in everything you have
to be at the layer where the problem happens, in order to prevent it. So being
integrated into the web browser as an extension, or being the browser like the
new macOS browser, launched this week, tell all your friends, is necessary to
block tracking your websites.

**David Mytton** (21:26): And would you class your email forwarding service or
your email privacy service as in between that? As passing the content, as it
goes from the sender through to the user?

**Cate Huston** (21:37): Yeah. That's almost up the stack, isn't it really? But
I do really love that product.

**David Mytton** (21:42): And how does that work? Is it using the same block
lists and the Bloom filter type technology, just on the back end?

**Cate Huston** (21:51): For everything, we end up building slightly customized
block lists based on our understanding of the domain. But, yeah it essentially
works in the same way.

**David Mytton** (21:57): Sounds good. Well before we wrap up then, I have two
lightning questions for you. So the first of these is, what interesting tools or
DevTools are you put playing around with at the moment?

**Cate Huston** (22:09): Actually, for [inaudible 00:22:11] and to get started
with visual studio and C++ code. Because, I have a Windows team now. I always
feel like I should be able to check out the code and build it yourself. So I
have to do that. In my personal time, I'm more playing with creative tools. So,
I have a Glowforge. The laser cutter. Which I absolutely love. I was totally one
of those pandemic crafting people.

**David Mytton** (22:34): Excellent. And what is your current tech setup? What
are you using on a daily basis?

**Cate Huston** (22:39): Yeah. So leader of a native apps team, I have one to
two of everything. I have a Windows computer, I have a MacBook. I have an M1
MacBook. I have an iPad, an iPad Pro. An iPhone, an Android phone. Used to have
an Android tablet too, but it's more of a paperweight now. And then across the
devices, I have a pretty vanilla setup. So with that many, obviously I would
prioritize the things that sync well across devices. So I love Simple Mode,
1Password, Spotify. Normal things. And of course, DuckDuckGo browsers on
absolutely everything.

**David Mytton** (23:17): Of course. Well, unfortunately that's what we've got
time for. Thanks for joining us, Cate.

**Cate Huston** (23:21): Thank you.

**David Mytton** (23:24): Thanks for listening to the Console DevTools podcast.
Please let us know what you think on twitter. I'm @davidmytton, and you can
follow @consoledotdev. Don't forget to subscribe and rate us in your podcast
plan. And if you are playing around with or building any interesting DevTools,
please get in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
