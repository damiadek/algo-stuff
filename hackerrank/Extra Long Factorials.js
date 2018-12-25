function extraLongFactorials(n) {
  const bigNumber = require("bignumber.js");

  let answer = new bigNumber(1);

  for (let i = 1; i <= n; i++) {
    answer = answer.times(i);
  }

  console.log(answer.toFixed());
}
