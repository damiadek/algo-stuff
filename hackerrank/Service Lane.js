function serviceLane(widths, cases) {
  let maxWidths = [],
    newArray;

  cases.forEach(_case => {
    newArray = widths.slice(_case[0], _case[1] + 1);
    newArray = newArray.sort((a, b) => a - b);
    maxWidths.push(newArray[0]);
  });

  return maxWidths;
}
