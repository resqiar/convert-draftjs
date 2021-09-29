import { ParsedJson } from './types/parsedjson';
import { Options, SelectValue } from './types/options';

export function convertDraftToArray(
  draftResult: ParsedJson | string,
  options?: Options
) {
  /**
   * Parsed DraftJS result.
   * When input is string that means its not parsed yet.
   */
  const parsedDraft: ParsedJson = parseDraftResult(draftResult);
  /**
   * Array containing the result
   */
  let parsedArray: string[] = [];
  /**
   * Selector options.
   * This selector used to determine what blocks should
   * be extracted, either all, unstyled, header, or code block.
   *
   * default value is 'all'
   *
   * @see SelectValue
   */
  const selector: SelectValue[] = options?.select ?? ['all'];
  /**
   * Do you want to keep blank blocks?
   * blank blocks are used to indicate enter or "< br />" tag.
   * if true the result may contain blank strings.
   */
  const includeBlank: boolean = options?.includeBlank ?? false;
  /**
   * Loop through parsedDraft,
   * search for selector that specified in the options
   * and return back value as an array.
   */
  parsedDraft.blocks.forEach(value => {
    if (
      (!includeBlank ? value.text.length > 0 : true) &&
      (selector[0] !== 'all'
        ? selector.includes(value.type as SelectValue)
        : true)
    ) {
      parsedArray.push(value.text);
    }
  });
  return parsedArray;
}

export function parseDraftResult(draftResult: ParsedJson | string) {
  /**
   * If draftResult is in stringify mode,
   * then parse to JSON. If not simply return back.
   */
  if (typeof draftResult === 'string') {
    return JSON.parse(draftResult);
  }
  return draftResult;
}
