const sum = require('./sum')

describe('testing sum function', () => {
  it('4 + 5 must be 9', () => {
    expect(sum(4, 5)).toBe(9)
  })

  test('throws an error', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('0 + 0 must be 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  
  it('4 + string must return error', () => {
    expect(4, '5').toBe(9)
  })

})
  test('error is "parameters must be numbers"', () => {
    expect(() => {
    sum(4, '5')
    }).toThrow('parameters must be numbers');
  })