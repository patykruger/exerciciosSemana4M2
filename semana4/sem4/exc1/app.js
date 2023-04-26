// app.js
import { calcularPreco, taxaImposto } from "./produto.js";
import calcularDesconto from "./desconto.js";
import Produto from "../Ex2/produtoClass.js";

const produto = {
  nome: "Impressora",
  descricao: " Impressora multifuncional Epson L3250 ",
  preco: 1100,
  quantidade: 2,
};

produto.precoTotal = calcularPreco(produto.preco, produto.quantidade);
produto.precoTotalComTaxas =
  produto.precoTotal + produto.precoTotal * taxaImposto;
produto.precoTotalComTaxasEDesconto =
  produto.precoTotalComTaxas - calcularDesconto(produto.precoTotalComTaxas);

console.log(produto);

// app.js EX2
const produto = new Produto(
  "Teclado",
  "Teclado gamer Logitech Série G G413",
  320,
  3
);

const precoTotalComImposto = produto.calcularPrecoComImposto();
console.log(precoTotalComImposto);

//app.js Ex4
const produto1 = new Produto(
  "Impressora",
  " multifuncional Epson L3250",
  10,
  5
); // Produto com preço maior que zero
const produto2 = new Produto("Teclado", "Teclado gamer Logitech Série G G413", -5, 3); // Produto com preço menor ou igual a zero

console.log("Produto 1:");
produto1
  .calcularPrecoComImposto()
  .then((precoTotal) => {
    console.log("Preço total com imposto:", precoTotal);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });

console.log("Produto 2:");
produto2
  .calcularPrecoComImposto()
  .then((precoTotal) => {
    console.log("Preço total com imposto:", precoTotal);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
