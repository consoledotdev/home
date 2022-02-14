---
title: How do developers pick tools? (Cue & Leapp)
who: David Mytton & Jean Yang
what:
  "Episode 10 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Cue - Open source data validation language, Leapp - manage cloud
  access credentials."
season: 1
episode: 10
date: 2021-09-09T07:45:00Z
duration: 14:44
draft: false
summary:
  Cue (open source data validation language) & Leapp (manage cloud access
  credentials), a devtools discussion with David Mytton and Jean Yang.
metaDescription:
  Cue (open source data validation language) & Leapp (manage cloud access
  credentials), a devtools discussion with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/www.leapp.cloud.png
topImg2Src: /img/favicons/cuelang.org.png
ogImg: /img/favicons/www.leapp.cloud.png
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
author2Img: /img/podcasts/akita-jean-yang-profile.jpg
author2Bio:
  is CEO of Akita Software. Jean earned her PhD in software correctness and
  programming language design from MIT and then became a professor in computer
  science at Carnegie Mellon University before she started Akita to build the
  future of API observability.
---

### Episode notes

Episode 10 of the Console DevTools Podcast, a devtools discussion with David
Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software).

Tools discussed:

- Cue - 0pen source data validation language)
- Leapp (manage cloud access credentials)

Other things mentioned:

- JSON
- Go
- Protocol buffers
- Typescript
- F# Projects
- Julia Programming Language
- Akita Software
- AWS Identity and Access Management
- Apache Subversion

{{< box-collapsible title="Full transcript" >}}

**David Mytton:** Welcome to the Console DevTools podcast. A show all about
interesting developer tools. I'm David Mytton, co-founder of Console.

**Jean Yang:** And I'm Jean Yang, CEO of Akita Software, an API observability
startup. In each episode, we'll discuss two interesting developer tools. We're
keeping this to 15 minutes, so let's get started.

**David Mytton:** Our first tool today is Cue, an open source data validation
language. Cue helps you validate files, APIs, and configs, and has particular
support for Kubernetes files, and allows you to implement that validation as
code. It's a superset of JSON, so it will be a familiar language and unlike
JSON, it supports comments, which is pretty useful.

The idea with this is that it's crazy that we're not validating the data
associated with our code, configs, or schema-less databases like MongoDB. Now
we're seeing APIs become significantly better defined than they were just a few
years ago with the likes of open API and Swagger. Cue is that for your data
layer. What was your take, Jean?

**Jean Yang:** I love this. It seems super useful. If I had my way, data would
always be code. I think it's kind of nuts to me that code isn't treated as code
even. That code is treated as data. That's the opposite of what I want. They're
integrating with a good set of starting things, and I think this has massive
potential for the future.

One thing I was wondering was it's nuts that we need this external tool Cue to
go around validating everything. What could we do to make data less arbitrary
and make code actually data and not the other way round. To have more structure
and more checking naturally.

**David Mytton:** This has only become more popular over the last few years. I
think TypeScript comes to mind as one of the examples that I'm sure most
developers have at least played around with because JavaScript is notorious for
just accepting anything and not really having types. That causes a lot of
problems and TypeScript is an approach to try and solve that. It seems to have
had a lot of adoption. And is this the kind of thing we wanted to see from data?

**Jean Yang:** I'm curious. Are we going to start seeing this kind of thing in
config files? One of my favorite projects is this F# project where they suck in
semi-structured data from the internet, give it type so you can explore it, F#
style, strong static types. I think that's so cool. I did a computational
biology internship many years ago, and I was processing a lot of data as you
might imagine. One of my favorite things was to suck it into Python and put it
into dictionaries and check it before I did anything with it. You'd be surprised
how often it had bad parts in there. If I had my way, there would be an
underlying type checker everywhere.

**David Mytton:** Definitely with data science, that's a real problem or any
kind of science, how much time you're spending, cleaning up data, whether it's
just surveys or actual machine data. I suppose in the old days, it was all just
plain text. That's where we started from.

**Jean Yang:** I think when people think about types, they don't realize how
complex the types can be. I don't know how many of our listeners use the Julia
programming language, but there are types as specific as an upper triangular
matrix. You can have types that depend on the data. You can have many properties
that are about the data. Our work at Akita is all about inferring structure from
API traffic traces. I'm very much about there being as much structure as
possible. It should also be inferred as much as possible. TypeScript can only
take off because there's some inference involved and I would love to see more of
it.

