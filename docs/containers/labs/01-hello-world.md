---
id: lab-01
title: Containers
sidebar_label: "#1: Hello, World!"
slug: /containers/labs/01-hello-world
---

# Lab #1: Hello, World!

## Overview

Get started using Docker with everyone's favorite exercise: Hello, World!

## Challenge

Create a Docker image from `debian:stable-slim` named `helloworld` that prints
the string "Hello, World!" when it is run.

## Solution

<details>
<summary>Click to reveal</summary>
Create a `Dockerfile` with these contents:

```dockerfile
FROM debian:stable-slim
CMD [ "echo", "Hello, World!" ]
```

Build the container: 

    docker build -t helloworld .

After Docker pulls down the container from Docker Hub and builds the container,
run it to verify that we've completed this challenge:

    docker run helloworld

</details>
