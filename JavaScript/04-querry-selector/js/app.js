console.log(
    document.getElementsByTagName("p")
); /*Extrai somente o arquivo do indice 0 para o console*/

console.log(
    document.getElementsByTagName("p")[0].innerHTML
); /* Nao esquecer as aspas */

console.log(
    document.getElementsByTagName("p")[1].innerHTML
); /* Nao esquecer as aspas */

console.log(
    document.querySelector("p").innerHTML
)/*retorna a primeira ocorrencia*/

console.log(
    document.querySelector(".title-2").innerHTML
)/*retorna a primeira pela classe*/

console.log(
    document.querySelector("#p-2").innerHTML
)/*retorna a primeira pelo ID*/

