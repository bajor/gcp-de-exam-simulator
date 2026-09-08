---
type: Review
title: Quality audit rejection of professional-data-engineer-v4.2-practice-1
description: Post-activation semantic audit rejecting 11 questions in candidate version 1.
status: Rejected
timestamp: 2026-09-08T00:00:00Z
---

# Quality Audit Rejection of professional-data-engineer-v4.2-practice-1

## Review Summary

Reviewer `reviewer-quality-audit-20260908` is independent of all five candidate authors. The reviewer ran `make test` and `make verify-sources`, checked Professional Data Engineer exam guide version 4.2, compared the recent questions with official sample material, and independently re-checked the cited Google documentation. Eleven questions failed originality, determinism, currency, or professional-difficulty requirements. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-1",
  "questionSetVersion": 1,
  "contentSha256": "d12b12a89e7a7ae6748f313b22ea24b27a68f18e4507a685d5c712bd26412d1a",
  "reviewer": "reviewer-quality-audit-20260908",
  "authors": [
    "gpt-5.6-sol-design-20260901",
    "gpt-5.6-sol-ingest-20260901",
    "gpt-5.6-terra-store-20260907",
    "gpt-5.6-terra-analyze-20260907",
    "gpt-5.6-terra-operate-20260907"
  ],
  "reviewedOn": "2026-09-08",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 84,
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
      "reason": "The materialized-view scenario and option structure substantially overlap official sample content and must be replaced with an original decision scenario."
    },
    {
      "id": "pde-v42-analyze-02",
      "reason": "The prompt does not identify the BigQuery query billing project in which the regional BI Engine reservation must be created."
    },
    {
      "id": "pde-v42-analyze-03",
      "reason": "The answer does not define a business time zone or bounds that exclude the current partial day, so it does not guarantee seven complete calendar days."
    },
    {
      "id": "pde-v42-analyze-08",
      "reason": "The no-copy self-service Analytics Hub scenario substantially overlaps official sample content and does not distinguish listing access revocation from existing subscription revocation."
    },
    {
      "id": "pde-v42-operate-01",
      "reason": "The choices reduce the item to direct COST_OPTIMIZED parameter recall rather than a professional architecture tradeoff."
    },
    {
      "id": "pde-v42-operate-02",
      "reason": "The keyed design does not prevent idle-slot sharing, and another choice can defensibly isolate the dashboard by leaving research on on-demand pricing."
    },
    {
      "id": "pde-v42-operate-03",
      "reason": "The distractors are plainly manual or use execution-time dates, reducing the item to direct @run_date recall rather than orchestration judgment."
    },
    {
      "id": "pde-v42-operate-04",
      "reason": "Batch query priority does not guarantee the prompt requirement that execution begin within 24 hours."
    },
    {
      "id": "pde-v42-operate-05",
      "reason": "The choices use inaccurate maximum autoscale capacity terminology instead of maximum reservation size, making the possible total capacity ambiguous."
    },
    {
      "id": "pde-v42-operate-07",
      "reason": "Pub/Sub budget notifications are periodic status updates rather than notifications emitted only when the forecast threshold is reached."
    },
    {
      "id": "pde-v42-operate-09",
      "reason": "The scenario and distractors restate Cloud SQL high availability properties too directly and do not test professional tradeoff judgment."
    }
  ]
}
```
