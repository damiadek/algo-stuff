function cutTheSticks(arr) {
  arr.sort((a, b) => a - b);

  let noOfSmall = 0;
  let noOfSticks = [],
    smallest,
    i = arr.length;

  while (arr.length > 0) {
    noOfSticks.push(arr.length);

    noOfSmall = 0;
    smallest = arr[0];

    arr = arr
      .map((item, index) => {
        if (item == smallest) {
          noOfSmall = index;
        }

        return item - smallest;
      })
      .slice(noOfSmall + 1);
  }

  return noOfSticks;
}
