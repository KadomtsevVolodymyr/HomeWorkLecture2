export  const moveZeros = (arrayOfSomething) => {
  return arrayOfSomething.filter(function(x) {
    return x !== 0;
  }).concat(arrayOfSomething.filter(function(x) {
    return x === 0;
  }));
};