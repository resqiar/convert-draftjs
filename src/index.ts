import { ParsedJson } from './types/parsedjson';
import { Options } from './types/options';

export function convertDraftToArray(
  draftResult: ParsedJson,
  options?: Options
) {
  let parsedArray: string[] = [];

  if (typeof draftResult === 'string') {
    JSON.parse(draftResult);
  }

  draftResult.blocks.forEach(value => {
    if (
      value.text.length > 0 &&
      value.type === (options?.select ?? 'unstyled')
    ) {
      parsedArray.push(value.text);
    }
  });

  return parsedArray;
}
