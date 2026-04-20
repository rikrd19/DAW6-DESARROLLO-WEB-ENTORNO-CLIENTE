/**
 * Client-side checks only — server must validate again in production.
 */
(function () {
  "use strict";

  var form = document.getElementById("registration-form");
  if (!form) return;

  var motivationInput = document.getElementById("motivation");
  var counter = document.getElementById("contador");

  // 2. Comportamiento Dinámico: Contador de caracteres
  if (motivationInput && counter) {
    motivationInput.addEventListener("input", function () {
      var currentLength = motivationInput.value.length;
      var maxLength = motivationInput.getAttribute("maxlength") || 500;
      counter.textContent = currentLength + " / " + maxLength;

      // Alerta roja si quedan menos de 20
      if (maxLength - currentLength < 20) {
        counter.classList.add("danger");
      } else {
        counter.classList.remove("danger");
      }
    });
  } 
  form.addEventListener("submit", function (event) {
    var nameInput = document.getElementById("full-name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var languageSelect = document.getElementById("favorite-language");
    var motivation = motivationInput.value.trim();

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var pwd = passwordInput.value;

    // 3.1 Validar email con regex
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, introduce un email válido.");
      event.preventDefault();
      return;
    }

    // 3.2 Validar que el nombre empiece por mayúscula
    var nameRegex = /^[A-Z][a-zA-ZÀ-ÿ\s]*$/;
    if (!nameRegex.test(name)) {
      alert("El nombre debe empezar por mayúscula y contener solo letras.");
      event.preventDefault();
      return;
    }

    // 3.3 Validar fortaleza de la contraseña
    if (pwd.length < 8) {
      alert("La contraseña debe tener mínimo 8 caracteres.");
      event.preventDefault();
      return;
    }
    if (!/[A-Z]/.test(pwd)) {
      alert("Debe incluir al menos una mayúscula.");
      event.preventDefault();
      return;
    }
    if (!/[a-z]/.test(pwd)) {
      alert("Debe incluir al menos una minúscula.");
      event.preventDefault();
      return;
    }
    if (!/[0-9]/.test(pwd)) {
      alert("Debe incluir al menos un número.");
      event.preventDefault();
      return;
    }

    // Si todo es correcto
    event.preventDefault(); // Mantenemos preventDefault para ver el resultado en consola como pedía la práctica anterior
    console.log("--- Registro Exitoso ---");
    console.log("Bienvenido, " + name + "!");
    console.log("Email: " + email);
    console.log(
      "Lenguaje favorito: " +
        languageSelect.options[languageSelect.selectedIndex].text,
    );
    console.log("Motivación: " + (motivation || "(no indicada)"));
  });
})();
