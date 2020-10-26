//Strings

//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var frase = 'supercalifragi';

var fraseUp = frase.toUpperCase();

console.log(fraseUp);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var frase2 = 'supercalifragilisticoespialidoso';

var firstFive = frase2.substring(0,5);

console.log(firstFive);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var frase3 = 'supercalifragilisticoespialidoso';

var lastFive = frase3.substring(27,32);

console.log(lastFive);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var frase4 = 'supercalifragilisticoespialidoso';

var firstLetter = frase4.substring(0,1).toUpperCase();

var theRest = frase4.substring(1,32).toLowerCase();

var frase4Finished = firstLetter + theRest;

console.log(frase4Finished);

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var name = 'Mery Poppins';

var spacePos = name.indexOf(' ');

console.log(spacePos);

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var longWords = 'mery poppins';

var firstLetter = longWords.substring(0,1).toUpperCase();

var firstLetter2 = longWords.substring(5,6).toUpperCase();

var theRest1 = longWords.substring(1,4).toLowerCase();

var theRest2 = longWords.substring(6,12).toLowerCase();

var combination = firstLetter + theRest1 + ' ' + firstLetter2 + theRest2;

console.log(combination);

