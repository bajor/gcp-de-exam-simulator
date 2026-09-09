import type { QuestionSection } from "../../../../domain/questions";
import { practiceExamTwoIngestSection } from "./ingest";

export const practiceExamTwoIngestV2Section = {
  section: "ingest",
  author: "set2-ingest-correction-author",
  questions: practiceExamTwoIngestSection.questions.map((question) => question.id === "pde-v42-p2-ingest-07"
    ? {
        id: "pde-v42-p2-ingest-07",
        kind: "single",
        section: "ingest",
        objective: "2.2 Building the pipelines: streaming processing semantics",
        prompt: "A regional telemetry service publishes state updates for thousands of devices. Updates for each individual device must reach a pull subscriber in publication order, while updates for different devices must remain independently processable in parallel. Publishers already send every device's messages through the same regional endpoint. Which Pub/Sub configuration meets these requirements?",
        verifiedOn: "2026-09-09",
        evidence: [
          {
            id: "pubsub-ordering",
            title: "Order messages",
            url: "https://cloud.google.com/pubsub/docs/ordering",
            claim: "Pub/Sub ordering keys preserve delivery order for messages with the same key when ordering is enabled on a supported subscription; publishers must use the same region for a key, and different ordering keys can be processed independently.",
          },
        ],
        choices: [
          {
            id: "a",
            text: "Publish each device's updates with that device's ID as the ordering key and enable message ordering on the pull subscription.",
            feedback: "A device-specific key preserves publication order for that device, while separate device keys allow Pub/Sub to process different devices independently.",
            evidenceIds: ["pubsub-ordering"],
          },
          {
            id: "b",
            text: "Publish every update with one shared ordering key and enable message ordering on the pull subscription.",
            feedback: "One shared key preserves order, but it groups every device into one ordered sequence and prevents the required independent parallel processing across devices.",
            evidenceIds: ["pubsub-ordering"],
          },
          {
            id: "c",
            text: "Assign a new random ordering key to every update and enable message ordering on the pull subscription.",
            feedback: "Random keys can distribute work, but updates for one device no longer share a key, so Pub/Sub cannot preserve their device-specific publication order.",
            evidenceIds: ["pubsub-ordering"],
          },
          {
            id: "d",
            text: "Publish updates without ordering keys and configure the subscriber to derive a device key after receiving each message.",
            feedback: "Ordering is determined from the ordering key carried by published messages and must be enabled on the subscription; a subscriber cannot impose Pub/Sub delivery order after receipt.",
            evidenceIds: ["pubsub-ordering"],
          },
        ],
        correctChoiceId: "a",
      }
    : question),
} satisfies QuestionSection<"ingest">;
