---
title: Web standards & privacy
who: Desigan (Dees) Chinniah
whoLink: https://twitter.com/cyberdees
org: Tor / Ex-Mozilla
orgLink: https://www.torproject.org/
what:
  We discuss the evolution of web tech from websites to complex decentralized
  applications running on browser APIs, the competitiveness of the browser
  rendering engine versus the UX layer and how developers think about privacy.
  Does it live in browser settings, extensions or on the protocol core level?
season: 2
episode: 8
date: 2022-02-24T06:00:00Z
duration: 32:47
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/b6380552-15dc-4bd0-bc45-286a4a498733/audio/b67a47d6-0c97-4ca6-801b-f37ddf75c59b/default_tc.mp3
draft: false
summary:
  Web standards & privacy - a devtools discussion with Dees Chinniah (ex-Mozilla
  / Tor). Episode 8 (Season 2) of the Console DevTools Podcast.
metaDescription:
  Web standards & privacy - a devtools discussion with Dees Chinniah (ex-Mozilla
  / Tor). Episode 8 (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/tor-desigan-chinniah-profile.jpeg
topImg2Src: /img/favicons/www.torproject.org.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/b6380552-15dc-4bd0-bc45-286a4a498733?dark=true
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server 
  Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute 
  and cyber security company, StackPath. He is also researching sustainable 
  computing in the Department of Engineering Science at the University of 
  Oxford, and has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode, we speak with Desigan Chinniah, previously at Mozilla, advisor
to many web startups and now on the board of [Tor](https://www.torproject.org/).
We discuss the evolution of web tech from websites to complex decentralized
applications running on browser APIs, the competitiveness of the browser
rendering engine versus the UX layer and how developers think about privacy.
Does it live in browser settings, extensions or on the protocol core level?

Things mentioned:

- [Mozilla](https://www.mozilla.org/)
- [Figma](https://www.figma.com/)
- [VS Code](https://code.visualstudio.com/)
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [Gecko](https://hg.mozilla.org/mozilla-central/)
- [WebKit](https://webkit.org/)
- [Brave](https://brave.com/)
- [Firefox](https://www.mozilla.org/firefox/new/)
- [Opera](https://www.opera.com/)
- [Edge](https://www.microsoft.com/en-us/edge)
- [Homomorphic encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption)
- [Replay](https://www.replay.io/)
- [Glitch](https://glitch.com/)
- [Sourcegraph](https://about.sourcegraph.com/)
- [Desiganchinniah.com](https://about.me/cyberdees)

{{< rich-title-5 icon="future-head" >}}About Dees Chinniah{{</ rich-title-5 >}}

Desigan Chinniah is a creative technologist. After two decades of dot-com checks
in, Dees now has a portfolio of advisory roles (Ably, Coil, Replay, SEDNA, Zama)
and board positions (Ushahidi, The Tor Project). He invests early into diverse
and under-represented minority founders and is a mentor at Design Club, Mozilla
and Seedcamp

### Highlights

{{< podcast-episode/clipping time="18:44" >}}

**Desigan:** Does a content creator need to be paid through some token or
cryptocurrency? No. I'm sure if you just offer them good old fiat they'd be more
than willing to do that. But will it help with discovery and new business models
that they could monetize their content? Almost certainly.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="18:44" >}}

**Desigan:** Historically where content creators have made, let's say most of
their revenue it's historically been on ad networks or the like and even then
there was this discrimination depending on where you were in the world.

The amount of revenue you could generate from your CPMs or what have you,
depending on if you were in North America or you were in some part of Latin
America or Asia or Africa was very different. It didn't matter even if you were
creating good content. All of a sudden, I feel with Web3, it will just level the
playing field.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console podcast. I'm David Mytton, co-founder of
console.dev free weekly newsletter highlighting the best and most interesting
tools for developers. In this episode, I speak with Desigan Chinniah, previously
at Mozilla, advisor to many web startups and now on the board of Tor. We discuss
the evolution of web tech from websites to complex decentralized applications
running on browser APIs, the competitiveness of the browser rendering engine
versus the UX layer and how developers think about privacy. Does it live in
browser settings, extensions or on the protocol core level? We're keeping this
to 30 minutes so let's get started. I'm here with Desigan Chinniah. Dees, Thanks
for joining the Console podcast.

**Desigan:** It's great to be here, David. Thanks for inviting me.

**David:** Let's start with a brief background. Tell us a little bit about what
you're currently doing and how you got here.

**Desigan:** What am I currently doing? I do a lot of things. You know me. Got
my hands in lots of pies. Today I have a small portfolio of advisory roles,
typically early stage technology companies up to series A, some of them series
B. Give back to the not-for-profit world. I sit on a few boards. I'm on the
board of for Ushahidi out in Kenya as well as the Tor project. I've started, at
the beginning of this year, starting to look at some early stage angel investing
if you want with a focus on helping underrepresented minority founders. That
could be women, people of color and things happening on the African continent
because I am African after all. I believe there's lots of opportunities in that
part of the world.

**David:** Excellent. Well, let's go a little far back in your history to your
time at Mozilla and talk a little bit about the web and really that's quite a
broad topic but it feels like there's been an interesting development cycle over
the past few years, maybe 15, 20 years ago, everything was on the web and you
access things through the browser. Then in the years after the launch of the
Apple app store there was much more of a push for native apps.

But now we are seeing a renaissance in web-first products and they're utilizing
new browser capabilities and maybe Google Docs was the first there, but we're
all used to using pretty advanced products now like Figma or a VC Code and
they're all built on web tech. Why do you think the web's making a comeback and
why do you think that's important?

**Desigan:** Well, the web's always been there. Even in the world of native or
app stores as such unbeknown to most people and most people don't really care
because they just want things that work. A lot of it is web wrapped within the
native pieces. The web's always been there, the challenges I believe, having sat
around lots of standards bodies in W3C meetings, et cetera, through the years
you can't see me right now but there is gray hair, a lot to do with standards.

Native could just go so much faster. There were almost no rules. There was no
sitting around a table for months, if not years on end to get something across
the line from all the browsers to adopt it. Native just moved a lot quicker yet,
even though that was the case, when you had to really get things working, let's
say, ultimately you fell back to web technologies most of the time.

Whether that's JavaScript or others, it's just that in some scenarios, gaming
was a good example I worked a lot on niche L5 movement and gaming was a big
impetus for that. You couldn't get things like local storage and a whole lot of
other things that just the web was behind on so there's a huge demand and a push
for the web to catch up but native just always was going to move faster.

**David:** Why do you think that is? Is it the process of grading the web
standards?

**Desigan:** Well, web standards is a long agious process. I think the
interesting piece here is yes, there are long drawn out discussions over many
workshops meetings, lots of travel, obviously not in a pandemic and actually
that may have hindered some things in some ways and also moved things a bit
faster in other ways. But I think that fascinating thing with standards is most
of the time or almost every single time the end outcome, everyone agrees on.
They all agree that something needs to go into a certain direction. It's then
almost the, I don't know, semicolon, colon space, double space arguments that
happen on how do you get to the end goal and that's where people have lots of
differences of opinion and that's normally the part that drags along.

**David:** Then once the standard's been decided it's down to the browsers to
implement it, assuming it's a web standard, of course?

**Desigan:** In theory, yes. It probably happens slightly differently as in
often is the case. It has been browsers that I've seen to be driving a standard
of some sort. Then the rule of thumb was, well, a browser or people within a
browser vendor would come up with some cool idea, they'd start implementing it
and they'd put it into their browser or browser engine, Gecko, Chromium, WebKit,
then normally have it experimental and behind flags. Really your hope of getting
it to becoming a standard was getting one other browser vendor to adopt some of
that as well, or some of those APIs as well.

Because then you have a forcing function of the others going, are we going to
miss out? We need to play along. That comes down to a lot of, let's say lobbying
almost politics if you want, lots of discussions, lots of conversations, lots of
sharing of code or pathways. But in more recent times it's not just browser
vendors that are leading the way in terms of standards. You look at web
payments, a lot of that came out of Shopify. There are other parts of the web
now that have just as much influence as the browser vendors. That's a good thing
because for the longest time it was felt that it was only if you were within
Chrome or Firefox or Safari that you could lead and set up a standard.

**David:** Browsers have gone through quite an interesting cycle for the last
couple of decades. I remember Mozilla Firefox was the alternative to Internet
Explorer and now today Google Chrome is essentially the most popular browser but
we're seeing the rise of alternatives like Brave on the desktop certainly and
Safari is obviously popular on Apple devices because you have no choice. What's
your take on the current ecosystem and is there space for these multiple
browsers?

**Desigan:** Almost certainly. Users want something that they're comfortable
with and convenient for their needs and every user is different. A browser or a
gateway to the internet is where everyone's interactions mostly happens. You
really want to get those consumers and once you get a consumer, having them
getting to change to a different browser or gateway is really difficult. Once
you do something that is a bad or not a great experience for a user and they do
attempt something else and that gives them a better experience, getting them
back is almost impossible as has been the case for the Firefoxs and the Operas
of the world.

Before them, once you get down to single digit market share, it's really hard.
The Braves of the world, even Microsoft Edge of the world have made some
interesting choices in terms of their browser engine using Chromium. That
obviously helps a ton with web compatibility because web developers are
typically testing and curing and automation testing against Chromium and often
forgetting about others. They will do it against WebKit or Safari because
frankly of the market share, they know that they need to.

But other engines like Gecko or Servo feel the pain there. In some way also
because of standards. When you talk to a developer, there's this assumption it's
like, well, Firefox is great or Mozilla are great with standards. If my stuff
works in Chrome or in Chromium, surely it works in Firefox as well so I just
won't test that and that's not necessarily the truth. Good example is right now
if we're using a service that of course I loaded up in Firefox and first thing
it greeted me with was, you may want to use this in Brave, Chrome or Edge
because it doesn't work.

**David:** That's given Google quite a lot of power really with the control of
the rendering engine.

**Desigan:** Yeah. It was interesting I was talking to some folks that were core
engineers at Chrome just yesterday, they're no longer at Chrome. They were like,
"At the infancy of Chrome our intention was not to be almost as powerful as we
are. It was just to create an alternative and to create an experience that we
thought was lacking." They even started with WebKit as a rendering engine until
they realized that they needed to create the Blink project and Chromium it just
has gathered steam to such an extent that everyone just expects it.

But then you've talked about other browsers and there's a plethora of other
things appearing. I think you and I think about a browser as a search bar, tabs,
bookmarks, those sorts of pieces. There are some people that are taking that
head on in terms of purely UI/UX. Does a browser need to look and feel like
this? Is this just a mental model we have built up and we need to just almost
crumple it up, throw it away and start again? There's a school of thought,
that's great, but is UI and UX enough to get users to change?

If you don't come along with other things like speed and performance and all of
those other pieces does the UX and UI, is that enough to change your mind?
Therefore, people for example, Mighty app, I'm a Gecko user, I'm a Firefox
Nightly user so I'm not a Chromium user which means that I'm still way back on
the wait list for Mighty app, which is fair enough, but I did speak to one of
the lead engineers in Mighty app, again just yesterday because they're former
Mozilla, which is always interesting finding a Gecko person now working on
Chromium.

The throwaway statement was something like, it's not that different. There are a
few new things you have to learn and get your head around but it's not that
different, but they're focused not on the UI/UX maybe today, but purely on
performance. There are hundreds of millions, if not billions of people, using
Chrome certain things are just not performant, can we create an experience
that's very performant that will outperform Chrome and that's what they're going
for and charging for it.

**David:** It's an interesting approach and it's quite different from how Brave
and Microsoft Edge are thinking about it because the UIs are very similar when
you compare them to Chrome but they are focusing on the features around that.
For Brave there's a lot of integration with Web3 and in particular crypto and
they have a focus on privacy and Microsoft are trying some different things with
how they integrate Edge into the operating system and even building it on Linux.
Is that the way that you see this going where the rendering engine is almost
commoditized, everyone's focusing on the layer above?

**Desigan:** Projects like the Chromium project allow for that. Because on the
baseline we can take the latest, we're on level footing with everyone else and
like any good standards let the competition happen with features and speed and a
whole lot of other things. But the starting point is we know everyone's starting
from this point so let's look at the differentiators that consumers may desire
and may want them to stick with us. Sometimes that may be the UI/UX. Other times
it would be Web3 features, whether those are wallets or other forms of payments
or payment trails, et cetera.

There are even some new browsers that have shown up that I don't know what
they're doing yet. The browser company has raised a lot of money, I've not yet
seen anything. There's even organizations in Europe or in UK, in Cambridge. I
think there's Flow that's come about that's totally a new rendering engine. I
haven't necessarily seen it yet. Then there's this blurry line which is
interesting between certain things that are out, mental model is a web browser,
then there's certain things that are, for example, let's call it a search engine
but is a search engine a browser and is a browser a search engine. Then you get
the emergence of something like Neva, private-by-design search but really when
you use it on something like iOS or Android it's a browser, just the starting
point is a search box.

**David:** Right. I suppose that's because almost all users start with the
browser and everything, almost everything is now browser first, you are
interacting with the web and all the services you use, all the platforms through
the browser. There are very few native apps on desktop, although it's still
different on mobile, is that the right way to think about it?

**Desigan:** Almost certainly. I'm looking at my desktop browser right now and
there are only three active things open. One is a Spotify and Sonars because I
had some music before we started chatting. The other two are Chrome and Firefox
running. Those are the only applications on. I turned off my VPN but nothing
else native running and almost never is.

**David:** This is particularly interesting given the recent innovation we're
seeing in Apple's silicon and the performance they're getting there and they're
really pushing native apps and the performance you can get there. But actually
what matters is the performance of the rendering engine and the browser and how
does that interact with the CPU.

**Desigan:** That's where Mighty is going with it. Can we really extract every
ounce of performance out of that interaction rather than from a native
perspective?

**David:** That makes sense. How should developers think about this when they're
building their applications, web first, should they focus on the standards
compliance to make sure they're able to hit that common denominator across
multiple browsers? Or should they just target Chrome like a lot of people do?

**Desigan:** I want to see a healthier web, I would never say just adopt one
browser engine. I'd like to see the browsers start differentiating a bit more,
pushing features faster. One thing when you get down into web standards is
speed. It's, slow and that is the reality. If you want interoperability and
agnostic abstraction layers and protocols, rather than just platforms being
built then you need lots of people to agree on the path forward and that just
takes time.

**Desigan:** And the way the web is working today, you mentioned things like
Figma and other things, these sorts of applications can release multiple times a
day and you could get a whole new experience in the afternoon than you would in
the morning. That's not the case with browsers even though browsers now release,
what? Every few weeks, and if you're someone like me, a stable release every few
weeks. Someone like me I'm using, for example, Firefox Nightly which means I'm
getting the morning or last night's build and that's dangerous so the average
person probably does not want to be doing that.

**David:** This leads us into the discussion around Web3 which at the moment
mostly means blockchain and cryptocurrencies but should really be much more
broadly defined as all types of decentralized protocols and local first. We've
gone from Web1, the early days of websites to Web2, which was more of a
centralized approach and the social platforms and now Web3. What's your take on
that evolution and where we're going?

**Desigan:** I was thinking back about this actually a few days ago and imagine
of just a few general conversations. Because of course, Web3 gets thrown around
a lot. I started using Web1 and Web2 a bit as well in my conversations. We talk
about my career at Mozilla and Firefox, that was really the second decade of my
career which is what most people know me from. There was a decade before that
which was, believe it or not, after the first \[inaudible 00:16:23\] or at
us.com if you're not in the UK. Then there was early Skype and early PayPal and
the BBC World Service and eBay.

**Desigan:** I was eBay lead front and engineer and I helped eBay go from
table-based design to CSS which at the time was during Jeffrey Zelman and Andy
Budd and a whole lot of those folks, I was part of that scenario. In some way I
guess I worked on a design system before even Gina turned the coin design system
because I call it a CSS toolbox, a toolkit or something. That was a bridge
between engineers and designers. I definitely saw a lot of Web1 where people
weren't afraid, they were ready to try anything and everything and just throw
things around but it was a little bit chaotic and we embraced the chaos.

Then I definitely spent my more formative years in the Web2 world, more
interactive web, lots of JavaScript, Flash, or trying to deprecate Flash from
the web which I worked on. I moved on from, let's say the browser world, maybe
about three and a half years ago but certainly that was the start and the
infancy of Web3, if you want, and blockchains and cryptocurrency and that sort
of thinking. I've definitely seen it from outside the browser world and,
attached to it in some ways. I see Web3 as akin to Web1, nothing's impossible
here.

Let's just go and do it. We don't know who wants it or not. Let's do it and
let's see what it is. That's a good thing and it'll carry on for a little while
and there I say it'll evolve probably sooner than how we went from Web1 to Web2,
it'll probably evolve into, that's Colin probably, someone will slate me for
saying Web4, will be akin to web two.

There's a little bit more structure around it that people have a clear
understanding of where things are better or the winds are and how do they grind
and make those things even better and take them to the next level and you'll see
almost bigger, better businesses and opportunities arise and this Web3 phase
already solving lots of interesting things, but also bringing up lots of
interesting things to consider, going to be a little bit of a messy phase. How
long that lasts is a different scenario.

**David:** That makes sense. Do you think this will solve the problem of funding
for content creators?

**Desigan:** Yes and no. Does a content creator need to be paid through some
token or cryptocurrency? No. I'm sure if you just offer them good old fiat
they'd be more than willing to do that. But will it help with discovery and new
business models that they could monetize their content? Almost certainly. That I
think is interesting. It gives more opportunity for content creators. It's
almost more financial inclusion. Historically where content creators have made,
let's say most of their revenue it's historically been on ad networks or the
like and even then there was this discrimination depending on where you were in
the world.

The amount of revenue you could generate from your CPMs or what have you,
depending if you were in North America or you were in some part of Latin America
or Asia or Africa was very different. It didn't matter even if you were creating
good content. All of a sudden, I feel with Web3, it will just level the playing
field. Now you can be anywhere in the world. If you're a gaming streamer or
you're a poet or you are a writer, it just doesn't matter where you are. You
could be earning just as much as someone in North America, in New York city or
wherever the case may be just by producing good content and building up an
audience.

And you wouldn't have to also then concern yourself about, "How am I getting
this revenue? I'm in a country that US dollars, I just can't be remunerated in
that." All of a sudden, well, maybe some of this cryptocurrency stuff is
applicable. Maybe other things that Web3 will allow, make this more feasible for
me to get paid without any hindrances. That starts becoming really interesting
for creators.

**David:** Do you think the same applies for open source where we see a huge
amount of software relying on libraries that are often built and maintained by
either a few developers or maybe just volunteers?

**Desigan:** There's definitely been inroads into, let's say open source
developers and maintainers, organizations, as well as individuals recognizing
the fact that those are people that are helping to stand up their projects.
Whether it's more commercial things GitHub sponsors or Open Collective, et
cetera. I think there are things that have been explored that start helping. It
does have a challenge where maybe it's only the top X percent that really get...
I think the part that I've seen interesting thoughts is around almost package
maintainers which are definitely totally disregarded.

Some of the biggest organizations in the world depend on small packages. Their
entire system and service would fall down if this was not maintained and it's
normally one person somewhere in the world that they don't even know where they
are, or who they are that maintains this package for no thank you at all.
Recently I've seen efforts like [Flossbank](https://flossbank.com/) by Joel
Wasserman, which is really trying to solve for this and I think that's really
interesting because the package maintainers are pretty important in this whole
puzzle.

**David:** And the packages are often entirely separate from the software. You
often see the binaries compiled then some packages for the common systems. But
more often than not, you're using a package that's built by someone somewhere
else, unrelated to the project and it works for six months then they have
something else come up and you are bringing in this dependency and it's not been
updated and that's a real problem.

**Desigan:** It really is. Someone like Joel could talk about this for hours.
But what they're trying to do is say to an organization, attach your GitHub repo
and others, we'll show you what your dependencies are. Some of them you'll be
well aware of because it's people in your organization that maintain them or
write them. Some of them are from larger communities of open source developers
you'll be aware of. But did you know that there are all these other little
dependencies that you probably have no idea that your service requires them? And
hey, you should potentially think about remunerating these people in certain
ways. One part is just making definitely the large organizations aware. Often
they're just not even aware.

**David:** Where does privacy come into this? Where should that live? Because
we're often assuming that users will make the choice and change settings in the
browser, or maybe they install an ad blocker or perhaps they should live on the
protocol level. What's your thinking on that?

**Desigan:** Obviously as someone that's lived in this world, it's part of my
DNA but you also know that more and more so it's getting mainstream, just the
thoughts of privacy, but that doesn't necessarily get you users. The old adage
is convenience trumps all else. Thinking about this, most developers or
engineering teams or product managers think about this because it is almost
table stakes. Especially when you're surrounded by NOW-regulation and laws like
GDPR, et cetera.

If you're not taking privacy of data seriously, then you're already in a
terrible place. Then there's other things like ethics in technology and what
have you. I definitely feel as a baseline everyone's already thinking about this
stuff. It's just that how far do you want to take it? Doing this really well is
hard and sometimes not as fast as you want it to be. It's really the teams that
really question every single thing. Within Mozilla, we would spend way more
time, 10, 20X, more time thinking about every aspect of, do we need this data?
Is it important?

Even at the starting point, do we actually need it? If we need it, do we need it
forever? Do we need it for 30 day? How do we delete it? How do we discard it?
Those are really hard challenges and often big organizations want to move a lot
faster so they just do the simplest possible thing. Of course that's great up
until something happens. A data breach, you have more copies of all this data.
You didn't really need it, but you thought, well, I wasn't going to spend five
hours deciding which bits I needed, I'll just take everything.

When it turned out that you only needed one piece of data and even then you
could have had it anonymized and your machine learning or analysis could have
come from aggregate data, new techniques, some of the stuff I'm looking at with
Rand out in Paris, new techniques like homomorphic encryption, make things
interesting where you suddenly can do machine learning, data science,
unencrypted data without decrypting it.

All of a sudden, well that means you don't have to have anything on the cloud.
We're not likely going to have a breach. We don't have any data to lose. Can we
have data that's local to users that's just for them, a copy for them? Then even
further field which is some of the Web3 stuff is going in the direction of
giving users the control of their data and allowing them to make choices on when
to share and not share their data with services. There I say, even monetize
their data if they so wanted to. That's the next level which really becomes
interesting.

**David:** Of a developer this means the way they handle data is built into
their technology that they're using so they, I suppose, have to make fewer
choices because there's a lot of the decision being taken from them by the
protocol or where the data's being stored and you get the privacy by default.

**Desigan:** There was a period of time, not long ago where organizations or
services actually had to say, we are a privacy company. We are
private-by-design. This is what we do. I feel like almost if anyone's needing to
say that anymore, there's already some, why do you need to say that? Surely this
is just what you do. Maybe it is the table stakes and anything that can help
that from a protocol level, et cetera, is going to be welcomed by the engineer,
the product manager, because then they can focus on the things that help them to
compete and to differentiate and to really create better user experiences.

**David:** That makes sense. It's all by the convenience so for developers only
have to make a few minor choices and they get all of the data governance and
privacy just as part of the tool. It just makes it a lot easier to build that
into whatever it is they're trying to get out to users.

**Desigan:** Yeah. The starting point is always going to be difficult. What are
these rules? What are these regulations? What are these check boxes? I've got
consultants coming in. This is painful. Once you get over that though, they're
probably all going, "This is amazing. It was painful getting here, but now I see
why it was important."

**David:** Absolutely. Well, before we wrap up, I have two lightning questions
for you.

**Desigan:** Yep.

**David:** The first one is, are there any interesting dev tools you're playing
around with at the moment?

**Desigan:** I haven't really been pushing code and viewing source much
recently, but I'm still close enough to the whole ecosystem. There's also this
new scenario which you're seeing probably with console is dev tools can even go
out and raise venture money and investments. Some of them I'm helping former
colleagues with. More recently Replay, which is looking at time travel
debugging, super interesting. I watched it as a pet project within Mozilla,
Banding around for a few years and now it's out of Mozilla and picking up steam
with some serious money behind it.

That's great for Brian and Jason. A lot of them touch former Mozilla colleagues.
A few weeks ago, I was catching up with Adam Stevenson who's now the product
lead over at Backstage, which is from Spotify which is rather interesting
allowing large engineering teams really sort up their internal documentation and
code samples and demos which I think is fascinating. Regularly catch up slightly
older, but catch up with Anil Dash and Jesse von Doom over at Glitch and I think
the Glitch folks are really thinking about some fascinating new things coming so
watch that space.

Beyang and I caught up a few years ago in Sourcegraph and it was only until he
told me about it. "Why can't you do search on your code repositories?" Then I
was like, "Yeah, why can't you?" He is like, "Exactly. That's why we're solving
for this." Some of these things don't from the outset feel and look very sexy
then when you look at it, you go, "Oh my God. Why haven't we had this before."
And talking collaboration it's one I just came across this week and probably
because they raised some funding, but Eraser, which is collaboration but for
engineering teams that are putting up their schematics and their architecture
designs and what have you and collaborating it in a live space, we've seen it
for Figma and we've seen it for other things, why not for as you build up and
architect your service or product for engineering teams that look fascinating in
itself? Those are some of the few.

**David:** Then the second question is what is your current tech setup? What's
your daily driver for your hardware and what software do you use?

**Desigan:** Outside of a pandemic, I'm not really on my laptop a lot. That's
slightly beaten up MacBook Pro, 30 an inch, which interesting enough in recent
weeks has had a sticky space bar, which is quite funny because you take space
bars for granted up until they work then don't work at different times of the
day. Which I think is apple saying to me that I should go get this shiny new 14
inch MacBook Pro which does look rather nice. But I spend most of my time on my
iMac desktop in front of me.

Most things like I think we earlier discussed, run in the browser. The only
things that I periphery to that I'm looking at again on my screen is probably
some music apps like Spotify and Sonar, I have a Sonar set up throughout the
house which is nice and it just works. Coming back to convenience, just working.
Little things, services like Moon, which is a really small project but it allows
you to easily space your browser windows or application windows on your desktop.
Split screen, half a screen, quarter screen, what have you just very quickly.

**Desigan:** That's something I use all the time. On the mobile front I'm an
active iOS user. I've got all sorts of devices around me but I just find myself
to be way more productive on iOS than on Android. Yes, I have given Android many
chances I just can't seem to be productive on it. That's probably about it.

**David:** That's all we've got time for today. Where can people find you
online?

**Desigan:** Where can people find me online? The easiest is Twitter @cyberdees
which is a very old handle but putting in @cyberdees on most things online will
find me, that tends to be my online username. Then my first name, last name are
desiganchinniah.com probably leads you to all the other places.

**David:** Excellent. Well, thanks for joining the Console podcast.

**Desigan:** Thanks a lot, David. It's been fun.

**David:** Thanks for listening to the Console DevTools podcast. Please let us
know what you think on Twitter. I'm @davidmytton and you can follow
@console.dev. Don't forget to subscribe and rate us in your podcast player. And
if you are playing around with or building any interesting dev tools, please get
in touch. Our email's in the show notes. See you next time.

{{</ box-collapsible >}}
