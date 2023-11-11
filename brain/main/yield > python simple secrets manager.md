#time/present/min #to/link #isa/python-package #isa/github-repository 


## unsorted

## developer

### requirements
- [ ] all utilities mirrored between package and CLI
- [ ]


---

## unstructured

- installation
- usage

## usage

via cli



## Overview

## Links


## Edges


## Details

Easier to work with than environment variables, but not particularly secure - though, notably, more secure than `env` files or tokens in a repository (no risk in accidentally committing secrets). Meant to be used on local machine, cloud solutions generally have secrets management built in. For local token management demanding security, alternative token management and/or SSO solutions should be used instead.

<!-- todo -->
<!-- ## Changelog -->




## links
- chat: [Token Dataclass Best Practices](https://chat.openai.com/share/b60f9f6e-a760-402f-9653-696ce03af4f7) ^2d4ccd


## features

### backlog
- [ ] token groups
- [ ] custom token directories for user packages
- [ ] support for non-unix systems
	- [ ] query: does `.[name]` work in windows?
- [ ] gather timezone info

## task
- [ ] use existing token manager from [[yield.tool.package.python > sunkcosts]]


### backlog
- [ ] separate out [[yield.tool.package.python > rich terminal utils]] and use this
- [ ] use [[yield.tool.package.python > pyeio]] for data io operations
- [ ] review and implement features from [[#^2d4ccd|chat]] if necessary


## unsorted

### todos
- token rotatation period
- token expiration period
- add token to environment variables
    - temporary in memory for program
    - permanent (.bash_profile, .zshrc, etc)
- tokens stale
- implement known tokens automatic testing
- implement token encryption/hashing (optional)
	- if then decrypt uses env variable, at least there's only one failure point, and if env variable is exposed, then the token is not also exposed
- integrate 1p CLI?
- for secure mode, keep access logs?
- github/gitlab secrets integration?


### auto validation