export const makeArmy = (number) => {
  const shooters = [];
  let i = 0;
   
  while (i < number) {
    const indexOfNumber = i;
    const shooter = () => {
      return indexOfNumber;
    };
   
    shooters.push(shooter);
    i++;
  }
   
  return shooters;
};