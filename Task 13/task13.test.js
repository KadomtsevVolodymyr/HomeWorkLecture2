import {createAdder} from './task13';

describe('createAdder', () => {
  
  const adder1 = createAdder();

  test('should return sum of the arguments 0', () => {
    expect(adder1()).toBe(0);
  });

  test('should retuen sum of the arguments 30', () => {
    expect(adder1(10, 20)).toBe(30);
  });

  test('should retuen sum of the arguments 100', () => {
    expect(adder1(30, 40)).toBe(100);
  });

  const adder2 = createAdder(100);

  test('should retuen sum of the arguments and basic value 110', () => {
    expect(adder2(10)).toBe(110);
  });

  test('should retuen sum of the arguments and basic value 200', () => {
    expect(adder2(20, 30, 40)).toBe(200);
  });

  test('should retuen sum of the arguments and basic value 200', () => {
    expect(adder2()).toBe(200);
  });

});