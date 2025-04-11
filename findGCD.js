const findGCD = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  let i = Math.min(a, b);

  while (i > 0) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
    i--;
  }
};

console.log(findGCD(11, 121));
