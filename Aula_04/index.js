const listagemElement = document.getElementById('listagem');

const tarefas = [
    {
        descricao : 'primeira tarefa teste',
        feito: false,
        categoria: 'teste'
    },

    {
        descricao : 'segunda tarefa teste',
        feito: true,
        categoria: 'teste2'
    }
];

const elementosTarefa = {
    descricao : document.getElementById('tarefa-descricao'),
    categoria : document.getElementById('tarefa-categoria'),
    salvar : document.getElementById('tarefa-salvar'),
}

elementosTarefa.salvar.addEventListener('click', function(){
    const valorDescricao = elementosTarefa.descricao.value;
    const valorCategoria = elementosTarefa.categoria.value;

    const novaTarefa = {
        descricao : valorDescricao,
        categoria : valorCategoria,
        feito : false
    }
    
    tarefas.push(novaTarefa);
    populaAsTarefasNoHTML();
});

function elementoLiPelaTarefa(tarefa){
    return `
    <li class="list-group-item ${tarefa.feito ? 'riscado' : ''}" >
        ${tarefa.descricao} <span class="badge badge-secondary">${tarefa.categoria}</span></h3>
    </li>
    `
}

function populaAsTarefasNoHTML(){
    listagemElement.innerHTML = '';
    tarefas.forEach(function(item){
        listagemElement.innerHTML += elementoLiPelaTarefa(item); 
    });   
}

populaAsTarefasNoHTML();


     
     
