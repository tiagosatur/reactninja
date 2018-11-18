const mapRecursive =  (arr = [], func = (item) => item) => {
  // Forma imperativa
  if(arr.length === 0)
    return []

    const [head, ...tail] = arr
    return[func(head)].concat(map(tail, func))
}

export default mapRecursive;
