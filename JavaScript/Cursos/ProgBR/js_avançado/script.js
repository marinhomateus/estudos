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
