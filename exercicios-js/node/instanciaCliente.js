const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
//retorna o mesmo valor pois pelo cache apontam para a mesma instancia
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()

//retorna valor diferente pois a funcao devolveu uma instancia nova
console.log(contadorC.valor, contadorD.valor)





