let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1;
console.log(!!isAtivo)
console.log('verdadeiros...')

console.log(!!3) // '!!' saber se um valor que não é boolean é verdadeiro ou falso
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')

console.log('falsos')

console.log(!!0);
console.log(!!'');
console.log(!!null)
console.log(!!NaN)

console.log('teste nome')
let nome = ''
console.log(nome || 'Desconhecido'); //imprime o primeiro valido(true) que encontra
