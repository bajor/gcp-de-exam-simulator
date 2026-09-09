---
type: Context
title: Project Glossary
description: Canonical definitions for the practice exam domain and project modules.
status: Accepted
timestamp: 2026-08-31T00:00:00Z
---

# Project Glossary

## ADR

Architecture Decision Record. An append-only record of a structural or implementation decision and its rejected alternatives.

## AI

Artificial Intelligence. Software capabilities that perform tasks commonly associated with human reasoning or content understanding.

## API

Application Programming Interface. A defined interface through which software components communicate.

## Attempt

The local state of one candidate working through one question set, including answers, review flags, position, and deadline.

An attempt is compatible with the application only when its schema version, question-set identifier and version, answer identifiers, timestamps, and status pass runtime validation.

## BDR

Behavior Decision Record. An append-only specification of observable behavior and how that behavior is tested.

## Choice feedback

The explanation attached to one answer choice. It states why that choice does or does not satisfy the scenario and references the source-evidence identifiers that support the explanation.

## Candidate question set

A complete question set listed for structural, source, and independent semantic checks before it can enter the runtime catalog.

## Draft question set

The partial manifest used while independently mergeable question sections are being authored. A draft may omit sections, but every registered section must already contain its final required question count and pass structural and live-source checks.

## COI

Conflict of Interest. A source relationship that could influence a claim; project research flags vendor-owned statements with this marker.

## Exam guide

Google's official Professional Data Engineer certification exam guide. Question coverage uses version 4.2 until a later version is explicitly researched and adopted.

## Exam catalog

The compiled list of practice-exam entries shown to the candidate. An available entry contains one complete question set; a coming-soon entry contains metadata but cannot contain questions or create an attempt.

## Multiple-select

A question that states the required number of choices and is correct only when the selected identifier set exactly equals the correct identifier set.

## PDF

Portable Document Format. The file format used by the official exam guide.

## PRD

Product Requirements Document. An append-only specification of the user problem, product outcomes, requirements, and acceptance criteria.

## Question bank

All question sets present in the repository, including candidates that are not available in the runtime catalog.

## Question set

An immutable, versioned collection of exactly 50 original practice questions with a declared exam-guide version. The exam catalog can offer multiple available question sets.

## Question section

All questions assigned to one exam-guide section within a draft question set. A registered section is authored as one typed module and contains exactly 11 `design`, 12 `ingest`, 10 `store`, 8 `analyze`, or 9 `operate` questions.

## Rejection record

The machine-readable JSON block in an indexed rejected review report. It binds rejected question identifiers and concrete reasons to all 50 reviewed identifiers, the exact candidate version and SHA-256 content digest, reviewer, authors, review date, and source-check result. Rejection records are immutable content-audit history, not runtime application inputs.

## Review record

The independently authored document under `docs/reviews/` that records a successful semantic audit. Its JSON record identifies the exact question-set version and SHA-256 content digest, reviewer, distinct authors, review date, successful source-check command, unique source count, and every accepted question identifier. Review records remain CI-verifiable audit artifacts but are not runtime application inputs.

## Source evidence

A Google-owned documentation URL, document title, and supported claim used to justify choice feedback. Each question's `verifiedOn` date is the authoritative date on which all evidence attached to that question was re-fetched and checked.

## UI

User Interface. The visible and interactive controls through which a candidate takes and reviews an attempt.

## URL

Uniform Resource Locator. The web address used for the deployed application or cited documentation.
