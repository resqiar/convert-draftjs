import { ParsedJson } from '../types/parsedjson';
import { Options } from '../types/options';
import { convertDraftToArray } from '..';

interface ConvertToPlainOptions extends Options {
  /**
   * Join element of every blocks
   * for example set join to ','
   * will have result "Hello,World"
   *
   * default: space or ' '
   */
  join?: string | undefined;
}

/**
 * @param draftResult (JSON or Strings)
 * @param options
 * @returns plain string and sums of characters
 */
export default function convertDraftToPlain(
  draftResult: ParsedJson | string,
  options?: ConvertToPlainOptions
): { result: string; chars: number } {
  const joinElement: string = options?.join ?? ' ';

  const result: string = convertDraftToArray(draftResult, options).join(
    joinElement
  );
  const counter: number = result.length;
  return { result: result, chars: counter };
}
