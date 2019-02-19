function solution(S) {
  if (S.length % 2 !== 0) {
    return 0;
  }

  let stack = [];

  let brackets = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  for (let i = 0; i < S.length; i++) {
    let selectedCharacter = S[i];

    if (brackets[selectedCharacter]) {
      stack.push(selectedCharacter);
    } else {
      if (stack.length < 1) {
        return 0;
      }

      let popped = stack.pop();
      if (brackets[popped] !== selectedCharacter) {
        return 0;
      }
    }
  }

  return stack.length > 0 ? 0 : 1;
}
