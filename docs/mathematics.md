# Mathematics Foundation

> [Back to main README](../README.md)

## Mathematics Foundation

> **When:** As needed during DSA and Track B
> **Why:** Required for algorithms, competitive programming, and deep understanding
> **Approach:** Learn math when you need it, not as a prerequisite

You don't need to be a math genius. But certain math topics come up constantly in algorithms and competitive programming.

---

### M1: Essential Math for DSA

**These concepts appear in interviews:**

```text
1. BASIC ARITHMETIC
   - Modular arithmetic (a % b)
   - Integer division vs floating point
   - Overflow handling

2. LOGARITHMS
   - log₂(n) — appears in time complexity
   - Binary search runs in O(log n)
   - Balanced trees have O(log n) height

   Key insight: log₂(1,000,000) ≈ 20
   This is why binary search is so powerful!

3. EXPONENTS & POWERS
   - 2^10 = 1,024 ≈ 1,000
   - 2^20 ≈ 1,000,000
   - 2^30 ≈ 1,000,000,000

   Used in: bit manipulation, subset problems

4. BASIC PROBABILITY
   - Expected value
   - Probability of events
   - Used in: randomized algorithms, analysis

5. COMBINATORICS (Counting)
   - Permutations: n! / (n-r)!
   - Combinations: n! / (r! × (n-r)!)
   - Used in: DP problems, backtracking analysis
```

**Quick Reference:**

```javascript
// Modular arithmetic (prevents overflow)
(a + b) % m = ((a % m) + (b % m)) % m
(a * b) % m = ((a % m) * (b % m)) % m
(a - b) % m = ((a % m) - (b % m) + m) % m  // +m handles negatives

// GCD (Greatest Common Divisor) - Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// LCM (Least Common Multiple)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Check if power of 2
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Fast exponentiation (x^n mod m)
function power(x, n, m) {
    let result = 1;
    x = x % m;
    while (n > 0) {
        if (n % 2 === 1) {
            result = (result * x) % m;
        }
        n = Math.floor(n / 2);
        x = (x * x) % m;
    }
    return result;
}

// Factorial (with memoization for multiple calls)
const factorial = (() => {
    const cache = [1, 1];
    return function(n) {
        if (cache[n] !== undefined) return cache[n];
        for (let i = cache.length; i <= n; i++) {
            cache[i] = cache[i-1] * i;
        }
        return cache[n];
    };
})();

// Combinations (n choose r)
function combinations(n, r) {
    if (r > n) return 0;
    if (r === 0 || r === n) return 1;
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Sieve of Eratosthenes (find all primes up to n)
function sieve(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime;
}

// Check if prime
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
```

---

### M2: Discrete Mathematics (For Competitive Programming)

**Learn these if pursuing competitive programming:**

```text
1. LOGIC & PROOFS
   - Propositional logic (AND, OR, NOT)
   - Proof by contradiction
   - Proof by induction (important for recursion)

2. SET THEORY
   - Union, intersection, difference
   - Cardinality
   - Subsets

3. COUNTING
   - Permutations and combinations
   - Pigeonhole principle
   - Inclusion-exclusion principle

4. NUMBER THEORY
   - Divisibility
   - Prime numbers
   - Modular arithmetic
   - GCD/LCM
   - Euler's totient function
   - Fermat's little theorem

5. GRAPH THEORY
   - Vertices, edges, degree
   - Paths, cycles
   - Trees (connected, no cycles)
   - Bipartite graphs
   - Euler paths and circuits

6. RECURRENCES
   - Writing recurrence relations
   - Solving with substitution
   - Master theorem
```

**Resources (When Needed):**

| Resource                     | Purpose            | Link                                                                           |
| ---------------------------- | ------------------ | ------------------------------------------------------------------------------ |
| MIT 6.042J                   | Mathematics for CS | https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/ |
| Discrete Mathematics (Rosen) | Textbook           | Book/Library                                                                   |
| Khan Academy                 | Basics             | https://www.khanacademy.org/math                                               |
| CP Algorithms                | Competition math   | https://cp-algorithms.com/                                                     |

---

### M3: Linear Algebra (For ML/Graphics — Later)

**Not needed for web development. Learn when:**

- Getting into machine learning
- Working with graphics/games
- Advanced data science

**Key Concepts (for awareness):**

```text
- Vectors and matrices
- Matrix multiplication
- Eigenvalues and eigenvectors
- Linear transformations
```

**Resource:** 3Blue1Brown's "Essence of Linear Algebra" (visual, free) - [LINK](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

---

## Soft Skills & Career

