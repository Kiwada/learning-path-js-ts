const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const mammoth = require('mammoth');


const CURRICULO = require('./curriculo');

const RAIZ_DO_PROJETO = path.join(__dirname, '..');
const PASTA_DESTINO_BASE = path.join(RAIZ_DO_PROJETO, 'NOVA_ESTRUTURA');


const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();


async function lerConteudoWord(caminhoArquivo) {
    try {
        const resultado = await mammoth.extractRawText({ path: caminhoArquivo });
        return normalizar(resultado.value);
    } catch (erro) {
        return "";
    }
}


function classificarFrente(conteudoTexto) {
    let melhorFrente = null;
    let maiorPontuacao = 0;

    for (const [nomeFrente, palavrasChave] of Object.entries(CURRICULO)) {
        let pontos = 0;
        
    
        palavrasChave.forEach(termo => {
            if (conteudoTexto.includes(termo)) {
                pontos++;
            }
        });

      
        if (pontos > maiorPontuacao) {
            maiorPontuacao = pontos;
            melhorFrente = nomeFrente;
        }
    }


    return melhorFrente;
}

async function executar() {
    console.log(`📍 Raiz do projeto: ${RAIZ_DO_PROJETO}`);
    console.log("🔍 Iniciando classificação inteligente...");


    const arquivos = glob.sync('**/*.docx', { 
        cwd: RAIZ_DO_PROJETO, 
        absolute: true,
        ignore: ['**/node_modules/**', '**/src/**', '**/NOVA_ESTRUTURA/**'] 
    });

    console.log(`📂 Total de arquivos para analisar: ${arquivos.length}`);
    let movidos = 0;

    for (const arquivo of arquivos) {

        process.stdout.write(`📖 Analisando: ${path.basename(arquivo)}... `);

        const texto = await lerConteudoWord(arquivo);
        
  
        const frenteDetectada = classificarFrente(texto);

        if (frenteDetectada) {
            const pastaFinal = path.join(PASTA_DESTINO_BASE, frenteDetectada);
            const caminhoFinal = path.join(pastaFinal, path.basename(arquivo));

            await fs.ensureDir(pastaFinal);
            await fs.copy(arquivo, caminhoFinal);

            console.log(`✅ Vai para [${frenteDetectada}]`);
            movidos++;
        } else {
            console.log(`❌ (Sem conteúdo relevante detectado)`);
        }
    }

    console.log("-".repeat(50));
    console.log(`🚀 Concluído! ${movidos} arquivos organizados em '${PASTA_DESTINO_BASE}'`);
}

executar();