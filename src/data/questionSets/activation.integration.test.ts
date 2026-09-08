import { expect, it } from "vitest";
import { buildReviewDocument, buildValidDraft, buildValidReviewRecord } from "../../test/questionSetFactory";
import {
  activateQuestionSet,
  assembleCandidateQuestionSets,
  questionSetContentSha256,
} from "../../domain/questions";
import { candidateQuestionSets } from "./candidates";

it("assembles and activates a registered draft with its matching review", () => {
  const questionSet = assembleCandidateQuestionSets([buildValidDraft()], ["valid-set"])[0];
  const document = buildReviewDocument(buildValidReviewRecord(questionSet));
  expect(activateQuestionSet(questionSet, document)).toBe(questionSet);
});

it("keeps the accepted first practice exam content immutable", () => {
  const questionSet = candidateQuestionSets.find(
    (candidate) => candidate.id === "professional-data-engineer-v4.2-practice-1-v6",
  );
  expect(questionSet && questionSetContentSha256(questionSet)).toBe(
    "dcda3df67f3a2c70bc824a4c83f9ffa1444c7052606bbfa9ccaa5a66b42aefb6",
  );
});
