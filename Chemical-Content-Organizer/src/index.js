const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const mammoth = require('mammoth');


const RAIZ_DO_PROJETO = path.join(__dirname, '..'); 
const DIRETORIO_DESTINO = path.join(RAIZ_DO_PROJETO, 'ORGANIZADOS', 'Frente 1');


const TERMOS_ALVO = [
    "reacoes quimicas", "aspectos qualitativos", "aspectos quantitativos",
    "transformacoes quimicas", "balanceamento", "estequiometria",
    "gases", "teoria cinetica", "leis dos gases", "equacao de clapeyron",
    "leis de dalton", "amagat e graham"
];


const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

async function lerConteudoWord(caminhoArquivo) {
    try {
        const resultado = await mammoth.extractRawText({ path: caminhoArquivo });
        return normalizar(resultado.value); 
    } catch (erro) {
        return "";
    }
}


const filtroPastaPermissivo = (caminhoArquivo) => {
    const texto = normalizar(caminhoArquivo);
 
    const temMateria = /quimica|natureza/.test(texto);
    const temIndicador1 = /1|i\b|um|01/.test(texto); 
    const ehFrente2 = /frente\s*2|modulo\s*0?2|quimica\s*2|quimica\s*ii/.test(texto);

    return temMateria && temIndicador1 && !ehFrente2;
};


async function executar() {
    console.log(`📍 Raiz do projeto identificada: ${RAIZ_DO_PROJETO}`);
    console.log("🔍 Iniciando busca de arquivos...");


    const arquivos = glob.sync('**/*.docx', { 
        cwd: RAIZ_DO_PROJETO, 
        absolute: true,
        ignore: ['**/node_modules/**', '**/src/**', '**/ORGANIZADOS/**'] 
    });

    console.log(`📂 Total de arquivos .docx encontrados na raiz: ${arquivos.length}`);

    let analisados = 0;
    let movidos = 0;

    for (const arquivo of arquivos) {
        
        
        if (!filtroPastaPermissivo(arquivo)) {
            continue; 
        }

        process.stdout.write(`📖 Lendo: ${path.basename(arquivo)}... `);
        analisados++;

        const conteudoTexto = await lerConteudoWord(arquivo);
        
       
        const encontrouTermo = TERMOS_ALVO.find(termo => conteudoTexto.includes(termo));

        if (encontrouTermo) {
            const nomeArquivo = path.basename(arquivo);
            const caminhoFinal = path.join(DIRETORIO_DESTINO, nomeArquivo);

            await fs.ensureDir(DIRETORIO_DESTINO);
            await fs.copy(arquivo, caminhoFinal);
            
            console.log(`✅ MATCH! (${encontrouTermo})`);
            movidos++;
        } else {
            console.log(`❌`);
        }
    }

    console.log("---------------------------------------------------");
    console.log(`📊 Relatório Final:`);
    console.log(`   - Arquivos encontrados no total: ${arquivos.length}`);
    console.log(`   - Arquivos que passaram no filtro de pasta: ${analisados}`);
    console.log(`   - Arquivos movidos (conteúdo confirmado): ${movidos}`);
    console.log(`   - Pasta de destino: ${DIRETORIO_DESTINO}`);
}

executar();