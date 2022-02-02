export  const openOrSenior = (informationOfPotentialMember) => {
  const listMember = [];
  const minYears = 40;
  const workExperience = 15;

  for (let i = 0; i < informationOfPotentialMember.length; i++) {
    
    if (informationOfPotentialMember[i][0] >= minYears && informationOfPotentialMember[i][1] >= workExperience) {
      listMember.push('Senior');
    } else {
      listMember.push('Open');
    }
    
  }

  return listMember;
};