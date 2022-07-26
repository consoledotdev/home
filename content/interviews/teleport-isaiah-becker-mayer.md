---
title: Interview with Isaiah Becker-Mayer, Teleport
who: Isaiah Becker-Mayer
role: Fullstack Engineer
org: Teleport
what: Open source access control plane.
tags: ["Security"]
date: 2022-07-11T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Isaiah Becker-Mayer, Fullstack Engineer, Teleport.
isPage: interviews
topImg1Src: /img/interviews/teleport-isaiah-becker-mayer-profile.jpg
topImg2Src: /img/favicons/goteleport.com.svg
ogImg: /img/interviews/teleport-isaiah-becker-mayer-desk.jpg
---

### What is Teleport and why did you build it?

I don't really claim to have built [Teleport](https://goteleport.com/) myself
(see [our interview with Teleport Founder & CEO, Ev
Kontsevoy](https://console.dev/interviews/teleport-ev-kontsevoy/)), but I've
definitely contributed to bits and pieces. Personally I work on the desktop
access team. Our focus  is on Teleport’s desktop access feature, which allows
users to securely access Windows desktops running in the cloud or in their
infrastructure. Via Teleport’s authentication mechanisms (the UX is really
similar to RDP) it's basically a Windows desktop that gets displayed in our
browser app.

We built this based on customer demand - if you just look at the number of
businesses globally who use Windows and need to manage access to remote Windows
desktops, it was a big opportunity for us.

Another feature we've been working on recently is [Teleport Passwordless
Access](https://goteleport.com/docs/access-controls/guides/passwordless/), which
is out with the latest release of Teleport 10. This allows authentication via
any of the mainstream bio-authentication mechanisms like TouchID, or Windows
Hello, or YubiKey Bio without needing any sort of username-password combo
whatsoever. A primary reason we built this feature is because it's better than
the status quo of username-passwords along both dimensions that really matter to
us - User Experience and security. If you think about the UX, you typically need
to save the password in some sort of vault and then enter it manually, versus
with one of these hardware devices you just touch your finger and boom! You're
in.

Even compared to regular, non-biometric YubiKeys, which can still be physically
stolen, these biometric authenticators provide better security - bad actors
would have to steal your physical hardware and then maybe do something extreme
to access the biometrics. It just adds this extra layer of security.

### What does a "day in the life" look like for you?

Teleport is fully remote, so I don't have to get into an office at any time. I
just wake up when I no longer feel tired - which is usually between eight and
nine - and then I grab some coffee. 

I live out in a suburb in Georgia, I have a couple of chickens here just to have
the full suburb experience. After coffee, I go feed them and change their water,
then get some hyper caffeinated engineering done in the morning, unless I get
sidetracked by Slack or GitHub notifications. 

I like to take a bit of a long lunch break, and maybe go to the gym in the
middle of the day, take advantage of the fully remote aspect and nobody
breathing down my neck telling me when to do my work. After the gym, I come home
and continue working. If I have more energy after dinner, I might keep on
getting some work done then, I am kind of a workaholic.

### What is the team structure around Teleport?

It used to just be two people in my team - me and my previous manager, until he
left the company, and then it was just me and my current manager, Zac. So a
vertical line structure. Now we've added more people, so now we're up to five -
Zac is the leader of our team, and he's also a director of engineering at the
company. 

Underneath Zac there’s no explicit structure, but we essentially organically
organize based on knowledge and interest. I'll lead a few subsections of the
feature, just because I’ve been the team longest and so naturally know more
about some of the technical details. 

Broadly speaking, my favorite thing about the team structure is that the
management is exceptionally skilled at software engineering. I recently took a
look just to see who were our top contributors for the Teleport's open source
GitHub repo, and numbers one, two, and three are like the CEO Ev, CTO Sasha, and
VP of engineering RJ. I never feel like I'm being managed by somebody who
couldn’t do my job.

### How did you first get into software development?

Initially, when I started college I was pursuing a physics degree, it wasn't
exactly software engineering, but we would have to learn some Python to analyze
data in our labs, that's how I started learning Python. On my own time during an
internship, I found this book recommended on the internet called Code: The
Hidden Language of Computer Hardware and Software, by Charles Petzold (I
actually saw that he just released a second edition, a month ago or something,
so I should probably get that).

That book is just a masterpiece - it takes you through building basic logic
gates with the hardware of telegram relays, as they were doing back in the day,
and then shows you with those logic gates how you can make memory, and then
string little memory bits together to make RAM, and then build an ALU, CPU, and
takes you all the way up conceptually to an operating system in detail, I just
got really hooked by that book. I was like, this is really cool and more
interesting than even the physics and math stuff that I was doing - I actually
didn't finish that degree, I dropped out and went to a coding boot camp, and
that's how I launched my software engineering career.

I knew that I was interested in hardware, and I had actually done an internship
as a physics undergrad where I was doing some digital design using VHDL, which
is essentially a hardware language.I chose the specific coding bootcamp I
attended because I knew I was interested in “how these things tick at the
bottom”, and it was the only one that I found at the time that was offering C.
So I started in C and then we did Python, and then on my own time I started
learning some JavaScript frameworks like React. For this job I learned Go in
order to complete the interview challenge. And most recently I've gotten to
learn Rust as well because our RDP client is written in Rust. 

### What is the most interesting development challenge you've faced working on Teleport?

For desktop access, we use RDP to communicate between the Teleport server and
the actual desktop itself. But  for our purposes, there's a lot of complexity in
RDP tied to its deep integration with Windows, like low-level assumptions of the
operating system that aren’t relevant to the platform we’re ultimately building
for, which is the browser. On top of that, RDP has a history of nasty security
vulnerabilities, and as a security company it's extremely important to us that
we don’t expose those on our system.. So we decided that instead of using RDP
between the browser, and Teleport, we should instead make our own fit-to-purpose
protocol, which we're calling Teleport Desktop Protocol, or TDP.

The most interesting challenge has basically been designing TDP in a way that's
sort of a simplified version of RDP that's not so deeply integrated with lots of
very Windows specific, low-level concepts. That translation layer between RDP
and TDP has been a really interesting development challenge, and one of the most
rewarding things that I've gotten to work on.

### What is the most interesting tech tool/product/thing are you playing around with at the moment?

On my own time, the most interesting thing I've been looking at is just playing
around with various client and server setups of Matrix messaging protocol. I run
my own server and have been messing around with some the bridges that they have
to other networks, so I can have my Signal chats, and my Matrix chats all my one
server, that's pretty cool. 

I like that I can run it myself, and basically actually own my own messages. I
think that's important, and hope to see the project succeed. If there's any
project that could either replace email, or at least be a kind of descendant of
email that people start using more in the future, I'd bet on Matrix. It seems to
have a lot of momentum, and some money behind it now, and some really good
engineers working on it. 

### Describe your computer hardware setup

I use the MacBook Pro 13-inch 2020 edition, my keyboard is a FILCO Majestouch
Ninja TKL with Cherry MX red keys and then I got this one big 32-inch Dell
monitor.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Brave.

**Email:** GMail.  

**Chat:** Slack.  

**IDE:** VSCode.

**Source control:** GitHub.

### Describe your desk setup

I got this super fancy Capisco ergonomic chair. It looks like a very
Scandinavian design. I got whatever the cheapest standing desk they had at
Costco and honestly, it works like a charm, it's only like $200. I think that
does more for my lower back than my insanely expensive Scandinavian design
chair.

{{< img-center src="/img/interviews/teleport-isaiah-becker-mayer-desk.JPG" alt="The desk of Isaiah Becker-Mayer, Teleport" width="100%" >}}

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** I like to listen to music sometimes, but without any
lyrics.

### What non-tech activities do you like to do?

I'm very into exercise, health, and working out. My main hobbies are going to
the gym, going to the sauna, running, hiking, and backpacking. I used to do more
multi-day backpacking trips back in college and stuff, but still get some hiking
in. Recently, I’ve been getting more into mountain biking, and a little bit of
road biking.

### Find out more

[Teleport](https://goteleport.com/) is an open source access control plane. It
was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 16 Dec 2021 and 28 Jul 2022. This interview
was conducted on 11 Jul 2022.
