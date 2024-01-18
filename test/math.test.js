const { add, subtract } = require('../math');

describe('add function', () => {
  it('should add two numbers', () => {
    const a = 3;
    const b = 7;

    const result = add(a, b);

    expect(result).toBe(10);
  });
})

describe('subtract function', () => {
  it('should add two numbers', () => {
    const a = 3;
    const b = 7;

    const result = subtract(a, b);

    expect(result).toBe(-4);
  });
})
