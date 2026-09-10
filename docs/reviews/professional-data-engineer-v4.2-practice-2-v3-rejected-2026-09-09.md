---
type: Review
title: Independent review rejection of professional-data-engineer-v4.2-practice-2-v3
description: Semantic review rejecting two questions in candidate version 3.
status: Rejected
timestamp: 2026-09-09T00:00:00Z
---

# Independent Review Rejection of professional-data-engineer-v4.2-practice-2-v3

## Review Summary

Reviewer `set2-v3-final-reviewer` is independent of candidate authors `set2-design-correction-author`, `set2-ingest-v3-correction-author`, `set2-store-author`, `set2-analyze-author`, and `set2-operate-author`, and did not edit candidate content. The reviewer re-fetched the Professional Data Engineer certification page and exam guide version 4.2, independently fetched all 63 unique Google-owned evidence URLs, compared all 50 questions with active Set 1 and both rejected Set 2 candidates, and evaluated objective alignment, deterministic selection, selection cardinality, documented distractor failures, evidence support, current GA terminology, and originality. `make test` and `make verify-sources` passed before review. Two questions fail the required Set 1 non-overlap check. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-2-v3",
  "questionSetVersion": 3,
  "contentSha256": "94cc3f22abe38b08fb042a19a81ab58d41e4a852d4f146dc1d33dec0eed207dc",
  "reviewer": "set2-v3-final-reviewer",
  "authors": [
    "set2-design-correction-author",
    "set2-ingest-v3-correction-author",
    "set2-store-author",
    "set2-analyze-author",
    "set2-operate-author"
  ],
  "reviewedOn": "2026-09-09",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 63,
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
      "id": "pde-v42-p2-store-06",
      "reason": "Substantially duplicates active Set 1 question pde-v42-store-08: both require choosing between a repeated nested BigQuery child relation and a separate normalized child table based on whether the child is queried and maintained independently. Reversing the access constraints and answer does not create a distinct decision; this fails the required Set 1 non-overlap check."
    },
    {
      "id": "pde-v42-p2-store-07",
      "reason": "Substantially duplicates active Set 1 question pde-v42-store-07: both require BigQuery partitioning on the dominant contiguous range predicate and clustering on the exact secondary predicate to prune partitions and storage blocks. Replacing event-date and merchant_id with integer claim_number and adjuster_id does not create a distinct decision; this fails the required Set 1 non-overlap check."
    }
  ]
}
```
