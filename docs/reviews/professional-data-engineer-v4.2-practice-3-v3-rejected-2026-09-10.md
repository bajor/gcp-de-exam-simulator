---
type: Review
title: Independent review rejection of professional-data-engineer-v4.2-practice-3-v3
description: Semantic review rejecting two questions in candidate version 3.
status: Rejected
timestamp: 2026-09-10T00:00:00Z
---

# Independent Review Rejection of professional-data-engineer-v4.2-practice-3-v3

## Review Summary

Reviewer `set3-v3-final-reviewer` is independent of candidate authors `set3-design-author`, `set3-v3-correction-author`, `set3-analyze-author`, and `set3-operate-author`, and did not edit candidate content. The reviewer re-fetched the Professional Data Engineer certification page and exam guide version 4.2, and independently opened all 50 unique Google-owned evidence URLs. The reviewer evaluated all 50 questions for guide-objective alignment, deterministic selection, selection cardinality, documented distractor failures, evidence support, current GA terminology, originality, and non-overlap with accepted Practice Exams 1 v6 and 2 v4. `make test` and `make verify-sources` passed before review. Two questions fail the originality and non-overlap requirement. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-3-v3",
  "questionSetVersion": 3,
  "contentSha256": "47a571f166f0565b58c006261cc6ab2d3da0cdf771e04c28a37fc65fac34290a",
  "reviewer": "set3-v3-final-reviewer",
  "authors": [
    "set3-design-author",
    "set3-v3-correction-author",
    "set3-analyze-author",
    "set3-operate-author"
  ],
  "reviewedOn": "2026-09-10",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 50,
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
      "id": "pde-v42-p3-design-04",
      "reason": "This repeats the accepted Practice Exam 1 v6 Bucket Lock scenario substantively: both require a seven-year Cloud Storage retention policy for current and future objects that no administrator can reduce or remove. The same configuration is the only answer, so it is not original coverage."
    },
    {
      "id": "pde-v42-p3-ingest-03",
      "reason": "This repeats the accepted Practice Exam 2 v4 dead-letter-topic scenario substantively: both require a subscription-level dead-letter policy so malformed messages do not block valid delivery and can be separately investigated and later reprocessed. Adding an approximate ten-delivery setting does not create distinct coverage."
    }
  ]
}
```
