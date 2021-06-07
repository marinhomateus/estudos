// 1 - Maior de 2 numeros 

function maior (n1, n2){

    if(n1 > n2) return n1;
    if (n1 < n2) return n2;
    else return(console.log("Erro!"))
}

console.log("O maior dos 2 eh ", maior(5,4));


//-----------------------------------------------------------------------
// 2 - Imprimir array em ordem

const three = [8,12,3];

three.sort(function ordem(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0; 
})

for(var i in three){

    console.log(" Numero = ", three[i]);
}

//-----------------------------------------------------------------------
// 3 - Array de cinco numeros e retorna o maior

const numbers = [8,12,3,22,4];
/* 
numbers.sort(function bigger(a, b){
    if(a < b) return 1;
    if(a > b) return -1;
    return 0; 
})
 */
function maiorNum(lista){

    var maiores = 0;
    for(num in lista){
        maior(maiores, num);
    }
    return maiores;
}


console.log("O maior dos 5 eh", maiorNum(numbers));

//-----------------------------------------------------------------------
// 4 - Media de 5 numeros de um array
function media(a){
    
    var total = a.reduce((total, number)=> total + number, 0);
    console.log("A media eh", (total/a.length));
}

media(numbers);

//-----------------------------------------------------------------------
// 5 - Impar ou par

function type(n1){
    for(let i=0; i <= n1; i++){
        var modulo = n1 % 2;
    }
    modulo !== 0 ? console.log(n1," eh IMPAR") : console.log(n1," eh PAR");

}

type(5);

//-----------------------------------------------------------------------
// 6 - Divisivel por 4

function quatro(n1){
    for(let i = 0; i <= n1; i++){
        for(let l = 0; l < i; l++){
            var modulo = i % 4;
        }
        modulo !== 0 ? console.log(i) : console.log("pi");
    }
}

quatro(100);

//-----------------------------------------------------------------------
// 7 - Imprimir propriedades dos objetos

function propriedades(object) {      //Declara a funcao q recebe o objeto
    for(let prop in object) {        //navega pelo objeto
        console.log(prop);           //imprime a prop
    }
}

var Aluno = {nome: "Pedro", idade: "30", altura: "1.80", escola: "SENAI"}

propriedades(Aluno);

//-----------------------------------------------------------------------
// 8 - Funcao recebe data e retorna um objeto com dia, mes e ano

function dma(d){
    console.log("Dia ", d.getDate(),
                " Mes ", d.getMonth(), 
                " Ano ", d.getFullYear());
}

var d = new Date();
dma(d);

//-----------------------------------------------------------------------
// 9 - array de objetos, imprimir maior altura e media de idade

function menor(n1, n2) {

    if(n1 < n2) return n1;
    if(n2 < n1) return n2;
    else console.log("Erro!");
}


function pessoas(listaPessoas){

    var maiorAltura = 0, menorAltura = 999, idades = [];

    for(let pessoa of listaPessoas){
        maiorAltura = maior(maiorAltura, pessoa.altura);
        menorAltura = menor(menorAltura, pessoa.altura);
        idades.push(pessoa.idade);
    }

    console.log(maiorAltura);
    console.log(menorAltura);
    media(idades);

}

pessoas([{altura:1.8,idade:23},
    {altura:1.9,idade:27},
    {altura:1.65,idade:33},
    {altura:1.83,idade:44},
    {altura:1.91,idade:45},
    {altura:1.54,idade:16}])