---
type: ADR
title: GitHub Pages project path
description: Build production assets below the GitHub Pages project path for the current repository.
status: Accepted
supersedes: 0001
superseded_by:
tags: [deployment]
timestamp: 2026-09-07T00:00:00Z
---

# 0002. GitHub Pages project path

## Context

The GitHub repository is `bajor/gcp-de-exam-simulator`, so GitHub Pages serves the project at `/gcp-de-exam-simulator/`. The prior Vite base path still used the former repository name, causing the deployed HTML to request JavaScript and CSS from `/gcp-de-quizzes/`, which does not exist.

## Decision

Build application assets and run browser tests at `/gcp-de-exam-simulator/`.

## Consequences

The deployed page loads its application bundle from the configured GitHub Pages project path. A future repository rename must update the Vite base path and browser-test URLs before deployment.

## Verification

- Production assets resolve below `/gcp-de-exam-simulator/`.
- The GitHub Pages start screen renders at `https://bajor.github.io/gcp-de-exam-simulator/` after deployment.
