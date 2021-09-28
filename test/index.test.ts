import { convertDraftToArray } from '../src/index';
import { rawData } from './mocks/data';

describe('export convertDraft()', () => {
  it('The function should return an array of characters (Parsed JSON)', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['A', 'B', 'C'];
    const parsedMockData = JSON.parse(rawData);
    expect(convertDraftToArray(parsedMockData)).toEqual(expectedResult);
  });

  it('The function should return an array of characters (Stringify JSON)', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['A', 'B', 'C'];
    expect(convertDraftToArray(rawData)).toEqual(expectedResult);
  });
});
