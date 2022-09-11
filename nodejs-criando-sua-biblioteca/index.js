const chalk = require("chalk");
const fs = require("fs");

console.log(chalk.blue.bgWhite.bold("Alura"));

function trataErro(erro) {
  throw new Error(erro);
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";

  fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.green);
  });
}

pegaArquivo("./arquivos/texto.md");
