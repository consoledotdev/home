---
title: Why Neovim is the best code editor / IDE for developers
date: 2021-03-11T07:00:00Z
draft: false
summary: A review of the best code editors and IDEs - Neovim, VS Code, Atom,
         Kate, Nova, Onivim, and Sublime Text.
isSelected: reviews
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorBio: David is co-founder of Console. He previously co-founded server monitoring startup, Server Density, where he built the original version of the product in Python and grew the business to acquisition in 2018, at which point it was used by hundreds of customers to collect billions of time series metrics from millions of servers. More recently, he has been researching sustainable computing at Imperial College London & Uptime Institute, which he continues to do alongside running Console.
ogImg: /img/reviews/neovim-best-code-editor-ide-for-developers-neovim.png
tags: [Reviews, Code Editors, IDE]
aliases:
    - /collections/neovim-best-code-editor-ide-for-developers/
---

There are a few apps that developers use all the time: a web browser, a
terminal (console), and a code editor or Integrated Development Environment
(IDE). Choosing the right one is like selecting a good chair or mattress - the
amount of time you spend using it (sitting on it/sleeping on it) justifies the
time you spend picking it.

I have used many editors over the past two decades, from Dreamweaver and
FrontPage to Coda and Xcode, and from Sublime Editor to Atom. Most recently
I've been using Visual Studio Code (VS Code). It's a great time to be a
developer because there are no many options to choose from. A large number are
actively developed with regular refinements and feature releases. Occasionally
there is even something brand new.

Every developer has their own requirements. Some people are happy with a simple
text editor because they prefer to keep things lightweight. Others want a full
environment that has built-in debugging, collaboration, and extensive language
server support. I've always leaned more towards a minimalist text editor with
syntax highlighting. Linting and code completion are a nice bonus.

I recently switched from macOS to Linux and as I went through a process of
de-Apple-ifying my tools, I had to decide whether to stay with VS Code or pick
something entirely different. Unlike a chair or a mattress, it's easy to
try all the possibilities!

This article has my notes about the options I tried.

### Summary

