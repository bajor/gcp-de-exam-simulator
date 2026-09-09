---
type: Issue
title: Author and publish Practice Exam 2
description: Create, independently audit, and publish a distinct 50-question second practice exam.
status: in-progress
labels: [content, feature]
blocked_by: []
tracker: pending
timestamp: 2026-09-09T00:00:00Z
---

## Author and Publish Practice Exam 2

Implement [PRD 0003](/prd/0003-complete-second-practice-exam.md) and [ADR 0004](/adr/0004-isolated-practice-exam-registries.md) while preserving the catalog behavior specified by [BDR 0004](/bdr/0004-exam-catalog-and-automated-publication.md).

### Scope

Add an isolated Set 2 registry, author and source-check all five final-count sections, assemble one complete candidate, obtain an independent content-bound semantic audit, publish the accepted candidate, and verify independent attempts on desktop and mobile.

### Acceptance

- Set 2 contains 11 design, 12 ingest, 10 store, 8 analyze, and 9 operate questions.
- Every question and choice explanation is supported by current Google-owned documentation.
- The exact 50-question candidate has an indexed independent acceptance and no matching rejection.
- Both catalog entries are available and retain independent attempts.
- Set 1 retains its fixed accepted digest.
- `make test` and `make verify-sources` pass.

### Plan

Deliver registry isolation, five section-authoring slices, candidate assembly, independent review, and final catalog publication as focused merge-dependent changes.

### Progress

- Set 2 coverage gaps and duplication risks have been inventoried against Set 1 and official samples.
- The isolated registry architecture, 50-question version-1 candidate, and 50-question version-2 corrective candidate are complete.
- The independent audit rejected version 1 for two Set 1 overlaps; its immutable rejection report is indexed and version 2 replaces only those decisions.
- Practice Exam 2 version 4 is independently accepted and available in the runtime catalog. The deployment workflow verifies live sources before GitHub Pages publishes the change.