**David Mytton:** The particularly interesting thing with Cue is the fact that
definitions don't make any distinction between types and values. That means you
can put an example of values into the definition files, whether it's an address
or a phone number or something like an IP address, and that will be considered a
valid definition.

It just makes sense to link those together because you don't want to have a
separate step for validating the type and then validating what you put into that
type and describing your data in the way that it's actually being used. It just
makes it a lot easier.

**Jean Yang:** Inference on values is very important for a lot of these things.

**David Mytton:** Our second tool is Leapp. This is a small utility that you can
run on your desktop that allows you to manage your credentials for cloud
environments. This really only becomes a problem when you have more than one
cloud environment, which probably should be most people who aren't just playing
around with a cloud provider for their own stuff. You've got to be able to
separate production from staging and production from development.

The problem is that whether you're using Microsoft Azure or AWS or GCP, all your
credentials are just in a single file that you will just download into your home
directory, then it's all got the same name. The idea with Leapp is that it
integrates into the operating system's native credential storage. On Windows
that's a credential vault, and on macOS that's Keychain, which means you get all
the automatic features of encryption and the authentication layer, whether
that's TouchID or FaceID on Windows; and being encrypted, it makes it safe to
store on your local device.

Then it provides a nice UI. So that you can switch between the different
credentials that you want to log into, including things like AWS's IAM support.
This is quite a straightforward product. Although I imagine it's quite
complicated to implement all of the different types of credentials, you've got
to be able to access them. One of the things you raised, Jean was, this is a new
startup and they are storing your credentials - obviously not themselves, but
certainly implementing the local storage of it. How are we supposed to trust
someone like this with critical login details?

**Jean Yang:** Yeah, I'm torn, decreasing friction for securely managing
credentials is obviously a good thing, and encouraging people to practice better
security practices is also a good thing. But is giving your credentials to some
company you've maybe never heard of that has double ‘P’’s at the end of its
name, a wise move? You know, it's just a non-starter. Is that better than
storing credentials the way you're doing now? I'm not sure. I think that if you
have so many credentials, you also have probably enough riding on not losing
those credentials, that it seems like the calculus for using this new credential
manager. I'm not sure what would tip me over to using it.

**David Mytton:** So the question is how does adoption happen for these tools? I
think what we tend to see in security is the top-level decisions are made by
executives. Often the software's forced down on teams, but over the last few
years, it's being flipped. We've seen with cloud computing adoption and then
just developers making their own tools. This is an app that you can just install
on your computer and no one's going to approve it and you can just start making
use of it.

**Jean Yang:** If I were the security team I might want to know and approve it.
I'm curious. I'd love to hear from our listeners, what would be your risk-reward
calculation for adopting something like this? Then there's a more general
question, which is, I love the user experience innovation of this tool. I think
one password for credentials is needed. It seems like they do a good job of
doing it, but how are startups supposed to innovate on user experience for
security, if it's so hard to break in because you can't make the risk-reward
trade-off.

I think for some things, if someone's an early startup and they're not taking my
credentials, I would say, "Well, cool. I'll spend some extra time on you or I'll
spend extra compute using you." But when it has to do with my credentials, come
on, that's like letting a training hairdresser, do your hair before your wedding
or ... It feels really high stakes.

**David Mytton:** Yeah, definitely. I think you have to start relying on some of
the claims that they're making. So I think the first one is everything's always
local and whether it's open source or not, it would be the ability to verify
that. The fact that it's integrating into the APIs or the operating system on
Windows, Mac, and Linux to actually use that credential store that's encrypted,
you can verify that. You can open up the Keychain Manager on macOS and have a
look and see if the keys are in there. I suppose you could test it on just some
dummy credentials or credentials that don't matter to a system and see what's
going on.

The ability to use those native APIs, do you think that offloads the trust?
Instead, they're just innovating on the user interface itself, which is
interacting with the underlying APIs and so your trust is really in Mac OS or
Windows.

