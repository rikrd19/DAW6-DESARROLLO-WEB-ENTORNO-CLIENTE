// 1. Mostrar tamaño de la ventana en consola
console.log("Ancho: " + window.innerWidth);
console.log("Alto: " + window.innerHeight);

// 2. Mostrar alerta de bienvenida al cargar
alert("👋 Bienvenido a la página de prueba con window!");

// 3. Preguntar nombre y mostrarlo en el documento
let nombre = prompt("¿Cómo te llamas?");
document.getElementById("nombreUsuario").innerHTML =
  "Hola, " + nombre + "! Bienvenido a la página.";

// 4. Variables para la ventana
let miVentana;

// Función para abrir una nueva ventana
function abrirVentana() {
  miVentana = window.open(
    "https://www.google.com",
    "nuevaVentana",
    "width=500,height=400"
  );
}

// 5. Confirmar cierre de la ventana
function cerrarVentana() {
  if (miVentana && !miVentana.closed) {
    let cerrar = confirm("¿Quieres cerrar la ventana que abriste?");
    if (cerrar) {
      miVentana.close();
    }
  } else {
    alert("No hay ventana abierta.");
  }
}
