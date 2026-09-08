import type { QuestionForSection, QuestionSection } from "../../../domain/questions";
import { analyzeSection } from "./analyze";

const replacements: Readonly<Record<string, QuestionForSection<"analyze">>> = {
  "pde-v42-analyze-01": {
    id: "pde-v42-analyze-01",
    kind: "single",
    section: "analyze",
    objective: "4.1 Preparing data for visualization: BigQuery features for business intelligence (e.g., BI Engine, materialized views)",
    prompt: "A rail operator appends validated arrival events to a BigQuery table. Dispatchers run an existing query that groups events by station and service date. They need fresh results after appends, BigQuery should reuse maintained aggregate data when possible, and the application SQL cannot be redirected to a different table. Which design best meets these requirements?",
    verifiedOn: "2026-09-08",
    evidence: [
      {
        id: "materialized-view-rewrite",
        title: "Introduction to materialized views",
        url: "https://cloud.google.com/bigquery/docs/materialized-views-intro",
        claim: "BigQuery materialized views maintain precomputed results from base tables and can automatically rewrite compatible queries to use those results while reading base-table changes when necessary.",
      },
      {
        id: "logical-view",
        title: "Introduction to logical views",
        url: "https://cloud.google.com/bigquery/docs/views-intro",
        claim: "A logical view stores a SQL definition and is not materialized by default, so its defining query runs when the view is queried.",
      },
    ],
    choices: [
      {
        id: "a",
        text: "Create a materialized view for the supported station-and-date aggregation and keep the application query compatible with automatic query rewrite.",
        feedback: "The materialized view maintains reusable aggregate results and lets BigQuery rewrite the unchanged compatible query while preserving fresh results.",
        evidenceIds: ["materialized-view-rewrite"],
      },
      {
        id: "b",
        text: "Create a logical view containing the aggregation and expect it to store each result incrementally.",
        feedback: "A logical view stores the SQL definition rather than maintained results, so it does not provide the requested reusable aggregate storage.",
        evidenceIds: ["logical-view"],
      },
      {
        id: "c",
        text: "Write a daily aggregate table and require the application to query that table directly.",
        feedback: "A daily table can lag new appends and requires redirecting application SQL, violating both explicit requirements.",
        evidenceIds: ["materialized-view-rewrite"],
      },
      {
        id: "d",
        text: "Export each query result to Cloud Storage and reuse the most recent exported object.",
        feedback: "An exported result is a separate stale copy and cannot participate in BigQuery's automatic rewrite of the existing query.",
        evidenceIds: ["materialized-view-rewrite"],
      },
    ],
    correctChoiceId: "a",
  },
  "pde-v42-analyze-02": {
    ...analyzeSection.questions[1],
    prompt: "A Looker Studio dashboard queries a BigQuery dataset in us-central1. All dashboard queries run and are billed in project reporting-prod, and the frequently accessed data fits in memory. The team needs in-memory acceleration without changing dashboard SQL or manually tiering data. What should it do?",
    verifiedOn: "2026-09-08",
    choices: [
      {
        id: "a",
        text: "Create a BI Engine reservation in us-central1 in project reporting-prod.",
        feedback: "BI Engine reservations are created for a project and location; using the query billing project and dataset location supplies in-memory acceleration to the stated workload.",
        evidenceIds: ["bi-engine"],
      },
      {
        id: "b",
        text: "Export the dashboard data to Cloud Storage Standard storage before each refresh.",
        feedback: "Cloud Storage is object storage, not BigQuery's in-memory analysis service, and exporting data creates a separate refresh path.",
        evidenceIds: ["bi-engine"],
      },
      {
        id: "c",
        text: "Create a second BigQuery dataset in a different region and copy the dashboard tables there every hour.",
        feedback: "Copying data to another region adds a refresh pipeline and does not provide the requested in-memory acceleration for the existing regional queries.",
        evidenceIds: ["bi-engine"],
      },
      {
        id: "d",
        text: "Load the dashboard data into Memorystore and rewrite each dashboard query to read it.",
        feedback: "This requires application and data-path changes; BI Engine is the BigQuery-native service that accelerates compatible queries without those changes.",
        evidenceIds: ["bi-engine"],
      },
    ],
  },
  "pde-v42-analyze-03": {
    ...analyzeSection.questions[2],
    prompt: "A BigQuery table is partitioned by event_date and has 100 columns. At 09:00 America/New_York time, a report needs only customer_id and amount for the seven complete local calendar days before today. Its current SELECT * query scans every partition. Which query pattern minimizes data read and returns exactly the required dates?",
    verifiedOn: "2026-09-08",
    choices: [
      {
        id: "a",
        text: "Select customer_id and amount and filter event_date from DATE_SUB(CURRENT_DATE('America/New_York'), INTERVAL 7 DAY), inclusive, to CURRENT_DATE('America/New_York'), exclusive.",
        feedback: "The explicit projection reads only required columns, and the half-open predicate on the partition column prunes to exactly the seven completed local dates.",
        evidenceIds: ["query-performance"],
      },
      {
        id: "b",
        text: "Keep SELECT * and add LIMIT 10000 after filtering the previous seven UTC dates.",
        feedback: "LIMIT does not reduce bytes read, SELECT * reads unnecessary columns, and UTC dates do not implement the stated New York calendar boundary.",
        evidenceIds: ["query-performance"],
      },
      {
        id: "c",
        text: "Select customer_id and amount but filter DATE(event_timestamp) instead of the event_date partition column.",
        feedback: "The projection helps, but replacing the direct partition-column predicate can prevent the required partition pruning.",
        evidenceIds: ["query-performance"],
      },
      {
        id: "d",
        text: "Select customer_id and amount and filter event_date through and including CURRENT_DATE('America/New_York').",
        feedback: "Including today's partition admits the current partial calendar day, which the report explicitly excludes.",
        evidenceIds: ["query-performance"],
      },
    ],
  },
  "pde-v42-analyze-08": {
    id: "pde-v42-analyze-08",
    kind: "single",
    section: "analyze",
    objective: "4.3 Sharing data: publishing datasets and BigQuery sharing (Analytics Hub)",
    prompt: "A supplier already has an active Analytics Hub subscription to a restricted pricing listing. Its contract ends today. The provider must stop that existing subscriber project from querying the shared data immediately, while leaving the listing available to other approved subscribers. Removing the supplier from listing IAM alone is insufficient. What should the provider do?",
    verifiedOn: "2026-09-08",
    evidence: [
      {
        id: "subscription-revocation",
        title: "Manage subscriptions",
        url: "https://cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions",
        claim: "A publisher can revoke an existing Analytics Hub subscription; the linked dataset remains in the subscriber project but can no longer query the shared data.",
      },
      {
        id: "analytics-hub-access",
        title: "Introduction to Analytics Hub",
        url: "https://cloud.google.com/bigquery/docs/analytics-hub-introduction",
        claim: "Analytics Hub listings let publishers manage access to shared data and subscribers receive linked datasets that reference publisher data.",
      },
    ],
    choices: [
      {
        id: "a",
        text: "Revoke the supplier project's existing subscription from the listing's subscription management page.",
        feedback: "Publisher-initiated subscription revocation stops that linked dataset from querying the shared data without withdrawing the listing from other subscribers.",
        evidenceIds: ["subscription-revocation"],
      },
      {
        id: "b",
        text: "Remove the supplier group from the listing's Subscriber IAM role and take no other action.",
        feedback: "Removing listing access can prevent future subscription actions, but the prompt states an existing subscription that must be explicitly revoked.",
        evidenceIds: ["subscription-revocation", "analytics-hub-access"],
      },
      {
        id: "c",
        text: "Delete the listing so the supplier's linked dataset stops working.",
        feedback: "Deleting the listing would also disrupt availability for other approved subscribers, violating the required scope.",
        evidenceIds: ["analytics-hub-access"],
      },
      {
        id: "d",
        text: "Ask the supplier to delete its linked dataset and retain the active subscription.",
        feedback: "Subscriber cooperation does not provide provider-enforced revocation, and retaining the subscription leaves access authorized.",
        evidenceIds: ["subscription-revocation"],
      },
    ],
    correctChoiceId: "a",
  },
};

export const analyzeV2Section = {
  section: "analyze",
  author: "gpt-5.6-sol-analyze-v2-20260908",
  questions: analyzeSection.questions.map((question) => replacements[question.id] ?? question),
} satisfies QuestionSection<"analyze">;
