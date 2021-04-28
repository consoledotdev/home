---
title: Q&A with Matan Kushner, Starship
who: Matan Kushner
role: Creator
org: Starship
what: A cross-shell prompt.
date: 2021-03-09T12:00:00Z
draft: false
summary: Q&A interview with Matan Kushner, Creator, Starship.
isSelected: qa
topImg1Src: /img/qa/starship-matan-kushner-profile.jpg
topImg2Src: /img/qa/starship-matan-kushner-logo.png
ogImg: /img/qa/starship-matan-kushner-desk.jpg
---

### What is Starship? Why did you build it?

[Starship](https://starship.rs/) is a cross-platform cross-shell prompt. The
goal is to replace what would typically just show up as the current working
directory by giving a little more contextual information that you wouldn't
otherwise have.

Instead of just showing what directory you're in, Starship gives context, like
the fact you're in a Git repo, the current Git status, the Node package
version, and your Node runtime version; things that you wouldn't typically know
without having to actively seek them out. It only shows you what you need in
that context, and no more.

Starship is configurable and works very quickly on any set up. It plays nicely
with most shells, like bash, zsh, fish, etc. It was directly inspired by the
prompt called [Spaceship for zsh](https://denysdovhan.com/spaceship-prompt/).
Similar name, but it only works with zsh. I was porting it over to
[Fish](https://fishshell.com/) because I was a big fan, but the process
required a lot more effort then expected. Outside of porting features, we were
regularly backporting bug fixes from the fish prompt, back to the zsh version.
The Fish port was called [Spacefish](https://github.com/matchai/spacefish),
adding to the confusing mix of names!

The maintainer of Spaceship, [Denys Dovhan](https://denysdovhan.com), had made
[a proof of concept](https://github.com/denysdovhan/robbyrussell-node) for what
would be a "cross shell prompt" in NodeJS. This worked really well
conceptually, but Node has a slow cold start time, so that didn't work well
practically. I took it upon myself to try making it in Rust, a systems-level
language. The project evolved to what Starship is today, which is more than
just a typical prompt, acting more as a prompt framework, so to speak. Today,
Starship can be used to make any prompt through configuration alone.

It's breathtaking to see the amount of support that there's been around
Starship, and humbling to see what started out as a small learning opportunity
for Rust to surpass [15,000 GitHub
stars](https://github.com/starship/starship). People are now looking to
monetarily support us, which is very exciting.

{{< img-center
src="/img/qa/starship-matan-kushner-product.gif"
alt="Starship product screenshot"
width="100%"
caption="Example commands running with the Starship prompt."
>}}

### How was your experience building Starship in Rust?

I am loving developing in Rust. It is the language I would like to do more and
more of my projects in. Rust gives you a level of confidence and safety that
other languages simply don't provide. Also, it's so inherently fast. Going back
to JavaScript from Rust, I feel like a much safer developer. It makes me more
mindful of where things can go wrong, giving me a better mental framework for
how to handle possible errors. In Rust, the compiler yells at you – it's hard
to do things the wrong way.

Funnily enough, prior to Starship, I had never touched Rust or systems
programming. When tackling the idea of making a cross-platform shell prompt in
a systems programming language, I had considered using C, Go, or Rust. At the
time, Rust had been [the number one most loved language in the Stack Overflow
annual
survey](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages)
several years running. I saw the interest in Rust and thought that this was a
really good opportunity to give it a shot and see what all the hype was about.

As far as projects go, Starship is not terribly complex. It checks for the
state of your system and outputs a string. The complexity is in how it
interfaces with the various shells and how it handles the various system states
that it has to deal with. Luckily, Starship was a very approachable project for
learning Rust, at least given its scope at the time. Today it's a lot bigger
and is more of a framework than a prompt, making it much more complex in
design.

'Learn Rust' is my message to everyone. If you get the opportunity, it makes
you a better developer, and it makes you reconsider the norms in your current
language of choice.

### What's the team around Starship?

Starship is an open-source project. We have a team of four maintainers and a
few dozen drive-by contributors. People add their language of choice, or their
tool of choice that we previously didn't have support for. We made it fairly
simple to add a new language, with a lot of good tests and [documentation for
contributors](https://github.com/starship/starship/blob/master/CONTRIBUTING.md).
This allowed people to start contributing, even if they know little to no Rust.

It was very important from its inception to make Starship approachable to
contributors, and this lends itself well to having a snowball effect. If you
find a prompt that supports all the tools that you use in a working day, it's
probably a good fit for your workflow.

### What does a “day in the life” look like?

I just started at [CodeSandbox](http://codesandbox.com/), where I'm a software
developer working mostly on the core product. Once I’ve finished my 9-to-5, I
usually work on open source and side projects like Starship.

I'm also a developer and community manager for a social network for anime fans
called [AniList](https://anilist.co/), which is another side-project of mine.

### How did you first get into software development?

I've always taken an interest in programming. As a kid, I was a huge fan of
video games, and I always aspired to be a game developer or something along
those lines.

I've always played around with coding, starting out at school with my
[TI84](https://en.wikipedia.org/wiki/TI-84_Plus_series) in mathematics class
where I’d spend time programming, instead of learning trigonometry!

I eventually ended up doing software quality assurance for games companies.
This role progressed into dabbling with automation, and then going on to become
an automation QA engineer at [Shutterstock](https://www.shutterstock.com/),
then [Autodesk](https://www.autodesk.com/), before finally becoming a full
stack developer at [Auth0](https://auth0.com/).

My primary tool of trade has always been JavaScript. I started with Python,
then progressed to JavaScript, and I've been using JavaScript professionally
ever since. Even now at CodeSandbox, I work in TypeScript primarily and use
Rust in my open source projects.

### What is the most interesting challenge you’ve faced working on Starship?

Since its inception, the scope and complexity of Starship have shifted
considerably. We are teetering on the brink of a full rewrite right now, as the
architecture does not suit the needs of today. People are thinking of it more
as a framework than as a prompt itself. With every new tool and bit of
configuration, there's another thing to have to maintain and test, adding to
the project’s overall complexity.

The biggest trouble in developing Starship has been maintaining performance
while supporting features in Git. Git is not the fastest software in the world.
I made the decision early on to make Starship using
[libgit](https://libgit2.org/) for it's Git implementation, which I didn't
know at the time, doesn't perform very well for our purposes.

Given our use-case, libgit performs considerably worse than calling the Git CLI
directly, which would have been the better choice in retrospect. In the process
of rewriting Starship, the plan is to strip out the use of libgit and instead
create our own Git implementation, or call out to the git CLI, which would make
Starship orders of magnitude faster. This is our project's single biggest
performance bottleneck.

That said, most people don't notice any performance issues. These edge cases
only show up under extreme examples of users cloning massive projects, like the
Rust repo or Chromium. People regularly praise Starship for its performance
when compared to typical prompts that don't use concurrency and are written in
the shell language itself. By writing the shell in Rust, we gain the benefits
of a robust concurrency model, test tooling, and cross-platform support
upfront.

We run benchmarks whenever we're making meaningful changes. In the rewrite, the
plan is to have benchmarks in CI from the onset, like we’ve always had for
tests and documentation. We now see that having a performance budget from the
get-go is very valuable to avoid gradual regressions over time. Having had such
a system early on, we could’ve quickly caught the regression introduced by
libgit, back when.

### What is the most interesting tech you are playing around with at the moment?

Recently, I've fallen in love with [Nix](https://nixos.org/) and NixOS. I
recently had to set up a new Mac, and instead of installing everything with
Homebrew, I used Nix packages for everything. This makes my system very easy to
reproduce through configuration alone. Nix allows my system configuration to be
idempotent, allowing me to confidently replace tools and configuration on my
system without risks of side-effects. It provides what a lot of people are
looking for in Docker without the heavy weight of virtualization.

That said, I'm still very early in my Nix journey. I have been avoiding
creating my own Nix packages. What's cool, is to see that the [Nix Starship
package](https://starship.rs/installing/#nix) makes it incredibly easy for
anyone to just install it. It's also pre-configured for any shell that you
install with Nix. That kind of unification of tooling and automatic
configuration is fascinating to see, so I'd love to continue experimenting with
it.

### Describe your computer software setup

**OS:** macOS, Big Sur. I upgraded to Big Sur back when it was still in beta.
I'm in love with the new design direction of Big Sur. It looks absolutely
beautiful. It solves a lot of usability issues that were in macOS that aren't
there anymore.

**Browser:** Chrome. I've wanted to use Safari for a long time, but the
extension support in Safari is kind of dismal. I like
[Brave](https://brave.com/) conceptually, but the execution has left me
wanting.

**Email:** [FastMail](https://www.fastmail.com/). A couple of years ago in an
effort to separate myself from Google I stopped using Gmail. I've been using
FastMail ever since, and it has been fantastic. FastMail has really good
integration with every external email and calendar app. It feels just like I'm
using Gmail when I'm not using the Gmail client, which is what I wanted out of
an email provider. As for an email client, I've been using
[Spark](https://sparkmailapp.com/) on my Mac and on my Apple devices, super
slick, super fast.

**Chat:** Slack at CodeSandbox. [Discord](https://discord.com/) at Starship and
AniList.

**IDE:** VS Code. The extension ecosystem is super rich. It's refreshingly easy
to make an extension and modify your editor, in a way that hasn’t been the case
for Vim. Within VS Code, I use the Vim  extension, giving me the same ease of
use and ergonomics provided by Vim, while also having access to the rich
ecosystem of VS Code.

### Describe your computer hardware setup

{{< img-center
src="/img/qa/starship-matan-kushner-desk.jpg"
alt="The desk of Matan Kushner, Starship"
width="100%"
>}}

Just a couple of days ago, [I
tweeted](https://twitter.com/matchai/status/1366854129088348167) about how I
reached my workstation "end game". It's now exactly how I've wanted it to be
for a long time.

I've got a lovely [Jarvis EcoTop standing
desk](https://www.fully.com/standing-desks/jarvis/jarvis-ecotop-standing-desk.html)
with a [Herman Miller Embody Logitech Edition
chair](https://store.hermanmiller.com/gaming/herman-miller-x-logitech-g-embody-gaming-chair/2517590.html?lang=en_US).
I use a Macbook Air (M1 Chip) in a [Brydge](https://www.brydge.com/) vertical
dock, so I slot it in and it connects to my ultra wide 49" [Samsung CRG9 Dual
QHD
monitor](https://www.samsung.com/us/computing/monitors/gaming/49-crg9-dual-qhd-curved-qled-gaming-monitor-lc49rg90ssnxza/)
with an [Ergotron HX monitor
mount](https://www.ergotron.com/en-gb/products/product-details/45-475).

On either side, I have [Micca MB42X
speakers](https://www.miccatron.com/micca-mb42x/), then I use a [Lumix
DMC-G7](https://www.panasonic.com/uk/consumer/cameras-camcorders/lumix-mirrorless-cameras/lumix-g-cameras/dmc-g7keb.html)
mirrorless camera as a webcam connected to an [Elgato CamLink
4K](https://www.elgato.com/en/gaming/cam-link-4k) for video capture. My
keyboard is a [ZSA Moonlander](https://www.zsa.io/moonlander/), which has
helped alleviate the chronic wrist pain I used to suffer from. Lastly I use an
[Apple Magic
Trackpad](https://www.apple.com/search/Magic-Trackpad-2-Silver?tab=accessories)
as a mouse which, again, is more comfortable to use.

### When coding

* **Daytime or nighttime?** Nighttime.
* **Tea or coffee?** Coffee, but I'm also a bit of a coffee snob.
* **Silence or music?** Ambient music. I’ve been listening to a lot of Tyco as
  of late - the perfect programming music.

### What non-tech activities do you like to do?

Lots of video games, but I'm still at my computer for that. I've been playing
League of Legends, Call of Duty, and visual novels as of late. When I'm not at
my desk, I do a lot of biking, rock climbing, and hiking in the summer, along
with skiing in the winter.

### Find out more

[Starship](https://starship.rs) is a cross-shell prompt. It was featured as an
"Interesting Tool" in the [Console newsletter](https://console.dev) on 7 Jan
2021. This interview was conducted on 9 Mar 2021.
