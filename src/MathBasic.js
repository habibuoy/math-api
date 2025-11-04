const MathBasic = {
  add: function add(...args) {
    if (args.length !== 2) {
      throw new Error('Only accepts exactly two parameters');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Only accepts number parameters');
    }

    return a + b;
  },
  substract: function substract(...args) {
    if (args.length !== 2) {
      throw new Error('Only accepts exactly two parameters');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Only accepts number parameters');
    }

    return a - b;
  },
  multiply: function multiply(...args) {
    if (args.length !== 2) {
      throw new Error('Only accepts exactly two parameters');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Only accepts number parameters');
    }

    return a * b;
  },
  divide: function divide(...args) {
    if (args.length !== 2) {
      throw new Error('Only accepts exactly two parameters');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Only accepts number parameters');
    }

    if (b === 0) {
      throw new Error('Cannot divide with 0');
    }

    return a / b;
  },
};

module.exports = MathBasic;
