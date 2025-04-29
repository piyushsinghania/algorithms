const coinChange = (coins, amount) => {
  const minCoins = Array(amount + 1).fill(Infinity);
  minCoins[0] = 0;

  for (let coin of coins) {
    minCoins[coin] = 1;

    for (let i = coin + 1; i <= amount; i++) {
      minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
    }
  }

  return minCoins[amount] === Infinity ? -1 : minCoins[amount];
};

console.log(coinChange([1, 2, 5], 13)); // 4
console.log(coinChange([1, 20, 50], 60)); // 3
console.log(coinChange([2, 3, 5], 1)); // -1
