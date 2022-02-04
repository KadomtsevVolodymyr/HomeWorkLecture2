import { transformStateWithClones } from './task9';

describe('transformStateWithClones', () => {
  test('should change the `state` addProperties removeProperties addProperties', () => {
    const state = {
      foo: 'bar', bar: 'foo',
    };
    const operation 
      = [
        {
          operation: 'addProperties', properties: {
            name: 'Jim', hello: 'world',
          },
        }, 
        {
          operation: 'removeProperties', properties: ['bar', 'hello'],
        },
        {
          operation: 'addProperties', properties: {another: 'one'},
        },

      ];
    const result = [
      {
        foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
      },
      {
        foo: 'bar', name: 'Jim',
      },
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
    ];

    expect(transformStateWithClones(state, operation)).toEqual(result);

    expect(state).toEqual({
      foo: 'bar', bar: 'foo',
    });
  });

  test('should change the `state` addProperties clear clear addProperties', () => {
    const state = {
      foo: 'bar', bar: 'foo',
    };
    const operation 
    = [
      {
        operation: 'addProperties', properties: {yet: 'another property'},
      }, 
      {operation: 'clear'},
      {operation: 'clear'},
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },
    ];

    const result = [
      {
        foo: 'bar', bar: 'foo', yet: 'another property',
      },
      {},
      {},
      {
        foo: 'bar', name: 'Jim',
      },
    ];

    expect(transformStateWithClones(state, operation)).toEqual(result);

    expect(state).toEqual({
      foo: 'bar', bar: 'foo',
    });
  });

  test('should change the `state` addProperties', () => {
    const state = {};
    const operation
      = [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        }, 

      ];

    const result = [{name: 'Jim'}];

    expect(transformStateWithClones(state, operation)).toEqual(result);
    expect(state).toEqual({});
  });
});