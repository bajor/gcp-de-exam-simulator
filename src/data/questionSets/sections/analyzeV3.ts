import type { QuestionSection } from "../../../domain/questions";
import { analyzeV2Section } from "./analyzeV2";

export const analyzeV3Section = {
  section: "analyze",
  author: "gpt-5.6-sol-analyze-v3-20260908",
  questions: analyzeV2Section.questions.map((question) => question.id === "pde-v42-analyze-01"
    ? {
        id: "pde-v42-analyze-01",
        kind: "single",
        section: "analyze",
        objective: "4.1 Preparing data for visualization: optimizing queries for dashboard consumption",
        prompt: "A subscription dashboard needs an approximate count of unique viewers over arbitrary date ranges. Raw events are retained for only 30 days, but daily rollups must support quarterly and annual estimates. A viewer can appear on many days, so adding daily distinct counts would overcount. The estimates may be approximate, and the team wants to merge compact daily state instead of retaining raw identifiers. What should the team store and query?",
        verifiedOn: "2026-09-08",
        evidence: [
          {
            id: "hll-sketches",
            title: "HyperLogLog++ functions",
            url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/hll_functions",
            claim: "BigQuery HLL_COUNT.INIT creates mergeable HyperLogLog++ sketches, HLL_COUNT.MERGE combines sketches and returns an approximate cardinality, and HLL_COUNT.MERGE_PARTIAL combines sketches into another sketch.",
          },
        ],
        choices: [
          {
            id: "a",
            text: "Store one HLL_COUNT.INIT viewer sketch per day and use HLL_COUNT.MERGE across the selected daily sketches.",
            feedback: "Mergeable HyperLogLog++ sketches preserve approximate set cardinality across overlapping days without retaining raw viewer identifiers.",
            evidenceIds: ["hll-sketches"],
          },
          {
            id: "b",
            text: "Store COUNT(DISTINCT viewer_id) per day and sum those counts for each requested range.",
            feedback: "Summing daily distinct counts counts a viewer again on every day they appear, violating the cross-day unique-viewer requirement.",
            evidenceIds: ["hll-sketches"],
          },
          {
            id: "c",
            text: "Store APPROX_COUNT_DISTINCT(viewer_id) per day and average those values for each requested range.",
            feedback: "Scalar daily estimates are not mergeable set state, and averaging them does not estimate unique viewers across the union of days.",
            evidenceIds: ["hll-sketches"],
          },
          {
            id: "d",
            text: "Store the daily maximum viewer_id and count the selected maximum values.",
            feedback: "A maximum identifier carries no set-membership information and cannot estimate distinct viewers across dates.",
            evidenceIds: ["hll-sketches"],
          },
        ],
        correctChoiceId: "a",
      }
    : question),
} satisfies QuestionSection<"analyze">;
