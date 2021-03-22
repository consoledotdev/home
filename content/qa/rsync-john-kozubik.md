---
title: Q&A with John Kozubik, rsync.net
who: John Kozubik
role: CEO
org: rsync.net
what: cloud storage in the form of a UNIX filesystem available over SSH.
date: 2021-03-12T12:00:00Z
draft: false
summary: Q&A interview with John Kozubik, CEO, rsync.net.
isSelected: qa
topImg1Src: /img/qa/rsync-john-kozubik-profile.jpg
topImg2Src: /img/qa/rsync-john-kozubik-logo.png
ogImg: /img/qa/rsync-john-kozubik-desk.png
---

### What is rsync.net?

[rsync.net](https://rsync.net/) is a cloud storage provider focused on offsite
backup. I like to think of it as a safe-deposit box for data.

What makes rsync.net special is that there is no app or API - we simply give
you an empty UNIX filesystem accessible with any SSH tool.

### What problem does rsync.net solve?

Originally - in 2005 - the problem was simply "cloud storage" and the ability
to make offsite backups easy for people that didn't have their own colocation
or datacenter assets.

Now, of course, there are lots of cloud storage providers - the problem we
solve in 2021 is interfacing with cloud storage directly on the UNIX command
line using UNIX tools and practices.

Sometimes people just want to rsync or sftp a file somewhere without installing
new tools. At the same time, we now support a number of very exciting tools
(like [borg](https://www.borgbackup.org/), [restic](https://restic.net/),
[rclone](https://rclone.org/), [git-annex](https://git-annex.branchable.com/),
etc.) that add a lot of power to the UNIX command line environment.

rsync.net is not built on a cloud platform - we own (and have built) all of our
own platform. Our storage arrays, as we call them, are 2U "head units" with x16
2.5" drive slots and one or more SAS HBAs.

ZFS makes good use of fast cache storage so, after using up two drive slots for
our boot mirror (which is always a mix of two totally different SSDs) we have
room for up to 14 more SSDs for read (L2ARC) and write (SLOG) cache. ZFS is
also RAM hungry so we choose a motherboard that can support up to 2TB of RAM.

Attached to these head units, externally, are one or more JBOD chassis filled
with hard drives. JBOD stands for "just a bunch of disks" and they are
typically 4U chassis containing 45 or 60 drives that attach back to the head
unit with SAS cables.

rsync.net has no firewalls and no routers. In each location we connect to our
IP provider with a dumb, unmanaged switch.

This might seem odd, but consider:  if an rsync.net storage array is a FreeBSD
system running only OpenSSH, what would the firewall be ? It would be another
FreeBSD system with only port 22 open. That would introduce more failure modes,
fragility and complexity without gaining any security.

### What does a "day in the life" look like?

I start the day with a short walk outdoors. I don't want the first thing my
eyes see to be print, and I don't want the first thing my body does to be
sitting. So I walk a bit.

Then I sit down and read hackernews with some coffee.

I try to maintain an "Hedonic Fast" Monday through Wednesday so, on those days,
I am only looking for truly actionable headlines and comment threads that are
relevant to my businesses. On other days I read (and comment) for pleasure -
typically HN but also MetaFilter, Marginal Revolution, Crooked Timber, The
Believer, and the excellent London Review of Books.

I spend my work day in a terminal window and a browser window. The terminal
window is typically open to email which I read with
[Alpine](https://alpine.x10host.com/) and the browser window is open to our
home-grown CRM/management website. I do not typically handle technical support
but I do answer the "info" mailbox where pre-sales and other informational
requests end up.

I usually spend about two hours with these tools before lunch - checking Key
Performance Indicators (both corporate and computational) in our management
system and having email conversations with potential and existing customers.

At some point in the morning I will have a phonecall with my lead engineer,
Dave Boodman, and we'll have a very high bandwidth discussion about all aspects
of operations. Dave then delegates the results of these conversations to
everyone on our team at all of our locations.

Finally, if I am lucky and all of the housekeeping and firefighting can be
taken care of, I spend the afternoon working on longer term development
projects and strategic initiatives, etc.

### What is the team structure around rsync.net?

rsync.net has a handful of full-time employees - most notably myself, the CEO,
and my lead engineer who I have worked with, across three startups, since 1998.

In addition, we have contract employees that we regularly utilize in our
different datacenter locations as well as a handful of contract coders around
the world.

### How did you first get into software development?

I got started in software by copying BASIC programs from magazines onto my
commodore 64.

Although I have written software, sporadically, throughout my career my life's
work is as a systems designer or systems engineer. If we're not using fancy
titles I am really just a UNIX sysadmin.

I got started with UNIX in 1992 when my father loaded ESIX onto his 386 from 50
floppy disks. The next year I got a dial-up login to the umn.edu SunOS
system(s) and promptly got myself banned from irc.

At some point along the way I settled on FreeBSD as server OS of choice and
have built every one of my startups entirely on that platform - including
rsync.net which runs solely on FreeBSD.

### What is the most interesting development challenge you've faced working on rsync.net?

When rsync.net began, in 2001, we were using UFS2 filesystems on top of
hardware RAID arrays built from 80 and 120 GB hard drives. We ran this way
using RAID6 arrays on 3ware controllers for many years and it was a very simple
and elegant platform. In the past it has always pleased me, from the standpoint
of simplicity, that the RAID controller presents a single device to the OS and
the OS thinks it just has one big giant disk.

Problems began to arise as early as 2008, however, as we began to push the
boundaries of UFS2 - both in terms of filesystem size and number of inodes
(files). Not only did we start to see prohibitively long
[fsck](https://en.wikipedia.org/wiki/Fsck) times but we started to run out of
memory address space that fsck could track inodes with.

At some point in 2011, while working with Kirk McKusick, the author of UFS, I
wondered out loud what the real, long-term solution was to the problems we were
having as we pushed UFS2 well beyond its design ... and he simply said "use
[ZFS](https://en.wikipedia.org/wiki/ZFS)".

So we embarked on a two year testing and development project to stress test and
deploy ZFS which culminated in our first production ZFS systems in 2013. It
took another four years before we migrated the final UFS2 storage array to ZFS.

This was a relatively large undertaking for us and was, in essence, a complete
reworking of our cloud storage platform. It was well worth it as ZFS, as
McKusick predicted, solved all of our problems. Further, it enabled new
use-cases for us as the point-in-time snapshots that ZFS can create and
maintain are now a critical feature for our users.

### What is the most interesting tech you are playing around with at the moment?

As a hobby I have been slowly building my own personal phone company with
[Twilio](https://www.twilio.com/) as the back-end. I have nostalgia for
telephony and phone phreaking and it pleases me greatly to send SMS messages,
from my mobile number, from the command line (among other things).

In fact, I have a small suite of little shell scripts that do telephony tasks
and do almost all of my texting from the UNIX command line.

### Describe your computer hardware setup

I have a early-2009 "octo" Mac Pro that I bought new 12 years ago. Other than
adding a USB3 card it is in its original configuration and it feels smooth and
performant. Even when I load VMWare Fusion I don't notice that I am on an old
machine ...

I have four monitors attached to this workstation - three of which are on my
desktop in a familiar triple-monitor configuration and one of which is an NEC
P461 commercial display in the next room. You've seen these monitors - they are
used for arrival/departure boards in airports and they are "dumb" flat panels
that last forever. It pleases me to drag a window off the edge of my desktop
display and into the next room ...

### Describe your computer software setup

**OS:** macOS. I have no data stored, locally, on my workstation - everything
is on a server I keep at a datacenter so I initiate my work in the terminal by
port-knocking, logging in over SSH and attaching to my GNU screen session. When
I login, one of those Twilio scripts sends an SMS alert notifying me of that
fact.

I believe very strongly in the superiority of tiling / non-overlapping window
management and I accomplish this in macOS with
[Spectacle](https://www.spectacleapp.com/) although I believe that is no longer
maintained and there are better tools for that now.

I load a utility called "ykeys" that allows me to set custom hotkeys for volume
and pause/unpause, etc.

I dislike interacting with my iPhone on an import/export basis and I refuse to
use an mp3 player as my backup tool so I have purchased a license for
[Macroplant iExplorer](https://macroplant.com/iexplorer) which lets me browse
the iPhone like a filesystem.

Finally, I use Rich Somerfields
[TextBar](http://richsomerfield.com/apps/textbar/) app to put a few,
scriptable, pieces of information into my macOS menu bar. Specifically, I like
to see what wireless AP (SSID) I am connected to and what IP address I appear
to be browsing from. I have specific expectations about those two and I want to
see, immediately, if they are different than I expect them to be.

When I bought my current workstation, 12 years ago, I felt that it was indeed a
UNIX-like system. I do a lot of basic use and maintenance on the command line
of macOS using commands like 'airport' and 'drutil' and 'diskutil', etc.  I'm
also quite happy with [Homebrew](https://brew.sh/) for package management.

However, I can see the shell environment becoming more and more restricted as
macOS continues to lock down actions and disallows even root from controlling
things. I suspect I am going to need to go back to FreeBSD as a desktop
environment and that should be relatively easy for a workstation that does not
use wireless networking and never prints, etc.

It's going to be a lot harder to make that switch with my laptop ...

**Browser:** Firefox. I have exactly one extension: uBlock Origin.

**Email:** My email client is running on the remote system and I interact with
email using Alpine in the terminal. This is very interesting because it means
that when I send an email to another person at rsync.net, the email never
traverses any network - it is just a local copy operation because they, also,
use alpine.

**Chat:** I used to always (as in, for 25 years) have an IRC client running in
one of my screen windows but ... that platform, at least among my friends, has
died off.

**IDE:** Inasmuch as I have an IDE it is vim with some very minor tab/folding
customizations. I also use an interesting vi-related tool named
'[vimv](https://github.com/thameera/vimv)' which, if run in a directory, lets
you manipulate the filenames in that directory in 'vi' as if you were editing a
text file. If you have a number of hard-to-script files to rename, 'vimv' makes
it easy.

### Why connect remotely rather than having a local dev environment?

It's a workflow I've been using since 1999 when I put my own machine into a
datacenter for the first time.

A text only workflow doesn't suffer (much) from working over a WAN link and it
pleases me greatly to know that there is nothing of value on my laptop or
workstation - if they were lost or stolen it would be temporarily inconvenient
but not disastrous.

### Describe your desk setup

{{< img-center
src="/img/qa/rsync-john-kozubik-desk.png"
alt="The desk of John Kozubik, rsync.net"
width="100%"
>}}

I work at a standing desk that is a slab of old bowling alley. The desk is
height adjustable using Linak actuators but I very seldom lower it. If I don't
want to stand I will just lie on the couch with a laptop.

### When coding

**Daytime or nighttime?** In terms of motivation and aesthetic preference I
would *much rather* do actual development work late at night - perhaps 10pm to
2am. Historically, my best and most valuable work was done at that time.

However, I have three children and many responsibilities at home so that time
slot no longer exists for me. As mentioned above, if I have time for real
development it is in the afternoon after all of the housekeeping and
firefighting are over.

**Tea or coffee?** Coffee. We have such tremendous, wonderful coffee in the bay
area and I appreciate every bit of it. I especially like Equator Coffee which
is based here in Marin County.

**Silence or music?** It depends. If I need to concentrate and think through
complex issues I prefer silence. If I am doing housekeeping activities or
mindless, rote work, I like to listen to music. I find the soundtrack and film
scoring that Trent Reznor has done in recent years (Social Network, Girl with
Dragon Tattoo, Watchmen) to be very good.

### What non-tech activities do you like to do?

I am a BJJ player and have been doing that on and off for 20 years. I also have
a Kung Fu / Tai Chi practice and do a lot of running and biking here in Marin
County where I live. I'm also a volunteer firefighter/medic with my small town
fire department.

### Find out more

[rsync.net](https://rsync.net) is cloud storage in the form of a UNIX
filesystem available over SSH. It was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 28 Jan 2021.  This interview was
conducted on 12 Mar 2021.
