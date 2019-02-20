function solution(S) {
  let bracket = {
    "(": ")"
  };

  let stackedOpeningChar = [];

  if (S.length == 0) {
    return 1;
  }
  if (S.length == 1) {
    return 0;
  }

  for (let i = 0; i < S.length; i++) {
    let selectedChar = S[i];
    if (bracket[selectedChar]) {
      stackedOpeningChar.push(selectedChar);
    } else {
      if (bracket[stackedOpeningChar.pop()] !== selectedChar) {
        return 0;
      }
    }
  }

  return stackedOpeningChar.length ? 0 : 1;
}
