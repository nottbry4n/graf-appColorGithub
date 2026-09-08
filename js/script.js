// ==========================================
// SLIDERS RGB
// ==========================================

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");


// ==========================================
// INPUTS NUMÉRICOS
// ==========================================

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");


// ==========================================
// COLOR PICKER
// ==========================================

const colorPicker = document.getElementById("colorPicker");


// ==========================================
// ELEMENTOS DE INFORMACIÓN
// ==========================================

const colorPreview = document.getElementById("colorPreview");

const rgbText = document.getElementById("rgbText");

const hexValue = document.getElementById("hexValue");
const hexText = document.getElementById("hexText");
const hexCode = document.getElementById("hexCode");

const pickerHex = document.getElementById("pickerHex");


// ==========================================
// VALIDAR RGB
// ==========================================

function validarRGB(valor) {

    valor = Number(valor);

    if (isNaN(valor)) {
        return 0;
    }

    if (valor < 0) {
        return 0;
    }

    if (valor > 255) {
        return 255;
    }

    return Math.round(valor);
}


// ==========================================
// DECIMAL → HEX
// ==========================================

function decimalToHex(valor) {

    return Number(valor)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();

}


// ==========================================
// RGB → HEX
// ==========================================

function rgbToHex(r, g, b) {

    return "#" +
        decimalToHex(r) +
        decimalToHex(g) +
        decimalToHex(b);

}


// ==========================================
// HEX → RGB
// ==========================================

function hexToRgb(hex) {

    hex = hex.replace("#", "");

    return {

        r: parseInt(
            hex.substring(0, 2),
            16
        ),

        g: parseInt(
            hex.substring(2, 4),
            16
        ),

        b: parseInt(
            hex.substring(4, 6),
            16
        )

    };

}


// ==========================================
// ACTUALIZAR DESDE RGB
// ==========================================

function updateFromRGB() {

    const r = validarRGB(redInput.value);
    const g = validarRGB(greenInput.value);
    const b = validarRGB(blueInput.value);


    // --------------------------------------
    // RGB
    // --------------------------------------

    const rgbColor =
        `rgb(${r}, ${g}, ${b})`;


    // --------------------------------------
    // HEX
    // --------------------------------------

    const hexColor =
        rgbToHex(r, g, b);


    // --------------------------------------
    // PREVIEW
    // --------------------------------------

    colorPreview.style.backgroundColor =
        rgbColor;


    // --------------------------------------
    // RGB TEXTO
    // --------------------------------------

    rgbText.textContent =
        `RGB(${r}, ${g}, ${b})`;


    // --------------------------------------
    // HEX
    // --------------------------------------

    hexValue.textContent =
        hexColor;

    hexText.textContent =
        hexColor;

    hexCode.textContent =
        hexColor;

    pickerHex.textContent =
        hexColor;


    // --------------------------------------
    // SLIDERS
    // --------------------------------------

    red.value = r;
    green.value = g;
    blue.value = b;


    // --------------------------------------
    // INPUTS
    // --------------------------------------

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;


    // --------------------------------------
    // COLOR PICKER
    // --------------------------------------

    colorPicker.value =
        hexColor;
}


// ==========================================
// SLIDER ROJO
// ==========================================

red.addEventListener(
    "input",
    function () {

        redInput.value =
            red.value;

        updateFromRGB();

    }
);


// ==========================================
// SLIDER VERDE
// ==========================================

green.addEventListener(
    "input",
    function () {

        greenInput.value =
            green.value;

        updateFromRGB();

    }
);


// ==========================================
// SLIDER AZUL
// ==========================================

blue.addEventListener(
    "input",
    function () {

        blueInput.value =
            blue.value;

        updateFromRGB();

    }
);


// ==========================================
// INPUT ROJO
// ==========================================

redInput.addEventListener(
    "input",
    function () {

        red.value =
            validarRGB(redInput.value);

        updateFromRGB();

    }
);


// ==========================================
// INPUT VERDE
// ==========================================

greenInput.addEventListener(
    "input",
    function () {

        green.value =
            validarRGB(greenInput.value);

        updateFromRGB();

    }
);


// ==========================================
// INPUT AZUL
// ==========================================

blueInput.addEventListener(
    "input",
    function () {

        blue.value =
            validarRGB(blueInput.value);

        updateFromRGB();

    }
);


// ==========================================
// COLOR PICKER
// ==========================================

colorPicker.addEventListener(
    "input",
    function () {

        // Obtener HEX

        const hexColor =
            colorPicker.value;


        // Convertir HEX → RGB

        const rgb =
            hexToRgb(hexColor);


        // Actualizar inputs

        redInput.value =
            rgb.r;

        greenInput.value =
            rgb.g;

        blueInput.value =
            rgb.b;


        // Actualizar toda la interfaz

        updateFromRGB();

    }
);


// ==========================================
// INICIALIZAR
// ==========================================

updateFromRGB();