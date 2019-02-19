function solution(A) {
  if (A.length < 3) {
    return 0;
  }

  A.sort((a, b) => a - b);

  let a, b, c;

  for (let i = 2; i < A.length; i++) {
    a = A[i];
    b = A[i - 1];
    c = A[i - 2];

    if (a + b > c && a + c > b && b + c > a) {
      return 1;
    }
  }

  return 0;
}
