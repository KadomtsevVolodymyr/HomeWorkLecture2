export  const frankenSplice = (firstArray, secondArray, index) => {
  const assembledArray = [];

  for (let i = 0; i < index; i++) {
    const elementarray = secondArray[i];

    assembledArray.push(elementarray);
  }

  for (let i = 0; i < firstArray.length; i++) {
    const element = firstArray[i];
     
    assembledArray.push(element);
     
  }

  for (let i = index; i < secondArray.length; i++) {
    const elementSecondArray = secondArray[i];

    assembledArray.push(elementSecondArray);
  }

  return assembledArray;
};