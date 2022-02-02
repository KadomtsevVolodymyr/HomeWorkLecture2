import { fearNotLetter } from './task16';

describe('transformState', () => {
  test('should return the missing letter d', () => {
    const result = fearNotLetter('abce');

    expect(result).toStrictEqual('d');
  });

  test('hould return the missing letter i', () => {
    const result = fearNotLetter('abcdefghjklmno');

    expect(result).toStrictEqual('i');
  });

  test('hould return the missing letter u', () => {
    const result = fearNotLetter('stvwx');

    expect(result).toStrictEqual('u');
  });

  test('hould return the undefind when all letters are present', () => {
    const result = fearNotLetter('abcdefghijklmnopqrstuvwxyz');

    expect(result).toStrictEqual(undefined);
  });
 
});
