import { assembleCandidateQuestionSets } from "../../../domain/questions";
import { practiceExamThreeDraftQuestionSets } from "./drafts";

export const practiceExamThreeCandidateQuestionSets = assembleCandidateQuestionSets(
  practiceExamThreeDraftQuestionSets,
  ["professional-data-engineer-v4.2-practice-3", "professional-data-engineer-v4.2-practice-3-v2", "professional-data-engineer-v4.2-practice-3-v3", "professional-data-engineer-v4.2-practice-3-v4"],
);
