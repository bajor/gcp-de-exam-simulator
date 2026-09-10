# Google Cloud Professional Data Engineer Practice Exams

A documentation-backed exam simulator for the Google Cloud Professional Data Engineer certification.

The simulator includes three available 50-question practice exams mapped to Professional Data Engineer exam guide v4.2. Every available question has passed structural validation, live source verification, and independent semantic review.

## Local Development

Node.js 22.22.2 or later is required.

```sh
npm install
npm run dev
```

Run the complete documentation, type, lint, unit, build, and browser-test gate with:

```sh
make test
```

Question-bank changes must also run `make verify-sources`. The command structurally validates every registered draft section and candidate set, verifies indexed audit records against immutable candidates, and fetches every unique evidence URL before publication.

## Question Authoring

The project-local [`gcp-pde-question-authoring`](.opencode/skills/gcp-pde-question-authoring/SKILL.md) skill defines the mandatory original-content, Google-source, typed-section, and author-handoff workflow. New exams use isolated modules under `src/data/questionSets/practice<number>/`; partial sections cannot enter the candidate registry or runtime catalog. A separate session uses [`gcp-pde-question-review`](.opencode/skills/gcp-pde-question-review/SKILL.md) to perform final independent review and generate a content-bound audit record.

## Deployment

Merges to `main` automatically build and deploy the exam catalog to [GitHub Pages](https://bajor.github.io/gcp-de-exam-simulator/).

## Documentation

Project requirements, decisions, behavior, research, and architecture are indexed in [`docs/index.md`](docs/index.md).
