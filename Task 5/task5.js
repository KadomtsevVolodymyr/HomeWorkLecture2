export  const reverseWords = (words) => {
  return words.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');

};