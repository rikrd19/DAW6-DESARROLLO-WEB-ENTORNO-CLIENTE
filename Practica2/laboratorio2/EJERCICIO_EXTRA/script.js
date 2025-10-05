/*
### Clases Abstractas en JavaScript ###

- No tiene soporte nativo para clases abstractas. 
- No pueden ser instanciadas directamente, es decir no se puede crear un objeto a partir de ellas de forma nativa.
- Están diseñadas para ser una plantilla o contrato que defina una estructura común y ciertos métodos que deben ser implementados por las subclases que  hereden de ellas.
- Contienen métodos que no tienen implementación (métodos abtractos) y sirven para que las clases que derivan proporcionen esas implementaciones concretas. 

- Pero si se puede simular ente comportamiento con técnicas como usar en el constructor la comprobación de si la clase que se está instanciando es la abstracta. 
- Usando 'new.target' para lanzar un error se se intenta crear una instancia directa de esa clase.

### Comparación con Java ###

- En Java las clases abstractas son nativas definidas xon la palabra clave 'abstract'.
- Java obliga al programador a que no se puedan construir objetos directamente de estas clases.
- Si alguna clase tiene un método abstracto, esa clase debe ser declarada abstracta.
- Las subclases degen implementar todos los métodos para poder ser instanciadas.
- La instanciación está prohibida por el compilador.
*/

// Funcion para mostrar mensaje en el div con id="salida"
function mostrarMensaje(mensaje) {
  const salida = document.getElementById("salida");
  salida.innerHTML += `<p>${mensaje}<p>`;
}

class Vehiculo {
  constructor(marca, modelo, velocidadMaxima) {
    if (this.constructor === Vehiculo) {
      throw new Error(
        "No puedes instanciar la clase abstracta 'Vehiculo' directamente"
      );
    }
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadMaxima = velocidadMaxima;
  }

  acelerar() {
    throw new Error("El método 'acelerar()' debe implementarse en la subclase");
  }

  detener() {
    // se obtiene el tipo del vehiculo desde el constructor
    mostrarMensaje(`El ${this.constructor.name.toLowerCase()} se ha detenido`);
  }
}

// clases que heredan de 'Vehiculo'
class Auto extends Vehiculo {
  constructor(marca, modelo, velocidadMaxima, puertas) {
    super(marca, modelo, velocidadMaxima);
    this.puertas = puertas;
  }

  acelerar() {
    mostrarMensaje(`El auto acelera hasta ${this.velocidadMaxima} km/h`);
  }
}

class Bicleta extends Vehiculo {
  constructor(marca, modelo, velocidadMaxima, tipo) {
    super(marca, modelo, velocidadMaxima);
    this.tipo = tipo;
  }

  acelerar() {
    mostrarMensaje(
      `La bicleta alcanza una velocidad de ${this.velocidadMaxima} km/h pedaleando`
    );
  }
}

// instancias de cada subclase
const miAuto = new Auto("Toyota", "Corolla", 230, 4);
const miBici = new Bicleta("Mister", "Montañera", 60, "Montaña");

miAuto.acelerar();
miAuto.detener();
miBici.acelerar();
miBici.detener();

// Intentar instaciar 'Vehiculo'(lanza error)
try {
  const vehic = new Vehiculo("Mitsubishi", "Panel", 120, 6);
} catch (err) {
  mostrarMensaje(err.message);
}
