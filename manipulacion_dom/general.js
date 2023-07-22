

<script>
// Esto es un comentario
/* Esto tambien es un comentario*/

/*
Tipos de datos:
undefined, null, boolean, string, symbol, number, object
*/
	var miVariable = "freeCodeCamp";
	console.log(miVariable);

	var a;//obtendra undefined
	console.log(a);
	a=10;
	console.log(a);
	
	var suma=7+12;
	console.log(suma);
	
	var numeroDecimal=23.4;
	console.log(numeroDecimal);
	
	var libros = 105;
	libros = libros + 1;
	libros++; //incrementar en 1	
	libros = libros - 1;
	libros--;
	console.log(libros);	
	
	libros += 5;
	libros -= 5;
	console.log(libros);
	
	var salario = 2;
	salario *=2;
	console.log(salario);	
	
	var nombre = "Alan";
	var nombre2 = "Alan";
	var nuevoNombre = nombre + nombre2	
	console.log(nuevoNombre);	
	
	console.log(nombre.length)
	
	var lenguaje="JavaScript"
	console.log(lenguaje[0])	
	console.log(lenguaje[lenguaje.length - 1])
	
	var palabraBlanco="";
	
	var miArreglo = [1,4,45,3];
	console.log(miArreglo[0])		

	var miArreglo = [[1,4,45,3],[432,234,23]];
	console.log(miArreglo[0])
	
	miArreglo[0] = [1,2,3]
	console.log(miArreglo[0])	

	console.log(miArreglo[0][0])

	miArreglo.push([1,2,3]);
	console.log(miArreglo)	
	
	miArreglo.pop();//elimina el ultimo elemento
	console.log(miArreglo)	
	
	miArreglo.shift(); // elimina el primer elento
	console.log(miArreglo)	


	miArreglo.unshift([2,2,2,2,2]); // agrega al pricipio
	console.log(miArreglo)	
	
	function mostrarMensaje(mensaje) {
		console.log(mensaje)
	}
	mostrarMensaje("Hola Mundo");
	mostrarMensaje("Como estas ");
	
	var variableGobal = 5;	
	function mostrarVariable() {
		var variableLocal = 6;
		console.log(variableGobal)
		console.log(variableGobal*variableLocal)
	}
	mostrarVariable();
	

	function mostrarVariable2() {
		var variableLocal = 6;
		return variableGobal*variableLocal;
	}
	console.log(mostrarVariable2());	
	
	
	/*var boolean = true
	console.log(boolean & true);
	console.log(boolean & false);			
	
	console.log(boolean | true);
	console.log(boolean | false);	
	
	console.log(5==5);
	
	console.log(5=="5");	//true
	console.log(5==="5");	//false
	
	console.log(5!="5");	//false
	console.log(5!=="5");	//true	*/
	
	console.log(5<="5");	//true		
	
	
	//AND &&
	//OR  \\
	//NOT !
	
	if (true) {
		console.log("Condicion verdadera")
	} else{
		console.log("Condicion falsa")
	}
	
	if (false) {
		console.log("Condicion verdadera")
	} else if (true){
		console.log("Entra el else if")
	} else{
		console.log("Condicion falsa")
	}	
	
	function mostrarVariable3() {
		var variableLocal = 6;
		return variableGobal*variableLocal;
		console.log('adsdas')
	}
	
	
	var miPerro = {
		"nombre":"Gino",
		"edad":5,
		"peso":6,
		"raza":"Beagle"
	}
	
	console.log(miPerro.nombre)
	console.log(miPerro["edad"])
	
	
	miPerro["nombre"] = "Hola"
	console.log(miPerro.nombre)	

	miPerro.nombre = "Hola2"
	console.log(miPerro.nombre)	
	
	delete 	miPerro.raza;
	console.log(miPerro)	
	
	console.log(miPerro.hasOwnProperty('nombre'))
	
	var i=0
	
	while (i<=3){
		console.log("Hola a todos")
		i++;
	}
	
	var miArreglo=[]
	for (var j=0;j<10;j++){
		miArreglo.push(j);
	}
	console.log(miArreglo)
	
	for (var i=0;i<miArreglo.length;i++){
		console.log(miArreglo[i])
	}
	
	function generaNumero(){
		return Math.random()
		
	}
	
	console.log(generaNumero())
	
	var nummeroEntero = Math.floor(generaNumero()*20)
	console.log(nummeroEntero)
	

	console.log(parseInt("5"))
	console.log(parseInt("abc"))
	
	function reotrnarMinimo(x,y){
		console.log(x<y ? x : y)
	}
	
	reotrnarMinimo(1,4)
	
	
	// var sirve apra declarar variable se puede declarar mas de una vez
	// var campista="hola"
	// var campista="hdfsdfsola"	
	// declarar variables globales y lcoales
	
	
	// let no se puede declarar mas de una vez
	// Solo las varuabes declaradas con let es mas restrictivo y solo sriven dentro del bloque de codigo
	
	const MI_CONSTANTE=35 //es necesrio inicializar y no se puede volver a cambair de valor
	console.log(MI_CONSTANTE)
	
	const MI_ARREGLO=[1,2,3]
	MI_ARREGLO[0] = 5; // un arreglo si puede cambiar valores internos en un arrglo
	
	// impedir mutacion de objeto
	
	
	let miPerro2 = {
		"nombre":"Gino",
		"edad":5,
		"peso":6,
		"raza":"Beagle"
	}
	
	// previene modificacion de objectos
	Object.freeze(miPerro2)
	
	//funcion flecha
	const fecha = () => new Date();
	
	const sumarTres = (x) => x+3
	
	console.log(sumarTres(4))
	
	const incrementar = (num, valor=3)=> num +valor
	
	console.log(incrementar(4))
	
	function miFuncion(...args) {
		console.log(args)
	}
	
	miFuncion(1,2,3,[4])
	
	const numeros = [1,2,3]
	
	function sumar(x,y,z) {
		return x+y+z
	}
	
	console.log(sumar(...numeros))
	
	var miPerro3 = {
		"nombre":"Gino",
		"edad":5,
		"peso":6,
		"raza":"Beagle"
	}
	
	
	const {nombe,edad,peso,raza} = miPerro3
	console.log(nombe,edad)
				
</script>
