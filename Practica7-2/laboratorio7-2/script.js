//===========================================================
// Ejercicio 1: Abstracción y Encapsulamiento - Clase Vehiculo
//===========================================================

class Vehiculo {
  #velocidad = 0;
  #estadoMotor = "apagado";

  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  encenderMotor() {
    console.log(`Estado previo del motor: ${this.#estadoMotor}`);
    this.#estadoMotor = "encendido";
    console.log(`Estado posterior del motor: ${this.#estadoMotor}`);
  }

  acelerar(incremento) {
    console.log(`Velocidad previa: ${this.#velocidad} km/h`);
    this.#velocidad += incremento;
    console.log(`Velocidad posterior: ${this.#velocidad} km/h`);
  }
}

console.log("\n=== Creando vehículo ===");
const miVehiculo = new Vehiculo("Toyota", "Corolla");
console.log(`Marca: ${miVehiculo.marca}`);
console.log(`Modelo: ${miVehiculo.modelo}`);
console.log("");

// Test encenderMotor method
console.log("=== Encendiendo motor ===");
miVehiculo.encenderMotor();
console.log("");

// Test acelerar method
console.log("=== Acelerando ===");
miVehiculo.acelerar(30);
console.log("");

// Test acelerar again
console.log("=== Acelerando más ===");
miVehiculo.acelerar(20);


//===========================================================
// Ejercicio 2  Herencia
//===========================================================

class Coche extends Vehiculo {
  constructor(marca, modelo, numPuertas) {
    super(marca, modelo);
    this.numPuertas = numPuertas;
  }

  // Sobrescribe el método acelerar con un mensaje específico del motor
  acelerar(incremento) {
    super.acelerar(incremento);
    console.log("El motor del coche está respondiendo al acelerar.");
  }

  // Nuevo método para mostrar información específica del coche
  mostrarInformacion() {
    console.log(`Coche: ${this.marca} ${this.modelo}`);
    console.log(`Número de puertas: ${this.numPuertas}`);
  }
}

class Bicicleta extends Vehiculo {
  constructor(marca, modelo, tipo) {
    super(marca, modelo);
    this.tipo = tipo; // Ej. "Montañera", "De carretera", etc.
  }

  // Sobrescribe encenderMotor para reflejar que no tiene motor
  encenderMotor() {
    console.log("Las bicicletas no tienen motor.");
    // super.encenderMotor(); // Descomentar si se necesitara llamar al método del padre
  }

  // Sobrescribe el método acelerar con un mensaje específico de fuerza humana
  acelerar(incremento) {
    super.acelerar(incremento);
    console.log("La aceleración se realiza mediante la fuerza humana en los pedales.");
  }

  // Nuevo método para mostrar información específica de la bicicleta
  mostrarInformacion() {
    console.log(`Bicicleta: ${this.marca} ${this.modelo}`);
    console.log(`Tipo: ${this.tipo}`);
  }
}

// Test de la subclase Coche
console.log("\n=== Creando coche ===");
const miCoche = new Coche("Ford", "Focus", 5); // Instanciación CORRECTA
console.log(`Marca: ${miCoche.marca}`);
console.log(`Modelo: ${miCoche.modelo}`);
console.log(`Número de puertas: ${miCoche.numPuertas}`);
console.log("");

console.log("=== Encendiendo motor del coche ===");
miCoche.encenderMotor();
console.log("");

console.log("\n=== Creando bicicleta ===");
const miBicicleta = new Bicicleta("Mister", "Montañera", "De montaña"); // Instanciación CORRECTA (con el tipo)
console.log(`Marca: ${miBicicleta.marca}`);
console.log(`Modelo: ${miBicicleta.modelo}`);
console.log(`Tipo: ${miBicicleta.tipo}`);
console.log("");

console.log("=== Intentando encender motor de la bicicleta ===");
miBicicleta.encenderMotor();
console.log("");

console.log("=== Acelerando bicicleta ===");
miBicicleta.acelerar(15);
console.log("");


console.log("\n===========================================================");
console.log("Ejercicio 3: Polimorfismo");
console.log("===========================================================");

const miCochePolimorfismo = new Coche("Nissan", "Qashqai", 5);
const miBicicletaPolimorfismo = new Bicicleta("Mister", "Montañera", "De montaña");


console.log("=== Probando acelerar() polimórfico en Coche ===");
miCochePolimorfismo.acelerar(60); // Llama al acelerar de Coche
console.log("");

console.log("=== Probando acelerar() polimórfico en Bicicleta ===");
miBicicletaPolimorfismo.acelerar(12); // Llama al acelerar de Bicicleta
console.log("");

console.log("=== Probando mostrarInformacion() polimórfico en Coche ===");
miCochePolimorfismo.mostrarInformacion();
console.log("");

console.log("=== Probando mostrarInformacion() polimórfico en Bicicleta ===");
miBicicletaPolimorfismo.mostrarInformacion();


console.log("\n===========================================================");
console.log("Ejercicio 4: Integración y Función Polimórfica");
console.log("===========================================================");

function inspeccionarVehiculo(vehiculo) {

  if(typeof vehiculo.mostrarInformacion === 'function') {
    vehiculo.mostrarInformacion();
  } else {
    console.log("El vehiculo no tiene un metodo mostrarInformacion()");
    console.log(vehiculo);
  }
}
  console.log("\n=== Inspeccionando un Coche ===");
  const cocheParaInspeccionar = new Coche("Mercedes", "Clase A", 5);
  inspeccionarVehiculo(cocheParaInspeccionar);
  
  console.log("\n=== Inspeccionando una Bicicleta ===");
  const bicicletaParaInspeccionar = new Bicicleta("Monark", "SaltoAlto", "MTB");
  inspeccionarVehiculo(bicicletaParaInspeccionar);


// OPCIONAL: Objeto simple que no hereda pero tiene el método mostrarInformacion()
console.log("\n=== Inspeccionando un Objeto Simple (OPCIONAL) ===");
const objetoSimple = {
  nombre: "Patinete Eléctrico",
  bateria: "5000 mAh",
  mostrarInformacion: function() {
    console.log(`Dispositivo: ${this.nombre}`);
    console.log(`Batería: ${this.bateria}`);
  }
};
inspeccionarVehiculo(objetoSimple);

console.log("\n=== Inspeccionando un objeto sin mostrarInformacion() (Error esperado) ===");
const objetoInvalido = {
  id: 1,
  data: "some data"
};
inspeccionarVehiculo(objetoInvalido);