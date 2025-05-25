class Aluno {
  #nome; // propriedade privada
  #notas = []; // propriedade privada

  constructor(nome) {
    this.#nome = nome;
  }

  // Método público para obter o nome do aluno
  getNome() {
    return this.#nome;
  }

  // Método público para adicionar uma nota
  adicionarNota(nota) {
    if (nota >= 0 && nota <= 10) {
      this.#notas.push(nota);
    } else {
      console.log("Nota inválida. Deve estar entre 0 e 10.");
    }
  }

  // Método público para calcular a média
  calcularMedia() {
    if (this.#notas.length === 0) return 0;
    const soma = this.#notas.reduce((a, b) => a + b, 0);
    return soma / this.#notas.length;
  }
}

// Usando a classe
const aluno1 = new Aluno("Maria");

aluno1.adicionarNota(8);
aluno1.adicionarNota(9);
aluno1.adicionarNota(11); // inválida

console.log(`Aluno: ${aluno1.getNome()}`);
console.log(`Média: ${aluno1.calcularMedia()}`);
