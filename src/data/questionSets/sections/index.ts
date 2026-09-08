import type { AnyQuestionSection } from "../../../domain/questions";
import { analyzeSection } from "./analyze";
import { designSection } from "./design";
import { ingestSection } from "./ingest";
import { operateSection } from "./operate";
import { storeSection } from "./store";

export const practiceV1Sections: readonly AnyQuestionSection[] = [
  designSection,
  ingestSection,
  storeSection,
  analyzeSection,
  operateSection,
];
