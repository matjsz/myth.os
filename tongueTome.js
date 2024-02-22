const consonants = ['p', 't', 'k', 'b', 'd', 'g', 'f', 's', 'z', 'h', 'm', 'n', 'l', 'r', 'v', 'w', 'j'];
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Function to generate a random phoneme
function generatePhoneme(phonemeArray) {
  return phonemeArray[Math.floor(Math.random() * phonemeArray.length)];
}

function generateWord(length=Math.floor(Math.random()*4)+4) {
  let word = '';
  for (let i = 0; i < length; i++) {
    if (i > 0) {
      word += generatePhoneme(consonants);
    }
    word += generatePhoneme(vowels);
  }
  return word;
}

function generateSentence(wordCount=Math.floor, minWordLength, maxWordLength) {
  const sentence = [];
  for (let i = 0; i < wordCount; i++) {
    const wordLength = Math.floor(Math.random() * (maxWordLength - minWordLength + 1)) + minWordLength;
    sentence.push(generateWord(wordLength));
  }
  return sentence.join(' ');
}

// NAME GENERATION

// Arrays of consonants, vowels, digraphs, and diphthongs
const digraphs = ["th", "ch", "sh", "ph", "qu", "br", "cr", "dr", "fr", "gr", "pr", "tr"];
const diphthongs = ["ai", "ei", "oi", "au", "ou", "ie", "ea", "ue", "oo", "ui"];
const diphthongsAlternative = ["a", "e", "i", "o", "u", "y", "ye", "yo", "ya", "yi", "ey", "ay", "oy", "uy"]

// Function to generate a random procedural name
function generateProceduralName(nameLength=Math.floor(Math.random() * 3) + 2) {
  let name = "";

  for (let i = 0; i < nameLength; i++) {
    let syllable = "";

    // Generate a syllable with complex structure
    if (Math.random() < 0.7) {
      syllable += getRandomElement(consonants);
      if (Math.random() < 0.5) {
        syllable += getRandomElement(diphthongs);
      } else {
        syllable += getRandomElement(vowels);
        if (Math.random() < 0.4) {
          syllable += getRandomElement(digraphs+diphthongsAlternative[Math.floor(Math.random()*diphthongsAlternative.length)]);
        }
        if (Math.random() < 0.2) {
          syllable += getRandomElement(consonants);
        }
      }
    } else {
      syllable += getRandomElement(diphthongs);
      if (Math.random() < 0.3) {
        syllable += getRandomElement(consonants);
      }
    }

    name += syllable;
  }

  // Capitalize the first letter of the name
  name = name.charAt(0).toUpperCase() + name.slice(1);

  return name;
}

// Function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Example usage
const proceduralName = generateProceduralName(2);
console.log(proceduralName);

const tongueTome = {
  getWord: generateWord,
  getSentence: generateSentence,
  getName: generateProceduralName
}

module.exports = tongueTome