#present/medium

## edges
- main site docs: [[docs.simple-secrets-manager]]


## links
- chat: [Token Dataclass Best Practices](https://chat.openai.com/share/b60f9f6e-a760-402f-9653-696ce03af4f7) ^2d4ccd




## features

### backlog
- [ ] token groups
- [ ] custom token directories for user packages
- [ ] support for non-unix systems
	- [ ] query: does `.[name]` work in windows?

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


```toml
# todo: can add auto validation later when needed
# [tool.poetry.group.validation]
# optional = true

# [tool.poetry.group.validation.dependencies]
# openai = "^0.28.1"
# mapbox
# scrapestack
# redshred
# gradient
# kaggle
# cephalon
# aws
# huggingface?
```