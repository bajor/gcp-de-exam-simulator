---
type: Review
title: Independent review rejection of professional-data-engineer-v4.2-practice-1-v3
description: Semantic and source review rejecting two questions in candidate version 3.
status: Rejected
timestamp: 2026-09-08T00:00:00Z
---

# Independent Review Rejection of professional-data-engineer-v4.2-practice-1-v3

## Review Summary

Reviewer `opencode-gpt-5.6-sol-review-20260908-v3` is independent of candidate authors `gpt-5.6-sol-design-20260901`, `gpt-5.6-sol-ingest-20260901`, `gpt-5.6-terra-store-20260907`, `gpt-5.6-sol-analyze-v3-20260908`, and `gpt-5.6-sol-operate-v3-20260908`, and did not edit candidate content. The reviewer re-fetched the Professional Data Engineer certification page, exam guide version 4.2, and all 26 official sample questions; ran `make test` and `make verify-sources`; independently opened all 88 unique Google-owned evidence URLs; inspected the complete version 1 audit and version 2 rejection lineage; and evaluated all 50 questions for guide alignment, determinism, answer uniqueness, distractor validity, evidence support, currency, and originality. The new `pde-v42-analyze-01` and `pde-v42-operate-01` replacements passed, but two other questions failed the acceptance gate. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-1-v3",
  "questionSetVersion": 3,
  "contentSha256": "293635f7eecfc298ca62132218502a09c0c8018401d0f26371d2f1fd62c47972",
  "reviewer": "opencode-gpt-5.6-sol-review-20260908-v3",
  "authors": [
    "gpt-5.6-sol-design-20260901",
    "gpt-5.6-sol-ingest-20260901",
    "gpt-5.6-terra-store-20260907",
    "gpt-5.6-sol-analyze-v3-20260908",
    "gpt-5.6-sol-operate-v3-20260908"
  ],
  "reviewedOn": "2026-09-08",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 88,
  "questionIds": [
    "pde-v42-design-01",
    "pde-v42-design-02",
    "pde-v42-design-03",
    "pde-v42-design-04",
    "pde-v42-design-05",
    "pde-v42-design-06",
    "pde-v42-design-07",
    "pde-v42-design-08",
    "pde-v42-design-09",
    "pde-v42-design-10",
    "pde-v42-design-11",
    "pde-v42-ingest-01",
    "pde-v42-ingest-02",
    "pde-v42-ingest-03",
    "pde-v42-ingest-04",
    "pde-v42-ingest-05",
    "pde-v42-ingest-06",
    "pde-v42-ingest-07",
    "pde-v42-ingest-08",
    "pde-v42-ingest-09",
    "pde-v42-ingest-10",
    "pde-v42-ingest-11",
    "pde-v42-ingest-12",
    "pde-v42-store-01",
    "pde-v42-store-02",
    "pde-v42-store-03",
    "pde-v42-store-04",
    "pde-v42-store-05",
    "pde-v42-store-06",
    "pde-v42-store-07",
    "pde-v42-store-08",
    "pde-v42-store-09",
    "pde-v42-store-10",
    "pde-v42-analyze-01",
    "pde-v42-analyze-02",
    "pde-v42-analyze-03",
    "pde-v42-analyze-04",
    "pde-v42-analyze-05",
    "pde-v42-analyze-06",
    "pde-v42-analyze-07",
    "pde-v42-analyze-08",
    "pde-v42-operate-01",
    "pde-v42-operate-02",
    "pde-v42-operate-03",
    "pde-v42-operate-04",
    "pde-v42-operate-05",
    "pde-v42-operate-06",
    "pde-v42-operate-07",
    "pde-v42-operate-08",
    "pde-v42-operate-09"
  ],
  "rejectedQuestions": [
    {
      "id": "pde-v42-design-03",
      "reason": "Choice d also satisfies the stated deterministic, reversible pseudonymization requirements: format-preserving encryption with a stable key and context preserves referential integrity and supports re-identification. The fact that format preservation is not required makes it unnecessary, not incorrect, so the question does not have exactly one valid answer."
    },
    {
      "id": "pde-v42-ingest-08",
      "reason": "The scenario and option structure substantially overlap the official hopping-window sample: both ask for a Dataflow rolling aggregation over a fixed duration at a shorter recurring period, key hopping windows, and contrast tumbling and session windows. Adding allowed lateness does not make the core window-selection decision original."
    }
  ]
}
```
