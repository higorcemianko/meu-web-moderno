const notas = [5.4, 6.0, 8.7, 3.8, 7.6]

//sem callback
let notasBaixas = []

for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callbacl

let notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)

const marca = ["Audi", "Mercedes", "BMW"]

marca.forEach((nome, ind) => console.log(`${ind + 1}. ${nome}`))