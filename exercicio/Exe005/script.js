
function Verificar() {
    let valor1 = window.document.getElementById('txtx1');
    let valor2 = window.document.getElementById('txtx2');
    let valor3 = window.document.getElementById('txtx3');
    res = window.document.querySelector('div#res');
    let texto1 = Number(valor1.value);
    let texto2 = Number(valor2.value);
    let texto3 = Number(valor3.value);
   
    for (i = texto1 ; i<=texto2; i+=texto3) {
        res.innerHTML += `Passo ${i} ==>`            
    }
    res.innerHTML+=`  Chegou!!!`
                       
}
