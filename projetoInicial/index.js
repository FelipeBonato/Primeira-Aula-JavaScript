// Exercício 1 -> Função que soma dois números
const somar = (primeiroN, segundoN, resultado) => {
	const somado = primeiroN + segundoN;

	resultado(somado);
}

const mostraResultado = (valor) => {
	console.log('O resultado é: ' + valor);
}

somar(3,4, mostraResultado);

console.log('');
console.log('Exercício 2');
console.log('');


//Exercício 2 -> Obj com uma função recebendo lista e callback e imprimindo

const lista = [1,5,3,'cinco',7,'dez'];
const recebeValorLista = (valor) => {
		console.log(valor);
		
}
const imprimirArray = (arr, fun) => {
	for(const items of arr){
		fun(items);
	}
}

console.log('Os valores da array são: ');
imprimirArray(lista, recebeValorLista);
