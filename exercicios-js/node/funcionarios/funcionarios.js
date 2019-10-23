const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//mulher chinesa com menor salario

//MEU

/*axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.reduce(function(mulherChinesaMenorSalario, funcionario){
        if (funcionario.pais === 'China' && funcionario.genero === 'F' ){
            if (funcionario.salario < mulherChinesaMenorSalario.salario || mulherChinesaMenorSalario.pais !== 'China'){
                mulherChinesaMenorSalario = funcionario;
            }
        }
        return mulherChinesaMenorSalario;
    }))
    
})*/

//PROFESSOR
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
    
}
axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})