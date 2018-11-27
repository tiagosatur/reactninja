const filter = (arr, func) => {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    //Verify if the item passed to the function returns true
    //if true push into the array
    if(func(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }

  return newArr
}


export default filter;
