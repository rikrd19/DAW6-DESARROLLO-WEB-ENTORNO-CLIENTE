function calcularEdad() {
  // 1. Pedir fecha
  let entrada = prompt(
    "Introduce tu fecha de nacimiento en formato DD/MM/AAAA:"
  );

  // 2. Validar con expresión regular (dd/mm/aaaa)
  let regex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;

  if (!regex.test(entrada)) {
    alert("❌ Formato inválido. Usa DD/MM/AAAA (ejemplo: 15/09/2000).");
    return;
  }

  // 3. Convertir a Date
  let partes = entrada.split("/");
  let dia = parseInt(partes[0], 10);
  let mes = parseInt(partes[1], 10) - 1; // en JS los meses van de 0-11
  let anio = parseInt(partes[2], 10);

  let fechaNacimiento = new Date(anio, mes, dia);

  // 4. Calcular edad
  let hoy = new Date();
  let edad = hoy.getFullYear() - anio;

  // Si todavía no ha cumplido años este año, restamos 1
  if (hoy.getMonth() < mes || (hoy.getMonth() === mes && hoy.getDate() < dia)) {
    edad--;
  }

  // 5. Día de la semana
  let diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  let diaSemana = diasSemana[fechaNacimiento.getDay()];

  // 6. Mostrar mensaje
  alert(
    `📅 Naciste el ${entrada}, tienes ${edad} años.\nEse día fue ${diaSemana}.`
  );
}
