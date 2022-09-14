---
title: Interview with Jacob Eiting, RevenueCat
who: Jacob Eiting
role: CEO
org: RevenueCat
what: Mobile subscription APIs.
tags: ["DevOps"]
date: 2022-09-07T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Jacob Eiting, CEO, RevenueCat
isPage: interviews
topImg1Src: /img/interviews/revenuecat-jacob-eiting-profile.jpg
topImg2Src: /img/favicons/www.revenuecat.com.png
ogImg: /img/interviews/revenuecat-jacob-eiting-desk.jpg
---

### What is RevenueCat? Why did you build it?

[RevenueCat](https://www.revenuecat.com/) is an SDK, an API, and a dashboard
that makes building a mobile subscription business easy. It helps you make more
money. 

We spent a bunch of years working at a company called Elevate, where we launched
a subscription app on iOS, Android and the Amazon Appstore. As engineers we'd
spent way too many hours messing with all of the intricacies of each individual
app store, trying to get that data to look the same on the backend to provide
our marketing and data teams with all the stuff they needed. It just felt like
the ROI wasn't really there for an individual engineering team to build all that
internal infrastructure.

If developers need to do this today, they have to work with each individual API
separately, reconcile all the data and deal with all that hassle. Google and
Apple aren't perfectly incentivized to make it easy to inter-operate, obviously.
And they have different philosophies in terms of what functionality they'll
provide in terms of things like how identifiable they let users be through their
APIs. They are the merchant of record in both cases, so it creates a different
sort of understanding as opposed to a Stripe API where the developer is the
merchant of record. Stripe lets you do whatever, it's really truly a purchasing
API. The app stores are a merchant of record API, so there's things missing that
you need.

I've learned that if you find something that should be easier, that's a good
source of ideas. When people asked me what I wanted to be when I grew up, it
wasn't somebody who makes in-app subscriptions easier, but when you find
something challenging and wrong with how engineers are doing things, sometimes
you just have to fix it. So my co-founder, Miguel, and I built it - we built the
software solution first and then the company around it. And that's been the
story with RevenueCat.

### What does a "day in the life" look like for you?

I don't code anymore, unless somebody's not looking! We're 60 people now and
sometimes I feel like the CEO job is a job about nothing. My day to day job is
to help developers make more money, I don't know what my actual job is! What
that ends up looking like in practice is a lot of email and Zoom calls. My rough
loop is to ask: what is the biggest bottleneck to the company? I make sure I
understand that and that the company is working on it. My focus is on what's the
biggest bottleneck to achieving our mission, which is usually the way the
company is structured.

If you align your mission and your growth, then that's kind of easy, because I
just think about the mission every day. Also a big thing I do is recruiting, so
making sure that I have the right people in the right places. We're building a
team that's as excited about the mission as Miguel and I are. Actually we're at
the point now where the team is more excited about the mission on some days, and
that helps buoy everybody along! So it becomes a self-fulfilling thing. 

The first two or three years were very technical. I worked on a lot of the SDKs
and the dashboard, and my co-founder did a lot of the backend. I was coding up
through the series A when we were about 20 people. 

I didn't stop coding soon enough. I just noticed my PRs were taking longer and
longer and I wasn't shipping things, so I became frustrated with programming.
Then at some point I just realized that I can't continue this. I can't get a
full day to ship anything, which is a bit sad. If I can get away with it, I'll
still sneak it in, if there's a script I can write or if there's a little hack I
can put together or something like this. The ideal is I get to work with an
engineer on a tiny little project and live vicariously through them. But that's
about the extent these days - it's mostly email.

### What is the team structure around RevenueCat?

It's about half engineering. We have several engineering teams that are focused
on different areas with some managers and a VP of Engineering - a pretty typical
engineering team structure all run by Miguel and our VP of Eng. On my side of
the company, we have a team that's special to us - our Developer Support
Engineering Team. This is eight people right now and they handle all of our
inbound support requests. They work on our documentation. It's a really
important team for us to learn what our customers are doing and where they're
having trouble, just helping them move forward so they can build their business.
Ideally we want to disappear into the background.

We have a marketing team and a sales team, plus operations - a lot smaller I
think than a SaaS company at our scale would typically have, just because that's
the beauty of developer tools. When you are selling to a developer, you don't
need a massive sales or marketing team. We're at the point now where we need to
augment those functions and actually get good at marketing and actually get good
at sales at scale. But typically you would not see the balance that we have,
which I'm happy for because our customers are mostly developers. I like to stay
with the company weighted towards that profile.

### How did you first get into software development?

TI-85s. I don't know if they still make kids buy these things, but in the '90s
and early 2000s, you had to buy these ridiculous $100 graphing calculators. At
the time it was probably a reasonable value for your money. Now I don't think it
should be $100 for a calculator, but they had a Basic function on them. So
you're sitting there in class and you're bored and you start playing around with
little programs. That kind of got me interested.

There was a bit of a shareware scene in school because you could transfer
programs between calculators. Then Visual Basic on Windows 3.1, which I think
also came with QBasic. I remember trading QBasic on floppy discs as a kid
between people, but that was very light exposure, and then some HTML around that
time as well. But I didn't really start until college. I landed a job with a
professor who asked me to do a socket server where the server was in LabVIEW, a
visual programming environment for industrial applications. It's really kind of
brutal. The server in C. I spent a year struggling on that, but it was a really
valuable year because I got to see how socket clients work. 

Then in 2008, when the iOS SDK came out. I was kind of primed. I had had an
iPhone since they came out and that was the beginning of my career. I just fell
down that rabbit hole as the market took off. I was able to get jobs easily and
even went to work at Apple for a while. I can read Swift fine and I can write it
at a basic level, but I'll never be as good at Swift as I was at Objective-C.
I'm now a fossil basically, locked in 2013. And I like to have facetious debates
about why Objective-C is by far the superior language. 

Also Python is my go-to on the backend. RevenueCat is interesting because on the
outside you say, "Oh, it's a mobile company. You must have tons of mobile
expertise and all this mobile." And we do, we have a lot of SDKs and stuff like
that. But the mobile side and the SDK is actually kind of a thin layer. It
collects the receipt, it dispatches it and it talks to our server. Most of our
codebase is the backend. Luckily I had experience, I wasn't purely an iOS
developer - I did a lot of backend work too.

### What is the most interesting development challenge you've faced working on RevenueCat?

This is a hard one to answer because there've been a lot of interesting micro
challenges, but most of them are around scaling. My whole career, I had written
iOS apps and basically if you understood the performance on an individual device
of your individual codebase, you were fine. It was a distributed system - you
could scale linearly with users, you would add a device for every user and you
had plenty of compute power. But with a backend service, especially one that
services mobile SDKs, the mobile fleet is the world's biggest botnet ever built!
We basically built an SDK that targets our servers, almost like a botnet, so
we've had a lot of really interesting challenges.

We're serving thousands and thousands of apps. And so we have to be able to soak
up huge spikes. We worked out a lot of these issues over the years, but push
notifications are just a thing nightmares are made of because an app would send
a push notification and then all 10 million of their devices would wake up and
ping our servers all at once. There's no way in the world we can be provisioned
for a hundred times normal traffic. So that took a lot of figuring out what we
could do on the client side to make sure that we were spreading that traffic
out, or not making those requests if we understood the context it was getting
called in. 

And then on the server side, it was a lot of caching and learning what to use
Postgres for and what not to use Postgres for. A line of code that was innocuous
in the first year suddenly brings the whole server down. And when you have the
kind of growth we've had in the last few years, that just would happen every
month. Between our second and fourth year, we had to transition from a very
barebones Flask app with a standard Postgres backend to a real multi-layer
service architecture with caching layers and all this stuff, that was really
painful. And then along that way, you're also building ops infrastructure,
deploys, paging, alerts, redundancy, and security. 

I think the most challenging for us, or me at least during this process, is
learning how to really scale the backend, because the experience is really rare.
A lot of engineers will either work at a company that's pre-product/market fit
and really small, or they'll join a company later when a lot of the scaling work
is already done. So there's a very few folks that have worked where you are
going from nothing to something and having to build, literally just barreling
down the tracks, laying rails as you go, hoping it doesn't fly off the end.
Thankfully we're in a much, much better place now.

### What is the most interesting tech you are playing around with at the moment?

I read people's docs! When Superbase was kind of picking up steam, I was really
curious about it. Did I make an API call? I don't think so, but I read all their
docs and was like, "Yes, I understand what this is." I watched some of their
developer advocacy videos, which probably doesn't get me the full effect, but I
just like to sample what's going on in the devtool space. 

If you look at where we were a decade ago or even five years ago, we're getting
so much more depth in every little niche and corner. It's really cool to see how
AWS and big data products like Snowflake and Redshift are changing the kind of
dev tools we can provide.

RevenueCat for example, we are both a realtime API that's powered by Postgres,
but then we also have a lot of data analytics and that's powered by Redshift or
Snowflake. We've been able to combine those two technologies and make a dev tool
that provides a full service across different types of data analysis. I'm always
on the lookout for what new things AWS is providing, or what other new tools are
coming out, that we could potentially leverage to provide new functionality.

### Describe your computer hardware setup

I have these two cheap Dell 1080p monitors, a double monitor stand, and a
MacBook Pro. I think it's four years old at this point, but that's all I need
because Chrome is fast enough. I have an Apple Magic Keyboard and Magic Mouse.

The one thing I invest in heavily is my podcasting setup. We do a podcast, so I
have a nice Audio Technica ATR mic that has a monitor built in. I use a DSLR
with an Elgato cam link to provide just really good crisp video, because one,
for the podcast, it's nice to have the production quality. And secondly, I use
it for company call presentations, recruiting meetings, etc. I think it does
kind of make an impression to show up with really high quality audio and video.

### Describe your computer software setup

**OS:** macOS.  

**Browser:** Chrome.

**Email:** Gmail with all the keyboard shortcuts.

**Chat:** Slack.

**IDE:** Sublime. If I'm developing for Android, I would typically use Android Studio.

**Source control:** Git & GitHub.

**BI & analytics:** [Looker](https://www.looker.com/)

### Describe your desk setup

There is a company in Portland I think, they make this standing desk that's
$500. When we still had an office in SF, I think I assembled 15 of these desks
myself. On seating, I've kind of gone back and forth - I've tried sitting on a
ball. I've tried sitting on a wobbly stool. Last year I just switched to this
company called Autonomous, it's essentially a Herman Miller style kind of
knockoff for half the price - that's done pretty well for me.

{{< img-center src="/img/interviews/revenuecat-jacob-eiting-desk.jpg" alt="The desk of Jacob Eiting, RevenueCat" width="100%" >}}

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** Two coffees a day and then tea to fill in between.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I moved from the Bay Area to the Midwest a couple years ago and gave up a lot of
things I did there, which was surfing and hiking and things, nature stuff. And
we have stuff here, but it's not as good. So I got into automotive. I built a
race car in the last two years - I converted a car from a street car into a race
car. I've been racing it in some local races which has been really fun. I’ve
also gotten into cycling recently. There are a lot of flat open roads here.

I can never-not make something nerdy. For example, my race car, not only did I
put the car together, but I really wanted live telemetry from the car. However,
it's a ‘94 Ford Tempo which is Pre-OBD II, the standard networking interface
that most modern cars have so that your mechanic can plug in and read stuff. So
I found a company that sells basically a USB RAM reader. With that I was able to
read and write any address in the engine computer, I was able to find a
decompiler for this old 8602 chip and then from there I was able to figure out
where the analog inputs and outputs were, and decode that. 

Then I connected a Raspberry Pi that reads the telemetry live, just directly off
the RAM and then puts it on a screen in the car so you can see engine
temperatures and all relevant stuff. It also logs it along with GPS and all that
information as well. Most recently, I added a GSM antenna so it uploads the
telemetry files to Dropbox. All of that was almost as much work as building the
car.

When you take the path that I took, which was to go from being an engineer to
being a CEO, there's lots of problems to solve, but none of them scratch that
purely solving a technical problem itch. So I try to find stuff in my spare time
that will let me scratch that itch a little bit. Honestly it helps me, it
refreshes me for the work I do here as well.

### Find out more

[RevenueCat](https://www.revenuecat.com/) is an API for mobile subscription
management. It was featured as an "interesting tool" in the [Console
newsletter](/) on 15 Sept 2022. This interview was conducted on 7 Sept 2022.
