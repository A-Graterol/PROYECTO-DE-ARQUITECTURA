// Código JavaScript principal
console.log("Página web cargada");

// Agregar evento de clic a los enlaces del menú
document.querySelectorAll("nav a").forEach((enlace) => {
 enlace.addEventListener("click", (evento) => {
 evento.preventDefault();
 console.log("Enlace clickeado");
 });
});

// Agregar evento de clic al botón de acción
document.querySelector("button").addEventListener("click", () => {
 console.log("Botón de acción clickeado");
});