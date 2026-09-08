import type { QuestionSection } from "../../../domain/questions";
import { designV4Section } from "./designV4";

export const designV5Section = {
  section: "design",
  author: "gpt-5.6-sol-design-v5-20260908",
  questions: designV4Section.questions.map((question) => question.id === "pde-v42-design-10"
    ? {
        id: "pde-v42-design-10",
        kind: "single",
        section: "design",
        objective: "1.4 Designing data migrations: continuous database migration and cutover",
        prompt: "A company is moving a self-managed MySQL transactional database to Cloud SQL for MySQL. The source must remain writable while historical data and ongoing changes replicate. After application validation, the team needs a controlled cutover that stops replication and makes the destination writable, with minimal migration infrastructure to operate. Which approach should the team use?",
        verifiedOn: "2026-09-08",
        evidence: [
          {
            id: "dms-overview",
            title: "Database Migration Service overview",
            url: "https://cloud.google.com/database-migration/docs/overview",
            claim: "Database Migration Service provides managed minimal-downtime database migrations and continuous migration jobs that replicate data until the destination is promoted for cutover.",
          },
          {
            id: "dms-destinations",
            title: "Database Migration Service supported source and destination databases",
            url: "https://cloud.google.com/database-migration/docs/supported-databases",
            claim: "Database Migration Service supports MySQL sources and Cloud SQL for MySQL destinations.",
          },
          {
            id: "datastream",
            title: "Datastream overview",
            url: "https://cloud.google.com/datastream/docs/overview",
            claim: "Datastream is a serverless change data capture service for replication into analytical destinations such as BigQuery and Cloud Storage rather than a managed Cloud SQL database cutover.",
          },
          {
            id: "mysql-transfer",
            title: "Load MySQL data into BigQuery",
            url: "https://cloud.google.com/bigquery/docs/mysql-transfer",
            claim: "The BigQuery Data Transfer Service MySQL connector loads MySQL data into BigQuery on a schedule; it does not migrate an operational database to Cloud SQL.",
          },
        ],
        choices: [
          {
            id: "a",
            text: "Create a continuous Database Migration Service job to Cloud SQL, validate the destination while replication continues, and promote the destination during cutover.",
            feedback: "A continuous managed migration keeps the source writable during replication and promotion provides the controlled transition to a writable Cloud SQL destination.",
            evidenceIds: ["dms-overview", "dms-destinations"],
          },
          {
            id: "b",
            text: "Stop source writes, export a SQL dump, import it into Cloud SQL, and restart the application after the import finishes.",
            feedback: "A dump-and-restore migration requires source write downtime for a consistent final copy, conflicting with the minimal-downtime replication requirement.",
            evidenceIds: ["dms-overview"],
          },
          {
            id: "c",
            text: "Configure Datastream to replicate MySQL changes to BigQuery and promote BigQuery as the transactional database.",
            feedback: "Datastream can feed analytical destinations, but BigQuery is not the required Cloud SQL transactional destination or a promotable MySQL instance.",
            evidenceIds: ["datastream", "dms-destinations"],
          },
          {
            id: "d",
            text: "Schedule recurring BigQuery Data Transfer Service MySQL loads and use the resulting tables for application writes after cutover.",
            feedback: "Scheduled transfers load analytical BigQuery tables rather than continuously migrating and promoting a Cloud SQL for MySQL database.",
            evidenceIds: ["mysql-transfer", "dms-destinations"],
          },
        ],
        correctChoiceId: "a",
      }
    : question),
} satisfies QuestionSection<"design">;
