// const listagemElemento = document.getElementById('lista');
// const lista = [ {nome : "Felipe"},{ nome : "Cacto"}, {nome : "Batata"}];  //crindo array de obj, dando atributo e valor

// //funcao que tem como parametro uma tarefa chamando valor do atributo nome
// function lendoLista (tarefa){
//     return `
//     <li>Primeiro nome ${tarefa.nome}</li>
//     `
// }
// //funcao que percorre meu array de obj, depois escreve no HTML, callback chama funcao lendoLista para trocar item por tarefa, depoisconcatena
// function listaNoHTML(){
//     lista.forEach(function(item){
//         listagemElemento.innerHTML += lendoLista(item)
//     });
// }

// listaNoHTML();

const listagemElemento = document.getElementById('lista');
const lista = [ "Felipe","Cacto","Batata"];  //crindo array de obj, dando atributo e valor

//funcao que tem como parametro uma tarefa chamando valor do atributo nome
function lendoLista (tarefa){
    return `
    <li>Primeiro nome ${tarefa}</li>
    `
}
//funcao que percorre meu array de obj, depois escreve no HTML, callback chama funcao lendoLista para trocar item por tarefa, depoisconcatena
function listaNoHTML(){
    lista.forEach(function(item){
        listagemElemento.innerHTML += lendoLista(item)
    });
}

listaNoHTML();