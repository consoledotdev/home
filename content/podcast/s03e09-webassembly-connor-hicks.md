---
title: WebAssembly
who: Connor Hicks
whoLink: https://twitter.com/cohix
org: Suborbital
orgLink: https://suborbital.dev/
what:
  We discuss how WebAssembly works, when you’d use AssemblyScript rather than
  other languages which compile to WASM, the use cases for deploying WebAssembly
  on the backend, and how the dev, test, build, deploy, and observability cycle
  works when creating code in WebAssembly.
season: 3
episode: 9
date: 2022-08-04T06:00:00Z
duration: 30:33
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/7c610a77-33a4-4c99-8032-4395237cb5cd/audio/1617bfd4-a52e-43cb-969c-2445087346f4/default_tc.mp3
draft: true
summary:
  WebAssembly - a devtools discussion with Connor Hicks (Suborbital). Episode 9
  (Season 3) of the Console DevTools Podcast.
metaDescription:
  WebAssembly - a devtools discussion with Connor Hicks (Suborbital). Episode 9
  (Season 3) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/suborbital-connor-hicks-profile.jpg
topImg2Src: /img/favicons/suborbital.dev.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/7c610a77-33a4-4c99-8032-4395237cb5cd
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

In this episode we speak to Connor Hicks, Founder of
[Suborbital](https://suborbital.dev/), a serverless platform powered by
WebAssembly. We discuss how WebAssembly works, when you'd use AssemblyScript
rather than other languages which compile to WASM, the use cases for deploying
WebAssembly on the backend, and how the dev, test, build, deploy, and
observability cycle works when creating code in WebAssembly.

Things mentioned:

- [Suborbital](https://suborbital.dev/)
- [WebAssembly](https://webassembly.org/)
- [One password](https://1password.com/)
- [Wordpress](https://wordpress.com/)
- [Bytecode Alliance](https://bytecodealliance.org/)
- [wasmtime](https://wasmtime.dev/)
- [Rust](https://www.rust-lang.org/)
- [Go](https://go.dev/)
- [Shopify](https://www.shopify.com)
- [Cargo](https://doc.rust-lang.org/cargo/)
- [Trunk](https://trunkrs.dev/)
- [TinyGo](https://tinygo.org/)
- [Swift](https://developer.apple.com/swift/)
- [Bindle registry](https://github.com/deislabs/bindle)
- [OpenTelemetry](https://opentelemetry.io/)
- [Hashicorp Nomad](https://www.nomadproject.io/)
- [GoReleaser](https://goreleaser.com/)
- [Caddy](https://caddyserver.com/)
- [Elgato](https://www.elgato.com/)
- [VS Code](https://code.visualstudio.com/)
- [Discord](https://discord.com/)
- [Notion](https://www.notion.so/)
- [Firefox](https://www.mozilla.org/firefox/)
- [Miro](https://miro.com/)

{{< rich-title-5 icon="future-head" >}}About Connor Hicks{{</ rich-title-5 >}}

Connor Hicks is based in Ottawa, Canada, and is the founder of Suborbital
Software Systems. Connor works primarily on security and distributed systems
projects including the Suborbital family of open source projects, and formerly
led research and development at 1Password. Connor is a strong believer in
building security and privacy into the core of all software, and is exploring
the next iteration of web service development with technologies like
WebAssembly.

### Highlights

{{< podcast-episode/clipping time="01:53" >}}

**Connor Hicks:** That is exactly how it started, however, it has morphed and
evolved quite a bit from there. WebAssembly, at its simplest, is a binary
representation of a program, same as a lot of other formats. If you compile a
program for x86 or for ARM, it produces a binary. WebAssembly is a binary, not
too dissimilar from those, however, it is designed to be platform agnostic,
infrastructure agnostic, processor agnostic, et cetera, et cetera. It's meant to
run anywhere. The original use case for it was absolutely running compiled
languages in the web browser. C++ was right there at the beginning. But since
then, it has evolved to include non-browser environments like the server, IoT,
all that kind of stuff, and is evolved to support all sorts of different
languages beyond just C++.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="15:19" >}}

**Connor Hicks:** Rust is the winning language, I suppose, you could say here in
terms of first-party compatibility. Rust has had WebAssembly built in directly
for years at this point. Other languages are starting to catch up now, but where
the language doesn't fully support WebAssembly, there are often third-party or
open source projects that fill in the gap. For example, Go has actually been
able to compile with WebAssembly for a long time, but they're a little bit
behind the standard in terms of the support that's built into mainline Go.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton** (00:05): Welcome to the Console podcast. I'm David Mytton,
co-founder of Console.Dev, a free weekly newsletter highlighting the best and
most interesting tools for developers. In this episode, I speak with Connor
Hicks, founder of Suborbital, a serverless platform powered by WebAssembly. We
discuss how WebAssembly works, when you'd use AssemblyScript rather than other
languages, which compile to Wasm, the use cases for deploying WebAssembly on the
backend and how the dev, test, build, deploy and observability cycle works when
creating code in WebAssembly. We're keeping this to 30 minutes so let's get
started. I'm here with Connor Hicks. Connor, thanks for joining the Console
podcast.

**Connor Hicks** (00:49): My pleasure. Thanks for having me.

**David Mytton** (00:50): Let's start with a brief background. Tell us a little
bit about what you are currently doing and how you got here.

**Connor Hicks** (00:56): Absolutely. My name is Conner Hicks. I am currently
the founder and CEO of Suborbital, which is a cloud computing startup focused on
WebAssembly and allowing developers to take full advantage of what WebAssembly
has to offer. Before that, for almost six years, I was a software developer at
1Password. I was working on all sorts of different things there over the course
of my tenure. I worked on the iOS app. I worked on server infrastructure. I
worked on enterprise integrations, all sorts of different things. Before that, I
had internships at Airbus and WordPress and a bunch of other places. I got my
computer science degree as well.

**David Mytton** (01:44): Let's start with what is WebAssembly. I've read that
it is a way to run C++ on the internet. Is that accurate? How would you describe
it?

**Connor Hicks** (01:53): That is exactly how it started, however, it has
morphed and evolved quite a bit from there. WebAssembly, at its simplest, is a
binary representation of a program, same as a lot of other formats. If you
compile a program for x86 or for ARM, it produces a binary. WebAssembly is a
binary, not too dissimilar from those, however, it is designed to be platform
agnostic, infrastructure agnostic, processor agnostic, et cetera, et cetera.
It's meant to run anywhere. The original use case for it was absolutely running
compiled languages in the web browser. C++ was right there at the beginning. But
since then, it has evolved to include non-browser environments like the server,
IoT, all that kind of stuff, and is evolved to support all sorts of different
languages beyond just C++.

There were some projects that led up to the creation of WebAssembly. There were
asm.js. There was something called Native Client. There were a bunch of other
projects that had the goal of running non-JavaScript code in the browser. Most
of them operated by converting C++, or some other code like that, into
JavaScript and then running that JavaScript in the browser. That ended up not
working super well. It did work. Don't get me wrong. It did work, but it didn't
achieve all of the goals that were set up to be solved. The creation of
WebAssembly really was meant to solve, okay, how do we run more or less
arbitrary code in a sandbox that is up to web browser standards. Because I think
it's pretty well known that web browsers run sandboxed code because you're
downloading random stuff from random servers and you're executing that on your
local machine so it's required that a very tight sandbox is formed around that
execution. WebAssembly was designed with all of that in mind.

You can compile Rust, C++, Swift, Go, all these different languages to
WebAssembly. No matter where it came from, no matter how that code started off,
it will still run in a nice, tight sandbox with a bunch of other nice properties
that I'm sure we'll get into later.

**David Mytton** (04:25): That makes sense. Why would you want to do this rather
than just writing JavaScript, which has basically become the native language of
the web?

**Connor Hicks** (04:35): This is probably the first question that everybody
asks when they're talking about WebAssembly. I think the biggest answer is
probably the performance story. You can have code that was compiled from a very
lightweight, very high-performance compiled language like C or C++ and you can
run that in the web browser at near native performance, which can often be
better than JavaScript.

Now, people upon hearing that assume that WebAssembly is this super
high-powered, high-performance thing and that's what it's for. I will say that,
by default, it can actually be the same speed as JavaScript or maybe even a
little worse if you don't take certain things into consideration. It's not yet,
at least, a silver bullet. It's not perfect. It's still very young as a
technology, but there are plenty of ways where you can get immensely better
performance off of something like rendering 3D graphics or running ML models or
doing computationally heavy activities, you can indeed get much, much better
performance than JavaScript in certain cases. That would be the number one.

The number two reason I would say would really just be like language selection.
Not everybody wants to reach for JavaScript. Not everybody is a JavaScript
developer. It can enable teams that have maybe a backend team or an ML team that
are not native JavaScript developers, or maybe what they're trying to do just
isn't well suited for JavaScript in the first place. It can enable those other
teams to build what they've written into WebAssembly and then maybe hand it over
to a web app team where they can then embed it into their web app by wrapping it
in some JavaScript.

**David Mytton** (06:23): That makes sense. What kind of use cases have you seen
WebAssembly being successful with?

**Connor Hicks** (06:30): We are seeing a lot of 3D graphics and rendering in
the web browser. Some of the earliest demos of WebAssembly was the classic run
Doom because that seems to be the first thing that everybody reaches for when
they're demonstrating a new technology. We have seen a lot of that. I've talked
to companies who are using it to render CAD models. There's Figma, who's using
it as a plugin system to help, and I think it's in fact, a big part of the
rendering system for a Figma documenter, their FigJam whiteboard plugins. That
is really one of the biggest use cases. Then we are also seeing the emergence of
some ML models come out now where you can actually run a model right in the web
browser and have it get really, really good performance, especially when you
combine it with things like web-workers and a bunch of other technologies to
really make things fly.

There's the server-side use cases, which is really what we focus on as a
company. The same benefits apply there. You have the portability, you have the
security and sandboxing, and then you have the performance, which all lend
themselves very well to serverless and functions as a service-type abuse cases.
That's where we see a lot of potential. That's where we do a lot of our work and
kind of goes to show that this is actually a generic technology that can be
applied in many different areas. There are a bunch of different companies and
teams focused on a bunch of these different areas. We're all seeing quite a lot
of progress, especially over the last year or two.

**David Mytton** (08:01): That's interesting because, I suppose, like you said,
WebAssembly has come to be associated with the browser and implementing things
faster or those specialist use cases in the browser. Using it as a backend
technology, is that less well known? Why would you choose that over writing in
Go or Python or Rust or anything like that?

**Connor Hicks** (08:23): It is definitely on the newer side of the spectrum for
WebAssembly. Like I said, it did start out as a browser-based technology, but
maybe four or five years ago, people realized that it is just a generic way of
running sandbox code. Some smart people said, "Hey, let's extricate WebAssembly
itself from the web browser and let's make it available in other environments."
They did and there are a number of standalone run times that you can use now.

The Bytecode Alliance, which is a conglomeration of companies working on
WebAssembly, they have a runtime called Wasmtime. Wasmtime is a standalone
WebAssembly executor for non-browser environments. You can embed it in all sorts
of different environments. We use it on the server. The biggest benefit that we
see is in the sandboxing properties when it comes to supply chain security,
protecting yourselves from attacks like the log forge vulnerability that
happened a few months ago and ensuring that the software that you deploy can do
exactly what you want it to do and nothing more. Any kind of malicious packages,
third-party dependencies, anything that goes wrong can actually be blocked by
the sandbox of WebAssembly's runtime.

This allows us to have a slightly better peace of mind when it comes to running
the software that we know depends on just an enormous amount of potentially
untrusted third party code and still get the performance that we get from the
average piece of software being deployed. And because you can compile all of
those languages you just mentioned to WebAssembly, you actually don't lose the
ergonomics of the language that you're comfortable with because if you're a Rust
developer or a Go developer or whatever, you can still build WebAssembly
artifacts from that and gain the sandboxing and portability that you otherwise
wouldn't have.

**David Mytton** (10:23): I'm thinking about how serverless environments benefit
from that in particular, I suppose, because if you think of AWS Lambda, they use
the Firecracker VM and behind the scenes to run your code. Is it the case with
WebAssembly that just wouldn't be required because of the inherent sandboxing
within its own runtime?

**Connor Hicks** (10:44): Yeah, the comparison between WebAssembly and things
like micro VMs and containers is probably one of the biggest misconceptions
about WebAssembly because people are constantly pitting these two technologies
against each other when in fact they're not mutually exclusive. The way I like
to describe it generally is that a micro VM or a container is something that's
trying to emulate an operating system and is very useful for a wide variety ...
as we've seen, it's become one of the most popular ways of running software.

But a WebAssembly module is actually more akin to just a single program or a
single programming library even. It is not designed to emulate the entire
operating system. You can't run a curl binary inside of a WebAssembly module.
You don't have all of the user accounts and permissions and all of that kind of
stuff that comes with an operating system. When you run a micro VM like
Firecracker, when you run a container like Docker or OCI or whatever, it is
attempting to emulate an operating system. It comes with a lot of very useful
tools, but also a lot of overhead and a lot of baggage that comes along with
that, including security and performance implications.

When you run a WebAssembly module, it's not starting up an operating system.
It's not doing any of that stuff. It is simply executing the bytecode of your
program that you have compiled. There's absolutely no reason why you can't do
that within a micro VM or a container because like I said, it is akin to a
single program. Combining those two technologies is completely feasible and we
do it every day. One of our main projects is designed to run WebAssembly inside
of Kubernetes. They're more so, I would say, complementary technologies rather
than either/or, but they can accomplish similar goals depending on what you are
using them for.

**David Mytton** (12:36): That was going to be my next question about what the
clustering story is for running those WebAssembly binaries because if you've got
a load of containers, then you put them on Kubernetes and that makes sense. How
are you running those binaries on Kubernetes in production?

**Connor Hicks** (12:53): We have a couple of open source projects that allow
you to run WebAssembly in the cloud. We have one called Atmo, which is kind of
our flagship project. It is designed to run WebAssembly-based applications in
Kubernetes by packaging up the runtime, the server-side environment, all of your
WebAssembly binaries, et cetera, into a standard Docker container and then
running that in Kubernetes and then creating auto-scaled meshes and a bunch of
nice networking features to go along with that.

But then we also have a project called Sat, which is designed to be run in more
edge environments and resource-constrained environments. We've tailored that
project to Bare Metal because one of the core beliefs of the company is that
WebAssembly on Bare Metal is actually going to be a better solution for edge
environments than Kubernetes and containers.

That's not to say that we think Kubernetes or containers are going to go away,
by any means, because we still think that's the best way to run software in
central cloud, in us-east-1, but when it comes to these more
resource-constrained environments, when performance, especially performance per
watt is incredibly important, disc space is important, memory is important, all
these things need to be accounted for, we actually think that the efficiency of
WebAssembly running on Bare Metal is more efficient and is going to be a better
long-term bet for developers.

We're kind of tackling both of these routes, I suppose, to deploying WebAssembly
where you can build an Atmo application and you can deploy it onto Kubernetes
with a single command or you can package up your application, ship it to Bare
Metal instances and we have a cluster manager called Consti, or Constellation
Damon, that will actually execute and run your entire WebAssembly application as
a series of serverless functions right on Bare Metal without any containers
involved.

It's really a spectrum. It's really about what are you trying to accomplish?
What does your team need to be able to do? Where are you deploying the
application? Very often it will be a marriage of the two. You'll have certain
portions of your application running on the edge. You'll have certain portions
running in the central cloud. There's absolutely no reason why those things
can't cooperate to create a really great application.

**David Mytton** (15:10): What is the experience like for developers writing in
WebAssembly, presumably you don't write it directly, you write it in a higher
level language and then compiled to it?

**Connor Hicks** (15:19): Yeah, exactly. The vast majority of developers are
writing Rust or they're writing Go or they're writing JavaScript or
AssemblyScript and they are being compiled to WebAssembly. Most of the languages
have this capability built into their tool chain.

Rust is the winning language, I suppose, you could say here in terms of
first-party compatibility. Rust has had WebAssembly built in directly for years
at this point. Other languages are starting to catch up now, but where the
language doesn't fully support WebAssembly, there are often third-party or open
source projects that fill in the gap. For example, Go has actually been able to
compile with WebAssembly for a long time, but they're a little bit behind the
standard in terms of the support that's built into mainline Go.

There is a project called TinyGo that has come up. It was originally designed
for running Go on micro controllers, but they also realized that, "Hey,
WebAssembly is a really good target for our compiler," and so they built
WebAssembly into TinyGo as well. It's actually a more up to date implementation
than the mainline Go. There's a bunch of examples like that. It's a similar
story for Swift. It's a similar story for JavaScript where you have the
community coming together and making things work in WebAssembly until the
language itself and the tool chain catches up at which point things tend to get
merged into upstream or whatever.

It's really a story of portability because any developer, at least the goal, is
that any developer, no matter what language they're using, should be able to
target WebAssembly. I'd say we're about 80% of the way towards that ideal goal.
There's still some hurdles. There are still some rough edges, but for the most
part, any language you use, you can probably get it to WebAssembly.

**David Mytton** (17:02): You mentioned AssemblyScript. Where does that come in?

**Connor Hicks** (17:04): AssemblyScript is a very interesting project. It was
started because the creators didn't really believe that mainline JavaScript and
TypeScript would add support for WebAssembly. They wanted to create a language
that was familiar, like TypeScript, but was native to WebAssembly. They
essentially took the syntax of TypeScript and they bundled it with a
WebAssembly-native compiler. It's not using the regular interpreters and
JavaScript engines that TypeScript normally runs in. They built a custom
compiler that takes TypeScript syntax and compiles it directly to WebAssembly.
You do get a very high-performance language there. The kind of trade off you're
making is that you lose a big part of the NPM ecosystem just because the average
NPM package, it was not written with the AssemblyScript compiler in mind. While
you do get very efficient code and you do get a very familiar syntax, it's
actually kind of a Venn diagram with the NPM ecosystem rather than the full NPM
ecosystem.

More recently, there has been an effort to run JavaScript and TypeScript
directly within WebAssembly rather than having a separate language that
compiles. Something we did is we worked with a team at Shopify on a project
called Javy. It's something that they started to run a JavaScript engine inside
of WebAssembly. You actually take the entire JavaScript interpreter and runtime,
you compile that part to WebAssembly and then you feed it the JavaScript or
TypeScript that you want to actually run and it runs the WebAssembly as if it
was any other environment. What we get is a very interesting hybrid, I guess,
between WebAssembly and JavaScript, where you get the additional sandboxing that
you would get from WebAssembly, especially in a server-side context. That can be
really useful. Maybe not quite as useful in the web browser that's already
tightly sandboxed, but you can run this code that you are very familiar with,
you get the full NPM ecosystem and you get the WebAssembly portability and
performance that is really nice to have.

The nice thing about WebAssembly is that you can snapshot its memory. What we
can do is we can actually pre-initialize a WebAssembly module by interpreting
and pre-compiling the JavaScript at build time. Then when you go to run the
code, all that work that is usually done at the beginning of execution has
already been done. You still get really high performance. There's some really
fun hybrids, I guess, between languages and the WebAssembly technology that you
can do to optimize things and make it really perform the way that you need it to
perform.

**David Mytton** (19:53): Right, all these performance optimizations. I suppose
you wouldn't really want to run another JavaScript engine inside WebAssembly
inside the browser, right? That would be more for their edge use cases?

**Connor Hicks** (20:05): Exactly, yes. This is where we want to emulate, say
you have a team that is very used to building server-side software in NodeJS, we
can port that over to run inside of WebAssembly and gain a bunch of security
benefits that doesn't natively come with NodeJS.

**David Mytton** (20:19): Yeah, that makes sense. Does this mean that you
wouldn't rewrite your entire application in WebAssembly, it would just be the
performance critical components?

**Connor Hicks** (20:28): That really depends. I would say when it comes to
building a web application, you have a React application and you want to do some
performance-intensive tasks, I would say absolutely. Adding on WebAssembly as
one of the components of your app makes a lot of sense and having the rest of it
run as native JavaScript, sure, that absolutely is probably the norm these days
for people adopting WebAssembly. But then on the server, I think it does make
more sense to have your entire application running in WebAssembly because of
those third-party security considerations that we talked about before, ensuring
that every single component in your server architecture is adhering strictly to
these sandboxing properties and making sure nothing malicious is going on, I
think that actually makes a lot more sense. That's kind of what we're striving
for with our Atmo project.

**David Mytton** (21:13): What are the common tools that developers will be
using once they've written their code, let's say in JavaScript or Rust? How do
you see the life cycle working through to, I suppose, compiling, deployment,
debugging, all those kinds of things?

**Connor Hicks** (21:29): This varies wildly by language. Like I said before, if
you're using Rust, it's kind of all built into the Rust tool chain. You can use
Cargo. You can use Rust C, all of the tools that you're used to. You just tell
it which platform you want to compile to, which is WebAssembly, and it all just
works.

For other programming languages like Go, you may choose to use TinyGo. For
Swift, there's the Swift Wasm project. It really depends on the language you're
using. We do try to package all this up into a single command. We have a CLI
called Subo that helps you configure all these tool chains and you just run Subo
build, but that's for the server-side context. If you are building for the web
browser, you will very likely be interacting with the tool chain for the
language you've chosen directly or you can often integrate with a couple of
different tools like Webpack, or there's a WebAssembly-specific bundler called
Trunk that you can use. These often get glued together to get the setup that
you're really hoping for.

Then once you've built your WebAssembly, you can use JavaScript's native APIs to
run it in the web browser. You can use our server-side frameworks Atmo and Sat
to run it on the server. Then when it comes to debugging, this is where we hit a
snag because debugging in WebAssembly has not yet been really standardized and
fully adopted across all of the languages. Depending on the language you use,
you could have a pretty fine time with debugging or you could have not so great
at time. This is actively being worked on. If you're listening to this six
months after we are recording it, it will probably be a vastly different story,
but there are a bunch of efforts to standardize how debugging works in
WebAssembly. You will hopefully, a couple of months from now, get a more
consistent experience.

Doing things like attaching a debugger to a WebAssembly program and stepping
through and doing all the kind of classic debugging tasks that you do is not
currently that great of a story. There is a fair bit of print line debugging
that goes on, which depending on who you are, like me, that's just your standard
so it's no big deal, but if you're hoping to attach a more sophisticated
debugger, you're going to have a varied experience depending on which language
you're using.

**David Mytton** (23:40): What would you say is the best experience currently?

**Connor Hicks** (23:43): I would say Rust gives the best experience. This is
going to be the answer you get for almost anything related to WebAssembly. Rust
probably gives you the best experience. I know if you use MScript, and with C++,
you also get a pretty good experience there as well. But if you're looking at
using Swift, or if you're looking at using Go or JavaScript, TypeScript or
AssemblyScript, I think there's still some work to be done.

My own knowledge might even be out of date. That's how quickly this is moving.
It could have changed last week and I just didn't notice. Take it with a grain
of salt and do the research, I would say, on the language you want to use and
just look into that debugging story for yourself just before you embark on a
gigantic project, perhaps.

**David Mytton** (24:23): What about deploying to production? What are the steps
involved in that and how do you think about updates and all those kinds of
things?

**Connor Hicks** (24:33): With a web application, it is a pretty familiar story.
You serve the WebAssembly module as a single file just as part of your web
application and the JavaScript code will load it and make it available for
execution. It's relatively transparent in that it kind of acts like a library.
Once you've loaded a WebAssembly module, you can call functions, you can execute
it from your JavaScript code and it's relatively intuitive and easy to
understand.

From the server-side context, there are a varied number of ways that you can do
it. The approach that we take with our projects is that we handle the web
server, we handle TLS, we handle all of the normal web server parts. Your
WebAssembly module is just a function that is executed as part of that web
server. The nice thing about this is that they are hot swappable. We can do some
incredibly convenient things where we can actually swap out the functions being
run without dropping any network connections. Because the Atmo server is running
constantly, and that is the thing handling requests, it can swap out your
business logic in real time without needing to close any network connections or
terminate the host process.

The normal way that we have people deploying these days is you package your Atmo
application into a Docker container, you deploy it onto Kubernetes, or if you
publish your application to a registry, there's a project called Bindle, which
is kind of the current up and coming WebAssembly registry project, you can
publish your project to a Bindle registry and then our Sat project can actually
pull that locally to edge nodes and run that using the Consti scheduler that I
mentioned before.

These are varying in familiarity for somebody who's used to deploying on
Kubernetes. Using Atmo will just feel like any other server software that you've
ever deployed, but because edge is still a relatively new environment for
everybody, nobody's really standardized on any one thing, it may not be as
familiar to people who have never really used an edge environment before, or
even if you have, it's going to vary depending on whether you choose to use us
or CloudFlare or Fastly or whatever. But, the overall goal is that you should
just be able to push to get or merge a PR into main. It all gets built and it
all gets deployed automatically onto the edge. That's currently the story we're
showing off.

**David Mytton** (27:03): In terms of observability, is that just a case of
pulling the relevant libraries that you might already be using for whatever
language you're using? Datadog or CloudWatch or Honeycomb, they all just work as
is?

**Connor Hicks** (27:15): We're pretty deep into the open telemetry ecosystem.
Honeycomb and Datadog, they all support open telemetry. That's kind of what
we've centered around, I suppose. Open telemetry is built into all of our
projects and you can ship your traces and your observability data just as you
normally would.

**David Mytton** (27:34): It makes sense. Before we wrap up then, I have two
lightning questions for you. The first one is what interesting tools, they can
be general or they can be dev tools, what are you playing around with at the
moment?

**Connor Hicks** (27:46): I'm currently off the Kubernetes train, personally.
I've gotten a little frustrated. I used to run Kubernetes in my closet server
rack for a long time. I'm currently delving back into the world of HashiCorp
Nomad, just because I think it's nice and simple. It can solve a lot of
problems, especially for something simple as a home lab. It, I think, lends
itself a little bit more easily to those use cases. I'm trying to dive a little
bit deeper.

I would say the other dev tool that we've really adopted, actually there's two,
now that I'm thinking of it. We've been really enamored with GoReleaser, which
is a pretty popular project. We're really basically just putting that
everywhere. It's so easy to deploy new versions of software. It's a no-brainer.

Then the other is Caddy, a web server, which is being used in some of our edge
deployments because it is extreme efficient and it has incredibly good support
for just tons and tons and tons of TLS certificates because we are terminating
the TLS for all of the domains of all of our customers. We're doing that on
demand. Caddy has a lot of really good, built-in functionality for that. We're
really quite in love with Caddy over here at Suborbital.

**David Mytton** (29:05): Then secondly, what's your current tech setup? What
hardware and software are you using?

**Connor Hicks** (29:11): I've always been a Mac person. I have an M1 Pro 16
inch. I have it plugged into a 34 inch ultra-wide. I've been an ultra-wide fan
for many years now. I have a lot of Elgato equipment for streaming and recording
and all that kind of stuff. I have a Drop mechanical keyboard. I've got a
Logitech mouse, VS code. We use Discord for all of our company communications
and our community as well. I'm a Firefox browser user. We do a lot of Notion and
we use Miro for diagramming and whiteboarding quite a lot. We're pretty happy
with all of those things.

**David Mytton** (29:52): Great. Well unfortunately, that's all we've got time
for. Thanks for joining us, Connor.

**Connor Hicks** (29:57): My pleasure. Thanks for having me.

**David Mytton** (30:00): Thanks for listening to the Console DevTools podcast.
Please let us know what you think on Twitter. I'm @DavidMytton and you can
follow @consoledotdev. Don't forget to subscribe and rate us in your podcast
player. If you are playing around with or building any interesting dev tools,
please get in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
