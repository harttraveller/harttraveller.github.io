---
title: Python Simple Secrets Manager
header: /files/head/pssm.jpg
published: true
date: 2023-11-10
categories:
    - /docs
    - /python
    - /tool
    - /cli
---

!!! summary
    A simple command line based secrets and tokens manager built in with python. This page covers its purpose, setup process, usage, and other details.

<!-- more -->

??? links
    - [PyPi Package](https://pypi.org/project/python-simple-secrets-manager/)
    - [GitHub Repository](https://github.com/harttraveller/python-simple-secrets-manager)

??? bug "Support"
    If you find a bug, you can submit an issue on [GitHub](https://github.com/harttraveller/python-simple-secrets-manager/issues) and I'll try to address it time permitting.


## Purpose

Suppose you're developing a python package that needs to access external API services. To test the package, you need to be able to load your API key, but users of your package should sign up to get their own API key. You can address this by creating a directory structure like:

```
my_package/
├── __init__.py
└── ...
secrets.yaml
.gitignore
```

and then in your `.gitignore` add:

```
secrets.yaml
```

This package addresses the two main drawbacks to this approach (or any other similar approach). First, you can't easily access the API key from other projects. Second, you might accidentally commit the secrets file anyways. (1)
{ .annotate }

1.  A common mistake I've seen here is that someone will be working on a branch (let's say `dev`). They add the `secrets.yaml` or equivalent file on this branch, and add it to the `.gitignore`. Then, they switch back to the `main` (or any other) branch. Because they're now on a separate branch where `secrets.yaml` wasn't ignored, it's (naturally) no longer ignored, but because it *was* ignored in `dev`, it isn't removed from the context of the directory, and now shows up as a new file that is not yet committed in `main`. Now if the user commits all the changes they make in `main` - the `secrets.yaml` might also be unwittingly committed.

??? note "Global Environment Variable Security Comparison"
    Currently this package does not offer major security benefits over simply using global environment variables, although it is ideally easier to use. Future versions will incorporate enhanced security measures, time permitting.

## Documentation




### Installation

=== "pip"

    ```sh
    pip install python-simple-secrets-manager
    ```

=== "poetry"

    ```sh
    poetry add python-simple-secrets-manager
    poetry install
    ```

=== "conda"

    ```sh
    conda create -n pssm python=3.11 -y
    conda activate pssm
    pip install python-simple-secrets-manager
    ```