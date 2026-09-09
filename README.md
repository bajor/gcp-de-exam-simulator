# Google Cloud Professional Data Engineer Practice Exams

A documentation-backed exam simulator for the Google Cloud Professional Data Engineer certification.

The simulator includes one 50-question practice exam mapped to Professional Data Engineer exam guide v4.2. Every question has passed structural validation, live source verification, and independent semantic review.

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

Question-bank changes must also run `make verify-sources`. The command structurally validates every registered draft section and candidate set, then fetches every unique evidence URL before activation.

## Question Authoring

The project-local [`gcp-pde-question-authoring`](.opencode/skills/gcp-pde-question-authoring/SKILL.md) skill defines the mandatory original-content, Google-source, typed-section, and author-handoff workflow. Complete sections are registered under `src/data/questionSets/sections/`; partial sections cannot enter the candidate or active registries. A separate session uses [`gcp-pde-question-review`](.opencode/skills/gcp-pde-question-review/SKILL.md) to perform final independent review and generate the content-bound acceptance record.

## Deployment

Merges to `main` build and deploy the independently accepted active exam to [GitHub Pages](https://bajor.github.io/gcp-de-exam-simulator/).

## Documentation

Project requirements, decisions, behavior, research, and architecture are indexed in [`docs/index.md`](docs/index.md).
