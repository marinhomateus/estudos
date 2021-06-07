/* var aluno = { 
    nome: "Joao", 
    cidade: "SP"
}

console.log(aluno.cidade);

aluno.matricula = 000000

console.log(aluno.matricula);

aluno["sobrenome"] = "Santos";

console.log(aluno); 
*/

function notaFinal() {
    return (this.notas[0] + this.notas[1])/2;
}

var aluno= {
    nome: "Joao",
    notas: [7,6],
    media: notaFinal
}

var aluno1 = {
    nome: "Lucas",
    notas: [8,4],
    media: notaFinal
}

console.log(aluno.nome);
console.log(aluno.media());

//necessario os parentes da media, se n ele imprime a funcao propriamente dita

console.log(aluno1.nome);
console.log(aluno1.media());

