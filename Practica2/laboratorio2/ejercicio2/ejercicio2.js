let numeroSecreto;
let intentosRestantes;

// Obtener los elementos HTML
const inputSuposicion = document.getElementById("suposicion");
const botonAdivinar = document.getElementById("botonAdivinar");
const parrafoResultado = document.getElementById("resultado");
const botonReiniciar = document.getElementById("botonReiniciar");

// Función para iniciar el juego
function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentosRestantes = 7;
  parrafoResultado.textContent = `Tienes ${intentosRestantes} intentos.`;
  inputSuposicion.value = "";
  inputSuposicion.disabled = false;
  botonAdivinar.disabled = false;
  botonReiniciar.style.display = "none";
}

// Función que se ejecuta cuando el usuario hace clic en "Adivinar"
function verificarAdivinanza() {
  const suposicion = Number(inputSuposicion.value);

  // Validación básica para asegurar que la entrada es un número válido
  if (isNaN(suposicion) || suposicion < 1 || suposicion > 100) {
    parrafoResultado.textContent =
      "Por favor, introduce un número válido entre 1 y 100.";
    return;
  }

  intentosRestantes--;

  if (suposicion === numeroSecreto) {
    parrafoResultado.textContent = `🎉 ¡Correcto! Adivinaste el número en ${
      7 - intentosRestantes
    } intento(s).`;
    finalizarJuego();
  } else if (intentosRestantes === 0) {
    parrafoResultado.textContent = `❌ Has perdido. El número era ${numeroSecreto}.`;
    finalizarJuego();
  } else if (suposicion < numeroSecreto) {
    parrafoResultado.textContent = `El número secreto es MAYOR. Te quedan ${intentosRestantes} intento(s).`;
  } else {
    parrafoResultado.textContent = `El número secreto es MENOR. Te quedan ${intentosRestantes} intento(s).`;
  }
}

// Función para terminar el juego y mostrar el botón de reiniciar
function finalizarJuego() {
  inputSuposicion.disabled = true;
  botonAdivinar.disabled = true;
  botonReiniciar.style.display = "block";
}

// Escuchadores de eventos para los botones
botonAdivinar.addEventListener("click", verificarAdivinanza);
botonReiniciar.addEventListener("click", iniciarJuego);

// Iniciar el juego cuando la página se carga
document.addEventListener("DOMContentLoaded", iniciarJuego);
