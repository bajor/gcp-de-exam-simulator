import { useEffect, useRef } from "react";
import type { ExamCatalogEntry } from "../domain/catalog";
import type { QuestionSet } from "../domain/questions";

interface CatalogScreenProps {
  readonly entries: readonly ExamCatalogEntry[];
  readonly onSelect: (questionSet: QuestionSet) => void;
}

export function CatalogScreen({ entries, onSelect }: CatalogScreenProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main className="catalog-shell">
      <section className="catalog-hero" aria-labelledby="page-title">
        <p className="eyebrow">Professional Data Engineer</p>
        <h1 id="page-title" ref={headingRef} tabIndex={-1}>Choose your practice exam.</h1>
        <p className="lede">
          Full-length original scenarios mapped to exam guide v4.2, with answers checked against
          current Google Cloud documentation.
        </p>

        <div className="catalog-grid">
          {entries.map((entry, index) => entry.availability === "available"
            ? (
                <article className="catalog-card" key={entry.questionSet.id}>
                  <div className="catalog-card-heading">
                    <span className="catalog-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="status-ready">Available</span>
                  </div>
                  <h2>{entry.questionSet.title}</h2>
                  <p>{entry.questionSet.questions.length} questions · {entry.questionSet.durationMinutes / 60} hours</p>
                  <button className="primary-button" onClick={() => onSelect(entry.questionSet)}>
                    Open Practice Exam {index + 1}
                  </button>
                </article>
              )
            : (
                <article className="catalog-card catalog-card-pending" key={entry.id}>
                  <div className="catalog-card-heading">
                    <span className="catalog-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="status-pending">Coming soon</span>
                  </div>
                  <h2>{entry.title}</h2>
                  <p>Questions will appear here after authoring and verification are complete.</p>
                </article>
              ))}
        </div>

        <p className="disclaimer">
          Independent practice project. Not affiliated with or endorsed by Google. Google does not
          publish a passing score, so results are shown only as practice percentages.
        </p>
      </section>
    </main>
  );
}
