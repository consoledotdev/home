---
title: Dev infrastructure
who: Guillermo Rauch
whoLink: https://twitter.com/rauchg
org: Vercel
orgLink: https://vercel.com/
what:
  We discuss the meaning of “developer experience”, how complexity is managed to 
  help developers get started quickly but still be able to scale multiple 
  systems, the role of monorepos and monolithic application architectures, and 
  how to think about globally deployed serverless databases.
season: 3
episode: 1
date: 2022-06-09T06:00:00Z
duration: 37:16
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/2b5ac6a6-f2cc-47d9-a8e3-3f0fd119d5b8/audio/9144e827-a74c-41d3-a7f1-0c865495835d/default_tc.mp3
draft: false
summary:
  Dev infrastructure - a devtools discussion with Guillermo Rauch (Vercel). 
  Episode 1 (Season 3) of the Console DevTools Podcast.
metaDescription:
  Dev infrastructure - a devtools discussion with Guillermo Rauch (Vercel). 
  Episode 1 (Season 3) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/vercel-guillermo-rauch-profile.jpg
topImg2Src: /img/favicons/vercel.com.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/2b5ac6a6-f2cc-47d9-a8e3-3f0fd119d5b8
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server 
  Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute 
  and cyber security company, StackPath. He is also researching sustainable 
  computing in the Department of Engineering Science at the University of 
  Oxford, and has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode I speak with Guillermo Rauch, CEO of
