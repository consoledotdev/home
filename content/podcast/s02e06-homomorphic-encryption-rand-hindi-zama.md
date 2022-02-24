---
title: Homomorphic encryption
who: Rand Hindi
whoLink: https://twitter.com/randhindi
org: Zama
orgLink: https://zama.ai/
what: 
 We discuss the principles behind encryption, homomorphic encryption, and 
 programmable bootstrapping, how these technologies can ensure user data 
 privacy, what is changing that is making them more relevant to today, and how 
 developers should be thinking about building on new protocols from HTTP to 
 HTTPS to HTTPZ.
season: 2
episode: 6
date: 2022-02-10T06:00:00Z
duration: 28:28
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/0684a0d5-f177-4c80-a9a6-d69652c9fb59/audio/a1adb2a1-a854-483f-a0bd-c32d672ffa10/default_tc.mp3
draft: false
summary:
  Homomorphic encryption, a devtools discussion with Rand Hindi (Zama). Episode 
  6 (Season 2) of the Console DevTools Podcast.
metaDescription:
  Homomorphic encryption, a devtools discussion with Rand Hindi (Zama). Episode 
  6 (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/zama-rand-hindi-profile.jpeg
topImg2Src: /img/favicons/zama.ai.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/0684a0d5-f177-4c80-a9a6-d69652c9fb59?dark=true
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is co-founder of Console. From 2009-2018, David was CEO at Server Density, a
  SaaS server monitoring startup used by hundreds of customers to collect
  billions of time series metrics from millions of servers. He is also a
  researcher in sustainable computing at Uptime Institute and affiliated with
  Imperial College London. David has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode we speak to Rand Hindi, CEO of [Zama](https://zama.ai/), an open
source framework for securing AI applications in the cloud. We discuss the
principles behind encryption, homomorphic encryption, and programmable
bootstrapping, how these technologies can ensure user data privacy, what is
changing that is making them more relevant to today, and how developers should
be thinking about building on new protocols from HTTP to HTTPS to HTTPZ.

Things mentioned:

- [Snips](https://snips.ai/)
- [Zama](https://zama.ai/)
- [Homomorphic encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption)
- [Programmable bootstrapping](https://eprint.iacr.org/2021/091.pdf)
- [PyTorch](https://pytorch.org/)
- [TensorFlow](https://www.tensorflow.org/)
- [WebAssembly](https://webassembly.org/)
- [Rust](https://www.rust-lang.org/)
- [Confidential computing](https://confidentialcomputing.io/)
- [Differential privacy](https://en.wikipedia.org/wiki/Differential_privacy)
- [Solidity](https://docs.soliditylang.org/en/v0.8.10/#)

{{< rich-title-5 icon="future-head" >}}About Rand Hindi{{</ rich-title-5 >}}

Dr Rand Hindi is an entrepreneur and deeptech investor. He is the CEO at Zama,
an open source homomorphic encryption company, and an investor in 30+ companies.
Prior to Zama he created Snips, the first edge-based, private by design voice
solution for OEMs, which was acquired by Sonos in 2019.

He has received the TR35 away from the MIT Technology Review, selected as a "30
under 30" by Forbes, is a lecturer at Sciences Po in Paris and is an advisor to
multiple companies. He was previously a member of the French Digital Council
where he focused on AI and Privacy issues.

### Highlights

{{< podcast-episode/clipping time="15:36"  >}}

**Rand:** So how do you convince companies to adopt homomorphic
encryption? Well, it turns out that companies increasingly differentiate between
the data and the usage of the data, and it turns out that the data itself is
often a liability because you get government surveillance, so you become a
honeypot for data breaches and hackers. There is a whole bunch of potential
privacy scandals that can emerge.

If anything, companies don't want to store user data. What they want is to use
the data to do some meaningful, maybe train a neural network or do analytics or
provide a service, all of which you can do with homomorphic encryption.
Homomorphic encryption enables you to use the data without actually seeing the
data. That's the whole point.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="23:55"  >}}

**Rand:** If you can't pull the thread of homomorphic encryption all the
way to consumer applications and web apps and things like that, it's pretty
obvious that at some point the user is going to need to manage their FHE keys
when they're accessing their services, because you need to encrypt and decrypt
the data and contrary to SSL, TLS, you are the one keeping the keys. You should
never send it to the service provider.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console Podcast. I'm David Mytton, co-founder of
console.dev, a free weekly newsletter highlighting the best and most interesting
tools for developers. In this episode, I speak with Rand Hindi, CEO of Zama, an
open source framework for securing AI applications in the cloud. We discuss the
principles behind encryption, homomorphic encryption, and programmable
bootstrapping, how these technologies can ensure user data privacy, what is
changing that is making them more relevant to today, and how developers should
be thinking about building on new protocols from HTTP to HTTPS to HTTPZ. We're
keeping this to 30 minutes, so let's get started. I'm here with Rand Hindi.
Rand, thanks for joining the Console Podcast.

**Rand:** Thank you, David.

**David:** Let's start with a brief background. Tell us a little bit about what
you are currently doing and how you got here.

**Rand:** I've been a developer since I was a kid, started coding when I was 10
years old, built my first company as a teenager in the nineties. It was social
network, if you want to know. Then in 2003, I got into artificial intelligence,
did a PhD in AI, went on to create a startup called Snips, working on voice
assistance. That company got acquired in 2019 by Sonos and since then I've been
running a company called Zama, where we develop a homomorphic encryption
framework for developers who want to create more secure applications in the
cloud.

**David:** So let's start at the beginning, then, with encryption. What is
encryption and where do you get into homomorphic encryption?

**Rand:** Well, the idea of encryption is that you're taking a piece of data,
you're scrambling it with a secret key, some kind of very long, unreadable
password, and the result is effectively gibberish that you can't really
understand unless you have the key to turn it back into original form. So
encryption is something that's been around forever, effectively. People used to
do it by hand and with computers, we've had things like RSA, AES that have been
used in everything from communications to this little lock on your browser when
you connect to our website securely.

**Rand:** Homomorphic encryption is the ability to compute on the encrypted
data itself without having to decrypt it. So you still encrypt the data the same
way you've always done it. It's still gibberish, but the way you've encrypted
it, preserved the structure of the mathematical operations on the encrypted
data, so you can addition or multiply encrypted data. The result will be
encrypted as well and if you decrypt it, you get the same result as if you had
done it on the data itself. And so this is idea of homomorphisms in mathematics
is, you're keeping the same structure, even though you're changing the way it
looks.

**David:** Makes sense. And where does fully homomorphic encryption come into
that?

**Rand:**  I would say that today, homomorphic encryption and fully homomorphic
encryption are the same. It's just that traditionally you could only do some
very specific operations on encrypted data. You could do either only additions
or only multiplications, but you couldn't really do both. The problem is, if you
can only do one or the other, you can't really do a Turing-complete system. You
can't really compute anything you want. You're very limited. Fully homomorphic
encryption means that you can compute anything on encrypted data, so you can
take any Boolean circuit, any mathematical circuit, any machine learning model,
and you can run it on encrypted data without any problem.

**David:**What would the use cases be for this, then?

**Rand:**  There are many use cases for homomorphic encryption. Some of them
exist today. A lot of people are thinking about it from the data sharing
perspective, so how can different companies collaborate on a data set that they
don't want to share? I think that's interesting, but it's missing the big
picture, which is enabling everything that you're doing in the cloud to be done
encrypted. Why does that matter? Today, if you want to use the cloud for
processing, or if you're a company that's using a SAS product or if you're a
consumer using a mobile app, whatever, you're going to be sending data to a
server somewhere. You're basically trusting the server not to get hacked, not to
get any government surveillance access on top of it, not to have a rogue
employee look into the database. Your privacy and the security of the data of
your product relies on securing the server itself.

**Rand:** We all know how this ends up working. It doesn't. Period. Right?
Homomorphic encryption enables you to keep the data encrypted server side during
processing, the keys always remaining with the user. So even if someone hacked
into the server, even if the government came and said, "You have no choice and
you have to give me access to the servers," they would have nothing to steal.
They would have nothing to see because the data would not be decryptable without
the user's consent and key. And so when you think about it this way, well,
privacy and data security is no longer a concern. You could literally use the
cloud and never have to worry about securing the data on it.

**David:** So it's changing the trust model away from having to trust the
centralized authority, whether that's the government or private organization,
down to the user just being able to trust the technology that's running locally,
the encryption, and then they can send their data and still get many of the
benefits, as if it was all held centrally. Is that how it would look like?

**Rand:** Exactly. Exactly. We have an internal joke at Zama that you should
never just trust, right? It is just not... Trust is just not acceptable as a
security measure.

**David:** So this sounds all really great. Why is it not in more widespread use
at the moment?

**Rand:** The reason that homomorphic encryption hasn't been used everywhere yet
is because it's been too slow, too limited and too complicated to use. It was
too slow, about a million times slower than doing the same computation without
encryption, so something that used to take a second would now take 11 days, so
not exactly user-friendly.

**David:** Yeah.

**Rand:** It was very limited. You know, as I mentioned, you could only do a few
things, additions, multiplications, but if you wanted to do something more
complicated, like a neural network, it just wouldn't work. And finally, it was
complicated. If you didn't have a PhD in cryptography, there was no way that you
could ever use this kind of technology. And so it remained this academic topic
that was interesting, not practical.

**David:** And is that the kind of thing that you are trying to solve at Zama?
And your concept to run programmable bootstrapping, where does that come in?

**Rand:** Absolutely. That's exactly what we're solving at Zama. We created a
new encryption technique that is an extension of an existing, previous,
well-known technique now, so we're not reinventing the wheel. We're basing it
off on very, very strong and well-studied cryptographic precepts, but we've
added a lot of new features such as the concept of programmable bootstrapping.
When you look at homomorphic encryption, when you encrypt the data, you have to
add some random noise on the last few bits of data. This is for security
purposes. If you don't add this random noise, well, for a number of reasons, the
security breaks down. The problem is when you operate on noisy cyphertext, on
data to which you added noise, the noise adds up. So every time you multiply two
encrypted pieces of data, every time you add them together, the noise grows and
grows and it eats more and more of the least significant bits and eventually you
start eating up the actual bits of data that you wanted to keep encrypted.

**Rand:** And so to avoid doing that, whenever the noise has grown too much, you
stop what you're doing and you do a special operation called bootstrapping,
which basically reduces the noise back down to the original levels so that you
can keep on computing again. And so that's what you do all the time. You
compute, oh, the noise has grown too much, you stop, you bootstrap, you compute,
and so on and so forth. Bootstrapping is what is currently expensive and slow
with homomorphic encryption, so we found a way to leverage the time you're
spending bootstrapping to compute a function on the encrypted data itself. So
what you're getting as an input is a noisy encryption of X and what you're
getting as an output is a clean encryption of f(X) and f can be whatever
function you want to encode.

That opens up a zillion possibilities: activation functions in neural networks,
you can start doing homomorphic comparisons which people couldn't do before, you
can calculate the maximum value between two encrypted values. Nobody could do
that before. You could do any kind of weird non-linear functions. You could do,
effectively, any lambda you can compute this way. So this completely changed the
game and enabled us to get a big speed up in efficiency. So that was the first
thing that we cracked, the efficiency on the mathematics side of things.

There are two more things that we've been focusing on, because remember I
mentioned homomorphic encryption, let's call it FHE for short, now, fully
homomorphic encryption, FHE. FHE is slow. FHE is hard to use. FHE is limited in
terms of features. Programmable bootstrapping removes the limitation in terms of
what you can do, right? So we've solved that. This is done. You can move on. The
next two things you have to figure out is speed, it has to be fast enough, and
usability. It has to be usable by developers who know nothing about
cryptography: data scientists, application developers, so on so forth.

The first part we're solving with hardware. By using GPUs, FPGAs, and very soon,
dedicated FHE accelerators, you can get the speed up from 100 X to 1,000 X
compared to what you've got today, which gets us to a level latency and cost,
which would make homomorphic encryption usable in databases in pretty much any
use case. So that I would say is almost solved. There is a Moore's Law of
homomorphic encryption happening, where we are gaining a 10 X speed improvement
every couple of years, thanks to new hardware, so by 2025, you can expect this
technology to be fast enough that you won't even notice it from the user's
perspective. So that's done.

The final part, which I think is really important, is making it usable by any
developer, and for that, we created a framework that can compile traditional
high level code, like Python, down to homomorphic operations that you get and
run on whatever hardware you want. So as a developer, I write Python code. I use
Pytorch or TensorFlow to build a neural network or something like that, and then
I can call the special compile FHE function that our network provides, and that
will take care of everything else. The only constraint you have as a developer,
is to remember that FHE will always be a little bit slower, so you have to think
about that in building your model, but that's the same as if I told you, you
have to run your software on some old machine. You have to work around that
effectively.

**David:** That makes sense. So from a developer perspective, adopting this,
what would it look like from start to finish? If you were starting with a new
project, how would they go about interacting with this new approach?

**Rand:** Well, everything we do is open source. So if you're really curious
about the details, you can always go on our GitHub, Zama-ai, and then you can
find everything there. From a developer experience perspective, let's assume
you're not a cryptographer so you don't want to dabble with a low level
cryptographic primitive, right? You want to just write high level code as you do
every day. Let's imagine you want to build a neural network that runs on
encrypted data. You would use NumPy or maybe Pytorch, right? So let's say you're
using Pytorch. You would import Pytorch. You would train your model the same way
you always did it. Then you would only need to rewrite the inference function,
right, of your neural network. So you can do that in NumPy, traditional NumPy,
and then you basically call this function called Compile FHE. You parse it, the
inference function, as a parameter. You give it some extra parameters, like what
is a trade off between speed and precision, some stuff that you honestly don't
even have to worry about, click compile, and then you're done. And then on the
client side, your user or device, so your browser, there is an SDK that does the
encryption and decryption. That's it. There is nothing else you have to do. The
actual logic is written in traditional code.

**David:** What challenges do developers face when they're working on these kind
of things, particularly when facing implementation of secure encryption? Most of
the time you are advising people to avoid getting involved with the nuts and
bolts of that, and just interacting through the SDKs and through, say, the
Python libraries like you mentioned, but presumably there's quite a few
opportunities for mistakes, particularly with the encryption technology.

**Rand:** Well, I wouldn't say that there are that many opportunities for
mistakes in a framework like Concrete, so the framework we have in Zama is
called Concrete, because Concrete abstracts away all the cryptography for the
developer. From your perspective, there is no cryptography. The only thing that
you can mess up is maybe writing software in a way that isn't FHE friendly. So
homomorphic encryption can do stuff very well and some stuff it doesn't really
like, for example branching, if/else kind of statements, that cannot be done
efficiently with homomorphic encryption. So one thing we tell developers is,
avoid any kind of branching condition in your program. Always assume your
software will run in worse time, right? So that's one of the things you have to
keep in mind.

A second thing is, the more precision you need in your data, the more FHE is
going to require computation and so the slower it is going to get, so we tell
people, well, if you don't need 8 or 16 bits of data, don't use 8 or 16 bits of
data. If everything can fit in 2 to the power 4, then just use 4 bits, so why
use more? Just use the tightest possible data types that you can use
effectively. So these are things any developer can understand and you can mess
up the performance, but you won't mess up the security.

**David:** So this is all great for the user privacy and the security of their
data. What are the incentives from a company or service provider perspective,
because does that mean that they lose the ability to run analysis of the large
data sets they may be used to collecting over all these years?

**Rand:** I think actually the demand comes from companies right now. I would
say that, unfortunately, most consumers have given up on privacy, right? They're
like, "Yeah, well, whatever. It's too late." And I think they're right. They
shouldn't worry about it, right? They should give up trying to fight for privacy
because companies should guarantee privacy for users, right? Privacy shouldn't
be something on top of your mind. It should be something that's by default in
every product you use. That's how it should be built.

So how do you convince companies to adopt homomorphic encryption? Well, it turns
out that companies increasingly differentiate between the data and the usage of
the data, and it turns out that the data itself is often a liability, because
you get government surveillance, so you become a honeypot for data breaches and
hackers. There is a whole bunch of potential privacy scandals that can emerge.
If anything, companies don't want to store user data. What they want is to use
the data to do some meaningful, maybe train a neural network or doing analytics
or providing a service, all of which you can do with homomorphic encryption.
Homomorphic encryption enables you to use the data without actually seeing the
data. That's the whole point.

**David:** This kind of links into the idea of decentralization and Web 3 and how
that is changing, how people think about the ownership of data, but also where
processing is, whether that's local or using browser technologies like
WebAssembly and some of the local data stores. How are you thinking about how
this integrates into that future of web tech?

**Rand:** So our framework, the core cryptographic library, is actually built in
Rust. So if you like Rust like we do, we're big fans of Rust... Actually, I've
been a big fan of Rust since 2015. I've been using it in my previous company as
well. I remember at the time it was kind of like a very hippy move of using
Rust. It wasn't really something everybody was doing, but it was the right
choice and I'm really happy we did it and I'm even happier we use it now. So
technically speaking, you could use our framework in any kind of WebAssembly
enabled environment, right, and many blockchains today support WebAssembly. I
think you're pointing me to something which is really interesting and that I
personally am passionate about, which is enabling decentralized private
computation. So how could you leverage my device and your device to do compute
on people's data?

Well, the answer is, you can with a blockchain. The problem is, well, how do you
secure the data? Because if I'm going to be sending my data on some random
person's device, I want to make sure that person doesn't see my data. And this
is again where homomorphic encryption comes in. You see, homomorphic encryption
is the missing technology that enables a true, decentralized, public cloud
computer running on a blockchain. So, we wouldn't build that computer ourselves,
right? We're not a blockchain company, but we're very much hoping that our
technology will enable these companies to do that.

**David:** Where does the concept of confidential computing come into this? This
is the product set that many of the cloud providers are now offering, where they
are able to encrypt the processing operations in memory so you can trust a cloud
environment a lot better. Do you see that as a competitor or something that
works alongside it? What's your take on that?

**Rand:** Confidential computing is one level of extraction higher than
homomorphic encryption. If you want a kind of parallel, I would say confidential
computing is as if you said artificial intelligence, and homomorphic encryption
is as if you said deep learning. So in artificial intelligence, there are many
techniques, right? Deep learning is one of them. In confidential computing,
there are many techniques. Homomorphic encryption is one of them. We believe
very strongly that homomorphic encryption is the dominant technology in the
future. Just like deep learning became synonymous with AI, homomorphic
encryption will become synonymous with confidential computing, but there are
short term, between now and 2025, other technologies that work great for
specific use cases, multiparty computation, differential privacy, zero knowledge
proofs, and to some extent you probably will end up combining some of these in
your production system to maximize the efficiency. Homomorphic encryption is
going to be a key part of it, but not the only one all the time. Again, just
like AI, deep learning is not a silver bullet. You usually combine it with other
more traditional data science techniques to build something powerful. Same
thing's going to happen with confidential computing and homomorphic encryption.

**David:** Can you say a little bit more about the differential privacy
technique, because that's often cited by Apple as how they're able to build
their own machine learning models in contrast to how their competitors, and
they're usually referring to Google or Facebook in terms of the privacy that
they think is a human right. How do you see that as a useful technique?

**Rand:** Differential privacy is very useful when you have a lot of data that
you're combining from a lot of different users. It's not as useful when you're
trying to analyze a single piece of data for a single user. The way that
differential privacy works is, you take the data and you're adding some random
noise to the data. And the noise that you're adding is basically taken from some
statistical distribution. And the whole idea is that, well, if you're adding
random noise to data but you're doing that over, let's say, a million different
pieces of data, well, the average will zero out the noise, right? So the average
of data to which you added, let's say a normal [inaudible 00:21:01] will be the
actual number you want.

So it's very clever for analytics. It's very clever for training neural
networks, for things where we have a lot of data that you need to combine and
that's how people have been using it. It doesn't help you if you want to do
something like a database query, or if you want to do something like inference
on a singles user data, because by definition if you only get one piece of data
and this data is noisy, well, you can't retrieve the data. There is no
decryption of differential privacy, right? The decryption comes from the
aggregation of a bunch of data.

**David:** So it's just another tool in the set of...

**Rand:** It's another tool.

**David:** Right, so developers that can pick from different technologies,
there's confidential computing in cloud environment, homomorphic encryption for
those individual queries, and then differential privacy is used at scale. Is
that how you would see it?

**Rand:** That's how it looks today. I'm pretty convinced that things are going
to converge in the future. There are probably going to be vertical use cases
that will prefer one technology over another for efficiency reasons, but I would
assume that the mainstream technology is going to be very much FHE heavy, maybe
with some kind of bridges to other things sometimes. But I definitely feel that
FHE is, at least it's the easiest one to understand, because when you look at
multiparty computation, you're talking about replacing a server client
architecture with a distributed network of computers, for which you have to make
sure they have enough bandwidth and they're online and they don't collide and
there's a lot of other things you have to think about, right? It's as if I told
you, you were trying to replace an SQL database for serving some content on the
website with a distributed blockchain database. You can do it, but it doesn't
necessarily help you. It may be very complicated. FHE is the same, right? FHE is
the only technology that you can use in an existing client server architecture,
right? You basically just add a layer of encryption on top of what you're
already doing. It doesn't require any additional engineering gymnastics and
rethinking. It doesn't require changing your assumptions about your
infrastructure.

**David:** That makes sense. So you can drop this in, almost, into existing
applications and so long as you're happy with the performance and you don't need
to wait for the Moore's Law to cross the line to the point where your
performance is acceptable for your particular application, you can start using
it straight away.

**Rand:** That is exactly the vision we have at Zama. We want developers to be
able to use homomorphic encryption in their applications without having to learn
cryptography.

**David:** So where does this go over the next three to five years, then? You've
talked about the move from in the past where we had unencrypted HTTP to pretty
much ubiquitous HTTPS now, and the new protocol you've envisioned, HTTPZ. What
is that, and where is it going?

**Rand:** If you can't pull the thread of homomorphic encryption all the way to
consumer applications and web apps and things like that, it's pretty obvious
that at some point the user is going to need to manage their FHE keys when
they're accessing their services, because you need to encrypt and decrypt the
data and contrary to SSL, TLS, you are the one keeping the keys. You should
never send it to the service provider. So there is something that you have to
manage in terms of keys on the client side. What I think is going to happen,
that would make a lot of sense, is that HTTPS is going to evolve into a new
protocol that will include end-to-end encryption of which homomorphic encryption
is a flavor, and your browser will manage all this keys and shake with the
server. So as a user, you don't have to worry about any of that. As a user, you
just log on to, zencaster.com that we're using right now, and everything's just
encrypted in exactly the same way that when you log onto a website today, the
transmission is encrypted. Well now the data is going to be encrypted
end-to-end, completely transparently, without you having to worry or even think
about it. And that's what we think, this HTTPZ vision... Z stands for zero
trusts.

**David:** Because that's the challenge that we've faced, or the failure, I
suppose, of the adoption of something like PTP, where you have to manage your
keys and it's very easy to make a mistake, and without that perfect port
security, you can end up invalidating all the previous history that you've sent.
So you'd think that the way to solve this is in the browser managing it. You
delegate that to Chrome or Firefox or Safari.

**Rand:** Yep. You need a standard. I'm a very big believer in standardization.
I think one thing that we've lost in the Web 2.0 era is standardization.
Remember, I mean, the web initially was completely standardized. People could
send email to each other without using the same email clients. I mean, how
insane would it be if we could only communicate by both using Gmail, right? But
yet that's what happened with messaging apps in Web 2.0. I think the Web 2
companies fought hard against standardization and against opening access to
their services because they wanted to keep everything proprietary and siloed.
Web 3 is breaking that again, right, and I think that we're going to see a new
era where everything gets standardized by a browser again, and people won't have
to worry about it. And FHE will be one of those things.

**David:** Okay, great. Well, before we wrap up, then, I've got two lightning
questions for you. Are there any interesting dev tools that you are playing
around with at the moment?

**Rand:** Well, I've been mostly recently playing around with Solidity and
basically writing apps for Ethereum, so that has been fun. To be honest, I've
been looking at this for a few years, but I never really had a side project. I
have one now, so that's always nice. I'm going to be very honest with you. As a
CEO, I don't have as much time to code as I wish I did, which actually... I
remember 10 years ago, I was interviewed by a French newspaper and they said,
"What will never change about you as a CEO?" I'm like, "Well, I'll never be one
of those guys who doesn't code at least half the day." Well guess what? I just
don't have time to code half the day now, unfortunately, as much as I'd like to,
but I do my best.

**David:** And then secondly, what's your current tech setup? What hardware and
software are you using on a daily basis?

**Rand:** My laptop is a Mac. I have an M1 and I'm basically running MacOS and
then when I have to work in the cloud, just basically the traditional stuff.

**David:** Excellent. Well, that's all we've got time for today, unfortunately.
Where can people find you online?

**Rand:** I'm very easy to find online, despite my focus on privacy. You can
find me on Twitter mostly, @RandHindi. I also have a SubStack
newsletter, randhindi.substack.com, and of course, Zama, zama.ai.

**David:** Great. Well, thanks for joining the Console Podcast.

**Rand:** Thank you very much for having me, David.

**David:** Thanks for listening to the Console DevTools podcast. Please let us
know what you think on Twitter. I'm @davidmytton and you can follow
@consoledotdev. Don't forget to subscribe and rate us in your podcast player and
if you are playing around with or building any interesting dev tools, please get
in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
