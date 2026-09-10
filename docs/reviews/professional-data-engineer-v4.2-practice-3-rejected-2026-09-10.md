---
type: Review
title: Independent review rejection of professional-data-engineer-v4.2-practice-3
description: Semantic review rejecting two questions in candidate version 1.
status: Rejected
timestamp: 2026-09-10T00:00:00Z
---

# Independent Review Rejection of professional-data-engineer-v4.2-practice-3

## Review Summary

Reviewer `set3-v1-final-reviewer` is independent of candidate authors `set3-design-author`, `set3-ingest-author`, `set3-store-author`, `set3-analyze-author`, and `set3-operate-author`, and did not edit candidate content. The reviewer re-fetched the Professional Data Engineer certification page and exam guide version 4.2, official sample material, and all 49 unique Google-owned evidence URLs. The reviewer evaluated all 50 questions for guide-objective alignment, deterministic selection, selection cardinality, documented distractor failures, evidence support, current GA terminology, originality, and decisive non-overlap with Practice Exams 1 and 2. `make test` and `make verify-sources` passed before review. Two questions fail the required checks. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-3",
  "questionSetVersion": 1,
  "contentSha256": "0b9b70e204166af35d72620da32dc9e4606469836bef689757dcf35bfdc96aa1",
  "reviewer": "set3-v1-final-reviewer",
  "authors": [
    "set3-design-author",
    "set3-ingest-author",
    "set3-store-author",
    "set3-analyze-author",
    "set3-operate-author"
  ],
  "reviewedOn": "2026-09-10",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 49,
  "questionIds": [
    "pde-v42-p3-design-01",
    "pde-v42-p3-design-02",
    "pde-v42-p3-design-03",
    "pde-v42-p3-design-04",
    "pde-v42-p3-design-05",
    "pde-v42-p3-design-06",
    "pde-v42-p3-design-07",
    "pde-v42-p3-design-08",
    "pde-v42-p3-design-09",
    "pde-v42-p3-design-10",
    "pde-v42-p3-design-11",
    "pde-v42-p3-ingest-01",
    "pde-v42-p3-ingest-02",
    "pde-v42-p3-ingest-03",
    "pde-v42-p3-ingest-04",
    "pde-v42-p3-ingest-05",
    "pde-v42-p3-ingest-06",
    "pde-v42-p3-ingest-07",
    "pde-v42-p3-ingest-08",
    "pde-v42-p3-ingest-09",
    "pde-v42-p3-ingest-10",
    "pde-v42-p3-ingest-11",
    "pde-v42-p3-ingest-12",
    "pde-v42-p3-store-01",
    "pde-v42-p3-store-02",
    "pde-v42-p3-store-03",
    "pde-v42-p3-store-04",
    "pde-v42-p3-store-05",
    "pde-v42-p3-store-06",
    "pde-v42-p3-store-07",
    "pde-v42-p3-store-08",
    "pde-v42-p3-store-09",
    "pde-v42-p3-store-10",
    "pde-v42-p3-analyze-01",
    "pde-v42-p3-analyze-02",
    "pde-v42-p3-analyze-03",
    "pde-v42-p3-analyze-04",
    "pde-v42-p3-analyze-05",
    "pde-v42-p3-analyze-06",
    "pde-v42-p3-analyze-07",
    "pde-v42-p3-analyze-08",
    "pde-v42-p3-operate-01",
    "pde-v42-p3-operate-02",
    "pde-v42-p3-operate-03",
    "pde-v42-p3-operate-04",
    "pde-v42-p3-operate-05",
    "pde-v42-p3-operate-06",
    "pde-v42-p3-operate-07",
    "pde-v42-p3-operate-08",
    "pde-v42-p3-operate-09"
  ],
  "rejectedQuestions": [
    {
      "id": "pde-v42-p3-store-06",
      "reason": "The answer key incorrectly selects an intersection garbage-collection policy. Intersection retains every version younger than 30 days even when more than five exist, so it cannot satisfy only the five newest versions; the documented union policy, together with matching read filters, is required. Choice c is incorrectly rejected."
    },
    {
      "id": "pde-v42-p3-store-07",
      "reason": "The stated objective is planning storage costs and performance, but the scenario and answer test Bigtable multi-zone availability and automatic failover. That decision belongs to the guide reliability and failover objective, is already tested by pde-v42-p3-operate-08, and therefore does not satisfy the required objective alignment or original coverage."
    }
  ]
}
```
