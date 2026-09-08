import { assembleCandidateQuestionSets } from "../../domain/questions";
import { draftQuestionSets } from "./drafts";

const candidateQuestionSetIds: readonly string[] = ["professional-data-engineer-v4.2-practice-1"];
export const candidateQuestionSets = assembleCandidateQuestionSets(
  draftQuestionSets,
  candidateQuestionSetIds,
);
