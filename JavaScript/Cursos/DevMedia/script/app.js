/*
const tecnologias = [
    { nome: "JavaScript", tipo: "Linguagem" },
    { nome: "React", tipo: "Biblioteca" },
  ];
  
  for ( let i = 0 ; i < tecnologias.length ; i++) {
        console.log(tecnologias[i].nome);
        console.log(tecnologias[i].tipo);
  }
*/

/*
function somarQuadrado(numeros) {
  let i = 0;
  let total = 0;

  
while (i < numeros.length) {
    total += numeros[i] * numeros[i];
    i++;
  }

  console.log(total);
}

const numeros = [ 1,2,3,4,5];
somarQuadrado(numeros)
*/

/*
const numeros = [0, 1, 2, 3, 4, 5];
let i = numeros.length - 1;

do {
  console.log(numeros[i]);
  i--;
} while (i >= 1);
*/

/*
const tags = [ "Python", "C++", "F#" ];

if (tags.length>=3) {
  for (let i = 0; i<tags.length; i++) {
    console.log(tags[i]);
  }
} else {
  console.log("Insira pelo menos 3 tags");
}
*/

/*
function concederDesconto (valor) {
    return (valor > 100) &&   true;
  }
  
  const valores = [ 90, 150, 654 ];
  
  for (let i = 0; i < valores.length; i++) {
    console.log(concederDesconto(valores[i]));
  }
  */

  /*
 const nomes = ["Largo do Machado", "Presidente Vargas", "Penha"];
 for (const nome of nomes) {
  console.log(nome);
}
*/

/*
const frameworks = [ "Laravel", "Agular", "Entity", "Spring" ];

for (const framework of frameworks) {
  console.log(framework);
}
*/

/*
const nome = "Alberto";
const retorno = nome
 ? "Nome válido"
 : "Digite um nome";
 */

 /* CORTAR NOME
let nome_completo = "Ana Clara de Souza Aguiar";
let array = nome_completo.split(" ");

let nome = array[0] + " " + array[3];

console.log(nome);
*/

/* Excluir parte de strings
let atores = "Will Smith;Brad Pitt;Adam Sandler;Tom Cruise";

let array_atores = atores.split(";");

for(let ator of array_atores) {
    console.log(ator);
}
*/

/*
const filmes = [
  { titulo: "De Volta Para O Futuro", ano: 1985 },
  { titulo: "Vingadores: Ultimato", ano: 2019 },
];

for(let filme of filmes) {
  console.log(filme.ano);
}
*/

/*
var i = 0;

do {
  const quadrado = i * i;
  console.log(quadrado);

  ++i;
} while (i<20);
*/

/*
const numeros = [1, 2, 3, 4, 5];

for ( let i = numeros.length - 1; i >= 0;  i--) {
  console.log(numeros[i]);
}
*/

/* SPELL
const login = 'fernando';
const numeroDeLetras = login.length;

if (numeroDeLetras < 3) {
  console.log("Login muito curto");
} else if (numeroDeLetras > 20) {
  console.log("Login muito grande.");
} else {
  
soletrarLogin(login)
;
}

function soletrarLogin(texto) {
 for ( let i=0; 
i<texto.length;i++
 ) {
    console.log(texto[i]);
  }
}
*/

/* LOGIN VALIDATION
function validaLogin(login, senha) {
  return (login == "adm" && senha == "admin") && true;
}

const usuarios = [
  { login: "adm", senha: "12345" },
  { login: "adm", senha: "admin" },
  { login: "admin", senha: "admin" },
];

for(const i in usuarios) {
  const verifica = validaLogin(usuarios[i].login, usuarios[i].senha);
  console.log(verifica);
}
*/

/*
function tituloCompleto(itens) {
  
  let
   msgProdutos = "Seus produtos: ";
  
    
  for(let i in itens)
   {
      msgProdutos += "(" + itens[i] + ")";
    }
  
    return msgProdutos;
  }
  
  const itens = ["Controle remoto", "Pilha recarregável"];
  
  console.log(tituloCompleto(itens));
  */

  /* ID VALIDATION
 const produtos = [
  {id: 20, tipo: "Filme"},
  {id: 10, tipo: "Jogo"},
  {id: 8, tipo: "Música"},
];

for(const produto of produtos)
 {
  if ( produto.id === 10 ) {
    console.log(
produto.tipo
);
  }
}
*/

