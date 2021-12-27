---
id: lab-01
title: "Lab #1: Signing container images"
sidebar_label: "#1: Signing container images"
slug: /software-supply-chain-security/labs/01-container-signing
---

## Overview

Signing container images helps to build trust.
It proves that the container image could only have come from us.
This lab will cover one such technique of signing container images.

## Challenge

Create a Docker image from `debian:stable-slim` that prints the string
"Hello, World!" when it is run.
Push the image to [ttl.sh](https://ttl.sh/).

After the container has been pushed,
use cosign to sign the image with your private key.
Cosign will automatically push signatures to the registry by default.

Next, delete the image from your system.
This will help us simulate the workflow for the users of our container.
Once the locally-built image is gone,
verify the container image is the same with cosign and your public key.
Then, pull the image from the registry.

## Solution

<details>
<summary>Click to reveal</summary>
Create a `Dockerfile` with these contents:

```dockerfile
FROM debian:stable-slim
CMD [ "echo", "Hello, World!" ]
```

Build the container image:

    IMAGE_NAME=$(uuidgen)
    docker build -t ttl.sh/${IMAGE_NAME}:1h .
    docker push ttl.sh/${IMAGE_NAME}:1h

Sign the container image with cosign:

    cosign sign --key cosign.key ttl.sh/${IMAGE_NAME}:1h

Delete the local container image:

    docker rmi ttl.sh/${IMAGE_NAME}:1h

Verify the container with your cosign public key:

    cosign verify --key cosign.pub ttl.sh/${IMAGE_NAME}:1h

Complete the challenge by pulling the container image from the registry:

    docker pull ttl.sh/${IMAGE_NAME}:1h

</details>
