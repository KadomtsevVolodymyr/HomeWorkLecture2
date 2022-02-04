export const createAdder = (basic) => {
  let previousValue = basic;

  if (previousValue === undefined) {
    previousValue = 0;
  }

  const adder = (num1 = 0, num2 = 0, num3 = 0) => {
    previousValue += num1 + num2 + num3;

    return previousValue;
  };

  return adder;
};