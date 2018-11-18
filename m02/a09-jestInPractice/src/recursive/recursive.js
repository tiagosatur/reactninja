/*
  Função recursiva
  Recursão é chamar a mesma função dentro dela mesma.
  Ela possui duas regras:
  1) chamar ela mesma
  2) ter uma estratégia para parar essa função
*/
const sum = (arr) => {
  // Irá parar quando o array for vazio
  if(arr.length === 0)
    return 0

  // Quebramos o array em cabeça e cauda para podermos fazer uma ação com cada parte
  // Pega o primeiro item do array, o slice remove esse primeiro item e retorna
  // o restante do array que é passado para a função sum.
  // Novamente, o arr[0] pega o primeiro item e vai adicionando a soma.
  // E assim por diante até o array ficar vazio.
  return arr[0] + sum(arr.slice(1))
}

//Agora vamos simplificar (desestruturando) usando o rest operator

const sum2 = (arr) => {
  // Irá parar quando o array for vazio
  if(arr.length === 0)
    return 0

  const [head, ...tail] = arr
  return head + sum(tail)
}
