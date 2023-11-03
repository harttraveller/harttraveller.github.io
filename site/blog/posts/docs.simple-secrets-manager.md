---
draft: true
date:
  created: 2023-11-02
  updated: 2023-11-02
categories:
  - /page/documentation
  - /type/python-package
  - /area/devops-security
  - /area/secrets-management
---

# Documentation: simple-secrets-manager

This is a simple local secrets manager for managing API tokens or other secrets. Easier to work with than environment variables, but not particularly secure - though, notably, more secure than `env` files or tokens in a repository (no risk in accidentally committing secrets). Meant to be used on local machine, cloud solutions generally have secrets management built in. For local token management demanding security, alternative token management and/or SSO solutions should be used instead.

<!-- more -->

## Links

