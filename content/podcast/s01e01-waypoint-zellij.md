---
title: Build, deploy, release, terminal workspaces (Waypoint & Zellij)
who: David Mytton & Jean Yang
what:
  "Episode 3 of the Console DevTools Podcast, a devtools discussion with David
  Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software). Tools
  discussed: Waypoint (build, deploy, release) & Zellij (terminal workspace)"
season: 1
episode: 1
date: 2021-07-08T08:00:00Z
duration: 15:30
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/34cade96-6fc7-489e-b7f0-8df02409e8de/audio/56dd0d20-b394-4b54-bd5c-6c68f1fed108/default_tc.mp3
draft: false
summary:
  Waypoint (build, deploy, release) & Zellij (terminal workspace), a devtools
  discussion with David Mytton and Jean Yang.
metaDescription:
  Waypoint (build, deploy, release) & Zellij (terminal workspace), a devtools
  discussion with David Mytton and Jean Yang.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/favicons/www.waypointproject.io.png
topImg2Src: /img/favicons/zellij.dev.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/34cade96-6fc7-489e-b7f0-8df02409e8de?dark=true
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

Episode 1 of the Console DevTools Podcast, a devtools discussion with David
Mytton (Co-founder, Console) and Jean Yang (CEO, Akita Software).

Tools discussed:

