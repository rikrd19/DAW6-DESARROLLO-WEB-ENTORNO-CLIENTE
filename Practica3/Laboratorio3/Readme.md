# Práctica 3: Gestión de Preferencias y Navegación Cliente

Esta práctica consiste en desarrollar una página web interactiva (Panel de Control) que utiliza el Browser Object Model (BOM) de forma avanzada para manejar la persistencia de datos y la comunicación entre diferentes contextos de navegación (ventanas y marcos).

## Módulo 1: Persistencia de Datos en el Cliente

### 1. Preferencias Permanentes (localStorage)

Se implementó un formulario para que el usuario ingrese su Nickname y seleccione un color de fondo. Estas preferencias se guardan en el localStorage del navegador, lo que permite que se mantengan incluso después de cerrar el navegador. Al cargar la página, se verifica si hay preferencias guardadas y se aplican automáticamente.

### 2. Gestión de Sesiones con Cookies

Se utilizaron cookies para guardar la fecha de la última visita del usuario. Cada vez que el usuario carga la página, se actualiza la cookie con la fecha y hora actual. Si es la primera vez que el usuario visita la página, se crea la cookie y se muestra un mensaje indicando que es la primera visita.

### 3. Contador de Sesión (sessionStorage)

Se implementó un contador que se incrementa cada vez que se recarga la página. Este contador se guarda en sessionStorage, por lo que solo persiste durante la sesión actual de navegación (se reinicia al cerrar la pestaña).

#### Explicación de localStorage y cookies

- **localStorage**: Es un mecanismo de almacenamiento web que permite guardar datos de forma persistente en el navegador. En esta práctica, se utilizó para guardar el Nickname y el color de fondo del usuario, de modo que estos datos estén disponibles en futuras visitas.

- **Cookies**: Son pequeños fragmentos de datos que se guardan en el navegador y se envían al servidor en cada petición. En esta práctica, se utilizaron para guardar la fecha de la última visita, con una expiración de 30 días.

## Módulo 2: Objetos Predefinidos Avanzados

### 1. Validación de Nickname con RegExp

El Nickname se valida con una expresión regular que verifica que:

- Empiece con una letra mayúscula.
- Solo contenga letras minúsculas y números después de la mayúscula.
- Tenga un mínimo de 5 caracteres.

Si el Nickname no cumple con estos requisitos, se muestra una alerta y no se guarda en localStorage.

### 2. Manipulación de String

Se implementó una función que recibe el Nickname y lo modifica reemplazando algunas letras por caracteres especiales (por ejemplo, 'a' por '@', 'e' por '3', etc.). El resultado se muestra en la consola.

## Módulo 3: Interacción entre Contextos de Navegación (BOM Avanzado)

### 1. Comunicación bidireccional entre ventanas

Desde la página principal, se puede abrir una ventana hija que contiene un formulario para actualizar el Nickname. Cuando se envía el nuevo Nickname desde la ventana hija, este se envía a la ventana principal mediante el método `postMessage`. La ventana principal actualiza el Nickname en su formulario, lo guarda en localStorage y muestra un mensaje de confirmación.

### 2. Programación con Marcos (iframes)

Se incluyó un iframe en la página principal que carga un documento HTML interno. Desde la página principal, se modifica el contenido del iframe, específicamente el título y el color de fondo, demostrando la capacidad de manipular elementos en un contexto de marco.

## Conclusión

Esta práctica permitió aplicar los conceptos de persistencia de datos en el cliente (localStorage, sessionStorage y cookies), validación y manipulación de strings, y comunicación entre diferentes contextos de navegación utilizando el BOM.
