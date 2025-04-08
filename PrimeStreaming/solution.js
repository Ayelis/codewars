/*
  Solution for "Prime Streaming PG-13"
  CodeWars Link: https://www.codewars.com/kata/5519a584a73e70fa570005f5

  Complexity Analysis:
  - Time Complexity: O(n log log n) - Iterating the sieve marking primes
  - Space Complexity: O(n) - Storing a sieve
*/

class Primes {
  static *stream() {
    yield 2; // The only even prime
    const sieve = new Map(); // Stores found primes and their next multiples
    let candidate = 3; // Start checking from 3 (skip evens)

    while (true) {
      const factor = sieve.get(candidate);
      if (factor) {
        // Candidate is composite (a multiple of 'factor')
        sieve.delete(candidate);
        // Add next multiple of 'factor' to the sieve
        let nextMultiple = candidate + 2 * factor;
        while (sieve.has(nextMultiple)) {
          nextMultiple += 2 * factor;
        }
        sieve.set(nextMultiple, factor);
      } else {
        // Candidate is prime!
        yield candidate;
        // Register its square as the next multiple to check
        sieve.set(candidate * candidate, candidate);
      }
      candidate += 2; // Skip even numbers
    }
  }
}