import { expect } from 'chai'
import map from './map'

//Caminho feliz
it('should be a function', () => {
  expect(map).to.be.a('function')
})

it('map([1, 2] (item) => item) should return [1, 2]', () => {
  expect(map([1,2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([3, 4] (item) => item) should return [3,4]', () => {
  expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('map([1, 2], (item) => item + 1) should return [2, 3]', () => {
  expect(map([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
})

it('map([4, 6], (item) => item + 1) should return [5, 7]', () => {
  expect(map([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
})

it('map([1, 2], (item, index) => index) should return [0, 1]', () => {
  expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('map([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]', () => {
  expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1,2], [1, 2]])
})


//Caminho da vida real

// Podemos usar o TypeError do Chai - https://www.chaijs.com/api/bdd/
// para especificarmos a mensagem de erro junto com o teste: .throw([errorLike], [errMsgMatcher], [msg])
// Também especificamos que se uma função não for passada por parâmetro,
// ela retorna o próprio item: func = (item) => item
// Esse teste não irá funcionar, já que estamos atribuindo um valor padrão caso a função não seja passada.
it('map should throw an error with the message "Function must be passed!"', () => {
  expect(map).to.throw(TypeError, /Function must be passed!/)
})

// Os testes acabam se tornando a documentação da tua aplicação.


// Esse último teste não irá disparar, pois primeiro está sendo testado se
// é uma função. Por isso que se não for passado um array, há o parametro default: array em branco
it('map should throw an error with the message "arr is not an array!"', () => {
  expect(map).to.throw(TypeError, /arr is not an array!/)
})
