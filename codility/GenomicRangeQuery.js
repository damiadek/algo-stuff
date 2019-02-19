function solution(S, P, Q) {
  let selectedSequence = [];
  let minimumInpactFactors = [];

  for (let i = 0; i < P.length; i++) {
    selectedSequence = S.slice(P[i], Q[i] + 1);

    if (selectedSequence.indexOf("A") !== -1) {
      minimumInpactFactors.push(1);
    } else if (selectedSequence.indexOf("C") !== -1) {
      minimumInpactFactors.push(2);
    } else if (selectedSequence.indexOf("G") !== -1) {
      minimumInpactFactors.push(3);
    } else if (selectedSequence.indexOf("T") !== -1) {
      minimumInpactFactors.push(4);
    }
  }

  return minimumInpactFactors;
}
