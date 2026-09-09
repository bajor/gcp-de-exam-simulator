import { expect, it } from "vitest";
import { draftQuestionSets } from "../src/data/questionSets/drafts";
import { candidateQuestionSets } from "../src/data/questionSets/candidates";
import { examCatalog } from "../src/data/questionSets";
import {
  parseRejectionRecord,
  parseReviewRecord,
  questionSetContentSha256,
  validateDraftQuestionSets,
  validateQuestionSets,
  validateRejectionRecord,
  validateRejectionRecordFormat,
  validateReviewRecord,
} from "../src/domain/questions";
import { collectEvidenceUrls, findSourceFailures } from "./source-verification";

const rejectionDocuments = import.meta.glob("../docs/reviews/*-rejected-*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
const reviewDocuments = import.meta.glob("../docs/reviews/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

it("structurally validates draft and candidate question sets", () => {
  expect(validateDraftQuestionSets(draftQuestionSets)).toEqual([]);
  expect(validateQuestionSets(candidateQuestionSets)).toEqual([]);
});

it("fetches every draft and candidate evidence URL", async () => {
  const failures = await findSourceFailures(
    collectEvidenceUrls(draftQuestionSets, candidateQuestionSets),
    (url) => fetch(url, { redirect: "follow" }),
  );
  expect(failures).toEqual([]);
});

it("validates every rejection report's machine-readable record", () => {
  for (const [path, document] of Object.entries(rejectionDocuments)) {
    const record = parseRejectionRecord(document);
    expect(validateRejectionRecordFormat(record), path).toEqual([]);
    const candidate = candidateQuestionSets.find((set) =>
      set.id === record.questionSetId && set.version === record.questionSetVersion
    );
    expect(candidate, `${path}: rejection report has no matching registered candidate.`).toBeDefined();
    if (!candidate) continue;
    expect(validateRejectionRecord(candidate, record), path).toEqual([]);
  }
});

it("validates every acceptance record against its registered candidate", () => {
  const acceptances = Object.entries(reviewDocuments).filter(([path]) =>
    path !== "../docs/reviews/index.md" && !path.includes("-rejected-")
  );
  expect(acceptances.length).toBeGreaterThan(0);
  for (const [path, document] of acceptances) {
    const record = parseReviewRecord(document);
    const candidate = candidateQuestionSets.find((set) =>
      set.id === record.questionSetId && set.version === record.questionSetVersion
    );
    expect(candidate, `${path}: acceptance record has no matching registered candidate.`).toBeDefined();
    if (!candidate) continue;
    expect(path).toBe(`../docs/reviews/${candidate.id}.md`);
    expect(validateReviewRecord(candidate, record), path).toEqual([]);
  }
});

it("requires an accepted audit for every available catalog entry", () => {
  for (const entry of examCatalog) {
    if (entry.availability !== "available") continue;
    const path = `../docs/reviews/${entry.questionSet.id}.md`;
    const document = reviewDocuments[path];
    expect(document, `${path}: available set requires an accepted audit.`).toBeDefined();
    if (!document) continue;
    expect(validateReviewRecord(entry.questionSet, parseReviewRecord(document)), path).toEqual([]);
    const digest = questionSetContentSha256(entry.questionSet);
    const rejectionPath = Object.entries(rejectionDocuments).find(([, rejectionDocument]) => {
      const rejection = parseRejectionRecord(rejectionDocument);
      return rejection.questionSetId === entry.questionSet.id &&
        rejection.questionSetVersion === entry.questionSet.version &&
        rejection.contentSha256 === digest;
    })?.[0];
    expect(rejectionPath, `${path}: available set has a matching rejection.`).toBeUndefined();
  }
});
