function appendAndDelete(s, t, k) {
  if (k < Math.abs(s.length - t.length)) {
    return "No";
  }

  if (s === t) {
    return "Yes";
  }

  if (s == "") {
    if (k == t.length) return "Yes";
    else return "No";
  }

  let limit = k,
    index = 0;

  for (let i = 0; i < limit; i++) {
    index = t.indexOf(s);

    if (index !== 0 && k > 0 && s.length > 0) {
      s = s.substring(0, s.length - 1);
      k -= 1;
    } else {
      break;
    }
  }

  if (s === t) {
    return "Yes";
  }

  if (s.length == 0 && k >= t.length) {
    return "Yes";
  }

  if (k > 0 && index === 0) {
    let fullLength = s.length + k;

    if (
      fullLength == t.length ||
      (fullLength > t.length && (fullLength - t.length) % 2 == 0)
    )
      return "Yes";
  }

  return "No";
}
