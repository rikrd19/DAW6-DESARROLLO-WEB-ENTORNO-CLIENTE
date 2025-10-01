// Generar número secreto entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Variables de control
let intentos = 0;
const maxIntentos = 7;
let minRango = 1;
let maxRango = 100;

// Elementos DOM
const inputGuess = document.getElementById("guess");
const mensaje = document.getElementById("mensaje");
const intentosElem = document.getElementById("intentos");
const rangoElem = document.getElementById("rango");
const btnProbar = document.getElementById("btn-probar");
const btnReiniciar = document.getElementById("btn-reiniciar");

btnProbar.addEventListener("click", adivinar);
btnReiniciar.addEventListener("click", reiniciarJuego);

function adivinar() {
  let numero = parseInt(inputGuess.value);

  // Validar entrada
  if (isNaN(numero) || numero < 1 || numero > 100) {
    mensaje.textContent = "⚠️ Introduce un número válido entre 1 y 100.";
    return;
  }

  intentos++;
  let intentosRestantes = maxIntentos - intentos;

  // Caso acierto
  if (numero === numeroSecreto) {
    mensaje.textContent = `🎉 ¡Acertaste! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.`;
    finDelJuego();
    return;
  }

  // Caso perder
  if (intentos >= maxIntentos) {
    mensaje.textContent = `❌ Has perdido. El número era ${numeroSecreto}.`;
    finDelJuego();
    return;
  }

  // Ajustar rango según el intento
  if (numero < numeroSecreto) {
    minRango = Math.max(minRango, numero + 1);
    mensaje.textContent = "El número secreto es MAYOR.";
  } else {
    maxRango = Math.min(maxRango, numero - 1);
    mensaje.textContent = "El número secreto es MENOR.";
  }

  // Mostrar progreso
  intentosElem.textContent = `Te quedan ${intentosRestantes} intentos.`;
  rangoElem.textContent = `👉 Pista: el número está entre ${minRango} y ${maxRango}.`;

  // Limpiar input para siguiente intento
  inputGuess.value = "";
}

// Función para bloquear y mostrar reinicio
function finDelJuego() {
  btnProbar.disabled = true;
  btnReiniciar.style.display = "inline";
  intentosElem.textContent = "";
  rangoElem.textContent = "";
}

// Función reiniciar el juego
function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  minRango = 1;
  maxRango = 100;

  mensaje.textContent =
    "¡Nuevo juego iniciado! Adivina el número entre 1 y 100.";
  intentosElem.textContent = "";
  rangoElem.textContent = "";

  btnProbar.disabled = false;
  btnReiniciar.style.display = "none";
  inputGuess.value = "";
}
