import { convertDraftToPlain } from '../src/index';
import { rawData } from './mocks/data';

describe('convertToPlain', () => {
  it('The function should return string result', () => {
    const expectedResult = { result: 'TEST A B C alert("Test!");' };
    expect(convertDraftToPlain(rawData)).toEqual(expectedResult);
  });

  it('The function should return string result separated by comma', () => {
    const expectedResult = { result: 'TEST,A,B,C,alert("Test!");' };
    expect(
      convertDraftToPlain(rawData, {
        join: ',',
      })
    ).toEqual(expectedResult);
  });

  it('The function should return string result with no separated', () => {
    const expectedResult = { result: 'TESTABCalert("Test!");' };
    expect(
      convertDraftToPlain(rawData, {
        join: '',
      })
    ).toEqual(expectedResult);
  });

  it('The function should return string result with char and word counter', () => {
    const expectedResult = {
      result: 'TEST A B C alert("Test!");',
      chars: 26,
      words: 5,
    };
    expect(
      convertDraftToPlain(rawData, {
        includeCounter: true,
      })
    ).toEqual(expectedResult);
  });

  it('The function should return string result with char and word counter even with join option', () => {
    const expectedResult = {
      result: 'TEST-A-B-C-alert("Test!");',
      chars: 26,
      words: 5,
    };
    expect(
      convertDraftToPlain(rawData, {
        includeCounter: true,
        join: '-',
      })
    ).toEqual(expectedResult);
  });
});
