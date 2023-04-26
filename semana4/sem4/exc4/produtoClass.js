//  cópia do produtoClass.js
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularPrecoComImposto() {
    console.log("Processando valor do produto...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const precoComImposto = this.preco * 1.1; // Adiciona 10% de imposto
        if (precoComImposto > 0) {
          resolve(precoComImposto);
        } else {
          reject(
            new Error("Ocorreu um erro: valor calculado menor ou igual a zero.")
          );
        }
      }, 5000);
    });
  }
}

const produto1 = new Produto("Impressora", 100);
const produto2 = new Produto("Teclado", -50);

produto1
  .calcularPrecoComImposto()
  .then((preco) =>
    console.log(`Preço com imposto do ${produto1.nome}: R$ ${preco.toFixed(2)}`)
  )
  .catch((error) => console.error(error));

produto2
  .calcularPrecoComImposto()
  .then((preco) =>
    console.log(`Preço com imposto do ${produto2.nome}: R$ ${preco.toFixed(2)}`)
  )
  .catch((error) => console.error(error));
