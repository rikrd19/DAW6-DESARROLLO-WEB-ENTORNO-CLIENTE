// ==========================================
// Fase 1: Eventos Básicos
// ==========================================

// Tarea 1.1: Obtener el botón con el ID btn-multi
const btnMulti = document.getElementById('btn-multi');

// Funciones para demostrar el patrón observador
const funcionUno = () => {
    console.log("Fase 1: Se ha ejecutado la PRIMERA función asociada al click.");
};

const funcionDos = () => {
    console.log("Fase 1: Se ha ejecutado la SEGUNDA función asociada al mismo click.");
};

// Tarea 1.2: Utilizar addEventListener() para registrar dos funciones distintas
// Usamos addEventListener en vez de .onclick para no sobrescribir eventos.
if (btnMulti) {
    btnMulti.addEventListener('click', funcionUno);
    btnMulti.addEventListener('click', funcionDos);
}

// ==========================================
// Fase 2: Eventos de Teclado
// ==========================================

const mainBody = document.getElementById('main-body');
const campoTexto = document.getElementById('campo-texto');
const infoPantalla = document.getElementById('info-pantalla');

// 2. Captura de información básica en el body
mainBody.addEventListener('keydown', (e) => {
    // La información se imprime en la consola como pide el ejercicio
    console.log(`Evento de Teclado => Tipo: ${e.type}, Tecla: ${e.key}`);
    
    // Agregado extra: Muestra también en la pantalla la tecla para que se visualice fácilmente
    infoPantalla.textContent = `Tecla detectada globalmente: ${e.key} (Tipo: ${e.type})`;
});

// 3. Restricción de caracteres con preventDefault() en el textarea
campoTexto.addEventListener('keydown', (e) => {
    // validamos si la tecla presionada es un número del 0 al 9
    // e.key nos devuelve el valor en cadena ('0', '1', '2'...)
    if (e.key >= '0' && e.key <= '9') {
        // Evita la acción por defecto (es decir, evita que se escriba el número)
        e.preventDefault();
        
        // muestra la alerta indicando el error
        alert("Error: No puedes introducir números en este campo de texto.");
        
        // Log extra para depuración
        console.warn(`Intento bloqueado: el usuario intentó escribir el número ${e.key}`);
    }
});