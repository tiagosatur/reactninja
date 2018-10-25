const map =  (arr = [], func) => {
  if(typeof func !== 'function') {
    throw new TypeError('func is not a function!')
  }

  if(!Array.isArray(arr)) {
    throw new TypeError('arr is not an array!')
  }
  
  let newArr = []

  for(let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]), i, arr)
  }

  return newArr;
}

export default map;
