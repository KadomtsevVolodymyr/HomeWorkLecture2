export  const openOrSenior = (informationOfPotentialMember) => {
  const listMember = [];

  for (let i = 0; i < informationOfPotentialMember.length; i++) {
    
    if (informationOfPotentialMember[i][0] >= 40 && informationOfPotentialMember[i][1] >= 15) {
      listMember.push('Senior');
    } else {
      listMember.push('Open');
    }
    
  }

  return listMember;
};