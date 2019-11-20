require('./global')

console.log(MinhaApp.saudacao())
console.log(MinhaApp.nome)
MinhaApp.nome = 'Teste'
//nao mudou pois esta com "freeze"
console.log(MinhaApp.nome)


