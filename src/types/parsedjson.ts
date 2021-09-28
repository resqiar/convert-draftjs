export interface Block {
  key: string;
  text: string;
  type: string;
  depth: number;
  inlineStyleRanges: any[];
  entityRanges: any[];
  data: {};
}

export interface ParsedJson {
  blocks: Block[];
  entityMap: {};
}
