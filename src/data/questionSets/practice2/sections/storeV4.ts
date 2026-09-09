import type { QuestionSection } from "../../../../domain/questions";
import { practiceExamTwoStoreSection } from "./store";

export const practiceExamTwoStoreV4Section = {
  section: "store",
  author: "set2-store-v4-correction-author",
  questions: practiceExamTwoStoreSection.questions.map((question) => {
    if (question.id === "pde-v42-p2-store-06") return {
      id: question.id, kind: "single", section: "store",
      objective: "3.1 Selecting storage systems: choosing managed services (BigQuery, BigLake, AlloyDB, Bigtable, Spanner, Cloud SQL, Cloud Storage, Firestore, Memorystore)",
      prompt: "A telemetry platform stores billions of sparse device-state records. Its service reads and writes one record by device key at low latency and does not need joins, SQL analytics, or multi-row transactions. Which managed service best fits?",
      verifiedOn: "2026-09-09",
      evidence: [{ id: "bigtable-overview", title: "Bigtable overview", url: "https://cloud.google.com/bigtable/docs/overview", claim: "Bigtable scales to billions of rows and is ideal for large amounts of single-keyed data with high read and write throughput at low latency; it is not a traditional relational database." }],
      choices: [
        { id: "a", text: "Bigtable.", feedback: "Bigtable is designed for sparse, massive single-keyed data with the required low-latency read and write throughput.", evidenceIds: ["bigtable-overview"] },
        { id: "b", text: "BigQuery.", feedback: "BigQuery is an analytical warehouse, not the documented low-latency single-key operational store.", evidenceIds: ["bigtable-overview"] },
        { id: "c", text: "Cloud Storage objects.", feedback: "Object storage does not supply Bigtable's low-latency single-key record access and throughput.", evidenceIds: ["bigtable-overview"] },
        { id: "d", text: "A relational database with one row per device.", feedback: "The workload explicitly does not need relational behavior and instead matches Bigtable's documented single-key scale profile.", evidenceIds: ["bigtable-overview"] },
      ], correctChoiceId: "a",
    };
    if (question.id === "pde-v42-p2-store-07") return {
      id: question.id, kind: "single", section: "store",
      objective: "3.2 Planning for using a data warehouse: defining architecture to support data access patterns",
      prompt: "A team needs a writable BigQuery copy of a 30 TB production table for short-lived integration tests. It must start from the current table state, avoid duplicating unchanged storage, and isolate test writes from production. What should it create?",
      verifiedOn: "2026-09-09",
      evidence: [{ id: "table-clones", title: "Introduction to table clones", url: "https://cloud.google.com/bigquery/docs/table-clones-intro", claim: "A BigQuery table clone is a writable copy-on-write table that initially shares storage with its base table; changed data is stored separately." }],
      choices: [
        { id: "a", text: "A BigQuery table clone of the production table.", feedback: "A clone provides the required writable isolation while initially sharing unchanged storage with the base table.", evidenceIds: ["table-clones"] },
        { id: "b", text: "A BigQuery table snapshot.", feedback: "A snapshot is read-only, so it cannot support the required integration-test writes.", evidenceIds: ["table-clones"] },
        { id: "c", text: "A full CREATE TABLE AS SELECT copy.", feedback: "A full copy duplicates the unchanged data rather than using copy-on-write storage sharing.", evidenceIds: ["table-clones"] },
        { id: "d", text: "A view over the production table.", feedback: "A view does not create an isolated writable table for test mutations.", evidenceIds: ["table-clones"] },
      ], correctChoiceId: "a",
    };
    return question;
  }),
} satisfies QuestionSection<"store">;
