---
title: Code search, dev flow & testing (Appsmith & Retool)
who: David Mytton & Jean Yang
what:
  "Episode 6 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Appsmith - Open source internal tool UI builder, Retool - Internal 
  tool UI builder."
season: 1
episode: 6
date: 2021-08-12T08:00:00Z
duration: 13:57
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/8c8341f0-0a3a-4f2c-bfe0-0abb6b3c1c87/audio/03e2e3d8-e703-4953-adc0-e72687f31178/default_tc.mp3
draft: false
summary:
  Appsmith (open source internal tool UI builder) & Retool (internal tool UI 
  builder), a devtools discussion with David Mytton and Jean Yang.
metaDescription:
  Appsmith (open source internal tool UI builder) & Retool (internal tool UI 
  builder), a devtools discussion with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/www.appsmith.com.png
topImg2Src: /img/favicons/retool.com.jpg
ogImg: /img/favicons/www.appsmith.com.png
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

Episode 7 of the Console DevTools Podcast, a devtools discussion with David
Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software).

Tools discussed:

1. [Appsmith](https://www.appsmith.com/) - Open source internal tool UI builder
2. [Retool](https://retool.com/) - Internal tool UI builder

Other things mentioned:

- [MongoDB](https://www.mongodb.com/)
- [Amazon S3](https://aws.amazon.com/s3/)
- [GraphQL](https://graphql.org/)
- [Stripe](https://stripe.com/)
- [React](https://reactjs.org/)
- [Why Aren't There More Programming Languages
  Startups?](https://www.akitasoftware.com/blog-posts/why-arent-there-more-programming-languages-startups)

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console DevTools podcast, a show all about
interesting developer tools. I'm David Mytton, co-founder of Console.

**Jean:** And I'm Jean Yang, CEO of Akita Software an API observability
startup. In each episode, we'll discuss two interesting developer tools. We're
keeping this to 15 minutes. So let's get started.

**David:** This week we are discussing two quite similar tools, Appsmith
and Retool. Both of these are internal UI builders. Developers have spent years
and years building internal CRUD apps that just update and modify database
records, and that really isn't making the most of what developers can actually
do.

Both of these tools provide interface builders that allow you to connect into
existing databases. Particularly interesting is the fact that they both proxy
queries to the data source, so the results aren't stored, which is really great
for security, whether you're running in the cloud or open source, deploying it
yourself.

The primary difference between Appsmith and Retool, is that Appsmith is released
on an open source code base and you can deploy it yourself or you can use their
cloud version if you like, whereas Retool is based on a proprietary code base.
Although they have a self-hosted version, which is deployed in a container, you
can also sign up to their cloud version and they host everything for you.

There are some implementation details that are different between them. For
example, with Appsmith, you can't just drop all of the configuration into source
control. It's stored inside a MongoDB database. You can export it to JSON, but
essentially everything's within the Appsmith data store, whereas Retool does let
you do that. You can put everything into a Git repository and manage it there,
but that's only available on their enterprise version, which I found a little
bit disappointing.

Essentially they make it really easy to build interfaces to query data sources,
whether that's S3 or GraphQL or connecting to Google Sheets or some other data
source. You might want to build an internal interface for support teams or
customer success, something that perhaps developers are not going to be building
for you.

**Jean:** I'll just chime in here to give a few examples of why building
with  these internal tools is cool. You can make a Stripe refund interface, or
you can make an interface to manage your MongoDB really easily. These are things
that companies customize internally all the time, but it takes their internal
tools team quite a bit of time.

**David:** One of the nice things about Retool is it allows you to query
all the sources with SQL, even if they aren't databases. Appsmith and Retool
both expose the UI so that everything is a JavaScript object. If you need more
customizability, then you can just get into the code and you can even create
your own react components with Retool. The main difference then is the
philosophy behind how these are developed, so I thought it'd be interesting to
have a discussion about that.

**Jean:** Initially, when we wrote our show notes for this David, you had
said, "I think the main difference is Appsmith is open source and Retool isn't."
And first I thought, "Oh, well maybe it's really just about self-hosted or not”;
because if you're doing an internal tool, you don't want some random company to
be seeing all of your data. You don't want that kind of friction for an internal
tool, because normally you don't have that kind of friction. Does it really
matter that Appsmith is open source? I wanted to get your views a little bit on
this, David.

**David:** It's really a philosophical difference between how the
companies are approaching their development. I think now with Appsmith, they are
talking about how they are developer first. For them, that means being able to
modify the code and make customizations.

Retool are really trying to build everything for you so that you don't have to
make any code changes. I think we've all been there where we had to build these
terrible interfaces that you build once and they do the job. Then maybe you're
getting requests all the time to improve them.

It's not much fun as a developer building these interfaces. Having that UI
builder just drag and drop the components really does make sense. But coming
down to owning your data, being able to run all the infrastructure internally,
that's something that I suppose you could do with both of them, because Retool,
they offer a Docker version that you can just deploy on your own servers. It
comes down to being able to actually modify the code.

**Jean:** I will say that this is what I discovered as well when I dug into
it, because when I looked at the Appsmith GitHub repository, I saw 119
contributors. I cross referenced this with a number of employees on LinkedIn,
which is much, much less. I actually went quite deep into the contributors list
just to see what they're contributing. It does seem like people are submitting
small customizations or small fixes that they're finding useful to them. This is
something that I hadn't thought was the high order bit to making a tool like
this developer first though maybe it's obvious, but this was very interesting to
me.

**David:** I suppose it comes down to the idea of being able to make
changes when something doesn't quite do what you want it to do. I know when I've
been playing around with different window managers on Linux and I've come across
a bug, I've been able to get into the code and make a few changes. I've never
really made anything massive. It's always just been a few tweaks here and there
just to improve the experience.

In contrast, when I’ve found bugs in proprietary software and reported them to
the vendor, if it's a large vendor, it tends to go into /dev/null and you never
hear from them ever again, and the bug doesn't get fixed. That is opposed as the
advantage of the open source side of things. Have you ever done that with
anything you've been running?

**Jean:** I actually haven't. Maybe this is because I'm not a good open
source community contributor. There have been small instances where I've
suggested changes to docs or something like that. I had to install something a
particular way or something like that, but I don't think I've really been part
of a social open source community.,so I haven't gone and contributed to any of
these communities myself.

**David:** Docs are a classic example, because they're often out of date
or there's some very small thing that just doesn't quite work. It feels nice to
be able to submit a request and have it accepted, and then you get your little
avatar showing you as a contributor to the repository which is quite nice.

**Jean:** I was really impressed with Appsmith when it wasn't just docs. It
seems like substantial changes went pretty deep into the system.

**David:** When I was putting together the notes for this, I labeled
Retool as commercial and Appsmith as open source just to distinguish them. Your
comment was that any tool with an enterprise version is commercial and not open
source. So what did you think about that?

**Jean:** I run my own startup. And when we think about a startup going to
market, open source is just one of the categories. I think if open source counts
as a go to market category and a tool has an enterprise version, I would say
this is just its commercial strategy. We have this philosophical question, if an
open source community came about because of a tool's desire to become a
commercial tool, is it open source? I think you, along with my digging into the
contributors list, have convinced me that it is still very much in the open
source philosophy and people are benefiting from it. It's more developer
friendly this way.

**Jean:** Yeah, I think this distinction between open source and
commercial, if we're making it for the purpose of signalling to developers that
you can change it, it's available to you, the source code is available to you at
all times. That makes a lot of sense. But I think if it's this, these people are
trying to make money off of it and these people aren't, they're both making
money off of it and they both deserve to make money off of it. It gets us into
this other conversation, who pays for open source. It was interesting to reflect
on that labelling.

**David:** The idea of open source has a lot of connotations around it,
which perhaps don't match with the reality anymore. There are certainly loads of
different approaches to releasing code, whether you just throw it out there with
an open source license and that's it, all the way through to the classic example
of Linux being the foundation to pretty much every computing platform that
exists today.

**Jean:** There's this interesting cultural shift going on where people are
starting to realize, "Hey, someone is paying for open source. If we're getting
the software for free, how are these software developers actually living?" These
days, we know that we should be paying our artists. We should be paying our
creators. We should, most of all, be paying our open source developers. I think
the ‘who pays for software’ story has had a few iterations on in the last few
decades. We’ve reached an interesting point now.

**David:** When you deploy open source, it might be free as in the
license is free, but it's not free as in your time. That's where the value of
SaaS comes in because you're paying someone else to run the infrastructure, deal
with backups, monitoring, reliability, and keep it up to date. Everyone's always
on the same version. It just makes it a lot easier.

**Jean:** Yeah. I had this blog post:  “Why aren't there more programming
languages startups?” And I meant programming technologies more generally. A lot
of people said, "Well, the reason is because people won't pay for a compiler."
But if we think about programming technologies more generally, most things are
much less easy to operate than a compiler, which is fairly small and complex.
It's not that there are all these different operational contingencies you have
to make for it. But for most SaaS software, when the hard work is actually in
running it, if you start using an open source tool and you scale it up, the
inevitable outcome is you pay them to run it. What does that mean for open
source then has been what I've been wondering.

**David:** We've seen these companies actually make significantly more
money by offering those cloud versions where everything is run for you. You
still have the option to deploy it on your own infrastructure if you really want
to, but you're paying so that something that isn't your core business is handled
by someone else.

**Jean:** Right. My question about Appsmith was what percentage of their
serious users, by serious I mean they have some scale and have quite a bit of
traffic on their internal tools, are using a self-hosted version versus the
enterprise cloud-hosted version?

**David:** Because if your internal tools go down or there's a problem,
then you really want to have control of the ability to fix it. If your entire
customer support team or your billing team are unable to process things for your
customers, that's a problem if you're relying on a third party provider. Right?

**Jean:** And I also wanted to bring up something else I noticed that might
be a result of many different possible things.

Retool seems quite a bit further along than Appsmith. I thought their primitive
constructs for building these pages was quite a bit cleaner. Their docs were a
bit more extensive. On the one hand it could just be Retool is further along as
a company. They have more people etc.

I also wonder if the fact that Retool isn't focused on developer first open
source community spread allows them to focus on some of this other stuff.
Especially when you're early as a start-up, you have to focus on your
priorities. What I want to point out is open source versus closed source or
commercial proprietary, how ever you want to call it, is not just a
philosophical difference, because I think it really does have material impact on
how the product evolves. I wonder how much of Retool's increased maturity in
other domains as a result of their decision not to be open source.

**David:** That's a really interesting point. You mean Retool able to put
more resources into building app functionality and polishing the UI. Appsmith,
in contrast, have had to think about how people are going to deploy this? How do
we make an update mechanism? How do we make sure it works?

**Jean:** Right, exactly.

**David:** Certainly a challenge when you're deploying code just to your
own environment, you have complete control and you can always make sure
everyone's on the latest version. You can manage all your software updates.
Sending what is essentially packaged software out to all your users is a real
pain because people don't want to update.

**Jean:** There's also the growth strategy question, because if Retool is
not necessarily developer first, it's selling into these bigger organizations.
They're getting bigger checks, which allows them to put that money back into
improving their product, improving the slickness, smoothing out those rough
edges. Whereas if you're going developer first, a bunch of your users aren't
actually putting that money back into your system. That could make your growth
slower. This is something I wonder about the differences in parts of their
maturity.

**David:** All right. That's it for this week. Please tell your friends
about the podcast and send us some feedback. Message us on twitter
@consoledotdev.

**Jean:** Hopefully we said controversial enough things in this episode
that you'll be really mad and want to talk to us. We want to hear from you. Our
views on this are evolving. Everyone's views on this are evolving. You can find
us on Twitter. You can find me on Twitter @jeanqasaur, David at Twitter
@davidmytton and my company Akita on Twitter @AkitaSoftware. See you next week.

**David:** Please disagree with us. See you next week.

{{</ box-collapsible >}}
