export  const transformStateWithClones = (state, transforms) => {
  let clone = { ...state };
  const transformState = [];

  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].operation === 'addProperties') {
      clone = {
        ...clone, ...transforms[i].properties,
      };
      transformState.push({...clone});


    } else if (transforms[i].operation === 'clear') { 
      clone = {};
      transformState.push({...clone});
      

    } else if (transforms[i].operation === 'removeProperties') {
      const remove = transforms[i].properties;

      for (let j = 0; j < remove.length; j++) {
        const removeItem = remove[j];
         
        delete clone[removeItem];
      }
      transformState.push({...clone});
    }

  }

  return transformState;
};