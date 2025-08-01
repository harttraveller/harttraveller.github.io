---
title: Maximizing honesty with game theory
draft: true
date:
  created: 2023-01-23
  updated: 2025-07-31
categories: [game-theory]
---

One issue with trying to be honest about everything in public, as nice as the idea is in theory, is that there are almost always bad faith actors who might try and use your honesty to attack you (or at least, you open yourself to this risk). In this article I cover a game theoretical strategy to maintain a policy that seeks to maximize genuine honesty without compromising yourself.

<!-- more -->

## The Problem

Specifically, the conundrum presents itself insofar as if one is honest about most things, but then declines to comment on some things by saying: "I honestly don't want to talk about that" - *which is technically honest, but not transparent* - then the answer to the thing that one has declined to comment on, can be often inferred from the fact that one declined to comment on it.

<!-- Even if you genuinely want to be 100% honest about everything, if you have any sense of self-preservation and a modicum of power or responsibility in this world, you'd be stupid to put your mouth where your heart is. -->

!!! example
    Imagine you're playing a drinking game where people take a shot when another player makes a statement about whether they have done some arbitrary action. Everything is uneventful until someone states: "Never have I ever committed a series of murders between 1968 and 1969 in the San Francisco Bay Area", and your friend Ted puts down his drink and states he no longer feels comfortable playing the game. In this context, you might reasonably be at least mildly suspicious.

    *I should clarify, it would be suspicious in an abstract game theoretical sense. Pragmatically in the context of human social norms, probably everyone would be spooked by such a strange question.*

    Point is: if you're honest about everything, you implicitly reveal information when you truthfully say "I'd rather not talk about that". Sometimes more information, sometimes less. For instance, if you asked me what the nuclear codes were and I said, "I'm not going to tell you", you don't now know the nuclear codes, but you do now know that either: A) I've got them or B) I'm a liar. Of course, the exact information to be inferred would depend on context. 

    *To be clear, I do not know the nuclear codes. If you want them, you'll have to search [the library of babel](https://libraryofbabel.info/browse.cgi). I can tell you with 100% certainty you can find them there, the caveat being you'll have to search until the heat death of the universe.*

If we look at it through the lens of information theory, some information can always be garnered no matter what you response or non-response is. The question is how you minimize the information gained by adversarial agents while still being maximally honest.

The classic way to answer is: "I can neither confirm nor deny..." but the issue with this is that saying it still gives away information. Namely that you aren't willing to confirm or deny statement $X$ - when you may have been willing to do so for other statements. Thankfully, there is a solution!

<!-- How does one solve this if one would like to be publicly maximally honest, but being honest compels one to reveal information regardless of whether one wants to or not, *even if* the information is not explicitly specified? -->

<!-- This can probably be optimized given the criteria: 

- All statements are honest with one universally known exception; specify you can lie about the output of a random number generator.
- But only transparent about some things (the omission of information is acceptable).
- But for the things you are opaque about, minimize the amount of inferred information given up by way of the selective lack of transparency.
 -->

## The Solution

First, you tell the entity querying you for information (the media, the world, your spouse, actually this might not work that well for your spouse, so on second thought scratch that last one) that you reserve the right to explicitly lie about one thing and one thing only, but that you are going to tell them what you will lie about before hand, so at least they get the benefit of knowing that you may be lying.

The thing you reserve the right to lie about is 

Preemptively state that you will selectively omit information randomly based partially on what an random number generator returns. You start by creating some arbitrary function, whether in an abstract, or literal sense, to compute whether you should be completely or selectively honest in any given situation. 

<!-- Actually, it's very simple, here's some python code which does that:

```python
import numpy as np

def should_i_hide_info(hide: bool, prob: float = 0) -> int:
    return int(np.random.binomial(1, prob) or hide)
```

> [!info]- Function Docs
> Tells us whether to hide information. Allows us to intentionally hide it.
> 
> Args:
> - hide (bool): Whether I want to hide information independent of the output.
> - prob (float): The underlying probability I will hide information if I'm willing to accept randomness.
> 
> Returns:
> - int: Whether you should hide the information. -->

.

The thing you reserve the right to lie about is the output 

Here's how it works. When someone asks you a question, or you are queried for information


- model the estimated probability that you would want to obfuscate information in as well, and add that as a parameter to the model

## Conclusion

The White House Press Secretary should have a random number generator that is partially random, but also connected to their big toe or something. Every question they roll the dice, and 10% of the time no matter what they respond with:

> Hmm... Interesting question. However, ITIS.

Before moving onto the next question. In this context, `ITIS` is shorthand for `Information Theoretical Inference Security`, which in turn is shorthand for `In the interest of  maintaining information theoretical inference security - either the RNG or I -  have decided that your question will not be answered. You do not get to know which`.


- what do to about sequence of questions meant to disrupt ability to maintain plausible randomness?