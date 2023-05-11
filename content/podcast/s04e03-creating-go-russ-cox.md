---
title: Creating Go
who: Russ Cox
whoLink: https://twitter.com/ericabrescia
what:
  We discuss the original motivations for Go, the principles behind the language 
  design, what other projects can learn from how Go manages its open-source 
  community, and what Russ would change about Go if he started again.
season: 4
episode: 3
date: 2023-05-11T06:00:00Z
duration: 36:42
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/ab716a24-2911-4353-a3e6-2f0feb3cb189/audio/f25d60af-a6aa-4136-9942-dd0868227299/default_tc.mp3
draft: false
summary:
  Creating Go - a devtools discussion with Russ Cox. Episode 3
  (Season 4) of the Console DevTools Podcast.
metaDescription:
  Creating Go - a devtools discussion with Russ Cox. Episode 3
  (Season 4) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/google-russ-cox.png
topImg2Src: /img/favicons/go.dev.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/e0d66bf0-6643-4017-a738-564e9f551949
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

In this episode, we speak with [Russ Cox](https://twitter.com/_rsc),
distinguished engineer and [Go](https://go.dev/) programming language tech lead
at [Google](https://about.google/). We discuss the original motivations for Go,
the principles behind the language design, what other projects can learn from
how Go manages its open-source community, and what Russ would change about Go if
he started again. Russ also talks about the telemetry proposal, the involvement
of Google in this, and what the Go team learned from a previous alias proposal.

Things mentioned:

* [PlanetScale](https://planetscale.com/vitess)
* "[Rust vs. Go: Why They’re Better Together](https://thenewstack.io/rust-vs-go-why-theyre-better-together/)"
* [Proposing Changes to Go](https://go.googlesource.com/proposal/)
* [GopherCon](https://www.gophercon.com/)
* "[The Go Programming Language and Environment](https://cacm.acm.org/magazines/2022/5/260357-the-go-programming-language-and-environment/fulltext)"
* "[Surviving Software Dependencies](https://queue.acm.org/detail.cfm?id=3344149)"
* [Dick Sites](https://sites.google.com/site/dicksites/)
* [_Understanding Software Dynamics_](https://www.amazon.com/Understanding-Software-Addison-Wesley-Professional-Computing/dp/0137589735)
* “[Stanford Seminar - Making the Invisible Visible: Observing Complex Software Dynamics](https://www.youtube.com/watch?v=D_qRuKO9qzM)”
* [MacBook Pro](https://www.apple.com/macbook-pro/)
* [Mac mini](https://www.apple.com/mac-mini/)
* [ThinkPad X1 with Linux](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-carbon-gen-10-(14-inch-intel)/21cbcto1wwus2)
* “[A Tour of the Acme Editor](https://www.youtube.com/watch?v=dP1xVpMPn8M)”
* [The Web is a Customer Service Medium](https://www.ftrain.com/wwic)

{{< rich-title-5 icon="future-head" >}}About Russ Cox{{</ rich-title-5 >}}

Russ Cox has been working on the programming language Go at Google since 2008
and is currently the Go project lead. He joined Google directly after completing
his Ph.D. in Electrical Engineering and Computer Science at MIT. From the early
days of Go when he was part of a small team, he has played a significant role in
the development and success of the programming language.

### Highlights

{{< podcast-episode/clipping time="06:49" >}}

**Russ Cox:** All the Go code in the world was in one source repository,
which meant that if we did want to make some sort of major change to the way
things looked or even sometimes the way things worked, we knew where all the
code was that had to be updated. There were a couple of times when we were going
to change something syntactically, and we thought we knew what it was going to
be and how to implement it, and we said, “Well, let's go see what it looks
like.” We’d get everyone to just sort of crowd around one computer, usually
mine. I'd open up an editor and open up literally every single file, Go source
file, in the world, then just do some global search and replace kind of things
in the editor. They'd watch the files changing on the screen, and everyone would
be like, “Oh, yes. That looks good.” We read it all out and \[would\] go back to
our desks.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="28:43" >}}

**Russ Cox:** We just discovered that for the last six releases, we had
this kind of bug where you couldn't actually build a Go program without an Xcode
installed, totally unintended, and no one noticed. If we had any sort of
telemetry or tracking of what is the build cache hit rate on things like the
standard library? — Which is a continual thing that we actually do run into
problems with. — What’s the hit rate on the build cache? If we knew that when we
looked at how it was going and then after a new release came out, and all of a
sudden, it was much closer to 0 than 100, all of a sudden, you would say, “Oh, I
wonder why,” and you would look into that. But without that kind of visibility,
we just can't. So telemetry really is about how do we get the information that
makes us better as software developers.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

David Mytton \[00:00:04\]: Welcome to another episode of the Console DevTools Podcast. I'm David Mytton, CEO of Console.dev, a free weekly email digest of the best tools and beta releases for experienced developers. 

Jean Yang \[00:00:15\]: And I'm Jean Yang, CEO of Akita Software, the fastest and easiest way to understand your APIs.

David Mytton \[00:00:22\]: In this episode, Jean and I speak with Russ Cox, distinguished engineer and Go programming language tech lead at Google. We discuss the original motivations for Go, the principles behind the language design, what other projects can learn from how Go manages its open-source community, and what Russ would change about Go if he started again. We're keeping this to 30 minutes. So let's get started.

David Mytton \[00:00:45\]: We're here with Russ Cox. Let's start with a brief background. Tell us a little bit about what you're currently doing and how you got here.

Russ Cox \[00:00:53\]: Hi, I'm Russ Cox. I'm currently the Go project lead at Google, and I have been working on Go at Google since 2008. Before that, I was in grad school. I went to Google straight out of grad school. So really, I got here by staying with one project for such a long time.

Jean Yang \[00:01:11\]: Love that. Russ, there are probably lots of Go fans out there who want to hear from you. What was the motivation for Go initially? Did you and your team have a specific target customer in mind, and how did this evolve over time?

Russ Cox \[00:01:27\]: Sure. So we built Go for ourselves. We really were targeting us. We were building technical infrastructure at Google, and we were dissatisfied with the languages that were available. We really wanted a language that was really great support for concurrency and ideally was also garbage-collected and ahead-of-time compiled. And there was nothing like that. 

We also felt that C++ and Java, which were the two main players at the time, were both too verbose and difficult to work in, in different ways. But we were definitely targeting the people who were writing infrastructure and servers who would otherwise be using C++ and Java and the initial sort of customers that we had were office mates and colleagues at Google. They totally matched the expectation because they would have been writing C++ and Java. They were writing C++ and Java before they switched to Go or tried Go. 

But when we released Go externally, the customer shifted somewhat in that we were really surprised. We found that Go was super popular with people who use Ruby and Python and other scripting languages. That really just wasn't the sort of target that we had in mind, but it was great. 

In retrospect, we did see a little bit of that at Google. There was one group at YouTube that built a MySQL load balancer called Vitess. Then they eventually spun it out to a company called PlanetScale. The engineer who started that project told me once that if not for Go, he would never have started the project because he was at YouTube. His choices were Python by default or else C++. He knew it would be too slow in Python, and he felt like he would never get it working in C++. So Go is this sort of sweet spot where it still runs efficiently, but it has this sort of lightweight feel and sort of productive feel of a scripting language. But you still get this really efficient execution. 

That's the biggest shift in the customer is really just a shift from thinking about people who sort of had spent a decade writing C++ code to run servers, to people who really don't have that background but can still totally do that with Go.

Jean Yang \[00:03:13\]: Yes, and I completely agree that it's easy for startups or the easiest. We use it at my company. I know Honeycomb has written a lot about how they've used it. I see it a lot. 

Russ Cox \[00:03:23\]: Cool.

David Mytton \[00:03:24\]: Yes. We're using Console as well for the backend code. Yes, it just makes a lot of sense for building APIs. So I think both of us are good fans here. 

Russ Cox \[00:03:32\]: Absolutely. Yes. 

David Mytton \[00:03:35\]: How has that changed over time? So it's – the project's been around a while, right? So how has that evolved over the years as new technologies have appeared and I suppose competitors as well, perhaps?

Russ Cox \[00:03:45\]: I don't really think the sort of target has changed. I think that we do get some sort of interaction with other languages that have come along. Rust is the sort of obvious question that people always ask about. There’s a blog post, I think, or an article written by our former PM and a Rust PM that was titled something like “Rust and Go: Better Together”. We can link it up in the show notes. I'll dig it up. 

But I really – we really do feel that, for the most part, there's systems infrastructure you can write in Rust and you can write in Go. There’s clearly some overlap. But there's also a fair amount of it that’s kind of non-overlap in that a lot of the time, you want to work on the sort of business logic of your code. It can be difficult to sort of fight borrow checker and all that sort of stuff in Rust. 

On the other hand, if you can't pay for garbage collection and you really need to be closer to the metal, then Rust is a great choice. It's a better choice than C++ for a lot of things. You should totally do that, right? So there's just sort of different design spaces where maybe Rust is the right answer there because you really can't pay for the sort of convenience of garbage collection and types and things like that. Or maybe you can pay for that and it's – you write in Go, and you get a lot more flexibility, and it's easier to develop. There's things that you don't have to use mental space for. So it really can go either way.

David Mytton \[00:05:03\]: Jean, you've written or your colleagues have written a bit about the garbage collector in your experiments deciding not to rewrite in Rust.

Jean Yang \[00:05:11\]: Yes. I mean, we spent a bunch of time optimizing our Go code so that we wouldn't have to do a rewrite because the reasons we initially chose Go, or the reasons I wanted us to stick with Go, are really, very fast learning curve and, in general, more ease of development for most cases, unless you're really, really pressed for memory. Java developers read our blog post and said, “These are the same tricks you would use in Java.” It's not– nothing new. But it's good to know that they exist. 

Russ Cox \[00:05:43\]: Yeah, absolutely.

Jean Yang \[00:05:44\]: So, Russ, something that I was really impressed with when Go first came out was how small the initial team was. When I saw that, I said to myself, “That's exactly what you want to design, something like a new language.” So I'd love to have you talk a little bit about what the early team was like and how you took advantage of the small size to really get a bunch of things right before you released more publicly.

Russ Cox \[00:06:10\]: Sure, yes. So the early days, it's funny to think back because it feels like everything was so much easier because it was – there's so many fewer dependencies on us. So there were three people originally; Robert Griesemer, Rob Pike, and Ken Thompson. Then I joined, and Ian Lance Taylor joined. It was the five of us for pretty much two years from fall 2008 to about fall 2010. Then we sort of spread out and started going different places. 

But for those two years, we're all in the same place. We were in two offices separated by glass walls. So we could wave at each other through the walls if we wanted people to come over and chat. It was really easy to just sort of get everyone together and talk about something quickly and make a decision and then go back and do it. All the Go code in the world was in one source repository, which meant that if we did want to make some sort of major change to the way things looked or even sometimes the way things worked, we knew where all the code was that had to be updated. 

There were a couple of times when we were going to change something syntactically, and we thought we knew what it was going to be and how to implement it, and we said, “Well, let's go see what it looks like.” We’d get everyone to just sort of crowd around one computer, usually mine. I'd open up an editor and open up literally every single file, Go source file in the world, then just do some global search and replace things in the editor. They'd watch the files changing on the screen, and everyone would be like, “Oh, yes. That looks good.” We'd write it all out and go back to our desks. 

That sort of flexibility and agility was really helpful early on. Even when we started having other people, just a couple of other people, write Go code, they were still working in our Go repository and checking their code in there so that we could update it. Then, of course, once it got more used in Google, we couldn't do that anymore. Now, we have code in other companies that we can't even see. It becomes a lot more difficult to change things. But those early days, we really could move fast.

Jean Yang \[00:07:54\]: I love that. A follow-up question is do you have anecdotes about decisions that would be much harder to make today or discussions and debates that would be much harder to have if you weren't right next to each other.

Russ Cox \[00:08:07\]: I don't know if there's specific things that were easier because we’re next to each other. But the fact that we were next to each other, I feel like it was just an intense couple of years that I was in California, and they were all there together. I don't know how you bootstrap without that. I'm sure that people do it now in sort of the age of remote. You must just have to stay on video all day. But having that proximity where you could just always sort of lean over and talk to people and check with them, it's just incredibly valuable.

I do remember very clearly the decision to decide to use case-based export controls, where uppercase is exported and lowercase isn't. We didn't have any export controls at the beginning. Then we had a keyword export, which we decided was too heavyweight, and the keyword was for top-level things. It wasn't for struct fields. We knew we needed an answer for struct fields. 

Someone had suggested using underscore like Python does, where there's convention that if you put an underscore, then it's private. Then I can't remember if someone else has suggested case or if we came up with case. I think it was someone else. But we looked at it, and it seemed kind of weird, just like I'm sure it seemed weird when you saw it in Go. But we couldn't come up with any kind of technical reason why it wouldn't work. So we said, “Well, let's try it.” I remember very clearly that decision because I remember sort of the plant at the office that I was staring at and thinking, “I really don't like this, but we'll see.” But it was great. It was great. It's one of my favorite feature language that no matter where you are in the program, if you see something being called, you know whether it's a public function or an unexported function. It turned out just absolute great.

One other thing that maybe that story illustrates a little bit is that we made all these decisions by consensus. We never put anything in where someone got outvoted or anything like that. Everyone had to agree that we – that that was the right thing to do. For export stuff, I wasn't enthusiastic about it. But I certainly didn't object, right? We all agreed that let's move forward with this and try it. We could have changed it if it turned out not to be good. But it turned out to be really helpful.

David Mytton \[00:10:03\]: Were there any other principles that you used as part of the design process? How has that changed? I suppose consensus is a little harder now. It's an open-source project, right?

Russ Cox \[00:10:15\]: Yeah. I mean, early on, it really was the three and then the five had to all agree. Or at least no one vetoed it. But really, they had to believe that this was the right thing to do. Sometimes, it’s something that you didn't have expertise on, and you say, “Okay, that sounds right.” Sometimes, you’re, “Oh, I'm really sure this is right.” 

When we got to open source, we still try to do mostly consensus-based things. But when push comes to shove, there's still sort of a core group of us who we try to get consensus among ourselves, and then we do it that way. We have a document called the Go proposal process that actually outlines all of this. We try to get consensus on an issue. If we can't get consensus, it's usually we're not going to do the proposal. If there's a disagreement on whether it is consensus or anything like that, it goes to the three language designers who aren't retired. Then if they can't decide, then, technically, it goes to me. But that literally never happened. So the consensus thing, I think, was a really big, important principle. 

The other principle that I think was really important was that we have a spec and we write the spec before we do the implementation. It sounds weird to say that, at least to me. But Python doesn't have a spec. Rust doesn't have a spec. Ruby doesn't have a spec. JavaScript has a spec, but only because of like truly heroic efforts after the fact, which you can tell, right? Having to write the spec first really makes me do something clean, right? As you write it, you think, “I can't write this down. I can't explain it this way. This makes no sense.” Then you change what you're going to do. 

We see that not just with the language spec but also APIs a lot of the time. We sit down to write the doc comments for an API before we write the actual API. We go through many rounds with multiple people to try to get those right. Then everything's better for it because the people coming to read the API docs, they’re sort of, “Oh, I understand the structure here.” Because there is structure. It’s not just sort of grown organically. So those are the two things that I think are most important with a consensus and then having a spec first kind of approach.

Jean Yang \[00:12:10\]: That makes sense because something I've been really impressed with about Go is how it's such a small, clean language. But there's still a community making requests, and there's an open-source project. So I'd like to dig a little bit deeper into how you balance this principled design-first approach with the fact that there is an active engaged community.

Russ Cox \[00:12:33\]: Yes. As I mentioned before, we do have an official Go proposal process. If you just search for that, you'll find it. There's a proposal sort of section of the issue tracker, and proposals go into certain stages. They are incoming, and then they're sort of active where we're actively discussing. Then they – it seems like we're heading towards either a consensus or a clear sort of we're not going to get to this. They go to like likely accept or likely decline, and they stay there for a week or two. Then they go to accepted or declined. 

But that, I think, fits really well with the whole spec first, right? We're talking about what should the feature be before we have the implementation. Sometimes, people send us an implementation first. We say like, “Sorry. We need to go through the proposal process.” 

Jean Yang \[00:13:13\]: Love that. 

Russ Cox \[00:13:14\]: Some people don't like that, but most people really appreciate it. A lot of people tell us after the fact like, “Wow, that really made it even better than I had planned.” Or like, “That really came out really well.” It does take extra time, and we're very mindful that we're kind of committing to keeping these things forever, right? If someone shows up with some code and says like, “Why don't you take this code,” and the answer is, “Well, we really want to think about this really carefully because we're going to be the ones who are maintaining it for the next decade or however long.” So we just want to make sure that it's really right, and it fits right into the rest of Go.

David Mytton \[00:13:47\]: That's kind of been your approach with versioning and compatibility, right? Because Go is still technically V1, I suppose. How are you thinking about that? Is there going to be a 2.0? How’s that going to evolve?

Russ Cox \[00:14:00\]: There is not going to be a 2.0. 

Jean Yang \[00:14:02\]: Breaking drama. 

Russ Cox \[00:14:03\]: Yes, breaking news. 

David Mytton \[00:14:04\]: Yeah.

Russ Cox \[00:14:06\]: I gave a talk at GopherCon last fall about compatibility generally. We have some interesting ideas about ways to kind of improve compatibility. But I really do believe that compatibility is one of the strongest features we have. I mean, I didn't really understand it. It was really Rob's push back when we did Go 1 to say this is holding us back that we keep making breaking changes because people can't write books, and they can't write courses because they'll be out of date. It was totally Rob's idea. I did not understand it or appreciate it at that kind of level that he did at the time. 

But now, I really get it. It really is just absolutely critical for people running businesses on Go that we're not breaking your programs every release. We do break programs sometimes, unfortunately. We just put in a new sort algorithm a couple of releases ago. It’s faster. It does fewer swaps and compares. It’s good, and it handles mostly data better. But it does come out with different answers if you're sorting things that are ostensibly equal, but you can tell them apart, right? Your comparison function doesn't distinguish them, but they're clearly different when you look at them. 

That comes up in real programs like in a compiler. If you're sorting some sort of register allocation decision based on some numeric score, then the scores are equal. Maybe you use AX or BX, depending on which way the sort goes. So if we change the sort algorithm, some people's programs actually change behavior. Sometimes, that counts as a breakage for them. 

But, clearly, we have to be able to change the sort algorithm, right? We can't just be locked into whatever sort of implementation we shipped in Go 1. So we have various ways that we're approaching those kinds of problems to try to give people more runway but also sort of more understanding of what kinds of changes might be affecting their program. 

In particular, if your go.mod file says Go 1.20, and you update to like 1.22, then the goal is that 1.22 won't do anything that would break your program because it'll compile your program and kind of the Go 1.20 compatibility mode. It’s not until you change your go.mod to say 1.22 that you start to get the kind of 1.22-specific changes. 

If we start being stricter in some sort of parser or something like that, that would be an example of something that we would leave turned off if we were compiling for an older version of Go in the new toolchain but compiling older programs. Then when we see that it's a newer program, then we would turn on the stricter parser or whatever else.

David Mytton \[00:16:28\]: Is there anything that you wish you could change that you haven't been able to change?

Russ Cox \[00:16:36\]: I'm sure there are little things, but there's not really a lot of big things that I would change. Earlier today, I was talking to someone about maybe some of the defaults around network connections on the Internet aren't really right. We sort of inherit the standard TCP stack settings, where if you have a TCP connection between two different machines, there's no keepalives flowing back and forth, which is the default on Unix. You can ideally close the machine, turn it on tomorrow, and the TCP connection is still there, unless there's keepalives and timeouts. 

That's kind of a neat trick if you're in a sort of world where your machine always has one IP address. On the other hand, it means that if you have a network server, and someone connects to your server and then closes their laptop, your server just sort of sits around with that half of a TCP connection open potentially forever. So you probably want to turn on keepalives and things like that. Maybe we could turn those on by default. Maybe we can't. 

There's other interesting questions about certain defaults in the HTTP server that maybe have security implications, where we'd really like to change it to be sort of more secure by default. But we know that will break certain people's servers. So how do we deal with that? Those are the kinds of things where I feel like if we could go back and change something, it would be really helpful. 

There's really not that much in the language that I would go back and change. I guess there's one thing. The one thing I would go back and change, which we're going to change, we're going to go forward and change, is the behavior of loop variables. I'm sure that you've both written code where you have a range loop over things in a list, and you kick off a goroutine for each one, and you forgot to make a copy of the loop variable. So all the goroutines are sharing the same variable and there's – they all end up operating on the last thing in the list. Or the race detector finds a race or something like that. 

We're actually going to fix that I think. We've had public discussions about it. We think we can key it off the go line in the go.mod file. So that older Go code keeps getting the old semantics, just in case there's code where it really does need the old semantics. But newer code gets the new semantics. I think that's going to work out. We're sort of preparing for that. But that's the one thing where it’s just sort of egregious enough that it really kind of has to get fixed. I did an analysis and found that, essentially, all the programs that would change behavior based on this change are changing from buggy to correct.

Jean Yang \[00:18:52\]: I really liked the thoughtful approach. So, Russ, as far as I understand, Go is now the age of a middle school child. Most parents, by the time their kids are in middle school, have hopes and dreams or views that they let go of what the situation would be like. We're curious to hear a little bit about what are some of the hopes and dreams or goals you had for Go. Not necessarily negative but just like parenthood.

Russ Cox \[00:19:17\]: That you let go of, gave up on?

Jean Yang \[00:19:20\]: Yeah. I don't know. I'm not a parent. So I don't know how parents talk about this. What are things your kids are just a disappointment?

Russ Cox \[00:19:31\]: My kids aren't in middle school yet. So I guess I haven't gotten to that point. There’s sort of the question of what we realized was sort of maybe not as important or priority. 

Jean Yang \[00:19:42\]: Adjustments of priorities. 

Russ Cox \[00:19:44\]: Yeah, adjustments of priority. I think it's pretty clear that over time, the language itself has become less important. A lot of people will be kind of offended by that. But at the very beginning, it was clearly all about the language. When I was interviewing at Google to come work on Go, I had a video call with Rob. He was in Australia at the time. He told me about it, and he said, “Go talk to Ken. He’ll tell you more.” When I went to talk to Ken, he was like, “Well, this is what for loops look like and this is what if statements look like.” That was the level where Ken was on that day. It’s just a totally reasonable level to be at. I mean, you have to start with basic syntax and things like that. But then over time, we sort of keep sort of raising the level where we're focusing. 

So once you have the language pretty good, you start worrying about the implementation, garbage collection, good runtime, multi-threading support, things like that. After you get sort of the implementation of the language right, then you have to worry about libraries. Then you want to worry about tooling like Go Build and Go Test and maybe package management or good IDE support. We've been working on gopls and especially VS Code Go. Then more recently, supply chain security and figuring out why is it okay to just download code off the Internet and execute it. 

All of these things, after the language, the start of the language, they're really about making the whole system work well. We do circle back, right? We just did generics in Go 1.18. So that we got back to language and then had to come back up through the stack to update it all for generics and things like that. We make smaller language changes too. But you really do have to focus on or at least consider the whole environment. 

I wrote an article for CACM last year, and I titled it “The Go Programming Language and Environment”. I was really focusing on it is a whole environment, and that's why Go is popular and makes people successful because we're really targeting kind of the whole process of software engineering and not just the language. A lot of people who focus on the language think, “Well, Go doesn’t have this feature, so it's no good,” or something like that. Or, “My language is technically better. So why am I not as successful?” I think a lot of it is that you need more than language. When you start a program, there's way more that goes into it than just which language you're using.

Jean Yang \[00:21:50\]: That's so interesting because everyone who I've heard who likes Go likes it for the ecosystem, the community, all of the other stuff. Anyone who I've heard complain about Go, they complain about the language itself.

Russ Cox \[00:22:03\]: Yeah, exactly.

David Mytton \[00:22:05\]: The tooling around it is really important as well, right? So you've got a proposal open around telemetry, which has been somewhat controversial. How do you approach that? 

Russ Cox \[00:22:14\]: Really, just like the other proposals, we learned from some early missteps that it's really important to make sure that not only that we're listening to people because we're always listening to people, but that they understand, that they feel heard. 

We had some earlier proposals where there was one around general aliases, which is really important for software engineering and big refactors. The way we did that one, in retrospect, was a mistake. We didn't know at the time. Robert did a lightning talk at GopherCon which got recorded but not released, so very few people had seen it. Then we did a proposal, and there was a long discussion. I was actually out on paternity leave. I came back, and I had to figure out what to do to move this thing along. So I printed out the entire GitHub discussion. 

I had this very clear memory of sitting on a roof in Cambridge on a nice sunny day, and reading through 100 pages of GitHub comments, and sort of marking up, “Okay, here's an objection from someone.” Then, “Oh, this one got resolved,” and so on. By the time I got to the end, there really was very little I needed to add to the conversation. It just seemed like there have been some objections. They got resolved. People responded to them correctly in ways that really resolved the objection, and so fine. 

So then I went back to my desk, and I said like, “Thanks for the discussion. This was really great. I’ve read through it all. It sounds like on balance. We should move forward with this. So let's move forward towards accepting this.” It was like all hell broke loose. It was just like everything went wrong at that point. We really didn't understand it for a little while and eventually understood. The reason was that there was no indication from us that we had actually heard what people had said, right? We just said like “The discussion was good. It sounds like everything got addressed.” That people didn't hear us actually say like, “These were the objections that we heard, and these are what we think the responses are,” and these sorts of things. 

Listening really has to be kind of a two-way thing. People want to feel involved and listened to, and, you know, be involved and listened to. I think they were involved, but they didn't sort of know they were involved. That was really a problem. So for a lot of these proposals now, we have – make a real effort to listen to people and be clear about that. 

So the telemetry proposal, I actually just filed the actual proposal yesterday, I think. We're recording this March 7th, so it was March 6th. The actual GitHub discussion was quite a few weeks earlier. The GitHub discussion was just, “This is what we're thinking about. We want some early feedback.” That was something that we introduced after a couple of missteps, sort of like the alias one. 

There was an article I read around the time of the alias discussion by Paul Ford called _The Web is a Customer Service Medium._ But the famous line from that is “Why wasn’t I consulted?” and he says that different mediums have questions that they’re really good at answering, like the question a movie is good at answering is, “I want to spend two hours just watching something fun,” and the answer is, “Go get a movie.” And if the question is “Why wasn’t I consulted?” the answer is “You should be on the web.”  Because the web is where people go to comment on literally anything.  And when you realise that that’s just serving a fundamental need, like there are people who have invested significant parts of their career into Go, I have too, but people who have set up consultancies or companies, they feel just as invested and dependent on Go as I do, and they really want to make sure that they are part of the discussion and that when there’s a serious objection that they have that they get heard at least, and maybe even influence how we resolve that. And so there’s a deep need especially on the internet to really feel like you’re listened to and see that your feedback has and effect. And we’ve really tried to address that.

I have a whole sequence of blog posts about the proposal process that I wrote a few years after this particular incident, after another incident, where we really tried to understand how do you lead a user base of a couple of million people, where maybe there's a couple 100 who are really, really vocal and want to be part of it? But then you've got this sort of million people you could draw from on any one issue who might show up and have good ideas or want to be involved. How do you do that?

David Mytton \[00:26:05\]: How about Google and what the involvement is there from the company and whether they are involved at all? How do you think about that?

Russ Cox \[00:26:14\]: I mean, in general, we're doing this for Go. We're really not focusing on what would be best for Google. We certainly want to help Google, right? We love it when Google uses Go. Sometimes, we have to adapt Go in ways that we think are probably not the right way for Go. If that happens, then we actually don't publish the code into the standard Go distribution. 

We have various code that we've written that sort of changes Go inside Google, and we do publish the code. But we publish it as sort of an experimental flag that you can turn on during your Go distribution build if you want to play with it. If you think it's useful to your company, that's fine. But we don't feel it's the right thing for Go, so we don't make it the default. 

In general, we do sort of have a hard line of we want to do what's right for Go. If Google needs something slightly different, that's fine. We work for Google. We’ll write that code for them, and we'll share it because it's open source. So we don't want to be keeping secret versions of Go inside Google, right? But at the same time, we really prioritize what is the right thing for Go and for the public open-source version of Go. Let's get that right first. 

Google, really, was not pressuring us for telemetry at all. The telemetry push really came from us observing that we're doing a bad job as the Go team because we're not noticing bugs that don't rise to the level of actual problems that people would notice and report or performance problems that don't rise to the level of bad enough that someone would notice and report it. 

There was one issue where, I think it was just before the pandemic, it was something like January 2020, we made a change to the way we built the Mac Go distributions so that Apple would keep signing them. Totally reasonable change to have to make, but we did it in slightly the wrong way, and the result was that the .a files that we shipped in the distribution looked stale to the Go command, so it would never use them. It would always rebuild them. 

Because it would always rebuild them and because the net package uses Cgo, it would actually invoke the C compiler. If you didn't have Xcode installed on your machine, then even if you're compiling what looks like a pure Go program, it would try to run the C compiler. When you do that on a machine without Xcode, Apple puts up a pop-up that says, “Hey, you need Xcode. Go over here and get Xcode.” 

People had this effect where they would run Go Build, and a pop-up would show up and say, “Hey, you need to go get Xcode.” They'll be like, “Oh, okay,” and they'll go get Xcode. But that was totally not the user experience we wanted. It was just what was happening by accident, and no one reported it for three full years. I discovered this by accident when I was working on something related to the way that the build caches worked. 

We just discovered that for the last six releases, we had this kind of bug where you couldn't actually build a Go program without an Xcode installed, totally unintended, and no one noticed. If we had any sort of telemetry or tracking of what is the build cache hit rate on things like the standard library? — Which is a continual thing that we actually do run into problems with. — What’s the hit rate on the build cache? If we knew that when we looked at how it was going and then after a new release came out, and all of a sudden, it was like, much closer to 0 than 100, all of a sudden, you would say, “Oh, I wonder why,” and you would look into that. But without that kind of visibility, we just can't. So telemetry really is about how do we get the information that makes us better as software developers. 

I'm also slightly worried about the open-source sort of community. Not that they're in danger of dying or anything like that. But I do think we're falling behind closed-source programs that are willing to do really, truly invasive telemetry. If you think about — I shouldn’t name any commercial software — but pretty much every piece of commercial software you have is uploading all sorts of detailed sort of event traces of what you do. 

Jean Yang \[00:28:40\]: Yeah. We do that. Yeah. 

Russ Cox \[00:28:42\]: Yeah, sure. It’s really helpful. We got, surprisingly, less pushback than I expected from just the general idea of telemetry. I think it's because so many people now work at companies where that's just the norm, and they see the value they get from it. But open source, you could use that information about how people use your software to understand, to notice bugs early, to understand how people use it, and understand where to prioritize. Instead, you just get sort of the attitude in open source. It's like, “Well, I just have to make everything perfect, right.” I think that's a big contributor to burnout. 

If you actually had a sense of like, “Actually, no one's using that part of the program. I could just delete that or stop maintaining that part and stop fixing bugs in it,” that'd be really useful data. I really would like to find a way forward that works for lots of open source and not just Go. That's part of why it's so minimal, right? It's just a week's worth of counters of this event happened. There's no traces of exactly what you did or anything sort of super invasive like that.

Jean Yang \[00:30:44\]: Yeah, I love that. Because, I mean, developer experience has moved to the point where people generally agree it's important. People also generally would agree that you have to track almost everything to understand what goes into a good developer experience. But I previously didn't think about, well, open source projects don't have that. So how are they supposed to improve?

Russ Cox \[00:31:06\]: Yeah. It's a big open question, I think. 

Jean Yang \[00:31:08\]: Yeah. So, Russ, from all of your lessons about Go, if you were talking to someone designing a new language today or designing a new kind of developer tool, what kind of advice would you give them?

Russ Cox \[00:31:22\]: The lessons that we learned around just how to manage a community, I think, are the first meta advice I would give them. I think the “write a spec first” is good advice too. 

As far as advice for what should the next language be, I think the biggest problem we have today that Go does not have an answer for is really just shared memory. It’s funny because I was talking to a colleague of mine from grad school in the early days of Go before – I had started Google, but we hadn't done the public release yet, and I told him what we were doing. He said, “You're crazy to be doing a new language that has shared memory in 2008.” We still are in this box in 2023 where, essentially, all languages have shared memory and it makes it difficult or impossible to isolate different parts of your program. You get races and ownership bugs. 

Rust, to some extent, has taken care of some of that. But shared memory also makes it slow to split across a CPU. It makes it impossible to split your program across multiple machines. Then you've got the supply chain stuff I was talking about before about how we just download and execute random code from the Internet. That's what package managers do. It makes, at some level, no sense at all. 

I wrote a CACM article a couple of years ago titled “Surviving Software Dependencies” about just like “This is really risky, and we need to pay more attention to it." If we could run that code in a separate address space or a different memory, so it didn't share memory with the rest of your program. It's not a complete solution, but it's a good step forward, right? So I feel like on the other hand, we don't know how to write really efficient programs like web services and things like that without having shared memory between the different threads that are handling different connections and things like that. 

That’s the question, I think, is if you can figure out an efficient way to design a language that runs efficiently and doesn't rely on shared memory, I feel like there's a lot of doors that open up. But I don't have the answer. I just have the question. 

David Mytton \[00:33:15\]: I suppose people have solved that with microservices. Whether that's a solution or not is a separate question.

Russ Cox \[00:33:21\]: Yeah. Yeah, exactly.

David Mytton \[00:33:24\]: Okay. Well, before we wrap up then, I have two lightning questions for you. So first one is are there any interesting DevTools or tools generally that you're playing around with at the moment?

Russ Cox \[00:33:35\]: I think the most interesting DevTools I've seen recently, I read a book about nine months ago by Dick Sites called _Understanding Software Dynamics_. It's a great book. There's a link to a talk he gave at Stanford on YouTube. I'll get that for you. You can put it in the show notes. But it's really amazing. I mean, it's – Dick Sites is incredible. I mean, he helped design the Alpha. He has had an incredible career on lots and lots of different things. 

In the last decade or more, he's been working on just performance analysis via tracing. He's built these just incredible tracers. Reading the book is sort of like watching an amazing magic trick where he tells you step-by-step exactly what he's going to do and how he's going to do it. Then he does it, and it's still incredible to watch. 

He builds these traces. They can diagnose high-level problems like network delays, all the way down to microsecond-level problems like CPU contention, like “You're running too many of this instruction on the same hyper thread, a matched hyper thread to a different CPU that's also running too many of that instruction." Just the sort of level of understanding that he gets out of this tracing is incredible. 

I've had a couple of interesting problems over the last nine months or so, where the solution really was just to write sort of a custom tracer for what was going on in the program to really understand why is it not working. What is executing right now? It’s just a really, really eye-opening book. It does have some software that you can play with. He's got a kernel module where you can trace at sort of system call level and execution level of what things are doing. 

But the general approach is kind of the bigger win from the book. It’s just absolute incredible book. It's called _Understanding Software Dynamics._

David Mytton \[00:35:12\]: All right, cool. Then the second question is what is your current tech setup? What hardware and software are you currently using?

Russ Cox \[00:35:20\]: I'm doing this on a MacBook Pro. I have another MacBook Pro and a Mac mini sitting here. I have a ThinkPad X1 that runs Linux. All of these have Go installed. They also have sort of my development tools of choice which is called Plan 9 from User Space, which is a bunch of very old now software from Plan 9 that I ported to Unix when I was in grad school and have kept running. It’s just sort of the environment that I'm used to. In particular, the sort of Acme editor I still find kind of the best way for me to get work done. 

If you Google for Russ Cox and Acme, you can find a YouTube video I did a number of years ago, sort of showing people how it works. It's totally different from anything you've ever seen. I'm sure of that. But it works really well, and so that's what I sort of stick with.

David Mytton \[00:36:01\]: Amazing. Well, unfortunately, that's all we've got time for. So thanks for joining us, Russ.

Russ Cox \[00:36:06\]: Thanks very much. It was great to be here.

Jean Yang \[00:36:08\]: Thank you.

David Mytton \[00:36:10\]: Thanks for listening to the Console DevTools Podcast. Please let us know what you think on Twitter. I'm @davidmytton and you can follow @consoledotdev. Don't forget to subscribe and rate us in your podcast player. If you're playing around with or building any interesting DevTools, please get in touch. Our email is in the show notes. See you next time.

\[END\]

{{</ box-collapsible >}}
