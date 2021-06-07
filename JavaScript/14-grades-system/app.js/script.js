//Programa de notas de alunos
//Imprime: Nome do aluno - prova 1 - prova 2 - media - resultado

var alunos = ["Ana","Pedro","Lorenzo"];
var prova1 = [8.0, 9.0, 6.5];
var prova2 = [9.0, 7.0, 6.5];

function media(prova1, prova2){ 

    return (prova1 + prova2)  / 2;
}

function conceito(media){

    if (media >= 7) {
    return("Aprovado");
    }
    else {
    return("Reprovado");
    }
}


for (var index in alunos){
    

    var aluno = alunos[index];
    var p1 = prova1[index], p2 = prova2[index];

    var m = media(p1, p2);

    console.log(aluno, 
                " - ", 
                p1, 
                " - ", 
                p2, 
                " - ", 
                m, 
                " - ",
                conceito(m));
}
