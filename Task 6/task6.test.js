import { createUrl } from './task6';

describe('createUrl', () => {
  test('should replaces all `{name}` with params.name', () => {
    const result = createUrl('/api/{id}', {id: 0});

    expect(result).toBe('/api/0');
  });

  test('should replaces all `{name}` with params.name', () => {
    const result = createUrl('/api/{id}', {name: 'Petya'});

    expect(result).toBe('/api/undefined');
  });

  test('should replaces all `{name}` with params.name', () => {
    const result = createUrl('/api/{list}/{id}', {
      list: 'items', id: 0,
    });

    expect(result).toBe('/api/items/0');
  });

});
