import type { ExamCatalogEntry } from "../../domain/catalog";
import { candidateQuestionSets } from "./registry";

export { candidateQuestionSets } from "./registry";

const practiceExamOne = candidateQuestionSets.find(
  (questionSet) => questionSet.id === "professional-data-engineer-v4.2-practice-1-v6",
);
if (!practiceExamOne) throw new Error("Practice Exam 1 is missing from the candidate registry.");

const practiceExamTwo = candidateQuestionSets.find(
  (questionSet) => questionSet.id === "professional-data-engineer-v4.2-practice-2-v4",
);
if (!practiceExamTwo) throw new Error("Practice Exam 2 is missing from the candidate registry.");

export const examCatalog = [
  { availability: "available", questionSet: practiceExamOne },
  { availability: "available", questionSet: practiceExamTwo },
] satisfies readonly ExamCatalogEntry[];
