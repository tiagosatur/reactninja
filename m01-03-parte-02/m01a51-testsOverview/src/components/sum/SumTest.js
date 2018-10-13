import sum from './Sum';

console.assert(
  typeof sum === 'function',
  'Sum deve ser uma função.'
)

console.assert(
  sum(1, 2) === 3,
  'Should sum(1, 2) return 3.'
)

console.log('Todos os testes passaram');
