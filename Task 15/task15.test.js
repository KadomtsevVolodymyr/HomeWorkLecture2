import { squareList } from './task15';

describe('squareList', () => {
  test('should remove the non-integer numbers and square the rest to be [16, 1764, 36]', () => {
    const result = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

    expect(result).toStrictEqual([16, 1764, 36]);
  });

  test('should remove the non-integer numbers and square the rest to be [9, 100, 49]', () => {
    const result = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);

    expect(result).toStrictEqual([9, 100, 49]);
  });
 
});
