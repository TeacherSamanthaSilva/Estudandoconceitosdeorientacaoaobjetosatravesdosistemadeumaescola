// Classe pai (superclasse)
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Classe filha Aluno herda de Pessoa
class Aluno extends Pessoa {
  constructor(nome, idade, turma) {
    super(nome, idade); // chama o construtor da classe pai
    this.turma = turma;
  }

  apresentar() {
    super.apresentar(); // aproveita o método da classe pai
    console.log(`Sou aluno da turma ${this.turma}.`);
  }
}

// Classe filha Professor herda de Pessoa
class Professor extends Pessoa {
  constructor(nome, idade, disciplina) {
    super(nome, idade);
    this.disciplina = disciplina;
  }

  apresentar() {
    super.apresentar();
    console.log(`Sou professor de ${this.disciplina}.`);
  }
}

// Criando objetos
const aluno1 = new Aluno("Maria", 15, "9ºA");
const prof1 = new Professor("Carlos", 40, "Matemática");

// Chamando o método
aluno1.apresentar();
console.log("---");
prof1.apresentar();
