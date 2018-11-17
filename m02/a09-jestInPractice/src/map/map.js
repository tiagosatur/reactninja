const map =  (arr = [], func = (item) => item) => {
  // Forma imperativa
  if(typeof func !== 'function') {
    throw new TypeError('Function must be passed!')
  }

  if(!Array.isArray(arr)) {
    throw new TypeError('arr is not an array!')
  }

  let newArr = []

  for(let i = 0; i < arr.length; i++)
    newArr.push(func(arr[i], i, arr))

  return newArr;
}

export default map;
