export  const moveZeros = (arrayOfSomething) => {
  let count = 0;

  for (let i = 0; i < arrayOfSomething.length; i++) {
    if (arrayOfSomething[i] === 0) {
      arrayOfSomething.splice(i , 1);
      count++;
      i--;
    }
  }

  for (let i = 0; i < count; i++) {
    arrayOfSomething.push(0);
  }

  return arrayOfSomething;
};