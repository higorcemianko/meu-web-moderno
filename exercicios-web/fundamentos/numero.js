const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const av1 = 9.871
const av2 = 6.987

const total = av1 * peso1 + av2 * peso2;
const med = total / (peso1 + peso2);

console.log(med.toFixed(2))
console.log(med.toString(2)) //binario

console.log(typeof med)
console.log(typeof Number);

console.log(7 / 0)
console.log("10" / 2)
console.log("10,2" * 2)
console.log(0.1 + 0.7)