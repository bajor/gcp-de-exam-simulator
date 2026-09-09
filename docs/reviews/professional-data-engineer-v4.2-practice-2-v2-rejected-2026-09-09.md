---
type: Review
title: Independent review rejection of professional-data-engineer-v4.2-practice-2-v2
description: Semantic review rejecting one question in candidate version 2.
status: Rejected
timestamp: 2026-09-09T00:00:00Z
---

# Independent Review Rejection of professional-data-engineer-v4.2-practice-2-v2

## Review Summary

Reviewer `set2-v2-final-reviewer` is independent of candidate authors `set2-design-correction-author`, `set2-ingest-correction-author`, `set2-store-author`, `set2-analyze-author`, and `set2-operate-author`, and did not edit candidate content. The reviewer re-fetched the Professional Data Engineer certification page and exam guide version 4.2, independently evaluated all 50 questions and their choices against guide alignment, deterministic selection, evidence support, current terminology, originality and non-overlap with Sets 1 and 2 version 1, and independently fetched all 63 unique Google-owned evidence URLs. `make test` and `make verify-sources` passed before review. One question failed the deterministic selection and evidence-support checks. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-2-v2",
  "questionSetVersion": 2,
  "contentSha256": "f9e32190ef2f6673c5b2758810c261261cb84381e8a1bce45a76e092e8ca5a1e",
  "reviewer": "set2-v2-final-reviewer",
  "authors": [
    "set2-design-correction-author",
    "set2-ingest-correction-author",
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
      "id": "pde-v42-p2-ingest-01",
      "reason": "The cited Storage Write API documentation assigns immediate visibility plus offset-based exactly-once retry detection to a committed stream, not the default stream. The keyed default-stream choice is unsupported, while the committed-stream choice omits the required offsets; therefore no answer satisfies every stated requirement."
    }
  ]
}
```
