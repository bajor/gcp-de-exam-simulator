import type { DraftQuestionSet } from "../../../domain/questions";
import {
  practiceExamTwoV1Sections,
  practiceExamTwoV2Sections,
  practiceExamTwoV3Sections,
  practiceExamTwoV4Sections,
} from "./sections";

export const practiceExamTwoV1Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-2",
  version: 1,
  title: "Professional Data Engineer Practice Exam 2",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceExamTwoV1Sections,
};

export const practiceExamTwoV2Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-2-v2",
  version: 2,
  title: "Professional Data Engineer Practice Exam 2",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceExamTwoV2Sections,
};

export const practiceExamTwoV3Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-2-v3",
  version: 3,
  title: "Professional Data Engineer Practice Exam 2",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceExamTwoV3Sections,
};
export const practiceExamTwoV4Draft: DraftQuestionSet = { id: "professional-data-engineer-v4.2-practice-2-v4", version: 4, title: "Professional Data Engineer Practice Exam 2", guideVersion: "4.2", durationMinutes: 120, sections: practiceExamTwoV4Sections };

export const practiceExamTwoDraftQuestionSets: readonly DraftQuestionSet[] = [
  practiceExamTwoV1Draft,
  practiceExamTwoV2Draft,
  practiceExamTwoV3Draft,
  practiceExamTwoV4Draft,
];
