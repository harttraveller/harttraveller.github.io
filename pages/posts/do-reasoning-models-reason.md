---
title: Do reasoning models reason?
draft: true
date:
  created: 2025-07-31
categories: [llm, reasoning, ai, experiment]
---

No. At least not yet. This article includes a quantitative experiment to test this assertion, and a (conceptual) model that attempts to explain why (language) models that are trained to mimic what reasoning looks like outperform models that are not. *I've done my best to make this article as concise and approachable as possible - assuming no prior background in machine learning. More details and links can be found in footnotes for the curious.*

<!-- more -->

<!-- 
No. At least not yet. This article covers a number of points related to "reasoning" language models, but most notably it includes a (conceptual) model for understanding why they do not reason, and a quantitative experiment meant to test this assertion. The key point to take away from this article is: **reasoning models do not reason, they mimic what reasoning looks like - a paradigm that  highly unlikely to lead to an intelligence explosion**. -->
<!-- 
No. At least not yet. This article covers a (conceptual) model for understanding why they do not reason, but why they nonetheless *do* work better than non-reasoning (language) models. In addition, I explore (A) what reasoning models *might* look like (B) a conditional forecast for when we can actually expect AGI, and (C) **a quantitative experiment meant to test the assertion that current reasoning models are in fact, not reasoning at all**. Finally, there are some policy notes, speculation on why there is a trend of referring to reasoning models as 'reasoning' (hint: it helps drive the hype train), and a personal remark on why, in fact, it's a good thing that current approaches in AI will not lead to AGI, as well as some pushback against my own assertion that it's bad that models trained to mimic reasoning are being marketed as reasoning models.[^1]


[^1]: TLDR: If AGI is approaching, then we want to be as prepared as possible, and over-hyping the risk now may increase awareness of the risk. If, after all, there is a 0.1% chance of a demonic god that can manifest indefinite hell-on-earth for all beings arriving in the next 100 years, the negative utility is unfathomably large, so even a small probability justifies extreme caution. The flip side is that if too many Yudkowsky's cry "wolf" before it actually arrives, people might not take it very seriously when it does - which it will absent global thermonuclear war or rapid runaway climate change that results in global technological regression to the middle ages, or human extinction.

-->


## Conceptual model

!!! quote "*[All models are wrong, but some are useful.](https://en.wikipedia.org/wiki/All_models_are_wrong)*"

We'll start with the conceptual model before 
As the quote above suggests, the conceptual model for understanding language models I am about to present is not meant to be correct, only correct enough that it conveys why reasoning models are not reasoning. Before delving into the model, however, we should cover several prerequisite concepts.

### Words as numbers

The key algorithm that facilitated modern language models was [word2vec](https://en.wikipedia.org/wiki/Word2vec). I'll skip the technical details[^1]; the only two truly important things to understand are the following.

[^1]: If I remember correctly from an information retrieval class I took a few years ago, word2vec works by training what is effectively an algorithm (a shallow neural network, or logistic regression algorithm in simpler versions) to predict "words" - or really - tokens, that are dropped from strings of text. The missing tokens are predicted based on their surrounding context. When you've trained a model like this on enough strings of text, you can then extract the weights/parameters associated with a given token, which become the vector representation for that token. Almost as if by magic, these vectors of parameters end up encoding semantic meaning about the words in a given sentence. *Don't quote me on this though, the full technical details can be found in [Efficient Estimation of Word Representations in Vector Space](https://arxiv.org/pdf/1301.3781) and [Distributed Representations of Words and Phrases and their Compositionality](https://arxiv.org/pdf/1310.4546).* If you are interested in the nitty gritty, the article [Word2vec from Scratch](https://jaketae.github.io/study/word2vec/) seems pretty good. I haven't personally read it, but in skimming it, it looks pretty comprehensive.

**First: We can turn words into numbers.**[^2]



Specifically, we can turn tokens into vectors - points in high dimensional space. The exact vector associated with a given word doesn't actually matter, instead, it's the relative position of the different vectors in that space that encodes meaning.

<!-- 

### Is Yann Lecun right?

Yes.


## What is reasoning anyways?

## When will AGI arrive?

## What is AGI?

The possibilities in order of most to least difficul, are (I'm guessing) as follows. Each scenario has a two subjective estimations, (1) of temporal horizon and (2) of estimated probability.

@todo convert these to table

1. It's way harder than we thought in some fundamental way, ... [> 1000 years, P(~40%)]
2. It's harder than we thought, and requires a fundamentally new algorithm or paradigm for computational intelligence, but that algorithm or paradigm can be understood by us and is within reach, though it has not yet been discovered/thoroughly explored. In this scenario, whether or not we get an intelligence explosion in the near future is a coin flip, and depends entirely on whether the right researcher/engineer has the right dream, goes on the right date and has the right conversation, or some other unpredictable scenario.
2. It about as hard as we thought, but involves the 'encoding' of physical knowledge; brute force approaches will work but we need to brute force the training of various deep learning architectures within simulated physical environments. 
2. It isn't way harder than we thought, but we just don't have the right algorithm yet.
3. We keep scaling up LLMs and then all of a sudden they're generally 
- An 'intelligence explosion' is simply not possible. We're misunderstanding intelligence, and at best we will be able to create machines of similar intelligence to ourselves, but a feedback loop that results in the sudden arrival of a godlike entity on earth is not actually reasonable to expect. Sub-scenarios here include:
    - A godlike intelligence is possible, but advances in intelligence are intractable and/or extremely difficult, and a recursive explosion that would result in a fast take-off perceptible within the course of a single human life is impossible. Instead, various S-curves will stack on top of each other over the course of thousands or millions of years, culminating in a post-human super-intelligence way down the line, which will, by nature of the constant of change, likely be so alien to us today that we probably can't comprehend it.
        - 'Non-comprehensibility' by humans also likely holds true for any super-intelligence, this point is more meant to elucidate that a super-intelligence that emerges in our time will probably be at least marginally more comprehensible to us today insofar as we might converse with it, but not be able to understand the physical/mathematical models it provides us, whereas a super-intelligence that emerges in a million years may be similarly comprehensible to the denizens of the earth a million years from now, but completely incomprehensible to us insofar as it communicates in music composed of ultra-high-frequency waves in the medium of some quantum-gravity force that is yet undiscovered and requires an intuitive knowledge of operating in 3 temporal dimensions and 7 spatial dimensions to actual comprehend. Or any other preposturously speculative alien.
-->