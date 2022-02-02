import { transformState } from './task8';

describe('transformState', () => {
  test('should change the `state` addProperties clear addProperties', () => {
    const result = transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      {
        operation: 'addProperties', properties: {yet: 'another property'},
      }, 
      {operation: 'clear'},
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },
    ],
    );

    expect(result).toStrictEqual({
      foo: 'bar', name: 'Jim',
    });
  });

  test('should change the `state` addProperties', () => {
    const result = transformState({},
      [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        },
      ],
    );

    expect(result).toStrictEqual({name: 'Jim'},

    );
  });

  test('should change the `state` clear', () => {
    const result = transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      { operation: 'clear' },
    ],
    );

    expect(result).toStrictEqual({});
  });

  test('should change the `state` removeProperties clear addProperties clear addProperties removeProperties', () => {
    const result = transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      {
        operation: 'removeProperties', properties: ['another'],
      },
      { operation: 'clear' },
      { operation: 'clear' },
      { operation: 'clear' },
      {
        operation: 'addProperties', properties: { yet: 'another property' },
      },
      { operation: 'clear' },
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim', 
        },
      },
      {
        operation: 'removeProperties', properties: ['name', 'hello'],
      },
    ],
 
    );

    expect(result).toStrictEqual({ foo: 'bar' });
  });

});
