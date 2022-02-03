import { createPrevArgSaver } from './task12';

describe('Testing function that inve', () => {
  
  test('function ', () => {
    const argSaver  = createPrevArgSaver(123);

    expect(argSaver[0](123)).toStrictEqual(undefined);
  });

  test('function ', () => {
    const argSaver  = createPrevArgSaver(456);

    expect(argSaver[1](456)).toStrictEqual(123);
  });

  test('function ', () => {
    const argSaver  = createPrevArgSaver(100, 200, 300);

    expect(argSaver[2](100, 200, 300)).toStrictEqual(456);
  });

  test('function ', () => {
    const argSaver  = createPrevArgSaver();

    expect(argSaver[3]()).toStrictEqual(100);
  });

  test('function ', () => {
    const argSaver  = createPrevArgSaver(741);

    expect(argSaver[4](741)).toStrictEqual(undefined);
  });
});