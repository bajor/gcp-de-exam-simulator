import type { AnyQuestionSection } from "../../../../domain/questions";
import { analyzeSection } from "./analyze";
import { designSection } from "./design";
import { practiceExamThreeDesignV4Section } from "./designV4";
import { practiceExamThreeIngestSection } from "./ingest";
import { practiceExamThreeIngestV3Section } from "./ingestV3";
import { practiceExamThreeIngestV4Section } from "./ingestV4";
import { operateSection } from "./operate";
import { practiceExamThreeStoreSection } from "./store";
import { practiceExamThreeStoreV2Section } from "./storeV2";
import { practiceExamThreeStoreV3Section } from "./storeV3";

export const practiceExamThreeSections: readonly AnyQuestionSection[] = [
  designSection,
  practiceExamThreeIngestSection,
  practiceExamThreeStoreSection,
  analyzeSection,
  operateSection,
];
export const practiceExamThreeV2Sections: readonly AnyQuestionSection[] = [designSection, practiceExamThreeIngestSection, practiceExamThreeStoreV2Section, analyzeSection, operateSection];
export const practiceExamThreeV3Sections: readonly AnyQuestionSection[] = [designSection, practiceExamThreeIngestV3Section, practiceExamThreeStoreV3Section, analyzeSection, operateSection];
export const practiceExamThreeV4Sections: readonly AnyQuestionSection[] = [practiceExamThreeDesignV4Section, practiceExamThreeIngestV4Section, practiceExamThreeStoreV3Section, analyzeSection, operateSection];
