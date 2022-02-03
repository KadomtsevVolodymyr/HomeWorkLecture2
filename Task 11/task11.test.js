import { makeArmy } from './task11';

describe('makeArmy', () => {
  
  test('should return its position in the array 0', () => {
    const shooters = makeArmy(10);

    expect(shooters[0]()).toStrictEqual(0);
  });

  test('should return its position in the array 1', () => {
    const shooters = makeArmy(10);

    expect(shooters[1]()).toStrictEqual(1);
  });

  test('should return its position in the array 2', () => {
    const shooters = makeArmy(10);

    expect(shooters[2]()).toStrictEqual(2);
  });

  test('should return its position in the array 5', () => {
    const shooters = makeArmy(10);

    expect(shooters[5]()).toStrictEqual(5);
  });

  test('should return its position in the array 7', () => {
    const shooters = makeArmy(10);

    expect(shooters[7]()).toStrictEqual(7);
  });

  test('should return its position in the array 9', () => {
    const shooters = makeArmy(10);

    expect(shooters[9]()).toStrictEqual(9);
  });
});