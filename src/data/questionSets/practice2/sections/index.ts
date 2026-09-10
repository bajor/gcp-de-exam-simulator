import type { AnyQuestionSection } from "../../../../domain/questions";
import { analyzeSection } from "./analyze";
import { practice2DesignSection } from "./design";
import { practice2DesignV2Section } from "./designV2";
import { practiceExamTwoIngestSection } from "./ingest";
import { practiceExamTwoIngestV2Section } from "./ingestV2";
import { practiceExamTwoIngestV3Section } from "./ingestV3";
import { operateSection } from "./operate";
import { practiceExamTwoStoreSection } from "./store";
import { practiceExamTwoStoreV4Section } from "./storeV4";

export const practiceExamTwoV1Sections: readonly AnyQuestionSection[] = [
  practice2DesignSection,
  practiceExamTwoIngestSection,
  practiceExamTwoStoreSection,
  analyzeSection,
  operateSection,
];

export const practiceExamTwoV2Sections: readonly AnyQuestionSection[] = [
  practice2DesignV2Section,
  practiceExamTwoIngestV2Section,
  practiceExamTwoStoreSection,
  analyzeSection,
  operateSection,
];

export const practiceExamTwoV3Sections: readonly AnyQuestionSection[] = [
  practice2DesignV2Section,
  practiceExamTwoIngestV3Section,
  practiceExamTwoStoreSection,
  analyzeSection,
  operateSection,
];

export const practiceExamTwoV4Sections: readonly AnyQuestionSection[] = [
  practice2DesignV2Section, practiceExamTwoIngestV3Section, practiceExamTwoStoreV4Section, analyzeSection, operateSection,
];
