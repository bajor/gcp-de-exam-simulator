import { isGoogleOwnedSourceUrl, type DraftQuestionSet, type QuestionSet } from "../src/domain/questions";

interface SourceResponse {
  readonly ok: boolean;
  readonly status: number;
  readonly url: string;
}

export type SourceFetcher = (url: string) => Promise<SourceResponse>;

export const maxConcurrentSourceRequests = 4;
export const maxSourceFetchAttempts = 3;

export function collectEvidenceUrls(
  drafts: readonly DraftQuestionSet[],
  candidates: readonly QuestionSet[],
): string[] {
  return [...new Set([
    ...drafts.flatMap((draft) =>
      draft.sections.flatMap((section) =>
        section.questions.flatMap((question) => question.evidence.map((source) => source.url)),
      ),
    ),
    ...candidates.flatMap((questionSet) =>
      questionSet.questions.flatMap((question) => question.evidence.map((source) => source.url)),
    ),
  ])];
}

export async function findSourceFailures(urls: readonly string[], fetchSource: SourceFetcher): Promise<string[]> {
  const results: (string | null)[] = [];
  for (let start = 0; start < urls.length; start += maxConcurrentSourceRequests) {
    const batch = urls.slice(start, start + maxConcurrentSourceRequests);
    const batchResults = await Promise.all(
      batch.map(async (url) => {
      try {
        const response = await fetchSourceWithRetry(url, fetchSource);
        if (!response.ok) return `${url}: HTTP ${response.status}`;
        return isGoogleOwnedSourceUrl(response.url) ? null : `${url}: redirected to non-Google source ${response.url}`;
      } catch (error) {
        return `${url}: ${error instanceof Error ? error.message : "request failed"}`;
      }
      }),
    );
    results.push(...batchResults);
  }
  return results.filter((result): result is string => result !== null);
}

async function fetchSourceWithRetry(url: string, fetchSource: SourceFetcher): Promise<SourceResponse> {
  let response = await fetchSource(url);
  for (let attempt = 1; attempt < maxSourceFetchAttempts && isTransientStatus(response.status); attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, attempt * 1_000));
    response = await fetchSource(url);
  }
  return response;
}

function isTransientStatus(status: number): boolean {
  return status === 408 || status === 429 || status >= 500;
}
