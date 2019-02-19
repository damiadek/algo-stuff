function theLoveLetterMystery(s) {
  let length = s.length;
  let midPoint = Math.floor(length / 2),
    firstAscii,
    secondAscii,
    noOfOperations = 0;

  if (length === 1) {
    return 0;
  }

  for (let i = midPoint; i > 0; i--) {
    firstAscii = s.charCodeAt(i - 1);
    secondAscii = s.charCodeAt(length - i);

    noOfOperations += Math.abs(secondAscii - firstAscii);
  }

  return noOfOperations;
}
