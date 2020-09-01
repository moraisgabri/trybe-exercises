// verficar se um número é primo

let n = 1
let primo = undefined

for (let i = 1; i <= n; i += 1) {
  if (i !== 1 && i !== n) {
    if (i % n == 0) {
      primo = false

    } else {
      primo = true
    }
  } else if (n === 1 || n === 2){
    primo = true
  }
}

console.log(primo)