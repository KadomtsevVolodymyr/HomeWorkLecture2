import { isPrime } from './task3';

describe('isPrime', () => {
  test('should return true when we check 2 is prime', () => {
    const result = isPrime(2);

    expect(result).toBe(true);
  });

  test('should return true when we check 73 is prime', () => {
    const result = isPrime(73);

    expect(result).toBe(true);
  });

  test('should return true when we check 11 is prime', () => {
    const result = isPrime(11);

    expect(result).toBe(true);
  });

  test('should return false when we check 1 is prime', () => {
    const result = isPrime(1);

    expect(result).toBe(false);
  });

  test('should return false when we check 75 is prime', () => {
    const result = isPrime(75);

    expect(result).toBe(false);
  });

  test('should return false when we check -1 is prime', () => {
    const result = isPrime(-1);

    expect(result).toBe(false);
  });

});
