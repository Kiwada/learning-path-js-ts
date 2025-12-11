const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const mammoth = require('mammoth');

// IMPORTA AS REGRAS DO ARQUIVO EXTERNO
const CURRICULO = require('./curriculo');

const RAIZ_DO_PROJETO = path.join(__dirname, '..');
const PASTA_DESTINO_BASE = path.join(RAIZ_DO_PROJETO, 'NOVA_ESTRUTURA');

// Função auxiliar para limpar texto (tira acentos e põe minúsculo)
const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// Lê o Word e devolve o texto
async function lerConteudoWord(caminhoArquivo) {
    try {
        const resultado = await mammoth.extractRawText({ path: caminhoArquivo });
        return normalizar(resultado.value);
    } catch (erro) {
        return "";
    }
}

// A CEREJA DO BOLO: Decide qual a Frente baseada no score
// Ele conta quantas palavras-chave de cada frente aparecem no texto.
// Quem tiver mais pontos, ganha o arquivo.
function classificarFrente(conteudoTexto) {
    let melhorFrente = null;
    let maiorPontuacao = 0;

    // Loop pelas frentes (Frente 1, Frente 2, etc.)
    for (const [nomeFrente, palavrasChave] of Object.entries(CURRICULO)) {
        let pontos = 0;
        
        // Verifica quantas palavras-chave dessa frente estão no texto
        palavrasChave.forEach(termo => {
            if (conteudoTexto.includes(termo)) {
                pontos++;
            }
        });

        // Se essa frente pontuou mais que a anterior, ela assume a liderança
        if (pontos > maiorPontuacao) {
            maiorPontuacao = pontos;
            melhorFrente = nomeFrente;
        }
    }

    // Só retorna se tiver encontrado pelo menos 1 palavra-chave relevante
    return melhorFrente;
}

async function executar() {
    console.log(`📍 Raiz do projeto: ${RAIZ_DO_PROJETO}`);
    console.log("🔍 Iniciando classificação inteligente...");

    // Busca todos os .docx (ignora node_modules e a pasta de destino)
    const arquivos = glob.sync('**/*.docx', { 
        cwd: RAIZ_DO_PROJETO, 
        absolute: true,
        ignore: ['**/node_modules/**', '**/src/**', '**/NOVA_ESTRUTURA/**'] 
    });

    console.log(`📂 Total de arquivos para analisar: ${arquivos.length}`);
    let movidos = 0;

    for (const arquivo of arquivos) {
        // Log visual para saber que não travou
        process.stdout.write(`📖 Analisando: ${path.basename(arquivo)}... `);

        const texto = await lerConteudoWord(arquivo);
        
        // Chama a função de inteligência
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