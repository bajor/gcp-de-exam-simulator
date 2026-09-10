---
type: ADR
title: Isolated practice-exam registries
description: Keep each practice exam in an isolated module tree and combine them only through aggregate verification registries.
status: Accepted
supersedes:
superseded_by:
tags: [questions, architecture]
timestamp: 2026-09-09T00:00:00Z
---

# 0004. Isolated Practice-Exam Registries

## Context

Practice Exam 1 version 6 is accepted and protected by a fixed content digest. Adding Set 2 directly to Set 1 section, draft, and candidate registries would make frozen composition files part of routine Set 2 edits and increase accidental-change risk.

## Decision

Place Practice Exam 2 sections, drafts, and candidates under `src/data/questionSets/practice2/`. Keep the existing Set 1 registry files unchanged. Combine each set's drafts and candidates only in `src/data/questionSets/registry.ts`, which is consumed by source verification and audit-record tools. Runtime publication continues through the typed catalog after exact acceptance.

## Alternatives Considered

Appending Set 2 directly to the existing Set 1 registries was rejected because routine authoring would edit files that compose frozen content. Moving Set 1 into a new directory was rejected because the migration would create unnecessary digest and regression risk. Creating a second independent verification script was rejected because duplicate quality-gate logic could drift.

## Consequences

Easier or gained:

- Set 2 authoring cannot alter Set 1 section composition files.
- One aggregate path verifies all drafts, candidates, audits, and available catalog entries.
- Future practice exams can use the same isolated layout.

Harder or accepted trade-offs:

- Runtime catalog and quality tooling import different registry layers until Set 2 is published.
- Each new practice exam adds one small module tree and aggregate registration step.

## Verification

- `make verify-sources` imports the aggregate registry and validates the partial Set 2 draft.
- Set 1's section, draft, and candidate registry files remain unchanged.
- The fixed Set 1 SHA-256 integration test passes throughout Set 2 work.

## Related

- PRD: [/prd/0003-complete-second-practice-exam.md](/prd/0003-complete-second-practice-exam.md)
- ADR: [/adr/0003-typed-practice-exam-catalog.md](/adr/0003-typed-practice-exam-catalog.md)
- Issue: [/issues/0003-author-and-publish-practice-exam-two.md](/issues/0003-author-and-publish-practice-exam-two.md)
