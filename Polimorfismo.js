// Classe base
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  apresentar() {
    console.log(`Olá! Eu sou ${this.nome}.`);
  }
}

// Aluno herda de Pessoa
class Aluno extends Pessoa {
  apresentar() {
    console.log(`Oi! Eu sou o aluno ${this.nome}.`);
  }
}

// Professor herda de Pessoa
class Professor extends Pessoa {
  apresentar() {
    console.log(`Bom dia! Sou o professor ${this.nome}.`);
  }
}

// Diretora herda de Pessoa
class Diretora extends Pessoa {
  apresentar() {
    console.log(`Sou a diretora ${this.nome}, seja bem-vindo à escola!`);
  }
}

// Lista de pessoas diferentes
const pessoas = [
  new Aluno("Lucas"),
  new Professor("Marina"),
  new Diretora("Fernanda")
];

// Todas têm o método 'apresentar', mas com comportamentos diferentes
pessoas.forEach(pessoa => pessoa.apresentar());
