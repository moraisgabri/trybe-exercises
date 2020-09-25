const fat = (num) => {
  let acumulator = 1
  for (let index = 0; index < num ; index += 1) {
    let valor = acumulator * index
    acumulator += valor
  }
  return acumulator
};

console.log(fat(4))