[Vercel](https://vercel.com/), a platform for globally distributed applications.
We discuss the meaning of “developer experience”, how complexity is managed to
help developers get started quickly but still be able to scale multiple systems,
the role of monorepos and monolithic application architectures, and how to think
about globally deployed serverless databases.

Things mentioned:

- [Vercel](https://vercel.com/)
- [NextJS](https://nextjs.org/)
- [TurboRepo](https://turborepo.org/)
- [Copilot](https://copilot.github.com/)
- [Neovim](https://neovim.io/)
- [Edge functions](https://vercel.com/features/edge-functions)
- [SvelteKit](https://kit.svelte.dev/)
- [MacBook Pro M1](https://www.apple.com/macbook-pro/)
- [Notion](https://www.notion.so)
- [Slack](https://slack.com/)

{{< rich-title-5 icon="future-head" >}}About Guillermo Rauch{{</ rich-title-5 >}}

Guillermo Rauch is CEO of Vercel. Before starting Vercel in November 2015,
Guillermo was the CTO and co-founder of LearnBoost and Cloudup, acquired by
Automattic in 2013. He is the creator of several popular Node.js open source
libraries like Socket.io, Mongoose and Slackin. Prior to Node.js, he was a core
developer of the MooTools frontend toolkit. Passionate about open source as an
education medium, he is a former mentor of an Open Source Engineering class
organized and pioneered by Stanford, with students from Harvard, MIT, Carnegie
Mellon, UPenn, Columbia and others.

### Highlights

{{< podcast-episode/clipping time="04:00" >}}

**Guillermo:** I think there's this idea of capturing the attention of the
prospective developer in the most concrete and material way possible. If you pay
enough attention to hacker threads or like Twitter comments, when people
announce things, common feedback that developers give you is, I literally do not
understand what this tool or website or service does. So I think I was... I
always recommend iterating a lot in that crucial first impression that can
captivate that interest.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="12:09" >}}

**Guillermo:** I think you need one place to do your work. You need one
platform. Ideally, you need one repo where all of the good ideas, the shared
APIs, the shared libraries, the shared dependencies, the component systems are
there for everybody to learn from, remix, utilize, import. And it has to be
very, very easy. What I do not subscribe to is that that is one system that gets
deployed as one monolithic unit, whether that's one container, whether that's
one cluster. I think the world is getting extremely decentralized. I think one
of the key innovations of Next JS was when we compile your project, obviously,
you can deploy to a container if you want, and many people do so. But when you
deploy on Vercel, we automatically transform it into globally optimized
serverless infrastructure. 

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton** (00:05): Welcome to the Console podcast. I'm David Mytton,
co-founder of console.dev, a free weekly newsletter highlighting the best and
most interesting tools for developers. In this episode, I speak with Guillermo
Rauch, CEO of Vercel, the platform that enables development teams to collaborate
on and ship their best work.. We discuss the meaning of developer experience,
how complexity is managed to help developers get started quickly, but still be
able to scale multiple systems, the role of monorepos and monolithic application
architectures, and how to think about globally deployed serverless databases.
Keeping this for 30 minutes, so let's get started. I'm here with Guillermo
Rauch. Guillermo, thanks for joining the Console podcast.

**Guillermo Rauch** (00:50): Thanks for having me. I'm really excited.

**David** (00:53): Let's start with a brief background. Tell us a little bit
about what you're currently doing and how you got there.

**Guillermo** (00:58): I'm the CEO and co-founder of Vercel. It's a platform
for enabling developers to do their best work on the web, especially for
front-end developers. And we also build Next JS, that famous framework for react
based applications that's used by some of the largest websites on the internet.

**David** (01:17): Right. And you've had quite a specific focus on this idea
of developer experience. So can you explain what that means to you?

**Guillermo** (01:26): Yeah, for sure. The way that we look at developer
experience is about reducing the time that it takes to give a developer that aha
moment when they come to using our tools, products, and services. I'm a deep
believer on the idea of the state of flow for a developer and sort of maximizing
their time and productivity. So for me, developer experience is really
everything that goes into building products and services for DevTools and
developers that really enable them to be as productive as possible and get rid
of everything that's unnecessary. So concretely, when we built Next JS, that
meant getting rid of all the configuration that it took to create a production
grade front-end application using the most modern and latest techniques.

And on the cloud platform side with Vercel, it means deploying instantaneously
with no having to worry about scaling, managing, servers, infrastructure. So
kind of marrying the idea of a programming model rooted in a framework that's
really easy to use, provides instantaneous feedback to the developer with a
cloud platform that's really easy to use, and scales from a small idea to a
global and massively successful application.

**David** (02:43): And are there any principles that you can suggest the
developers.. I suppose, from a product perspective, what should designers and
developers think about if they wanted to provide a good developer experience?

**Guillermo** (02:54): Yeah, sometimes I even think of this as like, I have
all these patterns and formulas that I constantly think about when I'm
evaluating DevTools, when I'm providing advice to our teams that are building
new products. So something that I touched upon earlier is that instantaneous aha
moment. I used to think all it takes for me as a developer, and that's really my
background, to fall in love with the idea of a solution is to maybe open up a
repo in GitHub and within the first few lines of the ‘readme’, something
captivates my attention because it's really going after the concrete problem
that I have in an actionable way, whether it's this snippet of code that
represents the solution, whether it's a command that I can run, that tells me
how the... or gives me hint of how the program or software is going to work
later on, or even just the way that it talks about the problem space.

I think there's this idea of capturing the attention of the prospective
developer in the most concrete and material way possible. If you pay enough
attention to hacker threads or like Twitter comments, when people announce
things, a common feedback that developers give you is, I literally do not
understand what this tool or website or service does. So I think I was... I
always recommend iterating a lot in that crucial first impression that can
captivate that interest. So for us, we think about when we introduce Vercel, we
said, it's literally one command to deploy a project. And we give you a hint of
what the shape of that project is. So today I would tell you there's a project,
and it has one of our 35 plus known front-end frameworks inside. So imagine it
has an Next JS project inside, and you just run NPX Vercel inside that project,
one command. What do you get in return? A URL of the deployed project.

So I think in maybe three frames of an animation or seven lines of a readme, I
walked you through input requirement, the shape of that project, the thing that
I need to provide service to you through the action that you need to take and
the output of taking that action. So I give you the entire journey as compressed
as possible. And I think that's going to... How we think about this thing that
now gets called product led growth. To us, it always came naturally from that
point of view of like, people don't have time, short attention spans, super
highly competitive space, lots of solutions out there. Try to focus on that
developer experience and that time to value, being as short as possible.

**David** (05:51): Over the last decade or so, we've gone from data centers
to centralized cloud, and now we're seeing certain products unbundled. But with
this specific focus on the developer experience and that first run experience,
why do you think this is happening now?

**Guillermo** (06:05): I think the idea of infrastructure as a service really
changed everything, right? Like it used to be that you had to talk to sales, you
had to like discuss licensing of software. You needed a lot of handholding to
figure out complex steps of integration. There weren't any standards APIs and
adapters that people could plug and play or assume that the buyer even had in
place. Now, I think with cloud, all of that has, for the most part, become
standardized. And we continue to go down this path of bigger and better
standardization for a lot of efforts. So when I think about observability, for
example, OpenTelemetry is an assumption that in the coming years, and to a large
extent, even today, we're going to be able to make that assumption that you have
something that produces that. So when I present the next service to you, it's
like they can say, "Well, if you have that in place, look at how easy it is for
you to adopt this. You don't even need to talk to me to do that. Go ahead and
try it out."

So I think we're seeing that transition toward a different way of adopting
software solutions, trying them out, paying for them. We're seeing this
obviously with the serverless revolution where it's really all about paying for
what you use. It's all about efficiency. It's all about experimentation on...
For example, on the Vercel side of things, every single commit gets deployed.
Every single branch gets deployed. It's about fostering that continuous cycle of
experimentation with great efficiency on the infrastructure side. So I think
what this is going to result in is that the prospective user of the technology
is going to continue to go down this path of A, making those assumptions about
the technology. Oh, of course it's serverless. Of course, scales to zero. And B,
it's just going to make them more experimental.

It's going to make them try out more things. So circling back to developer
experience, it's all about making that idea that you have to try to materialize
it into value into making something happen with as few steps as possible. So,
another example that I gave earlier is, we kind of make the assumption that a
lot of folks are in this process of decoupling monoliths into microservices, and
off the shelf back in APIs. Therefore, they have a front-end project of sorts.
For large organizations, they might have a monorepo effort in place, or they're
thinking about it. So that's why we give you tools like Turborepo, where the DX
(developer experience) is. Well, there's a monorepo somewhere, and there are NPM
workspaces. So why don't you just add Turborepo, which I think Jared, my
coworker shared, has saved people now two years worth of built times.

And DX of Turborepo is, we assume that there's a project with NPM Yarn
workspaces, and with basically one command and downloading the Turborepo Go
binary, you've already started saving money and time for your entire
organization. And furthermore, it provides us a structure around how you can
continue to evolve your code base. So that's an example of, there's a DX of
deeply understanding where you're at with your infrastructure, the way that
you're thinking about your projects, getting the timing right, providing the
tool that requires basically no configuration and is super easy to adopt. And
then also connecting you to the value that comes from that. In this case, we can
even count in terms of like minutes that we save you in how long you're waiting
for a necessary compilation to happen. So I think what you'll notice in the way
that I talk about this, is that I never try to talk about DX in isolation
because I think DX with that value prop is not enough.

Sometimes you have to still start with DX because you can uncover where the
value really gets created. So it's like an exploration. So for example, for us
with Vercel, we knew that, okay, it's going to be really slick. If we make it so
easy to get that URL of a live pre-prod environment of your project as
instantaneously as we can. What we realized is that that ends up being a... The
value there is collaboration. It's about the frontend engineer being able to
send that hyperlink out to their coworkers, their design teams, marketing teams,
copywriters, communications, and then getting feedback. So that's one value
proposition.

Then when we thought about Next JS and production optimizations and things like
that, well, the value proposition there is web vitals is that when I push to
prod, after I got all those okays and all that great feedback, I'm delivering
value for the end user. So the site is really fast. The site is global. The site
is personalized. So I think it's all about marrying the idea of DX with some UX
or some value prop for the team. And I think if you don't have both, a lot of
DevTools end up being just like DevTools, and they don't really create
significant business opportunities or significant ecosystems around them.

**David** (11:29): So it's on this path to value. And that means that
developers can iterate and experiment a lot faster than they have been able to
in the past.

**Guillermo** (11:39): Correct.

**David** (11:40): And you mentioned the idea around monorepos and how that
was a pattern in the past, and things have been split out into the service
architecture and microservices.

**Guillermo** (11:49): Yeah. Monoliths.

**David** (11:51): Yeah, the monoliths. Exactly. And we're starting to see
the idea of the monolith and the monorepos coming back and they're fighting back
with the idea, the majestic monolith, I think is the one of their catchphrases.
What's your take on that? Why do you think things are coming back? Is it to do
with simplicity?

**Guillermo** (12:09): So I think this is obviously what Vercel is proposing,
right? I think you need one place to do your work. You need one platform.
Ideally you need one repo where all of the good ideas, the shared APIs, the
shared libraries, the shared dependencies, the component systems are there for
everybody to learn from, remix, utilize, import. And it has to be very, very
easy. What I do not subscribe to is that that is one system that gets deployed
as one monolithic unit, whether that's one container, whether that's one
cluster. I think the world is getting extremely decentralized. I think one of
the key innovations of Next JS was when we compile your project, obviously you
can deploy to a container if you want, and many people do so. But when you
deploy on Vercel, we automatically transform it into globally optimized
serverless infrastructure. So what does that mouthful mean?

If I have an API directory where I have a bunch of files, Vercel will convert
those under the hood to serverless functions. These serverless functions are
optimized for doing one purpose. They can be geographically distributed and
co-located right next to the data source where they should be. They
independently scale and fail and fail over. So really, what you're getting is
the developer experience of a monolithic system, because when you work on an
NextJs project on localhost, you run ‘next dev’, and we're basically giving you
the illusion that everything is in one place. And we're almost simulating a
global cloud environment, right? You can use cache control. You can use CDN
features. You can use our incremental static regeneration feature, which allows
you to get the best of both worlds of server side rendering and static
generation. And all of those things work locally.

Now, when you deploy them to these modern platforms, it's truly cloud native.
You're using a framework that can be optimized for the primitives of the modern
cloud, as opposed to just be confined to a legacy box. In that process, or that
opportunity that we have is I think really the key to this idea of you get one
place to work, you get one repo, you get one system, but then we're doing the
best that we can when it gets deployed. I think sometimes folks conflate the two
ideas. They think that their monolithic system is great for productivity and
great for the actual runtime performance because it just feels so easy to use.
And it's like, oh, it's in one place. I don't have to worry about all those
things. But I think you can still retain those benefits. When you use monorepos
and when you use these modern frameworks, you still get those productivity
benefits, but you don't get the monolithic slower, single point of failure, less
scalable system.

**David** (15:16): Right. And then when it's deployed out to all these edge
locations, that's still somewhat transparent to the developer, right? They don't
necessarily need to care that it's in 20 different data centers, 20 different
pops. It all acts as a single region.

**Guillermo** (15:30): Yeah. So sometimes you do need to care. So the speed of
light is a thing, obviously, right? And I think this is also another thing that
is worth discussing that is happening to cloud as well. Right? I think as we
transition to the future of the cloud, we got to make sure that we utilize all
of what it can offer. Right? Like this is what I truly mean by cloud native,
right? We've seen services and solutions that have come along over time that
literally replace legacy solutions that were... I'm thinking about Snowflake
here, where the metaphor is like cloud native versus cloud pretender. Cloud
pretender is, I had legacy software. I virtualized it in a box in the cloud.
Cool. That's better. You've saved some efficiencies. You're no longer managing a
data center. Things like that. But you're still not really getting all of the
benefits of cloud.

Like maybe there are parts of your application that if they use the object store
functionality offered by your cloud provider, have much greater efficiencies at
scale. For example, instead of trying to like figure out how to use a local
attached device onto the rack. That whole category of optimization, we now went
onto the next phase of the evolution where like, okay, you're getting the same
interface. You're getting the same developer experience, but now everything is
optimized for what the cloud has to offer. I think the final swing on this is
that the cloud was meant to be a global platform. And it was meant to be above
every visitor's heads. Right. That's what like a cloud implies, but we haven't
had the frameworks or the platforms that really expose the right programming
models and the right built steps, as I mentioned, to actually take advantage of
this global cloud. And Next JS and Vercel are doing this.

And for the most part, to your point, you don't have to think about the
underlying primitives that get created too much, but you do have to think about,
okay, data has an origin, data might have multiple locations in which it has to
reside from a legal perspective. You do have to personalize. One of the great
things about this dynamic edge functionalities that we're adding to Next JS, is
that, well, I can think about, okay, what happens to my homepage, for example,
for a storefront, if the visitor is coming from London as opposed to California.
So I think it's a combination of hiding some of these details, but also raising
the meaningful ones into how you're programming these applications. And that's
what I think is going to enable this whole new category of new services and
tools that we'll see in the next coming years.

**David** (18:20): What about databases? Because latency can have a real
impact on performance there.

**Guillermo** (18:27): Yeah. I think there's two exciting things that are
happening in the space of data. One is, most of the modern database providers
are going serverless, right? So they're telling you, you don't have to think so
much about an allotment of clusters and containers and instances of your
database and which one is the replica? Which one is not the replica? And what is
the URL of my data node? And is it available? And all these things. Connection
pools and things like that. So that problem is getting out of the way. With that
new freedom, what comes is the opportunity to basically have your database
dynamically scale, according to the load that your application puts on it.
However, one of the key things that we've discovered throughout this process of
like, okay, how do we create global applications if the data is not yet globally
distributed, is that we can do really smart things in terms of grabbing the
data, rendering pages and pushing them out to the edge.

So this is something that Vercel has added. It's a very unique value proposition
where, when you get Next JS, and this was by design even back in 2016. We said
the data layer is completely pliable. We're not married to a particular data
store, database, ORM solution, et cetera. The next logical step to do there is
that okay, if we can grab data and we can cache it, push it to the edge, and
then track subsequent changes to it, it doesn't really matter if the data is in
every single location where it can be consumed. But it can be globally and
lazily sometimes replicated according to user demand. So not only do we have
that elasticity of scale on the serverless database side, we also gain the
elasticity of scale on the consumer side. When you're hitting a page, we're able
to basically remove a lot of load on the AppStream database.

So this is something that we make the developer experience so magical that it's
worth emphasising and explaining because a lot of feedback that we hear about
our system is, it's amazing how it just scales. Or we see a lot of tweets that
say, "Oh, I saw that you were having trouble with your site. Just move to
Vercel. You're not going to have trouble staying online ever again." And this
going back to the developer experience is one of those things where, because we
gave you the framework and we give you the right shapes, and you filled them
with your hooks and content, you cannot get into this scenario where, oh, now
all of a sudden, I have a global application that not only performs really well,
but withstands huge spikes in traffic.

So that's one thing where like, yes, like the database being serverless, perhaps
today more important the database being global. However, I think the two key
things to add to that is one, is the ability to have an honor data residency
requirements next to where customers are. I think serverless databases are going
to have another advantage there because it's so much more natural to spin up
multiple right locations of your data stores without having to be burdened with
the idea of like, where is the infrastructure for all of this? And do I have to
patch it, upgrade it and maintain it. So I think that's going to be a key
requirement moving forward. And I think better integration between this data
layer and framework like Next JS, so we can continue to automate that idea of,
well, what if I could automatically recompute parts of my application, even in a
granular fashion, not just the entire page, but portions of the page whenever my
database is changing?

And this goes back to the source of truth of the application. The thing that
sees all the mutations and reads is the one that can inform and unlock a lot of
this innovation. Whether it's GraphQL, where the gateway is seeing all the
mutations and can do really smart things around caching and invalidation. But
also, marrying that into the application layer. Such that I can annotate my
components with their data requirements and get all these benefits around. Not
just like caching, because caching sounds like a boring thing that just gives
you more read throughput. But even automatically making your application real
time.

Because at the end of the day, it's almost like this global subscription system
for data. So I think it's exciting. We're seeing a lot of this requirements
really come from folks that are scaling really fast, folks that are in the Web3
space that have massive launches that receive huge amounts of traffic. And the
other thing that's interesting about that is, we're seeing this decentralization
really as happening where the compute is moving everywhere in the world. The
compute can go to the edge, can go to every major region, but the data also
needs to decentralize itself more over time in order to meet these new
constraints and new demands.

**David** (23:41): How do you think about managing the complexity of this?
Because there's obviously a lot of complicated components that go into this. But
you can just deploy a static HTML site and that's I suppose, the simplest
component. And it goes all the way to these massively scalable databases that
are serverless.

**Guillermo** (23:59): Totally.

**David** (23:59): How do you think about that?

**Guillermo** (24:00): Yeah, that's a brilliant question. So there's two main
things that come to mind. One is how we think about it strategically at Vercel,
or I should say even philosophically at Vercel. And the other one is, one tactic
that we can use to simplify this challenges. So on the philosophical side, we've
always had this idea of scaling up in the spectrum of complexity from the most
simple unit or primitive that you could imagine. So on Vercel, we let you bring
in an index.html file. In fact, even during this podcast, I can describe to you,
okay, go to any directory in your computer. Create a folder, put in a file
called index.html, and run vercel or vc for short. And you'll get a globally
deployed static website. Now, do I think that that's how Walmart, a large user
of Next JS that actually has a global data platform with multi-master rights to
minimize the latency for the checkout process in globally distributed data for
high fidelity stock and personalizing items for each store globally. Is that how
they're going to develop walmart.com? Absolutely not. They're going to have a
monorepo of dozens of Next JS applications with hundreds of engineers with this
micro frontends being federated as multiple serverless systems.

Now, can they give you a system that can smoothly upgrade itself over time to
that? That's what we go for. And that's what I would recommend to any
prospective DevTool or infrastructure platform person is think about that. I'm
going to use this during the weekend, and I need something really simple to
validate even the model of what you offer. Because like what's interesting is
that even in that exercise of deploying just index.html, you're getting a sense
for the fabric of the platform. You're getting a sense of like, oh, Vercel has
this concept of the preview URL. I can continue to modify that file, deploy,
deploy, deploy, and then get a preview. Oh, Vercel can integrate into GitHub, so
I can now put that HTML file in a repo. And every time I push, it gets deployed.
And they map the main branch to my .com.

So you get a sense of the workflow. And then you get a sense of the runtime
performance, which is... This is a thing that you recently interviewed the CTO
of CloudFlare. I've always thought that CloudFlare was so intelligent in doing
this. When you use the free tier of CloudFlare, you get the best enterprise
grade network that they offer. You don't get like a mini network of two nodes
that in 15 days gets turned off, and John Graham is calling you up saying like,
"Hey, you have to pay for a million dollars a day, or we're turning you off. And
please upgrade to this better network." So that's another thing that you get a
sense of that fabric of the runtime performance of the product, even when you're
not paying, even when you're deploying just an HTML file.

So we obviously learn from others in the industry there. So, okay. It's like,
what is the next step and to your point about there's growing complexity? Well,
what you realise is that some customers are going to be okay with simplicity at
the expense of maybe some other optimizations. Maybe some customers are going to
be just like, "I have a single page application. I just want to be static." But
another thing that DevTools, that are worth their while, I think can scale up to
the more advanced enterprise requirements. So for us, we actually started out
this other way. So we backed into giving you the simpler offering as well. But
our bread and butter has always been, we have to enable server side rendering.
We have to enable dynamism. That's the thing. That's going to scale for the more
demanding use cases. So Vercel gives you that journey.

And this is where frameworks like Next JS have been able to really expose the
benefits of our platform. Because on a per page basis, we give the developer the
ability to say, "Do you want to make this entry point into your application
dynamic?" And we fully admit and realise, and this is something that it is
really important to understand, is that dynamic comes with some additional
costs, right? Now we're running compute for every request. With edge compute,
we're making that really, really cheap. But there is a slightly higher margin of
error there compared to, I literally materialise my entire content into
something that's never going to mutate until I make it mutate. So we lead you
into this path of incremental upgrading into more complexity. We do that by...
For example, your first function that you deploy on Vercel, we default it to the
region that your data is likely to be in.

We don't tell you, "Oh, now figure out a global database." So if you do have
that situation, you can then take the next step and deploy global compute
primitives. And we give you the right framework hooks to make this almost
natural to the development story. We try not to have you read like extensive
documentation and guides and things to figure this out. So that's how we think
about it philosophically. It's that, scaling up in complexity, not having really
a ceiling in how complex the application can be because I think that would be...
go to another platform when you get to a certain size and that's not ideal. But
we give you this presentation that is as basic as possible, and still gives you
a great deal of satisfaction and understanding of that fabric of the platform.
Now on the technical side, what's worked out extremely well for us is this idea
of what we've been calling Infrastructure from Code instead of Infrastructure as
Code.

I kind of mentioned it earlier, where on Vercel, you create an API directory.
You put your files. You develop locally. You push, and they become serverless
primitives. So that's an idea of the code of the application is then determining
the infrastructure. And this is a crucial distinction because it's different
from having to separately maintain a script, whether it's a beautiful script.
There's excitement about things like CDK and Pulumi, and things like that. They
can be really awesome, type checked infrastructure. But still, ossifying an
infrastructure description together with the application. It's almost like a
mini us versus them situation. So you're asking, okay, how to guide the
developer into the right data store and things like that. Well, we're thinking
about doing this also with Infrastructure from Code, where bringing in a
database is as easily as importing its SDK.

So it's almost like, for example, SQL support feels like a natural extension of
the runtime environment. It's just something that you're coding with. Now, when
I give you... For example, let's say that I add SQL support. Let's say I give
you SQLite on localhost. That does mean that when you deploy, it literally uses
SQLite inside a container in a Kubernetes cluster. Most likely not, because to
my point earlier, I wouldn't be making that take advantage of what the cloud
really has to offer, which should be globally distributed sequel. It would be
decoupled storage from compute SQL. It would be horizontally scalable SQL. It
would be scale to zero SQL. So that's how we think about that idea of
Infrastructure from Code, because it forces us to always think about this from
the persona of the application developer writer, the frontend engineer that's
getting stuff done. And then infrastructure just happens as a consequence of
that. I think this is what's made us stand out a little bit from the pack so
far, where we've taken that different path when it comes down to how we expose
the guts of the cloud.

**David** (32:23): Okay. So before we wrap up then, I have two lightning
questions for you. So the first is what interesting tools DevTools are you
playing around with at the moment?

**Guillermo** (32:35): So I have a really nerdy hot take. I've been fortunate
enough to be enrolled in the co-pilot early access program. And they released
Neovim support. So I've just been in love with... I have very, very little time
for coding as the CEO of the company. So just combining one of my passions,
which is VIM in the terminal with another one of my passions, which I've
actually given talks about, which is auto completion. And using AI as a way of
augmenting cognition. It's just been amazing, because I can iterate on ideas,
try out our products, give feedback to different teams, and it just makes me
really productive. I love it. So that's one. Then on the cloud side of things,
I've just been spending a lot of time with our new edge functions product. So
really what it does is that we have this idea of, can we give you dynamic at the
speed of static?

Can we give you global front ends that you just personalized by means of if
branches, if else, and identity of the user. And there's virtually no
observable. There's going to be a little bit, but virtually to the end user, no
observable difference in terms of performance compared to pure static workload.
So we introduce this primitive, the edge function. But what's really most
interesting is the integration with the frameworks. So we are integrated into
Next JS, which just launched a really cool demo built with SvelteKit, where if
you build this SvekteKit app and you deploy it on Vercel, it takes advantage of
this primitive under the hood. And like the demo just tells you... It's really
simple. Tells you where you are from, but it literally has zero JS on the client
side, first of all. And that rendering process of where you're located... At
least for me in San Francisco, I have a really good internet connection. It can
happen in like 35 milliseconds end to end, including TLS and all the entire
journey of a request. So I'm really excited about this new way of both
programming and how the cloud really works. And yeah, I plugged my own DevTool,
but it's really exciting.

**David** (34:53): And then the second question is, what is your current tech
setup? What hardware and software do you use on a daily basis?

**Guillermo** (35:02): So I have M1 Pro for my work computer. I enjoy using
our set of tools obviously. And we use Notion for collaboration, Slack for
conversation and discussion. And a lot of our integrations live there. We are
introducing to the platform new capabilities to give feedback to one another
directly inside the product. So I've also been spending time working directly on
Vercel to give feedback about our websites and applications that we're building.

And yeah, as I mentioned, that I use Neovim when I try out new things or I use
CLI a lot. And one cool tidbit that my share is, we looked at the entire dataset
of GitHub open source bots that are active on pull requests over all of GitHub.
And we found that Vercel, the integration that deploys your GitHub projects
automatically, is now in the top four most popular bots in the entirety of
GitHub. And I think two of those four are actually GitHub's own bots. So we
obviously dog food our technology a lot every single day. So we spend a lot of
time just going to GitHub, look at what folks are working on, get that preview
URL, click it, and then give feedback to the different teams about what the cool
stuff is that their building and how it works on different devices, and mobile
and so on. And yeah. It's a really good and fun way of building software.

**David** (36:37): Excellent. Well, unfortunately that's all we've got time
for. Thanks for joining us. Guillermo.

**Guillermo** (36:41): Thank you.

**David** (36:44): Thanks for listening to the Console DevTools podcast.
Please let us know what you think on Twitter. I'm @DavidMytton and you can
follow @consoledotdev. Don't forget to subscribe and rate us in your podcast
player. And if you are playing around with or building any interesting DevTools,
please get in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
