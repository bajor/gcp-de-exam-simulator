import type { QuestionSet } from "./questions";

export type ExamCatalogEntry = AvailableExam | ComingSoonExam;

export interface AvailableExam {
  readonly availability: "available";
  readonly questionSet: QuestionSet;
}

export interface ComingSoonExam {
  readonly availability: "coming-soon";
  readonly id: string;
  readonly title: string;
}
