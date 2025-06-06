
const alunos = [
  { nome: 'Ana', nota: 8.5 },
  { nome: 'Carlos', nota: 5.8 },
  { nome: 'Mariana', nota: 7.2 },
  { nome: 'Pedro', nota: 6.0 },
  { nome: 'Julia', nota: 4.3 },
  { nome: 'Lucas', nota: 9.1 }
];


const filtrarAprovados = (listaAlunos) => {
  return listaAlunos.filter(aluno => aluno.nota >= 6);
};


const aprovados = filtrarAprovados(alunos);


console.log('Todos os alunos:');
console.log(alunos);

console.log('\nAlunos aprovados (nota >= 6):');
console.log(aprovados);