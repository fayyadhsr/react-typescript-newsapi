const reverseString = (str) => {
  const letters = inputString.match(/[a-zA-Z]+/)[0];
  const number = inputString.match(/[0-9]+/)[0];

  const reversedLetters = letters.split("").reverse().join("");
  const reversedString = reversedLetters + number;

  return reversedString;
};

console.log(reverseString("NEGIE1"));
