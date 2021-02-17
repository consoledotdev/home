---
title: Q&A with Christian Weichel, Gitpod
shortTitle: Christian Weichel, Gitpod
what: Dev environments as code and hosted in the cloud.
date:  2021-02-17T12:12:09Z
draft: true
summary: Q&A interview with Christian Weichel, Chief Architect / Head of Engineering, Gitpod.
isSelected: qa
---

{{< p-description >}}Interview with Chief Architect / Head of Engineering, Gitpod.{{<
/p-description >}}

{{< img-2col
    src1="/img/qa/gitpod-christian-weichel-profile.png"
    alt1="Christian Weichel, Chief Architect / Head of Engineering, Gitpod"
    src2="/img/qa/gitpod-christian-weichel-logo.svg"
    alt2="Gitpod Logo"
>}}

### What is Gitpod? Why did you build it?

[Gitpod](https://www.gitpod.io) is all about automating dev environments. It
comes from the fact that we've started to automate more and more as developers,
the obvious one being CI/CD, but we've stopped short of dev environments. If
someone new joins the team (or if you're an open-source project) and you want
to have people participate and contribute, then they all have to jump through
hoops to get running. We've left them at this ‘README’ thing, where you had an
outdated document that you would follow and try to maintain.

Even once you've set up your environment, the world moves on. If you want to
work on a new feature, or go back to a previous state, then you're basically
almost back to square one.  Even worse, the instructions may be out of date.
We thought there has to be a better way to go about this. This is where Gitpod
comes in, removing that friction, making it easier and less cumbersome to
maintain, so everything is now in sync. The environment configuration and the
instructions for setting it up are the same thing.

### What does a "day in the life" look like?

Starting in the morning, I have a look at what's happening in the Gitpod
repository, and see what issues have come up. Look at the community to see if
there are some quick answers that I can clear, unblock people, maybe help out
really quick. If not, I help with the triage to make sure stuff gets answered,
then go through emails.

I'm head of engineering, so depending on what phase of the development process
and cycle we're in, it's either grooming for the next cycle, or making sure
we're on track. Every once in a while, I try to have some focus time and hunker
down to actually write some code as well!

### What is the team structure around Gitpod?

We're a team that’s distributed globally in Europe, North America, South
America and Australia. There’s the engineering team, currently a group of five,
which we’re looking to grow, so if anyone's interested in joining the team,
[please do apply](https://www.gitpod.io/careers/#jobs).

In addition to engineering, we also have the customer, success and developer
communications, a product team, and devops. The product team drives the product
designs and makes sure we move in the right direction, with the engineering
team making sure we can actually make stuff happen. Devops makes sure that
everything actually runs and whatever the other teams come up with is something
that we feel comfortable operating.

### How did you first get into software development?

Through my dad back in the nineties. He was a software engineer, so once he got
fed up with me putting shareware games on his computer, he started to teach me
programming. It took a long time for me to pick it up, and then eventually I
did an apprenticeship and started studying. It's really me as a young kid being
interested in this stuff and learning as I went along.

My first language was Basic, but, believe it or not, it was when I was around
12yrs old playing with Visual Basic when I first felt like I could build my
ideas and get stuff done. After Visual Basic, it was Java. I stuck with that
for a very, very long time - ten years easily, with the odd glance toward
something like Scala or Kotlin as it came out.

As an undergraduate, I had a short-lived love affair with Haskell (as many do)
and then the real world came in. For the last five years it's been Go
primarily. At some point, it just felt very natural to move there. I worked for
three years as a system architect for an IoT startup, a spin out from Bosch,
and that was mostly C, with Go for the backend systems.

### What is the most interesting development challenge you've faced working on Gitpod?

Understanding Kubernetes and integrating with it.  When we started this
Kubernetes was still relatively new. None of us had any real experience with
Kubernetes. We set up a [minikube](https://minikube.sigs.k8s.io/docs/), but
that's a far cry from knowing how to properly integrate all the behaviors and
how to scale it. That's been a steep learning curve. At the heart of Gitpod
what we do is start pods and watch over them, and then do a lot of exciting
stuff within those pods.

Also, finding the balance between monolith and microservices has been
important. Thankfully we managed not to fall into the ‘we have to do
microservices now’ craze. I would describe Gitpod as a distributed monolith.
Monolithic doesn't mean you can't have well compartmentalized and well-defined
interfaces and concerns. Clearly we have those, it's more that we don’t split
everything into individual services if we don’t need to. If something runs as a
separate service, it does that because there's an actual practical need and not
because we need to split along organizational lines.

### What is the most interesting tech you are playing around with at the moment?

We've built a few things around Gitpod. The forefront of container tech has got
us really excited. Things like [user
namespaces](https://docs.docker.com/engine/security/userns-remap/), [Seccomp
notify](https://people.kernel.org/brauner/the-seccomp-notifier-new-frontiers-in-unprivileged-container-development),
[eBPF](https://ebpf.io/), all this Linux tech that's been emerging over the
last couple of years, that now enables things that three, four years ago were
unthinkable. We've made heavy use of this within Gitpod.

[OCI Images](https://github.com/opencontainers/image-spec) have been
interesting. For example, dynamically assembling image manifests based on
system state so that you can enable layer reuse even if those layers have
orthogonal concerns. This means that if you have an image with Go and an image
with Java, you can update the Go image without having to invalidate the Java
image. This helps reduce the image size on every startup.

I have also been following the DevSecOps space, particularly with things like
[Kinvolks](https://kinvolk.io/), [Inspector
Gadget](https://github.com/jelledruyts/InspectorGadget) and
[Falco](https://falco.org/).

Build systems are a big part of what we do at Gitpod as well. When we started
out, we built everything all the time because we were focusing on minimal
viable changes. We made a change in the front-end, and would build all the
backend stuff, meaning we'd be ramping up build times of 20 to 30 minutes. That
clearly doesn't scale. We then looked into caching build systems, using things
like [Bazel](https://bazel.build/), [Gradle](https://gradle.org/), and all the
Bazel clones. In the end we ended up creating our own open source caching build
system for Go, Typescript and Docker called
[Leeway](https://github.com/gitpod-io/leeway).

It's fun to see what's out there to get inspiration. Like a lot of developers,
we tend to undervalue our own time, so ‘make or buy’ decisions happen to be a
bit skewed!

### How do you think about open sourcing those kinds of projects?

They are all [open source](https://github.com/gitpod-io), and this has been a
massive step forward. In the past if someone were to ask a question, there
would be this nagging thing in the back of your head: ‘Can you talk about
this?’ Now, if someone has a question, I can point them to the commit. I can
point them to the code.  This has been super helpful and we've been doing the
same with all the tools that we built around Gitpod too, like [our build
system](https://github.com/gitpod-io/leeway) and all the other experiments that
we run alongside, all of that is open source.

### What about open core and the potential implications for the business model?

Gitpod is an open core model. In the [Gitpod repository](https://github.com/gitpod-io/gitpod) the vast majority of
what's in there is under AGPL but even though some of it is under a proprietary
license, you can still see that code. There's a license that comes attached
with it if you want to use it or modify. This shows in our SaaS product where
there's a pretty generous free plan. If you outgrow that it means you're a
power user so are more likely to be able to justify paying.

One of the main motivations for open sourcing Gitpod was to inspire trust.
We've profited so heavily from open source - if you look at where Gitpod comes
from, it's a spin out of another company called
[TypeFox](https://www.typefox.io/). Both companies have a long standing history
in Open Source. We’ve been heavily involved in the Eclipse Foundation, notably
the [Eclipse Theia project](https://theia-ide.org/).

It never sat right that we'd be doing something now that isn't open source.
With regards to the business, Gitpod is open core, so there are some features
that you have to pay for if you want to host them yourself. These are for
larger teams. We want Gitpod to be as useful and accessible to as many people
as possible.

### Describe your hardware setup

I have a 15-inch MacBook from 2018. The one with a broken keyboard, and the
touch bar, which I never use. It just acts as one of my three screens. Right
next to it is a 32-inch monitor, and underneath is a Lenovo Display that works
as a portable USB-C screen that has its own battery that you could also take
with you. If I want to work somewhere else and need a second monitor, then I
can use that one. Turns out we're not going many places these days, so it's
still standing there.

There’s also a [Blue Yeti
microphone](https://www.bluemic.com/en-gb/products/yeti/), speakers, amplifier,
keyboard and a touch pad (I'm not using a mouse). The keyboard is a [Keychron
K2](https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard)
from Kickstarter. It was my entrance into the world of mechanical keyboards.

### Describe your software setup

**OS:** macOS Big Sur.

**Browser:** Chrome

**Email:** Gmail.

**Chat:** Slack, [Loom](https://www.loom.com/) for screencasts.

**IDE:** [VS Code](https://code.visualstudio.com/) in Gitpod (virtually
exclusively)

**Source control:** Git, of course! All hosted on GitHub.

### Describe your desk setup

{{< img-center
    src="/img/qa/gitpod-christian-weichel-desk.jpg"
    alt="The desk of Christian Weichel, Gitpod"
    width="100%"
>}}


[Inverwk standing desk](https://www.inwerk-bueromoebel.de/buerotische/hoehenverstellbare-schreibtische/hoehenverstellbarer-schreibtisch-masterlift2-sw-chrom-bm56947.html). What's nice about it is that it connects via Bluetooth
to my phone and laptop so every hour it tells me: ‘Hey, you might want to stand
up, press here.’ Then it will move to the preset stand up height. There is also
a switch that I can press to move it around and it will stop at the preset
heights. With other standing tables, I always disliked that I had to dial them
in every time. You stand up and you're like: ‘Is this right? Is it not?’ When
you sit down, same problem. This really helped me to use it more.

### When coding:

**Daytime or nighttime?** Daytime towards morning.

**Tea or coffee?** Tea in the morning. Coffee with milk in the afternoon,
without in the evening.

**Silence or music?** Usually music.

### What non-tech activities do you like to do?

I'm an avid long distance motorcyclist. Before Covid, I used to go around the
Balkans. I also enjoy woodworking. I have a little workshop where I can build
furniture which is fun.

### Find out more

[Gitpod](https://www.gitpod.io) allows you to describe your dev environments as
code and host them in the cloud. It was featured as an "Interesting Tool" in
the Console newsletter on 11 February 2021.

{{< section-subscribe >}}
