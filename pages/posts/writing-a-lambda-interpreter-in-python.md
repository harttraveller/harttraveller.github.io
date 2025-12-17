---
title: Writing a lambda interpreter in python
draft: true
date:
    created: 2025-07-29
# categories: [python, interpreter]
---

This is a tutorial introduction to interpreters, showing how to build a lambda expression interpreter from scratch in python. It's intended to serve as the guide that would've been useful to me a few months ago before I started building an interpreter in a professional context. It assumes the reader has only a basic knowledge of python and aims to be as approachable as possible.

<!-- more -->

??? note "Full Project"
    At some point I'd like to build a full python interpreter in python, then have that interpreter interpret itself, and see how many levels deep you can go before it stops being useful in any capacity. Unfortunately, I don't currently have the time to build a full python interpreter, so we'll be restricting it to an interpreter that handles [lambda](https://en.wikipedia.org/wiki/Anonymous_function) functions, variable assignment, basic types, and a few other basic things, and someday ideally I'll be able to revisit this and build the whole thing.

??? warning "Better Resources"
    Prior to working on an interpreter for work, I had never built an interpreter. Accordingly, this article does not represent best practices, and is at least partially comprised of stuff I made up because it seemed to make sense. While I haven't read it yet, the [crafting interpreters](https://craftinginterpreters.com/contents.html) book is available for free online, and seems to be a much better resource than this article.

## Regex 101

In order to build an interpreter, a necessary prerequisite is regex. As stated earlier, this article only assumes basic knowledge of python, so I'll give a very concise introduction to regex here. If you are familiar with regex, you can skip this section.

## EBNF

## Lark Flavored EBNF

## Abstract Syntax Trees

## Visitors & `lark.Interpreter`