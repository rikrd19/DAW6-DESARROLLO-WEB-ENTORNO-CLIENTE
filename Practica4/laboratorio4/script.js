console.log("Parte 1: Conceptos fundamentales de Arrays");
console.log(" *** 1. Definicion y acceso ***");
console.log();
const datosUsuario = ["Juan", "Pérez", true, "developer", 3.14];
console.log("datosUsuario = " + '["Juan", "Pérez", true, "developer", 3.14];');
console.log(
  "- Resultado del segundo elemento del array  datosUsuario[1]): " +
    datosUsuario[1]
);
console.log(
  "- Resultado de usar la Propiedad 'length', el total de elementos es  (datosUsuario.length): " +
    datosUsuario.length
);
console.log(
  "\n------------------------------------------------------------------------------\n"
);

console.log("Parte 2: Modificacion de Arrays: Añadir y eliminar elementos");
console.log();
console.log(
  " *** 1. Añadir al final: Uso el metodo 'push' para añadir dos nuevos elementos ***"
);
console.log();
console.log("datosUsuario = " + '["Juan", "Pérez", true, "developer", 3.14];');
datosUsuario.push("New York", 2025);
console.log(" + datosUsuario.push (New York, 2025)");
console.log("- Resultado de uso del método 'push' = " + datosUsuario);
console.log();
console.log(" *** 2. Eliminar elementos del final del array ***");
console.log();
console.log(
  "datosUsuario = " +
    '["Juan", "Pérez", true, "developer", 3.14, "New York", 2025];'
);
console.log(
  "- Resultado de uso del método 'pop' datosUsuario.pop() = " +
    datosUsuario.pop()
);
console.log("- Resultado del nuevo array = [" + datosUsuario + "]");
console.log();

console.log(
  " *** 3. Añadir nuevo elemento al principio del array con el metodo 'unshift' ***"
);
console.log();
console.log(
  "- Este metodo usado para ingresar un nuevo elemento desplazando el primer elemento del array."
);
console.log(
  "- Ingresa un nuevo elemento y datosUsuario.unshift('Barcelona') y su nueva longitud es = " +
    datosUsuario.unshift("Barcelona")
);
console.log(
  "- Aqui se observa que todos los elementos se corren para ingresar el elemento 'Barcelona ' = [" +
    datosUsuario +
    "]"
);
console.log();
console.log(" *** 4. Eliminar elementos del principio del array ***");
console.log();
console.log(
  "datosUsuario = " +
    '["Barcelona", "Juan", "Pérez", true, "developer", 3.14, "New York", 2025];'
);
console.log(
  "- Resultado de datosUsuario.shift() el cual elimina el elemento = " +
    datosUsuario.shift()
);
console.log("- El nuevo array seria = [" + datosUsuario + "]");
console.log();

console.log(" *** 5. Eliminar elementos en una posicion especifica ***");
console.log();
console.log(
  "datosUsuario = " +
    '["Juan", "Pérez", true, "developer", 3.14, "New York", 2025];'
);
console.log(
  "- Aqui se va a elminar el elemento empezando desde la posicion [2] = 'true'  " +
    "eliminar 1 elemento = 'true' datosUsuario.splice(2, 1)"
);
datosUsuario.splice(2, 1);

console.log("- Dando como resultado el nuevo array = [" + datosUsuario + "]");
console.log(
  "\n------------------------------------------------------------------------------\n"
);

console.log("Parte 3; Metodos avanzados de Arrays");
console.log();
console.log(" *** 1. Concatenacion de arrays ***");
const arrayExtra = ["Madrid", "Paris", "Berlin"];
console.log(
  "- Creacion de nuevo array const arrayExtra = ['Madrid', 'Paris', 'Berlin']"
);
console.log(
  "- Creacion de nuevo array 'arrayTotal' donde se concatenara con 'datosUsuario' y 'arrayExtra'"
);
console.log("- const arrayTotal = datosUsuario.concat(arrayExtra) ");
const arrayTotal = datosUsuario.concat(arrayExtra);
console.log("- Resultado de la concatenacion es = [" + arrayTotal + "]");
console.log();

console.log(" *** 2. Ordenacion simple ***");
console.log(
  "- Se crea un array de numeros:  const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];"
);
const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("- Array original: [" + numeros + "]");
const numerosSimple = [...numeros]; // Crear copia del array
numerosSimple.sort();
console.log("- Se hace un sort simple con:  numeros.sort();");
console.log("- Resultado del array con sort simple: [" + numerosSimple + "]");
console.log("- NOTA: sort() sin funcion ordena como strings, no como numeros");
console.log();

