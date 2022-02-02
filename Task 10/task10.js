export  const invertObject = (object) => {
  const objectVakues = Object.values(object);

  for (let i = 0; i < objectVakues.length; i++) {
    const string = objectVakues[i];

    objectVakues.splice(i, 1);

    i--;

    for (let j = 0; j < objectVakues.length; j++) {
      if (objectVakues.indexOf(string) != -1) {
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