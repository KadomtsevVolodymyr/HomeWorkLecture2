import { createPrevArgSaver } from './task12';

describe('createPrevArgSaver', () => {
  
  const argSaver = createPrevArgSaver();

  test('should return undefined because it is the first call', () => {
    expect(argSaver(123)).toBe(undefined);
  });

  test('should return previous call 123', () => {
    expect(argSaver(456)).toBe(123);
  });

  test('should return previous call 456', () => {
    expect(argSaver(100, 200, 300)).toBe(456);
  });

  test('should return first argument previous call 100', () => {
    expect(argSaver()).toBe(100);
  });

  test('should return previous call undefined', () => {
    expect(argSaver(741)).toBe(undefined);
  });
});