import { invertColor } from './task7';

describe('invertColor', () => {
  test('should invert color', () => {
    const result = invertColor('#000000');

    expect(result).toBe('#ffffff');
  });

  test('should invert color', () => {
    const result = invertColor('#DDEEAA');

    expect(result).toBe('#221155');
  });

  test('should invert color', () => {
    const result = invertColor('#012345');

    expect(result).toBe('#fedcba');
  });

});
