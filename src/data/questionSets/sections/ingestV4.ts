import type { QuestionSection } from "../../../domain/questions";
import { ingestSection } from "./ingest";

export const ingestV4Section = {
  section: "ingest",
  author: "gpt-5.6-sol-ingest-v4-20260908",
  questions: ingestSection.questions.map((question) => question.id === "pde-v42-ingest-08"
    ? {
        id: "pde-v42-ingest-08",
        kind: "single",
        section: "ingest",
        objective: "2.2 Building the pipelines: streaming windowing, triggers, and late-arriving data",
        prompt: "A Dataflow pipeline computes transaction totals in one-hour event-time windows. During each hour, a dashboard needs cumulative provisional updates every five minutes. After the watermark passes the window end, events can still arrive up to two hours late, and each late firing must publish a corrected cumulative total rather than only the newly arrived amount. Which configuration meets these requirements?",
        verifiedOn: "2026-09-08",
        evidence: [
          {
            id: "stream-triggers",
            title: "Streaming pipelines",
            url: "https://docs.cloud.google.com/dataflow/docs/concepts/streaming-pipelines",
            claim: "Apache Beam windowing uses event time and watermarks, triggers can emit early and late panes, allowed lateness retains window state for late data, and accumulating mode includes prior pane values in subsequent firings.",
          },
        ],
        choices: [
          {
            id: "a",
            text: "Use one-hour fixed event-time windows, repeated five-minute processing-time early firings, two hours of allowed lateness, late firings, and accumulating panes.",
            feedback: "This combines stable event-time buckets with provisional early output, retained late-data state, and cumulative corrections in every later pane.",
            evidenceIds: ["stream-triggers"],
          },
          {
            id: "b",
            text: "Use one-hour fixed event-time windows with five-minute early firings, zero allowed lateness, and accumulating panes.",
            feedback: "Early cumulative updates work, but zero allowed lateness cannot retain window state for the required two-hour late-arrival correction period.",
            evidenceIds: ["stream-triggers"],
          },
          {
            id: "c",
            text: "Use one-hour fixed event-time windows, two hours of allowed lateness, and discarding panes for every firing.",
            feedback: "Discarding mode emits only values added since the preceding firing, not the corrected cumulative totals required by the dashboard.",
            evidenceIds: ["stream-triggers"],
          },
          {
            id: "d",
            text: "Use one-hour processing-time windows and discard events whose event timestamps fall in an earlier hour.",
            feedback: "Processing-time assignment cannot place delayed events into their correct event-time windows and explicitly discards the late data that must update results.",
            evidenceIds: ["stream-triggers"],
          },
        ],
        correctChoiceId: "a",
      }
    : question),
} satisfies QuestionSection<"ingest">;
