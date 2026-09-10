import type { QuestionSection } from "../../../../domain/questions";
import { designSection } from "./design";

export const practiceExamThreeDesignV4Section = {
  section: "design",
  author: "set3-v4-correction-author",
  questions: designSection.questions.map((question) => {
    if (question.id !== "pde-v42-p3-design-04") return question;

    return {
      id: question.id,
      section: "design",
      objective: "1.1 Designing for security and compliance",
      kind: "single",
      prompt: "A research organization stores raw instrument files in Cloud Storage. Its contract requires the organization to retain all encryption key material, supply the key for every data read and write, and ensure Cloud Storage does not permanently store or manage the key. Which encryption design meets these requirements?",
      choices: [
        { id: "a", text: "Encrypt each object with a customer-supplied encryption key and provide the key with every applicable Cloud Storage request.", feedback: "Cloud Storage does not permanently store or manage a customer-supplied key, which the customer supplies for each operation that requires it.", evidenceIds: ["csek"] },
        { id: "b", text: "Set a default customer-managed encryption key for the bucket in Cloud KMS.", feedback: "A customer-managed key is managed through Cloud KMS, so it does not meet the requirement for the organization to retain and supply every key itself.", evidenceIds: ["csek"] },
        { id: "c", text: "Use standard Cloud Storage encryption for every object.", feedback: "Standard encryption does not require the organization to supply its own encryption key for each data operation.", evidenceIds: ["csek"] },
        { id: "d", text: "Set a bucket retention policy and lock it with Bucket Lock.", feedback: "A retention policy controls when objects can be deleted or replaced; it does not determine how object data is encrypted or who supplies encryption keys.", evidenceIds: ["csek"] },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [{
        id: "csek",
        title: "Customer-supplied encryption keys",
        url: "https://cloud.google.com/storage/docs/encryption/customer-supplied-keys",
        claim: "Cloud Storage customer-supplied encryption keys are provided with every applicable operation, are purged after use, and are not permanently stored or managed by Cloud Storage.",
      }],
    };
  }) as QuestionSection<"design">["questions"],
} satisfies QuestionSection<"design">;
