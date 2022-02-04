export  const frankenSplice = (firstArray, secondArray, index) => {
  const assembledArray = secondArray.slice(0);

  assembledArray.splice(index, 0, ...firstArray);

  return assembledArray;
};