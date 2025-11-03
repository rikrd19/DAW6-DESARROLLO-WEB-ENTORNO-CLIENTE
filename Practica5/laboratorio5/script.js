console.log("=======================================================\n");
console.log("1. Ejercicios con Matrices (Array de Arrays)");
console.log("=======================================================");
console.log("=======================================================\n");
console.log("Ejercicio # 1.1 con Matrices (Array de Arrays)");
console.log("\n=======================================================\n");

const inventario = [
  ["Laptop", 15, 899.99], //nombre, cantidad, precio
  ["Mouse", 50, 19.99],
  ["Teclado", 30, 49.99],
  ["Pendrive", 10, 25.99],
];
console.log("\nMatriz inventario completo: ");
console.log(inventario);
console.log("");

console.log("\n=======================================================\n");
console.log("Ejercicio # 1.2 Acceso y Modificación Matricial)");
console.log("\n=======================================================\n");
console.log("  ** primera manera de mostrar resultado **");
console.log(
  "- Nombre del producto segunda fila[1] es: ",
  inventario[1][0],
  " y su precio[2] es: $",
  inventario[1][2]
);
console.log("\n  ** segunda manera de mostrar resultado **");
console.log(
  `- Nombre del producto segunda fila[1] es: ${inventario[1][0]}, y su precio[2] es: $${inventario[1][2]}`
);
console.log("\n- El número total de filas es:  ", inventario.length);
console.log(
  "\n- El número de elementos en la primera filas es:  ",
  inventario[0].length
);
console.log("");

console.log("\n=======================================================\n");
console.log("Ejercicio # 1.3 Recorrido Simple. -- Metodo for ");
console.log("\n=======================================================\n");
console.log("       ** Recorrido con for **");
for (let i = 0; i < inventario.length; i++) {
  console.log(`Elemento ${i + 1} de la lista ${inventario[i][0]}`);
}

console.log("\n       ** Recorrido con forEach **");
inventario.forEach((producto, indice) => {
  console.log(`Elemento ${indice + 1} de la lista ${producto[0]}`);
});

console.log("\n=======================================================");
console.log(" 2. Ejercicios con Funciones");
console.log("=======================================================\n");
console.log("Ejercicio # 2.1  Función para Cálculo de Inventario ");
console.log("\n=======================================================\n");

function calcularValorTotal(inventario) {
  let total = 0;

  for (let i = 0; i < inventario.length; i++) {
    const producto = inventario[i];
    const cantidad = producto[1];
    const precio = producto[2];

    const cantidadPrecio = cantidad * precio;

    total += cantidadPrecio;
    console.log(
      `Producto ${[i + 1]}: ${
        producto[0]
      } cantidad ${cantidad} x precio $${precio.toFixed(
        2
      )} = $${cantidadPrecio.toFixed(2)}`
    );
  }
  return total;
}

console.log(
  "\nLa suma total del valor de todo el inventario es: $" +
    calcularValorTotal(inventario)
);

console.log("\n=======================================================\n");
console.log("Ejercicio # 2.2  Uso de Funciones Anónimas: ");
console.log("\n=======================================================\n");

const inventarios = [
  ["Laptop", 15, 89.99], //nombre, cantidad, precio
  ["Mouse", 50, 19.99],
  ["Teclado", 30, 49.99],
  ["Pendrive", 10, 25.99],
];
const ordenarPorPrecio = function (a, b) {
  return a[2] - b[2];
};
inventarios.sort(ordenarPorPrecio);

console.log("Inventario ordenado por precio (ascendente): ", inventarios);
//console.log(inventarios);

console.log("\n=======================================================");
console.log(" 3. Prototype");
console.log("=======================================================\n");
console.log("Ejercicio # 3.1. Adición de un Método al Prototype ");
console.log("\n=======================================================\n");

console.log(
  "-  Añadir el método prototype es una funcion constructora de Array"
);
console.log(
  "-  Al añadir un metodo a Array.prototype se extiende su funcionalidad de todos los arrays"
);
console.log(
  "-  'this' se refiere al array sobre el que se llama el método, y es quien ejecuta la funcion"
);
console.log(
  "-  Como sabemos las posiciones de un array se determinan a partir de indice 0"
);
console.log(
  "-       sEste metodo length cuenta los indices desde 0, donde el ultimo elemento esta en el indice length - 1"
);
console.log(
  "-  Donde devolvera el ultimo elemento sin modificar el array a diferencia del metodo pop()"
);

console.log("\n   ***  Verificacion del nuevo Metodo 'prototype' ");
const misNumeros = [1, 2, 3, 4, 5];

Array.prototype.obtenerUltimoElemento = function () {
  return this[this.length - 1];
};
console.log(
  "** El ultimo elemento del array es: ",
  misNumeros.obtenerUltimoElemento()
);
console.log("- El array 'misNumeros' es actualmente: ", misNumeros);

console.log("\n**  Usando el metodo pop()");
const usoPop = misNumeros.pop();
console.log("Mi array 'misNumeros' actualmente ahora es: ", misNumeros);
console.log("** Resultado despues de uso de pop() numero eliminado: ", usoPop);
