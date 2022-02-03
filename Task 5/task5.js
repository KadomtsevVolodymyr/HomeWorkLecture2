export const reverseWords = (words) => {
  return words.split(' ').map((word) => {
    return word.split('').reverse().join('');
  }).join(' ');

};