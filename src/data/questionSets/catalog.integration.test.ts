import { expect, it } from "vitest";
import { questionSetContentSha256 } from "../../domain/questions";
import { examCatalog } from ".";

it("keeps the accepted first practice exam content immutable", () => {
  const entry = examCatalog[0];
  if (entry.availability !== "available") throw new Error("Practice Exam 1 must be available.");
  expect(questionSetContentSha256(entry.questionSet)).toBe(
    "dcda3df67f3a2c70bc824a4c83f9ffa1444c7052606bbfa9ccaa5a66b42aefb6",
  );
});
