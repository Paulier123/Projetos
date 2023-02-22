var topo = null;
var quantidade = 0;

function numeroItens (){
    return quantidade;
}    

function adicionar (dados){
    var node = {
        dados: dados,
        proximo: null
};
node.proximo = topo;
topo = node;
quantidade++

}
function remover (){
    if (topo ==null){
        return null;
    }else {
        var removido = topo;
        topo = topo.proximo;
        if (quantidade >0) {
            quantidade--;
            
        }
        return removido.dados;

    }
}
function exibirTopo (){
    if (topo==null) {
        return null;
    }else {
        return topo.dados;
    }

}
function exibirTodos(){
    if (topo===null){
        return null;

    } else {
        var arr = new Arrays();
        var current = topo;

        for (var i=0;i<quantidade;i++){
            arr[i]=current.dados;
            current = current.proximo;
        }
        return arr
    }
}