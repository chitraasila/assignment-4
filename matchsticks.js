"use strict";
let step = 4;

function matchHouses(stepNum) {
  const res = 6 + 5 * (stepNum - 1);
  return res;
}

document.write(matchHouses(step));
