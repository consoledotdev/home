---
title: Code search, dev flow & testing (Sourcegraph & Hoppscotch)
who: David Mytton & Jean Yang
what:
  "Episode 7 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Sourcegraph - code search engine, Hoppscotch - test UI for API 
  requests."
season: 1
episode: 7
date: 2021-08-19T08:00:00Z
duration: 15:09
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/349e4973-959d-4cef-bb60-cb1a06921cd8/audio/e61dd4c6-dedb-4741-b758-e4288ed12b53/default_tc.mp3
draft: false
summary:
  Sourcegraph (code search engine) & Hoppscotch (test UI for API requests), a 
  devtools discussion with David Mytton and Jean Yang.
metaDescription:
  Sourcegraph (code search engine) & Hoppscotch (test UI for API requests), a 
  devtools discussion with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/about.sourcegraph.com.png
topImg2Src: /img/favicons/hoppscotch.io.jpg
ogImg: /img/podcast/podcast-cover.jpeg
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

1. [Sourcegraph](https://sourcegraph.com/) - code search engine.
2. [Hoppscotch](https://hoppscotch.io/) - test UI for API requests.

Other things mentioned:

- [Github](https://github.com/).
- [Dropbox](https://www.dropbox.com/).
- [Monorepo](https://en.wikipedia.org/wiki/Monorepo).
- [PageRank](https://en.wikipedia.org/wiki/PageRank).
- [Github Copilot](https://copilot.github.com/).
- [Postman](https://www.postman.com/).
- [Console EP2 - GitHub Copilot](/podcast/s01e02-github-copilot-tuple/)
- [Console EP6 - Philosophy of open source](/podcast/s01e06-appsmith-retool/)

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console Dev Tools podcast, a show all about
developer tools. I'm David Mytton, co-founder of Console.

**Jean:** And I'm Jean Yang CEO of Akita Software and API observability
startup. In each episode, we'll discuss two interesting developer tools. We're
keeping this to 15 minutes, so let's get started.

**David:** First off this week, we're talking about Sourcegraph, a code
search engine. Personally, I've only ever used GitHub's code search, which also
very helpfully includes discussions and issues. Whenever I'm looking at a new
project, trying something out for myself, I'll often look through the issues to
see if there's any problems I should be aware of, but then also if I'm getting
into the code, I want to understand how certain functions are being called, or
something like that, I'll pop it into GitHub search and find out what's going on
there.

Sourcegraph adds quite a bit of extra functionality on top of that, and
initially my reaction was, "Well, can't I just get everything from GitHub?" When
you get into it, the ability to search on some advanced aspects of the code
syntax is a really useful feature. Whether that's changing the syntax based on
function arguments or searching across multi-line blocks, it’s a really useful
way of trying to understand your source code base.

But then, it raises an issue with me that I've thought about around
microservices versus monolith, and also mono-repos because there's quite a big
assumption built into the design around where your code is. Is it in a single
repository or is it scattered across multiple, all over your GitHub
organization? Have you thought about this Jean?

**Jean:** I think you raised some really great points. The old fashioned
way to understand code is you get into a new repository and you grep for it.
Sourcegraph is definitely a grep on steroids, which is very cool. My first
reaction is, "Well, why isn't grep good enough?" I learned my lesson from when
Dropbox came out, "I said, why isn't Subversion good enough?" And when GitHub
came out, I said, "Why isn't git on the command line good enough?" I really
learned my lesson about user interfaces.

I think you raised a really good point because if we zoom out, there's this
bigger question of, if we're trying to understand our software, what is it that
we want to be searching over? I don't know if other people were nerds like me
and used the internet a lot before the advent of search engines or before they
got really good.

I remember, websites used to be something you had the address to, and you would
go to. It would definitely not be a guarantee that you could get to a website if
you didn't have a direct address, or an address to a directory that listed the
website. Discovering websites was really, really hard before, too. I used to be
part of some blog rings back in the day, and I remember when Google first came
out, it was incredible, because you could actually find websites pretty quickly
and you could find them really accurately. Google wasn't the only one; there was
this great search race for companies to do that.  It was really about getting
the right abstractions on top of the web.

I think we're entering a similar situation with code where if we look in the
monolith world, I think there's only so much you can do with searching the code
at all. I completely agree with you. The microservices world is where I think
things get really interesting, because there's so many parallels I see to what
the web used to look like. The API catalogs that are out there, it's very, very
similar to what you saw of the web before search was good, and web search didn't
get good by searching better on the right anchor tags of websites or something
like that. What it got better on was PageRank; what websites are actually
linking to each other, what websites are actually talking to each other.

Improvements in NLP helped make the search interface better, but the big
revelation was that we're not searching on the actual text of the websites
themselves, necessarily. In that sense, a question I'll ask is: what is the
equivalent of PageRank for code? Is it fancier syntax searching, because that's
the way web search was going, or is it something else?

**David:** That's one of the big differences that the Sourcegraph
documentation talks about how they stand out from just plain text search.
They've actually built the language servers into the Sourcegraph backend, and
there's not a single system that is doing the indexing. They're pushing it
through language specific interpreters, so they can really understand in the
sense that humans would. The computer is trying to understand what the code is
actually saying in terms of its structure, not just the syntax elements. Parsing
it out using the actual language interpreters and the compilers for each
specific language that they support, means you can get this level of search that
is just not possible if you're just doing simple text matching.

**Jean:** I think that's very similar to some of the NLP improvements of
what made web search better. I'll also play devil's advocate again, because I
also don't think that's the equivalent of PageRank for code. I'll pose a
question to the audience: what is the equivalent of the Google PageRank
algorithm for code? What websites are actually talking to each other? What
should show up at the top of the search results? What is the most relevant codes
that you're trying to find? Is that the newest? Is that the most used library?
Is it something else? I think there's a lot of interesting things to think about
once we get the basics down. Something I think is really cool about Sourcegraph
is, it's basically making the basics just a no brainer. You have all of the code
search you need, and so now we can ask, "Well, what is the code we're trying to
find?"

**David:** Another question is around the developer flow and where search
fits into that. If you're coming to a code base brand new, and you've got
potentially hundreds of repositories to look through as part of a microservice
architecture versus a single repository for a monolith, it's certainly easier to
know where to start. Often when I'm searching for code, it's an existing code
base I've been working on, I'm in my editor, and I'm in the flow of doing
something specific, and I'm either looking for a particular function, or a
particular file. Initially, when I was playing with Sourcegraph, it launches a
web browser, which takes me out of my flow. They are very specifically arguing
in their documentation about how everyone's always got a web browser open, it
doesn't need to be built into the IDE. I'm not sure I entirely agree with that.
What did you think?

**Jean:** They're right in some sense that that's the way things are right
now; everyone codes with a web browser next to them. I do agree with you, David,
that I think the IDE is just the interaction of the future. We alluded to this
in the Copilot episode, the IDE was the revelation for me, but there are so many
kinds of code analyses that need interactivity to work very well, and I do think
that code search is going to be one of them.

If you're going to try to understand why someone is looking for a piece of code,
or a certain kind of functionality, the more context you can get on what they're
doing right now, the more feedback you can get on is your search on the right
path.  That's going to be key. That just comes for free in the IDE. I think the
future of developer experience is going to be very IDE based.

**David:** The big assumption, of course, when you're searching the IDE
is that the code is there locally to search through. This is why Sourcegraph is
claiming it needs to be in the browser, because if you have a mono-repo, then
all your code is there. If you're searching across multiple repos, you've got
hundreds of microservices. Just being able to discover the code that's not
checked out locally, it doesn't work?

**Jean:** There are ways around that; I think there can be richer IDE
interactions, but it's hard. If I were Sourcegraph, I wouldn't do it either.
It's really risky to build. It's way harder to build, it takes way longer to
build, so it makes sense why they're doing what they're doing.

**David:** Pushing people to their browser interface is the first step.
The code integration that I tried out still just launches the browser. Certainly
a fun thing I was able to use with that integration is the extension that they
have for Chrome. They've got Firefox ones as well, where you can just type,
"SRC," and it will scope the search in your browser, instead of searching on
Google or DuckDuckGo, whatever search you use, you can search Sourcegraph, and
just typing, "SRC" to go immediately into a code search. When you've got your
browser open all the time, that is pretty convenient.

**Jean:** Yeah, that's super slick.

**David:** The second tool today is Hopscotch. This is a browser user
interface for API requests. You can essentially build and execute all types of
API requests from HTTP, GraphQL and WebSockets, in the browser. It gives you a
really nice syntax highlighted response, and can even generate code examples so
that you can then paste them into your IDE, or into your command line.

It’s pretty similar to what you can do on the command line. You can't automate a
chain of requests, you have to manually set them up, and there are some
limitations that the browser has due to the security model around it.
Nonetheless, I think this is a good example of a successful open source project;
over 30,000 stars now that's following other successful businesses and Postman
comes to mind. What was your take on it?

**Jean:** I was very surprised when you picked this tool, because I said,
"It sounds exactly like Postman," and then you said, "Yeah, but people haven't
heard of it as much, but it's very popular." I was really surprised that it has
over 30,000 GitHub stars. That's really, non-trivial.  That's on the higher end
of all tools we've talked about. I think that just goes to show, even though it
seems like everyone uses Postman or has used Postman, there's an appetite for a
second open source tool. That just goes to show how many people need to make API
requests these days. I was hoping to get your insight, David, how did this tool
become so popular? Was there a community strategy they took? Did someone pick it
up? Did other people just adopt it? What's the background?

**David:** Firstly, open source, as we discussed this in the previous
episode about the philosophy behind open source, and why that just gets people
engaged, just the ability to modify the code. Even if it's just small aspects,
just being able to make those tweaks that you need. One of the big things was
that you can self-host Hopscotch. Although it is just building HTTP requests and
other API requests in the browser, it adds additional functionality by being
able to save configuration. Just being able to save the states of your requests
and be able to come back to the configuration and be able to self-host, that is
something I've not seen from Postman.

**Jean:** I am really curious about this because, when we've surveyed our
users, "Would you self-host or would you prefer for us to host?" I think what
we're running at Akita, it still has to do with APIs, but it's sufficiently
powered to run, that people know that. When we were considering putting out our
open source offering, they said, "Look, you can put it out, maybe we'll glance
at it, but we would much prefer you hosted it for us." So, it's surprising to me
that self-hosting is a plus for this. Is it just because it's easier
self-hosting? Or it sees data that people would prefer not to not to send over
to Postman?

**David:** I think the data aspect of it is potentially there, but really
is it that difficult, because you can just go to the browser and use this. If
you're sending the request to a remote API anyway, what's happening to that
data? I was also quite surprised that this does just seem like a really nice UI
on top of the command line, and there's a perception that developers prefer the
command line and clearly that's not the case; this has 30,000 stars.

**Jean:** It's similar with Postman, because I think Postman provides a
couple of really nice features on top of the command line. At first I was like,
"Wow, this is just like cURL, how is this taking off like wildfire?" I think the
ability to store it was huge. The ability for Postman at least to share, is also
huge. That seems like the point where you can't just share a bunch of cURL
commands very easily anymore. I think that a lot of the motivations for this is
the reason we decided to go into API tools as well at Akita.

It's a set of behaviors that everyone needs to do; call APIs, understand how
you're calling APIs. Going back to our, "What is the new PageRank?" I think in
the web, there's this graph of websites, all talking to each other in code, and
there's this graph of APIs all talking to each other now. I think there's going
to be a lot of innovation on how do we understand this? How do we search it? How
do we navigate it? It's cool, because cURL is one of the primitives here.

**David:** All right, that's it for this week. Please tell your friends
about the podcast and come on Twitter @consoledotdev to disagree with us. Do you
use a monolith or are you in favor of microservices and what do you think about
code search?

**Jean:** I'll throw out a very controversial question; the web is this
messy place, but anyone can find anything, and anyone can make anything, and
that's where code is heading. On my Twitter, a lot of people are very upset,
especially with people who are like, "Look, functional languages should have
one. It should be very, very clean." And I've just leaned in hard into this,
everything is just organically evolving, and so the tools should just be able to
help you find what you need to find. There's fights every day on my Twitter
about this, but we'd love to hear from you; is it a good thing or a bad thing
that this is where software is heading, and what are the tools you'd like to see
to make it better?

**David:** Thanks. See you next week.

{{</ box-collapsible >}}
