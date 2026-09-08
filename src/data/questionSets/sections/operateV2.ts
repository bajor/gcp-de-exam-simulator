import type { QuestionForSection, QuestionSection } from "../../../domain/questions";
import { operateSection } from "./operate";

const replacements: Readonly<Record<string, QuestionForSection<"operate">>> = {
  "pde-v42-operate-01": {
    ...operateSection.questions[0],
    kind: "single",
    prompt: "A team must reduce the compute cost of an existing autoscaled Apache Beam batch pipeline without rewriting it for another engine. The job has no accelerator or reservation requirement, can wait up to six hours before starting, and is more sensitive to cost than completion time. Which execution design best meets the requirements?",
    verifiedOn: "2026-09-08",
    choices: [
      {
        id: "a",
        text: "Run the pipeline on Dataflow with Flexible Resource Scheduling and the COST_OPTIMIZED goal.",
        feedback: "This retains the Beam pipeline, uses discounted resources, and accepts the documented delayed launch that the workload permits.",
        evidenceIds: ["flexrs"],
      },
      {
        id: "b",
        text: "Run it as a standard Dataflow batch job with SPEED_OPTIMIZED Flexible Resource Scheduling.",
        feedback: "The speed goal favors lower execution time instead of the stated cost priority, and it is the default FlexRS goal if no cost goal is selected.",
        evidenceIds: ["flexrs"],
      },
      {
        id: "c",
        text: "Rewrite the pipeline as a streaming job and enable Flexible Resource Scheduling.",
        feedback: "FlexRS supports batch pipelines, and a rewrite to streaming adds work without satisfying the documented execution model.",
        evidenceIds: ["flexrs"],
      },
      {
        id: "d",
        text: "Attach the batch workers to a Compute Engine reservation and enable Flexible Resource Scheduling.",
        feedback: "FlexRS does not support Compute Engine reservations, so this combination is unavailable.",
        evidenceIds: ["flexrs"],
      },
    ],
    correctChoiceId: "a",
  },
  "pde-v42-operate-02": {
    ...operateSection.questions[1],
    kind: "single",
    prompt: "An organization uses BigQuery capacity-based pricing for both a latency-sensitive dashboard project and an unpredictable research project in the same location. Each project must use its own reservation, and research queries must never borrow idle slots allocated to the dashboard. How should the organization configure workload management?",
    verifiedOn: "2026-09-08",
    evidence: [
      {
        id: "reservation-workloads",
        title: "Understand reservations",
        url: "https://cloud.google.com/bigquery/docs/reservations-workload-management",
        claim: "Assignments route project workloads to reservations; reservations can share idle slots by default, and setting ignore_idle_slots prevents a reservation's workloads from using idle slots from other reservations.",
      },
    ],
    choices: [
      {
        id: "a",
        text: "Assign each project to a separate reservation and set ignore_idle_slots to true on the research reservation.",
        feedback: "Separate assignments provide distinct pools, and preventing research from using other reservations' idle slots protects idle dashboard capacity from research demand.",
        evidenceIds: ["reservation-workloads"],
      },
      {
        id: "b",
        text: "Assign each project to a separate reservation and retain idle-slot sharing on both reservations.",
        feedback: "Separate reservations alone do not meet the strict isolation requirement because research can still use eligible idle slots from the dashboard reservation.",
        evidenceIds: ["reservation-workloads"],
      },
      {
        id: "c",
        text: "Assign both projects to the dashboard reservation and set ignore_idle_slots to true there.",
        feedback: "Both workloads would compete inside the same capacity pool; ignore_idle_slots only controls borrowing from other reservations.",
        evidenceIds: ["reservation-workloads"],
      },
      {
        id: "d",
        text: "Assign both projects to the research reservation and use job labels to reserve dashboard slots.",
        feedback: "Labels do not partition reservation capacity, so both workloads would still share one pool.",
        evidenceIds: ["reservation-workloads"],
      },
    ],
    correctChoiceId: "a",
  },
  "pde-v42-operate-03": {
    ...operateSection.questions[2],
    kind: "single",
    prompt: "A daily BigQuery MERGE has no upstream or downstream dependencies. It must be managed with the least operational overhead, run at 02:15 UTC, and process the date associated with the scheduled execution even when a run is delayed. Which design should the team choose?",
    verifiedOn: "2026-09-08",
    choices: [
      {
        id: "a",
        text: "Use a BigQuery scheduled query at 02:15 UTC and derive the processing date from @run_date.",
        feedback: "A scheduled query directly manages the dependency-free SQL, and @run_date represents the intended schedule date rather than delayed execution time.",
        evidenceIds: ["scheduled-queries"],
      },
      {
        id: "b",
        text: "Use Cloud Scheduler to invoke a service that submits the MERGE with CURRENT_DATE() in the SQL.",
        feedback: "This adds a service to operate, and CURRENT_DATE() can select the actual delayed execution date instead of the intended scheduled date.",
        evidenceIds: ["scheduled-queries"],
      },
      {
        id: "c",
        text: "Use Cloud Composer for a one-task DAG and derive the processing date from the task's wall-clock start time.",
        feedback: "A general workflow environment adds unnecessary operations for one dependency-free query, and task start time does not preserve the intended schedule date after delay.",
        evidenceIds: ["scheduled-queries"],
      },
      {
        id: "d",
        text: "Use a BigQuery scheduled query at 02:15 UTC and derive the processing date from CURRENT_DATE().",
        feedback: "The managed scheduler meets the operational requirement, but execution-time date evaluation can process the wrong date after a delayed run.",
        evidenceIds: ["scheduled-queries"],
      },
    ],
    correctChoiceId: "a",
  },
  "pde-v42-operate-04": {
    ...operateSection.questions[3],
    kind: "single",
    prompt: "A BigQuery aggregation has no completion deadline and no waiting consumer. It should remain queued until idle resources are available so interactive analyst queries can start as soon as possible. Which job configuration should the team use?",
    verifiedOn: "2026-09-08",
    choices: [
      {
        id: "a",
        text: "Submit the aggregation as a BATCH query job.",
        feedback: "Batch priority queues the job until idle resources are available, matching the workload's lack of a deadline and preference for interactive traffic.",
        evidenceIds: ["query-priority"],
      },
      {
        id: "b",
        text: "Submit the aggregation as an INTERACTIVE query job.",
        feedback: "Interactive priority attempts to start as soon as possible instead of intentionally waiting for idle resources.",
        evidenceIds: ["query-priority"],
      },
      {
        id: "c",
        text: "Submit an INTERACTIVE job and add a low-priority label.",
        feedback: "A label does not replace BigQuery's batch priority behavior; the job would still request interactive execution.",
        evidenceIds: ["query-priority"],
      },
      {
        id: "d",
        text: "Submit a BATCH query only after manually confirming that no analyst query is running.",
        feedback: "Batch priority already queues for idle resources, so manual admission adds operational work without improving the requested behavior.",
        evidenceIds: ["query-priority"],
      },
    ],
    correctChoiceId: "a",
  },
  "pde-v42-operate-05": {
    ...operateSection.questions[4],
    kind: "single",
    prompt: "A BigQuery reservation needs a 200-slot baseline and must autoscale to no more than 500 total slots during month-end peaks. The team must not resize it manually. Which settings meet the requirement?",
    verifiedOn: "2026-09-08",
    evidence: [
      {
        id: "reservation-autoscaling",
        title: "Introduction to slots",
        url: "https://cloud.google.com/bigquery/docs/slots-autoscaling-intro",
        claim: "A reservation has optional baseline slots and a maximum reservation size; autoscaling adds capacity up to that maximum reservation size and scales down toward the baseline as demand falls.",
      },
    ],
    choices: [
      {
        id: "a",
        text: "Set baseline slots to 200 and maximum reservation size to 500.",
        feedback: "The baseline preserves 200 slots while the maximum reservation size caps total autoscaled reservation capacity at 500 slots.",
        evidenceIds: ["reservation-autoscaling"],
      },
      {
        id: "b",
        text: "Set baseline slots to 200 and maximum reservation size to 300.",
        feedback: "The maximum reservation size is the total autoscaling ceiling, so 300 would not permit the required 500 total slots.",
        evidenceIds: ["reservation-autoscaling"],
      },
      {
        id: "c",
        text: "Set baseline slots to 500 and maximum reservation size to 500.",
        feedback: "This retains 500 baseline slots outside month-end peaks instead of the required 200-slot baseline.",
        evidenceIds: ["reservation-autoscaling"],
      },
      {
        id: "d",
        text: "Set baseline slots to 200 and manually add 300 slots before each month-end run.",
        feedback: "Manual resizing violates the operating requirement; the maximum reservation size is the configured autoscaling ceiling.",
        evidenceIds: ["reservation-autoscaling"],
      },
    ],
    correctChoiceId: "a",
  },
  "pde-v42-operate-07": {
    ...operateSection.questions[6],
    kind: "single",
    prompt: "A FinOps team configures an 80% forecasted-cost threshold for a monthly Cloud Billing budget. Email recipients should receive the standard threshold alert. A Pub/Sub consumer should open an incident only after that forecast threshold has been exceeded, even though the topic receives budget status messages multiple times per day. What should the team implement?",
    verifiedOn: "2026-09-08",
    evidence: [
      {
        id: "billing-budgets",
        title: "Create, edit, or delete budgets and budget alerts",
        url: "https://cloud.google.com/billing/docs/how-to/budgets",
        claim: "Cloud Billing budgets support forecasted-cost threshold rules and email notifications; a budget does not automatically cap usage or spending.",
      },
      {
        id: "budget-pubsub",
        title: "Set up programmatic notifications",
        url: "https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications",
        claim: "Budget Pub/Sub notifications contain current status and arrive multiple times per day; forecastThresholdExceeded is present with the highest exceeded forecast threshold and is absent when no forecast threshold is exceeded.",
      },
    ],
    choices: [
      {
        id: "a",
        text: "Configure the forecast threshold and email recipients, connect the budget to Pub/Sub, and have the consumer open an incident only when forecastThresholdExceeded is at least 0.8.",
        feedback: "Email uses the configured threshold alert, while the consumer correctly filters periodic status messages using the field that identifies an exceeded forecast threshold.",
        evidenceIds: ["billing-budgets", "budget-pubsub"],
      },
      {
        id: "b",
        text: "Open an incident for every message received on the budget's Pub/Sub topic.",
        feedback: "Budget status messages are sent multiple times per day even without a threshold crossing, so this would create false incidents.",
        evidenceIds: ["budget-pubsub"],
      },
      {
        id: "c",
        text: "Open an incident only when alertThresholdExceeded is at least 0.8.",
        feedback: "alertThresholdExceeded represents actual-cost thresholds; the requirement is specifically based on forecasted cost.",
        evidenceIds: ["budget-pubsub"],
      },
      {
        id: "d",
        text: "Rely on the budget to stop BigQuery usage automatically when forecastThresholdExceeded reaches 0.8.",
        feedback: "A budget provides monitoring and notifications but does not automatically cap usage or spending.",
        evidenceIds: ["billing-budgets"],
      },
    ],
    correctChoiceId: "a",
  },
  "pde-v42-operate-09": {
    ...operateSection.questions[8],
    kind: "single",
    prompt: "A Cloud SQL for MySQL instance stores pipeline control state. A zonal outage must trigger managed failover in the same region with no loss of committed writes. About 60 seconds of reconnection time is acceptable, read scaling is unnecessary, and the owner accepts twice the standalone-instance cost. Which design should the team choose?",
    verifiedOn: "2026-09-08",
    evidence: [
      {
        id: "cloud-sql-ha",
        title: "About high availability",
        url: "https://cloud.google.com/sql/docs/mysql/high-availability",
        claim: "A regional Cloud SQL HA instance synchronously replicates writes to a standby in another zone before commit, automatically fails over with about 60 seconds of unavailability, retains its connection endpoint, and costs twice as much as a standalone instance.",
      },
    ],
    choices: [
      {
        id: "a",
        text: "Configure the instance for regional high availability and make clients retry connections to the existing endpoint.",
        feedback: "Regional HA provides synchronous cross-zone persistence and managed failover within the accepted recovery time and cost constraints.",
        evidenceIds: ["cloud-sql-ha"],
      },
      {
        id: "b",
        text: "Keep a standalone zonal instance with point-in-time recovery and restore it manually after an outage.",
        feedback: "Standalone recovery is manual, can lose recent committed transactions, and requires clients to use a new endpoint.",
        evidenceIds: ["cloud-sql-ha"],
      },
      {
        id: "c",
        text: "Create a read replica in another zone and promote it manually after an outage.",
        feedback: "Replica promotion is a manual recovery path with an RPO affected by replication lag, unlike synchronous managed HA failover.",
        evidenceIds: ["cloud-sql-ha"],
      },
      {
        id: "d",
        text: "Keep the standalone instance and add read replicas in its zone to reduce failover cost.",
        feedback: "Read replicas in the failed zone do not provide cross-zone recovery, and read scaling is not the stated requirement.",
        evidenceIds: ["cloud-sql-ha"],
      },
    ],
    correctChoiceId: "a",
  },
};

export const operateV2Section = {
  section: "operate",
  author: "gpt-5.6-sol-operate-v2-20260908",
  questions: operateSection.questions.map((question) => replacements[question.id] ?? question),
} satisfies QuestionSection<"operate">;
