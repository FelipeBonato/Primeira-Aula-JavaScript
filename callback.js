function soma(numero, numero2, fun){
    const resultado = numero + numero2;

    fun(resultado);
}
//soma(4, 60, ); 

const printaResultado = (valor) => {
    console.log('sssss ssssss ss. ' + valor );
}

printaResultado(60);
soma(5, 5, printaResultado);