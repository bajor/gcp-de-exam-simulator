import type { ExamCatalogEntry } from "../../domain/catalog";
import { candidateQuestionSets } from "./candidates";

export { candidateQuestionSets } from "./candidates";

const practiceExamOne = candidateQuestionSets.find(
  (questionSet) => questionSet.id === "professional-data-engineer-v4.2-practice-1-v6",
);
if (!practiceExamOne) throw new Error("Practice Exam 1 is missing from the candidate registry.");

export const examCatalog = [
  { availability: "available", questionSet: practiceExamOne },
  {
    availability: "coming-soon",
    id: "professional-data-engineer-v4.2-practice-2",
    title: "Professional Data Engineer Practice Exam 2",
  },
] satisfies readonly ExamCatalogEntry[];
