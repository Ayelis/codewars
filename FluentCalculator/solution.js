/*
  Solution for "Fluent Calculator"
  CodeWars Link: https://www.codewars.com/kata/5578a806350dae5b05000021

  Complexity Analysis:
  - Time Complexity: O(n) - Linear
  - Space Complexity: O(n) - Linear
*/

const FluentCalculator = (() => {
  const numbers = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10
  };

  const operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    times: (a, b) => a * b,
    dividedBy: (a, b) => a / b
  };

  let chain = [];

  const proxy = new Proxy({}, {
    get(_, prop) {
      if (!(prop in numbers) && !(prop in operations)) return undefined;

      if (prop in numbers) {
        // Start new chain if needed
        if (chain.length === 1) chain = [];
        // Append number
        chain.push(numbers[prop]);
        return proxy;
      }

      if (prop in operations && chain.length === 1) {
        chain.push(operations[prop]);
        return proxy;
      }

      // Invalid access sequence
      return undefined;
    }
  });

  proxy[Symbol.toPrimitive] = function() {
    if (chain.length === 3) {
      const result = chain[1](chain[0], chain[2]);
      chain = [result];
      return result;
    }
    if (chain.length === 1) {
      return chain[0];
    }
    return NaN;
  };

  return proxy;
})();
