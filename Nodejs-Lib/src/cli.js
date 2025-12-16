import fs from 'fs';
import tratarErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
  
  try{
    if(erro) throw erro; 
    const resultado = contaPalavras(texto);
    crieEsalvaArquivo(resultado , endereco );
  }catch(erro){ 
    console.log(tratarErros(erro));
  }
})


async function crieEsalvaArquivo(listaPalavras){
    const arquivoNovo = `${endereco}/resultados.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);
    try { 
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo criado com sucesso');
        
    } catch (error) {
        throw error;
    }
    
}