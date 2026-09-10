---
type: Issue
title: Author and publish Practice Exam 3
description: Create a distinct 50-question third practice exam through the established isolated registry and review workflow.
status: completed
labels: [content, feature]
blocked_by: [0004-complete-third-practice-exam]
tracker: pending
timestamp: 2026-09-10T00:00:00Z
---

## Scope

Implement [PRD 0004](/prd/0004-complete-third-practice-exam.md) using [ADR 0004](/adr/0004-isolated-practice-exam-registries.md). Author five isolated sections, preserve all existing candidates and audit records, obtain independent acceptance, then publish the accepted version as the third catalog entry.

## Acceptance

- Set 3 contains 11 design, 12 ingest, 10 store, 8 analyze, and 9 operate questions.
- Its exact accepted candidate has no overlap with Sets 1 or 2.
- `make test` and `make verify-sources` pass before publication.

## Plan

1. Inventory guide objectives, existing decisions, and official-sample exclusions.
2. Author and source each section independently.
3. Assemble, review, and publish only the accepted candidate.

## Outcome

Practice Exam 3 version 4 is independently accepted and available in the runtime catalog. The deployment workflow verifies live sources before GitHub Pages publishes the change.