/* CELL PHONE NUMBER SIZE VALIDATION
function validandoCelular (numero) {
  const msg = (numero.length === 11 ) ? "Válido" : "Inválido";
  console.log(msg);
}

const numeros = ["21565488772", "12345", "9865555254254"];

for (let i=0; i < numeros.length; i++) {
  validandoCelular(numeros[i]);
}
*/

/* UPPERCASE WORDS
function letrasMaiusculas(palavra) {
  return palavra.toUpperCase();
}

const titulos = ["Operadores", "Sintaxe", "Objetos"];

for (let i = 0; i < titulos.length; i++) {
  console.log(letrasMaiusculas(titulos[i]));
}
*/

/* FOR OF EXAMPLE
const numeros = [ 1,2,3,4,5];

for (const numero of numeros){

  if ( numero % 2 == 0 ) {
    console.log( numero * numero);
  } else {
    console.log( numero + 1);
  }
}
*/

/* //STRING MANIPULATION - EX0
var stringExample = "This is an example of a string";
var result = stringExample.substring(0,18)//interval
var test = stringExample.substring(19)//separate everything before
console.log(result, test);
 */


/* //STRING MANIPULATION - EX1
name = "Joao da Silva Santos";
parts = name.split(" ");//
console.log(parts);
parts = name.split(" ", 3);//number of parts
console.log(parts);

let idiomas = "português,inglês,francês,espanhol";
let array_idiomas = idiomas.split(",");

for( const idioma of array_idiomas ){
   console.log("Idioma: " + idioma);
}
 */

/* //STRING MANIPULATION - EX2
welcome = "Hello, Welcome to JavaScript!"
test = welcome.replace("JavaScript", "Programming");
console.log(test);

welcome = "Hello, Welcome to JavaScript! Javascript is awesome!"
test = welcome.replace(/javascript/gi, "Programming");
console.log(test);//this way ignores the case sensitive

ad = "Product Price: 1000, Discount: 200";
sale = ad.replace(/\d+/g, function sale(x){return Math.floor(x *= 1.15);});
console.log(sale);//creates a sale edit replacing all numbers
 */

 /* //STRING MANIPULATION - EX3 
let produto = "  camisa  ";

console.log(produto.trim());
*/

/* //STRING MANIPULATION - EX4
names = ["John", "Mary", "Jane", "Daniel", "George", "James", "William"];
group = names.slice(3, -1);
console.log(group);
*/

/*
const chuvas_meteoros = [
  { nome: "Alfa Centaurídeos",	        pico: "Fev 8",   velocidade: "56 km/s"},
  { nome: "Gama Normídeos",	            pico: "Mar 14",  velocidade: "56 km/s"},
  { nome: "Pi Pupídeos",	                pico: "Abr 23",  velocidade: "18 km/s"},
  { nome: "Eta Aquáridas",	            pico: "Mai 5",   velocidade: "66 km/s"},
  { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
  { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
  { nome: "Piscis Austrinídeos",	        pico: "Jul 28",  velocidade: "35 km/s"},
  { nome: "Fenícidas",	                pico: "Dez 6",   velocidade: "18 km/s"},
  { nome: "Pupidas-Velidas",	            pico: "Dez 12",  velocidade: "40 km/s"}
];

let titulo = "=== chuvas de meteoros - hemisfério sul ===";
console.log(titulo.toUpperCase());
console.log("\n");

for ( const chuva of chuvas_meteoros ){

  let nome_chuva = chuva.nome;
  let pico_chuva = chuva.pico;
  let velocidade_chuva = chuva.velocidade;

  let pico_mes_dia = pico_chuva.split(" ");

  let pico_dia = pico_mes_dia[1];
  let pico_mes = pico_mes_dia[0];

  let pico_mes_nome = "";

  switch (pico_mes) {

      case "Jan":     pico_mes_nome = "Janeiro";     break;
      case "Fev":     pico_mes_nome = "Fevereiro";     break;
      case "Mar":     pico_mes_nome = "Março";     break;
      case "Abr":     pico_mes_nome = "Abril";     break;
      case "Mai":     pico_mes_nome = "Maio";     break;
      case "Jun":     pico_mes_nome = "Junho";     break;
      case "Jul":     pico_mes_nome = "Julho";     break;
      case "Ago":     pico_mes_nome = "Agosto";     break;
      case "Set":     pico_mes_nome = "Setembro";     break;
      case "Out":     pico_mes_nome = "Outubro";     break;
      case "Nov":     pico_mes_nome = "Novembro";     break;
      case "Dez":     pico_mes_nome = "Dezembro";     break;

      default:        pico_mes_nome = "Mês inválido";    break;

  }

  let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;

  let velocidade_formatada = velocidade_chuva.replace("km/s", "quilômetros por segundo");

  console.log("Nome: ".padEnd(30, ".") + nome_chuva);
  console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
  console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
  console.log("\n");

}
*/
/* 
let frase = "Eu sou programador JavaScript";

let resultado = frase.substring(7, 18);

console.log(resultado); */


