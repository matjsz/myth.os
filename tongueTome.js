const consonants = ['p', 't', 'k', 'b', 'd', 'g', 'f', 's', 'z', 'h', 'm', 'n', 'l', 'r', 'v', 'w', 'j'];
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Function to generate a random phoneme
function generatePhoneme(phonemeArray) {
  return phonemeArray[Math.floor(Math.random() * phonemeArray.length)];
}

function generateWord(length) {
  let word = '';
  for (let i = 0; i < length; i++) {
    if (i > 0) {
      word += generatePhoneme(consonants);
    }
    word += generatePhoneme(vowels);
  }
  return word;
}

function generateSentence(wordCount, minWordLength, maxWordLength) {
  const sentence = [];
  for (let i = 0; i < wordCount; i++) {
    const wordLength = Math.floor(Math.random() * (maxWordLength - minWordLength + 1)) + minWordLength;
    sentence.push(generateWord(wordLength));
  }
  return sentence.join(' ');
}

const tongueTome = {
    getWord: generateWord,
    getSentence: generateSentence
}

module.exports = tongueTome