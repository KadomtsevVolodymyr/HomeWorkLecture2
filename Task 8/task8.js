export  const transformState = (state, transforms) => {
  let newState = state;

  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].operation === 'addProperties') {
      newState = Object.assign(newState, transforms[i].properties);
    }

    if (transforms[i].operation === 'clear') {
      newState = {};
    }

    if (transforms[i].operation === 'removeProperties') {
      const remove = Object.values(transforms[i].properties);
      
      for (let j = 0; j < remove.length; j++) {
        const removeItem = remove[j];

        delete newState[removeItem];
      }

    }
  }

  return newState;
};