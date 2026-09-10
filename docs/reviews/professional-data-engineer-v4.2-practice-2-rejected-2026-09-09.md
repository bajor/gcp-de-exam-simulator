---
type: Review
title: Independent review rejection of professional-data-engineer-v4.2-practice-2
description: Semantic review rejecting two questions in candidate version 1.
status: Rejected
timestamp: 2026-09-09T00:00:00Z
---

# Independent Review Rejection of professional-data-engineer-v4.2-practice-2

## Review Summary

Reviewer `set2-final-reviewer` is independent of candidate authors `set2-design-author`, `set2-ingest-author`, `set2-store-author`, `set2-analyze-author`, and `set2-operate-author`, and did not edit candidate content. The reviewer re-fetched the Professional Data Engineer certification page, exam guide version 4.2, official sample form, and all 61 unique Google-owned evidence URLs; Google Cloud returned HTTP 429 after the initial successful source requests, preventing content retrieval for the remaining URLs. `make test` and `make verify-sources` passed before review. All 50 questions were evaluated for guide alignment, determinism, answer uniqueness, distractor validity, evidence support, current terminology, and originality. Two questions fail the required Set 1 non-overlap check. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-2",
  "questionSetVersion": 1,
  "contentSha256": "34c79bff8be02bbe24d9fa007afed804833b06673fafe453664338a5c67fbf03",
  "reviewer": "set2-final-reviewer",
  "authors": [
    "set2-design-author",
    "set2-ingest-author",
    "set2-store-author",
    "set2-analyze-author",
    "set2-operate-author"
  ],
  "reviewedOn": "2026-09-09",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 61,
  "questionIds": [
    "pde-v42-p2-design-01",
    "pde-v42-p2-design-02",
    "pde-v42-p2-design-03",
    "pde-v42-p2-design-04",
    "pde-v42-p2-design-05",
    "pde-v42-p2-design-06",
    "pde-v42-p2-design-07",
    "pde-v42-p2-design-08",
    "pde-v42-p2-design-09",
    "pde-v42-p2-design-10",
    "pde-v42-p2-design-11",
    "pde-v42-p2-ingest-01",
    "pde-v42-p2-ingest-02",
    "pde-v42-p2-ingest-03",
    "pde-v42-p2-ingest-04",
    "pde-v42-p2-ingest-05",
    "pde-v42-p2-ingest-06",
    "pde-v42-p2-ingest-07",
    "pde-v42-p2-ingest-08",
    "pde-v42-p2-ingest-09",
    "pde-v42-p2-ingest-10",
    "pde-v42-p2-ingest-11",
    "pde-v42-p2-ingest-12",
    "pde-v42-p2-store-01",
    "pde-v42-p2-store-02",
    "pde-v42-p2-store-03",
    "pde-v42-p2-store-04",
    "pde-v42-p2-store-05",
    "pde-v42-p2-store-06",
    "pde-v42-p2-store-07",
    "pde-v42-p2-store-08",
    "pde-v42-p2-store-09",
    "pde-v42-p2-store-10",
    "pde-v42-p2-analyze-01",
    "pde-v42-p2-analyze-02",
    "pde-v42-p2-analyze-03",
    "pde-v42-p2-analyze-04",
    "pde-v42-p2-analyze-05",
    "pde-v42-p2-analyze-06",
    "pde-v42-p2-analyze-07",
    "pde-v42-p2-analyze-08",
    "pde-v42-p2-operate-01",
    "pde-v42-p2-operate-02",
    "pde-v42-p2-operate-03",
    "pde-v42-p2-operate-04",
    "pde-v42-p2-operate-05",
    "pde-v42-p2-operate-06",
    "pde-v42-p2-operate-07",
    "pde-v42-p2-operate-08",
    "pde-v42-p2-operate-09"
  ],
  "rejectedQuestions": [
    {
      "id": "pde-v42-p2-design-09",
      "reason": "Substantially duplicates active Set 1 question pde-v42-store-10: BigQuery queries a Spark-managed Iceberg table in customer-owned Cloud Storage while the external platform retains write and maintenance ownership. This fails the required non-overlap check."
    },
    {
      "id": "pde-v42-p2-ingest-07",
      "reason": "Substantially duplicates active Set 1 question pde-v42-ingest-08: one-hour event-time windows, five-minute cumulative early panes, two hours of late updates, and accumulating panes. This fails the required originality and non-overlap check."
    }
  ]
}
```