console.log(" *** 3. Ordenacion Personalizada ***");
console.log("- Modificamos el ejercicio anterior incluyendo una funcion dentro de sort()");
console.log("- Esto es util para ordenar NUMEROS correctamente (no como strings)");
console.log();

console.log(" *** Ordenacion Ascendente (menor a mayor) ***");
console.log("- Se usa: numeros.sort(function(a, b) { return a - b; })");
const numerosAscendente = [...numeros]; 
numerosAscendente.sort(function(a, b) {
  return a - b; 
});
console.log("- Resultado: [" + numerosAscendente + "]");
console.log("- Explicacion: 'a - b' ordena de Menor a Mayor");
console.log();


console.log(" *** Ordenacion Descendente (mayor a menor) ***");
console.log("- Se usa: numeros.sort(function(a, b) { return b - a; })");
const numerosDescendente = [...numeros]; 
numerosDescendente.sort(function(a, b) {
  return b - a; // Si b > a retorna positivo, entonces b va primero
});
console.log("- Resultado: [" + numerosDescendente + "]");
console.log("- Explicacion: 'b - a' ordena de Mayor a Menor");
console.log(
  "\n------------------------------------------------------------------------------\n"
);

console.log("Parte 4: Funciones Predefinidas de validacion y conversion");
console.log();

console.log(" *** Crear variables de prueba ***");
console.log(`    const cadenaTexto = "Hola Mundo";
    const cadenaNumero = "123.45";
    const numeroDecimal = 99.99;`);
console.log();
const cadenaTexto = "Hola Mundo";
const cadenaNumero = "123.45";
const numeroDecimal = 99.99;

console.log(" *** 1. isNaN() - Verificar si NO es un numero ***");
console.log("- Variable: cadenaTexto = 'Hola Mundo'");
console.log("- isNaN(cadenaTexto) = " + isNaN(cadenaTexto));
console.log("- Respuesta: Retorna 'true' porque 'Hola Mundo' NO es un numero");
console.log();
console.log("- Variable: cadenaNumero = '123.45'");
console.log("- isNaN(cadenaNumero) = " + isNaN(cadenaNumero));
console.log("- Respuesta: Retorna 'false' porque '123.45' SI puede convertirse a numero");
console.log();

console.log(" *** 2. parseInt() - Convertir cadena a numero entero ***");
console.log("- Variable: cadenaNumero = '123.45'");
console.log("- parseInt(cadenaNumero) = " + parseInt(cadenaNumero));
console.log("- Respuesta: Convierte a entero, eliminando la parte decimal (123)");
console.log("- Tipo de dato resultante: " + typeof parseInt(cadenaNumero));
console.log();

console.log(" *** 3. parseFloat() - Convertir cadena a numero decimal ***");
console.log("- Variable: cadenaNumero = '123.45'");
console.log("- parseFloat(cadenaNumero) = " + parseFloat(cadenaNumero));
console.log("- Respuesta: Convierte a decimal, manteniendo la parte decimal (123.45)");
console.log("- Tipo de dato resultante: " + typeof parseFloat(cadenaNumero));
console.log();

console.log(" *** 4. String() - Convertir numero a cadena ***");
console.log("- Variable: numeroDecimal = 99.99");
console.log("- Tipo original: " + typeof numeroDecimal);
console.log("- String(numeroDecimal) = '" + String(numeroDecimal) + "'");
console.log("- Tipo despues de la conversion: " + typeof String(numeroDecimal));
console.log("- Respuesta: Convierte el numero 99.99 a la cadena '99.99'");
console.log();

console.log(" *** 5. Number() - Convertir cadena numerica a numero ***");
console.log("- Variable: cadenaNumero = '123.45'");
console.log("- Tipo original: " + typeof cadenaNumero);
console.log("- Number(cadenaNumero) = " + Number(cadenaNumero));
console.log("- Tipo despues de la conversion: " + typeof Number(cadenaNumero));
console.log("- Respuesta: Convierte la cadena '123.45' al numero 123.45");
console.log();

console.log(" *** Comparacion entre parseInt(), parseFloat() y Number() ***");
console.log("- cadenaNumero = '123.45'");
console.log("- parseInt('123.45') = " + parseInt(cadenaNumero) + " (solo entero)");
console.log("- parseFloat('123.45') = " + parseFloat(cadenaNumero) + " (con decimales)");
console.log("- Number('123.45') = " + Number(cadenaNumero) + " (con decimales)");
console.log(
  "\n------------------------------------------------------------------------------\n"
);


