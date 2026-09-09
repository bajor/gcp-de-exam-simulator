import type { AnyQuestionSection } from "../../../domain/questions";
import { analyzeSection } from "./analyze";
import { analyzeV2Section } from "./analyzeV2";
import { analyzeV3Section } from "./analyzeV3";
import { designSection } from "./design";
import { designV4Section } from "./designV4";
import { designV5Section } from "./designV5";
import { ingestSection } from "./ingest";
import { ingestV4Section } from "./ingestV4";
import { ingestV6Section } from "./ingestV6";
import { operateSection } from "./operate";
import { operateV2Section } from "./operateV2";
import { operateV3Section } from "./operateV3";
import { storeSection } from "./store";

export const practiceV1Sections: readonly AnyQuestionSection[] = [
  designSection,
  ingestSection,
  storeSection,
  analyzeSection,
  operateSection,
];

export const practiceV2Sections: readonly AnyQuestionSection[] = [
  designSection,
  ingestSection,
  storeSection,
  analyzeV2Section,
  operateV2Section,
];

export const practiceV3Sections: readonly AnyQuestionSection[] = [
  designSection,
  ingestSection,
  storeSection,
  analyzeV3Section,
  operateV3Section,
];

export const practiceV4Sections: readonly AnyQuestionSection[] = [
  designV4Section,
  ingestV4Section,
  storeSection,
  analyzeV3Section,
  operateV3Section,
];

export const practiceV5Sections: readonly AnyQuestionSection[] = [
  designV5Section,
  ingestV4Section,
  storeSection,
  analyzeV3Section,
  operateV3Section,
];

export const practiceV6Sections: readonly AnyQuestionSection[] = [
  designV5Section,
  ingestV6Section,
  storeSection,
  analyzeV3Section,
  operateV3Section,
];
