import { expect } from 'chai';
import div from './div';

it('div should be a function', () => {
  expect(div).to.be.a('function')
})

it('div(10, 2) should return 5', () => {
  expect(div(10, 2)).to.be.equal(5)
})


/*
  npm run test:watch

  Se você pressionar a tecla:
  a - todos os testes serão executados novamente
  Enter - vai rodar a última configuração de testes que vc fez
  p - é possível filtrar o nome do arquivo que vc quer rodar o teste
  q - sai do modo watch
*/
