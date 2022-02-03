export const createPrevArgSaver = (call) => {
// Не сделанно!

  const argSaver = [];

  let firstznak = undefined;

  console.log(call);

  for (let i = 0; i < 5; i++) {

    const arg = () => {
      return firstznak;
    };
    argSaver.push(arg);
    i++;
    firstznak = call;
  }
  

  return argSaver;
};