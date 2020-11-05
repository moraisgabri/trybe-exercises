const myRemove = require('./myRemove')

test('my remove testing suit', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  expect(myRemove([1, 2, 3, 4], 4)).not.toEqual([1, 2, 3, 4])
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])  
})

test('check if arr changes', () => {
  const arr = [1, 2, 3, 4];
  myRemove(arr, 1);
  expect(arr).toEqual([1, 2, 3, 4]);
})