//"use strict"; //faz com que seja obrigatorio declarar toda a variavel utilizada

function falar() {
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: falar
}

let cat = {
    sound: "Miau",
    speak: falar
}

dog.speak();
cat.speak();

//atraves do bind, podemos inserir o contexto do this da que a funcao deve utilizar

let cachorroLate = falar.bind(dog);
let gatoMia = falar.bind(cat);

cachorroLate();
gatoMia();

/*-------------------------------*/

let usuarios = ["Ana",'Bruno','Caio','Daniela','Fernanda','Gabriel'];

const insereUsuario = (nome, callback) =>{
    setTimeout(() => { usuarios.push(nome); callback;}, 1000);
    
}

const listarUsuarios = () =>{
    console.log(usuarios);
}

insereUsuario("Gabriel",listarUsuarios());
// listarUsuarios();

/*-------------------------------*/
// FILTER

function novoAluno(nome, idade){
    return { nome, idade }
}

let alunos = [
    novoAluno("Mateus", 21),
    novoAluno("Maria", 32),
    novoAluno("Marcelo", 40),
    novoAluno("Mariana", 19)
]

function menosQue20 (aluno){
    return aluno.idade < 20
}

//let alunosComMenosde20 = alunos.filter(menosQue20)

console.log(alunos.filter(menosQue20));

/*-------------------------------*/
// MAP

function alunoDaqui5Anos(aluno){
    return { 
        nome: aluno.nome, 
        idade: aluno.idade +5
    }
}

console.log(alunos.map(alunoDaqui5Anos));

/*-------------------------------*/
// Valor e Referencia

let turmaA = ["Ana","Joao","Paula"];

turmaB = [...turmaA]
turmaB.push("William");

turmaC = turmaA.slice();
turmaC.pop();

console.log(turmaA, turmaB, turmaC);


let aluno1 = {nome: "Mateus", idade: 21};
let contato = {telefone: 111111111, endereco: "Rua Alfa"}

aluno2 = Object.assign({}, aluno1)
aluno2.idade = 22;

aluno3 = {...aluno1, cidade: "São Paulo", ...contato} //cópia spread operator
aluno3.nome = "Amanda"

console.log(aluno1,aluno2,aluno3);

/*-------------------------------*/
// REDUCE

const idadeTurma = (total, aluno) =>{
    return total + aluno.idade;
}

console.log(alunos.reduce(idadeTurma, 0))//funçao e valor inicial;