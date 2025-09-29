# Laboratorio 2: Programación con JavaScript

## Ejercicio 1 — `var`, `let` y `const` en profundidad

1. Declara variables con `var`, `let` y `const` **dentro de una función** y **dentro de un bloque `if`**.
2. Comprueba qué variables se pueden acceder **dentro y fuera** de cada bloque y de la función.
3. Intenta **volver a declarar** la misma variable con cada palabra clave y observa los errores.
4. Escribe un pequeño informe en comentarios que explique:
   - **¿Qué es _hoisting_ y cómo afecta a `var`?**
   - **¿Qué diferencias de alcance existen entre `var`, `let` y `const`?**
   - **¿Qué significa que `const` no permite reasignación pero sí permite mutar objetos/arrays?** (demuéstralo con código).

---

## Ejercicio 2 — Adivinanzas con `Math`

Implementa un juego de adivinanzas:

- El ordenador genera un **número aleatorio entre 1 y 100**.
- El usuario tiene **hasta 7 intentos** para adivinarlo.
- Después de cada intento, el programa indica si el número es **mayor o menor** que la suposición.
- Si acierta, muestra el **número de intentos** que necesitó.
- Si no lo consigue en 7 intentos, muestra el mensaje:  
  **“Has perdido. El número era X”.**

---

## Ejercicio 3 — Juego con `Date`

Crea una página que pida al usuario una **fecha de nacimiento** en formato **DD/MM/AAAA**.

1. **Valida** la entrada usando **expresiones regulares**.
2. **Convierte** la fecha en un objeto `Date`.
3. **Calcula la edad exacta** del usuario (años cumplidos).
   - Muestra un mensaje como:  
     _Naciste el 15/09/2000, tienes 25 años._
4. **Extra:** muestra también **el día de la semana** en que nació (lunes, martes, etc.).

---

## Ejercicio 4 — Objeto `window`

Crea una página que utilice diferentes métodos y propiedades del objeto `window`.

**Requisitos**

1. Mostrar en consola el tamaño actual de la ventana (`innerWidth`, `innerHeight`).
2. Permitir **abrir una nueva ventana** con una URL al pulsar un botón (`window.open`).
3. Mostrar un **`alert`** de bienvenida al cargar la página.
4. Preguntar al usuario su nombre con **`prompt()`** y mostrarlo en el documento (con `document.write` o `innerHTML`).
5. Usar **`confirm()`** para preguntar si desea **cerrar la ventana** recién abierta y, si responde “sí”, **cerrarla**.

---

## Ejercicio 5 — Clase `Alumno`

> Nota: en el documento original este apartado aparece como “Ejercicio 4” por segunda vez; aquí se renumera a **Ejercicio 5** para evitar ambigüedad.

Crea una clase `Alumno` con las siguientes características:

1. **Propiedades:** `nombre`, `edad`, `nota`.
2. Un método `estaAprobado()` que devuelva `true` si `nota >= 5`.
3. Un método `presentacion()` que devuelva una cadena como:  
   _Soy Ana, tengo 20 años y mi nota es 7 (Aprobado)._
4. Crea **al menos 3 instancias** de `Alumno` y muéstralas en consola.
5. **Extra:** añade una clase hija `AlumnoBecado` con una propiedad adicional `beca` (importe en €) y **sobrescribe** `presentacion()` para incluir la información de la beca.
