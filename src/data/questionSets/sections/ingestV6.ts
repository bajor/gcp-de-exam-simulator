import type { QuestionSection } from "../../../domain/questions";
import { ingestV4Section } from "./ingestV4";

export const ingestV6Section = {
  section: "ingest",
  author: "gpt-5.6-sol-ingest-v6-20260908",
  questions: ingestV4Section.questions.map((question) => question.id === "pde-v42-ingest-08"
    ? {
        id: "pde-v42-ingest-08",
        kind: "single",
        section: "ingest",
        objective: "2.2 Building the pipelines: AI data enrichment",
        prompt: "A nightly set of English-language PDF invoices is stored under a Cloud Storage prefix. Within documented request limits, a pipeline must extract structured invoice entities such as invoice ID, supplier name, due date, total amount, and line-item quantities and unit prices. The team requires a generally available pretrained processor, one asynchronous request for the set, JSON results in Cloud Storage, and no custom extraction schema or model training. What should the team do?",
        verifiedOn: "2026-09-08",
        evidence: [
          {
            id: "invoice-parser",
            title: "Processor list",
            url: "https://docs.cloud.google.com/document-ai/docs/processors-list#processor_invoice-processor",
            claim: "Document AI Invoice Parser is generally available and extracts predefined invoice header and line-item entities; pretrained-invoice-v2.0-2023-12-06 is a stable GA version.",
          },
          {
            id: "document-ai-batch",
            title: "Send a processing request",
            url: "https://docs.cloud.google.com/document-ai/docs/send-request#batch-processing",
            claim: "Document AI batch processing accepts multiple documents or a Cloud Storage prefix in one asynchronous request and stores processed results in Cloud Storage, while online processing accepts one document synchronously.",
          },
          {
            id: "vision-pdf-ocr",
            title: "Detect text in files (PDF/TIFF)",
            url: "https://docs.cloud.google.com/vision/docs/pdf",
            claim: "Cloud Vision can asynchronously transcribe Cloud Storage PDF files to JSON in Cloud Storage, but its offline PDF features are text detection rather than invoice entity extraction.",
          },
        ],
        choices: [
          {
            id: "a",
            text: "Create a Document AI Invoice Parser using stable version pretrained-invoice-v2.0-2023-12-06, and call batchProcess with the input Cloud Storage prefix and an output Cloud Storage folder.",
            feedback: "Invoice Parser supplies the required predefined invoice entities without a custom schema, and batch processing provides one asynchronous Cloud Storage input and output operation.",
            evidenceIds: ["invoice-parser", "document-ai-batch"],
          },
          {
            id: "b",
            text: "Create the same Invoice Parser, but invoke the online process method separately for every invoice and collect each synchronous response in the client.",
            feedback: "Invoice Parser extracts the entities, but online processing handles one document synchronously and does not meet the single asynchronous set-processing requirement.",
            evidenceIds: ["invoice-parser", "document-ai-batch"],
          },
          {
            id: "c",
            text: "Create an Enterprise Document OCR processor using stable version pretrained-ocr-v2.1-2024-08-07, and submit the Cloud Storage prefix through batchProcess.",
            feedback: "Batch processing provides the required asynchronous flow, but Enterprise Document OCR extracts text and assesses quality rather than supplying the predefined invoice entities.",
            evidenceIds: ["invoice-parser", "document-ai-batch"],
          },
          {
            id: "d",
            text: "Call Cloud Vision files:asyncBatchAnnotate with DOCUMENT_TEXT_DETECTION for the invoice PDFs and use its Cloud Storage JSON output directly as the structured invoice records.",
            feedback: "Cloud Vision can asynchronously write PDF text detection results to Cloud Storage, but it does not extract Invoice Parser's predefined invoice header and line-item entities.",
            evidenceIds: ["vision-pdf-ocr", "invoice-parser"],
          },
        ],
        correctChoiceId: "a",
      }
    : question),
} satisfies QuestionSection<"ingest">;