1. [Waypoint](https://www.waypointproject.io/) - Build, deploy, and release
   across platforms.
2. [Zellij](https://zellij.dev/) - Terminal workspace manager (tabs +
   multiplexing).

Other things mentioned:

- [HCL](https://github.com/hashicorp/hcl) - Hashicorp Configuration Language.
- [Vagrant](https://www.vagrantup.com/).
- [Terraform](https://www.terraform.io/).
- [Kubernetes](https://kubernetes.io/).
- [Gitpod](https://www.gitpod.io/).
- [GitHub Codespaces](https://github.com/features/codespaces).
- [tmux](https://github.com/tmux/tmux).
- [vim](https://www.vim.org/).
- [Oh My ZSH](https://ohmyz.sh/).
- [Fish](https://fishshell.com/).
- [VS Code](https://code.visualstudio.com/).

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David**: Welcome to the first episode of the Console DevTools podcast, a new
show all about interesting developer tools. I'm David Mytton, co-founder of
Console, a free weekly email digest of the best tools and beta releases for
developers.

**Jean**: And I am Jean Yang, CEO of Akita Software, an API observability
startup. In each episode, we'll discuss two interesting developer tools. We're
keeping this to 15 minutes, so let's get started.

**David**: So the first tool we're going to discuss is Waypoint. This is a new
project from HashiCorp that helps developers get their code into production. And
really, it aims to combine three separate steps, build, deploy, and release,
into a single CLI for developers. You define the various steps in HashiCorp's
contract language, HCL. And then you can trigger each step either individually
or as a single waypoint up command, which you may be familiar with from using
Vagrant and the other HashiCorp tools.

And I think what's interesting about this is that those three steps really are
quite separate at the moment. I remember quite a long time ago having to build
our own deploy system, which was quite a hacked-together system, to try and
deploy reliably and then be able to roll back and determine what is the release.
And so I thought this was an interesting project that kind of combines that
build step, which is often done with all sorts of CI tools at the moment.

Then how do you get your artifacts into production? And what does release
actually mean? HashiCorp's Waypoint tool is kind of bringing in all the
different resources that you have on cloud, like load balancers and DNS changes,
and puts it into a single command. I think one of the interesting things about
this is it assumes that your app is containerized, or at least it seems to. This
is a question we can discuss, what you thought about the docs. Because almost
every single part of the documentation and all the different plugins into the
different ways you can get your app assume that it's building a Docker container
and then pushing that out. And you get other things around it, like being able
to stream logs and execute commands by logging into the containers that are
running. What did you see when you were trying it?

**Jean**: So at a high level, I thought this tool looked awesome. I'll caveat
this by saying I'm not the one on my team in charge of deployment. So I don't
really know the latest and greatest, but what I do know is deployment is getting
harder and harder. So this definitely seems useful. My team is a big fan of
Terraform, so I love how they're taking this infrastructure as code and shifting
it to deployment as code. And deployment as code definitely seems like the best
short-term solution for managing something so complicated. And also, once you
get people to start describing the build, deploy, release steps, there's all
kinds of other automation you can do. It really becomes this point where you can
build all sorts of tooling and an ecosystem around this. I love the goals. It
seems like a great problem to go after.

And the fact that it's open-source is great, because not only HashiCorp can
build into this ecosystem of tools, but really everybody can. And it also seems
very pluggable. So David, you brought up the Docker. It did seem to me also,
it's assuming Dockerization. But it seems quite a pluggable technology for
everything Docker and beyond. So it seems like, if something new came out to
replace Docker as the containerization or the virtualization target, you would
be able to target that as well. One question I had that we can discuss if we
have time, or the listeners can discuss with us on social media or otherwise, is
do people have to be Docker and beyond for this to be useful? So now we'll get
into what questions I had in places where I think this could be more useful or
could improve.

So when I dug into the docs, I guess I had imagined. I was like, oh wow, the
idea of this is so great. There's so much you can do with this. But in the docs
right now, the abstractions they've introduced for describing build, release,
deploy seems still pretty low-level. And so for instance, you're describing
resources as strings. I think Kubernetes was a string. AWS was a string.
Everything was sort of configured by hand. And so, I can imagine iterations on
top of this where things become a lot more pluggable, there's a lot more
checking. There's just lifting of the abstraction there. And the other question
I had was, look. Infrastructure as code makes a lot of sense, because your
infrastructure doesn't change over time. You don't need to control flow for your
infrastructure. It's not like, oh, if a request coming in is doing this and then
does this, well we got to move over.

We got to move over to our Kubernetes cluster now. I mean, there's a little bit
of that, but it's not so complicated. But everything I've seen of build, deploy,
release is much more complex. So there's the questions of what happens when
tests fail? What happens when tests are flaky? Especially if you're starting to
do principal testing and production, there's a lot more stuff there. And so, the
abstractions that I saw here didn't tackle that part. I wonder if and how much
it can, because that's the part of that cycle I'm more familiar with, where
people tell me they have more headaches. And so, one question I have is, even if
you could do the specification of your cycle, like the basic parts of it as
code, what percentage of that does that help make your problems go away? Is one
of my questions I have for the listeners.

**David**: Yeah, absolutely. I really liked the combination of the build and
release steps as part of the code base. It's all in the same repository,
essentially. Because we're starting to see that, particularly with developer
environments where tools like Gitpod and GitHub's Codespaces, the VS Code in the
cloud, where the developer environment is defined inside the repository. And it
makes it really easy for anyone just to spin up a new environment, to make a few
changes, or look at a pull request and have that just generated from very
reproducible code.

**David**: And if we can do the same thing with the build, deploy, and release
steps, then that will make things a lot easier for developers working on it. But
like you said, there's a long way to go with this. Not least just because it's
an early release and still a lot to be developed. The server side of Waypoint is
still fairly undocumented in how you run it in production. And they don't
recommend running it in production, because it's so early and you do have to run
that server side. But I think as it matures, it's going to be interesting to see
how this actually can really abstract out all of the different resource
providers, all of the cloud providers, and the products that they offer.

Alright, the second tool that we're going to discuss is a new terminal workspace
manager called Zellij. I think that's how you pronounce it. So this is an
open-source project that tries to combine all of the aspects of the terminal. So
you get tabs, you get multiplexing, you get session management and scroll-back,
all in a single binary. And I picked this because I'm a big fan of the CLI in
general and plain text terminal interfaces. I really liked the idea of being
able to run everything in a single terminal window. But there are so many
different things you have to combine to get everything working how you want it.
In particular, when you're trying to restart sessions, defining your layouts and
where all the panes are going to go, and sometimes you need different size
windows.

And if you're a new user to something like tmux, just remembering the key
bindings can be really challenging. Certainly as I was getting into Vim, I was
always having to look up the right commands online, searching what I was trying
to do, which is quite a barrier for new people, I think. Even though once you
know it, it is a superior workflow just because it's so fast to do everything.
And that was one of the nice things I found about Zellij, is it makes all of
those key bindings, which you can customize, but it makes them all really
discoverable. How did you feel about it?

**Jean**: So David, when you picked this tool, I was really excited about the
opportunity for you to tell me more about people who customize their terminals.
So I am a terminal person through and through. I think my whole team, we're
pretty old-school. My first programming language was BASIC with the line
numbers. I'm a Vim person. I've always used a very uncustomized terminal. I
barely get it right when I try to do two terminal windows in one terminal
window. So I just open two terminal windows. I recently started using Oh My Zsh,
because I was onboarding a user and I was like, what's that pretty thing? But I
am a really simple person. And I think my whole team is the same way, because
I've seen them demo things from their terminal and I'm like, yeah. We all use
pretty old-school terminals. So I was just really curious, David.

Well, one thing that struck me was this repository on GitHub has the same number
of stars or comparable to Waypoint. Which, I'm much more familiar with the
Waypoint issues. So at first I was like, oh, it must be a small percentage of
the population who customizes their terminals like this. So David, can you just
explain to me this movement of customizing your terminal? And like, how do
people find each other? Where do you share your information? Is this
cutting-edge? I don't know anything about any of this.

**David**: Those are all very good questions. And I think it's certainly a small
minority of people who are very enthusiastic about all the customizations that
you can make. And it really is discovering people's dotfiles on GitHub and then
forking the repository and making the changes. I think certainly it comes from
the Linux world, which is one of the reasons to use Linux, aside from the
open-source philosophy, is the customizability, which you don't really get on
other operating systems, or not as easily. And for me personally, being able to
define everything in a text file and put it in version control is quite
appealing. But then you end up spending days doing the customization rather than
real work.

**Jean**: Yeah. Because I feel like my .vimrc file is always not that long. I
feel like people will sometimes be like, oh, take a look at my .vimrc file. But
you know, this never got very far. So I feel like, I don't know. Maybe I'm just
in a different bubble. Yeah. So is this ergonomic, or is it just like, let's see
how far you can take it? Is it like tricking out your car?

**David**: Definitely. Yes. I think the question is how much time are you
spending in the terminal, and for many developers that might just be using Git
and maybe running a watcher script that recompiles files as you're editing
things. But if you are doing a lot of development. Well, if you're using vim, I
suppose, then you're in the terminal all the time.

**Jean**: Yeah. No, I think that even with very old-school Vim, people would be
like, oh my God, there are like 20 key bindings I can teach you. And I'm just
like, nope, nope, nope. The equivalent of typing with two fingers. I mean, it
just worked for me. You just learn a process when you first learn it. And I
guess for someone who's really into semantic tools, I was never a big physical
tools person or whatever you want to call that. But yeah. So I'm super curious.
How does the functionality of this project compare to what other things would
give you?

**David**: I think putting everything into a single tool allows you to have some
kind of customization that is in a single config file, and the functionality of
tabs and sessions and panes, resizing things. If you're doing that at the
moment, you have to find several different things and combine them, whether
you're using tmux for the sessions and restarting things, and then defining the
colors in your terminal or your shell config, choosing a shell in the first
place. Bash and now Zsh and Fish and all those other ones. And really there's
just so much choice that you could just use Zellij.

**Jean**: So when I first got introduced to computers, my parents literally had
a terminal and there was no mouse. And so you had to use your keyboard to get
around, but there's a mouse now. You can just do open new terminal window with
the same profile. So for whom is it more ergonomic to do everything with just
key bindings and shortcuts and things like that?

**David**: And with the growth of tools like VS code.

**Jean**: Yeah.

**David**: One of the more popular editors. You can install Vim key binding
plugins in VS Code. But I think it's less than 1% of people are using Vim these
days. And is that because VS Code is better, or is it because people can't
discover the key bindings, or do they just not know?

**Jean**: Right. So yeah. I do my demos in VS Code now. And I also, again, don't
really use the fancy features of VS Code. I just use very bare VS Code. So one
question I have is it seems like VS Code just lets you open many windows at the
same time using a GUI. So is the appeal? Well, I guess this is open-source. Is
that one appeal? What are the other appeals?

**David**: It's written in Rust. That's a cool thing at the moment, isn't it? I
think you're right. It's the ability to customize everything. And most people
don't need to do that because the defaults are good enough in the likes of VS
Code, and it has all the in-built functionality. Or you can very quickly
customize one or two things, install a new theme and a plugin, and you've got
everything. Perhaps if you're using the terminal as a sysadmin or you're logging
into servers all day, then maybe this makes a difference. But perhaps for most
developers, it's not going to really increase their productivity much.

**Jean**: Yeah. I am just super curious to hear from some of the 3.5k GitHub
stars. What are you using this for? Because this is just such a different world
for me. So yeah. If you're one of our listeners and you use this stuff, I'm not
making fun of you. I promise. I just really want to hear from you. This is very
new to me.

**David**: So that's it for this week. Please let us know what you think on
Twitter or by email. The links are in the show notes, and don't forget to
subscribe to the weekly DevTools newsletter at console.dev. And if there's a
cool tool that you're building or you'd like us to consider for a future
episode, then let us know.

**Jean**: Yeah. And if you want to talk to us in the meantime, find us on
Twitter. You can find me @jeanqasaur, which if you just Google me, you can find
me. And you can also follow my company Akita @akitasoftware to hear about
API-centric observability, microservices, APIs, and more. See you next week.

**David**: See you next week.

{{</ box-collapsible >}}
