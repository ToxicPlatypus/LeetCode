var maximizeSquareArea = function (m, n, hFences, vFences) {
  hFences.push(1);
  hFences.push(m);
  vFences.push(1);
  vFences.push(n);

  let map = new Set();

  for (let i = 0; i < hFences.length; i++) {
    for (let j = i + 1; j < hFences.length; j++) {
      let difference = Math.abs(hFences[i] - hFences[j]);
      map.add(difference);
    }
  }
  let ans = 0;

  for (let i = 0; i < vFences.length; i++) {
    for (let j = i + 1; j < vFences.length; j++) {
      let dif = Math.abs(vFences[i] - vFences[j]);
      if (map.has(dif)) {
        ans = Math.max(ans, dif);
      }
    }
  }

  return ans === 0 ? -1 : (BigInt(ans) * BigInt(ans)) % 1000000007n;
};
