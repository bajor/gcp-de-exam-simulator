import { useEffect, useState } from "react";
import { ConfirmDialog } from "./components/ConfirmDialog";
import { CatalogScreen } from "./components/CatalogScreen";
import { ExamScreen } from "./components/ExamScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { StartScreen } from "./components/StartScreen";
import {
  answerQuestion,
  clearAttempt,
  completeAttempt,
  createAttempt,
  loadAttempt,
  saveAttempt,
  scoreAttempt,
  type Attempt,
  type InProgressAttempt,
} from "./domain/attempt";
import type { ExamCatalogEntry } from "./domain/catalog";
import type { ChoiceId, QuestionSet } from "./domain/questions";
import { examCatalog } from "./data/questionSets";

interface AppProps {
  readonly catalog?: readonly ExamCatalogEntry[];
}

const selectedSetStorageKey = "pde-practice-selected-set-v1";

export function App({ catalog = examCatalog }: AppProps) {
  const [initialSelection] = useState(() => restoreSelection(catalog));
  const [questionSet, setQuestionSet] = useState<QuestionSet | null>(initialSelection?.questionSet ?? null);
  const [attempt, setAttempt] = useState<Attempt | null>(initialSelection?.attempt ?? null);
  const [confirmingRestart, setConfirmingRestart] = useState(false);

  useEffect(() => {
    if (attempt) saveAttempt(attempt);
  }, [attempt]);

  if (!questionSet) {
    return <CatalogScreen entries={catalog} onSelect={(selected) => {
      rememberSelection(selected);
      setQuestionSet(selected);
      setAttempt(restore(selected));
    }} />;
  }
  if (!attempt) {
    return (
      <StartScreen
        questionSet={questionSet}
        onBack={() => {
          forgetSelection();
          setQuestionSet(null);
        }}
        onStart={() => setAttempt(createAttempt(questionSet))}
      />
    );
  }

  if (attempt.status === "completed") {
    return (
      <>
        <ResultsScreen
          questionSet={questionSet}
          attempt={attempt}
          score={scoreAttempt(questionSet, attempt.answers)}
          onChooseExam={() => {
            forgetSelection();
            setQuestionSet(null);
            setAttempt(null);
          }}
          onRestart={() => setConfirmingRestart(true)}
        />
        {confirmingRestart && (
          <ConfirmDialog
            title="Replace this result?"
            cancelLabel="Keep result"
            confirmLabel="Start new attempt"
            onCancel={() => setConfirmingRestart(false)}
            onConfirm={() => {
              clearAttempt(questionSet);
              setConfirmingRestart(false);
              setAttempt(createAttempt(questionSet));
            }}
          >
            <p>Your completed attempt will be removed from this browser.</p>
          </ConfirmDialog>
        )}
      </>
    );
  }

  const update = (change: (current: InProgressAttempt) => InProgressAttempt) => {
    setAttempt((current) => current?.status === "in-progress" ? change(current) : current);
  };
  const question = questionSet.questions[attempt.currentQuestionIndex];

  return (
    <ExamScreen
      questionSet={questionSet}
      attempt={attempt}
      onAnswer={(choiceId: ChoiceId) => update((current) => answerQuestion(current, question, choiceId))}
      onNavigate={(currentQuestionIndex) => update((current) => ({ ...current, currentQuestionIndex }))}
      onToggleMark={() => update((current) => {
        const marked = current.markedQuestionIds.includes(question.id);
        return {
          ...current,
          markedQuestionIds: marked
            ? current.markedQuestionIds.filter((id) => id !== question.id)
            : [...current.markedQuestionIds, question.id],
        };
      })}
      onFinish={() => setAttempt((current) => current?.status === "in-progress" ? completeAttempt(current) : current)}
      onExpire={() => setAttempt((current) => current?.status === "in-progress" ? completeAttempt(current) : current)}
    />
  );
}

function restore(questionSet: QuestionSet): Attempt | null {
  const restored = loadAttempt(questionSet);
  return restored?.status === "in-progress" && restored.deadline <= Date.now()
    ? completeAttempt(restored, restored.deadline)
    : restored;
}

function restoreSelection(catalog: readonly ExamCatalogEntry[]) {
  try {
    const selectedId = localStorage.getItem(selectedSetStorageKey);
    const entry = catalog.find((candidate) =>
      candidate.availability === "available" && candidate.questionSet.id === selectedId
    );
    if (!entry || entry.availability !== "available") return null;
    return { questionSet: entry.questionSet, attempt: restore(entry.questionSet) };
  } catch {
    return null;
  }
}

function rememberSelection(questionSet: QuestionSet) {
  try {
    localStorage.setItem(selectedSetStorageKey, questionSet.id);
  } catch {
    // Selection remains usable in memory when browser storage is unavailable.
  }
}

function forgetSelection() {
  try {
    localStorage.removeItem(selectedSetStorageKey);
  } catch {
    // Storage may be blocked by browser policy.
  }
}
