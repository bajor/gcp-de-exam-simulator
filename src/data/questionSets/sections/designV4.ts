import type { QuestionSection } from "../../../domain/questions";
import { designSection } from "./design";

export const designV4Section = {
  section: "design",
  author: "gpt-5.6-sol-design-v4-20260908",
  questions: designSection.questions.map((question) => question.id === "pde-v42-design-03"
    ? {
        ...question,
        verifiedOn: "2026-09-08",
        choices: [
          question.choices[0],
          question.choices[1],
          question.choices[2],
          {
            id: "d",
            text: "Use CryptoReplaceFfxFpeConfig with a newly generated cryptographic key for each daily run.",
            feedback: "FPE is reversible, but changing its key each day prevents equal identifiers from producing stable cross-run tokens and complicates authorized re-identification.",
            evidenceIds: ["pseudonymization", "transformation-reference"],
          },
        ],
      }
    : question),
} satisfies QuestionSection<"design">;
