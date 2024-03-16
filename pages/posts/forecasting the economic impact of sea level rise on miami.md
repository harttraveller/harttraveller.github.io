---
title: "Sunk Costs: Sea Level Rise vs. Miami"
draft: true
date: 2024-03-15
header: /file/sunkcosts.jpg
# categories:
#     - /type/analysis
#     - /type/forecast
#     - /type/article
#     - /type/report
#     - /area/climate-change
#     - /area/sea-level-rise
#     - /area/economics
---

Forecasting the Economic Impact of Sea Level Rise on Miami

**TLDR** This is an analysis and forecast attempting to estimate the economic cost of sea level rise on the City of Miami by the year 2150. The final figure is on the order of [...]. It is important to point out that the model produced attempts to forecast cost *in the absence of human intervention*. It seems reasonable to expect this will occur as costs begin to materialize. You can find all the code/utilities developed for this project in [this GitHub Repository]().

<!-- more -->

??? note "Notes"
    Originally this analysis was done for a [[document.slides.earthshade.pdf|presentation]] I gave in 2022 at the New Worlds space conference with a close friend. The idea was to contrast the cost of losing Miami with the cost of maintaining a satellite (or swarm of satellites) as a sunshade at [L1](https://www.wikiwand.com/en/Lagrange_point) for geoengineering purposes; the idea being that if it is cheaper to build a sunshade and cool the Earth than to lose just Miami, then in addition to the ethical case, one might also be able to make an economic argument for this geoengineering project (or others).

    This article doesn't focus on the geo-engineering aspect though, just the cost model. Also, standard disclaimer: I'm not a climatologist, just an amateur. Nonetheless, I hope this is enjoyable to a few climate nerds at least - feel free to reach out and let me know where I messed up!

---

## Cost Scenario Overview

<div class="grid-container-3" style = "margin-top: -0.6em; margin-bottom: 0em;">
    <div class="grid-item">
        <div class="admonition dollar-green">
            <p class="admonition-title">~50 Billion</p>
        </div>
        <video style="width: 30vw;" controls>
            <source src="../../file/video.sim.output_low.mp4" type="video/mp4">
        </video>
    </div>
    <div class="grid-item">
        <div class="admonition dollar-yellow">
            <p class="admonition-title">~300 Billion</p>
        </div>
        <p><i>Visualization will be included in complete version</i></p>
    </div>
    <div class="grid-item">
        <div class="admonition dollar-red">
            <p class="admonition-title">~900 Billion</p>
        </div>
        <video style="width: 30vw;" controls>
            <source src="../../file/video.sim.output_high.mp4" type="video/mp4">
        </video>
    </div>
</div>




## Area of Analysis

Before we begin, let's establish the geographic bounds of the region we will evaluate. We'll refer to this as the "Analysis Area" or AA for short.


<div style="text-align: left; position: relative; top: 4em; left: 1.5em; margin-top: -2em;">
<a class="glightbox" href="../../file/image.satellite.miami_sample_area_small.png" data-type="image" data-width="100%" data-height="auto" data-desc-position="bottom">
<button class="satellite-button">Satellite Image</button>
</a>
</div>

<div class="frame">
<iframe frameBorder="0" style="width: 100%; max-height: 30em; height: 30em;" src="../../file/plotly.map.aoa_bounds_mapbox.html"></iframe>
</div>

