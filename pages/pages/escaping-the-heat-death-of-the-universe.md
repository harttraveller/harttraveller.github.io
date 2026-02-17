---
title: Escaping the heat death of the universe
draft: true
date:
  created: 2023-02-01
  updated: 2025-07-31
# categories: [science-fiction, physics]
search:
  exclude: true
---

This article covers a speculative system that would allow us to circumvent the heat death of the universe and live for an arbitrarily long time in realities of our own design. (It was was largely motivated by a recent playthrough of [SOMA](https://store.steampowered.com/app/282140/SOMA/) - highly recommended).

<!-- more -->

!!! note "This article is incomplete."

Given that gravity warps spacetime, we might infer that black holes made out of theoretical negative mass might induce inverted time dilation. If this were true, and if we were also able to create high performance computers on the scale of individual particles, then we could conceivable live *arbitrarily* close to forever by loading our consciousness onto femtocomputers and firing them close to the aforementioned gravitational singularities. The theoretical temporal effects would accelerate computation, thus allowing us to live *arbitrarily* close to an infinite amount of time.

## Introduction

In the book Schilds Ladder by Greg Egan, a technology called femtomachines are used for high performance computation. A similar technology is employed in Cixin Liu's Three Body Problem an advanced alien civilization known as Trisolarians are capable of producing 11-dimensional supercomputers endowed with artificial intelligence - which are roughly the same size as a proton.

Of course, this is science fiction - but suppose in the future we invent such a technology? This *might* allow us to circumvent the heat death of the universe. To be clear, we couldn't do it with *just* femtocomputers. We would also require the following propositions to be true.

1. Negative mass singularities either (A) occur naturally, or (B) can be engineered artificially.
2. Time dilation effects around negative mass singularities accelerate the flow of time from the perspective of outside observers.

If we ignore the absurdity of these premises, let's assume for the sake of this thought experiment that they are true, *and* that we have femtocomputers.

## Baseline estimates

First we have to estimate upper and lower bound figures for the information storage and computational capacity of a femtocomputer. Once we have these, we can contrast this with analogous metrics for the human brain to produce a guesstimate figure on how many people we could upload, and how many years they could collectively live.

Given the speculative nature of the task, the element we select to host the computer is somewhat arbitrary. Intuitively I feel like Plutonium would be a good fit.

??? question "Why Plutonium?"
    To maximize the effect of time dilation, we need to get the atom as close to the singularity as possible. Accordingly we would want to minimize the atomic radius. I used [this](https://crystalmaker.com/support/tutorials/atomic-radii/resources/VFI_Atomic_Radii.jpg) chart to check the atomic radius of varying elements. Whether this is relevant in such extreme conditions, I do not know. On the other hand, we also might want to maximize the mass of the atom, in order to maximize the computational capacity of the system; [source](https://www.youtube.com/watch?v=iOVbAmknKUk).

??? note "Quantum Computer Precedent"
    Femtocomputers would differ substantially from modern quantum computers. We aren't simply executing [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm); rather we are attempting to simulate a mind (or preferably, many minds), within at most a single atom. As such, I doubt we can make inferences about femtotech - fictional standalone systems - on the basis of the features of real quantum computers. The latter must be cooled to near absolute zero to work, require cumbersome physical support infrastructure, and are only useful when many qubits have been entangled with each other (I think(?) - don't quote me on that).

### Storage estimates

#### Femtocomputer storage

Instead of calculating a specific value, I've opted to estimate upper and lower bound values. The specific process is included at the bottom of this section. The lower bound of storage capacity is $30.5 \space bytes$, or around seven UTF-8 characters. As for the upper bound... If we took every grain of sand on earth, and put the entire internet into each one - we could call that volume of data one "internet sand", or $IS_0$ for short. If we took every grain of sand on earth, and put an $IS_0$ in it, we could call that volume of data $IS_1$. The upper bound storage limit for the femtocomputer would be able to store just over two copies of $IS_1$, with a capacity of ~$1.6 \times 10^{61} \space bytes$.

??? note "Upper & Lower Bound Calculations"
    We'd need to decide whether we're going to assume the volume of the atomic radius will be considered a storage/compute medium, or whether we are just considering the atomic nucleus. Of course, I don't know which is the case, but to be conservative (*though, really, I don't know what is and isn't a conservative estimate here*), I selected just the atomic nucleus.
    
    Furthermore, let's assume that the absolute upper bound of information density is $1 \space bit$ of information for every discrete cubic volume with dimensions of $1$ Planck length. Let's assume the lower bound is $1 \space bit$ per proton or neutron. This means that the lower bound on the storage capacity of the femtocomputer is just the number of protons plus the number of neutrons, or $94+140=244 \space bits$ or $30.5 \space bytes$. The upper bound calculation is slightly more complex.

    For simplicities sake we're treating the neutron and proton radius as the same. Also rounding the Planck length; given the speculative nature - sig. figs prob don't matter here.

    - [Pu Protons](http://hobart.k12.in.us/ksms/PeriodicTable/plutonium.htm) = $94$
    - [Pu Neutrons](http://hobart.k12.in.us/ksms/PeriodicTable/plutonium.htm) = $150$
    - [Proton Radius](https://en.wikipedia.org/wiki/Proton#:~:text=In%202019%2C%20two%20different%20studies%2C%20using%20different%20techniques%2C%20found%20this%20radius%20to%20be%200.833%C2%A0fm%2C%20with%20an%20uncertainty%20of%20%C2%B10.010%20fm.) = $8\times10^{-16} \space m$ 
    - [Neutron Radius](https://en.wikipedia.org/wiki/Neutron#:~:text=The%20neutron%20has%20a%20mean,is%20a%20spin%2D%C2%BD%20fermion.) = $8.3\times10^{-16} \space m$ -> ~$8\times10^{-16} \space m$
    - [Planck Length](https://en.wikipedia.org/wiki/Planck_units#Planck_length:~:text=It%20is%20equal%20to%201.616255(18)%C3%9710%E2%88%9235%C2%A0m) = $1.616\times10^{-35} \space m$ -> ~$1.6\times10^{-35} \space m$

    First we need to calculate the total volume available to us in the nucleus - I'm using $m^3$ to standardize stuff. We'll assume they are spherical, thus the volume of the nucleus is:

    $244 \times \frac{4}{3} \pi \times (8 \times 10^{-16} \space m) ^{3} = 5.2 \times 10^{-43} \space m^3$

    Each cubic Planck volume stores $1$ bit:

    $\frac{(1.6 \times 10^{-35} \space m)^{3}}{bit} = 4.1 \times 10^{-105} \space m^3/bit$ 

     Because the Planck length is so small, we'll treat each one as a [voxel](https://en.wikipedia.org/wiki/Voxel). Accordingly we can simply divide these two figures into each other to find the theoretical upper bound:

    $\frac{5.2 \times 10^{-43} \space m^3}{4.1 \times 10^{-105} \space m^3/bit} =$ ~$1.28 \times 10^{62} \space bits \space =$ ~$1.6 \times 10^{61} \space bytes$

    The result of this calculation is ~$1.6 \times 10^{61} \space bytes$ - this is a lot of capacity to say the least. For context, the market intelligence firm IDC estimates that the internet will be [175 zettabytes](https://www.seagate.com/files/www-content/our-story/trends/files/idc-seagate-dataage-whitepaper.pdf) by 2025. One zettabyte is $10^{21} \space bytes$. Dividing these figures into each other tells us our hypothetical femtocomputer has an upper bound storage limit of ~$1.6 \times 10^{40}$ internets - in 2025. 

    Of course, given that the calculation is based on an entirely speculative chain of reasoning, it has very little pragmatic purpose besides serving as a waypoint for an absolute upper bound which will *probably* never be reached.

    Note that even though the margin between the lower and upper bound would better be described as a chasm - this does not impact our analysis.

    Finally, for the grain of sand calculation, I used [this](https://www.npr.org/sections/krulwich/2012/09/17/161096233/which-is-greater-the-number-of-sand-grains-on-earth-or-stars-in-the-sky#:~:text=very%20roughly%20here-,7.5%20x%201018,-grains%20of%20sand) estimate, and applied the 2025 internet figure.


#### Brain storage

According to [this](https://elifesciences.org/articles/10778) paper by Thomas Bartol et al. the human brain can store around $4.7$ bits of information per synapse. According to [this](https://arxiv.org/pdf/1906.01703.pdf) paper by Jiawei Zhang the brain has around $1000$ trillion synapses. Multiplying these two figures together comes out to around $4.17$ petabytes, which is within the same order of magnitude of the $2.5$ petabyte figure obtained if one googles ["storage capacity of human brain petabytes"](https://www.google.com/search?q=storage+capacity+of+human+brain+petabytes) and runs with the first result. On the other hand we really don't know much about the brain; the estimated figure has consistently grown through time, so it is this possible figure could be much higher.

Let's assume that the lower bound storage requirement for the human brain is, $2.5$ petabytes. Increasing this figure does a disservice to our plan to save humanity, as it means we can fit *fewer* people on each femtocomputer. In the interest of covering all possibilities, however, we'll add three orders of magnitude and speculate that perhaps each brain requires $2500$ petabytes of storage space as an upper bound.

??? question "Could the brain actually have that much 'disk space'?"
    Perhaps, though it is unlikely. The figure is really meant to establish an absolute upper bound.  There is relevant [research](https://www.nih.gov/news-events/news-releases/memory-gene-goes-viral)  suggesting that "*a gene crucial for learning, called Arc, can send its genetic material from one neuron to another by employing a strategy commonly used by viruses*" - but this does not imply our brains use the epigenome or genome for storage.

    Do they? I genuinely have no idea. If they do, then that could increase the storage capacity substantially. To be clear, I'm not saying they do - simply pointing out the uncertainty associated with these estimates. BTW, I found the linked research in a [video](https://www.youtube.com/watch?v=-tRMWFMV4mw) by [Anton Petrov](https://www.youtube.com/@whatdamath) - highly recommend.

#### Comparing storage

In general, we can compute the number of people we could store on the femtocomputer with a function $f$, which simply divides the estimated storage capacity of the computer by the storage required for a mind. Visualizing this relationship generates the following graph.

![[person-capacity-femtocomputer.png]]

[whoops, I need to find where this image was]

Unsurprisingly, the main factor is not the storage requirement of the brain, which spans only three orders of magnitude, but the storage capacity of the femtocomputer, which spans around sixty orders of magnitude.

Of course, we will also need to store all the assets for constructing reality, however this is negligible compared to the brain, and can be discounted. We know this because it only takes the storage of a single brain to store all the assets associated with building reality, at least a reality as complex as the one we perceive. Your brain is doing it after all - and the assets they could be reused for each consciousness, we would only need to store all these assets once.

<!-- ### Processing Estimates

#### Brain Processing

#### Femtocomputer Processing

We also need to establish upper and lower bounds for required computational density of our femtocomputers. [FLOPS](https://en.wikipedia.org/wiki/FLOPS) may be a suboptimal metric, but it's generalizable, so it's what I use here.


#### Comparing Processing




Given the vast chasm between the estimates for both the storage capaci


Lets estimate how many bits FLOPS we would have available to us in one 


FLOPS may be a suboptimal metric, but we'll use the figure provided [here](https://aiimpacts.org/brain-performance-in-flops/), which suggests that the human brain has a capacity somewhere between $10^{12}$ and $10^{28}$ - a wide margin.

Let's take the upper bound to be safe. Now let's do some scratchpad math and figure out how many people we could fit into a single 





so I'm going to take some extreme liberty in estimating 

https://en.wikipedia.org/wiki/Planck_units

FLOPS per $X$ temporal planck [source - made it up]

lower bound is 0, upper bound is unknown, but we'll estimate the upper bound and then take the mean

## Parameters

First let 

In order to 

- optimization: distance to singularity vs time spent near singularity vs energy requirements

## Implementation

So at this point you've probably inferred how we might actually escape the heat death, and if you haven't - I've included a project outline below anyways.

### Step 1: Create femtomachines

These systems should be capable of high performance computation on par with or surpassing the technology described in Schilds Ladder. If we assume

- kelvin quote
- cixin liu: dark forest

Infinite computation with negative mass gravitational singularities and femtomachines

- assume repulsive force - thus infinite force required to reach singularity
- calculate energy required for mass driver
	- use energy from black hole to generate energy for mass driver
	- continuously fire femtomachines at singularity for $X$ years
- from our perspective, each universe will begin and end in an arbitrarily small amount of time, but the beings inside will perceive it to be an arbitrarily long time
- how much can we extend the lifespan of the universe by, by employing this mechanism?


## Simulation

I also created a [streamlit app]() (work in progress) that computes how much time we could give ourselves, depending on how close we could get our femtomachines to the naked singularity. -->


## Referenced
- [Schild's Ladder - Wikipedia](https://en.wikipedia.org/wiki/Schild%27s_Ladder)
- [Brain performance in FLOPS – AI Impacts](https://aiimpacts.org/brain-performance-in-flops/)
- [Time travel is possible – but only if you have an object with infinite mass](https://phys.org/news/2018-12-infinite-mass.html)
- [Can a negative-mass cosmology explain dark matter and dark energy? | Astronomy & Astrophysics (A&A)](https://www.aanda.org/articles/aa/full_html/2019/06/aa35317-19/aa35317-19.html)
- [Don’t dismiss negative mass](https://physicstoday.scitation.org/do/10.1063/pt.6.3.20170524a/full/)
- [If negative gravity existed, would it result in an opposite effect to time dilation where what feels like hours would only be seconds to an outside observer? - Quora](https://www.quora.com/If-negative-gravity-existed-would-it-result-in-an-opposite-effect-to-time-dilation-where-what-feels-like-hours-would-only-be-seconds-to-an-outside-observer)
- [When you approach larger masses time begin to slow down (time dilation), especially around black holes. If negative mass existed, not saying it does, could one very slowly move backward in time around such objects as an inverse of time dilation? - Quora](https://www.quora.com/When-you-approach-larger-masses-time-begin-to-slow-down-time-dilation-especially-around-black-holes-If-negative-mass-existed-not-saying-it-does-could-one-very-slowly-move-backward-in-time-around-such-objects-as-an)
- [Does negative mass go backwards in time? - Quora](https://www.quora.com/Does-negative-mass-go-backwards-in-time)
- [If it was somehow possible to travel at a negative speed, then would time begin to move faster due to time dilation? - Quora](https://www.quora.com/If-it-was-somehow-possible-to-travel-at-a-negative-speed-then-would-time-begin-to-move-faster-due-to-time-dilation)
- [What is space time negative mass time dilation? - Quora](https://www.quora.com/What-is-space-time-negative-mass-time-dilation)
- [Negative mass - Wikipedia](https://en.wikipedia.org/wiki/Negative_mass)
- [Is reverse time dilation posssible? | Physics Forums](https://www.physicsforums.com/threads/is-reverse-time-dilation-posssible.98775/)
- [general relativity - What would happen if a negative mass crossed the event horizon of a black hole? - Physics Stack Exchange](https://physics.stackexchange.com/questions/153376/what-would-happen-if-a-negative-mass-crossed-the-event-horizon-of-a-black-hole)
- [Dark energy time dilation - Physics Stack Exchange](https://physics.stackexchange.com/questions/504943/dark-energy-time-dilation)
- [Negative Gravity Fields and Time Dilation - Physics Stack Exchange](https://physics.stackexchange.com/questions/262269/negative-gravity-fields-and-time-dilation)
- [general relativity - Does negative mass reverse the arrow of time? - Physics Stack Exchange](https://physics.stackexchange.com/questions/187504/does-negative-mass-reverse-the-arrow-of-time)
## Look Into
- [Is Erik W. Lentz’s paper 'Breaking the Warp Barrier,'' which does not rely on the existence of 'negative mass', an important theoretical contribution? - Quora](https://www.quora.com/Is-Erik-W-Lentz-s-paper-Breaking-the-Warp-Barrier-which-does-not-rely-on-the-existence-of-negative-mass-an-important-theoretical-contribution)
- [Is it really true that scientists at the University of Rochester have successfully created particles that have a negative mass? Have they really proved that an FTL warp drive is possible? Isn't this one of the greatest achievements in modern physics? - Quora](https://www.quora.com/Is-it-really-true-that-scientists-at-the-University-of-Rochester-have-successfully-created-particles-that-have-a-negative-mass-Have-they-really-proved-that-an-FTL-warp-drive-is-possible-Isnt-this-one-of-the-greatest)
