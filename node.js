// Impares del 1 al 20
let impares = "Impares del 1 al 20:\n";
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    impares += i + "\n";
  }
}
document.getElementById("impares").textContent = impares;

// Múltiplos de 3 del 100 al 0
let multiplos3 = "Múltiplos de 3 del 100 al 0:\n";
for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    multiplos3 += i + "\n";
  }
}
document.getElementById("multiplos3").textContent = multiplos3;

// Secuencia
let secuencia = "Secuencia:\n";
let value = 4;
for (let i = 0; i < 6; i++) {
  secuencia += value + "\n";
  value -= 1.5;
}
document.getElementById("secuencia").textContent = secuencia;

// Suma del 1 al 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
document.getElementById("suma").textContent = "Suma del 1 al 100: " + sum;

// Producto del 1 al 12
let product = 1;
for (let i = 1; i <= 12; i++) {
  product *= i;
}
document.getElementById("producto").textContent = "Producto del 1 al 12: " + product;