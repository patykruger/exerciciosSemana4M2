// produtoClass.js
export default class Produto {
  constructor(nome, descricao, preco, quantidade) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
    this.taxaImposto = 0.1;
  }

  calcularPreco() {
    return this.preco * this.quantidade;
  }

  calcularTaxa(preco) {
    return this.taxaImposto * preco;
  }

  calcularPrecoComImposto() {
    const precoTotal = this.#calcularPreco();
    const taxa = this.#calcularTaxa(precoTotal);
    return precoTotal + taxa;
  }
}