/* 
let cores = "verde azul branco amarelo preto";

let array_cores = cores.split(" ");

for ( const cor of array_cores ){
    if( cor.length > 5 ){
        console.log(" A cor ", cor, " tem mais que 5 caracteres" );
    } else {
        console.log(" A cor ", cor, " não tem mais que 5 caracteres" );
    }

}
 */

 /* SEXTA FEIRA 13
const dataAtual = new Date();

const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();

console.log(diaSemana)
console.log(diaMes)

if ( diaSemana == 5 && diaMes == 13 ) {
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if ( diaSemana == 5 ) {
  console.log('Sextou!!!!!');
}
*/

/* 
const chuvaDeMeteoros = [
  { nome: 'Alfa Centaurídeos',	    declinacao:	-59 },
  { nome: 'Gama Normídeos',	        declinacao:	-50 },
  { nome: 'Pi Pupídeos',	          declinacao:	-45 },
  { nome: 'Líridas',	              declinacao:	34  },
  { nome: 'Eta Aquáridas',	        declinacao:	-1  },
  { nome: 'Eta Líridas',	          declinacao:	44  },
  { nome: 'Bootídeos de Junho',	    declinacao:	48  },
  { nome: 'Alfa Capricornídeos',    declinacao:	-10 },
  { nome: 'Delta Aquáridas do Sul', declinacao:	-16 },
  { nome: 'Piscis Austrinídeos',	  declinacao:	-30 },
  { nome: 'Perseidas',	            declinacao:	58  },
];

function imprimirChuva (chuva) {
  const hemisferio = ( chuva.declinacao >= 0 ) ? 'Norte' : 'Sul';
  console.log( 'Chuva: ' + chuva.nome + ' Hemisfério :' + hemisferio );
}

chuvaDeMeteoros.forEach(imprimirChuva);
*/

/*
const jogos = [
  { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
  { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
  { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
  { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
  { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
  { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
];

const verificaJogoRecente = (jogo) => jogo.anoLancamento > 2000;

const imprimirJogo = ( jogo ) => {
  const textoJogo = jogo.nome + ' - ' + jogo.plataforma;
  console.log(textoJogo);
};

const jogosRecentes = jogos.forEach(verificaJogoRecente);
console.log(jogosRecentes)
jogosRecentes.forEach(imprimirJogo);
*/

/*
const jogos = [
  { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
  { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
  { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
  { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
  { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
  { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
];

function imprimirJogo (jogo) {
  console.log( jogo.nome + ' - ' + jogo.anoLancamento );
}

function retornaJogosFliperama (jogo) {
  return jogo.plataforma == 'Fliperama' && jogo;
};

const jogosFliperama = jogos.filter(retornaJogosFliperama);

jogosFliperama.forEach(imprimirJogo);
*/

/*
const hoje = new Date ( );
const minutosFuso = hoje.getTimezoneOffset ( );

console.log('Seu horário possui: ' + minutosFuso + ' minutos de diferença');
*/

/*
let texto = "A linguagem JavaScript é excelente!";
let resultado = texto.substr(12);


console.log(resultado)
*/

/*
let marca = 'Volkswagen';

let lista_carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12.000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14.000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20.000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12.000 },
    { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25.000 },
    { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13.000 },
    { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15.000 },
    { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15.000 }
];

const filtra_carros = (carros, filtro_marca) => {
    let carros_filtros = carros.filter(carro => carro.marca === filtro_marca);

    return carros_filtros;

}

let resultado = filtra_carros(lista_carros, "Volkswagen");

console.log(resultado);
*/
/*
const cores = [
    'Verde',
    'Amarelo',
    'Azul',
    'Branco'
];

let index = 0;

while(index < cores.length) {
    console.log(index, cores[index]);
    index++;
}
*/
/* 
let contador = 0;

let notas = [5, 7, 6, 8];

let soma = 0;
let media = 0;

do {

    console.log(notas[contador]);

    soma = soma + notas[contador];

    contador++;

} while ( contador < notas.length );

media = soma / notas.length;

if( media >= 6 ){
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}
 */

