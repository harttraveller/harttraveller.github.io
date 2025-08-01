---
title: Truth in modeling
draft: false
date:
  created: 2025-01-01
  updated: 2025-07-31
categories: []
---

Random thoughts on the nature of truth when building models of reality.

<!-- more -->

!!! note
    This was originally a forward for some internal documentation I was writing for work. After writing it, however, I realized it doesn't make a ton of sense to scatter personal philosophical opinions throughout what is ostensibly technically documentation, so I ended up deleting it. I've been sitting on it for a while now though, and I figured I might as well put it somewhere instead of just letting it die on an old hard drive.

    *Also I replaced references to the thing I was documenting with *[thing]* for reasons.*
        
!!! quote "[All models are wrong, but some are useful.](https://www.wikiwand.com/en/All_models_are_wrong)"

## On Truth

Before actually using *[thing]*, it is important to understand the nature of truth *in the context of developing models of reality* - precisely because while *[thing]* allows us to build models that attempt to capture truth, being aware of its limitations is necessary to reach your objectives. Arguably, these are not actually limitations of *[thing]*, but limitations of reality, our perception of reality, and our capacity to develop symbolic representations of our perceived reality.

Let's start with three seemingly contradictory claims:

1. **If your model of reality diverges from the truth, you are less likely to reach your objective.**
2. **If your model of reality is too close to the truth, you are less likely to reach your objective.**
3. **Truth is what is useful to us, once we have decided what we want to do.**

<!-- Of course, we might better decide what we want to do if "our truth" aligns with the "real truth", but that is an ontological paradox we'll leave for another day. -->

Is it possible that all these claims are simultaneously true?

### Claim 1

Starting with first statement, let's consider a hypothetical thought experiment: you are trying to develop, deploy, and sustain a GPS constellation. Specifically, your objective is to create a system that allows anyone to find their coordinate position, no matter where they are on Earth. As you begin this project, you will have to choose what premises you do and do not hold to be true - this will inform your approach and determine whether you succeed or fail.

Let's consider one possible premise you could accept:

*The Earth is flat.*

If you try to build a satellite constellation using this premise, you're going to have a bad time. Alternatively, you could instead operate under the following premise:

*The Earth is a globe.*

Or perhaps, if you prefer even more precision:

