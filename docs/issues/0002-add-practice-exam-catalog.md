---
type: Issue
title: Add the practice-exam catalog
description: Replace singleton activation with typed set selection, unavailable Set 2 metadata, and per-set persistence.
status: complete
labels: [feature, frontend]
blocked_by: []
tracker: "#8"
timestamp: 2026-09-09T00:00:00Z
---

## Add the Practice-Exam Catalog

Implement [PRD 0002](/prd/0002-multiple-practice-exams.md), [ADR 0003](/adr/0003-typed-practice-exam-catalog.md), and [BDR 0004](/bdr/0004-exam-catalog-and-automated-publication.md).

### Scope

Add the typed catalog and selection screen, list Practice Exam 2 as coming soon, migrate to set-specific attempt storage, remove runtime review-document activation and manual deployment dispatch, remove the requested result controls, and freeze Practice Exam 1 by content digest.

### Acceptance

- Practice Exam 1 is selectable and retains its complete attempt flow.
- Practice Exam 2 is visible but cannot start.
- Attempts persist independently by set and version, including compatible legacy migration.
- Runtime application code does not parse review Markdown.
- Practice Exam 1 matches its fixed accepted digest.
- `Priority` and `Wrong answers only` are absent.
- `make test` and `make verify-sources` pass.

### Plan

Implement the catalog domain, refactor persistence and screen transitions, update responsive UI and tests, synchronize living documentation and diagrams, then deploy from a green `main` build.

### Progress

- The typed catalog exposes frozen Practice Exam 1 version 6 and a non-startable Practice Exam 2 coming-soon entry.
- Set-specific storage preserves independent attempts and migrates compatible state from the legacy singleton key without deleting another set's state.
- Runtime code no longer imports review Markdown; CI requires exact accepted audits, vetoes exact rejections, and verifies the frozen Set 1 digest.
- Catalog transitions manage keyboard focus, and desktop and mobile browser flows pass.
- GitHub Pages deploys only from `main` pushes with no manual dispatch or required human reviewer.
- The requested `Priority` and `Wrong answers only` labels are absent from the application.
