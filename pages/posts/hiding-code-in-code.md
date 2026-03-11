---
title: Hiding code in code
draft: false
date:
    created: 2026-03-11
---

You can hide arbitrary code (or any data for that matter) in self executing code. A neat example and a python package ([PyPi](https://pypi.org/project/charsec/) | [GitHub](https://github.com/harttraveller/charsec)) are included.

<!-- more -->

!!! note "Credit"
    Credit for this idea goes to Paul Butler and his blog post [Smuggling Arbitrary Data Through an Emoji](https://paulbutler.org/2025/smuggling-arbitrary-data-through-an-emoji/). The reason I know that this is exists is because of his blog. Also, I used his [emoji-encoder](https://github.com/paulgb/emoji-encoder) package as a reference for the python package here.

## Hello World!

The following python function, when called, will print "Hello world!":

```python
def call_me():
    # c󠅠󠅢󠅙󠅞󠅤󠄘󠄗󠄸󠅕󠅜󠅜󠅟󠄐󠅧󠅟󠅢󠅜󠅔󠄑󠄗󠄙an you guess how this works?
    import inspect

    eval(
        "".join(
            chr(ord(c) - 0xE00F0)
            for c in bytes(
                "".join(inspect.getsource(call_me).split())[15:36], encoding="utf-8"
            ).decode("utf-8")
        )
    )
```

It's worth noting that this python function will *only* print hello world if you copy it from the code block above.

Here's another example script:

```python
# 󠅙󠅝󠅠󠅟󠅢󠅤󠄐󠅧󠅕󠅒󠅒󠅢󠅟󠅧󠅣󠅕󠅢︊︊󠅧󠅕󠅒󠅒󠅢󠅟󠅧󠅣󠅕󠅢󠄞󠅟󠅠󠅕󠅞󠄘󠄒󠅘󠅤󠅤󠅠󠅣󠄪󠄟󠄟󠅧󠅧󠅧󠄞󠅩󠅟󠅥󠅤󠅥󠅒󠅕󠄞󠅓󠅟󠅝󠄟󠅧󠅑󠅤󠅓󠅘󠄯󠅦󠄭󠅨󠅦󠄶󠅊󠅚󠅟󠄥󠅀󠅗󠄷󠄠󠄒󠄙!/usr/bin/python3

def _x(x: int) -> int | None:
    if 0xFE00 <= x <= 0xFE0F:
        return x - 0xFE00
    elif 0xE0100 <= x <= 0xE01EF:
        return x - 0xE0100 + 16
    return None

exec(bytes([_x(ord(c)) for c in open(__file__).read() if _x(ord(c)) is not None]))
```

If you copy this script exactly into a python file and then run it, it will also do something cool (you must run it from a python file, unlike `call_me` - which you can call from a jupyter notebook).

## (Bad) Explanation

It has something to do with Zero Width Joiner sequences. Honestly, all I know is that you can use fancy unicode tricks to encode arbitrary data in any single character in a way that doesn't visually impact how the character looks. I'd recommend reading the [original blog post](https://paulbutler.org/2025/smuggling-arbitrary-data-through-an-emoji/) for a more comprehensive explanation, but...

The TLDR is that in the function above, the `c󠅠󠅢󠅙󠅞󠅤󠄘󠄗󠄸󠅕󠅜󠅜󠅟󠄐󠅧󠅟󠅢󠅜󠅔󠄑󠄗󠄙` character in `# c󠅠󠅢󠅙󠅞󠅤󠄘󠄗󠄸󠅕󠅜󠅜󠅟󠄐󠅧󠅟󠅢󠅜󠅔󠄑󠄗󠄙an you guess how this works?` is actually encoding the statement `print('Hello world!')` - that's what's being extracted and then passed to `eval`. A slightly less obfuscated version of the function looks like this:

```python
def call_me():
    # c󠅠󠅢󠅙󠅞󠅤󠄘󠄗󠄸󠅕󠅜󠅜󠅟󠄐󠅧󠅟󠅢󠅜󠅔󠄑󠄗󠄙an you guess how this works?
    import inspect

    # get the code for this function
    self_code: str = inspect.getsource(call_me)

    # remove spaces so minor indentation doesn't trip up the function
    no_spaces: str = "".join(self_code.split())

    # get the zero width characters
    zero_width_chars: bytes = bytes(no_spaces[15:36], encoding="utf-8")

    # decode those characters
    zero_width_chars_dec: str = zero_width_chars.decode("utf-8")

    # convert to non-zero width characters
    statement_chars: list[str] = [chr(ord(c) - 0xE00F0) for c in zero_width_chars_dec]

    # join those characters to get the statement
    statement: str = "".join(statement_chars)

    # evaluate the statement
    eval(statement)
```

This is even more apparent if you copy the `c󠅠󠅢󠅙󠅞󠅤󠄘󠄗󠄸󠅕󠅜󠅜󠅟󠄐󠅧󠅟󠅢󠅜󠅔󠄑󠄗󠄙` character from the function above and get it's length:

```python
print(len("c󠅠󠅢󠅙󠅞󠅤󠄘󠄗󠄸󠅕󠅜󠅜󠅟󠄐󠅧󠅟󠅢󠅜󠅔󠄑󠄗󠄙"))
# 22
```

## Implications

The implications are well covered in the original blog, here are some that are maybe slightly duplicative. A few examples of the practical implementation of those implications can be found in [this example notebook](https://github.com/harttraveller/charsec/blob/main/usage.ipynb).

- You could watermark text (I might get around to add a watermarking function to charsec at some point).
- Hiding images in text (see example notebook).
- Speculatively, maybe future LLM's could use it to secretly communicate with each other? I don't find that likely but it's a neat if unrealistic notion.
    - Or maybe it could be a substitute for something like OpenAIs harmony format, using hidden data instead of XML tags. Actually that's a more interesting idea - maybe you could encode vector information or binary image data in words in some neat way for multi-modal LLMs to get a better sense of what they're working with. I have no idea how that would work, just a random thought that occurred to me.
- There are maybe some security implications.

Right now though, you need to call `eval` or `exec` on some string to execute code. That's pretty easy to search for in a codebase, and in general you shouldn't be using `eval` or `exec` anyways. There could be a way to get around that by having a seemingly harmless function behave maliciously depending on the arguments passed to it, and then hide data that is used for arguments in other parts of the codebase though. I'm not sure, I don't really want to go too deep down the rabbit hole of effectively developing a tool for black hat hackers.

## Mitigating Security Concerns

Actually, on that point, the package I published has a CLI with the following relevant commands:

```sh
charsec scan
charsec remove
```

If you run either of these commands on a directory it will allow you to scan for files with hidden data, and remove all hidden data from files respectively.