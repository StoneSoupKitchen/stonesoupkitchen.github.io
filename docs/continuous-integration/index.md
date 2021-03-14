---
id: index
title: Continuous Integration
sidebar_label: Introduction
slug: /continuous-integration/
---

## Overview

Martin Fowler [defines][1] continuous integration (CI) as "a software
development practice where members of a team integrate their work frequently,
usually each person integrates at least daily - leading to multiple
integrations per day. Each integration is verified by an automated build
(including test) to detect integration errors as quickly as possible."

CI systems are built around one or more version control systems. In general,
composing CI pipelines is similar to maintaining multiple automated test
repositories. Teams often use "unit" CI pipelines that automatically build,
test, and deliver a singular repository. For larger applications, multiple
"unit" pipelines may be used to build and deliver each component individually,
and then a larger "integration" pipeline may be used to collect those outputs
and deploy an application.

Many different CI systems exist today. A short list of some of the most
popular systems currently in use:

* [GitHub Actions](https://github.com/features/actions)
* [GitLab CI](https://docs.gitlab.com/ee/ci/)
* [Jenkins](https://www.jenkins.io/)
* [Travis CI](https://travis-ci.com/)
* [Circle CI](https://circleci.com/)

[1]: https://martinfowler.com/articles/continuousIntegration.html

## Designing your CI pipeline

A good CI pipeline:

* Runs the quickest tools first.
* Provides timestamps for all stages within a pipeline.
* Does not rely on many input parameters outside of the build system.
* Runs tools the same way as the humans.

The primary objective of a CI pipeline is to provide fast feedback to the
developer. These pipelines should be optimized for speed and simplicity. Faster
stages should be run before slower stages in a pipeline so that the system
provides the fastest possible feedback. Overly relying on input parameters and
environment variables makes the overall pipeline difficult to debug when
issues arise. Secrets, like API tokens or passwords, are a notable exception.
Similarly, your CI system should always _invoke_ the build system. It should
never replace it. Running the build system in the same way as the humans means
that the humans can run the build system to debug issues.

When creating a CI pipeline, design for three types of events.

1. Pull requests
2. Branch pushes
3. Releases

Depending on project size and maturity, a single pipeline may be able to
fulfill all three roles. Users may choose to use multiple pipelines, such as
with separate GitHub Actions, or may choose to implement a singular pipeline
with gates and checkpoints built-in.

### Pull requests

Pull requests form the backbone of code review in Git-based version control
systems. The CI pipeline is an invaluable tool for automating reviews.

Tools to run:
* Commit syntax checkers
* Code linters
* Compilers
* Automated unit tests
* Static analysis tools

### Branch pushes

There are two sub-categories of branch pushes. Pushes to feature branches are
equivalent to the pull request pipeline, in most cases. However, pushes to
a `main`, `master`, or `trunk` branch may require a more robust pipeline.

In addition to the tools listed above, branch pushes to the primary integration
branch may:
* Run automated integration tests (if possible)
* Create snapshot builds
* Upload snapshot builds to an artifact store

### Releases

Git allows for multiple styles of software release. Some people choose to use
release branches, others use annotated tags, and still others release
continuously from the primary integration branch. The methods by which you
choose a release style will depend on the type of project, and may vary from
community to community.

Release pipelines will typically fire after a branch push. This pipeline
focuses on the software delivery and release aspects of development. As such,
this type of pipeline may:
* Create release builds
* Upload release builds to an artifact store
* Deploy latest build to a staging environment
* Conduct end-to-end tests

## Metrics

Within the scope of continuous integration, there are two metrics worth
tracking:

* Mean time between failures (MTBF)
* Mean time to recovery (MTTR)

These two metrics are typically used when monitoring production systems, but
both can be of some value when attempting to monitor the health of CI
pipelines. Both MTBF and MTTR will help you identify problematic stages or
other hazards when relying on continuous integration. Of these two metrics,
MTTR is the more valuable. A decrease in MTTR indicates a healthy organization
that can swarm on issues when problems arise. As more developers begin to trust
continuous integration, it's important that those same developers are empowered
to investigate and troubleshoot build failures.

When creating a CI pipeline, capture build status information for a given
software repository. For simplicity and noise reduction, consider only
capturing information from the primary integration branch. If developers are
hard at work catching failures and fixing them in their feature branches, 
pipeline failures may be a more common event. This will end up skewing the
metrics we're trying to capture.

### Capturing MTTR

When our pipeline goes from "red" to "green", we have recovered. Collect and
average the time intervals between failing builds and the first successful
build after them. This will produce the MTTR for your environment.

### Capturing MTBF

When our pipeline goes from "green" to "red", a failure has occurred. Collect
and average the time intervals between recovery points and the first failing
build after them. This will produce the MTBF for your environment.

