---
title: Interview with Scott Gerlach, StackHawk
who: Scott Gerlach
role: Co-founder & CSO
org: StackHawk
what: An application security testing tool built for developers.
tags: ['Security']
date: 2021-02-09T12:00:00Z
draft: false
summary: Interview with Scott Gerlach, Co-founder & CSO, StackHawk.
isSelected: interviews
topImg1Src: /img/interviews/stackhawk-scott-gerlach-profile.jpg
topImg2Src: /img/interviews/stackhawk-scott-gerlach-logo.png
ogImg: /img/interviews/stackhawk-scott-gerlach-desk.jpg
---

### What is StackHawk? Why did you build it?

There's a ton of problems with how Application Security (AppSec) is done today.
My background is in information security. Whether it was when I was working at
GoDaddy, Sendgrid, or Twilio, it's always been challenging to get the
engineering team involved at the right time i.e. before the app is in
production! There is often a mindset of “some other team will deal with it” or
“I don’t have time for this.”

The real value of AppSec tools is not the finding of things, it's the fixing of
things. The faster you can get from, "Oh, there's a problem," to, "I know how
to recreate this problem and I can fix it," the better.

So, we set out to just make a product that makes that easier. We took a really
complicated but very powerful open-source tool called [OWASP
ZAP](https://www.zaproxy.org/), and made it dead simple. And that’s
[StackHawk](https://www.stackhawk.com/), a Dynamic Application Security Testing
(DAST) tool which tests a running app from the outside in like an attacker
would.

The goal is that it's minimal effort to get the platform to do what it's
supposed to do. Scans are highly repeatable because you implement the
configuration as code using the practices of CI/CD so that build systems can
run it. Anyone that pulls the repo down has the same configuration and can get
the same results.

Our target audience is those people that actually can fix code. We try to give
them AppSec information as fast as possible so that they can fix code and move
on to the business of building features that customers value.

I think it's really important that it's near the developer side of it...
Because today, security is so heavily focused on testing the production
application. There's a lot of tools out there that are set up to look easy,
like give us a URL and we'll go scan it, but that's so much harder than you
think it is because you've probably got anti-automation technology in front of
your website that makes it hard to scan.

In that model you have to put security bugs into production to find them.
That's terrible. By the time you get it out to production and find that bug,
it’s probably a week or two past when a sprint got closed, and now you're
introducing all this rework: "I got to get back into the code I was working on
a month ago or two weeks ago or whatever, find the problem and then fix it and
then redeploy."

A lot of security tools out there are built for security people and you can see
it in how they're designed. They're like 1,000 buttons and switches all over
the place and they speak security person language. They don't speak developer
language, which is like, "Hey, we found your application doesn't have anti-CSRF
protections. In your framework, turn that on, and then use it. And then now
you're good." Right? That last part is the little bit that is missing out of
all these tools, and we're trying to make that better.

StackHawk presents all those findings in a way that makes sense so that a
developer could go in there and say, "Oh yeah, I see exactly what's happening
here. I know I can probably find it in code and then fix it, and get on with
the business of doing engineering work instead of playing ticket shuffling”.

{{< img-center
src="/img/interviews/stackhawk-scott-gerlach-product.png"
alt="StackHawk product screenshot"
width="100%"
caption="The StackHawk vulnerability scanning dashboard."
>}}

### What does a "day in the life" look like?

Oh man. Have you ever seen a picture of the biggest Swiss army knife ever? It's
got 900 tools in it for every job you could do. That's kind of the day in my
life!

I'm part of the product team as part of the founder core. Joni Klippert, our
CEO, and myself are splitting that product function today. I lead the
engineering team, I'm doing a lot of webinars and conferences and workshops and
all that stuff. And, I'm part of the go-to-market team so I'm doing customer
interviews and sales stuff. We just hired a great new head of sales, because
I'm not a sales guy, period. He's heading that function, but I'm still heavily
involved in it.

And then IT stuff, right? I get to do all the IT stuff like user account
provisioning and occasionally I get to work on security guy stuff, which is
working on our SOC 2 controls and some of those other things. But it's anything
and everything pretty much every day.

### What is the team structure around StackHawk?

We’ve just got the very first team outside the founders together - engineering,
UX and design. This is about putting together a world-class interface with the
technology that runs the actual scan. That team is four backend engineers and
three frontend engineers.

Our principal architect, KC Berg, is an awesome developer, and he and I are
pretty tightly coupled at the hip on how we make the technology transform into
solving customer solutions and roadmapping.

Then about three months ago we started hiring a customer success person and
somebody dedicated to marketing. That's a function that our COO is splitting
with accounting and HR and all that other good stuff. We're also working on
building out our sales organization. But we're still a pretty small team at the
moment.

### How did you first get into software development?

That's a long story. Let's see. I wouldn't consider myself a software
developer. I can definitely write code and make things work. I cannot write
elegant code, but simple is sometimes better! I've been in security for 19
years.

Originally I was actually delivering parts for an auto-dealership. I thought,
"This is not a good career." And so I went to school for computer-y stuff and
took to it like a fish in water. Then, I was working on a support desk at this
little solar company in Phoenix and did that for a while. It was good fun and I
got into networking and email and system administration and CRM, all that good
stuff, so I had my hands in a lot of things.

And right down the road was the office of a little company called GoDaddy, and
one day I said, "You know what? I want to focus on security stuff. And they're
hiring to do that," so that's where I went. Did that for 10 years.

Then I went to SendGrid to focus on security leadership. Did a couple of years
there. And then when I was all done at that job, Joni and I met. She was asking
me about shifting application security left and my experience from a security
leadership perspective. I just went on a rant about application security and
how terrible it is. Specifically, how hard it is to actually partner up with
developer organizations because of how bad the tools are and how we feed
information and all that stuff.

In fact, it was such a rant that I was like, "She's probably not coming back to
talk to me anymore," and then like two weeks later, she's like, "Hey, do you
want to start a company and solve this?" And I was like, "Ooh." I've been in
small companies, like SendGrid was small-ish, but I've never been in this small
of a company. So, thought about it a little bit, I was like, "You know what?
This is a passion of mine. I wish we could make this better for our development
partners, coworkers, teammates...let's set out to do that." I feel pretty lucky
that my rant triggered the right thing and I get to work with this awesome
team.

### What is the most interesting development challenge you've faced working on StackHawk?

You know what? I don't think there's a specific really hard technical
challenge. There's some feature-y bits or how things work that are interesting
and fun to tackle, but the biggest challenge that we're running into is
changing mindsets around who should own applications security, tooling,
triaging, and information. And when, and where, and how.

When we run into security teams, they talk about the old way of doing
application security, which is, "I need an agent and I need a huge scheduler
thing." I have been having this conversation, I ask, "How does your engineering
team deploy software today? Or how do they build software?" And they usually
go, "Well, we do it in CI/CD or in Jenkins or whatever." I say, "You can
integrate [StackHawk] there, which is the perfect place to integrate. Then
you're scanning when code is getting committed or PRs are being made or however
you develop software."

The trust model is another thing. Giving engineers the ability to go, "Hey, I'm
going to triage this issue and mark it as risk accepted or false positive, or
make a ticket out of it." And then having the security team trust that the
engineering team has the best intentions in mind and turning that security team
back into consultants and not approvers or gateways or gatekeepers. It's kind
of that mind shift.

I think the same thing happened with the DevOps evolution, where operations was
a little hesitant to get into configuration as code. And now we have Site
Reliability Engineering as a specialty. The same thing is probably going to
happen with application security teams. Again, the value is not in finding all
these issues. It's engaging with engineering teams to fix them in the right way
and help them think about risk.

### Do you relate to the DevSecOps movement?

I have mixed emotions about the term DevSecOps. I think it started as DevOps
happened, and security teams were like, "Hey, we want to play too, and also
we're going to be right in the middle. Look here, DevSecOps. See what we did?"
But they didn't change how they operated. Right? For a long time, they were
just like, "Yeah, we're just going to do the same things, but we want you to
include us. We want to be part of the party as well." And now I think you're
seeing security teams starting to shift the way they think about that and act
in a more DevOps-y kind of way.

Until we get to the point where everyone's on the same page that security is
part of dev and ops, that DevSecOps word still should live around so that
people are reassociating.

### What is the most interesting tech you are playing around with at the moment?

A couple of things:

Streaming stuff, as in having the ability to stream webcasts and do live
stream-y stuff. I'm working on that a lot. I watch a lot of video game
streaming, and I'm enamored by what they're doing. Not only for myself for the
purposes of how do I play the game better? But also, how are they setting all
of this stuff up?

I’m using [OBS](https://obsproject.com/). We're sponsoring
[ZAPCon](https://zapcon.io/), which is a user conference for ZAP users next
month. I think we're going to make heavy use of OBS on that and stream that via
Zoom webinar.

Then, a lot of home automation stuff. We’re a big Apple house here.
[HomeBridge](https://homebridge.io/) is actually pretty cool - getting your
non-iOS, non-Apple kit certified things to work in Apple kit. I have a pretty
large NAS setup here and I'm running it in a jail on a NAS. The HomeBridge
community is pretty responsive. When stuff breaks or a provider changes the API
out from under them, they're pretty quick on the ball. Like, "Oh yeah, they
changed it again. We've got to rework the plugin interface, and it'll be out
next week, or tomorrow, or whatever." It's pretty cool.

### Describe your hardware setup

Primary workstation is an iMac Intel Core i5 64GB RAM, with a Radeon RX 580
video card. Two 4K monitors. And this [sweet stand-y up mouse from
Anker](https://www.anker.com/products/variant/anker-24g-wireless-vertical-ergonomic-optical-mouse/A7852011).

And then clicky keyboards. Today I’m using my [Code
Keyboard](https://www.codekeyboards.com/), which has a custom StackHawk Escape
key and custom [MX Brown
switches](https://www.cherrymx.de/en/mx-original/mx-brown.html).

### Describe your software setup

**OS:** macOS Big Sur.

**Browser:** Chrome and Firefox.

**Email:** GMail. I can't use anything but the web version anymore. When I get
into a client, I always feel myself asking, "Why is this so hard?" I go right
back to the web version every time.

**Chat:** Slack, Discord.

**IDE:** [PyCharm](https://www.jetbrains.com/pycharm/) for Python, then
[Atom](https://atom.io/) for everything else.

**Source control:** Git.

### Describe your desk setup

{{< img-center
src="/img/interviews/stackhawk-scott-gerlach-desk.jpg"
alt="The desk of Scott Gerlach, StackHawk"
width="100%"
>}}

**Desk:** This is a very early version of the [Stand
Desk](https://www.standdesk.co/). In fact, I ordered the memory controller, and
it just does not work with this desk because it was such an early version.

**Chair:** [A chair with mesh on the back and the
bottom](https://www.staples.com/Staples-Kroy-Mesh-Task-Chair-Black/product_2260271),
but I pretty much stand all day.

**Webcam:** [Sony
A6400](https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-6400).
I use [this AV setup](https://www.youtube.com/watch?v=WedG8LKO6ks).

**Workspace:** Once upon a time, we had an office. We had just moved into a new
office space March 9th last year [2020]. So, we moved in all the desks...and
then we all went home. We'll probably get back to some kind of collaborative
space in the future, but work from home is working pretty well for us.
Everybody's missing that connected, face-to-face, in-person time, but I don't
think that has to do with work, it has to do with personal connection.

We do a pretty good job of trying to stay connected on Zoom and Slack. And
we've got a daily happy hour stand up, which started off as an actual happy
hour and has evolved into, "Let's just get together and chit chat, and if
somebody's got something to work, talk about, then we'll do that. Otherwise,
we'll just BS for a while and just be a team for a little bit." Specifically
every day at the end of the day, schedule that connected time.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Water!

**Silence of music?** Music. Preferably Foo Fighters

### What non-tech activities do you like to do?

So many things! Got an awesome family, a kiddo and a wife that are amazing and
super supportive, So, family time stuff. Avid golfer. I play guitar. Aquarium
keeper - I’ve got a little saltwater aquarium so I actually have some office
friends, which is always good. I brew beer. Some RC cars laying around here
because doing mechanical work is always fun.

### Find out more

[StackHawk](https://www.stackhawk.com) is an application security testing tool
built for developers. It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 11 Feb 2021. This interview was conducted
on 9 Feb 2021.
