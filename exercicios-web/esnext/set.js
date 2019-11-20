//nao aceita repeticao e nao indexado
const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
