---
title: AI pair programming and screen sharing (GitHub Copilot and Tuple)
who: David Mytton & Jean Yang
what:
  "Episode 3 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: GitHub Copilot (AI pair programming) & Tuple (screen sharing for 
  developers)"
season: 1
episode: 2
date: 2021-07-15T08:00:00Z
duration: 15:30
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/67ba5a7c-dd85-447d-971a-b8c4e7be8ab6/audio/7c924548-6977-46c0-b1aa-940f4f94fb30/default_tc.mp3
draft: false
summary:
  GitHub Copilot (AI pair programming) & Tuple (screen sharing for developers), 
  a devtools discussion with David Mytton and Jean Yang.
metaDescription:
  GitHub Copilot (AI pair programming) & Tuple (screen sharing for developers), 
  a devtools discussion with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/copilot.github.com.png
topImg2Src: /img/favicons/tuple.app.png
ogImg: /img/podcast/podcast-cover.png
twitterCard: https://player.simplecast.com/67ba5a7c-dd85-447d-971a-b8c4e7be8ab6?dark=true
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

Episode 2 of the Console DevTools Podcast, a devtools discussion with David
Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software).

Tools discussed:

1. [GitHub Copilot](https://copilot.github.com/) - AI pair programming for VS
   Code.
2. [Tuple](https://tuple.app/) - Screen sharing optimized for developers.

Other things mentioned:

- [Computer Aided Programming Group at MIT](https://groups.csail.mit.edu/cap/).
- [Jean’s programming language research](http://jeanyang.com/).
- [GNU General Public License
  (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html).
- [Django](https://www.djangoproject.com/).
- [Ruby on Rails](https://rubyonrails.org/).
- [Bootstrap](https://getbootstrap.com/).
- [David’s sustainable computing
  research](https://davidmytton.blog/publications/).
- [Jean’s Twitch channel](https://www.twitch.tv/jeanqasaur).

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console DevTools Podcast. A show all about interesting
developer tools. I'm David Mytton, co-founder of Console.

**Jean:** And I'm Jean Yang, CEO of Akita Software, an API observability
startup. In each episode, we'll discuss two interesting developer tools. We're
keeping this to 15 minutes, so let's get started.

**David:** The first tool we're discussing today is GitHub's Copilot. This is an
AI pair programming extension for VS Code that analyzes your code as you type,
providing suggestions as auto complete, but also full code blocks. So, firstly,
I think this is a really good example of how to release something new and
potentially controversial in a field in general, but also specifically one using
AI and machine learning. Although you have to get an invite, which I suspect is
for rate limiting, there's already been a lot of discussions about the legal and
ethical implications, which really is exactly what should be happening for this
kind of tool.

We were both able to get access to the preview and already going in you have a
prejudiced opinion of it because there's been quite a lot of negativity from
mega complainers on Hacker News and people on Twitter. And I kind of feel like
this is like any issue where there's a tiny minority who are potentially very
loud, but maybe they're just not the right audience for this kind of tool.

Now I spent a couple of hours refactoring some Python code with Copilot enabled
and it really is quite interesting providing those auto complete suggestions,
which if you're using Gmail or Google Docs, you'll be familiar with. But where
it gets really interesting is that as you're typing, it literally just shows up
exactly what you were about to type as the auto complete! And then also one of
the common tasks as a developer is going to Google to try and find out a regular
expression or just jogging your memory on how to use some particular feature of
the language. And you kind of get that built in using the comments - you can
just write a code comment, wait a couple of seconds and then Copilot will
suggest it. So it's almost like having a built in search into your editor. What
did you think, Jean?

**Jean:** Yeah, I completely agree with you on a lot of the things. And I was
super excited that we could get access to it because I don't know if you've seen
my Twitter, but I've been a staunch defendant of Copilot. I've been going after
the idea of removing boilerplate code from programmers lives, my whole career. I
had sort of concluded, well, you can't really remove too much. A lot of it
depends on programmer intent and what the programmer wants to do. And to me,
Copilot is an amazing first step towards that because I have a lot of people in
my sphere who work on compilers, they work on very custom, bespoke, fancy code.
And so they're like: explain to me the point of Copilot. And I'm like: do you
realize that most of the code I write when I do code these days is web code or
data processing code, it's mostly been 90% written by someone else before, I
just have to reconfigure it.

So this workflow of, Google what I want to do and then write it, is very much
exactly what Copilot supports. So a lot of people are like: but how do comments
express programmer intent? And I think for me, I am very, very conscious of how
much my programming workflows are actually, Google to Stack Overflow to me
customizing the code. And I don't think this is just a new thing. My mum is a
software developer and when I was a kid growing up in the 90s, 2000s, she said,
most of the life of a working developer is learning how to ... well, back then
there was a lot of books too... but learning how to find the right recipes in
books and on the internet!

And this is also related to a lot of bias people had when auto complete became
integrated into text messages and emails. People said, our emails aren't going
to be as good anymore. And I was like, do you realize how many of your emails
just say yes, okay, that's good? And you spend what? Like 15, 20, 30 minutes, an
hour coming up with that five word email. And so I think people are going to be
freed up to do a lot more things, once they have this inserted into their
workflow. I'm also really excited about putting this kind of power into the IDE
because the entire group I got my PhD in was called computer aided programming.
We all did a lot of work on how to throw compute power at making programmers
lives easier. I had been highly skeptical about maybe upwards of half of the
work in the group, it was no secret because I said, look, you can't put this
kind of thing in a compiler if you don't have soundness, if it generates results
that are not correct.

But this IDE loop, having a loop where the programmer actually gets to check and
modify the code, to me, I was like, oh my gosh, this is the interaction. Because
when I search for things on Stack Overflow, when I search for things on forums
to fix my problems, I never take it as is, I always think about, is this doing
what I'm supposed to be doing? So I think that's super powerful. I also think a
lot of the things people are upset about are super easy to get around. If you're
upset about licenses, don't train on those licenses. These issues have been
around already during privacy discussions, I'm kind of shocked people didn't
talk about this more. What do you think Google is doing? How do you think Google
customizes everything? It's training on all of your data, Facebook is training
on all of your data. Now then when it has to do with GPL licenses, you're
scared. You should have been scared already. So these are my views on the pros.

The cons are, I think people need to be careful not to expect too much of it. I
don't expect auto correct to write my emails to potential users for me. I think
people shouldn't expect Copilot to do their coding for them. And people have
brought this up before, there are going to be bugs and there are going to be
security issues, I think this is not an issue to just throw out Copilot
altogether, but we're going to need new methods to combat it. Code is different
than texts, in that it actually gets executed. If I write an email and I use the
wrong auto-complete, who cares? Humans are used to being the ones consuming
texts. But I think with code, something we should always be aware of when there
are tools that make it easier to do coding is how do you know that that is doing
what it's supposed to do?

And so again, I will toot the horn of my area of computer science which is, in
the field of programming languages there's been lots of techniques for
automatically checking code, there's been lots of techniques for automatically
understanding what the code does. If we're going to have Copilot, we're going to
need a lot more than linting to check over our code. And I think that's part of
what's been upsetting people, but we're going to have to need to support
innovation on that front and incorporate those tools into our tool chains as
well.

**David:** I do find it weird that the open-source proponents are trying to use
the more restrictive elements of copyright when that is kind of the opposite of
what copyleft licenses, open source licenses - they're supposed to be very
permissive, whereas they're trying to shut down the uses of this. And like you
say, if the GPL is being triggered in terms of whether it's a derivative work or
not, then you just exclude GPL licensed code from the training set. And I think
the key really is in the name, the name of the product is Copilot, it's there to
deal with the boilerplate code, to help you bootstrap on your project. And we've
seen with the popularity of frameworks like Django and Ruby on Rails and the
Bootstrap UI framework, the developers don't really want to be writing all of
this boilerplate code and if it can just make the coding process more efficient,
developers can focus on much more interesting problems.

**Jean:** Yeah, I agree. And I think some people say, it's a sad state of
affairs if there's this much boilerplate code now, there's always been this much
boilerplate code, there's always a gap between where automation lives and what
people want to do. And I think a tool like Copilot is great to fill that gap.

**David:** One of the things that did stand to me is the level of requests that
are going to be happening all the time, as you're typing, Copilot is analyzing
the line and the surrounding area. And my question will be what is the
computational overhead of that? And my own academic research is in sustainable
computing and energy modeling for cloud computing environments and the carbon
footprint of IT. And if you're constantly sending requests and doing inference
on the code and doing kind of expensive operations, I'd be interested to try to
understand what is the sustainability impact of that behind the scenes.

**Jean:** Yeah, absolutely.

**David:** Okay. Moving on to our second tool, which is Tuple, a screen sharing
product, that's optimized for developers. The idea with this is that when you're
using something like Google Meet or Zoom to do pair programming, or to show off
designs with your colleagues, the level of quality of the screen-sharing is
variable, you're unable to control it, and it is not an optimized environment
for collaborating. Tuple makes it really easy to quickly start a screen-sharing
session. You can control the resolution that the screen is shared at, and it's
very easy to take control. So you can start typing, you can collaborate with
others on code, and it significantly reduces that cognitive overhead for just
starting a call.

There are two downsides to it that I found; the first is that you have to have a
really good connection. I found working with a colleague of mine who was sharing
over 4G, trying to take control of his screen was having four or five seconds of
lag. But if you do have that really good quality connection, you can ramp up the
resolution way up to 5k, which makes it look like you're coding locally. But
then also how often do people do pair programming? I've certainly never done it.
I've never really seen anyone do it, but perhaps I'm just not the target
audience. What do you think?

**Jean:** Yeah, I think that's a really good point, David. I had some similar
questions about, this seems like a really cool tool for if you want to program
next to someone, but I was curious what the specific personas and use cases are
because I think I'm definitely not a pair programming evangelist. I can think of
some use cases on my team where a tool like this would be super useful, but I'm
not sure that Tuple is the right tool for it. One way I see Tuple as being super
cool and super useful is that it's this non-invasive persistent tab at the top
of your machine, so you can jump into a pair programming session seamlessly. You
can share your screen, you can write on the screen, it really combines a lot of
functionality all in one go. For the use cases on my team, I would say, we
mostly will "pair" on something if someone runs into a bug and somebody else
rubber ducks it for them. There's not a ton of overlap in anything anybody works
on.

And so for us, it's really the friction of getting into a call, that is the
biggest problem. And we already have a virtual office that we sit in all day,
where we have a lot of other modalities as well, so you can turn on video, we
have emoji reacts, we have a lot of other things, and so the screen share there
is a little more seamless than Zoom, which does make it easier. I do think the
Zoom screen share makes things hard. But I think for us, just the friction of
getting onto a call is one of the bigger barriers. And we already have a
solution for that. If we use Tuple, maybe we would realize that it was great for
a lot of little things that we didn't think of. But I think the switching costs,
we wouldn't necessarily be like, oh, the screen resolution is too low when we
pair on things. So I'm curious for the people who do a lot more pairing if
that's an issue.

And the other use case is I don't think it's one that Tuple supports, is that we
end up pairing with our users quite a bit more often than we pair with each
other on their integrations of Akita. And there, what I would love to have is
something browser-based so you don't need to install something because something
I did notice about Tuple was it asked for every single permission on your
machine and that made me really, really nervous. And I think that the way that
they've built their system relies on having the desktop extension, that takes
every permission. But if there was something browser based that were a pair
programming lite, that would let someone share some parts of their screen, that
would let me highlight something on their screen, that didn't ... I think taking
over their screen is really cool.

And this is something I remember customer support for various software I used to
use would do, back in the days of Shrink-Wrap software or something like that. I
don't remember when this really stopped, but I would love something for pairing
with users of devtools that were less invasive because I think we have that
problem much more often. But again, I would love to hear from listeners who do
pair, what is your use case? What does it solve for you? Does something like
this help because things are moving more remote. I can see junior engineers
having a way harder time getting onboarded.

**David:** I've seen on your livestreams on Twitch, you occasionally ask people
to zoom into the IDE. Do you think this would solve that problem?

**Jean:** That's a really good question. Well, I think if you notice, we only
ask people to zoom in once the whole call. And so I feel like once people are
adjusted to the environment, it's not really a big problem. I think that on my
team, we've gotten used to the level of Zoom everybody wants for sharing and so,
yeah, I don't know that these are repeat problems.

**David:** All right, well that's it for this week. Please let us know what you
think on Twitter or by email. I'm @davidmytton on Twitter and links are in the
show notes. And don't forget to subscribe to the weekly devtools newsletter at
<https://console.dev>

**Jean:** I'm @jeanqasaur on Twitter. You can also follow @akitasoftware for the
latest in API observability and understanding your systems from the outside. And
I will see you next week.

{{</ box-collapsible >}}
