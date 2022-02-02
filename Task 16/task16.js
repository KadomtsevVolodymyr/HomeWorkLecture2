export  const fearNotLetter = (stringOfLetter) => {
  let start = stringOfLetter.charCodeAt(0) + 1;
  let missingLetter = '';
   
  for(let i = 1; i < stringOfLetter.length; i++){
    if(stringOfLetter.charCodeAt(i) !== start){
      missingLetter += String.fromCharCode(start);
      start++; 
    }
    start ++;
  }

  if(missingLetter === ''){
    missingLetter = undefined;
  }
   
  return missingLetter;
};