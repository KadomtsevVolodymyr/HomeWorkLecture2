import { invertColor } from './task7';

describe('invertColor', () => {
  test('should invert color #000000 to #ffffff', () => {
    const result = invertColor('#000000');

    expect(result).toBe('#ffffff');
  });

  test('should invert color #DDEEAA to #221155', () => {
    const result = invertColor('#DDEEAA');

    expect(result).toBe('#221155');
  });

  test('should invert color #012345 to #fedcba', () => {
    const result = invertColor('#012345');

    expect(result).toBe('#fedcba');
  });

});
