export const createPrevArgSaver = () => {
  let previousValue;
  let currentValue;
     
  const argSaver = (state) => {
    previousValue = currentValue;
    currentValue = state;
   
    return previousValue;
  };

  return argSaver;
};