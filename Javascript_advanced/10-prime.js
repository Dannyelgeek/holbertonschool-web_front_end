function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function countPrimeNumbers() {
  let count = 0;

  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
}
const startTime = performance.now();

for (let k = 0; k < 100; k++) {
  countPrimeNumbers();
}

const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(
  "Execution time of calculating prime numbers 100 times was " +
    executionTime +
    "  milliseconds."
);
