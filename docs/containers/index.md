---
id: index
title: Containers
sidebar_label: Introduction
slug: /containers/
---

## Overview

Containers are packages of software that are made to run in isolation, separate
from the environment of the host system. However, containers still use the host
system's kernel, making them much lighter in resource utilization than virtual
machines. This shared kernel can come at a cost: Attackers may use a
compromised container to gain access to the host system. Development and
deployment of new services is made easier by the existence of containers, but
do not fail to neglect the security aspects of using them!

## Security Guidelines

:::caution

We recommend checking out the references section and doing your own research,
too, when it comes to security. We never intend to lead readers astray, but
security is a moving target. This list should be treated as incomplete.

:::

Some basic hygiene items for creating secure containers:

- Scan your container images for vulnerabilities.
- Scan your container images for malware.
- Never create or use images that run as `root` or UID 0.
- Never embed secrets, such as private keys, license keys, or passwords, inside
  a container.
- Only use images from a source you trust.
- Rebuild your container images regularly to rapidly incorporate updates.
- For base images, in order of preference:

1. `FROM scratch`
2. Distroless
3. Minimal base image

## References

- [NIST Application Container Security
  Guide](https://www.nist.gov/publications/application-container-security-guide)
