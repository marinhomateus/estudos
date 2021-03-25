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