/* 1. Declara variables con var, let y const dentro de una función y dentro de un bloque
if.  */


La diferencia de la variable 'const' radica en que son de 'ALCANCE GLOBAL'
const entero = 20;
const fuera = "Estoy fuera de la funcion";

function variablesEnFuncion() {
  var numero = 23;
  var text = "Amanda";
  var boolean = true;

  let num1 = 10;
  let texto = "Hola Mundo";
  let booleano = false;

  const inFunction = 34;
  const inFunction2 = 8.23;
  const inFunctio3 = "saludos";
  const inFunctio4 = true;

  console.log("Uso de variables 'var'\n");
  console.log(numero);
  console.log(text);
  console.log(boolean);

  console.log("\nUso de variables 'let'\n");
  console.log(num1);
  console.log(texto);
  console.log(booleano);

  console.log("\nUso de variables 'const' dentro de una Funcion\n");
  console.log(inFunction);
  console.log(inFunction2);
  console.log(inFunctio3);
  console.log(inFunctio4);

  console.log("Uso de variables 'const' declarada fuera de una Funcion\n");
  console.log(entero);
  console.log(fuera);
}
// llamado de funcion
variablesEnFuncion();

console.log("\nImpresion de variables 'var' fuera de la funcion\n");
console.log(numero);
console.log(text);
console.log(boolean);

console.log("declaracion dos veces con mismo nombre");
let nombre = "Amanda";   // Cannot redeclare block-scoped variable 'nombre'.ts(2451)
let nombre = "Enmanuel";  // Cannot redeclare block-scoped variable 'nombre'.ts(2451)
const texto = "Dias de la semana";  // Cannot redeclare block-scoped variable 'nombre'.ts(2451)
const texto = "Meses del año";  // Cannot redeclare block-scoped variable 'nombre'.ts(2451)


/*.Hosting = ingles To Hoist = elevar.
En todas declaraciones la variable se mueve automaticamente al inicio de su scope(alcance)
antes de ejecutar el codigo (solo la declaracion no el valor el cual denotara 'undefined')  */
console.log("declaracion varias veces con mismo nombre");
var number = 50;
var number = 40;
var number = 0.8;
