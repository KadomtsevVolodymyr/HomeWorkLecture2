import { reverseWords } from './task5';

describe('reverseWords', () => {
  test('should reverse all words in string', () => {
    const result = reverseWords('double  spaces');

    expect(result).toBe('elbuod  secaps');
  });

  test('should reverse all words in string', () => {
    const result = reverseWords('The quick brown fox jumps over the lazy dog.');

    expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
  });


  test('should reverse all words in string', () => {
    const result = reverseWords('Yellow black');

    expect(result).toBe('wolleY kcalb');
  });

  test('should reverse all words in string', () => {
    const result = reverseWords('Extrawest company');

    expect(result).toBe('tsewartxE ynapmoc');
  });

});
