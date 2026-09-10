import type { QuestionSection } from "../../../../domain/questions";
import { practiceExamThreeIngestV3Section } from "./ingestV3";

export const practiceExamThreeIngestV4Section = {
  section: "ingest",
  author: "set3-v4-correction-author",
  questions: practiceExamThreeIngestV3Section.questions.map((question) => {
    if (question.id !== "pde-v42-p3-ingest-03") return question;

    return {
      id: question.id,
      kind: "single",
      section: "ingest",
      objective: "2.2 Building the pipelines: data cleansing",
      prompt: "A clinical research pipeline prepares participant records for external analysis. It must replace every exact age with one of three predefined age bands to reduce re-identification risk, while retaining the broad cohort group for analysis. What Sensitive Data Protection transformation should the pipeline use?",
      verifiedOn: "2026-09-10",
      evidence: [{
        id: "bucketing",
        title: "Generalization and bucketing",
        url: "https://cloud.google.com/sensitive-data-protection/docs/concepts-bucketing",
        claim: "Sensitive Data Protection bucketing replaces values in defined ranges with replacement values, preserving useful groups while obscuring individual values to reduce re-identification risk.",
      }],
      choices: [
        { id: "a", text: "Configure bucketing with the three age ranges and their replacement labels.", feedback: "Bucketing replaces each exact age with its configured range label, preserving the required broad cohort group while obscuring individual values.", evidenceIds: ["bucketing"] },
        { id: "b", text: "Keep each exact age and add a separate age-band column.", feedback: "Keeping the exact age does not reduce its identifiability; the requirement is to replace the individual value with a band.", evidenceIds: ["bucketing"] },
        { id: "c", text: "Remove every record whose age is rare in the source data.", feedback: "Removing outlier records loses their cohort information, whereas bucketing retains useful groups while obscuring individual values.", evidenceIds: ["bucketing"] },
        { id: "d", text: "Replace every age with one shared `unknown` label.", feedback: "One shared label removes the broad cohort grouping required for analysis; bucketing supplies distinct predefined replacement values for ranges.", evidenceIds: ["bucketing"] },
      ],
      correctChoiceId: "a",
    };
  }) as QuestionSection<"ingest">["questions"],
} satisfies QuestionSection<"ingest">;
