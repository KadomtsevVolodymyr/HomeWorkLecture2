export  const invertColor = (template) => {

  let reverseColor;

  reverseColor=parseInt(Number(template.replace('#', '0x')), 10);
  reverseColor=~reverseColor;
  reverseColor=reverseColor>>>0;
  reverseColor=reverseColor&0x00ffffff;
  reverseColor='#' + reverseColor.toString(16).padStart(6, '0');
  
  return reverseColor;
};