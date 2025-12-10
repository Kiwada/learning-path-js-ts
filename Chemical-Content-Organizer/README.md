# Chemical Content Organizer

Este projeto é uma ferramenta de automação desenvolvida em Node.js para organizar arquivos de conteúdo educacional (formato `.docx`), focando especificamente em materiais de **Química / Natureza - Frente 1**.

## 🚀 Funcionalidades

O script realiza uma varredura recursiva no diretório raiz do projeto e executa as seguintes etapas para cada arquivo `.docx` encontrado:

1.  **Filtragem por Nome/Caminho**:
    *   Verifica se o caminho do arquivo contém palavras-chave como "quimica" ou "natureza".
    *   Confirma se pertence ao Módulo/Frente 1 (procurando por "1", "01", "I", "um").
    *   Exclui explicitamente arquivos da "Frente 2".

2.  **Análise de Conteúdo**:
    *   Utiliza a biblioteca `mammoth` para ler o texto bruto dos arquivos Word.
    *   Normaliza o texto (remove acentos, caixa baixa) para facilitar a comparação.

3.  **Classificação Semântica**:
    *   Busca por termos técnicos específicos no conteúdo do arquivo, tais como:
        *   Reações químicas
        *   Aspectos qualitativos/quantitativos
        *   Estequiometria
        *   Gases (leis, teoria cinética)
        *   Entre outros.

4.  **Organização Automática**:
    *   Caso o arquivo atenda aos critérios e contenha os termos alvo, ele é **copiado** para a pasta de destino: `ORGANIZADOS/Frente 1`.

## 🛠️ Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução.
*   **fs-extra**: Manipulação aprimorada do sistema de arquivos (cópia segura, criação de diretórios).
*   **glob**: Busca de arquivos utilizando padrões glob (`**/*.docx`).
*   **mammoth**: Conversão e extração de texto de arquivos .docx.

## 📦 Como Usar

1.  **Instale as dependências**:
    ```bash
    npm install
    ```

2.  **Execute o organizador**:
    ```bash
    npm start
    ```

3.  **Verifique os resultados**:
    *   O console exibirá o progresso da análise arquivo por arquivo.
    *   Ao final, verifique a pasta `ORGANIZADOS/Frente 1` na raiz do projeto.

## ⚙️ Configuração

As configurações principais (termos de busca, pastas ignoradas) estão definidas diretamente no topo do arquivo `src/index.js`. Você pode personalizar:
*   `TERMOS_ALVO`: Lista de palavras-chave para busca no conteúdo.
*   `filtroPastaPermissivo`: Lógica para filtrar quais pastas/arquivos devem ser analisados.
