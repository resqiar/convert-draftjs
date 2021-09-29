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
