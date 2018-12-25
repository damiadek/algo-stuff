function repeatedString(s, n) {
  var noOfLetter = 0,
    index = 0;

  for (let i = 0; i < s.length; ) {
    index = s.indexOf("a", i);

    if (index !== -1 && index < s.length) {
      noOfLetter += 1;
      i = index + 1;
    } else {
      break;
    }
  }

  noOfLetter *= parseInt(n / s.length);

  var remainder = n % s.length;

  if (remainder > 0) {
    var substr = s.slice(0, remainder);

    for (let i = 0; i < substr.length; ) {
      index = substr.indexOf("a", i);

      if (index !== -1 && index < substr.length) {
        noOfLetter += 1;
        i = index + 1;
      } else {
        break;
      }
    }
  }

  return noOfLetter;
}
