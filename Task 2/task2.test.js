import { openOrSenior } from './task2';

describe('openOrSenior', () => {
  test('should return a list with Open, Senior, Open, Senior when we have [31, 10],[55,23],[20, 0],[41, 16]', () => {
    const result = openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]]);

    expect(result).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
  });

  test('should return a list with four Open when we have [34, 11],[55,7],[39, 16],[38, 14]', () => {
    const result = openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]]);

    expect(result).toStrictEqual(['Open', 'Open', 'Open', 'Open']);
  });

  test('should return a list with Senior when we have [45, 17],[55,27],[69, 16],[222, 47]', () => {
    const result = openOrSenior([[45, 17],[55,27],[69, 16],[222, 47]]);

    expect(result).toStrictEqual(['Senior', 'Senior', 'Senior', 'Senior']);
  });

  test('should return a list with Senior Open Senior Open when we have [41, 15],[10,7],[77, 16],[38, 14]', () => {
    const result = openOrSenior([[41, 15],[10,7],[77, 16],[38, 14]]);

    expect(result).toStrictEqual(['Senior', 'Open', 'Senior', 'Open']);
  });

});
