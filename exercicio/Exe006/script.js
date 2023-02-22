function calcular(){
let tabuada = document.getElementById('tabuada');
let numero = document.getElementById('txnum')
let num = Number(numero.value);
tabuada.innerHTML = ""
for (i=0;i<=10;i++){
    
    let elemento = document.createElement('option')
    elemento.innerHTML = `${num} * ${i} = ${num*i}`
    tabuada.appendChild(elemento)
}
}
calcular()