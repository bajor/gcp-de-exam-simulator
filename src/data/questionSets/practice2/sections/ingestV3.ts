import type { QuestionSection } from "../../../../domain/questions";
import { practiceExamTwoIngestV2Section } from "./ingestV2";

export const practiceExamTwoIngestV3Section = {
  section: "ingest",
  author: "set2-ingest-v3-correction-author",
  questions: practiceExamTwoIngestV2Section.questions.map((question) => question.id === "pde-v42-p2-ingest-01"
    ? {
        id: "pde-v42-p2-ingest-01",
        kind: "single",
        section: "ingest",
        objective: "2.2 Building the pipelines: streaming processing semantics",
        prompt: "A payment service writes rows through the BigQuery Storage Write API. A client process can persist the offset of every appended batch and must detect a retry of a batch after a network timeout without querying the destination table. Rows must become visible immediately and the service does not need an atomic multi-batch commit. Which stream should it use?",
        verifiedOn: "2026-09-09",
        evidence: [
          {
            id: "write-streams",
            title: "Stream data using the Storage Write API",
            url: "https://cloud.google.com/bigquery/docs/write-api-streaming",
            claim: "Committed streams make data available immediately and support exactly-once writes when clients assign record offsets; the default stream has at-least-once semantics, while pending streams require finalization and batch commit.",
          },
        ],
        choices: [
          {
            id: "a",
            text: "Use a committed stream and include the persisted offset with every append request.",
            feedback: "Committed streams provide immediate visibility, and client-assigned offsets enable exactly-once retry detection without a multi-batch commit.",
            evidenceIds: ["write-streams"],
          },
          {
            id: "b",
            text: "Use the default stream and include the persisted offset with every append request.",
            feedback: "The default stream makes data visible immediately, but its documented at-least-once semantics do not provide the required exactly-once retry detection.",
            evidenceIds: ["write-streams"],
          },
          {
            id: "c",
            text: "Use a pending stream, finalize it after every batch, and commit every batch separately.",
            feedback: "Pending streams defer visibility until commit and add a finalization and commit lifecycle that the scenario explicitly does not need.",
            evidenceIds: ["write-streams"],
          },
          {
            id: "d",
            text: "Use a committed stream but omit offsets because rows are visible immediately.",
            feedback: "Committed streams do provide immediate visibility, but omitting client-assigned offsets fails the required exactly-once retry detection.",
            evidenceIds: ["write-streams"],
          },
        ],
        correctChoiceId: "a",
      }
    : question),
} satisfies QuestionSection<"ingest">;
