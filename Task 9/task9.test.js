import { transformStateWithClones } from './task9';

describe('transformState', () => {
  test('t should change the `state` addProperties removeProperties addProperties', () => {
    const result = transformStateWithClones({
      foo: 'bar', bar: 'foo',
    },
    [
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

    ],
    );

    expect(result).toStrictEqual( [
      {
        foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
      },
      {
        foo: 'bar', name: 'Jim',
      },
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
    ],
    );
  });

  test('should change the `state` addProperties clear clear addProperties', () => {
    const result = transformStateWithClones({
      foo: 'bar', bar: 'foo',
    },
    [
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
    ],
			
    );


    expect(result).toStrictEqual( [
      {
        foo: 'bar', bar: 'foo', yet: 'another property',
      },
      {},
      {},
      {
        foo: 'bar', name: 'Jim',
      },
    ]
      ,

    );
  });

  test('should change the `state` addProperties', () => {
    const result = transformStateWithClones({},
      [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        }, 

      ],
    );

    expect(result).toStrictEqual([{name: 'Jim'}]);
  });
});
