function solution(A) {
  let distinct = {};

  for (let element of A) {
    if (distinct.hasOwnProperty(element)) {
      distinct[element] += 1;
    } else {
      distinct[element] = 0;
    }
  }

  return Object.keys(distinct).length;
}
