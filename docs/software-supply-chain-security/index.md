---
id: index
title: Software Supply Chain Security
sidebar_label: Introduction
slug: /software-supply-chain-security
---

## Overview

A supply chain is the suite of activities that takes raw materials,
transforms them into a specific good or service,
and delivers that good or service to a customer or end user.
Naturally, a software supply chain takes this concept
and applies it to the activities of software development and delivery.

## Cosign

Cosign is a tool from the Sigstore suite.
It helps developers to sign artifacts with a cryptographic signature.
Cosign users who have the developer's public key can then verify that the
artifact they downloaded was retrieved from that developer.
Similar in functionality to OpenPGP and GPG,
Cosign uses asymmetric cryptography to sign artifacts.

### Installing Cosign

Follow the official instructions in the Sigstore documentation:

<https://docs.sigstore.dev/cosign/installation>

### Generating a local keypair

Once cosign is officially installed,
generate a keypair with this command:

    cosign generate-key-pair

Cosign will prompt you for a password for the private key.
Provide and confirm a secure password.
By default, the command above will write two files to the current directory:

1. `cosign.key` (Private key)
2. `cosign.pub` (Public key)

Store the private key in a safe place!
Create a hidden directory in your home folder and restrict its permissions:

    mkdir ~/.cosign
    chmod 0700 ~/.cosign

Then move the keypair to the new directory for safekeeping.

    mv cosign.key ~/.cosign/personal.key
    mv cosign.pub ~/.cosign/personal.pub

When publishing signed artifacts out to your users,
make sure that you likewise publish your public key!
This will help would-be users to verify the artifacts came from you!

### Generating a keypair directly for a GitHub project

Cosign also allows you to generate keypairs as above,
but without ever writing the keys to disk.
Official instructions are available here:

<https://docs.sigstore.dev/cosign/git_support>

Once run, the following secrets are set up on the project:

- `COSIGN_PASSWORD`
- `COSIGN_PRIVATE_KEY`
- `COSIGN_PUBLIC_KEY`

These secrets are accessible as variables within the platform's CI system.
