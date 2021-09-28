import { convertDraftToArray } from '../src/index';
import { mockData } from './mocks/data';

describe('export convertDraft()', () => {
  it('The function should return an array of characters', () => {
    // expected result = [String, String, String,]
    const expectedResult = ['A', 'B', 'C'];
    const parsedMockData = JSON.parse(mockData);
    console.log(parsedMockData);
    expect(convertDraftToArray(parsedMockData)).toEqual(expectedResult);
  });
});
