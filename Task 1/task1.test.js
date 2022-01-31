import { calculateRentalCost } from './task1';

describe('calculateRentalCost', () => {
  test('should return rental cost of 2 days', () => {
    const result = calculateRentalCost(2);

    expect(result).toBe(80);
  });

  test('should return rental cost of 1 days', () => {
    const result = calculateRentalCost(1);

    expect(result).toBe(40);
  });

  test('should return rental cost of 3 days with discount 20 dollars', () => {
    const result = calculateRentalCost(3);

    expect(result).toBe(100);
  });

  test('should return rental cost of 5 days with discount 20 dollars', () => {
    const result = calculateRentalCost(5);

    expect(result).toBe(180);
  });
  

  test('should return rental cost of 7 days with discount 50 dollars', () => {
    const result = calculateRentalCost(7);

    expect(result).toBe(230);
  });

  test('should return rental cost of 10 days with discount 50 dollars', () => {
    const result = calculateRentalCost(10);

    expect(result).toBe(350);
  });

});
