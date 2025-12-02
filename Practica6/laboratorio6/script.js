console.log("\n=======================================================");
console.log("Apartado 1 - Definición de la clase y propiedades");
console.log("=======================================================\n");

class Pais {
  constructor(nombre, poblacion, area, ciudades) {
    this.nombre = nombre;
    this.poblacion = poblacion;
    this.area = area;
    this.ciudades = ciudades;
  }

  incrementarPoblacion(cantidad) {
    this.poblacion += cantidad;
  }

  densidad() {
    let densidadCalculada = this.poblacion / this.area;
    //return this.poblacion / this.area;
    return densidadCalculada;
  }

  compararArea(otroPais) {
    // condicional tradicional
    // if (this.area > otroPais.area) {
    //   return `${this.nombre} es mas grande que ${otroPais.nombre}`;
    // } else {
    //   return `${otroPais.nombre} es mas grande que ${this.nombre}`;
    // }

    // con condicional ternaria
    return this.area > otroPais.area
      ? `${this.nombre} es mas grande que ${otroPais.nombre}`
      : `${otroPais.nombre} es mas grande que ${this.nombre}`;
  }

  mostrarCiudades() {
    console.log(`Ciudades de ${this.nombre}:`);
    for (let i = 0; i < this.ciudades.length; i++) {
      console.log(` ${i + 1} ${this.ciudades[i]}`);
    }
  }

  mostrarCiudadesPorLetra() {
    console.log(`Letras de cada ciudad de ${this.nombre}: `);

    for (let i = 0; i < this.ciudades.length; i++) {
      //bucle externo: recorre cada ciudad
      console.log(`Ciudad: ${this.ciudades[i]}`);
      for (let j = 0; j < this.ciudades[i].length; j++) {
        //bucle interno: recorre cada letra de la ciudad
        console.log(this.ciudades[i][j]);
      }
    }
  }
}

let nacion = new Pais("Venezuela", 3500000, 916500, [
  "Caracas",
  "Maracaibo",
  "Valencia",
  "Barquisimeto",
]);

console.log("El nombre del pais es: ", nacion.nombre);
console.log("La poblacion es: ", nacion.poblacion, " Habitantes");
console.log("La extension es: ", nacion.area, " mts2");
console.log("Las ciudades son: ", nacion.ciudades);

console.log("\n=======================================================");
console.log("Apartado 2 - Métodos con operadores básicos y acumulativos");
console.log("=======================================================\n");
console.log(
  " 1.- **** Se tiene que declarar el metodo dentro del cuerpo de la clase Pais: Metodo incrementaPoblacion(cantidad) ****"
);
console.log("------------------------------------------------------------\n");

console.log("Poblacion antes del incremento: ", nacion.poblacion);
nacion.incrementarPoblacion(500000); // suma de poblacion
console.log("Poblacion despues del incremento: ", nacion.poblacion);

console.log("------------------------------------------------------------\n");
console.log(
  " 2.- **** Se tiene que declarar el metodo dentro del cuerpo de la clase Pais: Metodo densidad() ****"
);
console.log("------------------------------------------------------------\n");

console.log(
  "Formula: ",
  nacion.poblacion,
  "(Poblacion)" + " / " + nacion.area,
  "(area)"
);
let resultadoDensidad = nacion.densidad();
console.log("Resultado: " + resultadoDensidad.toFixed(2) + " habitantes/km2");

console.log("\n=======================================================");
console.log("Apartado 3 - Operadores comparativos y ternarios");
console.log("=======================================================\n");

let ven = new Pais("Venezuela", 3500000, 916500, [
  "Caracas",
  "Maracaibo",
  "Valencia",
  "Barquisimeto",
]);
let col = new Pais("Colombia", 5000000, 1141748, [
  "Bogotá",
  "Medellín",
  "Cali",
]);

let urug = new Pais("Uruguay", 3500000, 176220, [
  "Montevideo",
  "Salto",
  "Paysandu",
  "Ciudad de la Costa",
]);

console.log(ven.compararArea(col));
console.log(urug.compararArea(ven));
console.log(urug.compararArea(col));

console.log("\n=======================================================");
console.log("Apartado 4 - Trabajo con listas y bucles anidados");
console.log("=======================================================\n");
console.log(" 1.- **** Método mostrarCiudades() ****");
console.log("------------------------------------------------------------\n");

ven.mostrarCiudades();
console.log("");
col.mostrarCiudades();
console.log("");
urug.mostrarCiudades();

console.log("------------------------------------------------------------\n");
console.log(" 2.- **** Método mostrarCiudadesPorLetra() ****");
console.log("------------------------------------------------------------\n");

nacion.mostrarCiudadesPorLetra();

console.log("\n=======================================================");
console.log("Apartado 5 - Prueba del código");
console.log("=======================================================\n");
console.log(" 1.- **** Creacion de dos objetos de la clase Pais ****");
console.log("------------------------------------------------------------\n");

let pais1 = new Pais("Perú", 337000000, 128250, [
  "Lima",
  "Arequipa",
  "Trujillo",
  "Cusco",
]);
let pais2 = new Pais("Brasil", 215000000, 8515800, [
  "São Paulo",
  "Rio de Janeiro",
  "Brasilia",
  "Florianopolis",
]);
let pais3 = new Pais("Argentina", 446000000, 2780500, [
  "Buenos Aires",
  "Cordoba",
  "Rosario",
  "Mendoza",
]);

console.log("Pais creado Perú: ", pais1.nombre);
console.log("Pais creado Perú: ", pais2.nombre);
console.log("Pais creado Perú: ", pais3.nombre);

console.log("------------------------------------------------------------\n");
console.log(" 2.- **** Llamados a los metodos creados ****");
console.log("------------------------------------------------------------\n");
console.log(
  `Pais 1  ${pais1.nombre} , Poblacion: ${pais1.poblacion} habitantes, area territorial: ${pais1.area}km2, ciudades: ${pais1.ciudades}, \n`
);
console.log(
  `Pais 2  ${pais2.nombre} , Poblacion: ${pais2.poblacion} habitantes, area territorial: ${pais2.area}km2, ciudades: ${pais2.ciudades}, \n`
);
console.log(
  `Pais 3  ${pais3.nombre} , Poblacion: ${pais3.poblacion} habitantes, area territorial: ${pais3.area}km2, ciudades: ${pais3.ciudades}, \n`
);
