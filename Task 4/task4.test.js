import { moveZeros } from './task4';

describe('moveZeros', () => {
  test('should replace 2 zero to the end', () => {
    const result = moveZeros([false,1,0,1,2,0,1,3,'a']);

    expect(result).toStrictEqual([false,1,1,2,1,3,'a',0,0]);
  });

  test('should replace 4 zero to the end', () => {
    const result = moveZeros([true,0,0,0,22,0,false,'null','a']);

    expect(result).toStrictEqual([true,22,false,'null','a',0,0,0,0]);
  });


});
