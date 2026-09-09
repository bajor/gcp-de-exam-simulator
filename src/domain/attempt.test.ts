import { describe, expect, it } from "vitest";
import { fixtureQuestionSet, multipleQuestion, singleQuestion } from "../test/fixtures";
import {
  answerQuestion,
  attemptStorageKey,
  createAttempt,
  legacyAttemptStorageKey,
  loadAttempt,
  scoreAttempt,
} from "./attempt";

describe("attempt scoring", () => {
  it("scores a matching single choice as correct", () => {
    const score = scoreAttempt(fixtureQuestionSet, { [singleQuestion.id]: ["a"] });
    expect(score.correctQuestionIds.has(singleQuestion.id)).toBe(true);
  });

  it("scores multiple choices independently of selection order", () => {
    const score = scoreAttempt(fixtureQuestionSet, { [multipleQuestion.id]: ["c", "a"] });
    expect(score.correctQuestionIds.has(multipleQuestion.id)).toBe(true);
  });

  it("scores a partial multiple selection as incorrect", () => {
    const score = scoreAttempt(fixtureQuestionSet, { [multipleQuestion.id]: ["a"] });
    expect(score.correctQuestionIds.has(multipleQuestion.id)).toBe(false);
  });

  it("counts a wrong answer as zero correct", () => {
    const oneQuestionSet = { ...fixtureQuestionSet, questions: [singleQuestion] };
    const score = scoreAttempt(oneQuestionSet, { [singleQuestion.id]: ["b"] });
    expect(score.correct).toBe(0);
  });

  it("counts an unanswered question as zero correct", () => {
    const oneQuestionSet = { ...fixtureQuestionSet, questions: [singleQuestion] };
    const score = scoreAttempt(oneQuestionSet, {});
    expect(score.correct).toBe(0);
  });

  it("counts correct answers within their exam section", () => {
    const score = scoreAttempt(fixtureQuestionSet, { [singleQuestion.id]: ["a"] });
    expect(score.sections.design.correct).toBe(1);
  });

  it("counts total questions within their exam section", () => {
    const score = scoreAttempt(fixtureQuestionSet, {});
    expect(score.sections.design.total).toBe(1);
  });

  it("rounds fractional section percentages to one decimal place", () => {
    const secondQuestion = { ...singleQuestion, id: "fixture-q3" };
    const thirdQuestion = { ...singleQuestion, id: "fixture-q4" };
    const threeQuestionSet = {
      ...fixtureQuestionSet,
      questions: [singleQuestion, secondQuestion, thirdQuestion],
    };
    const score = scoreAttempt(threeQuestionSet, { [singleQuestion.id]: ["a"] });
    expect(score.sections.design.percentage).toBe(33.3);
  });

  it("rounds fractional percentages to one decimal place", () => {
    const thirdQuestion = { ...singleQuestion, id: "fixture-q3" };
    const threeQuestionSet = { ...fixtureQuestionSet, questions: [...fixtureQuestionSet.questions, thirdQuestion] };
    const score = scoreAttempt(threeQuestionSet, { [singleQuestion.id]: ["a"] });
    expect(score.percentage).toBe(33.3);
  });
});

describe("answer selection", () => {
  it("does not exceed a multiple question selection limit", () => {
    let attempt = createAttempt(fixtureQuestionSet, 1);
    attempt = answerQuestion(attempt, multipleQuestion, "a");
    attempt = answerQuestion(attempt, multipleQuestion, "c");
    attempt = answerQuestion(attempt, multipleQuestion, "e");
    expect(attempt.answers[multipleQuestion.id]).toEqual(["a", "c"]);
  });
});

describe("attempt persistence", () => {
  it("uses a distinct key for each question set", () => {
    const otherSet = { ...fixtureQuestionSet, id: "other-set" };
    expect(attemptStorageKey(otherSet)).not.toBe(attemptStorageKey(fixtureQuestionSet));
  });

  it("uses a distinct key for each question set version", () => {
    const nextVersion = { ...fixtureQuestionSet, version: fixtureQuestionSet.version + 1 };
    expect(attemptStorageKey(nextVersion)).not.toBe(attemptStorageKey(fixtureQuestionSet));
  });

  it("restores compatible state with the original deadline", () => {
    const attempt = createAttempt(fixtureQuestionSet, 1_000);
    const storage = memoryStorage(JSON.stringify(attempt));
    expect(loadAttempt(fixtureQuestionSet, storage)?.deadline).toBe(attempt.deadline);
  });

  it("discards malformed stored state", () => {
    const storage = memoryStorage("not-json");
    expect(loadAttempt(fixtureQuestionSet, storage)).toBeNull();
  });

  it("discards a single-choice answer with multiple selections", () => {
    const attempt = createAttempt(fixtureQuestionSet, 1_000);
    const invalid = { ...attempt, answers: { [singleQuestion.id]: ["a", "b"] } };
    const storage = memoryStorage(JSON.stringify(invalid));
    expect(loadAttempt(fixtureQuestionSet, storage)).toBeNull();
  });

  it("discards a deadline that changes the configured duration", () => {
    const attempt = createAttempt(fixtureQuestionSet, 1_000);
    const invalid = { ...attempt, deadline: attempt.deadline + 1 };
    const storage = memoryStorage(JSON.stringify(invalid));
    expect(loadAttempt(fixtureQuestionSet, storage)).toBeNull();
  });

  it("discards duplicate review marks", () => {
    const attempt = createAttempt(fixtureQuestionSet, 1_000);
    const invalid = { ...attempt, markedQuestionIds: [singleQuestion.id, singleQuestion.id] };
    const storage = memoryStorage(JSON.stringify(invalid));
    expect(loadAttempt(fixtureQuestionSet, storage)).toBeNull();
  });

  it("treats unavailable browser storage as empty", () => {
    const storage = {
      getItem: () => { throw new Error("blocked"); },
      setItem: () => undefined,
      removeItem: () => undefined,
    };
    expect(loadAttempt(fixtureQuestionSet, storage)).toBeNull();
  });

  it("migrates a compatible legacy attempt to its set-specific key", () => {
    const attempt = createAttempt(fixtureQuestionSet, 1_000);
    const storage = memoryStorage(JSON.stringify(attempt), legacyAttemptStorageKey);
    loadAttempt(fixtureQuestionSet, storage);
    expect([
      storage.getItem(attemptStorageKey(fixtureQuestionSet)),
      storage.getItem(legacyAttemptStorageKey),
    ]).toEqual([JSON.stringify(attempt), null]);
  });

  it("preserves a legacy attempt when another set loads", () => {
    const attempt = createAttempt(fixtureQuestionSet, 1_000);
    const otherSet = { ...fixtureQuestionSet, id: "other-set" };
    const stored = JSON.stringify(attempt);
    const storage = memoryStorage(stored, legacyAttemptStorageKey);
    expect({
      loaded: loadAttempt(otherSet, storage),
      legacy: storage.getItem(legacyAttemptStorageKey),
    }).toEqual({ loaded: null, legacy: stored });
  });
});

function memoryStorage(
  initialValue: string | null = null,
  initialKey = attemptStorageKey(fixtureQuestionSet),
) {
  const values = new Map<string, string>();
  if (initialValue) values.set(initialKey, initialValue);
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
    removeItem: (key: string) => values.delete(key),
  };
}
