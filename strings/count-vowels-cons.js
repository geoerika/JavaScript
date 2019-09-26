// counts the vowels and consonants in a string

const countVowelsCons = (str) => {
  nrVowels = 0;
  if ((str !== '') || (str !== ' ')) {
    for (let i = 0; i < str.length; i++) {
      if(str[i].match(/[aeiouAEIOU]/)) {
        nrVowels++;
      };
    };
  };

  return 'Nr of vowels: ' + nrVowels + ' Nr of consonants: ' + (str.length - nrVowels);
};

console.log(countVowelsCons('anamaria'));