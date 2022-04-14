---
title: Private P2P encrypted file sync with Syncthing & Tailscale
date: 2021-11-24T12:00:00Z
draft: false
summary:
  How to configure Syncthing & Tailscale for private P2P encrypted file sync.
isPage: articles
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorBio:
  David Mytton is co-founder of Console. From 2009-2018, David was CEO at Server
  Density, a SaaS monitoring startup used by hundreds of customers to collect
  billions of time series metrics. He is also a researcher in sustainable
  computing at Uptime Institute and affiliated with Imperial College London.
  David has been a developer for 15+ years.
ogImg: /img/articles/private-p2p-encrypted-file-sync-syncthing-tailscale-syncthing-admin.png
tags: [Articles, File Sync, P2P Networking, Syncthing, Tailscale]
headerType: fixed
---

Syncing files between computers and mobile devices is easy today - just use one
of the many cloud file sync services. Dropbox, Google Drive, OneDrive, Amazon
Cloud Drive, iCloud Drive.

All provide basic file synchronization, web, desktop and mobile UIs, and several
offer advanced real-time collaboration like Google Docs, Dropbox Paper or
Microsoft Office. Choosing between them comes down to cost, which UI you prefer,
and whether the collaboration features are important.

However, there is one big tradeoff - privacy. All these services encrypt data in
transit and at rest, but the keys are controlled by the provider. Unless you
encrypt files locally before they are uploaded, you are subjecting your files to
possible scanning and data mining. This is the nature of using a centralized
cloud sync service.

