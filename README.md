## Convert DraftJS

Easily convert the result of DraftJS into useful and easy to read data.
For example; Array of text, plain text, etc.

<p>
<img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/resqiar/convert-draftjs/CI/main">
<img src="https://badge.fury.io/js/convert-draftjs.svg" alt="npm version" height="18">
<img alt="npm" src="https://img.shields.io/npm/dw/convert-draftjs">
</p>

Content:

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Convert to Array](#convert-to-array)
- [Convert to Plain Text](#convert-to-plain-text)
  - [Options](#special-options)
- [Global Options](#global-options)

# Installation

```bash
# npm
npm install --save convert-draftjs

# yarn
yarn add convert-draftjs
```

# Basic Usage

#### Convert editor state directly

```typescript
import { convertDraftToArray } from 'convert-draftjs';

// from draftjs raw content state
const result: string[] = convertDraftToArray(editorState.getCurrentContent());

// ["Hello", "World", ...]
```

#### Convert from the database (usually stringified json)

```typescript
import { convertDraftToArray } from 'convert-draftjs';

// from database (JSON or string)
const mockDataFromDatabase =
  '{"blocks":[{"key":"5aeg1","text":"TEST","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}';

const result: string[] = convertDraftToArray(mockDataFromDatabase);

// ["TEST"]
```

# Convert to Array

Easily convert the result or the current state of DraftJS into an array of text.

```typescript
import { convertDraftToArray } from 'convert-draftjs';

const result: string[] = convertDraftToArray(draftResult);

// ["Hello", "World"]
```

# Convert to Plain Text

Easily convert the result or the current state of DraftJS into plain strings.

```ts
import { convertDraftToPlain } from 'convert-draftjs';

convertDraftToPlain(draftjsResult);

// result
{
  result: 'Hello World',
}
```

### Special Options

`join: string | undefined`

Default: ' '

Set this options to anything to set join element between blocks. For example:

```ts
convertDraftToPlain(draftjsResult, {
  join: '.',
});

// result
{
  result: 'Hello.World',
}
```

<hr />

`includeCounter: boolean`

Default: false

Do you want to include char and word counter?
if true it will return result with sum of chars and words. This is very useful for example when you want to determine reading time for each content.

```ts
convertDraftToPlain(draftjsResult, {
  includeCounter: true,
});

// result
{
  result: 'Hello World',
  chars: 11,
  words: 2,
}
```

## Global Options

#### select: [ 'all' | 'header-one' | 'unstyled' | 'code-block' ]

Default: `all` <br />
Options `all | unstyled | header-one | code-block`

You may want to target the specific draftjs blocks, for example if you want to get code block, select should be `code-block`

```ts
const codeBlock: string[] = convertDraftToArray(data, {
  select: ['code-block'],
});

// ["console.log();", "alert();", ...]
```

#### includeBlank: boolean

Default: `false`

Usually, blank string represent enter or "< br />" tag when user input a content. when includeBlank set to true, you may receive blank string value in the array.

```ts
const codeBlock: string[] = convertDraftToArray(data, {
  includeBlank: true,
});

// ["Hello", "", "World", "", ...]
```
