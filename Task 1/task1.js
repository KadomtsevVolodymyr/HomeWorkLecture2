export  const calculateRentalCost = (daysOfRent) => {
  let rentalCost = 40;
  const discountSevenDeys = 50;
  const discountThreeToSixDeys = 20;


  if (daysOfRent < 3) {
    rentalCost *= daysOfRent;
  }

  if (daysOfRent >= 7){
    rentalCost = (rentalCost * daysOfRent) - discountSevenDeys;
  }

  if (daysOfRent >= 3 && daysOfRent <= 6){
    rentalCost = (rentalCost * daysOfRent) - discountThreeToSixDeys;
  }

  return rentalCost;
};