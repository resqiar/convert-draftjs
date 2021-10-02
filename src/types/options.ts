export type SelectValue = 'all' | 'header-one' | 'unstyled' | 'code-block';

export interface Options {
  /**
   * all        : return all the blocks
   *
   * header-one : return h1
   *
   * unstyled   : return unstyled blocks
   *
   * code-block : return code block. i.e text inside ``` block
   */
  select?: SelectValue[];
  /**
   * Do you want to keep blank blocks?
   * blank blocks are used to indicate enter or "< br />" tag.
   * if true the result may contain blank strings.
   */
  includeBlank?: boolean;
}

export interface ConvertToPlainOptions extends Options {
  /**
   * Join element of every blocks
   * for example set join to ','
   * will have result "Hello,World"
   *
   * default: space or ' '
   */
  join?: string | undefined;
  /**
   * Do you want to include char and word counter?
   * if true it will return result with sum of chars and words.
   */
  includeCounter?: boolean;
}
