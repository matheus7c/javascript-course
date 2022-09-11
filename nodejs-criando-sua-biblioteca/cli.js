const pegaArquivoAwait = require("./index");
const validaURLs = require("./http-validacao");
const chalk = require("chalk");

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
  const resultado = await pegaArquivoAwait(caminhoDoArquivo[2]);
  if (caminho[3] === "validar") {
    console.log(chalk.yellow("lista de links"), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow("lista de links"), resultado);
  }
}

processaTexto(caminho);
