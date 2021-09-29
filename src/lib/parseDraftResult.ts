import { ParsedJson } from '../types/parsedjson';

export default function parseDraftResult(draftResult: ParsedJson | string) {
  /**
   * If draftResult is in stringify mode,
   * then parse to JSON. If not simply return back.
   */
  if (typeof draftResult === 'string') {
    return JSON.parse(draftResult);
  }
  return draftResult;
}
