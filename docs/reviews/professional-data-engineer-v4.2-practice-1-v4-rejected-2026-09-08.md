---
type: Review
title: Independent review rejection of professional-data-engineer-v4.2-practice-1-v4
description: Semantic and source review rejecting one question in candidate version 4.
status: Rejected
timestamp: 2026-09-08T00:00:00Z
---

# Independent Review Rejection of professional-data-engineer-v4.2-practice-1-v4

## Review Summary

Reviewer `opencode-gpt-5.6-sol-review-20260908-v4-independent` is independent of candidate authors `gpt-5.6-sol-design-v4-20260908`, `gpt-5.6-sol-ingest-v4-20260908`, `gpt-5.6-terra-store-20260907`, `gpt-5.6-sol-analyze-v3-20260908`, and `gpt-5.6-sol-operate-v3-20260908`, and did not edit candidate content. The reviewer re-fetched the Professional Data Engineer certification page, exam guide version 4.2, and all 26 official sample questions; ran `make test` and `make verify-sources`; independently evaluated all 88 unique Google-owned evidence URLs; inspected the complete version 1 audit and version 2 and version 3 rejection lineage; and evaluated all 50 questions for guide alignment, determinism, answer uniqueness, distractor validity, evidence support, currency, and originality. Both version 4 replacements passed, but one retained question failed the originality gate. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-1-v4",
  "questionSetVersion": 4,
  "contentSha256": "2856ef6f175957230e2122e40b0569e5cc30e49265a7d8f67629091106d1fc16",
  "reviewer": "opencode-gpt-5.6-sol-review-20260908-v4-independent",
  "authors": [
    "gpt-5.6-sol-design-v4-20260908",
    "gpt-5.6-sol-ingest-v4-20260908",
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
      "id": "pde-v42-design-10",
      "reason": "The scenario substantially reconstructs an official sample question: both ask for continuous low-latency replication from an operational database into BigQuery with minimal infrastructure management, and both key Datastream as the managed direct-replication answer. Changing the source from Oracle to MySQL, adding historical backfill details, and replacing the distractors does not create an independent architecture decision."
    }
  ]
}
```
