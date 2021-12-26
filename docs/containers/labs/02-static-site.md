---
id: lab-02
title: "Lab #2: Static site"
sidebar_label: "#2: Static site"
slug: /containers/labs/02-static-site
---

## Overview

Static websites are a popular means of sharing information. Students and
professionals alike use static websites for documentation and personal web
pages. This challenge will have you deploy an HTML web page to a container.

## Challenge

Given the following `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Containerized Website</title>
  </head>

  <body>
    <h1>Welcome!</h1>
    <p>This website is running in a Docker container!</p>
  </body>
</html>
```

Create a new Docker image named `homepage` from `nginx` that when run, displays
the above web page when accessed with a web browser at `localhost:3000`.

## Solution

<details>
<summary>Click to reveal</summary>

Create the file `index.html` locally by copying and pasting the snippet above.

Create a Dockerfile with these contents:

```dockerfile
FROM nginx
COPY index.html /usr/share/nginx/html
```

Build the container:

    docker build -t homepage .

After Docker pulls down the container from Docker Hub and builds the container,
run it to verify that we've completed this challenge:

    docker run -p 3000:80 homepage

Use a web browser to access `localhost:3000`, which should display the contents
of the index.html file.

</details>
