---
type: Review
title: Independent review rejection of professional-data-engineer-v4.2-practice-1-v2
description: Semantic and source review rejecting two questions in candidate version 2.
status: Rejected
timestamp: 2026-09-08T00:00:00Z
---

# Independent Review Rejection of professional-data-engineer-v4.2-practice-1-v2

## Review Summary

Reviewer `opencode-gpt-5.6-sol-review-20260908-v2` is independent of all five candidate authors and did not edit candidate content. The reviewer re-fetched the Professional Data Engineer certification page, exam guide version 4.2, and official sample questions; ran `make test` and `make verify-sources`; independently opened all 87 unique Google-owned evidence URLs; and evaluated all 50 questions for guide alignment, determinism, answer uniqueness, distractor validity, evidence support, currency, and originality. Two questions failed the acceptance gate. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-1-v2",
  "questionSetVersion": 2,
  "contentSha256": "ba0709ba3d6cb25b8041860e89ef28cbfc8c5a0d55bf4dd7144ad9d585c43376",
  "reviewer": "opencode-gpt-5.6-sol-review-20260908-v2",
  "authors": [
    "gpt-5.6-sol-design-20260901",
    "gpt-5.6-sol-ingest-20260901",
    "gpt-5.6-terra-store-20260907",
    "gpt-5.6-sol-analyze-v2-20260908",
    "gpt-5.6-sol-operate-v2-20260908"
  ],
  "reviewedOn": "2026-09-08",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 87,
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
      "id": "pde-v42-analyze-01",
      "reason": "The replacement still substantially reconstructs official sample questions 22 and 23: a repeatedly queried BigQuery aggregation over appended large-table data needs fresh, faster results, and the keyed choice is a materialized view while logical or scheduled alternatives are distractors. Changing the business domain and adding automatic query rewrite does not create an independent decision scenario."
    },
    {
      "id": "pde-v42-operate-01",
      "reason": "The replacement retains the previously rejected direct parameter-recall structure: the prompt explicitly supplies every documented FlexRS eligibility condition and states that cost outranks completion time, while the choices ask only for COST_OPTIMIZED versus SPEED_OPTIMIZED or unsupported FlexRS combinations. The added no-rewrite wording does not introduce a professional architecture tradeoff."
    }
  ]
}
```
