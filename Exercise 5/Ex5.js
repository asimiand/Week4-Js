
//For

//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

var words = ['mer', 'alex', 'jo', 'derek', 'amelia'];

for (index = 0; index <= words.length-1; index++){
                                            alert(words[index])
};

//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

for (index = 0; index <= words.length-1; index++){
    var modified = words[index].substring(0,1).toUpperCase() + words[index].substring(1).toLowerCase() ;
    alert(modified);
}

//Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.


var sentence = [];

for (index = 0; index <= words.length-1; index++){
    sentence[index]=words[index]
}

alert(sentence);


//Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).

var numbers = [];

for (index = 0; index <= 9; index++){
    numbers.push(index)
}

console.log(numbers);
