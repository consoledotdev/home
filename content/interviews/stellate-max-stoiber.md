---
title: Interview with Max Stoiber, Stellate
who: Max Stoiber
role: Founder
org: Stellate
what: GraphQL CDN.
tags: ["Cloud", "DevOps"]
date: 2022-06-17T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Max Stoiber, Founder, Stellate.
isPage: interviews
topImg1Src: /img/interviews/stellate-max-stoiber-profile.jpeg
topImg2Src: /img/favicons/stellate.co.svg
ogImg: /img/interviews/stellate-max-stoiber-desk.jpeg
---

### What is Stellate and why did you build it?

Our first product at [Stellate](https://stellate.co) is a GraphQL CDN. We offer
rich caching, so people can cache their GraphQL APIs in about 70 locations
worldwide. We also have analytics, performance monitoring and error tracking.

Our journey started when I was working on a different startup called Spectrum
with huge scaling problems. We were trying to build a modern take on community
forums, and were eventually bought by GitHub and got turned into GitHub
Discussions. Very public data, very read-heavy, basically an ideal use case for
caching. Spectrum was growing very quickly, but chose a database that didn’t
meet our needs. We were using its real-time features heavily, but those weren’t
supported very well. Our database servers were on fire constantly.

If we could have just put a cache in front of our API, that would’ve alleviated
90% of our load. I looked around and nothing really existed, we were using
GraphQL for the API and, in general, we were very happy with GraphQL. It allowed
us to move very quickly. It was a nice developer experience. I’m a big fan of
GraphQL, except that we couldn’t cache it. I had to spend months building a
really terrible in-memory cache in our server that never really worked well. We
couldn’t cache all the data that we wanted to. We could only cache it for very
short periods of time
  
Overall, it worked, but the process gave me a taste of what the potential could
be. A little later a common friend introduced me to (my now co-founder) [Tim
Suchanek](https://twitter.com/timsuchanek) who had built a prototype of a
GraphQL edge cache with invalidation. He had based it on
[Fastly’s](https://www.fastly.com/) infrastructure with their Compute@Edge
product. It was very much an early prototype. It was functional, but you
couldn’t really use it. There was some code running at the edge that looked at
GraphQL requests and put them in the cache, but that was about it.

I’d known of Tim for a long time because he used to work at
[Prisma](https://www.prisma.io/) and a lot of our network knew both of us, but
we just had never met and had never talked with each other. I flew up to Berlin
to meet him, and we asked each other questions and tried to figure out what our
values are. Are we aligned on where we want to go? How do we want to run this
business?

After a week it was pretty obvious to both of us that we were super aligned, so
we decided to co-found Stellate. We spent three months getting our first product
ready, which at the time was still called GraphCDN. There was so much more to do
beyond the core caching layer. We had to build an admin dashboard, the analytics
which required data infrastructure, authentication, and payments. In the
meantime, we started onboarding our first beta users. We got their feedback,
which was incredibly valuable, and in June 2021 we launched and ever since then
we’ve been on this crazy journey.

### What is it about GraphQL that makes it difficult to cache?

If you think about how people used to build APIs, most commonly RESTful APIs,
every resource has its own endpoint. You would have something like /v1/users and
you would get a list of users. Or /v1/user/{id}and you’d get the user with a
certain ID. That means all existing CDNs and all existing REST caching
implementations treat the URL as the ultimate key to what the resource is. If
another request comes in for /v1/users, it just returns the same data. You don’t
need to recompute that unless it’s been invalidated.

The problem is GraphQL changes that up with a single endpoint. Instead of the
URL determining what data is going to be returned, you send the query in the
POST body, and that query can be literally anything.

You can query for any data at any point, and it all goes to that single GraphQL
endpoint, or whatever route you choose. Existing CDNs and caches aren’t made for
that. Not only do you no longer go by the URL, but you also have to analyze the
GraphQL query that comes in, in order to understand the data that’s being
returned.

What makes Stellate’s GraphQL Edge Cache special is that we look at every
request that passes through us. We know, for example, that the response contains
the user with ID 5. When a mutation passes through the cache that’s called
’editUser’ that returns the user with the ID 5, the cache knows that you just
changed the user with the ID 5.

Then our invalidation allows the cache to clear any cached query result that
contains that specific user within 150ms globally. Faster than you can blink,
the data will be gone when you tell us that it’s changed. It is really powerful
and enables our customers to cache a lot more data than they could otherwise.

The thing in GraphQL that makes it even possible is the introspective ability.
GraphQL is introspectable. You can look at a GraphQL API and it tells you what
queries exist, what you can query, how you can query, and what data that
contains.

When a query passes through the edge cache, it has this magic __typename field
everywhere. That tells us, for example, you just fetched the author of a post
and the object that you just returned is a user with the ID 5, so we can tag the
response that we put in the cache with all of these type names and ID
combinations, and then invalidate those when a mutation passes through.

### What does a “day in the life” look like for you?

My average day has changed considerably over the last year. My background is in
software engineering. I was a CTO at Spectrum, and then we got bought by GitHub,
and I was a software engineer there. Next, I was at
[Gatsby](https://www.gatsbyjs.com/) and I’ve also done a lot of open source
work. I co-created [styled-components](https://styled-components.com/),
[react-boilerplate](https://reactboilerplate.com/), and a bunch of other open
source projects.

In the last year, it’s gone from me and Tim building Stellate from this
prototype into a product that we can sell. As soon as we launched, we got an
immense amount of traction. Very quickly, my job shifted from building stuff to
handling support, sales, and marketing.

At Stellate, I’m the CEO and Tim is the CTO. I’m thus responsible for everything
external and making sure I keep Tim and the engineer team’s backs free so that
they can focus on shipping product.

My days vary. What I enjoy about this early stage is that every week it feels
like we’re a completely different company.

### What is the team structure around Stellate?

We’re 12 people right now including myself and Tim.

On the engineering side we have six engineers, and then we have two people for
operations. I’m responsible for sales and marketing, and then we have our head
of customer success. We’re going to expand a lot this year. We need way more
people, so we’re hiring across all departments.

What’s interesting about Stellate is that we’re completely distributed around
the globe. We have people from California to Austria. For the kind of company
we’re building I don’t care where you sit and do your job. You can be in the
U.S, you can be in Europe, Africa and South America. I do not care.

### How did you first get into software development?

I got into software development via school, which is strange in hindsight. I
didn’t go to a special software engineering or computer school at all. I went to
a very normal high school in Austria.

In Austria, when you finish high school and go to graduate school, you have to
write a thesis about a specific topic. You’re not really researching and writing
a paper, it’s more like you agree with the teacher on a topic akin to a simple
version of a bachelor thesis. For some reason, I went to my IT teacher and I
asked her whether there was anything that I could write about. She suggested:
‘why don’t you write about TCP/IP?" And I was like, “Sure, I’ll write about
TCP/IP. I have no idea what that means, but I’m just going to figure it out.”
So, I wrote my thesis about TCP/IP and I ended up with this 40-page long, really
boring, dry thesis about TCP/IP.

I explained the OCI-stack, and TCP/IP, and all these things. It was really
boring, and I spent months learning all of this and putting it into a thesis.
Afterwards, I felt I wanted to do something with this knowledge. I have all this
knowledge of how networks work in my brain and I want to do something with this.
What can I do that’s even a little bit practical?" And I figured, “I could
probably make a website.”

I set up a simple web server somewhere, and signed up to and tried to send an
HTML file over the wire. I had a website but it looked like crap, so I thought I
got to make it look nice, so I learned about CSS. That’s really how I got into
the whole web development thing. I just got stuck making websites forever. I
loved making websites and making even more complex websites, and learning about
how to make them better. It all came from my school thesis, which is crazy
thinking back. Ever since then, I haven’t stopped making websites.

### What languages have you learned over the years?

I’ve played around with a lot of different ones such as Java, Python, Ruby,
Elixir and Erlang. The main one I use is JavaScript, and now TypeScript, which
is what I’ve written 99% of my code in, over the last decade. Of course, there’s
always a little bit of HTML and CSS in there as well. I would say the main
language is just JavaScript and now TypeScript, but equally the same thing.

### What’s the tech stack for Stellate?

With Stellate, there are many completely separate parts. It’s a big app now, but
there’s a gateway layer that runs on Fastly’s infrastructure which is written in
Rust with a little bit of JavaScript. That’s where all of the traffic passes
through.

That is super optimized, very stable and a very critical piece of the flow as
all of our customers pass all of their requests through it. That has to be
really solid. On the other side, you have the admin dashboard, which is what our
customers use to interact with the gateway layer and they configure things. They
set up rules, purge things, and look at the analytics.

That’s all a Next.js app. It has a GraphQL API, that’s powered by Stellate, and
is served by Next.js API routes. PostgreSQL database is our data store and uses
Prisma as our ORM.

### What is the most interesting development challenge you’ve faced working on Stellate?

We’ve gone through so many different challenges, it’s almost difficult to say. I
think what’s interesting about our current GraphQL Edge Cache product is that
caching is a really difficult problem. That seems like an obvious thing to say.
“There are two hard problems in computer science: cache invalidation and naming
things.”

Turns out, cache invalidation is difficult to get right! Our company is as
successful as it is, and will hopefully be more successful in the future because
we make cache invalidation simpler. It’s still not easy. We can make it easy for
some use cases, but usually, it’s not going to be super easy. It’s always going
to be a little bit difficult. The most important thing that we do for our
customers is provide fine grained invalidation that allows our customers to
cache a lot more data.

It allows them to cache data for longer. If you can invalidate any data that
changes within 150 milliseconds globally, suddenly you can cache all kinds of
data that you couldn’t before. For example, if you change your name on Facebook,
that can’t take 30 seconds to show up, that’s ridiculous.

When you change your name, you’ve changed your name. That change has to show up
everywhere. Having that fast invalidation is really critical and a lot of what
our challenge is making that even easier in the future.

There’s a lot we can do there. I was recently talking to a customer, who builds
political websites. They’re an agency and solely focused on nonprofit and
political causes. Their clients do not have a lot of budget, but some of their
websites have extremely high traffic. You have the interesting problem of not
having much money, but a lot of people want to use these websites.

For them, Stellate’s GraphQL Edge Cache has been a lifesaver. It’s cut their
budget down a lot because the data doesn’t change often they’re usually news
websites with limited user interaction, so they have 99% cache rates across all
their websites, reducing their origin traffic by a factor of a hundred.

That means they have to pay barely anything for the infrastructure. They pay way
less for us than for their infrastructure and they save a bunch of money and the
website is much faster for everybody.

It’s a huge win-win and they’re so happy we exist and they’re excited about
Stellate and about our GraphQL Edge Cache. As a founder, that’s really, really
gratifying to see people with cool use cases that use you. Another customer
recently wrote to us to say we “saved their bacon during Black Friday”.

### What is the most interesting tool you are playing around with at the moment?

I recently got a new laptop. Whenever I get a new laptop, I’m not the kind of
person that transfers everything over. I have my old laptop laying right next to
me, if I need anything.

I try to set everything up from scratch and consider, “Okay, what do I actually
need?” Not just blanket install everything I used to install, but figuring out,
“What are the tools that I actually need, and what can I cut?

A few of the things that I noticed that I really love are
[Raycast](https://www.raycast.com/), which is like a Spotlight / Alfred
replacement, [Fig](https://fig.io/), which is a terminal auto-complete tool. If
you’re a developer and you’re not using Fig, go use Fig. You type Git and it
suggests all of the possible commands in Git, then if you type git commit, it
shows you all the possible options. It’s made my life a lot easier. I also love
[Cron](https://cron.com/), which is a new calendar app.

### Describe your computer hardware

I’ve got a 16-inch [MacBook Pro M1 Max](https://www.apple.com/uk/macbook-pro/).
I switched to a 16-inch from 13-inch MacBooks and having that extra screen real
estate makes a big difference. When I held my 13-inch earlier today, I was like,
“This is a baby’s laptop, this is tiny. How was I working on this?”

I also have a curved ultra wide monitor. The non-curved ones are terrible
because everything’s far away. I made that mistake!

### Describe your computer software

**OS:** macOS.

**Browser:** Chrome.

**Email:** Superhuman.

**Chat:** We use Slack at Stellate. For some of my local contacts, like in Europe, WhatsApp is very widespread. Some of my American contacts use iMessage. Some of my European friends that are more privacy-sensitive use Signal.

**IDE:** VS Code.

**Source control:** Git.

### Describe your desk setup

For my desk I use a standing desk from IKEA. I have an
[ErgoDox](https://ergodox-ez.com/) split mechanical keyboard, which every normal
person that comes to visit my apartment, questions how I can type on it. I also
use a [Logitech Vertical
MX](https://www.logitech.com/en-us/products/mice/mx-vertical-ergonomic-mouse.910-005447.html)
mouse. I try to optimize everything as much as I can for ergonomics.

I spend so much time in front of my laptop, working eight to ten hours per day,
so I’ve got to make sure that I can do that for the next 60 years and make sure
my body doesn’t break.

For calls, I have a DSLR camera set up, with a separate mic.

{{< img-center src="/img/interviews/stellate-max-stoiber-desk.jpg" alt="The desk of Max Stoiber, Stellate" width="100%" >}}

### When coding

Daytime or nighttime? Both.

Tea or coffee? Coffee.

Silence or music? Silence.

### What non-tech activities do you like to do?

I’m a big skier. I do a lot of skiing, ski touring and backcountry skiing where
you walk up the mountains and you ski back down. I’m also into bouldering in the
summer, particularly rock climbing. Lastly, I like making coffee and have the
fanciest pressing machine at home.

### Find out more

[Stellate](https://stellate.co/) is a CDN for GraphQL. It was featured as an
"Interesting Tool" in the [Console newsletter](https://console.dev/) on 04 Aug
2022. This interview was conducted on 16 Jun 2022.