---
title: Containers & Tests
who: Sergei Egorov
whoLink: https://twitter.com/bsideup
org: Atomic Jar
orgLink: https://www.atomicjar.com/
what:
  We discuss the challenges of developing container-based applications, how to
  orchestrate containers for testing, the future of cloud development
  environments, and whether the Apple M1 chip has come too late.
season: 3
episode: 7
date: 2022-07-21T06:00:00Z
duration: 32:45
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/e2229ffc-7acc-4fc1-89d2-0c541e7da75b/audio/2b970953-1fbd-409f-8db7-293e99409fa0/default_tc.mp3?nocache
draft: false
summary:
  Containers & Tests - a devtools discussion with Sergei Egorov (Atomic Jar).
  Episode 7 (Season 3) of the Console DevTools Podcast.
metaDescription:
  Containers & Tests - a devtools discussion with Sergei Egorov (Atomic Jar).
  Episode 7 (Season 3) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/atomic-jar-sergei-egorov-profile.jpg
topImg2Src: /img/favicons/www.atomicjar.com.svg
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/e2229ffc-7acc-4fc1-89d2-0c541e7da75b
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

In this episode we speak to Sergei Egorov, CEO of
[AtomicJar](https://www.atomicjar.com/), the company behind TestContainers, a
library that helps with integration testing for containerized applications. We
discuss the challenges of developing container-based applications, how to
orchestrate containers for testing, the future of cloud development
environments, and whether the Apple M1 chip has come too late.

Things mentioned:

- [AtomicJar](https://www.atomicjar.com/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [Google Cloud Run](https://cloud.google.com/run)
- [Heroku](https://www.heroku.com/)
- [Josh Wong](https://joshlong.com/)
- [Twelve-Factor App](https://12factor.net/)
- [Web Assembly](https://webassembly.org/)
- [Scaffold](<https://en.wikipedia.org/wiki/Scaffold_(programming)>)
- [Buildpacks](https://buildpacks.io/)
- [KO for GO](https://github.com/google/ko)
- [LocalStack](https://localstack.cloud/)
- [Lambda](https://aws.amazon.com/lambda/)
- [DynanoDB](https://aws.amazon.com/dynamodb/)
- [Quarkus](https://quarkus.io/)
- [GitHub Code Spaces](https://github.com/features/codespaces)
- [MacBook Pro M1](https://www.apple.com/macbook-pro/)
- [Notion](https://www.notion.so/)

{{< rich-title-5 icon="future-head" >}}About Sergei Egorov{{</ rich-title-5 >}}

Sergei Egorov is CEO & co-founder of AtomicJar - the company behind
Testcontainers on a mission to make integration testing easy and enjoyable for
developers. He is a Java Champion, an active member of the Open Source
community, member of the Apache Foundation, and Reactive Foundation TOC.

### Highlights

{{< podcast-episode/clipping time="13:16" >}}

**Sergei Egorov:** Despite us being testing framework with containers, I still
believe that there is a house of balance between what should be running in the
container and what shouldn't be running in containers. So for example, external
components and Kafka, Postgres, MySQL work out of a database and many other
technologies can and should be started as containers because that's the
abstraction you need. When you run your task, you need to start this independent
system so that your application can start but it is important to pick the right
incentive. It's important to focus on, "Hey, I need to start my application so I
can test it". And some people start with, "I need to copy my production
application because this is where my application is running and then I can test
it" because most of the cases that's not the case and trying to replicate the
production environment, sometimes it's easy, sometimes it's not.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="21:39" >}}

**Sergei Egorov:** I'm actually a huge fan of cloud IDEs. I've been pitching
this idea for, I don't know, 10 years, like "why do I have to have a powerful
laptop"? And the reason for that is because I'm coming not from a wealthy family
and my laptops were never the most performant ones. And I was always said,
"Okay, but why do I need to do it on my laptop? Why can't I use these fancy
cloud technologies"? For example, it's not a new idea, my mainframes existed for
40 to 50 years. I don't even know but this idea of connecting your terminal to
some powerful instance hosted somewhere is great. We were limited by our network
capacity and not network technologies that made it less viable. But now that we
are getting better networks, 5G becomes, basically, an easy option for having an
internet connection no matter where you are.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton** (00:05): Welcome to the Console Podcast. I'm David Mytton,
co-founder of console.dev, a free weekly newsletter highlighting the best and
most interesting tools for developers. In this episode, I speak with Sergei
Egorov, CEO of AtomicJar, the company behind Testcontainers, a library that
helps with integration testing, or containerized applications. We discuss the
challenges of developing container-based applications, how to orchestrate
containers for testing, the future of Cloud development environments and whether
the Apple M1 chip has come too late. We're keeping this to 30 minutes. So let's
get started. I'm here with Sergei Egorov. Sergei, thanks for joining the Console
Podcast.

**Sergei Egorov** (00:50): Hey David, thanks for having me. Console.dev is
obviously the source of information about DevTools, and as a DevTools founder,
it's a pleasure for me to be here.

**David Mytton** (00:58): Excellent. Well, let's start with a brief background.
Tell us a little bit about what you're currently doing and how you got here.

**Sergei Egorov** (01:05): So I'm a developer who turned founder and I'm
currently CEO, AtomicJar, a company behind Testcontainers, a pretty popular
open-source project for integration testing. And in my new roles, that I'm still
exploring, I'm trying to create products that make developers happy. That's our
motto.

**David Mytton** (01:24): Whenever anyone says containers, Docker really is the
first thing that comes to mind and then maybe Kubernetes. Would you say that's
accurate? And what does the container ecosystem look like today?

**Sergei Egorov** (01:36): So what I used to say many years ago, when Docker
became a thing and what I get excited about it, is that Docker isn't the
containers, Docker is the tooling for containers. And the actual revolution was
in the tooling, how we built images, how we shared images, how easy it is to run
images now. And containers existed for many years, like zones, jails, for
example, but those were hard to use and Docker made it trivial to use
containers.

Obviously, Kubernetes is a great example of how containers were taken to the
next level, like running in production. And we, as Testcontainers, we also make
use of containers, but for testing as a part of software development, other than
production.

**David Mytton** (02:20): Right. That makes sense. I suppose the Jails comes
from FreeBSD. And how you run applications in a secure way then. Is it right
that containers came out of Google as a real production technology?

**Sergei Egorov** (02:33): Frankly speaking, I don't know. I know LXC, I know
Jails. And I mean, I don't believe Jails were coming from Google because for
obvious reasons they aren't into BSD systems, as far as I know, but they are so
many things. But what I can definitely say is that Google made enormous effort
on popularizing containers, obviously with Kubernetes, but also other
technologies. And they're still doing it, like this Google Cloud Run, for
example, is this concept of just, "Here's my code. I want to package it and run
it in the cloud." It's a great evolution. It's the Heroku for containers
everyone is talking about. As someone who is involved in Knative, I'm so happy
to see more managed services released right now for this.

**David Mytton** (03:17): Yeah, I suppose that's what developers really want, at
least in the early stages of building an application, is just to throw your code
up to a cloud provider and let them deal with everything else. And I suppose
containers just makes that really straightforward.

**Sergei Egorov** (03:33): I think that's, really how they say, the biggest lie
Dell did is he made everyone believe that he doesn't exist. And same here. I
mean, it's not a lie, but first what Google did, they made everyone think that
they want Kubernetes but then everyone realized that Kubernetes is still low
actually, despite it being an obstruction already. But it's great to see this
next step where Kubernetes becomes the platform. It is indeed a great platform
but we need something more.

**David Mytton** (03:59): What happens in the development environment then? How
are developers managing containers locally?

**Sergei Egorov** (04:06): I'm a big believer in 12-factor applications. And I'm
a bit concerned about this trend recently about Kubernetes-native applications.
I was concerned about cloud-native applications because, for me, it's just yet
another environment for 12-factor applications. But I'm slightly concerned about
coupling to the platform and I hope that we will not be moving away from the
idea of 12-factor applications, where applications are just something atomic,
something that can be started anywhere. For example, Spring Framework and Spring
Boot, as a way of running spring applications is a great example. You could
literally build the same spring application and 20 years ago you would run it in
an application server in Java.

Ten years ago, you would package this as a jar file. This famous “Make JAR, not
WAR” statement by Josh Long. Then, five years ago, we were comfortable deploying
it as a cloud fund application. Now we are the one who deploys the same
application to Kubernetes, and I think that's a great example where 12-factor
applications make a lot of sense, and this is why they make a lot of sense, but
the same applies to testing. For example, the same approaches for starting the
applications apply to testing and it doesn't need, let's say, a Kubernetes
cluster to be started.

**David Mytton** (05:21): Can you elaborate a little bit more on what you mean
by 12-factor applications and what the problems you've seen with cloud native
approaches are?

**Sergei Egorov** (05:31): Twelve-factor applications originated from Heroku.
They were the main driver for this, not like specification, but rather, I would
even say mindset, that set of good practices for modern web applications or
modern web services. And a lot of these things make a lot of sense. They're not
controversial and you cannot even argue with them - just read them. It's like,
"Yes, this makes a lot of sense". But this cloud native world, and while it
believes that, like the real cloud native world, it plays very well with
12-factor applications. I think we started making shortcuts here and there, like
how we configure applications, how we build them, how we test them, and we ended
up trading some of these factors and reducing them, not because we have a good
reason for that, but because we were focused more on the infrastructure side of
things, which is kind of surprising because Devops, the topic was kind of shift
left and now we are, "Yeah, let's the more on the infrastructure side".

**David Mytton** (06:31): I suppose it's the temptation to play around with the
latest, cool cloud products that are being released and all the different APIs
and build microservices and most applications really don't need that complexity,
right?

**Sergei Egorov** (06:44): Yeah. I totally agree. I think sometimes it's fine to
just create a VPS instance and put your source code on it and run it. I know PHP
style, in some sense, if that's something that works for you you can also do
that. You don't need to deploy Kubernetes there to be able to run your blog, for
example. And it applies the other way around, sometimes they see people trying
to do these simple things in complex environments, and then it creates a lot of
issues for them. So, I guess, the balance is what's important: understand the
requirements and then match the requirements and not try to fight the
requirements. But also it's important to have fun because Kubernetes is a lot of
fun. Not going to argue with that.

**David Mytton** (07:24): Right? Yeah. And I suppose containers, you can come at
it from two angles: there is all the complexity of using Kubernetes and
everything that allows you to do with the container. But, ultimately, containers
are just a really stripped back bare bones operating system. You can treat it
like that and you put your code inside it, you tell it the one or two things it
needs to run, and that can be it. You don't really need anything else. Is that
the way that developers should start with containerizing their applications?

**Sergei Egorov** (07:52): I also remember this joke from Shrek, the movie;
ogres are like onions. They have so many layers and I think containers are just
another layer but I kind of like that you can wrap your code into the layer and
then you no longer know what's inside, but you don't care what's inside. And
it's a great obstruction. And we also see it right now happening with web
assembly, which kind of takes a step down at the code level, while previously we
were at the corporation system level or process level. Now, web assembly is also
at the code level and that's another great obstruction. I can easily see web
assembly being deployed as a container, being deployed as a pod on Kubernetes,
being deployed as a virtual machine. And it's crazy when you think about it, we
create more and more layers.

But I think we also get more control of these layers as compared to how it used
to be because, if I recall how Netflix were doing their production systems, for
example, 10 years ago, they were packaging virtual machine instances, AMIs on
AWS. And it worked well for them, but it was such a big beast, if you think
about it, to deploy a virtual machine and how to test it, how to share it. All
these questions were unanswered and containers are just better atomic units for
code deployments, I believe.

**David Mytton** (09:09): Right. That makes sense. So what are the challenges
that developers face when they're building container-based applications?

**Sergei Egorov** (09:16): Obviously, there are still many challenges and Docker
made a revolution and they're still making a revolution with BuildKit, for
example, which is just the next step of it. But one of the challenges is that
it's no longer just zip your binaries. For example, to build a Dockerfile, you
need a Docker instance and you need to, you need to run your code. So it's not
declarative, it's actually imperative. You need to start the container. This is
why there are some services like Google Cloud Build, for example, where you can
just delegate it to a cloud deployed instance. And as these aspects of building
containers, I also notice that the obstruction is a bit too low level. In
Dockerfiles it is a bit too low level because, for example, we look at Jib, if
we look at Buildpacks, they all follow the same idea.

Tell us, what's your application about, tell us that it is a Java application,
tell us how much memory you need and then we'll take care of the rest. We'll
bring the best practices of packaging Java applications into a container. And
that's, I think, what was missing from the original idea of Dockerfiles, where
you just describe the steps as roll steps of adding files to the file system,
running commands, but then the average junior developer won't have the knowledge
of how to properly package their Java application despite the wide availability
of information on the internet.

**David Mytton** (10:37): Yeah, that makes sense. So what should developers
think about at the beginning of a new project to make it easier to package as a
container and then just make future maintenance a lot easier as well?

**Sergei Egorov** (10:50): My take on that is to start with existing predefining
solutions. For example, Buildpacks or Jib or whatnot, and modern-tooling, for
example, Skaffold has perfect integration with technologies and those are layers
and it can always unwrap these layers, you can always go deeper. This
obstruction is not enough for me. I want to customize it and then you unwrap it
and now you're building your custom build pack, or eventually you decide, "Okay,
I actually need to build Dockerfile". But actually most of the things we are
doing, we are just repeating it over and over and over and we are doing the same
as a hundred other developers are doing at this very second. So it's always a
great obstruction to assume that someone else already figures the problem you're
trying to solve.

Reusing this knowledge, for example, through Buildpacks is a great way of just
learning from these folks. And one of the reasons why I love Buildpacks is
because I know that it's a collaboration between multiple vendors like Heroku,
PO2, and others. And, for example, PO2 is very well known for components from
cloud foundries that dynamically calculates memory for job applications. And
it's such a big pain, I remember fighting with this problem at three different
companies and I always had to find these backups of my code in my drive to find
that snippet of code where I was recalculating the memory. But with Buildpacks
you get it out of the box and you don't even need to know about this problem.

**David Mytton** (12:17): So the Buildpack allows you to bring in the best
practices or the best ideas around production configuration and you just drop it
in as part of the build step. Is that how it works?

**Sergei Egorov** (12:29): Yeah, it's more or less like that. Just say that I
want a Buildpack, I want to use this Buildpack definition so I can use Packeto
buildpacks or buildpacks by other vendors. Google is also actively involved into
buildpacks and it becomes a trio thing. And it's not the only way of bringing
best practices of packaging applications as docker containers or OCI containers.
So for example, KO for Golang is another very popular tool that just turns Go
sources into Docker images. And this for purpose tools is a great way of just
reusing someone else's experience. And you'll mostly get it for free which is
kind of unique, if you think about it.

**David Mytton** (13:10): Yeah, that makes sense. And what about testing
applications? How does that work with containerization?

**Sergei Egorov** (13:16): Despite us being testing framework with containers, I
still believe that there is a house of balance between what should be running in
the container and what shouldn't be running in containers. So for example,
external components and Kafka, Postgres, MySQL work out of a database and many
other technologies can and should be started as containers because that's the
abstraction you need. When you run your task, you need to start this independent
system so that your application can start but it is important to pick the right
incentive. It's important to focus on, "Hey, I need to start my application so I
can test it". And some people start with, "I need to copy my production
application because this is where my application is running and then I can test
it" because most of the cases that's not the case and trying to replicate the
production environment, sometimes it's easy, sometimes it's not.

And for example, Netflix, they're using Testcontainers. I don't even think
anyone in the world knows how to start Netflix from scratch, how to recreate a
production environment. But it makes no sense for them. And they're still very
productive testing their applications because they don't need that. But using
containers for starting the applications is a great way of just short cutting a
lot of challenges when it comes to testing. But the application can still run as
part of your test code so you can debug it, you can put breakpoints, obviously,
and you can also change some internal configuration just for testing, if you
really need to.

**David Mytton** (14:43): You're talking about the integration testing or are
you also considering how unit tests might work as well in containers?

**Sergei Egorov** (14:50): That's actually a good question: "what is a unit test
nowadays"? And even Martin Fowler, many years ago, said that unit tests, while
usually we reason about them as something just in code and mocking, doesn't have
to be mocking. Back then when unit tests were popular, I'm not saying that
they're no longer popular, but back then when it was the go-to solution for
testing. The only reason why people were not considering starting external
dependencies, like I/O sources for unit testing, because it was very hard, very
time consuming and very unreliable. But now that it is reliable with containers,
with projects like task containers and others, there is a very thin line.

There's a thin border between unit testing and integration testing. But it's
also something that we see in the community. Sometimes people confuse
integration tasks and kind of integrated tasks or end-to-end tasks where
applications are started in a single environment. While we believe that
integration testing is just the application under test it's direct external
dependencies, databases for example it talks to, and the rest can be mocked out
at the network level and maybe with some contract testing it becomes a very
powerful and very efficient testing strategy.

**David Mytton** (16:03): Interesting. So that's almost like the layer analogy
you talked about earlier, where you have unit tests on maybe a function or a
class definition or something like that. And then you have the integration
tests, which extend that into the databases and then the end-to-end testing is
the full application and other dependencies? Is that the right way to think
about it?

**Sergei Egorov** (16:23): Precisely. We even thought about maybe finding a
better word for what our users are doing, because it's more like I/O testing,
something between unit testing and integration testing, because there are still
a lot of assumptions about what integration testing is. It's not something new,
definitely, but we need to find a better word to describe what we are doing
because we just do unit tests, but with real external components and not code
mocks.

**David Mytton** (16:49): How do you think that changes with Serverless
functions? So AWS Lambda, for example, that's an external dependency, you could
say, and maybe it gets triggered by an event in AWS. Does that change the model
at all?

**Sergei Egorov** (17:03): This is exactly the 12-factor problem I'm thinking
about because Lambda and Serverless is a deployment model. It's not how you
write your code. It comes with a lot of libraries and frameworks but it remains
code that is deployed to some environment. And, yes, it is serverless so it
comes with certain scalability guarantees and flexibility when it comes to
scaling it up and down but I would never think about a specific testing strategy
just because it's serverless. It's the same application that can be started
connected to external databases. We see a lot of Testcontainer users who test
their lab with Testcontainers. There are some great projects.

In addition to that, for example, LocalStack, we have a module for LocalStack
that is quite a popular module actually. So they start the Lambda as just code
as they would test a normal NodeJS application for example, or Golang
application. And they start external components like DynamoDB, S3 and others
with LocalStack, S3 mock and other services. And they have the best of two
worlds, the best deployment environment, Serverless and the best DevEx
environment. As in, you write code, you debug it, and you start it locally
without having to deploy it somewhere.

**David Mytton** (18:20): And does that work because task containers is about
orchestrating those tests within your code rather than them being a separate
component? Is that the benefit that you see from the library or would you
describe it differently?

**Sergei Egorov** (18:35): In fact, Testcontainers isn't even the framework.
It's just a tool. It's just the library that one can use from any test framework
and we also have multiple languages like Testcontainers, Java Testcontainers,
Go, Python, not just .NET, Rust and even Haskell, which is the craziest I think.
But you can think about it as we have mocking, where you would write new and
memory something, and it's the same with Testcontainers, you can do a new Kafka
container, build start, and boom, you have real Kafka running like the same
image that you run in production but available locally for a task. And you can
have exact parity between your production environment and your dev dependencies.
And then it's up to you how to use it. In fact, obviously we have tests in the
library name but we've seen more and more people using it for manual testing.

I've seen local development when they start applications and there are some big
frameworks, for example, Quarkus, which is the biggest framework like primary or
flagship framework by RedHat. And they have this mode, dev services mode, and it
actually implements my favorite parting, clone and run, where you don't need to
run, read me, you don't need to perform additional operations. If you want to
start working on some project, you just clone it, then just git clone
myproject.git, and you run it. And then it is self-contained. devmod is exactly
that. They start containers for your manual testing automatically with
Testcontainers and then you can have your application running on your laptop
without docker compose, without Kubernetes, without anything.

**David Mytton** (20:13): And does that change depending on the language or the
ecosystem? Or is it completely agnostic?

**Sergei Egorov** (20:19): As it is a library, then each language needs to have
its own library and we start extracting common components. For example, our
watchdog container, called Luke, it is just containers languages that start and
it takes care of cleaning up the containers. And that's actually one of the
biggest challenges of testing with containers, not how you start them, but how
you stop them.

How to ensure that CI environments aren't running tons of containers that are
dangling containers. So because someone just killed Jenkins' job and we
obviously want to reuse more. And for example, our product test contains Cloud,
which is managing an environment for running Testcontainers based tasks as an
alternative to a local Docker. It is available for all the languages because
it's language agnostic, just like all this language is connected because it
accesses the Docker environment.

**David Mytton** (21:10): The Cloud point is a good one because we're seeing a
lot more development happening in the Cloud, in particular, Dev environments
that are hosted in AWS, either as instances or IDEs like GitHub codespaces
integrated into VS code. And you can just spin up a new codespace for every
repository that you want to work on. Is that the future development, do you
think? And why do you think it's important for developers to use these
cloud-backed development environments rather than local systems?

**Sergei Egorov** (21:39): I'm actually a huge fan of cloud ideas. I've been
pitching this idea for, I don't know, 10 years, like "why do I have to have a
powerful laptop"? And the reason for that is because I'm coming not from a
wealthy family and my laptops were never the most performant ones. And I was
always said, "Okay, but why do I need to do it on my laptop? Why can't I use
these fancy cloud technologies"? For example, it's not a new idea, my mainframes
existed for 40 to 50 years. I don't even know but this idea of connecting your
terminal to some powerful instance hosted somewhere is great. We were limited by
our network capacity and not network technologies that made it less viable. But
now that we are getting better networks, 5G becomes, basically, an easy option
for having an internet connection no matter where you are.

Starlink is bringing it to the wildest parts of the world. And even Microsoft
Azure, they've been exploring options of having their data centers in the space,
floating around us. Like instead of producing a lot of CO2, like committing a
lot of CO2 and consuming a lot of energy and also wasting energy just cooling
down the servers, they could literally just run it somewhere in the space. And
even latencies could be better sometimes because if it is right above you then
the chances are good that, similar to Starlink, that your latencies will be
great. But at this point of the future of development, I do think that Cloud is
a bright future that will not be covering a hundred percent of development
workflows but a decent chunk of it. And I'm also a huge believer in the
compatibility of these environments.

It's not like one cloud will be implementing everything. For example,
Testcontainers cloud, you could ask whether it's the future for Testcontainers
cloud, if everyone will be running cloud IDEs. And I say, "yes, because what
they do, they have their own product". And you know how they say, "If it's not
your business, don't build your product there". And there are a lot of
advantages because just off-loading these containers that previously had to run
on the same cloud IDE instance, because most of the time you just code, you
don't need 16 gigs of RAM for coding, but you need them when you run your test.
And the decoupling of the test environment from a continuous environment is the
way to go, in my opinion.

**David Mytton** (24:00): We've seen the Cloud get better and better and
internet connectivity get faster and faster. And we've now got this technology
that allows us to run these instances in the cloud as if it was a local
instance. And then Apple has released the new M1 chips and the new Macbook Pros
and kind of revolutionized the performance and reduced energy consumption on the
local devices. Do you think that's a shame now that the momentum has been to
move everything off the computer and suddenly the computer has just got
significantly more powerful?

**Sergei Egorov** (24:34): That's funny that you mention Apple and M1s. I'm
using one, by the way. We are having our conversation while I'm on one.

And it's a great machine but that's literally how our product announcement
starts; that when I started doing prototype for the Testcontainers cloud, I
realized that I cannot run my own task. And the reason being is ARM. Docker
images are Intel images. And many of the technologies I was using for the
prototype weren't working with that emulation layer in Docker, or like it's
skewed the emulation layers through Rosetta and it becomes crazy. But it was
always our goal to deploy a prototype so that I can run my own task. And that's
a great example of how we can optimize our development environments because ARMs
are so much better. I no longer hear the fans and if I were using, let's say, an
Intel machine most probably would need some noise cancellation right now because
it would be ‘whooooo’ but we don't hear anything. It's silent.

And it's great for your development experience because you're on your task and
you aren't burning your legs but it comes with limitations because ARM is a
completely different architecture and the chances are high that your production
will be running into machines and into base technologies. And you have two
options, either run inception for development ARM technologies. But then what
happens if Kafka on ARM behaves differently than Kafka on Intel? You must
probably want to test it with real Kafka because it is the same as in
production. And this is why this decoupling of development environments from
some machines where they perform actions, I think, is a great idea. And the
Apple M1 is just another great example.

**David Mytton** (26:18): I've had my M1 Macbook Air for quite a long time now,
just a month or so after they released it. And at the beginning, even just
installing packages was a real problem because so many of them were built for
Intel x86. Nowadays, almost everything is available with an ARM architecture but
not everything. And there's always that one edge case that isn't there. Do you
think Apple's release of the M1 has pushed developers to support chips? And do
you see the cloud providers pushing that as well? Like with AWS's Graviton
processes and Azure just announced a preview of Ampere chips as well. Where do
you think that's going to go?

**Sergei Egorov** (27:03): It's not the first time when Apple triggered a
revolution. I'm an Apple fanboy but we need to admit that they actually
sometimes make revolutions being on phones, tablets, or laptops this time, and I
really like where it goes, and especially like that we got ARM on desktops, but
we got more tooling for ARM. So we start considering ARM for our CI
environments, for example. And this is all very helpful because of its lower
energy consumption. It's cheaper after all. And it's so much more performant
and, where it makes sense, I'm actually looking forward to many workloads being
replaced with ARM architectures. And I also know that Intel is working on the
ARM process right now. It's just great to see. Great to see that we are adopting
ARM, it's finally happening, because it was always, "Yeah, yeah, it's cool but
there is no way we can adopt it that fast".

And then Apple said, "No, you will because if you like Macbooks then you will
have to adopt ARM". And people said, "But, but what it takes". And apparently it
doesn't take that much and I can easily see it happening in development, by the
way, when you think that, okay, "Refactoring, this component will take, I know,
a few months" and then one day you just get bored and at the end of the day you
start refactoring, you spend until 6:00 AM, by the time you commit to full
refactoring with a lot of lines change, but apparently it wasn't that hard. So
I'm excited and I'm excited to see it spreading to CI environments, for example,
because that's actually one of the problems I see. The cost of CI environments,
but also, the impact, the energy impact and overall impact of CI environments is
huge. Some companies spend more money on CI environments than their production
environments and just being able to reduce this cost but also use less resources
for the same purpose. That's an amazing outcome.

**David Mytton** (28:59): Well, before we wrap up, then I have two lightning
questions for you. The first one is what interesting DevTools, more tools in
general, are you playing around with at the moment? I suppose you just talked
about one with the linting, but was there anything else you wanted to mention?

**Sergei Egorov** (29:14): I played more with Skaffold. We like this integrated
environment where you have building, where you have a deploying part, it's
integrated with Kubernetes. And it's very nice working with Kubernetes. We liked
it. I know that Cargo, for example, a set of projects by currently VMware I
think, they took a different view on this. They created Linux style, impossible
tools, and then like every tool serves its purpose. And so like 10 different
personalities. Although I find it sometimes hard to compose, like even with
Linux, some people say that piping is great. And for me, I keep forgetting how
to pipe one thing into another and there is just one single tool to make it
good. And then "boom", I have it good. So I think I'm more of a Skaffold guy.
Then as a CEO, sorry, I know that's it's podcast, but the notion is so great.
After confluence, it's something new and great like, "Oh wow". Like such a
change and even more your thing, but I wish more people were using Calendly
because I think this saves so much time, and you know this picture like, “the
world if you were doing this”. So I think that applies here. We would have these
flying cars and everything if everyone were using Calendly and other services
for automating booking.

**David Mytton** (30:33): And then the second question is what is your current
tech set up? What's the hardware and software you're using on a daily basis?

**Sergei Egorov** (30:41): So I'm a Mac guy using Apple M1, as we already
discussed, I'm not too fancy about it. I only have one wire coming in it, I'm
also using it as my primary display. So I don't have many displays around me,
just my laptops that I can always take with me. And I'm used to working on a
laptop. By the way, it is an M1 not an M1 Pro. I did not upgrade to this new
version because the touch bar is one of my productivity tools and I cannot
believe they decided to remove it. I'm just waiting for them to reconsider it.
And before that happens, I think I will be with this Apple M1 2020 edition for
as long as it will be doing the job. I think I'll stay with it. And other than
that, not much, maybe some fancy set up for Zoom calls with some light and
microphone.

And by the way, this microphone is actually not that expensive because people
think that you need to have a lot of microphone, crossings, hardware and
everything. But apparently it's a Shure SM7B, it's just plugged into a USB. I
can take it with me on my trip. And it only cost, I don’t know 250 bucks or
something, which is expensive for a microphone. I admit that I was on a fence,
but now I'm really enjoying it. And others will also be so thankful when you
invest into your microphone and see you have a great microphone too. So I'm
thankful for having a great microphone. Thank you, David.

**David Mytton** (32:05): Well, unfortunately that's all we've got time for.
Thanks for joining us Sergei.

**Sergei Egorov** (32:09): Thanks for having me. It was a great conversation.

**David Mytton** (32:13): Thanks for listening to the console dev tools podcast.
Please let us know what you think on Twitter. I'm @Davidmytton and you can
follow @consoledotdev. Don't forget to subscribe and rate us in your podcast
player. And if you are playing around with or building any interesting dev
tools, please get in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
