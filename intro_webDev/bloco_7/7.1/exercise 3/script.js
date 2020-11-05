window.onload = () => {
  const button = document.querySelector('#button')
  const phrase = document.querySelector('p')  
  let count = 0

  button.addEventListener("click", () => {
    count += 1
    phrase.innerText = `Total de perdas de tempo: ${count}`
  })
}
