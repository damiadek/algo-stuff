function caesarCipher(string, rotationInteger) {
  let bigChar = 65 - 90,
    smallChar = 97 - 112,
    asciiChar;

  string = string.split("");

  return string
    .map(letter => {
      asciiChar = letter.charCodeAt(0);

      if (asciiChar >= 65 && asciiChar <= 90) {
        asciiChar += rotationInteger;
        if (asciiChar > 90) {
          asciiChar = 64 + (asciiChar - 90);
        }
      }

      if (asciiChar >= 97 && asciiChar <= 122) {
        asciiChar += rotationInteger;
        if (asciiChar > 122) {
          asciiChar = 96 + (asciiChar - 122);
        }
      }

      return String.fromCharCode(asciiChar);
    })
    .join("");
}
