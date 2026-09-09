---
type: PRD
title: Multiple practice exams
description: Let candidates choose an available practice exam while showing future sets without fake questions.
status: Accepted
supersedes: 0001
superseded_by:
tags: [exam, catalog]
timestamp: 2026-09-09T00:00:00Z
---

# 0002. Multiple Practice Exams

## Problem / Motivation

The simulator currently exposes one active question set directly. A second set is planned, but adding placeholder questions would violate the content policy and the singleton registry cannot represent an unavailable future set. Candidates need a clear exam catalog that supports independently persisted attempts as real sets are added.

## Goals

- Let the candidate choose among available practice exams.
- Show Practice Exam 2 as unavailable without registering fake questions.
- Preserve a separate browser-local attempt for each available set and version.
- Publish validated compiled sets automatically without a runtime acceptance-document switch.
- Keep Practice Exam 1 version 6 immutable through a fixed content digest checked in CI.

## Non-goals

- Author questions for Practice Exam 2.
- Permit starting an incomplete or unavailable set.
- Add accounts, synchronization, analytics, or administrative controls.
- Remove structural, source, or independent semantic quality checks for real question content.

## Requirements

1. The landing page lists every catalog entry with its title and availability.
2. An available entry exposes its question count, duration, and a start or resume action.
3. An unavailable entry displays `Coming soon` and has no start action.
4. Selecting Practice Exam 1 opens its existing timed attempt flow.
5. The candidate can return to the catalog when no attempt is actively being answered.
6. Each available set and version uses a distinct browser storage key.
7. Existing Practice Exam 1 browser state migrates from the legacy singleton key when compatible.
8. Practice Exam 1 content must retain SHA-256 digest `dcda3df67f3a2c70bc824a4c83f9ffa1444c7052606bbfa9ccaa5a66b42aefb6`.
9. Runtime application loading does not parse or require Markdown acceptance records.
10. Production deployment starts automatically after a successful push to `main`; no manually dispatched deployment path is exposed.
11. The labels `Priority` and `Wrong answers only` are absent from the application.

## Quality Requirements

| Quality attribute | Scenario | Verified by |
|---|---|---|
| Correctness | A developer changes Practice Exam 1 content; CI computes a different digest and fails. | Frozen-content integration test. |
| Recoverability | A candidate has attempts for two available sets; loading either set restores only its compatible attempt. | Persistence unit and component tests. |
| Accessibility | A keyboard or screen-reader user opens the catalog; availability and actions have semantic names and do not rely only on color. | Component and Playwright checks. |
| Portability | GitHub Pages receives a successful `main` push; the catalog deploys without a manual workflow dispatch. | Pages workflow and deployed URL smoke test. |

## Acceptance Criteria

- The deployed landing page shows Practice Exam 1 as available and Practice Exam 2 as `Coming soon`.
- Practice Exam 2 cannot create an attempt.
- Practice Exam 1 retains its existing 50-question, two-hour, scoring, and evidence behavior.
- Attempts use set-specific storage and compatible legacy Practice Exam 1 state migrates once.
- Runtime production code has no dependency on `docs/reviews/*.md`.
- `Priority` and `Wrong answers only` do not appear in source or the rendered application.
- `make test` and `make verify-sources` pass.

## Behavior

- [Exam attempt and scoring behavior](/bdr/0001-exam-attempt-and-scoring.md)
- [Exam catalog and automated publication](/bdr/0004-exam-catalog-and-automated-publication.md)

## Open Questions

None.

## Decision Log

- [Typed practice-exam catalog](/adr/0003-typed-practice-exam-catalog.md)
- [Exam catalog and automated publication](/bdr/0004-exam-catalog-and-automated-publication.md)

## Related

- Constitution: [/constitution.md](/constitution.md)
- Issue: [/issues/0002-add-practice-exam-catalog.md](/issues/0002-add-practice-exam-catalog.md)
