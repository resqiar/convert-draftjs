import { ParsedJson } from '../types/parsedjson';
import { convertDraftToArray } from '..';
import { ConvertToPlainOptions } from '../types/options';
import { ConvertToPlainReturnType } from '../types/return';

/**
 * @param draftResult (JSON or Strings)
 * @param options
 */
export default function convertDraftToPlain(
  draftResult: ParsedJson | string,
  options?: ConvertToPlainOptions
): ConvertToPlainReturnType {
  const joinElement: string = options?.join ?? ' ';
  /**
   * Do you want to include char and word counter?
   * if true it will return result with sum of chars and words.
   * @default ' '
   */
  const isIncludeCounter: boolean = options?.includeCounter ?? false;

  const result: string = convertDraftToArray(draftResult, options).join(
    joinElement
  );

  if (isIncludeCounter) {
    const chars: number = result.length;
    const words: number =
      joinElement.length > 0
        ? result.split(joinElement).filter(function(n) {
            return n != joinElement;
          }).length
        : 1;

    return { result: result, chars: chars, words: words };
  }

  return { result: result };
}
