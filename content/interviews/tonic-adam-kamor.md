---
title: Interview with Adam Kamor, Tonic
who: Adam Kamor
role: Co-Founder
org: Tonic
what: Data generation for testing.
tags: ["Fake data"]
date: 2022-03-09T12:00:00Z
draft: true
headerType: fixed
summary: Interview with Adam Kamor, Co-Founder, Tonic
isPage: interviews
topImg1Src: /img/interviews/tonic-adam-kamor-profile.jpeg
topImg2Src: /img/favicons/www.tonic.ai.png
ogImg: /img/interviews/tonic-adam-kamor-desk.jpg
---

### What is Tonic? Why did you build it?

[Tonic](https://www.tonic.ai/) is a fake data company. We have a tool that
allows development, test, and machine learning teams to build fake data. If you
need fake data, Tonic is the tool to use.

The typical use case for us is development or test teams that need something
like their production database to do their jobs of creating features and testing
them. They can't use the production database because there are ethical and
privacy concerns. There are laws, compliance requirements, and regulations that
they need to adhere to that restrict access to production. They need a database
that looks, feels and behaves like production but isn't production data.

There are a lot of ways development teams approach this, oftentimes trying to do
something in-house. Those methods and techniques typically fail or fall very
short of the quality bar of where they need to be in terms of the data itself.
Tonic is a great way to generate a fake production database quickly and
effortlessly.

We built Tonic because it is a problem we have all faced in our former
professional lives. It was a problem that my co-founders and I thought we were
particularly well suited to solve, given our backgrounds all coming from data
companies.  I worked previously at [Tableau](https://www.tableau.com/), which is
a data visualization company, as did my co-founder Ian Coe. Customers would
sometimes email saying, this workbook isn't working, what's going on? You'd ask
for data as we need data to reproduce the issue, but oftentimes they couldn't
send the data, because it was sensitive.

My co-founder Ian, who knows Andrew Colombi (COO) and Karl Hanson (CTO) from
[Palantir](https://www.palantir.com/), has similar stories of working onsite
with customers. Ian would be on-site with the customer, an issue would occur,
and developers back at HQ would request the data to reproduce the problem only
to get a hard "no". The team on-site would need to write some scripts to
generate toy data that would hopefully reproduce the issue and then send that
over. It's a problem we've all seen before. Given our past experiences we saw
the need for a tool like Tonic and were excited for the opportunity.

### How would you pitch it to a developer who might just think they can generate some random strings or numbers?

I would ask the developer questions about their production environment. How big
is your database? Not in terms of the amount of data itself, although that is
important, but in terms of the schema. How many tables and how many columns is
it? One of the largest databases we’ve seen has 47,000 tables. That is a bit of
an outlier, but we have plenty of customers where the median is certainly in the
hundreds of tables. Even with a smaller example of 300 tables in production,
that could be about 3,000 columns.

Maybe they don't need all of those tables to boot their application up, but that
application has certain expectations. Certain tables need to have data. In order
to test and work on features, you need to have data there as well. You're not
reasonably going to go add a couple of rows of data to each of these hundreds of
tables. That would be very cumbersome, and it's going to be conceptually very
hard to keep track of everything because of foreign keys. It gets hard quickly
to do all of that.

The columns you need, the data types, the foreign keys, etc, are all the things
we know about, but then there's a second set of problems. The ‘unknown
unknowns’. The application has business logic in it. It's the thing that says,
if the value in this column is ‘1’, the value in this other column in a
different table must be ‘A’ or ‘B’, it cannot be ‘C’. That's a simple example,
but there are hidden constraints that are basically encoded in your
application's business logic. When the application is pulling data from the
database, it's assuming those constraints are being satisfied. When they're not,
the application is going to catch on fire. It's just not going to work.

What ends up happening when you build an in-house solution is that you create a
test data generation application that contains all the logic of your actual
business application and that is clearly not a tenable place to be.

### What does a "day in the life" look like for you?

I spend a tremendous amount of time trying to grow the engineering team by
meeting potential candidates, conducting interview and doing general outreach.
When I'm not doing that, I am working on a variety of different things that fall
into two buckets. Development work and non-development work. On the development
side, I very much like to write code.

I'm still an active contributor to the code base. Not as active at this point as
our engineers, but I'm still pretty active. Tonic has data connectors to
different databases. I'm working right now on improving our featureset related
to [Spark](https://spark.apache.org/) and
[Hive](https://aws.amazon.com/big-data/what-is-hive/#:~:text=Apache%20Hive%20is%20a%20distributed,petabytes%20of%20data%20using%20SQL.).
I'll probably do an hour of coding during the day, and three hours at night once
my kids have gone to bed.

Otherwise, during the day when I'm not recruiting, I'm doing one-on-ones, and
roadmap planning, and other founder related odds and ends. I'm also in a lot of
sales calls talking to customers which is maybe my favorite activity.

### What is the team structure around Tonic

We have 70 employees. A third are on the product team - engineers, designers,
product managers. Within the product team, 20 of them are engineers and they all
report up through either Andrew, our CTO, or myself. We have four teams at the
moment where each team is focusing on a vertical. We call one of the teams ‘the
hair on fire team’. They deal with urgent customer issues and work to resolve
them quickly.

### How did you first get into software development?

I was about 12 years old when I started coding. I started playing with Visual
Basic, and would make little stick figure animations. I remember one time I made
a little animation of a stick figure kicking a ball and the ball going in the
air. Shortly after that, I was at a bookstore with my mom and she purchased for
me a copy of
[Sams Teach Yourself C++ in 24 Hours](https://www.amazon.com/Teach-Yourself-Hours-Complete-Starter/dp/0672326817).
I think it had 24 chapters each taking an hour. I didn't read all of it because
I think I was a little too young to appreciate most of it, but I got through
enough of it to where I could write simple C++ programs.

I did that for a while, then I joined a programming club in high school, where
there would be coding competitions using QBasic. In high school I took a Java
course

For my undergrad I studied physics, which involved a lot of numerical stuff. I
was writing a lot of C and MATLAB. I followed up with a PhD in physics, focusing
on non-linear dynamics as it relates to atomic physics.  Even though the work
was theoretical there was still a lot of numerical number crunching in that as
well, where I continued to use MATLAB and C.

### What is the most interesting development challenge you've faced working on Tonic.ai?

I think there are two. The first is related to the privacy aspects of what we
do. It's easy to write code that will transform data from A to B. It is more
difficult to write code that transforms data from A to B while giving you some
amount of privacy and retaining some utility to the data. It is a mathematical
and conceptual challenge.

Differential privacy
[came out of Microsoft Research in 2006 by Dr Cynthia Dwork](https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf).
It aims to offer some amount of plausible deniability so that if an attacker
sees an output dataset, they can't with certainty learn something about the
subject of the attack. It gives you a mathematical framework for understanding
what is the probability of being able to identify something? Through this
probability, you have a tuning parameter - you can dial up the privacy but
reduce the utility, or the other way around.

On the pure engineering side, a big challenge can be performance. Moving
terabytes and petabytes of data can be hard to do, especially because there are
bottlenecks to the process related to network i/o, disk i/o, the processing
power of the Tonic worker, etc. Creating an architecture for moving this data
quickly and efficiently has been a fun challenge.

Our architecture started off very simple and it has gotten more and more complex
over time. It's one of those things where you 10x the complexity, it doesn't 10x
the speed, but it gets you some amount more speed. It's been a challenge saying
no to code changes that will get you a couple % extra speed, but it's twice as
complicated as it was before. It's often not worth it.

### What is your tech stack?

Our front end is React with TypeScript and our back end is all .NET. We are on
the latest version of .NET 6. About half our development team is Windows and
half on Mac with a few folks on Linux as well. Tonic itself is deployed inside
Linux Docker containers. So it's .NET and it's all cross-platform.

We use AWS, but the tool itself is typically self-hosted by our customers in
order to keep their data within their control and within their own networks. We
package Tonic up as a Docker container and then our customers can deploy that
container however they wish. In their own AWS or Azure account, or even in their
own data center. All they need is a machine or a VM and they can run Tonic.

### What is the most interesting tool you are playing around with at the moment?

We use lots of different open source drivers for our data connectors. I would
like to give a call out to the folks at Microsoft who have made the .NET Spark
driver available
[https://github.com/dotnet/spark](https://dotnet.microsoft.com/en-us/apps/data/spark).

Spark runs on the JVM, but our code is written in .NET and we want to apply our
.NET transformations to our customers that have data that they operate on with
Spark. Think of Parquet files sitting in S3 for example. One option is to
recreate all of our generators in Java and maintain a Java and a .NET
implementation.

That is very challenging because these implementations have to be perfect. Any
piece of data that comes in through Tonic must be consistently mapped to the
same fake output regardless of whether the mapping occurs in Java or C#.  This
need for consistency is what requires that the Java and C# implementations are
absolutely identical.

Luckily, two years ago Microsoft released .NET for Apache Spark which is
essentially a shim that you put on top of Spark so that you can run .NET
processes on Spark. It is a serialization layer that serializes data back and
forth between your Java process, where the data is and then the .NET process
where the transformation is.

### Describe your computer hardware setup.

I have an [LG Ultrawide](https://www.lg.com/ultrawide-monitors) 34 inch monitor
that I use with a
[Logitech K840](https://www.logitech.com/en-us/products/keyboards/k840-mechanical-corded-romer-g.920-008350.html)
keyboard.

I love the
[Dell XPS series](https://www.dell.com/en-uk/shop/laptops/sf/xps-laptops).
They're very easy to install Linux on. Some of our developers will just put
their distro of choice on there as opposed to Windows. I currently have a
ninth-generation i7. This is what we give all of our PC developers.

### Describe your computer software setup

**OS:** Windows, but with Ubuntu through WSL. I like using Linux as a developer.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** [JetBrains Rider](https://www.jetbrains.com/rider/).

**Source control:** Git.

### Describe your desk setup

{{< img-center src="/img/interviews/tonic-adam-kamor-desk.jpg" alt="The desk of Adam Kamor, Tonic" width="100%" >}}

My office is our bedroom where I have had a 6ft plastic folding table as my desk
for the past two years. Until recently I was sitting on our kitchen chair. I
finally caved and got an office chair recently with Tonic’s quarterly WFH
stipend.

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** Coffee.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I love working on engines. It could be cars, motorcycles or dirt bikes. I am
always on the lookout for my next project. I recently fixed up a Suzuki DR 350
dirt bike. It's a single-piston or thumper dirt bike. It needed a good amount of
work. In the course of getting it running I rebuilt the carburetor, replaced the
ignition coil and spark plug and replaced the timing chain. Replacing the timing
chain is difficult because unlike on most cars the timing chain (or belt) is
actually inside the engine so it required removing lots of interior parts to
access. The chain had to be replaced because it had been stretched loose and
when you revved the motor it would slip on the camshaft sprocket and the bike
would get out of time, meaning the spark plug would fire at the correct piston
position but the valves were not in their correct position.

Now I'm working on a 1974 Honda CT70, which is a little miniature bike that is
meant for 12-year-olds. Because it's 70 CCs, it's small. It's the most fun you
can have on two wheels though. I've had it for years and I rebuilt it once, but
I let it sit outside and water worked its way into the combustion chamber. I
just finished rebuilding the top-end of the engine (re-worked the head, new
piston, etc) and I built it out to 88ccs to get a bit more power out of it.

### Find out more

[Tonic](https://www.tonic.ai/) generates realistic fake data for testing
purposes. It was featured as an "Interesting Tool" in the
[Console newsletter](/) on 31 Mar 2022. This interview was conducted on 9
Mar 2022.
