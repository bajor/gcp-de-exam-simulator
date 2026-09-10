import { assembleCandidateQuestionSets } from "../../../domain/questions";
import { practiceExamTwoDraftQuestionSets } from "./drafts";

const practiceExamTwoCandidateQuestionSetIds: readonly string[] = [
  "professional-data-engineer-v4.2-practice-2",
  "professional-data-engineer-v4.2-practice-2-v2",
  "professional-data-engineer-v4.2-practice-2-v3",
  "professional-data-engineer-v4.2-practice-2-v4",
];

export const practiceExamTwoCandidateQuestionSets = assembleCandidateQuestionSets(
  practiceExamTwoDraftQuestionSets,
  practiceExamTwoCandidateQuestionSetIds,
);