*The Earth is an [oblate spheroid](https://www.wikiwand.com/simple/Oblate_spheroid).*

If either of the last two premises are assumed, you are far more likely to succeed. Why is this the case though? One possible explanation is that each of those statements, as simple as they are, represent "models" of reality. This line of reasoning might then conclude that the latter "models" work better because they are closer to the "truth". Phrased differently: the smaller the gap between our model of reality and reality itself, the better we will be able to achieve our objective.

Hence: **If your model of reality diverges from the truth, you are far less likely to reach your objective.**

### Claim 2

Suppose we treat the latter claim as a hard rule, and in pursuit of an even truer model, we create a simulation of the Earth in its totality - capturing everything from the widest mountain ranges to the ocean currents at the bottom of the Mariana Trench. It seems self evident that this model (whatever we might call it) is a more truthful representation of reality than the lone statement: "The Earth is a globe".

Does it actually help us achieve our objective though? Probably not. Creating such a simulation would require such an inordinate amount of capital, energy, and time, that we will probably expend our limited resources far before a single satellite has been deployed.

Hence: **If your model of reality is too close to the truth, you are far less likely to reach your objective** (because you probably are misusing your limited resources building that model).

The key notion hidden in the juxtaposition between these two claims is that it is crucial to find the balance of relevant truth for any given model. You can, after all, [scale any model arbitrarily in complexity](https://www.wikiwand.com/en/Turtles_all_the_way_down) in the name of truth, but if one is not judicious about the selection of complexity, it runs the risk of being useless (or even counterproductive) to your aims.

??? note "On finding the 'balance of relevant truth' via natural selection"
    We admit that having the predictive intelligence (or perhaps intuition) to know what will actually be relevant or important down the line is easier said than done; arguably it is more art than science. Nonetheless, one excellent rule of thumb to use (if one is in a situation where using such a rule is permissible), is to let "nature" itself tell you what to do. To phrase this another way: instead of creating a perfect model, create a feedback mechanism to quickly identify and resolve issues with your model, then create a terrible model and let that feedback mechanism guide you. This will help ensure that as your model evolves, any additional added complexity is *useful*.

### Claim 3

This brings us to the third claim: **Truth is what is useful to us, once we have decided what we want to do.**

To elucidate what is meant by this claim, let's consider the Holographic Principle.

!!! quote "[Holographic Principle](https://www.wikiwand.com/en/Holographic_principle)"
    > First proposed by Gerard 't Hooft, it was given a precise string theoretic interpretation by Leonard Susskind, who combined his ideas with previous ones of 't Hooft and Charles Thorn. Leonard Susskind said, "The three-dimensional world of ordinary experience––the universe filled with galaxies, stars, planets, houses, boulders, and people––is a hologram, an image of reality coded on a distant two-dimensional surface."

In essence, if you are trying to get a payload into orbit, a model of reality in which the Earth is a globe (or oblate spheroid) may be more useful than a model of reality in which it is flat. If, however, you are attempting to build a quantum computer that relies on the (currently purely theoretical) Holographic principle, then you may need to assume that reality itself is a flat 2D surface with rules of interaction that result in our emergent perception of a 3D spatial medium - even when none exists.

<!--
If you're interested in diving deeper into this point - not the holographic principle, but how our perception of reality may be a phenomena emerging from an underlying reality with a fundamentally different structure than our perceived reality - you might enjoy the following:

- Video: [What if space and time are not real? - PBS Space Time](https://www.youtube.com/watch?v=SN8nTQiWOYY)
- Book: [The Case Against Reality - Donald Hoffman](https://www.amazon.com/Case-Against-Reality-Evolution-Truth/dp/0393254690)
-->

So when we say: "Truth is what is useful to us, once we have decided what we want to do", we do *not* mean to suggest that we can simply decide what to believe and have it be so. It means that when we are trying to launch a satellite, the truth that is useful is that of a globe Earth, but that in other contexts the truth that may be useful is that of a flat reality (and incidentally by implication, a flat Earth as well).

## Key Points

!!! key "Always be aware that while the model models reality, it is not reality."
    Insofar as this philosophizing may appear to lack pragmatic utility for the development of *[thing]* models, many historical mishaps had their roots in the perception of absolute truth - in the perception that the representation of reality we create is truly the same as the underlying reality itself. The danger therein lies in the fact that when we have decided what we want reality to be, we often supress evidence that conflicts with our preconceived notions (only to be blindsided by catastrophe when the incongruencies become too great to bear). Yet, paradoxically, we are also forced to select the reality that is useful to us based on the context we operate in - necessarily ignoring evidence that conflicts with our chosen reality in order to make any progress at all...

!!! key "The value of a model should be measured on the basis of how useful it is as a tool for achieving a greater objective."
    When you are building a model of something in reality, your objective should not be to "build a model". The model *must* serve a greater purpose, and it must be clear how that purpose is realized by way of the model.

!!! key "If your objectives are bad, it doesn't matter how good your model is."
    Initial development of scientific forestry practices assumed that forestry ought to solely maximize yield. Accordingly, early models of forests were conceived of processes with a singular output: lumber. Of course, this is not the only valuable output of a forest. Though more difficult to quantify, there is a clear utilitarian value associated with scientific data gathered from biodiverse ecosystems, and a clear benefit to cultural identity (and thus national cohesion) associated with shared collective experiences - like those found in Yosemite. Thankfully, Teddy Roosevelt understood this. The broader point this is meant to illustrate is simply that choosing your objectives wisely (and perhaps also not becoming too attached to them once chosen) is just as important as building the models and/or processes to realize those objectives.

!!! eye "Seeing as you made it this far on the page, you might also enjoy this video: [Do Chairs Exist?](https://www.youtube.com/watch?v=fXW-QjBsruE)"