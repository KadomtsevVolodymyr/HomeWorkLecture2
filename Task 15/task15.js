export  const squareList = (arrayOfNumber) => {
  const reduce = arrayOfNumber.reduce((total, amount) => {
    if (amount % 1 === 0 && amount > 0) {
      total.push(amount);
    }
    
    return total;
  }, []);
  const result = reduce.map(x => x ** 2);

  return result;
};