import {
  candidateQuestionSets as practiceExamOneCandidateQuestionSets,
} from "./candidates";
import { draftQuestionSets as practiceExamOneDraftQuestionSets } from "./drafts";
import { practiceExamTwoCandidateQuestionSets } from "./practice2/candidates";
import { practiceExamTwoDraftQuestionSets } from "./practice2/drafts";
import { practiceExamThreeCandidateQuestionSets } from "./practice3/candidates";
import { practiceExamThreeDraftQuestionSets } from "./practice3/drafts";

export const draftQuestionSets = [
  ...practiceExamOneDraftQuestionSets,
  ...practiceExamTwoDraftQuestionSets,
  ...practiceExamThreeDraftQuestionSets,
] as const;

export const candidateQuestionSets = [
  ...practiceExamOneCandidateQuestionSets,
  ...practiceExamTwoCandidateQuestionSets,
  ...practiceExamThreeCandidateQuestionSets,
] as const;
