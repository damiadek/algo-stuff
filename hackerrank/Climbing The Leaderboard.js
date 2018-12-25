function climbingLeaderboard(scores, alice) {
  var ranks = {},
    aliceMin = alice[0],
    aliceRank = [],
    index = 1;

  scores.filter(score => score > aliceMin);

  scores.forEach(score => {
    if (!ranks[score]) {
      ranks[score] = score;
    }
  });

  alice.forEach(score => {
    if (!ranks[score]) {
      ranks[score] = score;
    }
    index = 1;

    Object.keys(ranks)
      .sort((a, b) => b - a)
      .forEach(key => {
        ranks[key] = index;
        index += 1;
      });

    aliceRank.push(ranks[score]);
  });

  return aliceRank;
}
