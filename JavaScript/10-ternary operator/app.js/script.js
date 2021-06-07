var idade = 22;

var pode = idade >= 18? true: false; 

//funciona da mesma maneira que um if, porem de maneira simplificada, apos o interrogacao inserimos o valor se a condicao for verdadeira e apos o dois pontos o valor se for falso.

console.log(pode)

var prova1 = 7, prova2 = 7, conceito = "";
var media = (prova1 + prova2) / 2;

var notaFinal = console.log("Sua nota final eh: " + media);

if (media >= 9){
    conceito = "Perfeito";
}

else if (media >= 7){
    conceito = "Bom";
}

else if(media >= 5){
    conceito = "Regular";
}

else{
    conceito = "Negativo";
}

console.log(conceito);

switch (conceito){

    case "Perfeito":
        console.log("Parabens!!!");
        break;

    case "Bom":
        console.log("Esta acima da media!!!");
        break;

    case "Regular":
        console.log("Cuidado!!!");
        break;

    default:
        console.log("Estude mais!!!");
        break;
}