import { invertObject } from './task10';

describe('transformState', () => {
  test('should return `value: key in the object that you return', () => {
    const result = invertObject({});

    expect(result).toStrictEqual({});
  });

  test('should return {bar: foo} when we put {foo: bar}', () => {
    const result = invertObject({'foo': 'bar'});

    expect(result).toStrictEqual({'bar': 'foo'});
  });

  test('should return 2:1 4:2 6:3 when we put 1:2 2:4 3:6', () => {
    const result = invertObject({
      '1': 2, '2': 4, '3': 6,
    });

    expect(result).toStrictEqual({
      '2': '1', '4': '2', '6': '3',
    });
  });

  test('should return Vova: name, Kadomtsev: surname, when we put name: Vova, surname: Kadomtsev', () => {
    const result = invertObject({
      name: 'Vova', surname: 'Kadomtsev',
    });

    expect(result).toStrictEqual({
      Vova: 'name', Kadomtsev: 'surname',
    });
  });

  test('should return null when more than one property with the same value in the original object', () => {
    const result = invertObject({
      'foo': 'bar', 'hello': 'world', 'js': 'bar',
    });

    expect(result).toStrictEqual(null,
    );
  });

 
});
