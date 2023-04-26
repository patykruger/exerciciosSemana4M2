// app.js
import Produto from "./produtoClass.js";

const produto = new Produto(
  " Fone de ouvido",
  " Over-ear gamer Warrior Rama PH219",
  60,
  4
);

setTimeout(() => {
  const precoTotalComImposto = produto.calcularPrecoComImposto();
  console.log("Preço total do produto após 3 segundos:", precoTotalComImposto);
}, 3000);

let contador = 0;
const intervalId = setInterval(() => {
  console.log("Data atual:", new Date());
  contador++;
  if (contador === 5) {
    clearInterval(intervalId);
  }
}, 3000);
