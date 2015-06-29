var hanoi = function(disc, src, aux, dst) {
	if (disc > 0) {
		hanoi(disc - 1, src, dst, aux);
		document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst + '<br />');
		hanoi(disc - 1, aux, src, dst);
	}
};

//hanoi(3, 'Origem', 'Auxiliar', 'Destino');



// testes
/*var soma = function(n){
	if(n === 1){
		return 1;
	}
	return n + soma(n - 1);
};

console.log(soma(5));*/

/*var soma = function(n){
	return (n === 1) ? 1 : n+ soma(n-1);
};

console.log(soma(3));*/

/*var multiplica = function(a, b){
	return (b === 1) ? a : a + multiplica(a, b - 1);
};
console.log(multiplica(9, 3));*/

var divisao = function(a, b){
	return (b === 1) ? 
};