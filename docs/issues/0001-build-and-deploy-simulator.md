---
type: Issue
title: Build and deploy the documentation-backed simulator
description: Implement, verify, and deploy the first complete practice exam.
status: complete
labels: [feature, content]
blocked_by: []
tracker: "#1"
timestamp: 2026-08-31T00:00:00Z
---

## Build and deploy the documentation-backed simulator

Implement [PRD 0001](/prd/0001-documentation-backed-exam-simulator.md), [ADR 0001](/adr/0001-static-typed-application.md), [BDR 0001](/bdr/0001-exam-attempt-and-scoring.md), and [BDR 0003](/bdr/0003-content-bound-question-activation.md), based on [exam-format research](/research/0001-exam-format-and-content-policy.md).

### Scope

Create the static application, all 50 independently sourced questions, test and source-verification gates, question-authoring skill, GitHub Pages workflow, README instructions, and live deployment.

### Acceptance

- The application behavior and question distribution satisfy PRD 0001.
- Every question passes structural, source, and independent semantic review.
- `make test` and `make verify-sources` pass.
- The README links to a working GitHub Pages deployment.

### Plan

Deliver focused foundation, exam-section content, authoring workflow, and deployment changes. Merge each change only after its quality gates and review succeed.

### Progress

- The simulator foundation, authoring workflow, and GitHub Pages deployment are complete.
- The active `design`, `ingest`, `store`, `analyze`, and `operate` sections contribute the required 11, 12, 10, 8, and 9 questions, respectively.
- A post-activation quality audit rejected 11 questions in immutable version 1. Independent reviews rejected corrected versions 2 through 4, and a final audit reversed the initial acceptance of version 5 after finding one unsupported question.
- Independent reviewer `opencode-gpt-5.6-sol-v6-independent-review-20260908` accepted all 50 questions in `professional-data-engineer-v4.2-practice-1-v6` version 6 after evaluating its 89 unique Google-owned evidence URLs. The accepted record and production test bind the candidate SHA-256 digest and enable activation without permitting unnoticed content drift.
