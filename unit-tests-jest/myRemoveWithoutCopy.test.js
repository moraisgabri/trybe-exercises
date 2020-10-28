const myRemoveWithoutCopy = require('./myRemoveWithoutCopy')

test('my remove without copy test suit', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})
  
test('check if arr changes', () => {
  const arr = [1, 2, 3, 4]
  expect(myRemoveWithoutCopy(arr, 3)).toEqual(arr)
})