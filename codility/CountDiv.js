function solution(A, B, K) {
  if (A === B) {
    if (A % K == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  if (A % K == 0) {
    return Math.floor((B - A) / K) + 1;
  }

  return parseInt(B / K) - parseInt(A / K);
}
