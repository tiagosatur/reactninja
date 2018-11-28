const filter = (arr, func) => {

  //Verifica se o item do array corresponde ao seu índice e add a um novo array.

  return(function filterInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0
    ? []
    : (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter + 1))
  })(arr, 0)

}


export default filter;
