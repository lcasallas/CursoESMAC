//Parametros por defecto en las funciones
//Antes
function newFunction(name, age, country) {
	var name = name || 'oscar';
	var age = age || 32;
	var country = country || 'CO';

	console.log(name, age, country);
}
//Ahora es6
function newFunction2(name = 'oscar', age = 32, country = 'CO') {
	console.log(name, age, country);
}

newFunction2();
newFunction2('leo', 30, 'ES');

//Template literals
//Antes
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilinea
//Antes
let lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
	'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

console.log(lorem);
//es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`;
console.log(lorem2);

//Destructuracion de elementos
let person = {
	name: 'Leonardo',
	age: 30,
	country: 'CO',
};
console.log(person.name, person.age, person.country);

//es6
let { name, age, country } = person;
console.log(name, age, country);

//Split operator (operador de propagacion)
//es6
let team1 = ['oscar', 'julian', 'leo'];
let team2 = ['valeria', 'yesica', 'camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

//Variables
//antes
//var se establece de manera global en todo el archivo.
{
	var hola = 'global'; //variable Global
}

//es6
//let en este caso solo esta disponible en mi scope o bloque de codigo donde se define.
{
	let globalLet = 'global let';
}

//const
const a = 'b'; // Estas variables constantes no se pueden modificar mas adelante.
a = 'a'; //=> Aqui presenta error.
console.log(a);

//Arrow Function, Promesas y Parametros
let name = 'leo';
let age = 32;

//Antes
obj = { name: name, age: age };

//es6
obj2 = { name, age }; //=> toma como nombre de llave el mismo de la variable.
console.log(obj2);

//Arrow function => Funciones anonimas.
const names = [
	{ name: 'leo', age: 30 },
	{ name: 'clau', age: 29 },
];
//Antes
let listOfNames = names.map(function(item) {
	console.log(item.name);
});
//es6
let listOfNames2 = name.map(item => console.log(item.name));

let listOfNames3 = (name, age) => {
	//codigo de funcion.
};

let listOfNames4 = name => {
	//Este es para cuando solo indico un parametro.
};

const square = num => num * num; //retorno inmediato.
