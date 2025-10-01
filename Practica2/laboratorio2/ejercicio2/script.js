function jugar() {
  // Generar número aleatorio entre 1 y 100
  let numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let intentos = 0;
  let maxIntentos = 7;
  let acertado = false;

  // Bucle para que el juego siga hasta 7 intentos o hasta acertar
  while (intentos < maxIntentos && !acertado) {
    let suposicion = Number(
      prompt(`Intento ${intentos + 1} de ${maxIntentos}. Ingresa un número:`)
    );
    intentos++;

    if (suposicion === numeroSecreto) {
      alert(`🎉 ¡Correcto! Lo lograste en ${intentos} intento(s).`);
      acertado = true;
    } else if (suposicion < numeroSecreto) {
      alert(
        `El número secreto es MAYOR. Te quedan ${
          maxIntentos - intentos
        } intento(s).`
      );
    } else if (suposicion > numeroSecreto) {
      alert(
        `El número secreto es MENOR. Te quedan ${
          maxIntentos - intentos
        } intento(s).`
      );
    }
  }

  // Si llegaste a 7 intentos y no acertaste perdistes
  if (!acertado) {
    alert(`❌ Has perdido. El número era ${numeroSecreto}.`);
  }
}
