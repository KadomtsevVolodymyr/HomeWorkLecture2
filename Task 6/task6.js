export  const createUrl = (template, params) => {
  let newString = template;
  const regex = /{\w+}/g;
  const textNeedToReplaced = template.match(regex);

  for (let i = 0; i < textNeedToReplaced.length; i++) {
    const textNeedToReplacedString = textNeedToReplaced[i].toString().replace(/{/g,'').replace(/}/g,'');
  
    if (textNeedToReplacedString === Object.keys(params)[i]) {
      newString = newString.replace(textNeedToReplaced[i], Object.values(params)[i]);
    } else {
      newString = newString.replace(textNeedToReplaced[i], undefined);
    }
  }

  return newString;
};