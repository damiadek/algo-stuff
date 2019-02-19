function solution(A) {
  let pivotCircle,
    currentCircle,
    intersections = 0;

  let circlePoints = [];

  circlePoints = A.map((circleRadius, index) => {
    return {
      start: index - circleRadius,
      end: index + circleRadius,
      circleRadius
    };
  });

  circlePoints.sort((a, b) => a.start - b.start);

  for (let i = 0; i < circlePoints.length; i++) {
    pivotCircle = circlePoints[i];

    for (let j = i + 1; j < circlePoints.length; j++) {
      currentCircle = circlePoints[j];
      if (currentCircle.start <= pivotCircle.end) {
        if (++intersections > 10000000) {
          return -1;
        }
      } else {
        break;
      }
    }
  }

  return intersections;
}
