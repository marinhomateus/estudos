// pratos = new Pratos("Feijoada", "Rubacao", "Farofa", "Estrogonofe", "Macarrao"); uma maneira de se declarar
var pratos = ["Feijoada", "Rubacao", "Farofa", "Estrogonofe", "Macarrao"];

/* uma maneira de usar o array em conjunto com o for
for (var i = 0; i < pratos.length; i++) {
    console.log(pratos[i])
}
*/

for (var i in pratos) {
    console.log(pratos[i])
    console.log("Elemento ", i)
}

console.log("Acabou!")