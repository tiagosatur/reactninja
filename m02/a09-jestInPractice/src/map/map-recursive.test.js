import { expect } from 'chai'
import map from './map-recursive'


//Caminho feliz
it('should be a function', () => {
  expect(map).to.be.a('function')
})

it('map([1, 2] (item) => item) should return [1, 2]', () => {
  expect(map([1,2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([4, 6] (item) => item) should return [5, 7]', () => {
  expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('map([1, 2], (item, index) => index) should return [0, 1]', () => {
  expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('map([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]', () => {
  expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1,2], [1, 2]])
})


//Caminho da vida real
it('map([1, 3]) should throw an error with the message "Function must be passed!"', () => {
  expect(map).to.throw(TypeError, /Function must be passed!/)
})

it('map should throw an error with the message "arr is not an array!"', () => {
  expect(map).to.throw(TypeError, /An array be passed!/)
})
