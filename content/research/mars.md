---
title: "How will the internet work on Mars?"
date: 2021-06-07T12:00:00+00:00
draft: false
summary:
  An exploration of interplanetary networking, how it costs $1bn to put YouTube
  on Mars, and why Ethereum is better than Bitcoin as a Mars currency.
type: research
isPage: research
isSubpage: mars
pageType: feature-article
customStyle: true
headerType: fixed
hidePlanes: true
hideLines: true
ogImg: /img/research/artwork-mars.jpg
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is co-founder of Console. From 2009-2018, David was CEO at Server Density, a
  SaaS server monitoring startup used by hundreds of customers to collect
  billions of time series metrics from millions of servers. He is also a
  researcher in sustainable computing at Uptime Institute and affiliated with
  Imperial College London. David has been a developer for over 15 years.
---

There are many challenges to building human settlements on Mars. The most
efficient
[launch opportunity windows](https://en.wikipedia.org/wiki/Exploration_of_Mars#Launch_windows)
only [arise](https://en.wikipedia.org/wiki/Orbital_period#Synodic_period) every
2.2 years when Mars is closest to Earth. Best journey times are 3-6 months. The
atmosphere is primarily CO2, and it is very cold.

Once we have figured out how to get there and how to reliably support human life
([some are aiming for this decade](https://en.wikipedia.org/wiki/SpaceX_Mars_program)),
questions of quality of life become relevant. This includes producing water and
food, staying fit and healthy, socialising and entertainment. Normal things
humans like to do.

{{< research/mars/habitat-distance >}}

One of the resources we have come to take for granted is access to the internet.
Whether to look up information, send email or watch a video, internet access is
now fundamental to modern life. However, all of these services are based on
Earth. The internet was designed based on a number of assumptions that will no
longer be true if we want to offer the same experience to citizens of Mars.

This article will examine those assumptions, discuss the challenges and consider
possible solutions to setting up the internet on Mars.

{{< nav-wrapper--open id="wrapper-1" anchor-name="a-earths-internet" >}}

### Earth’s internet

The internet is a large group of interconnected networks. Each network has one
or many devices connected to it, each with its own IP address. When you access a
service hosted on the internet, such as a website, your local computer uses
several protocols to figure out how to communicate with the destination, make a
request to it, and get the response back to you. If the destination is on the
same network as your device, this may involve a connection over a single
network, probably via a network switch or router. On the public internet, this
usually involves multiple switches, routers and networks owned by many different
organizations.

On Earth, accessing websites primarily involves Transmission Control Protocol
(TCP), Internet Protocol (IP) and Hypertext Transfer Protocol (HTTP). TCP/IP
deals with connecting your device and the transmission of data to/from the
destination. When you make a request to a website, TCP/IP deals with opening a
connection, routing the data, and ensuring the data is transmitted correctly.

Before any data is sent, the protocol must open a connection with the
destination. Known as the SYN, SYN-ACK, ACK
[handshake](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment),
this establishes a connection between two devices. Once open, further data can
be transmitted. TCP provides guarantees that data will arrive in order and any
lost data will be re-transmitted. TCP assumes it will receive a rapid response
and where there is data loss, congestion algorithms throttle the network
performance.

This is a simplified description, but is sufficient to understand the challenges
with establishing the internet on Mars.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-2" anchor-name="a-the-problem-with-connecting-mars--earth" >}}

### The problem with connecting Mars & Earth

Whilst the average
[distance between Earth and Mars](http://www.distancetomars.com/) is 225 million
km / 140 million miles,
[it can range](https://en.wikipedia.org/wiki/Mars#Closest_approaches) from 54.6
million km / 33.9 million miles to 401 million km / 249 million miles. Assuming
that a link between the planets can transmit data at the speed of light, direct
transmission of a single data packet could therefore take between 3-22 minutes
to reach its destination - ✍︎
[see our calculations](https://github.com/consoledotdev/mars-internet/blob/main/calculations.ipynb).

If a person on Mars tried to access a service located on Earth, not only would
they need to wait for the requested data to travel from Earth to Mars, but just
completing the 3-step TCP handshake to establish the connection would take
between 9-66 minutes - ✍︎
[see our calculations](https://github.com/consoledotdev/mars-internet/blob/main/calculations.ipynb).

Further, TCP’s built in congestion control and packet loss detection is not
designed for such long response times. Packets must be acknowledged,
[by default in less than 1 second](https://tools.ietf.org/html/rfc6298),
otherwise they will be re-transmitted. For Earth/Mars communication, this is
impossible.

{{< research/mars/handshake >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="a-separate-earth-and-mars-internet" >}}

### Separate Earth and Mars internet

The obvious solution to the problem of long transmission times from Mars to
Earth is to avoid such long-distance transmissions in the first place! This
would mean setting up “the internet” from scratch on Mars and either replicating
the same services or having Mars-specific services.

The initial Mars missions will be about exploration and setting up the basic
requirements for life, but over time it is reasonable to expect that people
living on Mars would want to access the same internet services in the same way
they are used to on Earth. Whether that is email, search, video streaming, or
gaming, we have an expectation of what we can access online.

Deploying these services on Mars could follow the same approach as on Earth:
installing servers in at least one data center and using the standard Earth
internet protocols to bootstrap the first network. The vast scale of Earth
networks run by the likes of Google and Amazon may come eventually, but the
demand on Mars internet services would grow gradually with the number of
settlers.

But what about all the content? It is easy to set up a few network switches and
servers, install Nginx and PostgreSQL then launch some websites, but this would
be like going back to the early 90s on Earth. Very few websites. You could only
email other people on Mars. And of course no videos on MarsTube.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="a-blockchain-crypto--eventual-consistency"  >}}

#### Blockchain, crypto & eventual consistency

Users of relational databases like MySQL and PostgreSQL tend to make use of them
for their [ACID](https://en.wikipedia.org/wiki/ACID) properties. Atomicity and
Consistency are important for use cases like finance, but replicating
transactions over high-latency connectivity would be a challenge.

Dealing with transaction latency could be solved by blockchain currencies like
Bitcoin and Ethereum. The design of the blockchain ledger is already distributed
and it takes time for transactions to be confirmed by sufficient members of the
network. This is supposed to be every ~10 minutes but
[recent confirmation times](https://www.blockchain.com/charts/avg-confirmation-time)
averaged 100 minutes until mid 2021 when they started spiking sometimes spiking
to multiple hours and even half a day.

If real-time transactions are important,
[the scalability of blockchain transaction rates](https://en.wikipedia.org/wiki/Bitcoin_scalability_problem)
is a problem. However, the existing banking system is used to experiencing
several days of settlement delay with cheques, transfers and other types of
transaction. If settlement times of several hours are acceptable then deploying
cryptocurrency nodes in a distributed network that covers both Earth and Mars
could be how a Mars-based monetary system is established. The first steps have
already been taken with
[Ethereum nodes being launched into space](https://www.coindesk.com/spacechain-to-deploy-commercial-blockchain-tech-with-spacex-launches-in-june),
although so far just as a secure location for wallet storage.

[Energy consumption is also a major challenge for Bitcoin](https://cbeci.org) on
Earth but if solar energy is the primary source of power on Mars, that mitigates
the problem. Solar energy is affected by weather which is different on Mars -
[dust storms](https://en.wikipedia.org/wiki/Climate_of_Mars#Dust_storms) would
be the primary concern rather than cloud cover. Batteries would be needed during
storms, and at night. Moving to
[proof of stake](https://en.wikipedia.org/wiki/Proof_of_stake) rather than proof
of work would also help, so
[Ethereum may be a better option](https://blog.ethereum.org/2021/05/18/country-power-no-more/)
than Bitcoin because of its significantly lower energy requirements.

These types of real-time transactions tend only be necessary in a small number
of situations. Watching videos, posting comments, reading blogs, sending emails,
etc are all pretty delay-tolerant. Eventual consistency where the data syncs up
eventually may be sufficient.

Databases such as [CouchDB](https://couchdb.apache.org/) were designed with
specific [offline](http://www.offlinefirst.org/) use cases in mind. Distributed
file storage such as [IPFS](https://ipfs.io) could also provide a solution
because it offers not just eventually consistent replication but also Peer to
Peer communication - once a single IPFS user on Mars has downloaded a copy of
the file, it can be served to other users locally. But how do the files get
there in the first place?

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="a-interplanetary-networking" >}}

{{< rich-title-3 icon="broadcast" id="interplanetary-networking" >}}
Interplanetary networking {{</ rich-title-3 >}}

{{< research/mars/space-networks >}}

NASA already runs several communication networks in space:

- [Near Space Network](https://esc.gsfc.nasa.gov/projects/NSN): A network of
  ground-based antennas for communication with satellites in orbit around the
  Earth.
- [Space Network](https://www.nasa.gov/directorates/heo/scan/services/networks/sn):
  A network of ground stations that communicate with Earth orbiting satellites
  for tracking and relay communications, such as for the International Space
  Station and Hubble Space Telescope.
- [Deep Space Network](https://www.nasa.gov/directorates/heo/scan/services/networks/deep_space_network/about):
  Consists of an array of Earth-based radio antennas (in California, Spain,
  Australia) and several orbiting satellites to allow communication with
  spacecraft.

Each of these is used for communication with specific missions rather than
general purpose communication.
[Many real-world examples have been tried and tested](https://www.nasa.gov/pdf/694634main_Pres_Mars_Comm-Nav_Evolution-Mars_Society.pdf),
most recently with the command and control
[Mars Relay Network for the Perseverance Mars Rover](https://www.nasa.gov/feature/jpl/the-mars-relay-network-connects-us-to-nasa-s-martian-explorers).
These networks may form part of an Interplanetary Network, especially the
near-Earth components, but are not a complete, general purpose solution.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="a-delay-tolerant-networking" >}}

#### Delay-Tolerant Networking

{{< simple-table name="dtn" data-file="research/mars" class="mars-illustration" >}}

Back in 2007, a new
[Delay-Tolerant Networking Architecture](https://tools.ietf.org/html/rfc4838)
was proposed by the IETF specifically designed for the Interplanetary Internet.
It assumes such networks may be “occasionally connected” and have frequent
partitions, with deep-space the primary but not exclusive use case.

The proposed DTN architecture sits between the transport and application layers,
and introduces the concept of a “bundle layer”. This new layer is formed of a
number of relay nodes which have persistent storage, and are responsible for the
reliable communication of data between nodes. Unlike TCP/IP, which requires
successful acknowledgment to the source by the destination, acknowledgements in
the DTN are optional. The focus of DTN is the storage-and-forwarding of these
bundles, where the storage can happen for long periods of time, rather than the
routing of much smaller packets as is typical in IP networks.

DTN also differentiates from TCP/IP by increasing the length of messages to make
the most of connectivity when it becomes available, and by introducing source
based relative service classes so that more urgent bundles can be prioritized.
Different delivery options can be specified by the application using DTN
depending on whether the sender requires bundle delivery reports or more
reliable transfers. The idea is that a bundle is a more useful unit of data
which can be scheduled for transmission with a better understanding of the
application it is supporting.

The DTN RFC uses the postal service as an analogy, where the sender can choose
different delivery options depending on the priority. For example, the sender
might post two items into a post box on the street, where the items are held for
a period of time before being collected. Once in the system, their priority
determines how quickly they are routed to the next step, and ultimately the
destination. The DTN delivery option is similar to postal tracking options,
where there is flexibility to choose between no tracking all the way through to
high-reliability and acknowledgement of successful delivery.

Congestion control remains a challenge for these types of network protocols.
Data volumes are ever increasing, so very large persistent data storage will be
required to maintain capacity to store bundles, and flow control is necessary to
manage this properly.
[As described in the RFC](https://datatracker.ietf.org/doc/html/rfc4838):

{{< quote >}} a DTN node receiving a bundle using TCP/IP might intentionally
slow down its receiving rate by performing read operations less frequently in
order to reduce its offered load. This is possible because TCP provides its own
flow control, so reducing the application data consumption rate could
effectively implement a form of hop-by-hop flow control. Unfortunately, it may
also lead to head-of-line blocking issues, depending on the nature of bundle
multiplexing within a TCP connection. {{< /quote >}}

Careful consideration of network security will be important because the obvious
attack vector for DTN is flooding the system with very large bundles. Access
control will be needed, and perhaps agreement as to the type of applications
that may be permitted to use the network. For example, video streaming might not
be an appropriate use - a single user streaming at high-resolution could
saturate the capacity - but many users browsing mostly-text would be allowed.
For this reason, DTN features strong security as part of the protocol.

The latest version of the bundle protocol defined in
[RFC 5050](https://tools.ietf.org/html/rfc5050) -
[Bundle Protocol 7](https://datatracker.ietf.org/doc/draft-ietf-dtn-bpbis/) - is
in draft, and has reference implementations in various languages including
[C](https://upcn.eu), [Go](https://github.com/dtn7/dtn7-go) and
[Rust](https://github.com/dtn7/dtn7-rs/).

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="a-very-long-round-trip-times" >}}

#### Very long round trip times

Applications will also need to be refactored so they become delay-tolerant, and
networks may need to become more application-aware so that routing can happen
based on the type of data being requested.

However, even with DTN storing and forwarding data perfectly, the application
will still experience very long round trip times. This could be due to the
simple physics of speed of light transmission over long distances, but it could
also be because the capacity at either end (or both) is fully utilized. Such
limits already exist with the Deep Space Network where resources are limited,
and scheduled far into the future.

This is where the
[Licklider Transmission Protocol (LTP)](https://tools.ietf.org/html/rfc5325)
comes into play.
[A reference implementation](https://sourceforge.net/projects/ion-dtn/) already
exists which shows how LTP operates over the data link layer (UDP during
development or IP in live environments). LTP has several features, such as no
handshake, options for reliable and unreliable transmission, and unidirectional
communication to avoid contention by waiting for a response.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="a-overlay-network" >}}

#### Overlay network

The physical implementation of DTN and LTP is through the
[Interplanetary Overlay Network](https://www.nasa.gov/directorates/heo/scan/engineering/technology/disruption_tolerant_networking_software_options_ion).
This might be a series of relay nodes operating in the physical space between
the planets, with relay antennas on both planets. Just like how countries and
continents on Earth are connected via under-sea cables, the planets would be
connected through nodes positioned in space. The
[Mars Telecommunications Orbiter](https://en.wikipedia.org/wiki/Mars_Telecommunications_Orbiter)
was one such node due to come online in 2010, but it was cancelled in 2005.

{{< research/mars/dtn-networking >}}

The sheer distance means that communication delays are unavoidable, so it will
be necessary to use these types of protocols which at least allow for
communication between planets over several hours. However, where time is not
especially important, local storage of data with periodic refreshes could be an
alternative.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-9" anchor-name="a-transporting-large-files-to-mars" >}}

### Transporting large files to Mars

Rather than connecting the planets directly, an alternative approach would be to
periodically package up the content generated on Earth and physically ship it on
the regular missions planned by the likes of SpaceX. Data would be generated on
both planets, then asynchronously synced up later.

This might look something like the
[AWS Snowmobile](https://aws.amazon.com/snowmobile/) which allows transferring
up to 100PB of data inside a shipping container. The list pricing of $0.005 / GB
/ month means a 6 month journey would cost $3m USD just in storage fees. At
[Elon Musk’s 2004 aspirational goal](https://www.commerce.senate.gov/2004/5/space-shuttle-and-the-future-of-space-launch-vehicles)
of $500 per pound of payload delivered to orbit, the 68,000 pound Snowmobile
container would cost $34m to launch. However, this assumes that all rocket
stages are recoverable.

Current specs for the
[Falcon Heavy](https://www.spacex.com/vehicles/falcon-heavy/) suggest a maximum
Mars launch capability of 16,800 kg / 37,040 lb with all stages expendable. This
might mean using [AWS Snowball](https://aws.amazon.com/snowball/) devices
instead, which in storage optimized mode can transport up to 80TB each. Such a
launch would cost more than the $90m list price where stages can be recovered.
No doubt AWS would also charge for the time taken to fill them on Earth, wait
for the launch window, unload the data on Mars and then ship them back
(presumably now filled with content generated on Mars).

Back in 2015,
[YouTube was said to generate](https://www.quora.com/What-is-the-total-capacity-of-YouTube-storage/answer/Rasty-Turek)
around 35PB of data per year, and had at least 400PB of total storage
requirements. If that had just continued to grow at the same rate, the total
storage for YouTube would now have reached over 600PB.
[At 22.5Kg each](https://docs.aws.amazon.com/snowball/latest/developer-guide/specifications.html),
a single Falcon Heavy could carry 746 AWS Snowball devices, or about 60PB.
Transporting all of YouTube would therefore require at least 10 Falcon Heavy
flights, at a launch cost of almost $1bn. That doesn’t include the cost of the
Snowball devices themselves.

✍︎
[see our calculations](https://github.com/consoledotdev/mars-internet/blob/main/calculations.ipynb).

{{< research/mars/ship-youtube >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-10" anchor-name="a-internet-access-on-mars" >}}

### Internet access on Mars

How will we access the internet on Mars itself? Will the Mars pioneers follow
the same approach of digging up the surface of the planet to bury cables? Maybe.
There are no oceans so we can more efficiently connect regions with redundant
connectivity, compared to
[all those sub-sea connections](https://www.wired.com/story/yemen-internet-blackout-undersea-cable/)
on Earth
[which regularly break](https://www.wired.com/story/yemen-internet-blackout-undersea-cable/)
and are difficult to repair. Or perhaps they will string cables up on poles like
[has been common in Asian cities](https://asia.nikkei.com/Editor-s-Picks/Tea-Leaves/Bangkok-grapples-with-sky-spaghetti-in-modernization-push)
on Earth.

Mobile connections are much more common in regions on Earth where wires are too
expensive or difficult to deploy. Fixed-line networks have the benefit of
low-latency, but in rural areas, and regions with less developed infrastructure,
satellite connectivity could be preferred. [Starlink](https://www.starlink.com/)
gives us a glimpse of an alternative approach: launch thousands of low-Mars
orbit satellites and give customers hardware receivers for high-speed
connectivity anywhere on the planet.

Indeed, whether it is just a hidden marketing Easter-egg or not, the current
[Starlink Terms of Service](https://www.starlink.com/legal/terms-of-service?regionCode=US)
already cover this scenario:

{{< quote >}} For Services provided to, on, or in orbit around the planet Earth
or the Moon, these Terms and any disputes between us arising out of or related
to these Terms, including disputes regarding arbitrability (“Disputes”) will be
governed by and construed in accordance with the laws of the State of California
in the United States. For Services provided on Mars, or in transit to Mars via
Starship or other spacecraft, the parties recognize Mars as a free planet and
that no Earth-based government has authority or sovereignty over Martian
activities. Accordingly, Disputes will be settled through self-governing
principles, established in good faith, at the time of Martian settlement.
{{< /quote >}}

{{< research/mars/globe-maps >}}

{{< div--close >}}
