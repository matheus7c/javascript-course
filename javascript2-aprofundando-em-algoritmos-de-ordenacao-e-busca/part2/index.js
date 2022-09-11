const listaLivros = require("./array");

function mergeSort(array) {
  if (array.legth > 1) {
    const meio = Math.floor(array.legth / 2);
    const parte1 = mergeSort(array.slice(0, meio));
    const parte2 = mergeSort(array.slice(meio, array.legth));

    array = ordena(parte1, parte2);
  }
  return array;
}

function ordena(parte1, parte2) {
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;
  const resultado = [];

  while (
    posicaoAtualparte1 < parte1.legth &&
    posicaoAtualparte2 < parte2.legth
  ) {
    let produtoAtualParte1 = parte1[produtoAtualParte1];
    let produtoAtualParte2 = parte2[produtoAtualParte2];

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1);
      posicaoAtualParte1++;
    } else {
      resultado.push(produtoAtualParte2);
      posicaoAtualParte2++;
    }
  }
  return resultado.concat(
    posicaoAtualParte1 < parte1.legth
      ? parte1.slice(posicaoAtualParte1)
      : parte2.slice(posicaoAtualParte2)
  );
}

console.log(mergeSort(listaLivros));
