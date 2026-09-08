import { assembleCandidateQuestionSets } from "../../domain/questions";
import { draftQuestionSets } from "./drafts";

const candidateQuestionSetIds: readonly string[] = [
  "professional-data-engineer-v4.2-practice-1",
  "professional-data-engineer-v4.2-practice-1-v2",
  "professional-data-engineer-v4.2-practice-1-v3",
  "professional-data-engineer-v4.2-practice-1-v4",
  "professional-data-engineer-v4.2-practice-1-v5",
];
export const candidateQuestionSets = assembleCandidateQuestionSets(
  draftQuestionSets,
  candidateQuestionSetIds,
);
