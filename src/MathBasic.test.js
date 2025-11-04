const MathBasic = require('./MathBasic');

describe('A math basic', () => {
  it('should constains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
});

describe('An add function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.add()).toThrow();
    expect(() => MathBasic.add(1)).toThrow();
    expect(() => MathBasic.add(1, 2, 3)).toThrow();
    expect(() => MathBasic.add(1, 2, 3, 4)).toThrow();
  });

  it('should throw error when give non-number parameters', () => {
    expect(() => MathBasic.add('1', '2')).toThrow();
    expect(() => MathBasic.add(true, {})).toThrow();
    expect(() => MathBasic.add(null, false)).toThrow();
  });

  it('should return a + b when given two number parameters', () => {
    expect(MathBasic.add(1, 2)).toEqual(3);
    expect(MathBasic.add(5, 5)).toEqual(10);
    expect(MathBasic.add(0, 1)).toEqual(1);
  });
});

describe('A subtract function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.subtract()).toThrow();
    expect(() => MathBasic.subtract(1)).toThrow();
    expect(() => MathBasic.subtract(1, 2, 3)).toThrow();
    expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrow();
  });

  it('should throw error when give non-number parameters', () => {
    expect(() => MathBasic.subtract('1', '2')).toThrow();
    expect(() => MathBasic.subtract(true, {})).toThrow();
    expect(() => MathBasic.subtract(null, false)).toThrow();
  });

  it('should return a - b when given two number parameters', () => {
    expect(MathBasic.subtract(1, 2)).toEqual(-1);
    expect(MathBasic.subtract(5, 5)).toEqual(0);
    expect(MathBasic.subtract(0, 0)).toEqual(0);
  });
});

describe('A multiply function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.multiply()).toThrow();
    expect(() => MathBasic.multiply(1)).toThrow();
    expect(() => MathBasic.multiply(1, 2, 3)).toThrow();
    expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrow();
  });

  it('should throw error when give non-number parameters', () => {
    expect(() => MathBasic.multiply('1', '2')).toThrow();
    expect(() => MathBasic.multiply(true, {})).toThrow();
    expect(() => MathBasic.multiply(null, false)).toThrow();
  });

  it('should return a * b when given two number parameters', () => {
    expect(MathBasic.multiply(1, 2)).toEqual(2);
    expect(MathBasic.multiply(5, 5)).toEqual(25);
    expect(MathBasic.multiply(0, 0)).toEqual(0);
    expect(MathBasic.multiply(1, -3)).toEqual(-3);
    expect(MathBasic.multiply(-2, -4)).toEqual(8);
  });
});

describe('A divide function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.divide()).toThrow();
    expect(() => MathBasic.divide(1)).toThrow();
    expect(() => MathBasic.divide(1, 2, 3)).toThrow();
    expect(() => MathBasic.divide(1, 2, 3, 4)).toThrow();
  });

  it('should throw error when give non-number parameters', () => {
    expect(() => MathBasic.divide('1', '2')).toThrow();
    expect(() => MathBasic.divide(true, {})).toThrow();
    expect(() => MathBasic.divide(null, false)).toThrow();
  });

  it('should throw when the second parameter is 0', () => {
    expect(() => MathBasic.divide(1, 0)).toThrow();
    expect(() => MathBasic.divide(5, 0)).toThrow();
    expect(() => MathBasic.divide(10, 0)).toThrow();
  });

  it('should return a * b when given two number parameters', () => {
    expect(MathBasic.divide(1, 2)).toEqual(0.5);
    expect(MathBasic.divide(5, 5)).toEqual(1);
    expect(MathBasic.divide(10, -2)).toEqual(-5);
    expect(MathBasic.divide(-18, -2)).toEqual(9);
  });
});
