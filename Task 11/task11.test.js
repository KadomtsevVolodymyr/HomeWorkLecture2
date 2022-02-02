import { makeArmy } from './task11';

describe('transformState', () => {
  test('should return `value: key in the object that you return', () => {
    const result = makeArmy(10);

    expect(result).toStrictEqual({});
  });

});
