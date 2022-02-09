export const createAdder = (basic = 0) => {
  let sum = basic;

  const previousValue = (...manyMoreNum) => {
    return sum += manyMoreNum.reduce((previous, current) => previous + current, 0);
  };

  return previousValue;
};