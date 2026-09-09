import type { QuestionSection } from "../../../domain/questions";
import { operateV2Section } from "./operateV2";

export const operateV3Section = {
  section: "operate",
  author: "gpt-5.6-sol-operate-v3-20260908",
  questions: operateV2Section.questions.map((question) => question.id === "pde-v42-operate-01"
    ? {
        id: "pde-v42-operate-01",
        kind: "single",
        section: "operate",
        objective: "5.1 Optimizing resources: minimizing costs per required business need for data",
        prompt: "A Dataflow batch pipeline performs CPU-only parsing followed by GPU inference. It currently attaches GPUs to the worker pool for every stage, leaving expensive accelerators idle during parsing. The team must keep both transforms in one Beam pipeline, isolate GPU workers from CPU-only workers, and minimize accelerator cost. The extra shuffle caused by materializing data between stages is acceptable. What should the team change?",
        verifiedOn: "2026-09-08",
        evidence: [
          {
            id: "right-fitting",
            title: "Right fitting",
            url: "https://cloud.google.com/dataflow/docs/guides/right-fitting",
            claim: "Dataflow right fitting applies Beam resource hints to specific transforms, can create separate CPU and GPU worker pools, and can require a fusion break to isolate expensive accelerator resources at the cost of materializing an intermediate PCollection.",
          },
        ],
        choices: [
          {
            id: "a",
            text: "Apply an accelerator resource hint only to the inference transform and force a fusion break between parsing and inference.",
            feedback: "Transform-level right fitting creates separate resource pools, while the accepted fusion break prevents CPU parsing from running in the GPU environment.",
            evidenceIds: ["right-fitting"],
          },
          {
            id: "b",
            text: "Keep one worker pool and set the accelerator resource hint on the entire pipeline.",
            feedback: "A pipeline-wide accelerator hint continues allocating GPU-capable workers to the CPU-only parsing stage, preserving the waste the team must remove.",
            evidenceIds: ["right-fitting"],
          },
          {
            id: "c",
            text: "Apply the accelerator hint to inference but require parsing and inference to remain fused.",
            feedback: "Fused transforms run in an environment satisfying the union of their hints, so the CPU-only work can still execute on the expensive GPU pool.",
            evidenceIds: ["right-fitting"],
          },
          {
            id: "d",
            text: "Enable horizontal autoscaling on the existing all-GPU worker pool without adding resource hints.",
            feedback: "Horizontal scaling changes worker count but does not isolate the CPU-only stage from accelerator-equipped workers.",
            evidenceIds: ["right-fitting"],
          },
        ],
        correctChoiceId: "a",
      }
    : question),
} satisfies QuestionSection<"operate">;
