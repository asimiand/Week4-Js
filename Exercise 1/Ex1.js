//Variables y Operadores

//Operadores Matematicos: ( + -  / * )

//Operadores Unarios Aritmeticos
//++ Incremento
//-- Decremento

//Operadores de asignacion: = , += , *= , /=
//Asignacion de adicion: +=
//Asignacion de sustraccion -=
//Asignacion de multipliacion */
//Asignacion de division /=
//Operador modulo u Operador resto % (devuelve el residuo de una division, el resto)

//Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

var num1 = 1;
var num2 = 2;

var sum = num1 + num2;

console.log(sum);

console.log(num1 += num2); 

//Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

var name1 = 'Marie';
var lastName1 = 'Curie';

var completeName = name1 + lastName1;

console.log(completeName);

//Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).

var name2 = 'Helga';
var lastName2 = 'Patacky';

var nameLength = name2.length + lastName2.length;

console.log(nameLength);
