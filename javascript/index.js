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

