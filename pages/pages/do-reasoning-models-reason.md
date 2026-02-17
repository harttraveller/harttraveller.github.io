---
title: Do reasoning models reason?
draft: true
date:
  created: 2025-07-31
# categories: [llm, reasoning, ai, experiment]
search:
  exclude: true
---

No. At least not yet. Or at least not in the way we reason. This article includes a quantitative experiment to test this assertion, and a (conceptual) model that attempts to explain why (language) models that are trained to mimic what reasoning looks still like outperform "non-reasoning" LLMs.

<!-- more -->

<!-- 
structure:
- word2vec
- each word is point
- dimensionality reduction
- path through space of points, reduce to 2D
- reduce to 1D (?) for 2d plot with time
- or reduce to 2d, and create 3D plot with time
- sequence of words is path through word space
- each step generates a distribution of probabilities over next (itself an nD point, but should abstract that away)
- the "shape" of the path so far generates specific probability distribution

 -->

*I've done my best to make this article as concise and approachable as possible - assuming no prior background in machine learning. More details and links can be found in footnotes for the curious.*

Related: [What is reasoning?](./what-is-reasoning.md)

## Prerequisite concepts

First, we should quickly cover some prerequisite concepts will be useful later.[^1]

[^1]: There are much better resources created by people much smarter than me explaining how LLMs work... [3Blue1Brown](https://www.youtube.com/@3blue1brown) is a great channel and I'd highly recommend their series on [neural networks](https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) and specifically the videos on [transformer models](https://www.youtube.com/watch?v=wjZofJX0v4M).

### We can turn words into numbers

We'll gloss over the technical details[^3], but suffice to say we can take a word like "human", and convert it into a list of numbers, which might look something like this[^4]. Don't worry about understanding how this works, this article can be understood if you simply accept that it's possible.

```python title="This is what the word 'Human' looks like according to glove-wiki-gigaword-50"
[ 0.61854 ,  0.11915 , -0.46786 ,  0.31368 ,  1.0334  ,  0.95964 ,
  0.87803 , -1.0346  ,  1.6322  ,  0.29347 ,  0.80844 , -0.058903,
  0.021251,  0.40986 ,  0.54443 , -0.33311 ,  0.53712 , -0.35823 ,
  0.29374 ,  0.090151, -0.92049 ,  0.69386 ,  0.39098 , -0.64392 ,
  0.77831 , -1.7215  , -0.48393 , -0.50327 , -0.22508 ,  0.099192,
  3.2095  , -0.31554 , -0.71754 , -1.6752  , -1.3537  ,  0.15195 ,
  0.054557, -0.1633  , -0.027993,  0.3917  , -0.55007 , -0.079205,
  0.63389 ,  0.51446 ,  0.70124 ,  0.27638 , -0.53445 ,  0.064808,
  -0.21974 , -0.52048 ]
```

### These numbers are points

Specifically the numbers are points in a high dimensional space. What is a high dimensional space? Suppose the previous list of numbers only had 2 elements instead of 50.

```python
[ 0.61854 , 0.11915 ]
```

Let's take those numbers and graph them on a 2D scatterplot, where `0.61854` is on the x-axis, and `0.11915` is on the y-axis.

```plotly
{
    "data": [
        {
            "x": [0.61854],
            "y": [0.11915],
            "type": "scatter",
            "mode": "markers+text",
            "text": ["human"],
            "textposition": "top center"
        }
    ]
}
```

Now what expanded the list to include `-0.46786`? We'll put this on the z-axis. We still have one point, except now it's in 3D instead of 2D.

```python
[ 0.61854 , 0.11915, -0.46786 ]
```

```plotly
{
    "data": [
        {
            "x": [0.61854],
            "y": [0.11915],
            "z": [-0.46786],
            "type": "scatter3d",
            "mode": "markers+text",
            "text": ["human"],
            "textposition": "top center"
        }
    ]
}
```

If we expand the list to include `0.31368` we get a single point in a 4D space. There aren't great visualization tools for 4D spaces, but it's possible to build an intuitive understanding of them through games like [4D toys](https://www.youtube.com/watch?v=0t4aKJuKP0Q), the inumerable youtube videos, or stuff like [flatland](https://youtu.be/avMX-Zft7K4?si=ciHhvsPrQ5va-iAq&t=3770) (I've linked a particularly unhinged scene from the feature length film here. Don't let it disuade you, the movie and original story are both great).

Spaces with more than four dimensions are hard to intuitively visualize, but we can fix this by simply "translating" the points into a lower dimensional space using fancy math.[^5] I repeat myself, but, you don't need to know how this works to understand this article, only to accept that it's possible. 

<div class="grid" markdown>

```python title="High dimensional point corresponding to word 'king'"
[ 0.50451 ,  0.68607 , -0.59517 , -0.022801,  0.60046 , -0.13498 ,
  -0.08813 ,  0.47377 , -0.61798 , -0.31012 , -0.076666,  1.493   ,
  -0.034189, -0.98173 ,  0.68229 ,  0.81722 , -0.51874 , -0.31503 ,
  -0.55809 ,  0.66421 ,  0.1961  , -0.13495 , -0.11476 , -0.30344 ,
  0.41177 , -2.223   , -1.0756  , -1.0783  , -0.34354 ,  0.33505 ,
  1.9927  , -0.04234 , -0.64319 ,  0.71125 ,  0.49159 ,  0.16754 ,
  0.34344 , -0.25663 , -0.8523  ,  0.1661  ,  0.40102 ,  1.1685  ,
  -1.0137  , -0.21585 , -0.15155 ,  0.78321 , -0.91241 , -1.6106  ,
  -0.64426 , -0.51042 ]
```

```python title="Translated low dimensional point corresponding to word 'king'"

```

<!-- Let's take some words and the associated lists of numbers (henceforth referred to as 'vectors'), and run them through a dimensionality reduction algorithm.[^6] This what the words and their vectors look like before hand (`...` is used to signify that their are more numbers, which are omitted for brevity): -->

And after we run them through a dimensionality reduction algorithm, they look like:

### The relative position of these points encode meaning

An important but oft overlooked point here is that the numbers themselves don't mean anything. In isolation, the point `[ 0.61854  0.11915 -0.46786  0.31368  1.0334  ... ]` is meaningless. The meaningful information in this system is encoded in the positions of these points in relation to each other, and not the positions themselves. That is to say that if I use `word2vec-google-news-300` instead of `glove-wiki-gigaword-50`, the numbers corresponding to "human" will be totally different.

be associated with the word human? Actually, it isn't

<!-- Often you'll hear the term "latent space" thrown around. For the purpose of this article, you can imagine this refers to any n-dimensional space containing a collection of points, wherein the specific location of those points does not matter, but rather the meaning is in encoded in the structure of the points in the space. -->




<!-- TODO: add caveat about how vectors for individual words differ from vectors for paragraphs, sentences; how these vectors differ from vectors computed after multiple stages in autoregressive transformer models -->

## Conceptual model: tossing stones

!!! quote "*[All models are wrong, but some are useful.](https://en.wikipedia.org/wiki/All_models_are_wrong)*"

We'll start with the conceptual model before reviewing the experiment. As the quote above suggests, the conceptual model for understanding language models I am about to present is not meant to be correct, only correct enough that it conveys why reasoning models are not truly reasoning.

## Tossing stones

<!-- TODO
Add note on how the notion of tossing stones isn't entirely accurate, because in this metaphor sometimes a stone would be tossed quite far away. Instead of tossing a stone around a particular position, there is instead a kind of meta-manifold over the entire latent space that encodes the distribution of probability density of a consecutive word in that latent space, which is realized when we get a literal probability distribution of following tokens. I'm trying to make this an approachable article, but may end up twisting the truth a little. If I screwed up really bad and you want to let me know email me at [] and I'll ammend whatever it is and credit you.
 -->



## So why do they outperform?


## Experimental test

!!! note "This experiment doesn't actually test whether or not the model I've presented is correct."
    The (conceptual) model presented earlier is my speculative (and probably quite lossy)[^6] explanation as to why we get the results we see in this test. Nonetheless, all this test actually shows is that purportedly reasoning models fail on multiplication tests even after reasoning through the algorithm that would lead to the correct result. Whether it follows that because of this they are not reasoning, let alone that the (conceptual) model presented earlier is a valid explanation for this is up to you to decide.

[^6]: "Lossy" is perhaps a weird word choice here, but I'm assuming that there is a true and valid explanation that can be encoded in some sequence of symbols, and that the explanation I've given is an incomplete, innaccurate, and compressed representation of that sequence of symbols that nonetheless shares some 'signal'(?) and thus is kind of lossy compression/representation. I'm not sure if that makes sense, I'd probably need to think through it a bit more to make sure it does.

<!-- First test, just multiplication, addition, subtraction. The test works by articulating a specific algorithm for multiplication, then having it follow... -->

<!-- 
No. At least not yet. This article covers a number of points related to "reasoning" language models, but most notably it includes a (conceptual) model for understanding why they do not reason, and a quantitative experiment meant to test this assertion. The key point to take away from this article is: **reasoning models do not reason, they mimic what reasoning looks like - a paradigm that  highly unlikely to lead to an intelligence explosion**. -->
<!-- 
No. At least not yet. This article covers a (conceptual) model for understanding why they do not reason, but why they nonetheless *do* work better than non-reasoning (language) models. In addition, I explore (A) what reasoning models *might* look like (B) a conditional forecast for when we can actually expect AGI, and (C) **a quantitative experiment meant to test the assertion that current reasoning models are in fact, not reasoning at all**. Finally, there are some policy notes, speculation on why there is a trend of referring to reasoning models as 'reasoning' (hint: it helps drive the hype train), and a personal remark on why, in fact, it's a good thing that current approaches in AI will not lead to AGI, as well as some pushback against my own assertion that it's bad that models trained to mimic reasoning are being marketed as reasoning models.[^1]


[^1]: TLDR: If AGI is approaching, then we want to be as prepared as possible, and over-hyping the risk now may increase awareness of the risk. If, after all, there is a 0.1% chance of a demonic god that can manifest indefinite hell-on-earth for all beings arriving in the next 100 years, the negative utility is unfathomably large, so even a small probability justifies extreme caution. The flip side is that if too many Yudkowsky's cry "wolf" before it actually arrives, people might not take it very seriously when it does - which it will absent global thermonuclear war or rapid runaway climate change that results in global technological regression to the middle ages, or human extinction.

-->


<!-- 

### Is Yann Lecun right?

Yes.


## What is reasoning anyways?

## What would a true reasoning model look like?

Right now, an actual reasoning model would probably look less like a model and more like a broad reasoning system that uses models as one component. In the future, new algorithms/model architectures may change this.

## What is AGI?


## When will AGI arrive?

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

[^3]: If I remember correctly from an information retrieval class I took a few years ago, [word2vec](https://en.wikipedia.org/wiki/Word2vec) works by training what is effectively an algorithm (a shallow neural network, or logistic regression algorithm in simpler versions) to predict "words" - or really - tokens, that are dropped from strings of text. The missing tokens are predicted based on their surrounding context. When you've trained a model like this on enough strings of text, you can then extract the weights/parameters associated with a given token, which become the vector representation for that token. Almost as if by magic, these vectors of parameters end up encoding semantic meaning about the words in a given sentence. *Don't quote me on this though, the full technical details can be found in [Efficient Estimation of Word Representations in Vector Space](https://arxiv.org/pdf/1301.3781) and [Distributed Representations of Words and Phrases and their Compositionality](https://arxiv.org/pdf/1310.4546).* If you are interested in the nitty gritty, the article [Word2vec from Scratch](https://jaketae.github.io/study/word2vec/) seems pretty good. I haven't personally read it, but in skimming it, it looks pretty comprehensive.

[^4]: This specific vector for "human" is from [glove-wiki-gigaword-50](https://huggingface.co/fse/glove-wiki-gigaword-50). Also I say `This is what the word 'Human' looks like according to glove-wiki-gigaword-50` but it doesn't really "look" like anything as far as we know. Delving into philosophy of mind is out of scope for this article though.

[^5]: This is an simplified half-truth but the detail didn't seem too important here, and I'm wary of [writing a bunch of stuff that folks will read as gibberish](https://www.youtube.com/watch?v=k0qmkQGqpM8). If we have a bunch of points in a high dimensional space that have some inherent *structure* or pattern to them, there's some statistical tricks one can use to create a new dataset of points in a lower dimensional space, such that the lower dimensional points maintain the relational structure of the higher dimensional points. "Maintaining the relational structure" here means that points that were far away in high dimensional space are still far away, and points that were close together in high dimensional space are still close together. This is done using a [dimensionality reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction) algorithm. In this article I use [UMAP](https://umap-learn.readthedocs.io/en/latest/). The oldest dimensionality reduction algorithm I know of is [PCA](https://en.wikipedia.org/wiki/Principal_component_analysis), from 1901 (it doesn't work great for this task), but more recently [TSNE](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding) also emerged.