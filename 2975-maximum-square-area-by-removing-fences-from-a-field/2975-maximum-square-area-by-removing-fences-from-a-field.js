var maximizeSquareArea = function(m, n, hFences, vFences) {
  hFences.push(1), hFences.push(m);
  vFences.push(1), vFences.push(n);
  let hDiffs = new Set();
  for (let i = 0; i < hFences.length; i++) {
    for (let j = i + 1; j < hFences.length; j++) {
      let diff = Math.abs(hFences[i] - hFences[j]);
      hDiffs.add(diff);
    }
  }
  let maxDiff = 0;
  for (let i = 0; i < vFences.length; i++) {
    for (let j = i + 1; j < vFences.length; j++) {
      let diff = Math.abs(vFences[i] - vFences[j]);
      if (hDiffs.has(diff)) maxDiff = Math.max(maxDiff, diff);
    }
  }
  return maxDiff === 0 ? -1 : (BigInt(maxDiff) * BigInt(maxDiff)) % 1000000007n;
};