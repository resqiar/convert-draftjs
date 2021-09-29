import { convertDraftToArray } from '../src/index';
import { rawData } from './mocks/data';

describe('default function', () => {
  it('The function should return an array of characters (Parsed JSON)', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['TEST', 'A', 'B', 'C', 'alert("Test!");'];
    const parsedMockData = JSON.parse(rawData);
    expect(convertDraftToArray(parsedMockData)).toEqual(expectedResult);
  });

  it('The function should return an array of characters (Stringify JSON)', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['TEST', 'A', 'B', 'C', 'alert("Test!");'];
    expect(convertDraftToArray(rawData)).toEqual(expectedResult);
  });
});

describe('with options', () => {
  it('The function should return an array of unstyled when the select contains only unstyled', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['A', 'B', 'C'];
    expect(
      convertDraftToArray(rawData, {
        select: ['unstyled'],
      })
    ).toEqual(expectedResult);
  });

  it('The function should return an array of h1 when the select contains only header-one', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['TEST'];
    expect(
      convertDraftToArray(rawData, {
        select: ['header-one'],
      })
    ).toEqual(expectedResult);
  });

  it('The function should return an array of codeblock when the select contains only code-block', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['alert("Test!");'];
    expect(
      convertDraftToArray(rawData, {
        select: ['code-block'],
      })
    ).toEqual(expectedResult);
  });

  it('The function should return all elements including blank strings when the options include blank', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['TEST', 'A', 'B', 'C', 'alert("Test!");', ''];
    expect(
      convertDraftToArray(rawData, {
        select: ['all'],
        includeBlank: true,
      })
    ).toEqual(expectedResult);
  });
});
