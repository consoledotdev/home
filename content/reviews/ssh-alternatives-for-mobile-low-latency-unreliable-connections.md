---
title: SSH alternatives for mobile, low-latency or unreliable connections
date: 2021-03-23T07:00:00Z
draft: false
summary: A review of the best SSH alternatives for connecting to servers over poor connections.
isSelected: reviews
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorBio: David is co-founder of Console. He previously co-founded server monitoring startup, Server Density, where he built the original version of the product in Python and grew the business to acquisition in 2018, at which point it was used by hundreds of customers to collect billions of time series metrics from millions of servers. More recently, he has been researching sustainable computing at Imperial College London & Uptime Institute, which he continues to do alongside running Console.
ogImg: /img/reviews/neovim-best-code-editor-ide-for-developers-neovim.png
tags: [Reviews, SSH, SSH Alternatives, Connections]
---

SSH (Secure Shell) is a network protocol that provides an encrypted channel
over the network. It is most commonly used as a way to log into remote systems
over the internet, such as servers, but can be used by any network service.

Introduced in 1995, the big difference between SSH and the Telnet services it
replaced was the security of public-key cryptography. Most developers will be
familiar with generating their local keys, even if just to push code to GitHub,
although it is possible (but not recommended) to use password-based logins.

SSH works using a client/server model. The SSH server, usually
[OpenSSH](https://en.wikipedia.org/wiki/OpenSSH), runs on the remote system and
listens on port 22 for incoming connections from clients.  OpenSSH also
provides the client software to allow users to connect to the server, but
[alternative clients
exist](https://en.wikipedia.org/wiki/Comparison_of_SSH_clients), such as
[PuTTY](https://en.wikipedia.org/wiki/PuTTY) on Windows.

SSH is the best option in most cases. It is widely used, usually installed by
default, and clients exist for every platform. However, there are a few cases
where you may want to consider an SSH alternative. I was recently looking for
ways to solve these edge cases. These are my notes on alternative SSH servers.

### Problems with SSH

Last year I switched to Linux. still do the majority of my development locally
but I am tempted by the lure of cloud-based environments like GitHub Codespaces
or Gitpod. Having multiple, isolated environments ready-configured for each
coding project helps separate dependencies, speeds up the initial
bootstrapping, and means I can code from any machine.

However, I want to keep my text/terminal-based workflow. VS Code is a great
product, but [I prefer
Neovim](/reviews/neovim-best-code-editor-ide-for-developers/). I am therefore
experimenting with running my development on a remote server with isolated
containers that I connect to from my computer.

SSH works by interactively forwarding the keyboard presses to the remote
server, only displaying the result in the client when the server has
acknowledged them. This works well on fast, low-latency connections, but breaks
down if either the server or connection performance degrade. The client will
also disconnect if your IP address changes, or there is a temporary loss of
connectivity. Anyone who has tried to SSH into a server over a mobile network
or tried to debug a server under heavy load will have experienced this.

Connecting via 3G or even 4G networks has long been an edge case. Most
development has been done locally and directly debugging servers has become
less common as they are [treated more as cattle not
pets](https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/).
But as cloud performance has improved and connection speeds have increased (5G
is rolling out and [Starlink](https://www.starlink.com/) is being deployed),
coding on a remote server is gaining popularity. This will most likely be
through browser-based IDEs like Codespaces or Gitpod, but there will always be
some like me who want to connect via their terminal console.

SSH will always be the default on robust connections, but I wanted to
investigate alternatives that are better suited for slow, mobile, and/or
high-latency connections. Whilst I am looking for an SSH alternative, I am not
actually looking for a replacement SSH server as such. Indeed, there are
several SSH server alternatives such as
[wolfSSH](https://www.wolfssl.com/products/wolfssh/),
[Dropbear](https://matt.ucc.asn.au/dropbear/dropbear.html), or
[Teleport](https://github.com/gravitational/teleport).

They are all open-source and have specific reasons to choose them over OpenSSH
e.g. Dropbear is designed for embedded systems. Instead, the SSH alternative I
am looking for is more to do with the [transport
layer](https://tools.ietf.org/html/rfc4253). It needs to be able to deal with
high-latency, disconnects, packet loss, or otherwise unreliable connectivity.
Or, [the interactive keyboard design](https://tools.ietf.org/html/rfc4256)
needs to be reconsidered - sending the key press and waiting for a response
before that press is shown on the client only works well if connectivity is
good.

So what are the options?

### SSH alternative: Mosh

[Mosh](https://mosh.org) (mobile shell) is a remote shell that maintains the
link between connections. It removes typing lag by using a prediction engine,
so is ideal for high-latency scenarios.

#### Key features

* Automatically handles reconnects when IPs change, such moving between Wi-Fi
  networks or on mobile devices.
* Reconnects automatically if the internet connection drops, or if you simply
  put your laptop to sleep.
* Instant response when typing by not waiting for the server to reply to
  interactive keyboard presses.
* Client and server can be run by unprivileged users.

Mosh uses SSH to establish the connection (thereby not rewriting the
authentication process), but then establishes a connection to the remote Mosh
server instance so it can do its magic.

It implements a new protocol called State Synchronization Protocol that uses
encrypted datagrams over UDP. By using sequence numbers, it can track what has
and hasn’t been received by the server without waiting for acknowledgement as
with TCP. The client shows when there is a delay in echoing the reply from the
server, but only in high latency scenarios, which is fun to occasionally see
show up in the UI.

{{< img-center
src="/img/reviews/ssh-alternatives-for-mobile-low-latency-unreliable-connections-responsetime.png"
alt="A graph of keystroke response time: Mosh vs SSH."
width="100%"
caption="Cumulative distribution of keystroke response times: Mosh vs SSH."
>}}

The main downside with Mosh is that it emulates the terminal remotely and only
sends the visible state of the terminal back to the client. This means if you
have a lot of output from a command, you will only be able to see the result
that would have been visible in the terminal. This is known as the scrollback
buffer. It’s [a known limitation in
Mosh](https://github.com/mobile-shell/mosh/issues/2) because it focuses on
efficiency and solving issues with poor connectivity, so it makes sense to only
send the visible portion of the terminal.

The recommended solution is to use [tmux](https://github.com/tmux/tmux), which
can handle the scrollback for you. However, tmux waits for the remote server to
send the new screen contents which somewhat defeats the purpose of Mosh. Mosh
removes any latency by not waiting for the remote server, but using scrollback
through tmux adds that latency back in. Mosh also does not support tmux control
mode, which is [a nice feature if you want native
windowing](https://medium.com/@gveloper/using-iterm2s-built-in-integration-with-tmux-d5d0ef55ec30).

Unfortunately, this is considered low priority by the Mosh developers, and
since [the issue](https://github.com/mobile-shell/mosh/issues/122) has been
unresolved since 2012, and the developers
[say](https://github.com/mobile-shell/mosh/issues/122#issuecomment-682060982)
they have no intention of fixing it, then it looks like this is simply a design
choice.

Another problem with Mosh is the release cadence. Whilst there seems to be
ongoing development in [the public GitHub
repo](https://github.com/mobile-shell/mosh), the last release was Jul 2017.
Software can be “done”, but no releases for years seems suspicious.

### SSH alternative: Eternal Terminal

[Eternal Terminal](https://eternalterminal.dev/) is very similar to Mosh. It
establishes a connection using SSH and then launches and reconnects to the ET
server. It uses TCP but keeps track of the number of bytes sent and read,
re-syncing the state if it needs to reconnect, similar to a resumable
connection.

#### Key features

* Automatically handles reconnects when IPs change, such moving between Wi-Fi
  networks or on mobile devices.
* Reconnects automatically if the internet connection drops.
* Works much better with tmux.
* Supports native scrollback.

ET does not solve problems with latency. Any connection lag will be visible in
the ET session because it is still waiting for the server to reply to the
interactive keyboard. ET is focused on the disconnection problem, which means
it is a solution to SSH sessions being killed by roaming or connection
failures. Mosh echos them locally and then “catches up” with the remote server.
ET still echos them remotely.

Like Mosh, ET is also a client/server implementation that relies on SSH to
establish the connection and then authenticate. From the website:

> Eternal TCP implements a BackedReader class that keeps track of the number of
> bytes read (called the sequence number) and, upon reconnect, informs the
> other party of the sequence number. The BackedWriter class keeps an encrypted
> buffer of the last N bytes sent and the sequence number. Upon reconnect, the
> BackedWriter receives the sequence number from the BackedReader and re-sends
> the last M bytes, where M is the difference between the sequence numbers of
> the writer and the reader.

Due to the support for native scrollback by streaming the session, you can get
full access to the terminal output. Indeed, ET is [specifically recommended by
the iTerm
developers](https://gitlab.com/gnachman/iterm2/-/wikis/tmux-Integration-Best-Practices#i-want-to-use-mosh)
for use with tmux because of this feature - tmux is not designed for use over a
tunnelled terminal like Mosh.

### Conclusions

In most scenarios, connecting over SSH is the best choice. It is supported on
all important platforms and is well understood by most developers. Everyone has
SSH keys so if you’re on a stable, low-latency connection then you might as
well just connect via SSH. Using tmux will ensure that your session
configuration remains running on the remote server even if you do disconnect.

Eternal Terminal can augment your fast connection by providing reliability. If
you work from a wired broadband connection then high latency and packet loss
are unlikely. You’re more likely to encounter disconnects, which is where ET
provides a solution. If you are investing in remote development environments
then ET is the best choice because of its support for native scrollback. If you
are using a terminal that supports tmux control mode, like iTerm2, it’s the
only choice.

However, if your connection is also high latency as well as unreliable, Mosh is
the right choice. Authentication is still handled by SSH but the ongoing
connectivity is handled by the UDP Mosh protocol. If you expect a low quality
connection on mobile, or from a cafe or hotel, Mosh’s ability to echo the
commands locally with no lag is ideal.

Unfortunately, there is no SSH alternative that covers both high latency and
reliability, if you want to maintain the scrollback. Perhaps an opportunity for
a new project?

#### Other useful tools

* [Guardian Agent](https://github.com/StanfordSNR/guardian-agent): SSH
  forwarding means you can remotely connect on to other systems over SSH
  without needing to install Mosh on every one of them.
* [iTerm2 Tmux
  Integration](https://iterm2.com/documentation-tmux-integration.html): How to
  get your iTerm2 client set up with control mode so that you can use the
  native windowing on macOS as if they were tmux windows.
* [Blink](https://blink.sh/): An SSH app for iOS and iPad that supports Mosh.
* [Awesome SSH](https://project-awesome.org/moul/awesome-ssh): A collection of
  other tools and resources for SSH e.g. tools tunnelling over SSH, networking
  tools, wrappers, bastion servers, etc.
