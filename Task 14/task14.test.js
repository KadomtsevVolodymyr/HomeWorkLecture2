import { frankenSplice } from './task14';

describe('frankenSplice', () => {
  test('should Copy each element of the first array [1, 2, 3] into the second array [4, 5], tobe [4, 1, 2, 3, 5]', () => {
    const result = frankenSplice([1, 2, 3], [4, 5], 1);

    expect(result).toStrictEqual([4, 1, 2, 3, 5]);
  });

  test('should Copy element of the first array [claw, tentacle] into the second array to be [head, shoulders, claw, tentacle, knees, toes]', () => {
    const result = frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2);

    expect(result).toStrictEqual(['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']);
  });

  test('should Copy each element of the first array [1, 2, 3, 4] into the second array [], tobe [1, 2, 3, 4]', () => {
    const result = frankenSplice([1, 2, 3, 4], [], 0);

    expect(result).toStrictEqual([1, 2, 3, 4]);
  });
 
});
