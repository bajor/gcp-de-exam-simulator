import type { DraftQuestionSet } from "../../../domain/questions";
import { practiceExamThreeSections, practiceExamThreeV2Sections, practiceExamThreeV3Sections, practiceExamThreeV4Sections } from "./sections";

export const practiceExamThreeDraft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-3",
  version: 1,
  title: "Professional Data Engineer Practice Exam 3",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceExamThreeSections,
};

export const practiceExamThreeV2Draft: DraftQuestionSet = { ...practiceExamThreeDraft, id: "professional-data-engineer-v4.2-practice-3-v2", version: 2, sections: practiceExamThreeV2Sections };
export const practiceExamThreeV3Draft: DraftQuestionSet = { ...practiceExamThreeDraft, id: "professional-data-engineer-v4.2-practice-3-v3", version: 3, sections: practiceExamThreeV3Sections };
export const practiceExamThreeV4Draft: DraftQuestionSet = { ...practiceExamThreeDraft, id: "professional-data-engineer-v4.2-practice-3-v4", version: 4, sections: practiceExamThreeV4Sections };
export const practiceExamThreeDraftQuestionSets = [practiceExamThreeDraft, practiceExamThreeV2Draft, practiceExamThreeV3Draft, practiceExamThreeV4Draft] as const;
