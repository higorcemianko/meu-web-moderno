const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', x => {
        const nome = x.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}