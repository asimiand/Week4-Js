
//Funciones

//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

var n1, n2;

function suma(n1,n2){
    return n1+n2;
}

var resultado1 = suma(5,2);

console.log(resultado1);

//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

var a1, a2;

function suma(a1,a2){

    if(typeof(a1)!="number" || typeof(a2)!="number")
        return console.log('NaN')

    else{
        return a1+a2;
    }
    
}

var resultado2 = suma(5,'p');

console.log(resultado2);

//Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.


function validate(n){
    if(Number.isInteger(n)){
        return true
    }
    else{
        return false
    }
}

//console.log(validate(8.1));



//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

var b1, b2;

function suma(b1,b2){

    if(typeof(b1)!="number" || typeof(b2)!="number"){
        return console.log('NaN')
    }
    else{
        if(validate(b1)==false || validate (b2)== false){
            return 'Some of the numbers are not integers, the result is rounded to '+Math.round(b1+b2)
            
        }
            
        else{
            return b1+b2
        }   
    }
}

var resultado4 = suma(5.2,5);

console.log(resultado4);

//Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function validate(numb){
    if(Number.isInteger(numb)){
        return numb
    }
    else{
        return false
    }
}

var num1, num2;

function suma(num1,num2){
    return validate(num1)+validate(num2);
}

var resultado5 = suma(5,'p');

console.log(resultado5);