My conclusion is that [Neovim](https://neovim.io/) is the best code editor
because of its speed, ease of customization, and text config I can store in
Git. I switched from [VS Code](https://code.visualstudio.com/).

I also considered [Atom](https://atom.io/), [Kate](https://kate-editor.org/),
[Nova](https://nova.app/), [Onivim](https://onivim.io/), and [Sublime
Text](https://www.sublimetext.com/). I didn't like
[Emacs](https://www.gnu.org/software/emacs/) (see below for why), but if you
like the (Neo)Vim approach be sure to [try
it](https://github.com/nobiot/Zero-to-Emacs-and-Org-roam), or even combine the
two with [Spacemacs](https://www.spacemacs.org/) or [Doom
Emacs](https://github.com/hlissner/doom-emacs).

{{< img-center
src="/img/reviews/neovim-best-code-editor-ide-for-developers-neovim.png"
alt="Screenshot of my neovim setup."
width="100%"
caption="My neovim setup on Linux inside tmux using the Nord theme."
>}}

### Requirements

I will start with my minimum requirements:

#### Performance

A text editor like nano or vim is always going to win a speed contest, but the
default settings aren't useful for most developers. There needs to be a
pragmatic balance between performance and functionality. If it takes a few more
seconds to load everything but afterward performance is snappy even with
syntax highlighting, code-completion, and linting, then that may be a
reasonable tradeoff. However, a laggy UI isn't acceptable.

#### Customizable

Without good performance it doesn't matter how customizable your editor is, but
they're almost as important as each other. Customizable means the ability to
define your own shortcuts, set (or create) themes, and probably install a range
of plugins that anyone can write.

#### Syntax highlighting

Anything more than a quick edit to the occasional file requires proper syntax
highlighting. When it's not there you realize how useful it is. Good syntax
highlighting understands the language conventions and makes visually parsing
the code much easier.

#### Cross-platform compatibility?

I have been using a Mac since 2007 and only with the frustratingly buggy
release of Catalina combined with unreliable Macbook keyboards did I start to
explore alternatives. This meant that cross-platform compatibility was
important because I could experiment with the same app and configs on multiple
platforms.

The success of VS Code means that native OS support is less important than it
used to be - VS Code's use of [Electron](https://www.electronjs.org/) makes it
available on all major platforms. This is how [GitHub
Codespaces](https://github.com/features/codespaces) or
[Gitpod](https://www.gitpod.io/) can access to the entire VS Code ecosystem.
See [our interview with GitPod's Chief Architect / Head of
Engineering](/qa/gitpod-christian-weichel/) about how important this has been.

Running an editor in the browser is technically not as performant as native
code, but that rarely shows up for most coding tasks. As low-power client
devices with 5G become more widesapread (or the availability of
[Starlink](https://www.starlink.com/) expands), if it can run a browser then
the heavy lifting can be offloaded to the cloud. GitHub Codespaces and Gitpod
are as customizable as the native version, and have benefits like environment
isolation and the ability to move between systems without loss of continuity.

I did look at a few platform specific editors to see if there was a final
reason to stay on macOS. Native code has a styling advantage because it can
adopt platform-specific UX concepts. This used to be an advantage of macOS
software built using Apple's frameworks, but with the increased popularity of
web / Electron, it seems fewer and fewer people care about this any more. I try
to be pragmatic so I understand why building using web technologies and
Electron is beneficial, but for an app I use for hours a day I want to have the
best experience possible. Unfortunately, I just don't like most Electron apps!

#### Everything else

This is where opinion will start to diverge. Some developers won't use an
editor without a debugger, or linting, or Git built-in. For me, these aren't
hard requirements but are bonuses. Indeed, most good editors have these, or
plugins that enable them. How useful they're all depends on the language and
platform you're developing for.

### My favorite editor: Neovim

[Neovim](https://neovim.io) is fast, modern, and infinitely customizable.

#### Key features

* **Cost:** Free (open source).
* **Performance:** 🚀 Very fast.
* **Customizable:** ✅ Large ecosystem of plugins and themes.
* **Syntax highlighting:** 🛠 Requies plugins.
* **Cross-platform:** Linux ✅ Windows ✅ macOS ✅
* **Everything else:** ✅ Install language plugins for linting and debugging;
  ✅ Git plugins available.

#### Pros

Compatible with Vim plugins; configuration in a text file so it can be easily
stored in version control and sync'd; very fast, especially combined with
Alacritty.

#### Cons

Requires upfront investment to customize themes, plugins, and learn shortcuts.

#### Notes

Neovim is an implementation of Vim, but focused on extensibility and usability.
The key feature is asynchronous plugins (mostly) compatible with Vim, which
significantly improves performance for things like code-completion and linting.
I use [Alacritty](https://github.com/alacritty/alacritty) for my terminal,
which uses GPU acceleration (OpenGL in Rust), and [was specifically written to
correctly render applications like
Vim](https://jwilm.io/blog/announcing-alacritty/), so performance is excellent.

One of the great things is its customizability. All configuration is defined in
[my vimrc file](https://github.com/davidmytton/dotfiles/blob/master/vimrc) that
I keep in version control. I can drop this onto any system and with a single
command all my plugins will be installed and set up exactly how I prefer
things. As Neovim and Alacritty work cross-platform, it was easy to gradually
transition from macOS to Linux because I could use them on both OSs.

There are lots of plugins. In recent months I have used Neovim to write code in
Python, Rust, Go, JS, and HTML, [written an academic article using
LaTeX](https://github.com/davidmytton/paper-data-centre-water-consumption) with
proper reference support, and managed my personal notes using Markdown. Each of
these activities has a couple of plugins that enable features like syntax
highlighting, linting, version control integration, reference management, and
compiling. All within the same interface, using the same set of commands, and
the same theme.

That said, Vim requires time to learn. It's been around since 1991 (Neovim
since 2014) so it has its own way of doing things. There is always a way,
usually with a shortcut, but you often have to search online to find out how.
This makes it harder to learn and less discoverable than an equivalent
graphical interface. However, that's time well spent because it then becomes
fast and easy for the future.

Vim also takes time to customize. There are so many options, themes (I use
[nord](https://www.nordtheme.com/docs/ports/vim)), and plugins. A good way to
get started is to find someone else's vimrc file or search for some language
specific tutorials that explain their config. Be sure to store your vimrc in
version control and write useful commit messages (and vimrc comments) so you
can go back and find out why you made a config change. I'm regularly finding
someone writing about their setup which often results in a small tweak that
makes my config better.

I run neovim through [tmux](https://github.com/tmux/tmux) which gives me
powerful window management. I already use a tiling window manager on Linux
([sway](https://swaywm.org/)) but being able to attach and detach sessions is
incredibly freeing. I can just keep the session running in the background so
whenever I want to come back to the project, the windows are all already
configured. [They can also be scripted](https://superuser.com/a/440082). My
next step will be to investigate running sessions remotely so that I can
connect from any system.

I did try [Emacs](https://www.gnu.org/software/emacs/), but it wasn't for me.
If you don't yet have [a strong
opinion](https://en.wikipedia.org/wiki/Editor_war) of (Neo)vim/vi vs Emacs and
think my notes above sound good, try both. For the beginner, they're equals
when it comes to performance, customization, syntax highlighting, plugins, etc.
I think it all comes down to whether you prefer modal interfaces or not. [This
is a good guide for getting started with
Emacs](https://github.com/nobiot/Zero-to-Emacs-and-Org-roam) (the guide is for
Windows, but Emacs works on most OSs). If you can't decide, then
[Spacemacs](https://www.spacemacs.org/) combines the best of both, although I
found the alternative, [Doom Emacs](https://github.com/hlissner/doom-emacs),
easier to get set up. Regardless, a text-based terminal life is the way
forward.

#### (Neo)Vim plugins I use

At time of writing I am using 19 plugins. [My vimrc
file](https://github.com/davidmytton/dotfiles/blob/master/vimrc) is public if
you want to see the latest set, but here are a few crucial ones:

* [Ale](https://github.com/dense-analysis/ale): Linting.
* [deoplete](https://github.com/Shougo/deoplete.nvim): Asynchronous code
  completion framework (needs extra plugins for the languages you use. I use
  [jedi](https://github.com/davidhalter/jedi-vim) and
  [deoplete-jedi](https://github.com/deoplete-plugins/deoplete-jedi) for
  Python).
* [vim-gitgutter](https://github.com/airblade/vim-gitgutter): Shows git diff in
  the left column as you edit.
* [lightline.vim](https://github.com/itchyny/lightline.vim): Makes the
  statusline look nicer. A minimalist take on alternative plugins like
  [powerline](https://github.com/powerline/powerline) or
  [airline](https://github.com/vim-airline/vim-airline).
* [NERDTree](https://github.com/preservim/nerdtree): Makes vim much more like
  an IDE so you can browse a tree of files. It's [faster to use file
  search](https://pragmaticpineapple.com/improving-vim-workflow-with-fzf/) when
  you know the filename you're looking for, but this helps with the transition
  to vim and if you have a lot of projects you move between.

### The editor I used to use: VS Code

[VS Code](https://code.visualstudio.com) is a modern IDE with a huge ecosystem
of plugins and themes.

#### Key features

* **Cost:** Free (open source / Microsoft License).
* **Performance:** 🐇 The best performance from any Electron app I've used, but
  ultimately limited by that choice of technology vs something like using Vim
  with Alacritty.
* **Customizable:** ✅ Large ecosystem of plugins and themes.
* **Syntax highlighting:** ✅
* **Cross-platform:** Linux ✅ Windows ✅  macOS ✅
* **Everything else:** ✅ Install language plugins for linting and debugging;
  ✅ Git built-in.

#### Pros

Actively developed by Microsoft with built-in code completion and
syntax highlighting, debugging, Git, and lots of plugins. Good plugins from
Azure and AWS for their cloud products.

#### Cons

Built on Electron. The VS Code binary release is not open source
(Microsoft License) but the codebase is (MIT license).

#### Notes

Until my recent switch to Neovim, I used VS Code. According to the [Top IDE
Index](https://pypl.github.io/IDE.html), VS Code has grown the most over the
last 5 years and as of Mar 2021, sits at position #4 in the rankings, with
9.8% market share. It's easily the most popular editor in our [series of
developer Q&A interviews](/qa/).

{{< img-center
src="/img/reviews/neovim-best-code-editor-ide-for-developers-ide-index.png"
alt="Graph of worldwide IDE popularity."
width="100%"
caption="A graph of IDE popularity showing Visual Studio vs Eclipse vs VS Code."
>}}

Although it's based on Electron - and I usually find Electron apps to be slow
and have a weird [uncanny valley
effect](https://en.wikipedia.org/wiki/Uncanny_valley) due to not using native
UI components - VS Code is the best of them. I understand why development teams
want to use Electron to rapidly deliver apps to users on multiple platforms,
but I prefer native apps where possible. I suppose it's better to have an app
available for all major platforms than just one, but Electron is infamous for
its poor performance and high memory requirements. Maybe those are just badly
built?

If you use Azure for your cloud then VS Code provides the best development
experience because of the [official
plugins](https://code.visualstudio.com/docs/azure/extensions). These plugins
were valuable when I was working our [Campfire
Bot](https://blog.console.dev/porting-a-python-azure-serverless-function-to-rust/)
and [LED Metric
display](https://blog.console.dev/live-subscriber-count-using-a-lametric-led-device/),
both of which are Azure Functions. The debugger streamlines local development
and deploying to production with other Azure services is really easy. If you
use Azure then VS Code is a natural interface to build in.

[AWS has also developed a toolkit for VS
Code](https://aws.amazon.com/visualstudiocode/) because they realize this is
where developers are now working. [Google has a VS Code
plugin](https://marketplace.visualstudio.com/items?itemName=GoogleCloudTools.cloudcode&ssr=false#overview)
but is quite limited (along with all of their developer tooling in general).

VS Code is a free project, but the official downloads are based on a freeware
license from Microsoft. The codebase is entirely open source though, under the
MIT License, and there are [open source community builds from
VSCodium](https://vscodium.com/). Unfortunately, they lack some features, like
[settings
sync](https://github.com/microsoft/vscode/issues/105310#issuecomment-693262654).

Not only is VS Code a good editor you can run locally, it's also available as
in the browser with [GitHub Codespaces](https://github.com/features/codespaces)
or [Gitpod](https://www.gitpod.io). This is a major advantage of using web
technologies in Electron because they can then support most VS Code plugins,
themes, and settings sync. It can even download dotfiles to configure the
workspace. This makes it really easy to create multiple, isolated environments
for all your projects, particularly if they're hosted on GitHub.

{{< img-center
src="/img/reviews/neovim-best-code-editor-ide-for-developers-vscode.png"
alt="Screenshot of my old VS Code setup."
width="100%"
caption="My VS Code setup on macOS using the Nord theme."
>}}

### Other code editors I considered

I considered several other code editors that I thought might fit my
requirements:

### Atom

[Atom](https://atom.io) is a capable editor that has some unique real-time
collaboration features, plus direct integration with GitHub.

#### Key features

* **Cost:** Free (open source).
* **Performance:** 🐇 Fast enough, but limited by Electron.
* **Customizable:** ✅ Through JS plugins, but fewer users means fewer plugins.
* **Syntax highlighting:** ✅
* **Cross-platform:** Linux ✅ Windows ✅  macOS ✅
* **Everything else:** ✅ Out of the box support for linting and debugging in
  most popular languages; ✅ First-class support for Git and GitHub.

#### Pros

Built-in, real-time collaboration using P2P WebRTC (encrypted).

#### Cons

Built on Electron. Smaller ecosystem of users which means fewer
plugins (still over 8,000 though) compared to more popular editors like VS Code or
(Neo)Vim.

#### Notes

[Electron](https://www.electronjs.org/) was originally called Atom Shell,
created specifically for Atom by GitHub. If you are going to pick an editor
that uses Electron then there is an argument for picking the OG.

However, VS Code has far surpassed the capabilities of Atom. In particular, the
plugin and theme ecosystem for VS Code is just much more active. For VS Code,
this is a virtuous cycle because more plugins mean more developers which means
more plugins. VS Code is considered the first place to build developer tooling,
as can be seen by the existence of mature toolkits for Azure and AWS cloud
products which aren't available for Atom.

Atom benefits from being created by GitHub: it has integrated first-class
support for features like pull requests and issues. This makes reviewing
commits within pull requests easier with a workflow UX that has been well
thought out. However, this is clearly [an area of focus for VS Code as
well](https://vscode.github.com/). Now that Microsoft owns GitHub, will Atom be
deprecated?

The only real differentiator for Atom is the
[Teletype](https://teletype.atom.io/) plugin which allows for real-time P2P
collaboration like Google Docs using P2P WebRTC for encrypted communication.
But this has been available for VS Code for several years now through a plugin
pack called [Live
Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack).
It's not quite as slick, but it's questionable as to whether this one thing
makes Atom it worth picking Atom.

Atom is a decent enough editor, but unlike the other options I considered it
doesn't stand out.

### Kate

Based on the text editor component built into many parts of the Linux KDE
desktop environment, [Kate](https://kate-editor.org) is a standalone version
for editing config files, source code, and other text documents.

#### Key features

* **Cost:** Free (open source).
* **Performance:** ✅ Fast. Written in C++.
* **Customizable:** ⛔ Plugins can be written in C++ or Python. [Comes bundled
  with a number of
  options](https://docs.kde.org/stable5/en/applications/kate/plugins.html) but
  there is no real ecosystem outside of the editor in the same way as the
  editors considered. [Scriptable with
  JS](https://docs.kde.org/stable5/en/applications/katepart/dev-scripting.html).
* **Syntax highlighting:** ✅
* **Cross-platform:** Linux ✅ Windows ✅  macOS ✅
* **Everything else:** ⛔ No support for Git ([planned for the
  future](https://kate-editor.org/post/2019/2019-10-20-git-client-integration/)).

#### Pros

Powerful general text editor with coding-specific functionality such
as syntax highlighting for 300+ languages, code folding, autocomplete,
embedded terminal, and vi mode.

#### Cons

Somewhat dated UI.

#### Notes

I tried Kate because it came bundled with KDE. I found it when I was testing
different Linux desktop environments as I gradually migrated over from macOS.
Unfortunately the UI felt too dated, so I didn't give it much time. The lack
of any plugin ecosystem means it isn't really in the same league as any of the
other candidates.

Kate is certainly a powerful general purpose text editor but it's dated UI
paradigm and the lack of customization means it's not one for me.

### Nova

[Nova](https://nova.app) is a new programming-focused editor only for macOS.

#### Key features

* **Cost:** $99 perpetual license + 1yr of updates. $49/year for updates.
* **Performance:** ✅ Fast. Written using native Apple frameworks.
* **Customizable:** ⏹  Has a JS extension API for new languages, sidebar
  extras, themes, etc. But as Nova is so new, the ecosystem is limited.
* **Syntax highlighting:** ✅
* **Cross-platform:** Linux ⛔ Windows ⛔ macOS ✅
* **Everything else:** ✅ Git built in.

#### Pros

Written for macOS so it uses the latest platform technologies and
design style. Worth trying if you love macOS and want an editor that feels
truly built for the Mac.

#### Cons

Ecosystem only just getting started. Has a "fun/playful" UI style
which some may not like. macOS only (by design).

#### Notes

Nova is unique on this list because it's very much designed for macOS-only as a
[Mac-assed](https://inessential.com/2020/03/19/proxyman) [Mac
app](https://daringfireball.net/linked/2020/03/20/mac-assed-mac-apps).  It's
clearly a response to the trend of moving to the web and low-quality Electron
apps. Unfortunately, most users don't seem to care about whether their apps are
native or not, but it's great to see companies like Panic build Nova to try and
win points for how macOS-native they are.

I included it on this list because I was willing to consider remaining on macOS
for a good set of apps, despite all the bugs in Catalina and changes I don't
like in Big Sur. Neovim works on macOS so I could have used it for
everything except development if Nova won me over. However, when I tried it
there were very few plugins - nothing for Python - and whilst I appreciated
the native UI elements, the stylistic choices didn't appeal to me.

The Nova plugin ecosystem has since matured and there are now good plugins for
many languages, including Python, but it's still very early. Having picked
Neovim as my editor, there are major advantages to using the same foundations
for all my text editing, whether programming, LaTeX, or Markdown notes.

Nova is a fine candidate if you are using macOS and want a native experience,
but I think I was already too far into the worlds of the text-based terminal
when I tried it.

### Onivim

If you have used VS Code you will recognize the interface. Indeed,
[Onivim](https://www.onivim.io/) intends to support the VS Code backend so that
extensions will work across editors. This is a clever way to bootstrap an
ecosystem - VS Code is proving how essential that is.

I am not including a full review of Onivim because it's not finished. I had to
build it from source so I could try it out - to get access to official builds
you have to pay, which is how they're funding development. I wanted to test it
out mainly because I like the concept - modal editing in a modern GUI, using
vim bindings. However, it's still very early in development and I found it to
be slow and very buggy, but what do you expect compiling [the latest
commits](https://github.com/onivim/oni2) from source?!

Definitely one to keep an eye on.

### Sublime Text

[Sublime Text](https://www.sublimetext.com/) is a focused and minimalist editor
with a Python plugin API.

#### Key features

* **Cost:** $80 perpetual license +3 years of updates.
* **Performance:** ✅ Fast. Written in C++.
* **Customizable:** ✅ Plugins require a third-party plugin! But once installed
  there are a lot of community plugins.
* **Syntax highlighting:** ✅
* **Cross-platform:** Linux ✅ Windows ✅  macOS ✅
* **Everything else:** There deliberately isn't much else built-in. Built by an
  independent development company, their second app is a Git GUI.

#### Pros

One of the earliest "modern" editors focused on performance that natively
supports many languages and can be extended with a flexible Python API. The
first editor to introduce a command palette?

#### Cons

A minimalist editor. Almost everything requires a plugin.

#### Notes

My favourite thing about Sublime Text is how it has proven it's possible to
build high quality commercial software as an independent company. [Built by a
small team in Australia](https://www.sublimehq.com/), they only recently
released their second product - a Git UI app. Having been around since 2008, it
was one of the first editors I used after outgrowing Frontpage and Dreamweaver
I'd learned web dev with in the early 2000s.

Sublime Text has very few features out of the box, which is a good thing. It's
focused on doing the core job of code editing very well, allowing a community
to develop on top of the Python API. [The plugin
manager](https://packagecontrol.io/) itself isn't even official.

This is a great editor if you want something really minimalist, or maybe if
you're using a lower level language that has limited tooling, but I feel like
it's not grown with the complexity of modern web development. Building web
applications today benefits from the tooling that has developed around deploys,
issue management, collaboration, testing, etc. VS Code has plugins in all these
areas, many of which help large-scale development teams stay productive.
Whether this is good progress is up for debate, but Sublime Text seems to
represent an earlier era of development.

### Conclusions

There are [so many choices for
developers](https://github.com/collections/text-editors) looking for the best
code editor or IDE! I had some specific criteria which excluded quite a lot of
options, such as the very popular [JetBrains](https://www.jetbrains.com/) suite
that often comes up in [our developer Q&A interviews](/qa/). It is clear that
VS Code is shooting up the charts, but it is great to see a thriving ecosystem
around the likes of vim, Emacs, and even new products like Nova.

[My personal philosophy around open
source](https://davidmytton.blog/technology-vs-philosophy-or-macos-vs-linux/),
minimalism, and plain-text terminals naturally drew me to Neovim + tmux +
Alacritty, but it is not an easy way to get started. I believe the hours it's
taken me to play around with my configs is worth it, but others may want the
flexibility of self-contained browser coding environments (Gitpod), a highly
active plugin ecosystem (VS Code), language specific IDEs (JetBrains), or
something else altogether (Kate).

Whatever your preferences, there are plenty of options to choose from!
