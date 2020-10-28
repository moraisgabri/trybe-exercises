const sum = require('./sum')

test('test sum function', () => {
  expected(sum(4, 5)).toBe(9)
  expected(sum(0, 0)).toBe(0)
  expected(sum(4, '5')).toBe(9)
})