export  const invertObject = (object) => {
  const objectValues = Object.values(object);

  for (let i = 0; i < objectValues.length; i++) {
    const string = objectValues[i];

    objectValues.splice(i, 1);

    i--;

    for (let j = 0; j < objectValues.length; j++) {
      if (objectValues.indexOf(string) !== -1) {
        return null;
      }
    }
  }

  const newObject = {};

  Object.keys(object).forEach(key => {
    newObject[object[key]] = key;
  });

  return newObject;
};