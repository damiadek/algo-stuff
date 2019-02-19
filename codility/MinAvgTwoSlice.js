function solution(A) {
  if (A.length < 3) {
    return 0;
  }

  let min = Number.POSITIVE_INFINITY,
    threeMin = 0,
    twoMin = 0,
    index = 0;

  const reducer = (item, total) => item + total;

  for (let i = 0; i < A.length; i++) {
    if (i + 1 <= A.length - 1) {
      twoMin = [A[i], A[i + 1]].reduce(reducer) / 2;
      if (twoMin < min) {
        min = twoMin;
        index = i;
      }
    }
    if (i + 2 <= A.length - 1) {
      threeMin = [A[i], A[i + 1], A[i + 2]].reduce(reducer) / 3;
      if (threeMin < min) {
        min = threeMin;
        index = i;
      }
    }
  }

  return index;
}
