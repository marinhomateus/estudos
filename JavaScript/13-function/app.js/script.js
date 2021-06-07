/*

function media(nota1, nota2) {
    // var n1 = nota1, n2 = nota2;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

media(100, 50);
media(66, 5);


soma(n1, n2) => {}
*/

function media(prova1, prova2) {

    return (prova1 + prova2) / 2;
}

var m = media;

console.log(media(6,9));

console.log(m(2,8));

console.log("Acabou!");

//FUNCAO ANONIMA:

var notaFinal = function(n1, n2) {

    return (n1 + n2) / 2;
}

console.log("Sua nota eh: ", notaFinal(8 , 4));