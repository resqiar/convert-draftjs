import { parseDraftResult } from '../src';
import { rawData, parsedData } from './mocks/data';

describe('parseDraftResult function', () => {
  it('it should parse string value to valid draftjs json format', () => {
    expect(parseDraftResult(rawData)).toEqual(parsedData);
  });

  it('it should still return JSON format if the input is also a JSON', () => {
    expect(parseDraftResult(parsedData)).toEqual(parsedData);
  });
});
