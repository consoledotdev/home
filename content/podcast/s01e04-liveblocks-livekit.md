---
title: Real-time collaboration and audio (Liveblocks & Livekit)
who: David Mytton & Jean Yang
what:
  "Episode 4 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Liveblocks (real-time collaboration API), Livekit (open source 
  live video and audio API)"
season: 1
episode: 4
date: 2021-07-29T08:00:00Z
duration: 15:59
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/ae6ee861-bca1-411f-b24d-a4c1ac9478c6/audio/ebc71baa-911f-4587-8768-b6ca83e2e5db/default_tc.mp3
draft: false
summary:
  Liveblocks (real-time collaboration API) & Livekit (open source 
  live video and audio API), a devtools discussion with David Mytton and Jean 
  Yang.
metaDescription:
  Liveblocks (real-time collaboration API) & Livekit (open source 
  live video and audio API), a devtools discussion with David Mytton and Jean 
  Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/liveblocks.io.png
topImg2Src: /img/favicons/livekit.io.jpg
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/ae6ee861-bca1-411f-b24d-a4c1ac9478c6?dark=true
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

Episode 4 of the Console DevTools Podcast, a devtools discussion with David
Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software).

Tools discussed:

1. [Liveblocks](https://liveblocks.io/) - real-time collaboration API.
2. [Livekit](https://livekit.io/) - Open source live video and audio API.

Other things mentioned:

- [Figma](https://www.figma.com/).
- [Mux](https://mux.com/).
- [Next.js](https://nextjs.org/).
- [NuxtJS](https://nuxtjs.org/).
- [WebRTC](https://webrtc.org/).
- [Redis](https://redis.io/).
- [ohyay](https://ohyay.co/).
- [Zoom Bachelor](https://www.zoombachelor.com/).
- [Open Broadcaster Software.](https://obsproject.com/)
- [Agora.](https://www.agora.io/)
- [Twillio.](https://www.twilio.com/)
- [Tuple](https://tuple.app/).
- [Splunk.](https://www.splunk.com/)
- [Notion.](https://www.notion.so/)
- [Clubhouse.](https://www.joinclubhouse.com/)
- [Discord.](https://discord.com/)
- [A16Z - The Cost of
  Cloud](https://a16z.com/2021/05/27/cost-of-cloud-paradox-market-cap-cloud-lifecycle-scale-growth-repatriation-optimization/).

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console DevTools tools podcast, a show all about
interesting developer tools. I'm David Mytton, co-founder of Console.

**Jean:** I'm Jean Yang, CEO of Akita software and API Observability startup. In
each episode, we'll discuss two interesting developer tools. We're keeping this
to 15 minutes so let's get started.

**David:** Our first tool this week is Liveblocks. This is a real-time
collaboration API. Before we get into that, I need to say Console is an investor
in Liveblocks. We've started making some angel investments into devtools
companies that we come across and we apply the same strict selection criteria
for our newsletter, which means we're only investing in tools that we'd also
recommend in the newsletter. If you're building something interesting and are
fundraising, then definitely get in touch.

Liveblocks makes it really easy to drop in live presence into your app. They
have a range of different components that can be used with react or node
packages and allows you to build in live courses, chat, and reactions. If you've
used Figma, then you know what that functionality is and it makes it really easy
to deal with the networking performance and just the presence detection across
multiple places.

There's some really good examples of how it's implemented into your app using
Next.js, NuxtJS, or just raw JavaScript. It assumes you're building with web
technologies and there's no mobile support. This for me is really a classic
build versus buy. Is it a good use of your time to try and build this? Or can
you just drop the light blocks components into your app? It's interesting to see
startups being built around what you would probably have considered product
features in the past. I like the line from AWS where they're focused on doing
the "undifferentiated heavy lifting" so that you can just focus on the core
functionality that differentiates your product. What's your take, Jean?

**Jean:** I thought this was a super cool product. I love seeing the rise of
APIs for everything, because what this means is that developers just have way
more power at their fingertips. I agree that it makes much more sense to buy
these days.

I'll tell a story about when I realized just the power of all the APIs that
exist. When I was in college and people had hackathons, at the end, you had
maybe a single page website or something like that. A few years ago, I judged a
college hackathon back when I was a professor. By the end of the weekend, people
had these crazy apps that talk to your bank account. You could listen to
different music as you're walking around a room because they were using the
mapping API and some music API.

I just feel like making real-time collaboration, something that's easily
accessible is something inevitable. Some company's going to do it. I think the
question is it Liveblocks or is it someone else? And so I think being first
definitely has some advantages.

I couldn't really tell with Liveblocks because I feel like the docs were a
little bit sparse still and I didn't have a chance to build a whole app up, but
I think there is some set of primitives for real-time collaboration and whoever
gets it right is going to make a big impact. I'm not sure if the impact is
financially positive as something like Stripe, which is payments, but just what
it can enable, there's no real-time video editing right now. There's no real
time shopping list editing right now.

I'd love to see real-time editing in more apps. It seems like it shouldn't be
too hard to support mobile on this, but I think being able to real-time edit
things on the phone is really where it’s going to be really, really powerful.

**David:** We've seen how hard it is to build this kind of real-time
collaboration and tabs because Microsoft Office still doesn't get to the level
that Google docs gets to. Just seeing the cursors move around and conflict free
editing just seems to be really difficult. What it comes down to, is this a
niche product? What kind of products do we think might build live collaboration
and in real time?

**Jean:** And how specific is it to the product? Is it possible to factor out
the primitives? Because if you're real-time editing a video, where the cursors
are might not matter. It's where the time bar is, but can you flatten that into
a single primitive? If you're real-time collaborating on a game, if you're
playing a game on teams, maybe it's different things you want to share. So, I'm
super curious. I think, I think this'll be an interesting product because as the
scope of what people implement real-time. As collaboration grows, I think the
primitives will solidify, but I don't know how that process would look with
someone putting an API product out there.

**David:** Just having the APIs available to drop in means there'll be a lot
more experimentation. Whether it's live gaming or we've seen apps during the
pandemic, to sit around with your friends remotely and stream Netflix and watch
live events, just because you can't do that anymore. I think the removal of
constraints, as well as the addition of constraints that we've had in the
pandemic is a really good way of stimulating innovation.

**Jean:** I think there's a lot more remote work now. What if there were more
different kinds of pair programming apps? I think virtual collaboration is
really the future. Having other apps, being able to get to the point of Google
docs would be awesome.

**David:** How extreme could we get with building this collaboration
functionality into apps? I can certainly think back when I was on call and
responding to incidents with servers, just having the ability to spin up a war
room and get your team together, collaborating and over a terminal to see what
people are typing in. You've often got a log that when you're responding so you
can coordinate long running incidents and building those kinds of things into
security response might also be interesting if you've got a team of people;
particularly if they're distributed, collaborating on responding to a critical
security bug.

**Jean:** Even when we respond to users right now, because we're not in the same
room, we have to do this handshake over Slack. You can imagine if there was an
app for immediately responding to user tickets, collaboratively and integrated
into Slack. A lot of how we do our remote meetings is with a Notion doc. Notion
actually isn't super real-time and you don't see exactly where people's cursors
are. It's a little bit there, but even Notion doesn't quite have that there yet.
But I think having more presence indicators could be really interesting.

**David:** Similar to this, our next tool is LiveKit, which allows you to build
video and audio into your apps. Now, this is an open source framework and they
provide SDKs for React, JavaScript, iOS and Android, so that you can build an
audio and video capability using WebRTC without having to understand the WebRTC
protocol. One of the things that they do that's particularly interesting is
taking WebRTC, which is a peer to peer protocol and making it so that it can
scale to large numbers of participants by introducing what they call a selective
forwarding unit, which is a server that you deploy and that scales horizontally
using Redis as a backend. You’ve still got to set up SSL and do load balancing,
and I suppose adding that server component defeats the idea of P2P, but it does
get rid of all of the hassle of WebRTC, which I think you've got a bit of
experience with, right?

**Jean:** Yeah. WebRTC is super hard. I haven't done a lot of programming with
video myself, but over the pandemic I became one of the first users of this tool
called ohyay. It  is a creator platform that lets you make any kind of
browser-based video experience you want. I had accidentally become a video
producer during lockdown because I accidentally first became a matchmaker with
my Jean Date program. Then, that led to me producing a couple of video shows,
doing Bachelorette in Zoom Bachelor.

But before Zoom Bachelor, this team pitched me on, "Hey, do you want to be the
first public use of ohyay?" Their pitch was, "Well, because we're a creator
platform, we can help you basically set up the scenes for Zoom Bachelor and
easily script the scene transitions. You could lay out the video feeds however
you want, overlay graphics very easily." It's browser-based Open Broadcast
Software (OBS) that's scriptable scene to scene. Maybe OBS does that too, but
OBS is really hard to use.

It was really interesting because often I got to see under the hood because it
was a very early beta product at the time. It seems like WebRTC allows for a ton
of stuff. I believe that browser-based video is the way of the future. It's so
easy. Anyone can do it. I think, especially with everything moving more remote
now, or people realizing the power of remote even for a non-pandemic era.

There are limitations, and the team building this has had decades of experience
in video and still they got tripped up sometimes. Making this available to large
numbers of programmers, I think is awesome because there's just so much we can
support creatively.

**David:** Definitely an interesting trend with startups forming around
rebuilding popular software as a service in APIs. LiveKit is essentially Twilio
or Agora but just for video and audio, and open source. We know how popular
Agora is because it's powering Clubhouse, which has boomed over the last 12
months. Just being able to drop these components into your app, like with
Liveblocks, removes all those barriers.

I'm interested to see if performance becomes a problem. We discussed on the last
episode with Tuple how they actually implemented that video layer in C++ as a
foundation and then built the UI on top of that so that they could get better
performance. They were really going for high resolution screen sharing, which is
quite a different use case from just video and audio. Just being able to drop
this technology into any app and have it work and be open source is quite
compelling.

**Jean:** I'm curious if people will start out using this and then rip it out
after some point and build their own and what the line is there. Even for
existing SasS tools, I talked with companies who say, "Well, we're trying to rip
out Splunk because it's too expensive. We're trying to rip out some pretty core
technologies and build it ourselves." These are companies that are quite big,
often post-IPO. But if you're a tiny game company that's trying to embed video
feeds, does it become mission critical to have to rip out the video layer
yourself very early on? I think that's a really interesting question.

**David:** I think that's a big problem with SaaS pricing is that as you scale,
you just end up spending huge amounts of money. There's a really interesting
Andreessen Horowitz blog post about looking into the true cost of cloud for some
of the big public SaaS companies. The beauty of open source is that you can just
run it all yourself when you get too big for the SaaS pricing. But then the
benefit of SaaS is you can just hand off all of the scaling to that provider.
You don't have to deal with it.

**Jean:** I think there's going to be some really interesting shifts in what
people are able to build and how they choose to go about scaling it I can't
predict. It'll be really interesting to see.

**David:** What kind of apps do you think might benefit from adding a live video
and audio? Certainly Google Docs, that doesn't exist unless you're trying to
cast a tab to a Google Meet screen-share.

**Jean:** I think everything. At my team, we sit in a virtual office all day and
anything we work on collaboratively together is actually an embedded video.  A
screen share stream in our virtual office. You can turn video and audio on and
off. It's not that everyone's streaming their video all day, but there's been
some really interesting things we've been able to do just virtually by having
completely configurable video feeds. We're using this platform ohyay, so
everyone got to set up their offices how they wanted.

We could set up our conference rooms however we wanted. We have a plant
conservatory where we're experimenting with people who go there if they want to
work in the same room with video on for some period of time. We do most things
with video now because we're an all-remote team. If we're working on a Notion
doc together synchronously, we'll get into the same room, share our videos at
the same time as working on the Notion doc, same with the Google doc. It’s the
same if we're resolving a user request or an incident, we get in the same room.

I think video's super high signal. I think it should be there all the time. I
also have an ohyay space with my friends that we just hang out in. For a while,
during the height of the lockdown, we would just kind of say, "Hey, let's hang
out in this space from this hour." So that hour, this day, people would file in
and out. It was super fun. I think that a lot of my life over lockdown has been
like a personal Clubhouse but with video. To me, video is a much more fun and
low emotional energy channel than audio.

**David:** We’re certainly getting there with audio. I think every app that I
can think of is now adding it in, trying to copy Clubhouse. Even Slack was
bugging me the other day to suddenly turn on audio rooms and it's trying to copy
Discord. I suppose, where people just drop into the room when they're playing
games. Being able to upgrade that to video just seems like an easy option that
people should be able to enable.

**Jean:** Our team had tried Discord before with the audio rooms and audio
seemed to be something active to indicate presence, whereas for video, you just
have to sit there. I think video is going to be the presence indicator of the
future. If you're not going there to actively hang out and you're just trying to
get a sense of presence. I think, video everywhere is really the way to go.

Something cool ohyay had for a while, was that you could just emoji the video of
yourself and do things. You can imagine a presence indicator on a Google Doc
being not just a cursor, but a little video feed. Is this person actively
working on this? Are they working on something else? Is their video switched
off? Videos are super interesting, and a low effort, high signal indicator.

**David:** Since the idea of trying to replace the presence of being in an
office, where everyone is just there and they're working, with video I think
there's going to be some interesting privacy challenges. Making sure you do know
when your video is on or off and you want that the little light on your laptop
showing when the video is recording.

**Jean:** You can imagine if you're working on something over the phone with
someone, which doesn't really happen right now, because we don't have very good
real-time collaboration with the phone; but you can imagine this working for
games with friends. If you and your friend are shopping for something together
because you're going to meet up, but you're in different locations right now.
They can see what you're doing. You can see what they're doing. Video just gives
you a way to not have to talk.

**David:** Alright, well that's it for this week. Please let us know what you
think on Twitter or by email. I'm @davidmytton on Twitter and links are in the
show notes. Don't forget to subscribe to the weekly DevTools newsletter at
console.dev.

**Jean:** I am @jeanqasaur on Twitter with a Q. You can also follow Akita
Software, @AkitaSoftware for the latest in API observability, understanding your
systems from the outside. And I will see you next week.

**David:** See you next week.

{{</ box-collapsible >}}
