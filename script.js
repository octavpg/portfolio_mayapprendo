// 1. Función para el efecto de contador en el 92%
// Se ejecuta cuando la página carga completamente
document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const target = 92; // El porcentaje objetivo
    let count = 0;

    const interval = setInterval(() => {
        if (count < target) {
            count++;
            counterElement.innerText = count;
        } else {
            clearInterval(interval);
        }
    }, 20); // Velocidad de la animación (menor es más rápido)
});

// 2. Función para el botón "Probar Prototipo"
function abrirPrototipo() {
    // AQUÍ: Reemplaza la URL con el link real a tu Figma o app
    const urlPrototipo = "https://marunui.github.io/testingsito/"; 
    
    // Muestra un mensaje y luego abre la pestaña
    alert("¡Genial! Te redirigiremos al prototipo interactivo.");
    window.open(urlPrototipo, '_blank');
}

// 3. Función de desplazamiento suave (Scroll)
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 4. Manejo del formulario de contacto (Demo)
const form = document.getElementById('collabForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se recargue la página real
    alert("¡Gracias por tu interés en Mayapprendo! Nos pondremos en contacto pronto.");
    form.reset(); // Limpia los campos
});