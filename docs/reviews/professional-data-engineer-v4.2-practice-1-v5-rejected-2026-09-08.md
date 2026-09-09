---
type: Review
title: Final audit rejection of professional-data-engineer-v4.2-practice-1-v5
description: Later independent source audit rejecting one question in candidate version 5.
status: Rejected
timestamp: 2026-09-08T00:00:00Z
---

# Final Audit Rejection of professional-data-engineer-v4.2-practice-1-v5

## Review Summary

Reviewer `opencode-gpt-5.6-sol-final-audit-20260908-v5` is independent of candidate authors `gpt-5.6-sol-design-v5-20260908`, `gpt-5.6-sol-ingest-v4-20260908`, `gpt-5.6-terra-store-20260907`, `gpt-5.6-sol-analyze-v3-20260908`, and `gpt-5.6-sol-operate-v3-20260908`, and did not edit candidate content. The reviewer ran `make test` and `make verify-sources`, inspected the complete diff through commit `ebec61780ced6e15209cccb477f86245be118d5b`, and independently checked the decisive cited source. One question failed the Google-owned evidence-support requirement. This later audit reverses the earlier acceptance decision while retaining that acceptance record as historical evidence. The generated record below is the authoritative rejection list.

## Rejection Record

```json
{
  "questionSetId": "professional-data-engineer-v4.2-practice-1-v5",
  "questionSetVersion": 5,
  "contentSha256": "8eca023a7062aed6ebb206686373b7f695dd474fa5bfd5102b46cb56c09df432",
  "reviewer": "opencode-gpt-5.6-sol-final-audit-20260908-v5",
  "authors": [
    "gpt-5.6-sol-design-v5-20260908",
    "gpt-5.6-sol-ingest-v4-20260908",
    "gpt-5.6-terra-store-20260907",
    "gpt-5.6-sol-analyze-v3-20260908",
    "gpt-5.6-sol-operate-v3-20260908"
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
      "id": "pde-v42-ingest-08",
      "reason": "The sole cited Google-owned Dataflow page documents event-time windows, watermarks, triggers, and links externally for late-data details, but it does not document accumulating versus discarding panes or that allowed lateness retains state for cumulative late corrections. Those unsupported semantics determine why choice a is correct and choice c is incorrect, so the question fails the repository requirement that every answer and distractor explanation be supported by current Google-owned documentation."
    }
  ]
}
```
