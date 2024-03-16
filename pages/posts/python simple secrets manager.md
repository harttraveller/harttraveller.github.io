---
title: Python Simple Secrets Manager
draft: false
date: 2023-11-10
header: /file/pssm.jpg
---

A simple command line based secrets and tokens manager built in python. This page covers its purpose, setup process, usage, and other details.

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

This package addresses the two main drawbacks to this approach (or any other similar approach): First, you can't easily access the API key from other projects. Second, you might accidentally commit the secrets file anyways. (1)
{ .annotate }

1.  A common mistake I've seen here is that someone will be working on a branch (let's say `dev`). They add the `secrets.yaml` or equivalent file on this branch, and add it to the `.gitignore`. Then, they switch back to the `main` (or any other) branch. Because they're now on a separate branch where `secrets.yaml` wasn't ignored, it's (naturally) no longer ignored, but because it *was* ignored in `dev`, it isn't removed from the context of the directory, and now shows up as a new file that is not yet committed in `main`. Now if the user commits all the changes they make in `main` - the `secrets.yaml` might also be unwittingly committed.

??? note "Global Environment Variable Security Comparison"
    Currently this package does not offer major security benefits over simply using global environment variables, although it is ideally easier to use, and offers additional features. Future versions will incorporate enhanced security measures, time permitting.

## Quickstart

To get started, first install the package.

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

Check and make sure it's actually installed. The expected output is included (your version may be newer).

```sh
secrets --version
```

![[pssm.version.png]]{ width="500" }


You can now add a secret. You will be prompted to specify the uid and key.

```sh
secrets keep
```

Then, if you want to access the secret from within python, just make sure the package is installed and get the secret by the uid set earlier.

```py
from pssm import secrets
token = secrets.get("[SECRET UID FROM EARLIER]")
```

??? info "Command Help"
    If you want to view information about a particular CLI command just use the `--help` flag on the command.

??? info "Argument Mode"
    By default the CLI operates interactively, but you can pass the `-a` flag to run commands by passing in parameters directly. For example:

    ```sh
    secrets keep -a --uid example --key 1234
    ```

## Tutorial

This tutorial extends the quickstart. Full documentation might be added at a later date, but for now I'll just cover a few key points, commands, and methods which should be sufficient. To start, open a terminal and a jupyter notebook (or python script) to run this code. For notebooks/scripts, make sure you've imported the module.

```py
from pssm import secrets
```

### Add Secret

Add a secret with:

```sh
secrets keep
```

or if via arguments with:

```sh
secrets keep -a --uid example --key 1234
```

or in python with:

```py
secrets.keep(uid="example", key="1234")
```

### View Secret

```sh
secrets view
```

or if you already know the `uid`:

```sh
secrets view -a --uid example
```

You can get the key in python with:

```py
secrets.get(uid="example")
```

<!-- * this was temporarily removed due to pydantic version mismatch -->
<!--todo

Or by the automatically generated attributes:

```py

```
-->


### Copy Secret

This only works in the CLI:

```sh
secrets copy
```

or if you already know the `uid`:

```sh
secrets copy -a --uid example
```

### List Secret(s)

With the CLI:

```sh
secrets list
```

![[pssm.secrets-list.jpg]]{ width="500" }


In python:

```py
secrets.uids
```

### Forget Secrets(s)

With the CLI:

```sh
secrets forget
```

or if you already know the `uid`:

```sh
secrets forget -a --uid example
```


In python:

```py
secrets.forget(uid="example")
```

<!-- todo: add more info -->
## Architecture

By default the package will create a `secrets.toml` file in a `.secrets` directory in your home folder, which is where data is stored. More info may be added here in the future.


??? note "Architecture Notes"
    - In future versions secret groups may be added, which is why it (`.secrets`) is a directory.
    - Does this work on windows? I haven't tested, lmk on GitHub if it doesn't but you'd like to use it.
    - Conceivably, if someone got your `secrets.toml` file they'd have all your secrets, but seeing as a decent fraction of AWS free tier users still just put their root keys in the `~/.aws` directory, I figure this is 'secure enough' in the worldly context for right now.
        - That said, at a later date I'd like to add encryption options, though doing so would make this 'less simple'.
        - Specifically, I imagine if a package user *did* use a gitignored `secrets.yaml` (or equiv.) file in their repository, but *that* only contained the keys to the secret group for the secrets held in `secrets.toml`, then a malicious actor who just steals the `secrets.toml` file wouldn't get anything useful, but also if you accidentally commit your `secrets.yaml` you've only actually committed the keys used to unlock your local secrets, which can be solved easily enough by refreshing these keys. Committing secrets wouldn't even technically be security violation then, though TBH would still be pretty wierd.
            - Of course, if someone has access to your computer and the `secrets.toml` file is encrypted with keys in the yaml in a given repository, they can still access the real keys in the toml, they would just need to find where they are referenced. So this wouldn't be a huge security benefit insofar as it's not actually secure beyond the laziness of the would be hacker.
                - This could be ameliorated by storing decryption keys in 1P.
                    - But you might as well just use 1P CLI then...
                - Could add logs to ameliorate this.
                - I should probably just learn how to use the 1P CLI. I just realized that probably does exactly what I want and is way more secure than anything I can create.
                - Maybe I could integrate this package with 1P? A bit of a sunk cost development effort...
                    - In fairness, maybe this is useful insofar as it's more secure than including ignored secrets in your repository, but more simple than whatever the 1P CLI does, though I haven't bothered to check that yet.

<!-- todo
## Features
-->


<!-- todo
## Documentation

### CLI

### Python

-->



<!-- todo
## Security

-->



## Changelog

!!! version "0.1.2"
    - Make dependency groups optional.

??? version "0.1.1"
    - Implement basic features documented on initial version of documentation site. Future changelogs will include more information about specific features.

??? version "0.1.0"
    - Initial PyPi push, this version is broken.

## Tasks

- [ ] Refactor listing secrets to return a list of `Secret` objects, differentiate it from CLI.
    - [ ] Related: Add CLI `uids` list
- [ ] Add multiple parameters inputs for `-a` mode in CLI to:
    - [ ] `view`
    - [ ] `keep`
    - [ ] `forget`
- [ ] Reload secrets before returning properties
    - This fixes issue where something is added via CLI but in memory secrets don't change.