import { createUrl } from './task6';

describe('createUrl', () => {
  test('should replace {id} to params values 0', () => {
    const result = createUrl('/api/{id}', {id: 0});

    expect(result).toBe('/api/0');
  });

  test('should replac id params values if params missing put undefined', () => {
    const result = createUrl('/api/{id}', {name: 'Petya'});

    expect(result).toBe('/api/undefined');
  });

  test('should replace {list} and {id} to params values item and 0', () => {
    const result = createUrl('/api/{list}/{id}', {
      list: 'items', id: 0,
    });

    expect(result).toBe('/api/items/0');
  });

  test('should replace {list} {id} {name} to params values item and 0 and Vova', () => {
    const result = createUrl('/api/{list}/{id}/{name}', {
      list: 'items', id: 0, name: 'Vova',
    });

    expect(result).toBe('/api/items/0/Vova');
  });

  test('should replace {list} {id} {name} {age} to params values item and 0 and Vova and 17', () => {
    const result = createUrl('/api/{list}/{id}/{name}/{age}', {
      list: 'items', id: 0, name: 'Vova', age: 17,
    });

    expect(result).toBe('/api/items/0/Vova/17');
  });

});
