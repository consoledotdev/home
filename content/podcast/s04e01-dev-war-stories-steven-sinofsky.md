---
title: Dev War Stories
who: Steven Sinofsky
whoLink: https://twitter.com/stevesi
what:
  We discuss what it was like shipping code at Microsoft in the early days, what 
  he learned from Bill Gates, how it applies to software development today, 
  what the big Windows 8 rewrite was like, and why the Copilot AI naysayers are 
  completely wrong.
season: 4
episode: 1
date: 2023-04-26T06:00:00Z
duration: 40:07
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/a14a7a17-1fbb-40ec-ae98-fb5f3640068c/audio/f04107c5-d8bd-4f3f-a855-8efdc11ef03b/default_tc.mp3
draft: false
summary:
  Dev War Stories - a devtools discussion with Steven Sinofsky. Episode 1
  (Season 4) of the Console DevTools Podcast.
metaDescription:
  Dev War Stories - a devtools discussion with Steven Sinofsky. Episode 1
  (Season 4) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/steven-sinofsky.jpeg
topImg2Src: /img/favicons/blank-image.svg
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/a14a7a17-1fbb-40ec-ae98-fb5f3640068c
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

In this episode, we speak with [Steven Sinofsky](https://twitter.com/stevesi),
currently a board partner at [Andreessen Horowitz](https://a16z.com/) and
previously of [Microsoft](https://www.microsoft.com/). We discuss what it was
like shipping code at Microsoft in the early days, what he learned from Bill
Gates, how it applies to software development today, what the big Windows 8
rewrite was like, and why the Copilot AI naysayers are completely wrong.
Although the software landscape has changed dramatically since Steven’s early
days at Microsoft in the 80s, he shares some of the lessons he learned along the
way which are still as relevant today as they were back then. 

Things mentioned:

* [Microsoft](https://www.microsoft.com/)
* [Windows 8](https://www.microsoft.com/en-us/software-download/windows8)
* [Copilot](https://github.com/features/copilot) 
* [Cornell University](https://www.cornell.edu/)
* [IBM](https://www.ibm.com/us-en/)
* [_Halt and Catch Fire_](https://www.imdb.com/title/tt2543312/)
* [Apple](https://www.apple.com/)
* [Jon DeVaan](https://www.linkedin.com/in/jon-devaan-5a9544185/)
* [Webflow](https://webflow.com/)
* [_Mythical Man-Month, The: Essays on Software Engineering_](https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959)
* [Bill Gates](https://www.linkedin.com/in/williamhgates/)
* **“A Hard Line on Software” (Video)**
* [Jensen Harris](https://jensenharris.com/)
* [_Hardcore Software_](https://hardcoresoftware.learningbyshipping.com/)
* [ChatGPT](https://chat.openai.com/)
* [Bing](https://www.bing.com/)
* [ChatGPT on 60 Minutes](https://www.youtube.com/watch?v=kloNp7AAz0U)
* [M2 Mac Mini](https://www.apple.com/mac-mini/)
* [MacBook Air](https://www.apple.com/macbook-air/)
* [_One Strategy: Organization, Planning, and Decision Making_](https://www.amazon.com/One-Strategy-Organization-Planning-Decision/dp/0470560452)
* [Substack](https://substack.com/)

{{< rich-title-5 icon="future-head" >}}About Steven Sinofsky{{</ rich-title-5 >}}

[Steven Sinofsky](https://twitter.com/stevesi) is an investor, a board partner at
Andreessen Horowitz, a general advisor, and a self-described “person-about-town”
in Silicon Valley. Shortly after he graduated from Cornell University, he became
a software design engineer at Microsoft back in 1989. In his time at the
company, he oversaw six major releases of the full range of Office apps and
servers in his role as a senior executive. He also worked on Windows 7 and the
Windows 8 rewrite as the president of the Windows division. He is a co-author of
the book _[One
Strategy](https://www.amazon.com/One-Strategy-Organization-Planning-Decision/dp/0470560452):
Organization, Planning, and Decision Making_, as well as the writer of
_[Hardcore Software](https://hardcoresoftware.learningbyshipping.com/)_, a
Substack newsletter about the rise and fall of the PC revolution.

### Highlights

{{< podcast-episode/clipping time="22:37" >}}

**Steven Sinofsky:** Bill was super interesting. He was, in a sense, this very interesting combination of business strategy, product strategy, and technology strategy. And whenever he would really push it, he was most comfortable trying to be a technology strategist. And to him, that was all about architecture. And so architecture, if you read a book like Fred Brooks, _Mythical Man-Month_, architecture is everything. Architecture in software is like this Nirvana.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="28:43" >}}

**Steven Sinofsky:** And the beauty of how Apple managed their operating system was they just didn't add a lot of features. But we had a team five times as big, adding features every release, and it was just not getting— My measure of success is not “Did we get the release done?” but “Was it making people do new things with the product?” And Windows had long stopped doing that. The ecosystem of software and hardware had probably died around 2000. And so when it came time to do Windows 8 — and obviously _Hardcore Software_ has the whole timeline and all this stuff — but the thing we really wanted to do was take the product and build on it and all the things that were great about it, but bring it into a new era of computing from top to bottom or what we said was “from the chipset to the experience".

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton \[0:00:05\]:** Welcome back to season 4 of the Console DevTools Podcast. I'm David Mytton, CEO of Console.dev, a free weekly email digest of the best tools and beta releases for experienced developers.

I'm excited to welcome back Jean Yang who will be co-hosting this season with me.

**Jean Yang \[0:00:21\]:** Great to be back. I'm Jean, CEO of Akita Software, the fastest and easiest way to understand your APIs. Excited for this season.

**David Mytton \[0:00:31\]:** In this episode, Jean and I speak with Steven Sinofsky, currently board partner at Andreessen Horowitz and previously of Microsoft. We discuss what it was like shipping code at Microsoft in the early days, what he learned from Bill Gates and how it applies to software development today, what the big Windows 8 rewrite was like, and why the Copilot AI naysayers are completely wrong. We're keeping this to 30 minutes. So let's get started.

We're here with Steven Sinofsky. Let's start with a brief background. Tell us a little bit about what you're currently doing and how you got here?

**Steven Sinofsky** **\[0:01:06\]:** Sure. Well, right now I am an investor, a board partner at Andreessen Horowitz, and general advisor and person-about-town at Silicon Valley, just engaging with the community which is what I really wanted to do when I started this 10 years ago.

**Jean Yang \[0:01:23\]:** Cool. So, Steven, let's start from the beginning. You started at Microsoft just after leaving school and I'm sure a lot of things looked different then, so I'd love to hear a little bit about the software landscape at the time, what other things would have been your options, and how this all set you down this path you're on now?

**Steven Sinofsky** **\[0:01:43\]:** Sure. Well, I went to college and I was a computer science and chemistry major because my mom really wanted me to go to medical school, so that didn't really pan out. And then I went to graduate school in computer science.

So I'm going to talk about a lot of old stuff because that's what you asked me for, but I really do think that many of the lessons and experiences are actually apply in particular right now because of the transitions in architecture that are happening with API's and in the, in a sense, the platform transition that I think we're seeing with artificial intelligence. And, to me, it has a lot of that feel. And having gone through that three different times in my own career with the PC, then with Windows, and then with the Internet, I feel like I'm ready for this.

So the software world in 1987 when I graduated college, or 19— was hard to really get a picture of. First, everything in software happened in the basement. It was not above ground. You had to go to use a computer. It was a physical thing, which in college at Cornell meant climbing up this 30-degree slope when it was 30 below zero in 30 inches of snow to get to a computer, and then that's where you used one. And it was connected over high-speed 9600-volt lines to a giant mainframe at the airport. Literally, when you landed into the airport — which really was just a building with one airstrip — you could see the computer building. So there was the computer I used, Cornell B, and then you could see it and then it was two miles to campus over this dedicated line underground.

But an amazing thing happened over the holiday of 1983/4 which was we got introduced to Macintosh and that has really changed the landscape of computing. Now for me, personally, I've been doing microcomputers since high school, you know Atari and Apple and TRS-80, and this whole world— I even brought a computer to college with me, which was this 28-pound luggable computer called an Osborne and it was, literally, it was the size of a carry on suitcase. And it weighed 28 pounds and had a 5-inch screen that showed 80 characters by 25 lines. In fact, it didn't actually show 80 characters it only showed 64 characters and you have to hold the Ctrl key and the arrows to see the rest of the paper you were writing.

**David Mytton \[0:04:16\]:** That's like the size of a terminal today, right?

**Steven Sinofsky** **\[0:04:19\]:** Literally, if you were to take that screen and put it on an iPhone, it would be about a quarter of the size of one icon in resolution. And so I brought it to college and I had to get permission to use a word processor to write my papers in freshman English. You know, I had to bring my own printer, which was actually a typewriter connected by a parallel port to this computer. And so when I would finish my paper at four o'clock in the morning, I started printing, which sounded like a person typing at 500 words a minute, and it would wake the whole dorm up and people would get pissed off at me and they're like— And I’m like, “Well, I finished! It's a paper! It's college! You finish at 4 am. That's sort of how it works.”

But in all seriousness, everything about computing in the late 80s was about constraints. You had basically 64k, you had no memory, no disk drives, the operating system wasn't protected so you're basically running on a raw naked CPU, and so if your program crashed, you had to power cycle the computer. And that was how it worked. And you had no tools either. And so that was in the world of programming language research, I was 'super lucky’ to land it the first year that Cornell was using this thing called the Cornell Program Synthesizer.

It was actually the first graphical programming environment. It was pretty much like what people at the time saw as Turbo Pascal. It ran on these microcomputers called \[05:54 “taracks” \_Inaudible\_\] that had eight-inch floppies. And so I did my first programming assignments for college on either that or the mainframe, but that programming environment was super innovative at the time. It did like syntax correction, it did compile-edit to bug cycles where you could set a breakpoint, keep running, you could inspect variable— all these things that you just couldn't do. Debugging on a mainframe was basically print statements and assembly language, which was mostly what I did.

That was actually three or four years after the IBM PC had come out but nobody was really using those on college campuses. There was an explosion happening. So put a number on it, there were probably about 30 million computers in the world at that time, microcomputers, like the whole world which today is like a few hours of iPhone sales.

Fast forward a little bit, I was interviewing for jobs after graduate school — because I basically bailed on graduate school. It felt not practical. A whole lesson there.  — But what people did back then was, well, first, you obviously interviewed at IBM. If anybody’s seen _Halt and Catch Fire,_ that was IBM. IBM was larger than any country. It was like Kurt Vonnegut's RAMJAC Corporation, it was omnipresent, and you interviewed with them and your blue suit, they showed up, five of them with their blue suits, and that was what a lot of people aspired to.

The cool kids all wanted to work at Apple, but they were so upside down and weird then that literally no one ever heard back after sending your resume to Apple. We all had this little postcard they’d send, “Thank you, your resume is on file.” I actually posted it on _Hardcore Software_. That's what we all got back from Apple. They never seemed to hire. It turns out in hindsight, I better understand it, which was Steve didn't really hire college students. So he had like these experienced people that he'd been working with already from Apple from earlier days. And they were already well known. And this was an interesting thing. They just weren’t interested in student college hires back then.

Otherwise, it was very weird to find a job as a computer person. Because I was a chemistry major, I actually interviewed with chemistry companies like DuPont, and they looked at me like, “Well, if you have a PhD in chemistry?" I'm like, "No, I have a master's degree in computer science." “So you want to work in the IT group?” And that was how the conversations would go.

And then there was a small— The microcomputer startup scene was really beginning to happen in Silicon Valley. And it was really driven by Macintosh. The PC had a lot of companies and you could read about them in _Halt and Catch Fire_ or see them in that, but Macintosh just exploded because of the richness of building for the graphical interface and the work Steve Jobs did on campuses and all sorts of stuff. So that was what the world was like.

So there wasn't Windows yet. I mean it had shipped two versions as a product that almost no one bought. There was Excel for Windows. But when you bought it, you actually got Windows with it, since nobody had Windows. And the real product for Microsoft was DOS. And it had applications for DOS, like a word processor and project management, and a spreadsheet. They were all number two, three, or four in their categories. There were these colossal software companies that were dominant; Lotus built a spreadsheet and they were a billion-dollar company. Borland International, which actually, down by Scotts Valley, did programming languages and tools and they were a $500 million company, and Ashton-Tate did dBase and WordPerfect did the word processor and that was another billion-dollar company. So Microsoft was a huge force and Bill Gates was a huge force that nobody outside of computing knew of.

When I’d go back home, people would ask me where do I work. And I would say, “I work in computer software". Nobody knew what that was. And then I’d tell them where— They asked me where I worked, and I’d say, “In Seattle, Washington”, and they're like, “So, like, on a farm?” And that was what my life was like going back to the East Coast. And so I had to explain what software was and my uncle didn't even know who Bill Gates was and he worked on Wall Street for his whole life, for 50 years. So that's what it was like.

And the company was about 3000 people when I joined, which is pretty darn big, but it took a lot of people to do a bunch of random stuff that you don't think of now, like Microsoft had an assembly plant, just north of the company where they put the software in boxes and they copied the floppies and printed the manuals and assembled. And so we had a factory. And we had a book publisher down the street.

**David Mytton \[0:10:53\]:** Amazing. So what was it actually like writing the software, how did that actually work? Did you ever go to the factory and right at the end do the actual shipping?

**Steven Sinofsky** **\[0:11:02\]:** Oh, yeah, actually, that was a ceremony. At the end of a product when you finished, you signed off on the floppies and then you drove them over to the factory, and they would duplicate them and put them all in boxes. So it was actually a big deal, at the end of the product cycle, the whole team would go over and watch the first copies of your product come online.

If you actually Google for ‘Windows 95 B-roll’ that's ‘B-dash-R-O-L-L’ that's like the video that the company releases to the media to use, like a public domain media. You can see that's like the video of the era is like boxes rolling off an assembly line. And we all collected them, I have a bunch of boxes behind me. But that was what you collected on your shelf in your office, in your own private office, which is hardcore software. Like that’s the ad from when I applied for a job.

The actual writing of the software— So the way I describe it, it's going to sound unbelievably primitive, but yet it was unbelievably advanced relative to mainframes. Mainframes were this arduous process of submitting jobs, having it compile, finding errors. I had lived through the punch card error my freshman year, and it's just ridiculous that any work ever got done in my view. And then along come PCs and you're just compile, edit, debug, compile, edit, debug, and it was magical! You were only gated by the fact that the PCs had no memory and so you were constantly designing software to squeeze itself into this finite amount of memory. So you had all sorts of tricks that you would learn about.

You would take a data structure, the natural word length for the machine was 16 bits, and you wouldn't just like throw bits around that were 16 bits. You'd like, “Well, let’s just use the first four bits to do this and then have a bit that says what the next four bits do and you were constantly fighting all of that kind of stuff. In fact, all of the applications at the time— So before Windows 3.0, Microsoft, half the company made its money by selling Mac Excel and Mac word, and then the other half made his money selling DOS. And so I was hired into the Mac side of the company, which was like what most people did. Yeah, there's a whole circle-of-life thing happening right now. But what was amazing was just how much you were fighting the machine the whole time. You were just so disciplined about everything you did.

My first product that I shipped, every day, we would do a new build of the product, our version of continuous engineering, and I was measuring the bytes of code that we released, and the amount of memory it took to do “Hello, World!” 19,342. Literally, that's how many bytes. And it would be like DEFCON four red alert if it went to 19,800 overnight. We all “What happened? Where did those four bytes go?”

And the masters of the company at the time were the people who organically could build programs that did this. The guy who invented the calculation engine for Excel was like a savant at these kinds of data structures that were forced into using it. This guy I worked with for many, many years, who was an original Excel developer, and then came over to work on tools, he spent his whole career basically building memory managers, debuggable memory managers because we've got to manually free and allocate memory. And half the bugs would be from allocating something too big and crashing or freeing something that was already free or freeing something twice and all that kind of stuff.

And so, the real thing about the about software was it was a craft. It was like when you see these Instagram or Tiktok videos of people building furniture by hand. That's basically what programming was like. And the thing about a craft is, today you still have to know what's going on to build great software. And it's very easy to tell the great programmers from the okay programmers because of that difference in knowing what you're really doing.

I lived through the switch from assembly language to high-level languages like C. And most people— Which today most people think of C mapping one-to-one, like they’re the same, like C is assembly language. But to us, at the time, C was like a bloated fat language and real programmers used assembly.

And so it was this very weird transition where people thought just by nature of using C your programs were going to be big and fat. And it turns out there was a real lesson there because this database company Ashton-Tate had rewritten its assembly language database into C, and it bankrupt the company. It never recovered from taking up too much memory and being too slow, compared to the one that ran in assembly language. And so this notion of 'hardcore software’ was about that kind of engineering discipline and that craft.

**Jean Yang \[0:16:17\]:** Yeah, that's so interesting, Steven, because I remember when I was in college, we were following the rewrites from C to Java and it seems like Sun was doing it, I think IBM was doing it, and it was really interesting to follow. And then now, the rewrites are often back to things that have more control, like for us.

**Steven Sinofsky** **\[0:16:36\]:** The C to Java one is super interesting. I actually— I don't want to refer— This isn't an ad for _Hardcore Software_, but I told the story. So I was in Office, I was running a bunch of Office, and my boss was running the rest of it. And my boss was Jon DeVaan, who was one of the original hardcore software people in apps. He worked on the first Excel, he was on MultiPlan, which was the predecessor to Excel, and he was an engineer’s engineer. He actually had worked on what we used to call p-code, which was our interpreted C. So we did a C that compiled into this p-code in order to save space because p-code was more compact than assembly language.

So we would write our programs in C, compile them into p-code, and it also got us processor portability, which in the early 80s was very important. I, in graduate school, had studied Smalltalk and garbage collection and all this other stuff. And so we're working together. And then this Java thing comes out and we just couldn't stop rolling on the floor laughing. We're like, “Okay, let me get this straight, there is an interpreter and a p-code that is garbage collected?”

And we had both basically spent the past two or three years getting apps— Once we had Windows with protected memory and virtual memory stuff, we all stopped using these things because they no longer were appropriate. In fact, they were slow. So we thought it was incredible that the whole industry was like, “This is going to be the best.” And we're like, “So it's basically the same language, it's an imperative C-like programming language or C++. It's like a constant factor difference between any other language, yet it has the overhead of garbage collection and an interpreter?” It was the dumbest thing we could have imagined. And then we thought about it and we were like, “God, it sounds dumb!” Then we thought about it more and then we realized it was even dumber than that. It was just so dumb! Because then it also promised to be cross-platform at the user-interface level.

Surprise! John had spent the first few years of Excel up through Excel 4, being portable across Mac and Windows. And then after Excel 5, they’re like, “This doesn't work!” You can't be portable at the graphical interface level. It fails! Of course, today, every founder learns this when they do their iOS and Android app. And they eventually go, “Okay, this cross-platform is not working. And the same with this electron nonsense on the desktop kind of stuff. Because it works once for one app with no real interface, visual code, it should work everywhere and it just doesn't. And so all those lessons with the Java thing that's like a triggering moment for me.

**Jean Yang \[0:19:17\]:** So, Steven, following up on that, I think there's a really interesting revolution going on right now in DevTools where it's all about being easier and more accessible, being less hardcore. And so I'm super curious to hear about how some of your lessons from the hardcore days apply, which ones don't, how has your relationship with DevTools evolved over these eras?

**Steven Sinofsky** **\[0:19:42\]:** So it's really easy to swing to polarizing ends on this debate, like “Oh, no code, it should be easy!” And I just had to deal with a building contractor because of the rains and the flood and stuff. And he shows up and I had like my whole display of lime green RYOBI tools. I'm very proud of these tools. I know that they are consumer-grade tools, but they're cheaper and I have a whole set of them. And so, I have them all and I'm showing him what I did to stop the flood, bla, bla, bla, and he's just rolling his eyes at me. And then he whips out his Makita, DeWalt, something-or-other, that are twice as much as tries to explain to me how contracting works. And I'm all insulted and sheepish and I want to go buy whole new tools now because I feel bad. But the thing is, there's a time and a place for lime green RYOBI tools, and then there's a time and a place for a professional. And software's like that too. Like a huge amount of software is not going to last 20 years, is not that performance is critical, and just needs to get done. Use whatever tool works for that.

When I was working on C++, one of the hardest things I did was visit with IT professionals building a line of business software who wanted to use C++. I'm like, “We have this other product called ‘Visual Basic’. It's easier, it's faster, it's better for debugging. You'll get done sooner. It has much richer connectivity to—”, all this other stuff, but they wanted those DeWalt tools. They wanted to be real and be professionals. And so the thing is, is that you really do need to use the right tool for the job.

In fact, even the cloud, to many people has that same feel. Real people have their own data centers. Well, no, that's just idiotic! And, yes, if you're a $10 billion company, and you're never going to build a new app, and you're going to only optimize the app you have, sure, build an optimal data center for that. But I guarantee you the first time you need agility in that, you're going to get crushed! And also, by the way, it's going to take you hundreds of millions of dollars a year in staff and hardware and automatization and taxes and all this other stuff. And the tooling is very much like that.

I love all the website builders, I use Webflow and I think it's great. My little website for cameras, I do not need to optimize it, I don't need multiple data centers, I don't need anything, I just needed to be done. But if you're building software that people are paying you for the software, well, get out the DeWalt tools. Build a little product because that's how people transact with you.

**David Mytton \[0:22:26\]:** What would you say the lessons are from working with some of the, I suppose the well-known figures from Microsoft in the early days? But then as the company changed over time, what were the lessons that developers should follow today?

**Steven Sinofsky** **\[0:22:37\]:** Bill was super interesting. He was, in a sense, this very interesting combination of business strategy, product strategy, and technology strategy. And whenever he would really push it, he was most comfortable trying to be a technology strategist. And to him, that was all about architecture. And so architecture, if you read a book like Fred Brooks, _Mythical Man-Month_, architecture is everything. Architecture in software is like this Nirvana where you have layers and it's like the networking OSI diagram and it's like A talks to B in this very smooth, connected API layer, you have consumers and providers, and all sorts of boards.

Bill loved architecture and there's a business reason why it was so important to him which was from the very, very beginning of Microsoft, the company was a product line. I posted once a very early early video, “A hard line on software”, Bill was really \[23:38 Inaudible\] at Microsoft, but all the verbiage was always hard, and make up whatever Freudian weirdness you want about that, but this video was really interesting because it's Bill, in his squeaky 20-year-old voice saying, “We have products in everything. We have databases, languages, and systems.” And you're like, “I don't even know what those words mean, in any sense,” but that was the industry back then. And the interesting thing was, companies only did one. And here was this 20-year-old, just from the get-go in 1981, “We're doing all of them.” And so, when you do all of the products, you don't want to be a holding company, you want to be a single company with a unified strategy.

Now that has its pros and cons. As an example, Digital Equipment Corporation or DEC had a brilliant strategy, especially \[24:27 \_Inaudible\_\] from a PL perspective. They had this amazing runtime, which connected to a huge suite of debuggers and source control systems and you could just plug in any language on top of that. It was unbelievable engineering! Unfortunately, they went out of business because it was all pointed in the wrong direction towards many computers. But Bill really believed in having everything related architecturally.

And I talk about many of these debates. For example, he was obsessed with having one place that you typed, but an edit control, a text control, an input control for all of Microsoft. And it was just absurd! We were constantly chasing this edit control dream. In his mind, Microsoft Word should just be that same edit control with, Page Preview and footnotes or something. And so it was constantly about architecture. And so whatever group would show up — and this is like when I worked for him as his technical assistant — whatever group would show up, the questions were never about, “Can you do this? Or can you do that?” in terms of features from an end user, or “What was your price going to be?” or whatever. It was always going to be, “Well, how does your product reuse code from this other one or relate to this other one?

And whenever I talk to founders as they're going into their next line of business, the question is always, “Do you intend for these things to be related or not?” And it's very interesting to me how they're always hesitant to commit. I just think that's deaf. Like you either say, “I'm a holding company”, or you say, “We're building a product line”. Otherwise, the team is never going to know what to do, and worse, you're going to be confusing because some days you'll emphasize the togetherness, and other days you'll tell them, “Go, go, go, just get done!” You can't really be confusing. So Bill was absolutely consistent about teams working together. It was just a reaction that, “Well, we have to shift”, and so teams would choose to not, and deal with the flame thrower as a result.

**Jean Yang \[0:26:35\]:** Yeah, I love that because it seems like today, founders do not have to be as disciplined about code reuse or building things in a deliberate way because it's so much easier to build. But if you're going to have technology be remote or, it seems like the lesson is, if you're going to take over everything, you better reuse stuff, and that's a really good lesson.

**Steven Sinofsky** **\[0:26:57\]:** I go back and forth on this because I think programming really hasn't changed from the Golden Rule, which is the first 90% takes 10% of the time and the last 10% takes 90% of the time. I think what we're so used to in Silicon Valley is just the first 90%.

**Jean Yang \[0:27:14\]:** I also feel that as my startup and I have spent a lot of time cleaning up the long tail. But on the subject of building on top of old software, I want to talk about the Windows 8 software rewrite. So I don't know if you know this, Steven, I don't know if you've ever talked about it, but I was working at Microsoft at an OS-related group when you were leading that rewrite. And that was quite the thing. It was a feat of software, it was a feat of software evolution, and it also seems like there were many architecture decisions that were revisited. I'd love to run through the highlights on that.

**Steven Sinofsky** **\[0:27:49\]:** Sure. Well, of course you could sum up all Windows 8 as “Sinofsky killed the start menu”. And everybody would know what you would say, which goes everybody knows I didn’t, it was this guy, Jensen Harris, who purposely did it. But that's a joke. I'm responsible. I'm not trying to— Although it is Jensen’s fault, technically. But Jensen's a great friend. We talk about this literally once a week.

But the thing about Windows was it had reached a point after Windows 7, — and I write this fairly candidly in _Hardcore Software_ — We were like, “Okay, there's just not a lot left to do.” It was becoming like the Winchester house. “Let’s add a new room. And let's add another room. How about a gift-wrapping room? How about a room to prepare the gift wrap to be brought into the gift-wrapping room? Okay, how about a room to put the gifts after you wrap them? Let's go do the post-wrap room.” And it was just becoming ridiculous.

And the beauty of how Apple managed their operating system was they just didn't add a lot of features. But we had a team five times as big, adding features every release, and it was just not getting— My measure of success is not “Did we get the release done?” but “Was it making people do new things with the product?” And Windows had long stopped doing that. The ecosystem of software and hardware had probably died around 2000.

And so when it came time to do Windows 8 — and obviously _Hardcore Software_ has the whole timeline and all this stuff — but the thing we really wanted to do was take the product and build on it and all the things that were great about it, but bring it into a new era of computing from top to bottom or what we said was “from the chipset to the experience”.

And so the first order was just like “Okay, well, we had a great partnership with Intel from like 1981 on, let's go work with these ARM processors. And everything we've done on Windows was constantly chasing two things; battery life and fan noise. And so if we could just get longer battery life and less fan noise, we would have had a huge change in what you could do with computing. And poof! Here come phones that have processors that are just as fast as PC processors but with no fans and no noise that get all-day battery life. So we wanted all of those added. And then there's a whole thing about security.

**Jean Yang \[0:30:17\]:** Yeah, that was a crazy, crazy re-architecture and it seems like it goes back to the lesson of, “If you want to build more products in your product line, you have to get the architecture right.”

**Steven Sinofsky** **\[0:30:29\]:** Even today, Windows runs on ARM, but because they fell back to the old architecture, you don't get the battery life improvements, you don't get the security improvements, and you don't even get the performance win that we had gotten at the time.

**David Mytton \[0:30:42\]:** Well, before we wrap up then I have two lightning questions for you. So first is what interesting tools—

**Steven Sinofsky** **\[0:30:50\]:** Are you going to ask me about APIs? I feel like I’m missing out being asked about APIs but—

**David Mytton \[0:30:57\]:** Tell us about interesting tools you're playing around with at the moment? DevTools if you'd like but could be broadly software tools.

**Steven Sinofsky** **\[0:31:03\]:** Well, obviously all I'm doing is chatting with my personal playmate in the cloud of ChatGPT and Bing. There is just no escaping that it's the most interesting thing going on.

The thing that I think is most interesting about it, is the industry has been so hungry for a platform shift for about five years now. I think about five years ago everybody was like “Okay, mobile social cloud? We think it's done.” And in many ways, I think people are right. And so we've had crypto, we've had the metaverse, we've had variants of other things, but purely from a mass-adoption perspective, it's obvious. It was on 60 Minutes last night, if you don't get more Boomer than that? And yet here they are, basically the old people talking about Chat. And now for all the wrong reasons, drawing the wrong conclusions, and that's a whole different conversation.

But the reason that this is so interesting is because it can be slotted in or overlaid or integrated with everything that's already been built out, which is really what you want from a platform shift. The reason that platform shifts can really happen is because you don't have to throw everything out and start over. All the best early apps — What I mean by ‘best’ is they were the most useful — worked because there was a cloud that just seamlessly fed. You didn't need to build a whole database compute center yourself and, because you could build an app that connected over SOAP to your legacy mainframe system, and rent a car or rent a plane or book a restaurant reservation or whatever.

And so with Chat, you can access the model from your existing codebase, no matter what it is. You have an edit control in a browser, you have an edit control on an app, you have an edit control on a desktop software, you want to access it for your web app, but from your data center cloud instance in the first place. So that whole platform is callable from everywhere that matters.

That was the internet transition was the same way. All of a sudden everyone could get to the internet, no matter what computing device they were doing. It was just TCP/IP and parsing HTML. And so that means, not because we're cat people, but the cat’s out of the bag, this is going to happen. In fact. I would argue it's happened. So now we're just going to go figure out what to do with it. And the biggest risk is that people freak out to the point that, before it even exists in a product, the engineers self-constrain or the regulatory bodies just decide it has to be illegal in some way.

**Jean Yang \[0:33:51\]:** Yeah, I completely agree. When Copilot came out, I feel like a lot of developers were very against it, they had a lot of reasons. And similarly, when ChatGPT came out, first thing I said was like, “This is just part of everyone's toolbox now and if it's not, then you're behind”.

**Steven Sinofsky** **\[0:34:06\]:** Oh, absolutely. What I love about Copilot are two things: First, it takes me straight back to the Cornell Program Synthesizer.

**Jean Yang \[0:34:13\]:** Yeah, exactly.

**Steven Sinofsky** **\[0:34:15\]:** To me—

**Jean Yang \[0:34:15\]:** There are whole Twitter threads about this.

**Steven Sinofsky** **\[0:34:17\]:** Oh, really? Oh, I missed that! It really is just full-circle of life for me to see that. And the other thing that I think is so cool is most people spend all their time as an engineer, dealing with bugs in other people's code — because Lord knows it's never your code with bugs —  and what I think Copilot does is it just makes your code other people's code to yourself. And so now—

**Jean Yang \[0:34:39\]:** Yeah, exactly.

**Steven Sinofsky** **\[0:34:39\]: —**everybody is on equal footing, and that it's always other people's code. There's going to be a period of time where that's a lot of bugs that nobody can take responsibility for, but have to fix, and then people will start to behave differently about what they are thinking about while they're typing. And I think there's a real transition for developers from before and after Copilot and there's going to be a rocky interim, but then you'll just be different as a developer, the way that people who are writers who think about spellchecking or grammar.

**David Mytton \[0:35:14\]:** The second one is what your current tech setup is, what hardware and software are you using?

**Steven Sinofsky** **\[0:35:20\]:** That's a great question for somebody who does tech, although what I've done is, one, writing _Hardcore Software_ was a giant writing project, but also a huge information sinkhole because I was scanning and photographing and recording and transcoding. I had like WMV files from 1992 that I had to convert to mp4. I had no idea how complicated it was to go from a CGA IBM PC screen to HDMI to then record. It was weeks of work that involves DIP switches and patch cables and making my own video cable. Plus this kind of Zoom stuff I got really into doing stuff.

But right now just literally three days ago, I switched to the new M2 Mac Mini. The reliability, the robustness, the smoothness, I mean, it's really good. And the MacBook Air that I also use, these are very, very good. And the way to think of it is they are the peak PC. It's not clear that there's a reinvention of that happening anytime soon. Now if they add Touch to a Mac, I’m going to be fascinated by how that plays out because nobody's sitting around with Mac desktop software thinking, “I know I want to go rewrite it for touch.” I know that because they also didn't want to do it for Windows and that was a much bigger market.

**Jean Yang \[0:36:47\]:** And before we end, speaking of _Hardcore Software_, Steven, do you want to just give a quick plug for people who liked your stories here, where they can find more of it?

**Steven Sinofsky** **\[0:36:55\]:** Sure. Well, I wrote a book a long time ago called _One Strategy_ which was about building Windows 7 and reorganizing the team. It's a very management book. It’s a book, it's about the internal blog posts. And so then I was going to write a book about everything I had done but as I start to write it, I thought, “Wow, this is gonna be a big long book.” And all the fancy book people in New York just wanted the big battle. They just want the one thing that you fight over. I wanted to tell the history because I just think it's time for a history of the PCR. I think the PCR is over and it doesn't mean it's going to end just like the mainframe didn't end. But nobody wakes up in the morning going, "I wonder what's happening with PCs today? Other than that people work on them.” And so I want to tell the whole thing.

And then I realized I have boxes and boxes filled with all these personal things like news articles and videotapes and all this stuff. And then along came Substack. So I started to prep the whole book, then I decided that the book people were annoying. So then I decided I would just post it one week at a time on Substack, and 110 weeks later, I have this giant book, but I printed a very small— That's just the posts without all the PDFs and the pictures and everything. But it has an index of all the vanity. People can go look up if they're in it and stuff like that. And it was a remarkable experience because it's not just writing, but it's writing with a community of people who care. And so I did a limited print run for the people who subscribed at the highest level on Substack.

And Substack is a new way to tell a story. It's a new old way. Turns out what really got me into it was I didn't realize that _Bonfire of the Vanities_ was serialized in _Rolling Stone_ magazine like so many great works before it were serialized both in _Rolling Stone_ and _Atlantic_, and _New Yorker_ and stuff like that. And once I learned that, and I reread _Bonfire of the Vanities_ and I found out it was serialized, and then a totally different book. But then I also recorded podcast versions and I’ve got to go back and record the first two-thirds because audio got added to Substack halfway through, but it was great. It was an amazing experience and I would encourage anybody who has a story to tell, you can build an audience and it's fantastic.

**Jean Yang \[0:39:14\]:** Yeah, this is a real _Crime and Punishment_ of the PC era.

**Steven Sinofsky** **\[0:39:22\]:** It was _Crime and Punishment_ or _Grapes of Wrath_ or something like that. I don't know.

**David Mytton \[0:39:26\]:** Excellent. Well, unfortunately, that's all we've got time for. Thanks for joining us, Steven.

**Steven Sinofsky** **\[0:39:31\]:** Thank you very much. It was great to chat with you guys.

**David Mytton \[0:39:35\]:** Thanks for listening to the Console DevTools Podcast. Please let us know what you think on Twitter. I’m @davidmytton and you can follow @consoledotdev. Don’t forget to subscribe and rate us in your podcast player. And if you are playing around with, or building, any interesting DevTools, please get in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
