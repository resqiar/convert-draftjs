import { convertDraftToPlain } from '../src/index';
import { rawData } from './mocks/data';

describe('convertToPlain', () => {
  it('The function should return string result and sums of chars', () => {
    const expectedResult = { chars: 26, result: 'TEST A B C alert("Test!");' };
    expect(convertDraftToPlain(rawData)).toEqual(expectedResult);
  });

  it('The function should return string result separated by comma', () => {
    const expectedResult = { chars: 26, result: 'TEST,A,B,C,alert("Test!");' };
    expect(
      convertDraftToPlain(rawData, {
        join: ',',
      })
    ).toEqual(expectedResult);
  });

  it('The function should return string result with no separated', () => {
    const expectedResult = { chars: 22, result: 'TESTABCalert("Test!");' };
    expect(
      convertDraftToPlain(rawData, {
        join: '',
      })
    ).toEqual(expectedResult);
  });
});