**Jean Yang:** That's a really good point. I think I wouldn't have thought to
test it this way because I don't understand the underlying trust model of my
machine as well as you do. I do think that's pretty cool. I don't really trust
any software that well, though. But that's a really good point.

I think the other interesting question here is where does innovation in user
experience for security come from and what is motivating it more generally?
Something I've seen a lot is if you have the CSO as the main buyer, as the main
budget holder, they're going to choose things that help them decrease their
liability for issues. Show that they've put a process in place to cover
everything. If leaking credentials, isn't one of their biggest process issues,
there may not necessarily be a budget for something like this because if an
individual developer is picking it up, I guess it could come out of their
proprietary developer budget.

But if they try to get a security budget for this, someone will ask, "Well, is
this the most hair-on-fire thing that's causing security issues?" And I'm not
sure that people are storing credentials today so badly that it is. It seems to
me like there's a lot of security ergonomic issues that maybe don't have to do
with the most hair-on fire-things, that could benefit from innovation. Does this
all just go the way of a lot of programming tool innovation. People want nicer
languages, but for a lot of reasons, because it's a want, not a need; no one
pays for it. Is this kind of ergonomic user security going the same way?

**David Mytton:** Perhaps the pain point then isn't the actual storage of the
credentials. And it's the user interface of switching between logins and the
cloud and the different users that you have for authentication. That seems to me
like a developer happiness question rather than a security question.  As a
developer, if you're constantly having to mess around with different credential
files in your home directory and figure out which one you need to use to get the
correct permissions to log into the AWS console, arguably that's an AWS problem.
They should improve their console login, but then developers are spending too
much time trying to switch between different credentials.

**Jean Yang:** So is this actually a problem? I'm not logged into all of the
credentials that my team needs, but I feel like, for the things I need, it's
just stored in credential files that the tool manages on its own.

**David Mytton:** I've seen a Chrome extension that does a very similar thing,
although it's not innovating on the storage of the credentials like Leapp is. It
is still helping you manage which user identity you're logged into in the
browser for the purposes of logging into AWS. Having seen two of these tools
now, and Leap is one that does interesting things on the desktop APIs, it
suggests that we don't have big enough cloud environments to experience the
pain, but it is a big pain, generally.

**Jean Yang:** Who is it a big pain for?

**David Mytton:** I suppose the question comes around how many users you have on
AWS and GCP, and maybe this is something the audience can tell us, is this a
pain? Do you really find it that much of a problem logging into your Amazon
console? If so, how many environments do you have? There must be all sorts of
different roles that you set up with permissions to access all the different
services AWS has.

**Jean Yang:** My impression is AWS does a pretty good job of making it fairly
painless. If you're all AWS all the time, they get what they need from your
credentials files. Maybe this is not true if you're using so many tools across
AWS. For us, it seemed fine, but maybe it's one of those things like when
everyone was programming in Assembly and before they really experienced
something better, they just thought it was the best thing they could do. Or when
Dropbox came along, I said, "What's the big deal. What's wrong with SVN?"

**David Mytton:** I suppose the broader question is how do developers adopt new
tools and clearly it's to solve some kind of pain. They hear about it from their
friends, so, this is potentially trying to figure out a way into the security
arena, using that method by providing a nicer user interface and easy way to
switch credentials. It must be a pain if there are other tools out there already
doing it, and this is a good way to bypass security teams.

**Jean Yang:** This is really interesting. There are very few examples of
security tools I've seen that improve the developer experience. They're all
developer first. This makes a lot of sense, but it's a really hard space to
crack because developers have to be convinced it matters. I'm really curious, is
this something that's painful enough that developers are convinced it matters?
Is it only painful if developers are required to be very safe about their
credentials? If that's the case, maybe this is really someone up top wanting
this for their developers.

**David Mytton:** All right, that's it for this week. And also for this season.
We're planning season two of the Console Dev Tools podcast. Please give us some
feedback, let us know on Twitter @consoledotdev. Also, rate us in your podcast
app and give us a review. You can let us know what we're doing well and what we
need to improve.

**Jean Yang:** Please help other people find us by giving us good ratings if you
like us.

David Mytton: Excellent. Thanks. See you next time.

**Jean Yang:** See you.

{{</ box-collapsible >}}
