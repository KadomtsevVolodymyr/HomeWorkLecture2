import { makeArmy } from './task11';

describe('Testing function that inve', () => {
  
  test('function ', () => {
    const shooters = makeArmy(10);

    expect(shooters[0]()).toStrictEqual(0);
  });

  test('function ', () => {
    const shooters = makeArmy(10);

    expect(shooters[1]()).toStrictEqual(1);
  });

  test('function ', () => {
    const shooters = makeArmy(10);

    expect(shooters[2]()).toStrictEqual(2);
  });

  test('function ', () => {
    const shooters = makeArmy(10);

    expect(shooters[5]()).toStrictEqual(5);
  });

  test('function ', () => {
    const shooters = makeArmy(10);

    expect(shooters[7]()).toStrictEqual(7);
  });

  test('function ', () => {
    const shooters = makeArmy(10);

    expect(shooters[9]()).toStrictEqual(9);
  });
});