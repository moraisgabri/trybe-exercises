const myFizzBuzz = require('./myFizzBuzz')

describe('myFizzBuzz test suit', () => {
  it('3 and 5 must return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  })

  it('myFizzBuzz(3) must return fizz', () => {
    expect(myFizzBuzz(3)).toEqual('fizz')
  })

  it('myFizzBuzz(5) must return buzz', () => {
    expect(myFizzBuzz(5)).toEqual('buzz')
  })

  it('if param isnt divisible by 3 or 5 return param', () => {
    expect(myFizzBuzz(7)).toEqual(7)
  })

  it('if param isnt a num must return false', () => {
    expect(myFizzBuzz('XABLAU')).toEqual(false)
  })
})