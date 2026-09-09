---
type: ADR
title: Typed practice-exam catalog
description: Represent available and coming-soon exams as a discriminated TypeScript catalog.
status: Accepted
supersedes:
superseded_by:
tags: [frontend, questions]
timestamp: 2026-09-09T00:00:00Z
---

# 0003. Typed Practice-Exam Catalog

## Context

[Multiple practice-exam requirements](/prd/0002-multiple-practice-exams.md) need the application to expose complete sets and future unavailable sets without allowing incomplete content to enter the validated question registry. The current singleton `activeQuestionSet` cannot represent those states.

## Decision

Create a compiled catalog modeled as a discriminated union. An `available` entry must contain a complete `QuestionSet`; a `coming-soon` entry cannot contain questions or create an attempt. The application selects entries from this catalog, while question drafts, candidates, and semantic audit records remain authoring and CI concerns outside the runtime catalog.

Store attempts under keys derived from the selected question-set identifier and version. Read the legacy singleton key only to migrate a compatible Practice Exam 1 attempt.

## Alternatives Considered

Keeping one active singleton was rejected because each additional set would require another application-level switch rather than user selection. Registering placeholder questions was rejected because placeholders are not valid exam content and could accidentally become startable. Making catalog entries optional bags of metadata and questions was rejected because it would permit contradictory states such as `coming-soon` entries with questions.

## Consequences

Easier or gained:

- TypeScript prevents unavailable entries from carrying startable question content.
- Additional complete sets can enter one stable selection flow.
- Attempts for different sets do not overwrite one another.
- Review Markdown does not enter the browser bundle.

Harder or accepted trade-offs:

- The application adds an explicit catalog screen and selection transition.
- Legacy storage needs one narrow migration path for the already deployed first set.

## Verification

- Type-level catalog construction rejects invalid availability shapes.
- Component and browser tests select Practice Exam 1 and cannot start Practice Exam 2.
- Persistence tests prove distinct set/version keys and legacy migration.
- The production catalog test binds Practice Exam 1 to its frozen digest.

## Related

- PRD: [/prd/0002-multiple-practice-exams.md](/prd/0002-multiple-practice-exams.md)
- BDR: [/bdr/0004-exam-catalog-and-automated-publication.md](/bdr/0004-exam-catalog-and-automated-publication.md)
- Issue: [/issues/0002-add-practice-exam-catalog.md](/issues/0002-add-practice-exam-catalog.md)
