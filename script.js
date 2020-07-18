
var calcular = document.querySelector('.corpo button');


function imc() {
    var peso = document.querySelector('#input1').value
    var altura = document.querySelector('#input2').value
    var resultado = peso / (altura ** 2);
    document.querySelector('.corpo h1').innerHTML = resultado.toFixed(2);
    
    var h2 = document.querySelector('.corpo h2');
    
    if(resultado < 18.5) {
        h2.innerText = "Abaixo do peso";
        h2.style.color = "red";
    } else if(resultado > 18.5 && resultado < 24.9) {
        h2.innerText = "Peso normal";
    } else if(resultado > 25 && resultado < 29.9) {
        h2.innerText = "Sobrepeso";
        h2.style.color = "red";
    } else if(resultado > 30 && resultado < 34.9) {
        h2.innerText = "Obesidade 1";
        h2.style.color = "red";
    } else if(resultado > 35 && resultado < 39.9) {
        h2.innerText = "Obesidade 2";
        h2.style.color = "red";
    } else if(resultado > 40 ){
        h2.innerText = "obesidade 3";
        h2.style.color = "red";
    } else {
        h2.innerText = "";
    } 
}
   

calcular.setAttribute('onclick', 'imc()');
