---
title: CRDT and browser testing (Automerge & Polypane)
who: David Mytton & Jean Yang
what:
  "Episode 3 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Automerge (conflict-free JSON-like data structure), Polypane 
  (browser testing tool)"
season: 1
episode: 3
date: 2021-07-22T08:00:00Z
duration: 13:51
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/22fd22c3-cb5a-4bb8-9c30-7b8fb9d8c9cc/audio/f77cbcea-985a-4050-8743-56fc850fe9aa/default_tc.mp3
draft: false
summary:
  Automerge (conflict-free JSON-like data structure) & Polypane 
  (browser testing tool), a devtools discussion with David Mytton and Jean Yang.
metaDescription:
   Automerge (conflict-free JSON-like data structure) & Polypane 
  (browser testing tool), a devtools discussion with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/github.com.png
topImg2Src: /img/favicons/polypane.app.png
ogImg: /img/favicons/github.com.png
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

1. [Automerge](https://github.com/automerge/automerge) - JSON-like data
   structure for concurrent writes.
2. [Polypane](https://polypane.app/) - Browser testing tool

Other things mentioned

- [Local-First Software - academic
  paper](https://martin.kleppmann.com/papers/local-first.pdf)
- [Syncthing](https://syncthing.net/)
- [vim](https://www.vim.org/)
- [Javascript](https://www.javascript.com/)
- [Typescript](https://www.typescriptlang.org/)
- [WebAssembly](https://webassembly.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [Akita Software](https://www.akitasoftware.com/)

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console DevTools Podcast. A show all about interesting
developer tools. I'm David Mytton, co-founder of Console.

**Jean:** And I'm Jean Yang, CEO of Akita Software, an API observability
startup. In each episode, we'll discuss two interesting developer tools. We're
keeping this to 15 minutes, so let's get started.

**David:** Our first tool this week is Automerge. This is a JSON light data
structure for concurrent rates. It's an open source project and essentially
allows you to build against the idea of local first software. This was an
academic paper that was published from Cambridge University a couple of years
ago, but it essentially builds out the idea of a conflict-free replicated data
type or CRDT, which means it makes it easier for you to build in versioned
access into data structures so the data can live locally and it maintains a
history of all the changes, making it very easy to then sync. And the goal for
this is to allow collaborative text editing. It allows for the idea of
functional reactive programming. The reason why I like it is the philosophy
behind local first software, which includes seven different principles, which I
won't go through all of them.

My favorite of them is the ability to work locally so that you are storing and
controlling your own data, and that it doesn't have to work with a network. And
the reason for this is the ability to control the data that you're generating. A
good example for me, personally, is my notes. I keep a lot of notes in plain,
markdown format, and I sync them using the Syncthing. It means I can edit them,
and use vim on any server or on Mac as well, but on Mac I can also use more
native applications. It gives me, as the user, choice, which I think is
something that developers should try and build into the applications.

Interestingly for this data type is that it's implemented in JavaScript, and so
my question for you, Jean, as our resident programming expert, is why has
JavaScript become so popular? Is JavaScript the right language to implement an
in-memory data structure in particular? When you actually tell AutoMerge to
enforce all the guarantees it provides, it has a significant performance impact.
What did you think?

**Jean:** Yeah, these are great questions. I often ask myself the first one a
lot. How did JavaScript become such a popular language? I remember the mid
2000s, I was just starting out as a developer and I was seeing the rising
popularity of JavaScript. But at the time, there was still a chance that
JavaScript wouldn't become the dominant language. I remember I had this
internship at Google in 2007 and we would sit around at lunch and talk about
what are the alternatives? What we really imagined was something WebAssembly
like, so that still has a chance. But we were like, "Well, browsers just have to
run something else and then it's okay." But it just, it seems like browsers run
JavaScript, everyone writes things in the browser. And so JavaScript has become
the assembly of the newest operating system that's the hottest. That said, it
seems like many apps are becoming increasingly native to the browser.

A JavaScript based language does seem to be the language that makes sense for
something like this. I guess the alternatives would be TypeScript, as we talked
about a little bit before this, which fewer people use. I feel like JavaScript
is just for reach. You could also do something like this on top of WebAssembly,
but again, you're limiting your reach. I'm not familiar enough with the
performance implications of using something like TypeScript instead . I’m not
sure if that's much better, but I would doubt it.

The choice of language makes sense, but David, I had a question for you because
the examples that you use make a lot of sense. It's great to be able to have
local first Google Docs or local first something else, but how many developers
are going around starting with local first as something they would do? How is
this GitHub library for local first development so popular? Is it curiosity?
Because this has over 10K stars? Are people just very excited about this? Are
lots of developers using it? What are they using it for? Is it a commercial
product? I was very curious about these questions?

**David:** It's very much an aspirational philosophy. I think we've all come
from the era of files on your desktop, files locally. That has now moved to, not
even files, with a Google Doc, there is no file. Even if you sync them using a
local Google Drive client, if you open up the file, that's just a JSON snippet
that has the URL to Google's interface. You get the advantages of that because
it means everyone can edit on the very latest version of the document.

Despite Microsoft's efforts, Google Docs still is better for collaboration, for
real-time collaboration. Just having those features that are available in the
browser, it makes all the sense to start there, but then you do lose some of the
control. You can't back up the files just because there aren't any files, they
don't exist. You can't store them somewhere else. You can't archive them. As
services change over time or get shut down, then you risk losing your data. That
local first approach is really about giving the control back to the user,

**David:** But is it too much of an aspiration?

**Jean:** Yeah, that was my question. I couldn't tell how realistic this
implementation was because they were using SQLite. It was one of those things
where someone makes a cool new language, everyone stars it, everyone plays with
it on the weekend, but people generally aren't using it in production. Is this
particular library something that's getting used in production? Also, how often
is local first getting used in production and are they using this kind of
library?

**David:** It's basically an assumption now that you have internet access
really, isn't it?

**Jean:** Right.

**David:** The files are available through whatever web interface you're using.
There are very few applications these days that actually work on local files
apart from Microsoft office, and maybe design files. But even with Figma, it’s
online and you can do all the collaboration in the browser. The idea of having
local software doesn't seem to be meet with the requirements of startups and
people who are actually building projects.

**Jean:** It also seems like local support is something you do last. So, I'm
curious about local first because I feel like if I were building a product that
was a collaborative tool, I would build the in-browser, fully online version
first because I have the most control. Then the more you do locally, the less
visibility you have as a tool developer, the less feedback you're getting. It
seems like it's sort of the on-prem equivalent of consumer software. Local first
seems to be the opposite of how I would want to develop and test a tool.

**David:** I would say the developers will be used to Git, which is local first.

**Jean:** Yeah, that's the point.

**David:** You clone the repository, you do it all locally, and you push things,
and that is kind of how local first philosophy is trying to approach things or
at least with this library is providing an easy way for developers to implement
that kind of workflow. Using  git as an example I think is probably a bad idea
because it's such an unusual piece of software. The use cases are very specific
to text files and generally development.

**Jean:** Right, I guess something like DropBox is also local first.

**David:** Alright, our second tool is Polypane, a browser testing tool. Now
Jean, you've already thought about suggesting this to your team to adopt it. So
why don't you explain what you liked about it?

**Jean:** Polypane is a really neat tool. The idea is that if you're doing
front-end development, testing across different browsers, different browser
sizes, different form factors, is quite tricky.

This is something I've run into a bunch with my company, Akita. What Polypane
does is it's this new browser, that lets you test different panes side by side.
You download Polypane and you get to manage different browser views all side by
side. You can see how your page is going to look across different experiences
all at once. This is built on Chrome, so the dev tools are available. They also
have a bunch of really neat plugins, I admit I haven't tried yet, but they have
accessibility testing, they have some chaos testing, they have a bunch of
front-end testing built in.

We actually have no dedicated front-end people in our team right now. Quick
plug, we are trying to hire one. So talk to us if this is something you like.
Over the last couple years, I've done a bunch of testing for both our main site
and our web console for our application. This multiple browser thing is a pain
because there's stuff that looks good in a small window but not good in a big
window. Sometimes for some of the things, they'll implement it assuming that
developer is going to have a vertical window open, but around my demos, it's
actually a horizontal window and it looks completely different. So, we do work a
little bit with a designer who helps us with some of those. I feel like a good
designer kind of has the different views in their heads, but implementing it,
things turn out totally different.

**Jean:** It's always super time intensive and very manual to test different
browser sizes. Testing in the front-end in general is a huge pain.  We're too
small to have a QA team. Sometimes we'll do an all-team bug bash where we all
just use the front-end. I am really excited about this centralized front-end
testing. I've never seen anything that has so many of the front-end gotchas all
in one place. I was looking at the quotes on the website where people said,
"Look, this improved my productivity more than any other front-end tool I used."
And again, we don't have any dedicated front-end people on our team, so maybe
front-end people have a whole thing they do, but it seems like this automates
and makes a lot of that less manual.  I'm super excited.

**David:** It's a really streamlined way of doing testing across multiple screen
sizes. It is running multiple Chrome instances, so I found it a little CPU
intensive even on my M1 Macbook. I thought that it made a lot of sense,
particularly being able to inspect elements simultaneously across panes. That
was useful because you can see how things are changing as the resolution is
different. Like you said, the chaos functionality where you can randomly drop
out network access or inject CSS and disable images, the accessibility
assessments in it were pretty useful as well.

The thing that stood out to me is that this is Chrome. How long is Chrome going
to keep its market share for?  Years ago Internet Explorer was the one that we
all wanted to try and make work. I think it's good that Chromium, as an
open-source project, is being adopted, but where's the competition for the web
renderer?

**Jean:** That's a good question. A lot of our issues come from Safari ,or a lot
of our front-end issues come from non-Chrome browsers. One of my questions was,
how well does this technique extend to non-Chrome browsers? I love the
abstraction of having multiple Chrome windows in a single pane. I love the
automation opportunity of being able to test across all of your views at once.
As someone who's thought a lot about automating back-end tests, it always blows
my mind that front-end testing is so manual. I asked and around a bunch, people
were just like, "Yeah, this is just how it is." I think the abstraction that
they introduced of having all of your panes at once, test automatically across
all of them, rely on automatic testing, automatic analysis, linked to your
front-end, as well as your back-end, I love it. I really don't know enough about
browsers to know how transferable some of the stuff is. I agree that seeing a
couple of data points extending beyond Chrome would be really cool.

**David:** All right. Well, that's it for this week, please let us know what you
think on Twitter or by email. I'm @davidmytton on Twitter and linked in the show
notes. And don't forget to subscribe to the weekly DevTools newsletter at
console.dev.

**Jean:** I'm at @jeanqasaur on Twitter. You can also follow Akita software
@akitasoftware for the latest in API observability, understanding your systems
from the outside. And I will see you next week.

**David:** See you next week.

{{</ box-collapsible >}}
