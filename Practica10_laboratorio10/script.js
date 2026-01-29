// --- EJERCICIO 1: Análisis del Orden de los Eventos de Ratón ---

// Tarea 1.1: Referencia al botón
const btnTest = document.getElementById('test-click');

// Función que maneja los eventos e imprime el tipo
function manejarEventosRaton(e) {
    console.log(`Ejercicio 1 - Evento disparado: ${e.type}`);
}

// Tarea 1.2: Registrar observadores
btnTest.addEventListener('mousedown', manejarEventosRaton);
btnTest.addEventListener('mouseup', manejarEventosRaton);
btnTest.addEventListener('click', manejarEventosRaton);
btnTest.addEventListener('dblclick', manejarEventosRaton);

// Tarea 1.4 prevé la secuencia: mousedown -> mouseup -> click -> mousedown -> mouseup -> click -> dblclick 
// al hacer doble click rápido.


// --- EJERCICIO 2: El Fenómeno del Event Bubbling ---

// Tarea 2.1: Referencias a la estructura de 3 niveles
const section = document.getElementById('zona-section');
const div = document.getElementById('zona-div');
const btnBubbling = document.getElementById('btn-bubbling');

// Tarea 2.2:  Registro de observadores al hacer click
section.addEventListener('click', (e) => {
    console.log("Click en el Padre (Section)");
});

div.addEventListener('click', (e) => {
    console.log("Click en el Hijo (Div)");
});

btnBubbling.addEventListener('click', (e) => {
    console.log("Click en el Nieto (Botón)");
    
    // --- EJERCICIO 3: Interrupción del Flujo con stopPropagation() ---
    
    // Tarea 3.2: Invoca el método e.stopPropagation()
    // Para probar el Ejercicio 2 (Bubbling), mantén la siguiente línea COMENTADA.
    // Para probar el Ejercicio 3 (Detener propagación), DESCOMENTA la siguiente línea.
    
    e.stopPropagation(); 
});


