import type { QuestionSection } from "../../../../domain/questions";
import { practice2DesignSection } from "./design";

export const practice2DesignV2Section = {
  section: "design",
  author: "set2-design-correction-author",
  questions: practice2DesignSection.questions.map((question) => question.id === "pde-v42-p2-design-09"
    ? {
        id: "pde-v42-p2-design-09",
        kind: "single",
        section: "design",
        objective: "1.2 Designing for reliability and fidelity: producer data contracts",
        prompt: "Several services publish JSON order events to one Pub/Sub topic. The platform team must reject at publish time any event that violates the shared Avro producer contract. During a staged rollout, some producers will emit schema revision r1 while upgraded producers emit revision r2; both revisions must be accepted until the rollout is complete. Which design should the team use?",
        verifiedOn: "2026-09-09",
        evidence: [
          {
            id: "topic-schema-enforcement",
            title: "Pub/Sub schemas",
            url: "https://cloud.google.com/pubsub/docs/schemas",
            claim: "A Pub/Sub schema can be attached to a topic with a selected encoding, and Pub/Sub validates messages published to that topic against the schema before accepting them.",
          },
          {
            id: "schema-revision-range",
            title: "Associate a schema with a topic",
            url: "https://cloud.google.com/pubsub/docs/associate-schema-topic",
            claim: "Schema updates create revisions. A topic normally validates against the latest revision, but its schema settings can specify first and last revision IDs so Pub/Sub validates against a revision range during an evolution rollout.",
          },
        ],
        choices: [
          {
            id: "a",
            text: "Create an Avro schema, attach it to the topic with JSON encoding, commit r2, and set the topic's first and last schema revision IDs to span r1 through r2 until all producers are upgraded.",
            feedback: "The topic enforces the Avro contract before publication, and the explicit revision range allows the staged r1 and r2 producer population without abandoning broker-side validation.",
            evidenceIds: ["topic-schema-enforcement", "schema-revision-range"],
          },
          {
            id: "b",
            text: "Attach the Avro schema to the subscription and have each subscriber reject payloads that do not conform.",
            feedback: "Schema enforcement is configured on a Pub/Sub topic and validates publication; subscriber-side rejection occurs after invalid messages have already been accepted and delivered.",
            evidenceIds: ["topic-schema-enforcement"],
          },
          {
            id: "c",
            text: "Commit r2 but leave the topic at its default schema settings while r1 producers continue publishing.",
            feedback: "The default topic behavior validates against the latest schema revision, so it does not provide the required documented acceptance range for the concurrent r1 and r2 rollout.",
            evidenceIds: ["schema-revision-range"],
          },
          {
            id: "d",
            text: "Publish unvalidated JSON and rely on every producer's client library to validate its payload before calling Pub/Sub.",
            feedback: "Client-only validation does not make Pub/Sub reject malformed publications from a faulty or nonconforming producer; attaching the schema to the topic provides the required enforcement point.",
            evidenceIds: ["topic-schema-enforcement"],
          },
        ],
        correctChoiceId: "a",
      }
    : question),
} satisfies QuestionSection<"design">;
