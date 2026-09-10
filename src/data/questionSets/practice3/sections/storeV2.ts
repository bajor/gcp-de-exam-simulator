import type { QuestionSection } from "../../../../domain/questions";
import { practiceExamThreeStoreSection } from "./store";

export const practiceExamThreeStoreV2Section = {
  section: "store", author: "set3-store-v2-correction-author",
  questions: practiceExamThreeStoreSection.questions.map((question) => {
    if (question.id === "pde-v42-p3-store-06") return { ...question, choices: question.choices.map((choice) => choice.id === "a"
      ? { ...choice, text: "Set a union garbage collection policy of 30-day expiration or a maximum of five versions.", feedback: "A union expires values that are either too old or outside the five newest versions, so it enforces both retention limits." }
      : choice.id === "c" ? { ...choice, text: "Set an intersection garbage collection policy of 30-day expiration and a maximum of five versions.", feedback: "An intersection retains every version younger than 30 days even when there are more than five versions, so it fails the maximum-version requirement." } : choice), correctChoiceIds: ["a", "b"] };
    if (question.id === "pde-v42-p3-store-07") return {
      id: question.id, kind: "single", section: "store", objective: "3.1 Selecting storage systems: lifecycle management of data", verifiedOn: "2026-09-10",
      prompt: "A Cloud Storage bucket receives temporary multipart-upload objects from an external tool. Uploads that remain incomplete for more than seven days have no business value and must be removed automatically without affecting completed objects. What should the team configure?",
      evidence: [{ id: "storage-lifecycle", title: "Object Lifecycle Management", url: "https://cloud.google.com/storage/docs/lifecycle", claim: "Cloud Storage lifecycle rules can delete objects when their age meets a specified condition, applying actions automatically to matching objects." }],
      choices: [
        { id: "a", text: "A Cloud Storage lifecycle Delete rule that matches the temporary upload prefix at age seven days.", feedback: "A lifecycle rule automatically deletes the matching stale temporary objects while completed objects outside the prefix remain unaffected.", evidenceIds: ["storage-lifecycle"] },
        { id: "b", text: "A Bucket Lock retention policy of seven days for every object.", feedback: "Bucket Lock prevents deletion during retention; it does not remove stale uploads and would affect completed objects.", evidenceIds: ["storage-lifecycle"] },
        { id: "c", text: "A daily full-bucket export followed by manual deletion.", feedback: "Manual deletion adds operations and does not use the automatic matching lifecycle action required.", evidenceIds: ["storage-lifecycle"] },
        { id: "d", text: "Autoclass for the bucket.", feedback: "Autoclass changes storage classes based on access patterns; it does not delete stale temporary objects.", evidenceIds: ["storage-lifecycle"] },
      ], correctChoiceId: "a" };
    return question;
  }) as QuestionSection<"store">["questions"],
} satisfies QuestionSection<"store">;
