const obj1 = {
  city: "São Paulo",
  state: "São Paulo"
};

const obj2 = {
  city: "Campinas",
  state: "São Paulo"
};

const obj3 = {
  city: "São Paulo",
  state: "São Paulo"
};

test('compare objects', () => {
  expect(obj1).toEqual(obj3)
  expect(obj2).not.toEqual(obj1)
})