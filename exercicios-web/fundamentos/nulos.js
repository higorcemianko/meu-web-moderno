const a = {nome: 'Teste'}
console.log(a)

// copia feita por REFERENCIA quando é um objeto
const b = a;
console.log(b)

b.nome = 'Ola'
console.log(a)
console.log(b)

let c = 3
// copia feita por VALOR quando tipo primitivo
let d = c
d++
console.log(d)
console.log(c)