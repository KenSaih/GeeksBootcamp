const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);
    if (Object.keys(morseJS).length === 0) {
      reject("Morse object is empty.");
    } else {
      resolve(morseJS);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Enter a word or sentence: ", (input) => {
      const word = input.toLowerCase();
      const translation = [];

      for (let char of word) {
        if (morseJS[char]) {
          translation.push(morseJS[char]);
        } else {
          reject(`Character "${char}" is not supported.`);
          readline.close();
          return;
        }
      }

      readline.close();
      resolve(translation);
    });
  });
}

function joinWords(morseTranslation) {
  console.log("\nMorse Translation:");
  console.log(morseTranslation.join("\n"));
}

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((result) => joinWords(result))
  .catch((err) => console.error("Error:", err));
  