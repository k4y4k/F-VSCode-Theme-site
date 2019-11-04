```js
// Sieve of Eratosthenes
const eratosthenes = limit => {
  let primes = []

  if (limit >= 2) {
    const sqrtlmt = Math.sqrt(limit) - 2
    let nums = new Array() // start with an empty Array.

    for (let i = 2; i <= limit; i++) nums.push(i)

    for (let i = 0; i <= sqrtlmt; i++) {
      const p = nums[i]
      if (p) {
        for (let j = p * p - 2; j < nums.length; j += p) nums[j] = 0
      }
    }

    for (let i = 0; i < nums.length; i++) {
      const p = nums[i]
      if (p) {
        primes.push(p)
      }
    }
  }

  return primes
}

const primes = eratosthenes(100)
const x = 2

console.log('An array of the prime numbers from 0 to 100: ' + primes)
```
