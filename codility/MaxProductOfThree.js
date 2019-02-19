function solution(A) {
  A.sort((a, b) => b - a);

  let twoNegativesProduct = [A[A.length - 1], A[A.length - 2], A[0]];
  let noNegativesProduct = [A[2], A[1], A[0]];

  let reducer = (a, b) => a * b;

  return Math.max(
    twoNegativesProduct.reduce(reducer),
    noNegativesProduct.reduce(reducer)
  );
}
