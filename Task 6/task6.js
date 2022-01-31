export  const createUrl = (template, params) => {
  let newString;

  if (template.indexOf('{id}') !== -1) {
    newString = template.replace('{id}', params.id);
  }

  if (template.indexOf('{list}') !== -1) {
	
    newString = newString.replace('{list}', params.list);
	
  }


  return newString;
};