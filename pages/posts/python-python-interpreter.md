---
title: A (partial) python interpreter written in python
draft: true
date:
    created: 2025-07-29
categories: [python, interpreter]
---

This is a tutorial introduction to interpreters, showing how to build a python interpreter from scratch in python. It's intended to serve as the guide that would've been useful to me a few months ago before I started building an interpreter in a professional context.

<!-- more -->

!!! note
    At some point I'd like to build a full python interpreter in python, then have that interpreter interpret itself, and see how many levels deep you can go before it stops being useful in any capacity. Unfortunately, I don't currently have the time to build a full python interpreter, so we'll be restricting it to an interpreter that handles [lambda](https://en.wikipedia.org/wiki/Anonymous_function) functions, variable assignment, basic types, and a few other basic things, and someday ideally I'll be able to revisit this and build the whole thing.

    Hopefully this is still a useful introduction!

