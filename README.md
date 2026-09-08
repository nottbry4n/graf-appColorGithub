🎨 RGB Studio — Selector de Colores

RGB Studio es una aplicación web interactiva desarrollada para seleccionar, visualizar y modificar colores mediante el modelo **RGB (Red, Green, Blue)**.

El proyecto permite al usuario modificar los valores de cada componente RGB mediante controles deslizantes o introduciendo directamente valores numéricos. Además, cuenta con un selector de color nativo y muestra automáticamente el código hexadecimal correspondiente.

La interfaz fue diseñada con un estilo moderno inspirado en el concepto **Liquid Glass**, utilizando transparencias, desenfoques, sombras, degradados y elementos visuales relacionados con los colores RGB.

📌 Características principales

- 🎨 Vista previa del color seleccionado.
- 🔴 Control independiente del canal **Rojo (Red)**.
- 🟢 Control independiente del canal **Verde (Green)**.
- 🔵 Control independiente del canal **Azul (Blue)**.
- 🎚️ Controles deslizantes para valores RGB de `0` a `255`.
- 🔢 Introducción manual de valores RGB.
- 🖌️ Selector de color mediante `input type="color"`.
- 🔄 Sincronización automática entre:
  - Selector de color.
  - Valores numéricos.
  - Sliders RGB.
  - Código RGB.
  - Código hexadecimal.
- 🔤 Conversión automática de RGB a HEX.
- 💎 Interfaz con efecto **Liquid Glass**.
- 🌈 Fondo temático relacionado con RGB.
- ✨ Esferas de luz RGB flotantes.
- 🌫️ Efectos de transparencia y desenfoque.
- 📱 Diseño adaptable a dispositivos móviles.
- ♿ Soporte para usuarios que prefieren reducir las animaciones.

🛠️ Tecnologías utilizadas

El proyecto fue desarrollado utilizando las siguientes tecnologías:

### HTML5. 
Se utiliza para crear la estructura y los diferentes elementos de la aplicación.

### CSS3. 
Se utiliza para el diseño visual de la aplicación, incluyendo:

- Liquid Glass.
- Transparencias.
- `backdrop-filter`.
- Degradados.
- Sombras.
- Animaciones.
- Diseño responsive.
- Efectos de iluminación.
- Fondo temático RGB.

### JavaScript. 
Se utiliza para agregar la funcionalidad interactiva de la aplicación y mantener sincronizados los diferentes controles de color.

### Bootstrap 5
Se utiliza como apoyo para la estructura y componentes de la interfaz.

### Bootstrap Icons
Se utilizan iconos para mejorar la presentación visual de la aplicación.

### Google Fonts
Se utiliza la tipografía **Inter** para mantener una apariencia moderna y limpia.

📂 Estructura del proyecto

La estructura del proyecto es la siguiente:

RGB-Studio/
│
├── index.html
│
├── css/
│   └── styles.css
│
└── js/
    └── script.js

### `index.html`

Contiene la estructura principal de la aplicación:

* Encabezado.
* Vista previa del color.
* Información RGB.
* Información HEX.
* Selector de color.
* Controles RGB.
* Código hexadecimal.
* Pie de página.

### `css/styles.css`
Contiene todos los estilos visuales de la aplicación:

* Diseño Liquid Glass.
* Fondo temático RGB.
* Esferas RGB.
* Animaciones.
* Tarjetas.
* Sliders.
* Inputs.
* Diseño responsive.
* Footer.

### `js/script.js`
Contiene la lógica necesaria para:

* Obtener los valores RGB.
* Actualizar los sliders.
* Actualizar los inputs numéricos.
* Convertir RGB a hexadecimal.
* Actualizar el selector de color.
* Actualizar la vista previa.
* Mostrar los valores RGB y HEX.

🎨 Funcionamiento

