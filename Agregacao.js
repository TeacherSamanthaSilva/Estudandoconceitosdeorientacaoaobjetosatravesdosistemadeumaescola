// Classe Aluno
class Aluno {
  constructor(nome) {
    this.nome = nome;
  }

  apresentar() {
    console.log(`Olá, eu sou o(a) aluno(a) ${this.nome}`);
  }
}

// Classe Escola que agrega Alunos
class Escola {
  constructor(nomeEscola) {
    this.nomeEscola = nomeEscola;
    this.alunos = []; // agregação
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
  }

  listarAlunos() {
    console.log(`Alunos da escola ${this.nomeEscola}:`);
    this.alunos.forEach(aluno => aluno.apresentar());
  }
}

// Criando alunos (eles podem existir fora da escola)
const aluno1 = new Aluno("Maria");
const aluno2 = new Aluno("João");

// Criando escola
const escola = new Escola("Escola Estadual ABC");

// Adicionando alunos à escola (agregação)
escola.adicionarAluno(aluno1);
escola.adicionarAluno(aluno2);

// Listando alunos da escola
escola.listarAlunos();
