---
type: PRD
title: Complete third practice exam
description: Add a distinct, independently reviewed 50-question third Professional Data Engineer practice exam.
status: Accepted
supersedes:
superseded_by:
tags: [exam, content]
timestamp: 2026-09-10T00:00:00Z
---

# 0004. Complete Third Practice Exam

## Problem / Motivation

Candidates need another full-length practice attempt without reusing the scenarios or decisions tested by Practice Exams 1 and 2.

## Goals

- Author 50 original questions for Professional Data Engineer exam guide version 4.2.
- Cover 11 design, 12 ingest, 10 store, 8 analyze, and 9 operate questions.
- Keep Practice Exams 1 version 6 and 2 version 4 unchanged.
- Publish only an exact candidate with live-source verification and independent semantic acceptance.

## Non-goals

- Modify existing practice-exam content, catalog order, or attempt persistence behavior.
- Use exam dumps, reconstructed exam questions, or non-Google evidence.
- Register placeholder or partial content in the runtime catalog.

## Requirements

1. Set 3 uses the `pde-v42-p3-<section>-NN` question-ID namespace.
2. Each question maps to one v4.2 objective and records the source verification date.
3. Every choice has documented, non-empty feedback supported by Google-owned evidence.
4. The novelty inventory rejects any repeated decisive scenario or decision from Sets 1 and 2 and the official sample questions.
5. `src/data/questionSets/practice3/` owns Set 3 sections, drafts, and candidates; the aggregate registry is the sole quality-tool entry point.
6. The runtime catalog adds Set 3 only after its exact candidate has an indexed acceptance record and no matching rejection.

## Execution Plan

1. Create a Set 3 novelty inventory and re-fetch the certification page and v4.2 guide.
2. Author the five final-count sections as separate source-backed slices.
3. Assemble and structurally validate the candidate through the aggregate registry.
4. Run `make test` and `make verify-sources`.
5. Obtain an independent review from an identifier distinct from every section author.
6. Add the accepted candidate as the third available catalog entry and verify independent attempts on desktop and mobile.

## Acceptance Criteria

- Set 3 has the exact 11/12/10/8/9 distribution and 50 total questions.
- Every question is original, deterministic, current, and documentation-backed.
- `make test` and `make verify-sources` pass.
- An indexed independent acceptance binds to the exact Set 3 candidate.
- The catalog exposes three available exams without changing Sets 1 or 2.

## Related

- ADR: [Isolated practice-exam registries](/adr/0004-isolated-practice-exam-registries.md)
- BDR: [Exam catalog and automated publication](/bdr/0004-exam-catalog-and-automated-publication.md)
- Issue: [/issues/0004-author-and-publish-practice-exam-three.md](/issues/0004-author-and-publish-practice-exam-three.md)
