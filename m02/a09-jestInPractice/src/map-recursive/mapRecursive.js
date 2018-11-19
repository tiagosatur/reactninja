// const mapRecursive =  (arr = [], func = (item) => item) => {
//   // Forma funcional
//
//   let counter = 0
//
//   const mapInternal = (arrayInternal) => {
//     if(arrayInternal.length === 0)
//       return []
//
//     const [head, ...tail] = arrayInternal
//     return [func(head, counter++, arr)].concat(mapInternal(tail, func))
//   }
//
//   return mapInternal(arr)
//
// }

//Refactoring

const mapRecursive =  (arr = [], func = (item) => item) => {
  // Forma funcional

  // IIFFE
  return (function mapInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    return arrayInternal.length === 0 ? [] : [
      func(head, counter, arr),
      ...mapInternal(tail, counter + 1)
    ]
  })(arr, 0)

}

export default mapRecursive;