Instead you can set up your own private P2P file sync service by combining the
open-source [Syncthing](https://syncthing.net/) with the free plan of
[Tailscale](https://tailscale.com/). This article will explain how to configure
them.

### Private, peer-to-peer, encrypted cloud sync alternative

Instead of using a centralized cloud file sync service, Syncthing can be
configured to work with Tailscale to establish an encrypted, decentralized,
private, peer-to-peer (P2P) file synchronization system. That might be a lot of
buzzwords, but they all have real meaning!

- **Encrypted P2P Network:** Tailscale establishes a private P2P network between
  all of your devices with no centralized server. Network traffic is directed
  over virtual network interfaces via a VPN that is securely encrypted. The
  network appears like your own private, local network, but works even when the
  devices are not on the same physical network.
- **Encrypted file sync protocol:** Syncthing uses a TLS encrypted block
  exchange protocol ([BEP](https://docs.syncthing.net/specs/bep-v1.html)) for
  communication between two or more devices.
- **Decentralized:** Connections happen between devices and do not need to go
  through a centralized server. There is an option for Syncthing to relay
  connections to work around network connectivity issues and to use its global
  discovery service, but this can be disabled when Tailscale is used. Private:
  Files are only stored on systems you control that are members of your private
  network. They are encrypted in transit. Nobody except you has access.

You will note that both the P2P network and the file sync protocol are
encrypted. It is not necessary to run both to achieve fully encrypted file sync;
Tailscale is optional. So long as you trust the Syncthing implementation, your
devices will communicate securely with each other. However, there are some extra
benefits to using Tailscale as the network layer:

- Syncthing needs to establish P2P connections between all the devices. If all
  those devices are on the same local network then it can use the local
  discovery protocol, but if any are remote then it will attempt to use the
  global discovery protocol. Global discovery happens over the internet using
  [discovery](https://docs.syncthing.net/users/stdiscosrv.html) and
  [relay](https://docs.syncthing.net/users/relaying.html) nodes operated by
  volunteers. These nodes only see your IP and device ID so you may be perfectly
  happy to use them (and there is the option to run your own), but this article
  explains how to configure Syncthing to keep everything local.
- Syncthing works really well deployed to an always-on server that can act as
  one of the devices to synchronize with. I use a Raspberry Pi with an external
  USB SSD connected to my gigabit home ethernet network. My main computer is
  connected to the same network so if I ever need to resync, I have high speed
  access to my files over the local network rather than waiting to download them
  from a cloud sync service. However, exposing that server to the internet so I
  can continue to sync when I’m not home is a potential security risk. Instead,
  [it is firewalled so it can only be accessed via the Tailscale network](https://tailscale.com/kb/1077/secure-server-ubuntu-18-04/?q=ufw).
  This is easier than
  [exposing the various Syncthing protocols](https://docs.syncthing.net/users/firewall.html)
  and allows you to lock down the entire device.

{{< img-center src="/img/articles/private-p2p-encrypted-file-sync-syncthing-tailscale-syncthing-admin.png" alt="Screenshot of the Syncthing admin panel showing a remote device on the Tailscale network." width="100%" caption="The Syncthing admin panel showing a remote device on the Tailscale network." >}}

### Disadvantages / tradeoffs to consider first

Before we start, there are a number of disadvantages you should consider:

- The system is only as secure as the devices on it i.e. if you run a server as
  one of the nodes in the sync network, you are responsible for its security.
  Unlike relying on the security teams at Google or Microsoft, you need to
  manage the security of each device. Syncthing has a beta feature for
  [untrusted device encryption](https://docs.syncthing.net/users/untrusted.html)
  that may add some protection.
- Whilst Tailscale works on both iOS and Android, Syncthing has limited mobile
  support. There is a
  [Syncthing client for Android](https://github.com/syncthing/syncthing-android),
  but there is
  [no official client for iOS](https://docs.syncthing.net/users/faq.html#is-there-an-ios-client),
  only a [third-party commercial option](https://www.mobiussync.com/). The
  experience will not be anywhere near as good as centralized products you may
  be used to.
- There is no file browser web UI. Syncthing has a management interface but it
  does not provide file browsing or editing. Files simply exist on disk so you
  could install a third-party web UI to do this, but it’s not part of Syncthing.
- Limited file sharing. It’s easy to make a public link for a file on Dropbox or
  Google Drive. This is impossible with Syncthing - by design. You can share
  folders with other Syncthing users, but they must already be using Syncthing.
- This is file sync, not backup. Syncthing supports
  [versioning](https://docs.syncthing.net/users/versioning.html) and
  [different folder types](https://docs.syncthing.net/users/foldertypes.html)
  e.g. send only, but by default file changes are synced to all devices. You
  should have a separate system for on- and off-site backups. I use a
  combination of Apple Time Machine and [Arq](https://www.arqbackup.com/) on
  macOS and [Restic](https://restic.readthedocs.io/en/stable/) for Linux.
- Consider where your files are. If you only have 2 devices in the network, sync
  speed will be limited by the availability and network bandwidth of the other
  device. This isn’t a problem if you’re on a fast local home network but what
  if you suddenly need to resync when travelling? Or if there is a network/power
  outage at home when you’re not there? It’s probably a good idea to have at
  least 3 devices, one of which is always-on.

Everything is a tradeoff - as yet there are no good private P2P file sync
options that also include great mobile support with file sharing and a web UI.
Unless you are a purist, it’s perfectly reasonable to use cloud sync services
for files when those features are important, and use Syncthing for more private
files!

### Step 1 - Set up Tailscale

[Tailscale](https://tailscale.com/) is free for up to 20 devices. Once
installed, it automatically configures a P2P virtual private network (VPN) which
allows you to access any other device as if it were on the same, local network.
This works transparency wherever you are - on your actual home local network or
elsewhere. Configuration is centralized through Tailscale’s admin panel, but
network traffic remains decentralized and encrypted via the P2P VPN.

1. You will need at least two systems to sync between.
2. [Sign up for Tailscale](https://tailscale.com/start) and
   [configure](https://tailscale.com/kb/1017/install/) it on both systems.
3. Verify you can connect to your other device by pinging its private IP (in the
   `100.64.0.0/10` subnet).
4. Optionally, enable the
   [MagicDNS feature](https://tailscale.com/kb/1081/magicdns/). This will allow
   you to reach the other devices by using a
   [machine name](https://tailscale.com/kb/1098/machine-names/) rather than
   their IP address. This is not required because device IPs are static, but it
   makes the Syncthing setup neater and easier.
5. If you are deploying to an always-on server, you can
   [lock it down to block all public internet traffic](https://tailscale.com/kb/1077/secure-server-ubuntu-18-04/?q=ufw)
   and only allow connections via Tailscale.

You now have your own P2P virtual private network and can communicate with every
device as if it were on your local network regardless of your physical location.
So long as you have a route to the other machines e.g. over the internet, they
will always be available on the network.

{{< img-center src="/img/articles/private-p2p-encrypted-file-sync-syncthing-tailscale-ping.png" alt="Screenshot of a ping result showing a low latency private P2P connection." width="100%" caption="Ping result showing a low latency private P2P connection." >}}

### Step 2 - Set up Syncthing

[Syncthing](https://syncthing.net/) is an open source file synchronization
project that stores files locally on each device connected within the cluster.
It works on all major platforms so works well with client computers e.g. laptops
as well as deployed onto always-on servers.

1. [Install Syncthing](https://docs.syncthing.net/intro/getting-started.html) on
   at least two devices.
2. In the web UI go to Actions > Settings > Connections and untick the Global
   Discovery and Enable Relaying options if already set.
3. Click Add Remote Device in the bottom right of the web UI and enter the
   Device ID from the other device. Before clicking Save, click Advanced and in
   the Addresses box, replace “dynamic” with `tcp://hostname` where `hostname`
   is the Tailscale [machine name](https://tailscale.com/kb/1098/machine-names/)
   of your other device. If you have problems with this, you can replace this
   with the Tailcale IP address instead and troubleshoot the MagicDNS issue
   separately.
4. After a few moments, you should see the new remote device connected with the
   Tailscale IP address listed.
5. Verify it cannot connect to the remote device by disconnecting from Tailscale
   (it may take a few minutes to time out and show an error).
6. Optionally
   [configure Syncthing to only listen](https://docs.syncthing.net/users/config.html#listen-addresses)
   on the Tsilscale address.

{{< img-center src="/img/articles/private-p2p-encrypted-file-sync-syncthing-tailscale-syncthing-config.png" alt="Screenshot of Syncthing device config." width="100%" caption="Syncthing device config." >}}

### All done

That’s it! You now have a private, decentralized P2P file sync system.