La aplicación trabaja principalmente con tres valores:
R = Rojo
G = Verde
B = Azul
Cada componente puede tener un valor entre:
0 ─────────────── 255
Por ejemplo:

RGB(255, 0, 0)
representa el color rojo.

Mientras que:

RGB(0, 255, 0)
representa el color verde.

Y:
RGB(0, 0, 255)
representa el color azul.

La aplicación convierte estos valores a su representación hexadecimal correspondiente.

Por ejemplo:
RGB(255, 0, 0)

se convierte en:

#FF0000

🔄 Sincronización de controles

Una de las principales características del proyecto es que todos los controles permanecen sincronizados.

Cuando el usuario modifica un valor RGB mediante un slider:

Slider → Input numérico → Vista previa → RGB → HEX → Selector

De igual manera, cuando se utiliza el selector de color:

Selector → RGB → Sliders → Inputs → Vista previa → HEX

Esto permite modificar el color desde diferentes controles sin perder la correspondencia entre los valores.

💎 Diseño Liquid Glass

La interfaz utiliza un diseño visual inspirado en el concepto **Liquid Glass**.

Entre los principales recursos utilizados se encuentran:

* Fondos semitransparentes.
* Desenfoque mediante `backdrop-filter`.
* Bordes translúcidos.
* Sombras suaves.
* Degradados.
* Tarjetas con esquinas redondeadas.
* Efectos de iluminación.
* Capas visuales superpuestas.

El objetivo es crear una interfaz moderna y agradable sin perder la facilidad de uso.

🌈 Fondo temático RGB

Para evitar una interfaz demasiado simple, se agregó un fondo relacionado directamente con la temática del proyecto.

El fondo incluye diferentes fuentes de iluminación:

* 🔴 Luz roja.
* 🟢 Luz verde.
* 🔵 Luz azul.
* 🌈 Mezcla de colores RGB.
* ✨ Textura visual sutil.

También se agregaron esferas RGB con una animación suave para generar sensación de profundidad y movimiento.

Las animaciones pueden desactivarse automáticamente cuando el usuario tiene habilitada la preferencia del sistema para reducir movimiento.

📱 Diseño responsive

La aplicación está preparada para adaptarse a diferentes tamaños de pantalla.

Se realizaron ajustes específicos para:

* Computadoras.
* Tablets.
* Teléfonos móviles.
* Pantallas pequeñas.

Esto permite que los controles y la información continúen siendo accesibles independientemente del dispositivo utilizado.

🚀 Instalación y ejecución

No es necesario instalar dependencias adicionales para ejecutar el proyecto.

### 1. Descargar o clonar el proyecto

Coloca todos los archivos manteniendo la estructura original:

RGB-Studio/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── script.js

### 2. Abrir el proyecto

Abre el archivo:
index.html
directamente desde un navegador web.

También puedes utilizar un servidor local, por ejemplo mediante **Visual Studio Code** y la extensión **Live Server**.

🌐 Recursos externos

El proyecto utiliza algunos recursos externos mediante CDN:

### Bootstrap
Framework utilizado como apoyo para la interfaz.

### Bootstrap Icons
Biblioteca utilizada para los iconos.

### Google Fonts
Fuente utilizada:

Inter

Estos recursos se cargan desde Internet al abrir la aplicación.

🎯 Objetivo del proyecto

El objetivo principal de esta actividad es desarrollar una aplicación web que permita comprender de manera práctica el funcionamiento del modelo de color RGB y su relación con la representación hexadecimal.

Además, el proyecto permite aplicar conocimientos de:

* HTML.
* CSS.
* JavaScript.
* Bootstrap.
* Manipulación del DOM.
* Eventos.
* Formularios.
* Diseño responsive.
* Diseño de interfaces.
* Experiencia de usuario.

👨‍💻 Autor

**Bryan Lugo**

### Institución

**Instituto Tecnológico Nacional de México**

**Campus Pachuca**

### Número de control

**23200928**
