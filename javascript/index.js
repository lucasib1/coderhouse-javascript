//COMENTARIOS EN UNA SOLA LINEA


/*GENERAR COMENTARIOS
CODIGO EN SECUENCIA LEE DE ARRIBA HACIA ABAJO
*/

/**
 * VARIABLE = es un contenedor que almacena datos,los tipos de datos que puede almacenar son varios, numericos 
 * cadena de caracteres (string), booleano, arrays objetos, funciones.
 * 
 * scope = se refiere a ambito,hace referencia al contexto en el que la variable va a ser accesible o visible.
 * es de donde se va a poder acceder.
 * 
 * palabra clave(var , let o const) seguido de un nombre para esa variable (tiene que hacer referencia al dato que va a alojar ) =datos ;
 * las variables solamente van a alojar un solo tipo de dato!!
 * 
 * var => No se recomienda mucho.Se usaba en versiones antiguas de js. scope de topo global (puede acceder al dato que aloja fuera o denmtro de nuestro codigo dificil de controlar  )


ejemplo

var numero =18;


 */

/** 
*let => tiene un scope de bloque(solo existe esta variable dentro del bloque de codigo donde fue declarado) solo el dato que se aloja dentro de esta variable puede modificarse.
*utilizan camelCase => primeraPalabra =primeraletra de cada palabra en mayuscula.
*
*const => Es una variable que no se va a poder modificar, son valores filos. en bloque 
* las constantes se crean utilizando VEINTE_Y_DOS (utilizan snakeCase)se usa para diferenciar let y const en nuestro codigos.
*
*en javascript las variables son Keysensitivve => que javascript dependiendo como escribamos nosotros la palabra las va a considerar diferentes.

let rosa =8;
let ROSA =9;
let Rosa =5;
Para javascrit las va a considerar diferentes.

*/

//declarar 
let numero; 

//asignacion 
numero = 1 ;

//VARIABLES DECLARADAS E INICIALIZADA

let veinteYUno = 21;
console.log(veinteYUno)

veinteYUno ="veinte y uno";
console.log(veinteYUno);

/* las cadenas de caracteres o string 
se escriben entre 
""
' ' 
``
*/


const VEINTE_Y_DOS =22;
console.log(VEINTE_Y_DOS);

//console.log(), es una funcion que nos permite 
//imprimir mensajes o valores en nuestra consola
//del navegador.(solo mostrar en la consola)

/**
 * operadores 
 * 
 * +
 * -
 * *
 *  /
 * %
 *

let numeroUno =8;
let numeroDos =10;

let suma =numeroUno + numeroDos;
console.log("resultado de la suma es "+ suma)

/**
 * Prompt ()
 * como setencia y funcion me permite a mi
 * que el usuario introduzca informacion
 * todos los datos que recupera prompt los almacena como una cadena de caracteres.
 * para poder en caso de usar numeros, convertirlos como tal escribimos  parseInt(y dentro de los parentesis
 *  ponemos el prompt)
 */
let numeroUno = parseInt(prompt("por favor ingresa un numero: "));
let numeroDos = parseInt(prompt("ingresa otro numero: "));

let suma=numeroUno + numeroDos;
console.log("el resultado de la suma es "+ suma);

// }else{
//     console.log("no va a funcionar campeon pq no es igual el tipo numerico")
// }

//cuantos años tengo.

//cuando lleva el numero un punto flotante se usa parseFloat

// let edad = parseInt( prompt("por favor ingresa tu edad para ingresar al cheboli:"))

/*
    mayor que o menor que

    mayor  > (el numero es mayor al que se esta comparando)(no incluye)
            >= (el numero es mayor e igual al que se esta comparando)(si lo incluye)

    menor < (el numero es menor al que se esta comparando)(no se incluye)
        <= (l numero es menor al qu se esta comparando)(se incluye)
*/


// if (edad >= 18){
//     console.log("el pibe puede entrar")
// }else{
//     console.log("el pibe no tiene 18")
// }

// else if => cuando nosotros queremos comparar o hacer multiples condiciones

//notas de evaluacion 

// 90 => el examen es optimo

// 75 => el examen es correcto

// 60 => el examen es bajo

// -60 => el examen esta desaprobado

// let nota = parseInt(prompt("Ingresa nota del alumno:"))


// if(nota >= 90){
//     //podemos ejecutar mas codigo => puede haber otro if, puede ejecutarse una funcion
//     console.log("el pibe es crack saco optimo con " + nota)
// }
// else if(nota >= 75){
//     console.log("el pibe esta bien tiene un correcto")
// }
// else if(nota >=60){
//     console.log("el pibe safo tiene una nota baja")
// }
// else{
//     console.log("ni chatgpt lo ayudo");
// }

/*
    operador logico and &&

    este operador va a devolver true, siempre y cuando las condiciones que se comparen
    sean verdederas


    a     b      a && b
    true  true  true (se va a ejecutar)
    true  false  false( no se va ejecutar)
    false true  false( no se va ejecutar)
    false false false (no se va a ejecutar)


    */ 

// let edad = 18;

// let tieneLicencia = false;

// // para que una persona pueda manejar debe ser mayor de eddad y tener registro

// if( edad >= 18 && tieneLicencia == true){
//     console.log("el chico puede manejar")
// }
// else{
//     console.log("el chico no puede manejar")
// }


// operador OR se expresa con || se va ejecutar el bloque de codigo
//si al menos una condicion es verdadera
/*
      a   b    a || b

    true true  true (se va a ejecutar)
    true false true (se va a ejecutar)
    false true true (se va a ejecutar)
    false false false ( NO se va a ejecutar)

*/

// let nombre = "Pedro";
// let apellido = "DI santo";
// let edad = 25;

// if (nombre === "Juan" && apellido === "Perez" || edad >=18){
//     console.log("La persona cumple con los criterios para llenar la encuesta")
// }else{
//     console.log("la persona no cumple con los criterio")
// }

/* 
 operador not !
     true  => !true => false
    false => !false => verdadero

*/

let campoNombre = "";

if(!campoNombre){
    console.log("el campo nombre esta vacio por favor completa el campo")
}
else{
    console.log("el campo completado")
}