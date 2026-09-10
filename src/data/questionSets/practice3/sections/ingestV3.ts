import type { QuestionSection } from "../../../../domain/questions";
import { practiceExamThreeIngestSection } from "./ingest";

export const practiceExamThreeIngestV3Section = {
  section: "ingest",
  author: "set3-v3-correction-author",
  questions: practiceExamThreeIngestSection.questions.map((question) => {
    if (question.id !== "pde-v42-p3-ingest-04") return question;

    return {
      id: question.id,
      kind: "multiple",
      requiredSelections: 2,
      section: "ingest",
      objective: "2.2 Building the pipelines: streaming processing semantics",
      prompt: "A regional settlement worker must prevent duplicate processing after successful acknowledgments of Pub/Sub messages. It can use pull delivery, and every worker runs outside Google Cloud only in `europe-west1`. Which two actions are required to use Pub/Sub's exactly-once delivery guarantee? Choose two.",
      verifiedOn: "2026-09-10",
      evidence: question.evidence,
      choices: [
        { id: "a", text: "Create a pull subscription with exactly-once delivery enabled.", feedback: "Exactly-once delivery is supported for pull subscriptions and must be explicitly enabled on the subscription.", evidenceIds: ["exactly-once"] },
        { id: "b", text: "Connect every settlement worker to the `europe-west1` locational Pub/Sub endpoint.", feedback: "For subscribers outside Google Cloud, the locational endpoint ensures every worker connects to the single region in which exactly-once delivery is guaranteed.", evidenceIds: ["exactly-once"] },
        { id: "c", text: "Use a push subscription so Pub/Sub can confirm receipt from the worker's HTTP 2xx response.", feedback: "Push subscriptions do not support exactly-once delivery because the client cannot confirm that Pub/Sub processed its response.", evidenceIds: ["exactly-once"] },
        { id: "d", text: "Spread workers across regions and rely on a shared subscription to deduplicate deliveries.", feedback: "A multi-region subscriber application can receive duplicate delivery even when exactly-once delivery is enabled.", evidenceIds: ["exactly-once"] },
        { id: "e", text: "Assume exactly-once delivery also suppresses duplicate messages caused by separate publisher retries.", feedback: "Exactly-once delivery controls subscription delivery; multiple unique publishes can still create multiple messages.", evidenceIds: ["exactly-once"] },
      ],
      correctChoiceIds: ["a", "b"],
    };
  }) as QuestionSection<"ingest">["questions"],
} satisfies QuestionSection<"ingest">;
