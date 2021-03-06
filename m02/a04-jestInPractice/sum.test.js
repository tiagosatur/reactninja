/*
  Iremos utilizar três funções para escrever nossos testes:
  1. describe
  2. it
  3. expect

  *** it *****
  it() === test()

  it('1 é igual a 1', () => {
    expect(1).toBe(1)
  })

  it('1 é igual a 1', () => {
    expect(1).toBe(2)
  })


  *** describe() ***
  - A função describe() cria um escopo para os testes
  - Pirmeiro parametro é a descrição, e o segundo é a função que
  será executada. Ex:
  describe('# ESCOPO', () => {
    it('Testando Jest', () => {

    })
    it('Testando Styled', () => {

    })
  })

  *** expect***
  É mais conhecida como interface de BDD (Behavior-Driven Development),
  uma forma mais humanamente legível de escrever testes. Nesta, é dito o que
  espera (expressão) seja igual a um valor determinado. BDD é um conjunto
  de melhores praticas para escrever testes e deve ser usado em conjunto com TDD.
  Para o BDD, você não deve testar a implementação, mas sim o comportamento.

  configure o package.json para saber % do código coberta por testes:
  "scripts": {
    "test": "jest --coverage"
  },
*/

// ES5
// const expect = require('chai').expect
// const sum = require('./sum')

//ES6
import { expect } from 'chai'
import sum from './sum'


it('Sum should be a function', () => {
  expect(sum).to.be.a('function')
})

it('sum(1, 2) should return 3', () => {
  expect(sum(1, 2)).to.be.equal(3)
})
