import {
  candidateQuestionSets as practiceExamOneCandidateQuestionSets,
} from "./candidates";
import { draftQuestionSets as practiceExamOneDraftQuestionSets } from "./drafts";
import { practiceExamTwoCandidateQuestionSets } from "./practice2/candidates";
import { practiceExamTwoDraftQuestionSets } from "./practice2/drafts";

export const draftQuestionSets = [
  ...practiceExamOneDraftQuestionSets,
  ...practiceExamTwoDraftQuestionSets,
] as const;

export const candidateQuestionSets = [
  ...practiceExamOneCandidateQuestionSets,
  ...practiceExamTwoCandidateQuestionSets,
] as const;
