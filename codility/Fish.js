function solution(fishSizes, fishDirection) {
  let fishesGoingDownstream = [],
    alive = 0;

  for (let currentFish = 0; currentFish < fishSizes.length; currentFish++) {
    if (fishDirection[currentFish] == 1) {
      fishesGoingDownstream.push(fishSizes[currentFish]);
    } else {
      for (
        let lastFish = fishesGoingDownstream.length - 1;
        lastFish >= 0;
        lastFish--
      ) {
        let lastFishSize = fishesGoingDownstream[lastFish];
        if (fishSizes[currentFish] > lastFishSize) {
          fishesGoingDownstream.pop();
        } else {
          break;
        }
      }
      if (fishesGoingDownstream.length == 0) {
        alive += 1;
      }
    }
  }

  alive += fishesGoingDownstream.length;

  return alive;
}
