const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

function manageError(erro) {
  throw new Error(erro.message);
}

async function checkStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const resposta = await fetch(url);
        return resposta.status;
      })
    );
    return arrayStatus;
  } catch (erro) {
    manageError(erro);
  }
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checkStatus(links);
  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice],
  }));
  return resultados;
}

module.exports = validaURLs;
