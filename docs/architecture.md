---
type: Architecture View
title: Practice Exam Architecture
description: Static application modules, runtime data flow, persistence boundary, and deployment ownership.
status: Accepted
tags: [architecture]
timestamp: 2026-08-31T00:00:00Z
---

# Practice Exam Architecture

## Target Context

The browser loads a static React application from GitHub Pages. The application imports a typed catalog of immutable TypeScript question sets, stores current or completed attempts in browser `localStorage`, and opens cited Google Cloud documentation in external pages. There is no application server or user account. The catalog offers frozen Practice Exam 1 version 6 and represents Practice Exam 2 as coming soon without placeholder questions.

## Module Ownership

| Module | Ownership |
|---|---|
| `src/domain/` | Owns catalog and question types, attempt state, scoring, structural validation, and persistence contracts. |
| `src/data/questionSets/sections/` | Owns complete, independently mergeable exam-guide sections before full-set assembly. |
| `src/data/questionSets/drafts.ts` | Owns partial question-set manifests used by structural and live-source verification. |
| `src/data/questionSets/candidates.ts` | Owns complete candidate assembly from registered draft identifiers. |
| `src/data/questionSets/index.ts` | Owns the runtime catalog of available and coming-soon exam entries. |
| `docs/reviews/` | Owns independently authored rejection reports and accepted semantic audit records checked by CI. |
| `.opencode/skills/gcp-pde-question-authoring/` | Owns the repository-specific sourcing, drafting, verification, and author-handoff procedure. |
| `.opencode/skills/gcp-pde-question-review/` | Owns final independent semantic review and content-bound audit records. |
| `src/components/` | Owns catalog, start, exam, navigation, submission, and result-review interfaces. |
| `src/App.tsx` | Owns catalog selection, screen transitions, and restoration of the selected set's persisted attempt. |
| `scripts/` | Owns documentation checks, live question-source validation, and review-record generation. |
| `.github/workflows/` | Owns continuous integration, visual cleanup, and GitHub Pages deployment. |

```mermaid
flowchart LR
  Pages[GitHub Pages] --> App[src/App.tsx]
  Catalog[Typed exam catalog] --> App
  Catalog -->|Available| Set1[Practice Exam 1]
  Catalog -->|Coming soon| Set2[Practice Exam 2 metadata]
  Skill[Question-authoring skill] --> Section[Complete draft section]
  Section --> Draft[Partial question-set registry]
  Draft --> Verify[Structural and live-source verification]
  Verify --> Candidate[Complete candidate set]
  Candidate --> Review[Independent semantic review]
  Review -->|Any failure| Rejection[Indexed rejection report]
  Rejection -->|Revise under new candidate ID| Section
  Review -->|All pass| Acceptance[Content-bound audit record]
  Acceptance --> CI[Automated quality gates]
  Candidate --> CI
  CI --> Catalog
  App --> Components[src/components]
  App --> Domain[src/domain]
  Domain --> Storage[Browser localStorage]
  Components --> Sources[Google Cloud documentation]
```

The authoring skill produces one final-count section at a time and registers it in the partial question-set manifest. `make verify-sources` validates every registered section, fetches every unique evidence URL, and binds indexed audit records to exact registered candidates. `src/data/questionSets/candidates.ts` assembles candidates only from registered draft identifiers. A failed review creates an indexed rejection report and returns the affected IDs to an independent author. The rejected candidate remains immutable and registered; corrections use a new candidate ID. CI permits a runtime catalog entry only when its exact acceptance exists and no exact rejection exists, without importing Markdown into the browser bundle. Practice Exam 1 has an additional fixed SHA-256 test that blocks any future drift. `App.tsx` joins catalog selection, domain behavior, and screen components. Domain persistence is the only mutable storage boundary. Result links open Google Cloud source evidence outside the application.

## Attempt Data Flow

1. The candidate selects an available question set from the catalog.
2. The application restores that set's compatible attempt or creates one with an absolute two-hour deadline when requested.
3. Answer, navigation, and review-flag changes replace the immutable attempt state and persist it locally.
4. Manual submission or deadline expiration creates a completed result.
5. Scoring compares answer identifier sets exactly and calculates total and section percentages.
6. Result review joins each response with choice feedback and source evidence from the immutable question set.

```mermaid
stateDiagram-v2
  [*] --> Catalog
  Catalog --> Ready: Select available set
  Ready --> Catalog: Choose another exam
  Ready --> InProgress: Start
  InProgress --> InProgress: Answer, navigate, or mark
  InProgress --> Completed: Confirm finish
  InProgress --> Completed: Deadline expires
  InProgress --> InProgress: Reload compatible attempt
  Completed --> Completed: Reload completed attempt
  Completed --> InProgress: Confirm new attempt
  Completed --> Catalog: Choose another exam
```

Every in-progress state change is saved under a key derived from the question-set identifier and version. Reload restores only state compatible with the last selected set; malformed or mismatched data is removed. The legacy singleton key migrates once when it contains compatible Practice Exam 1 state. Completed attempts remain read-only until the candidate confirms replacement, and returning to the catalog does not clear them.

## Deployment

Vite builds the static site with `/gcp-de-exam-simulator/` as its base path. After every push to `main`, `.github/workflows/pages.yml` installs the browser test runtime, runs `make test` and `make verify-sources`, uploads `dist/` only if both gates pass, and deploys the artifact to the `github-pages` environment. The workflow has no manual dispatch trigger or required human reviewer.

## Drift Control

`make test` checks documentation structure, TypeScript, ESLint, unit and component behavior, the production build, and desktop and mobile browser flows. Question invariants are checked at section, draft-set, candidate-set, and audit-record boundaries. `make verify-sources` checks draft and candidate registries, every indexed acceptance and rejection record, every available catalog entry, the frozen Practice Exam 1 digest, and all live URLs. Deployment is checked by the automatic Pages workflow and a live URL smoke test.

## Related Decisions

- [Static typed application architecture](/adr/0001-static-typed-application.md)
- [Exam attempt and scoring behavior](/bdr/0001-exam-attempt-and-scoring.md)
- [Typed practice-exam catalog](/adr/0003-typed-practice-exam-catalog.md)
- [Exam catalog and automated publication](/bdr/0004-exam-catalog-and-automated-publication.md)
