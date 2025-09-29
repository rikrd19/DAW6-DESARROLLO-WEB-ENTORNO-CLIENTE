class Alumno {
  constructor(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  }

  // Un metodo estaAprobado() que devuelva true si la nota es mayor o igual a 5

  estaAprobado() {
    if (this.nota >= 5) {
      alert("true");
    } else {
      alert("false");
    }
  }
}

// Crear una instancia de Alumno y llamar al metodo estaAprobado
var p1 = new Alumno("Josefa", 30, 6);

p1.estaAprobado();
