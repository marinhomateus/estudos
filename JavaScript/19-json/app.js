let a = {
    nome: "Mateus",
    nota: 10
}

let b = JSON.stringify(a)

console.log(b);
console.log(a);

let a2 = '{"nome":"Marinho","nota":10}'

let b2 = JSON.parse(a2);

console.log(a2);
console.log(b2);