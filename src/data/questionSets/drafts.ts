import type { DraftQuestionSet } from "../../domain/questions";
import {
  practiceV1Sections,
  practiceV2Sections,
  practiceV3Sections,
  practiceV4Sections,
  practiceV5Sections,
  practiceV6Sections,
} from "./sections";

export const practiceV1Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-1",
  version: 1,
  title: "Professional Data Engineer Practice Exam 1",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceV1Sections,
};

export const practiceV2Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-1-v2",
  version: 2,
  title: "Professional Data Engineer Practice Exam 1",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceV2Sections,
};

export const practiceV3Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-1-v3",
  version: 3,
  title: "Professional Data Engineer Practice Exam 1",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceV3Sections,
};

export const practiceV4Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-1-v4",
  version: 4,
  title: "Professional Data Engineer Practice Exam 1",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceV4Sections,
};

export const practiceV5Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-1-v5",
  version: 5,
  title: "Professional Data Engineer Practice Exam 1",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceV5Sections,
};

export const practiceV6Draft: DraftQuestionSet = {
  id: "professional-data-engineer-v4.2-practice-1-v6",
  version: 6,
  title: "Professional Data Engineer Practice Exam 1",
  guideVersion: "4.2",
  durationMinutes: 120,
  sections: practiceV6Sections,
};

export const draftQuestionSets: readonly DraftQuestionSet[] = [
  practiceV1Draft,
  practiceV2Draft,
  practiceV3Draft,
  practiceV4Draft,
  practiceV5Draft,
  practiceV6Draft,
];
