function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Devolvendo a frase: ' + frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(5, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

console.log('Esperando a frase...')