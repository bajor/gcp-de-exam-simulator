import type { QuestionSection } from "../../../../domain/questions";
import { practiceExamThreeStoreV2Section } from "./storeV2";

export const practiceExamThreeStoreV3Section = {
  section: "store",
  author: "set3-v3-correction-author",
  questions: practiceExamThreeStoreV2Section.questions.map((question) => {
    if (question.id !== "pde-v42-p3-store-07") return question;

    return {
      id: question.id,
      kind: "single",
      section: "store",
      objective: "3.1 Selecting storage systems: lifecycle management of data",
      verifiedOn: "2026-09-10",
      prompt: "A Cloud Storage bucket receives multipart uploads from an external tool. Upload attempts that remain incomplete for more than seven days have no business value and must be automatically aborted, including deletion of their uploaded parts. Completed objects must remain unchanged. What should the team configure?",
      evidence: [{
        id: "storage-lifecycle",
        title: "Object Lifecycle Management",
        url: "https://cloud.google.com/storage/docs/lifecycle",
        claim: "Cloud Storage lifecycle rules can use AbortIncompleteMultipartUpload with an age condition to abort incomplete multipart uploads and delete their associated parts; completed objects are not incomplete multipart uploads.",
      }],
      choices: [
        {
          id: "a",
          text: "A Cloud Storage lifecycle AbortIncompleteMultipartUpload rule with an age condition of seven days.",
          feedback: "The abort action is specifically for incomplete multipart uploads and deletes their associated parts after the configured age.",
          evidenceIds: ["storage-lifecycle"],
        },
        {
          id: "b",
          text: "A Cloud Storage lifecycle Delete rule with an age condition of seven days.",
          feedback: "Delete actions apply only after object uploads complete, so they cannot remove incomplete multipart uploads or their parts.",
          evidenceIds: ["storage-lifecycle"],
        },
        {
          id: "c",
          text: "A Bucket Lock retention policy of seven days for every object.",
          feedback: "Bucket Lock prevents deletion during retention; it does not abort incomplete multipart uploads and would affect completed objects.",
          evidenceIds: ["storage-lifecycle"],
        },
        {
          id: "d",
          text: "Autoclass for the bucket.",
          feedback: "Autoclass changes storage classes based on access patterns; it does not abort incomplete multipart uploads.",
          evidenceIds: ["storage-lifecycle"],
        },
      ],
      correctChoiceId: "a",
    };
  }) as QuestionSection<"store">["questions"],
} satisfies QuestionSection<"store">;
