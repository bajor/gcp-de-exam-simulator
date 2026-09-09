---
type: PRD
title: Complete second practice exam
description: Add an independently sourced and reviewed 50-question second practice exam without changing the frozen first exam.
status: Accepted
supersedes: 0002
superseded_by:
tags: [exam, content]
timestamp: 2026-09-09T00:00:00Z
---

# 0003. Complete Second Practice Exam

## Problem / Motivation

[PRD 0002](/prd/0002-multiple-practice-exams.md) established a multi-exam catalog but intentionally left Practice Exam 2 unavailable. Candidates need a second complete exam that tests materially different scenarios and decisions while preserving the accepted first exam exactly.

## Goals

- Author 50 original questions mapped to Professional Data Engineer exam guide version 4.2.
- Cover 11 design, 12 ingest, 10 store, 8 analyze, and 9 operate questions.
- Support every answer and distractor explanation with current Google-owned documentation.
- Keep Practice Exam 1 version 6 byte-for-byte equivalent under its fixed content digest.
- Publish Practice Exam 2 only after complete structural, source, and independent semantic acceptance.
- Preserve separate browser-local attempts for each available set and version.

## Non-goals

- Change, correct, or reorganize Practice Exam 1 content.
- Use exam dumps, remembered live questions, or reconstructed official questions.
- Publish a partial Set 2 draft or bypass independent semantic review.
- Add accounts, synchronization, analytics, or administrative controls.

## Requirements

1. Practice Exam 2 contains exactly 50 questions in the required 11/12/10/8/9 section distribution.
2. Every question maps to one explicit exam-guide version 4.2 objective.
3. Set 2 question IDs use the `pde-v42-p2-<section>-NN` namespace.
4. Every choice contains specific feedback and references current Google-owned evidence fetched on the recorded verification date.
5. Set 2 does not repeat a decisive fact, scenario, or official-sample pattern already identified by the content inventory.
6. Each complete section has a stable identified author, and the final reviewer differs from every author.
7. Every registered section has its final required count; the Set 2 draft cannot enter the candidate registry before all five sections exist.
8. Practice Exam 2 remains `coming-soon` until its exact candidate digest has an indexed acceptance and no matching rejection.
9. Publishing Set 2 changes its existing catalog entry to `available` without changing Practice Exam 1 content or order.
10. Set-specific storage keeps attempts for the two exams independent.

## Quality Requirements

| Quality attribute | Scenario | Verified by |
|---|---|---|
| Correctness | A section has the wrong count, invalid evidence, or ambiguous selection cardinality. | Typed validation and `make verify-sources`. |
| Independence | Practice Exam 2 resembles Set 1 or an official sample in its decisive scenario. | Independent semantic review of all 50 questions. |
| Immutability | Set 1 content changes while Set 2 is authored or published. | Fixed Set 1 SHA-256 integration test. |
| Availability | An incomplete or unaudited Set 2 candidate is registered for runtime use. | Catalog audit-eligibility source test. |
| Isolation | Saved progress exists for both practice exams. | Component and browser tests using set/version storage keys. |

## Acceptance Criteria

- Practice Exam 2 has 50 accepted questions and the exact required section distribution.
- `make test` and `make verify-sources` pass.
- An independently authored review record accepts every exact candidate question and source.
- The production catalog lists Set 1 first and Set 2 second, both as available.
- Starting Set 2 displays its first question on desktop and mobile.
- Attempts for Set 1 and Set 2 restore independently.
- Practice Exam 1 retains SHA-256 digest `dcda3df67f3a2c70bc824a4c83f9ffa1444c7052606bbfa9ccaa5a66b42aefb6`.

## Behavior

- [Exam attempt and scoring behavior](/bdr/0001-exam-attempt-and-scoring.md)
- [Exam catalog and automated publication](/bdr/0004-exam-catalog-and-automated-publication.md)

## Open Questions

None.

## Decision Log

- [Isolated practice-exam registries](/adr/0004-isolated-practice-exam-registries.md)

## Related

- Constitution: [/constitution.md](/constitution.md)
- Supersedes: [PRD 0002](/prd/0002-multiple-practice-exams.md)
- Issue: [/issues/0003-author-and-publish-practice-exam-two.md](/issues/0003-author-and-publish-practice-exam-two.md)
