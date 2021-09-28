import { ParsedJson } from './types/parsedjson';
import { Options } from './types/options';

export function convertDraftToArray(
  draftResult: ParsedJson | string,
  options?: Options
) {
  const parsedDraft: ParsedJson = parseDraftResult(draftResult);
  let parsedArray: string[] = [];

  parsedDraft.blocks.forEach(value => {
    if (
      value.text.length > 0 &&
      value.type === (options?.select ?? 'unstyled')
    ) {
      parsedArray.push(value.text);
    }
  });

  return parsedArray;
}

/**
 * If draftResult is in stringify mode,
 * then parse to JSON. If not simply return back.
 */
export function parseDraftResult(draftResult: ParsedJson | string) {
  if (typeof draftResult === 'string') {
    return JSON.parse(draftResult);
  }
  return draftResult;
}
