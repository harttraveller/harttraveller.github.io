---
title: Measuring computation in scribe lives
draft: false
date:
    created: 2023-11-11
    updated: 2025-07-29
# categories: [information-theory, random]
---

For any given computational operation, we might ask: "How many ancient Babylonian scribes would I have to pay to work out this operation by hand, for their entire lives, in order to find the result?". Mining one bitcoin is approximately ~184 gigascrives.[^1]

<!-- more -->

[^1]: 'Scrife' is to 'scrives' as 'life' as 'lives'. These are treated as a unit of measurement in this article, where one 'scrife' is approx. ~186 million FLOPs.

!!! note "Sources"
    This post derives from a conversation I had with a friend, and I can't remember which of us thought of it, so credit also goes to [him](https://github.com/adamatbi) as well. The idea was largely inspired and leans on [this blog post](https://www.righto.com/2014/09/mining-bitcoin-with-pencil-and-paper.html) by Ken Shirriff in which he mines Bitcoin by hand.

??? note "FLOPS vs. FLOPs"
    - 1 FLOP is 1 floating point operation.
        - This is a scalar unit.
    - When we have multiple floating point operations, we might refer to them as FLOPs.
        - IE: 10 FLOPs (10 floating point operations)
    - Unfortunately, floating point operations per second are often referred to as FLOPS.
        - These however, are a vector unit, and represent floating point operations per second.
    - I will refer to floating point operations (scaler) as FLOPs and floating point operations per second (vector) as FLOP/s.
    - For more info on FLOP/s see the wikipedia page: [FLOPS](https://en.wikipedia.org/wiki/FLOPS)

## Scribe Work Schedule

Let's assume that we are not working the scribes 24/7 (they would quite quickly perish) but instead they each work 12 hour shifts, 364 days a year, (1) for 60 years. We end up with almost a billion ($943488000$) seconds of work for each scribe. Admittedly, this is still a pretty demanding work schedule. (2)
{ .annotate }

1.  The scribes are provided one day of vacation each year. If only they had been born after the Gregorian calendar was invented, they would get a second day every four years.
2.  Tangentially, it's a little intimidating that most of ones life fits into less than a billion seconds. It always weird thinking about the finite nature of life. How many more times will I walk in the forest with my dad and talk about philosophy? It feels like we have still have decades, but probably this will happen less than 5 times before one of us dies... Anyways, don't ignore the meaningful stuff!

## Hashes/Second by Hand

For context, in Shirriff's original blog post, it takes him 16 minutes and 45 seconds (1005 seconds) for one round of the SHA-256 algorithm. Each hash requires 64 rounds. It's worth noting that you would need to check *many* hashes to have even a small probability of "finding" a bitcoin.

Let's first find the number of seconds per hash:

$$
\frac{64 \ rounds}{1 \ hash} \times \frac{1005 \ seconds}{1 \ round} = \frac{64320 \ seconds}{1 \ hash}
$$

The number of hashes per second is just the reciprocal of $64320$:

$$
\frac {1}{\frac{64320 \ seconds}{1 \ hash}} = \frac{0.000015547263682 \ hashes}{1 \ second}
$$

## Hashes to FLOPS

Since cryptographic algorithms like SHA-256 primarily use integer operations, technically FLOPs are the wrong unit of measurement. This unit of measurement isn't meant to be perfectly accurate though (that might be impossible given the inherent complexity), and IOPs aren't as well known as FLOPs. The point is really just to find a neat way to contextualize computational cost, effort, and human technological progress. Accordingly we'll overlook the imprecise unit conversions.

If we use the rough estimated figures from these [quora](https://www.quora.com/How-do-you-convert-m-flop-s-to-hash-s) and [bitcoin forum](https://bitcointalk.org/index.php?topic=50720.0) posts, the conversion factor between hashes and floating point operations is $1:12700$.

This gives us the following figure for pen and paper computation rate:

$$
\frac{0.000015547263682 \ hashes}{1 \ second} \times \frac{12700 \ floating \ point \ operations}{1 \ hash} = \frac {0.1974502487614 \ floating \ point \ operations}{1 \ second}
$$

In essence, we get a computation rate of ~$0.197$ FLOP/s. Presumably, working with sticks and clay tablets is slower than pen and paper, and this would slow down their workflow. On the other hand, if all you did was continually do SHA-256 hashes by hand for 60 years, you'd probably get pretty damn good at it. [These should even out](https://www.youtube.com/watch?v=iOVbAmknKUk), so we'll leave the value at ~$0.197$.



We can multiply this by our earlier figure for the number of seconds of work per scribe to get the scrife count.

$$
\frac{943488000 \ seconds}{1 \ scribe} \times \frac {0.1974502487614 \ floating \ point \ operations}{1 \ second} = \frac{186291940.3 \ floating \ point \ operations}{1 \ scribe}
$$

It follows that one scrife is ~$186$ million FLOPs (floating point operations, scalar).

## Usecases

You can now guilt yourself for being a lazy programmer. Just rebuild an entire docker image after fixing a typo? Boom. Three megascrives right there.

## Conversion Rates

A rough example conversion rate is included below. Mining one bitcoin takes around [2.7 quadrillion hashes](https://quantaloop.io/how-many-hashes-create-one-bitcoin), the conversion to scrives is included below (again, note that FLOPs aren't the right unit, we're just using them as a proxy here).

$$
\frac {2700000000000000 \ hashes}{1 \ bitcoin} \times \frac{12700 \ floating \ point \ operations}{1 \ hash} = \frac {34290000000000000000 \ floating \ point \ operations}{1 \ bitcoin}
$$

$$
\frac {34290000000000000000 \ floating \ point \ operations}{1 \ bitcoin} \times \frac{1 \ scrife}{186291940.3 \ floating \ point \ operations} = \frac{184065934064 \ scrives}{1 \ bitcoin}
$$

Accordingly, the approx. computational cost of mining one bitcoin is 184 gigascrives.

## Future Work

- Could look at the hashing speed of person, and GPU, and measure scrives by the FLOP/s metric of the GPU.
    - Credit goes to Adam for this idea.
    - Also, the number of bits you provide each integer changes this substantially. This is whole concept is really just for fun.
- Also, running the bitcoin network globally would have a time delay, to measure this in scrives, you might also need to factor in stuff like camel speed (when finding block distribution time).