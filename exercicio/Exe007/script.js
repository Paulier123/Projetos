
    let numero = document.getElementById('txnum')    
    let lista = document.getElementById('lista')
    let res = document.querySelector('div#res')
    let valores =[]

function adicionar(){//buscar os elemento do html
    valores.push(Number(numero.value))
    elemento = document.createElement('option')//criar uma option elemento para 
    lista.appendChild(elemento)
    elemento.text = `Novo valor: ${numero.value}`
    numero.value=''
    numero.focus()   
}

 function somar(){
    let total = valores.reduce((ini,atual)=>{return ini+=atual})
    res.innerHTML = `O total de valores é:<strong> ${total} </strong>.`
    
}


adicionar()
somar()
