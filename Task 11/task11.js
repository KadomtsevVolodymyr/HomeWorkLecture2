export const makeArmy = (number) => {

  const shooters = [];
   
  for (let i = 0; i < number; i++) {
    const shooter = ((index) => {
      return () => { 
        return index;
      };
    })(i);
 
    shooters.push(shooter);
  }
   
  return shooters;
};