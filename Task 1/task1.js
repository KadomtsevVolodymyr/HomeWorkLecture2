export  const calculateRentalCost = (daysOfRent) => {
  let rentalCost = 40;

  if (daysOfRent < 3) {
    rentalCost *= daysOfRent;
  }

  if (daysOfRent >= 7){
    rentalCost = (rentalCost * daysOfRent) - 50;
  }

  if (daysOfRent >= 3 && daysOfRent <= 6){
    rentalCost = (rentalCost * daysOfRent) - 20;
  }

  return rentalCost;
};