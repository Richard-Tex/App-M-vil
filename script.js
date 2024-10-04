function calcular() {
  const figura = document.getElementById("figura").value;
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  let area, perimetro;

  if (figura === "triangulo") {
    area = (lado1 * lado1 * Math.sqrt(3)) / 4;
    perimetro = lado1 * 3;
  } else if (figura === "cuadrado") {
    area = lado1 * lado1;
    perimetro = lado1 * 4;
  } else if (figura === "rectangulo") {
    area = lado1 * lado2;
    perimetro = 2 * (lado1 + lado2);
  }

  document.getElementById("result").innerHTML = `
    <h2>Resultados</h2>
    <p>Área: ${area.toFixed(2)}</p>
    <p>Perímetro: ${perimetro.toFixed(2)}</p>
  `;
}