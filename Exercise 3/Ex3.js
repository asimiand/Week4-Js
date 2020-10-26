//Arrays

//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[10]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var mesesOrd = meses.sort();

console.log(mesesOrd);

//Agregar un elemento al principio y al final del array (utilizar unshift y push).

meses.unshift("1 de Enero");

meses.push("31 de Diciembre");

console.log(meses);

//Quitar un elemento del principio y del final del array (utilizar shift y pop).

meses.shift(); //saca el principio

meses.pop(); //saca el final

console.log(meses);

//Invertir el orden del array (utilizar reverse)

meses.reverse();

console.log(meses);

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var meses2 = meses.join(' - ');

console.log(meses2);

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var mesesNormal = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var MayNov = mesesNormal.slice(4,11);

console.log(MayNov);