const pessoas = [
    "Ana", "Paulo", "Maria", "Igor", "Francisca", "Juan"
]

function randomColor() {
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    return "#"+c()+c()+c();
  }

function sortear(){
    let np = pessoas.length
    let n = Math.floor(Math.random()*np)
    text = document.getElementById("sorte");
    text.innerHTML = pessoas[n];
}

function changeColor(color){
    text = document.getElementById("sorte");
    text.style.color = randomColor();
}

function autoMode(){

    setInterval(sortear, 1000)
    setInterval(changeColor, 500)
}