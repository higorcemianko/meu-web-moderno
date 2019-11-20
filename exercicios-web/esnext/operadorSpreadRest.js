const funcionario = {nome: 'Maria', salario: 1234.49}
const clone = {ativo: true, ...funcionario}

console.log(clone)

const a = ['João', 'Pedro']
const b = ['Maria', ...a]
console.log(b)

