---
id: lab-03
title: "Lab #3: Working with volumes"
sidebar_label: "#3: Working with volumes"
slug: /containers/labs/03-working-with-volumes
---

## Overview

Docker containers may leverage volumes in order to support persistent workloads.
These volumes are useful for stateful applications that need to store data.
Users may choose to create a volume with the `docker volume` command,
or bind mount volumes to containers with the `-v` argument on the command line.

In this lab, we will learn how to use docker volumes with multiple containers.

## Challenge

Given the following shell script:

```bash
#!/bin/bash

echo "Hello"   > /docker/writer/1
echo "from"    > /docker/writer/2
echo "the"     > /docker/writer/3
echo "volume!" > /docker/writer/4
```

Create two images from the `debian` base image named `writer` and `reader`.
The `writer` Dockerfile should contain a `VOLUME /docker/writer` line,
and the `reader` Dockerfile should contain a `VOLUME /docker/reader` line.
When we run `writer`, it should run the script above and exit.
When we run `reader`, it should `cat` each file in the volume directory.

Run both containers twice, each time running `writer` before `reader`.
The first time, create a local directory and mount it to the containers.
For `writer`, the directory should be mounted to `/docker/writer`.
For `reader`, the directory should be mounted to `/docker/reader`.
The second time, mount a Docker volume created via `docker volume create`.
The volume should be mounted to each container in the same way as before.

## Solution

<details>
<summary>Click to reveal</summary>

Create the file `write.sh` locally by copying and pasting the snippet above.
Make the file executable:

    chmod +x write.sh

Create `Dockerfile.writer` with these contents:

```dockerfile
FROM debian
COPY write.sh /write.sh
VOLUME /docker/writer
ENTRYPOINT [ "/write.sh" ]
```

Build the `writer` container: 

    docker build -f Dockerfile.writer -t writer .

Create `Dockerfile.reader` with these contents:

```dockerfile
FROM debian
VOLUME /docker/reader
ENTRYPOINT [ "/bin/bash", "-c", "/bin/cat /docker/reader/*" ]
```

Build the `reader` container: 

    docker build -f Dockerfile.reader -t reader .

Create a local directory, and then run the containers:

    mkdir local
    docker run -it --rm -v "${PWD}/local:/docker/writer" writer
    docker run -it --rm -v "${PWD}/local:/docker/reader" reader

Create a Docker volume, and then run the containers:

    docker volume create ssklab3
    docker run -it --rm -v "ssklab3:/docker/writer" writer
    docker run -it --rm -v "ssklab3:/docker/reader" reader

</details>
