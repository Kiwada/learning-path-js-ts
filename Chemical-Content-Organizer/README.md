# Chemical Content Organizer

Este projeto é uma ferramenta de automação desenvolvida em Node.js para organizar arquivos de conteúdo educacional (formato `.docx`) em **4 Frentes de Química**, utilizando análise semântica de conteúdo.

## 🚀 Funcionalidades

O script realiza uma varredura recursiva no diretório raiz do projeto e classifica inteligentemente cada arquivo:

1.  **Varredura Global**:
    *   Encontra todos os arquivos `.docx` no projeto (ignorando `node_modules` e pastas do sistema).

2.  **Análise de Conteúdo e Scoring**:
    *   Utiliza a biblioteca `mammoth` para extrair o texto dos arquivos.
    *   **Classificação Inteligente**: Compara o texto do arquivo contra um banco de palavras-chave definido em `src/curriculo.js`.
    *   Calcula uma pontuação para cada Frente (1, 2, 3 e 4) baseada na ocorrência de termos. A frente com maior pontuação vence.

3.  **Organização Automática e Dinâmica**:
    *   Arquivos classificados são copiados para uma nova estrutura de pastas: `NOVA_ESTRUTURA/<Nome da Frente>`.
    *   Se nenhum termo relevante for encontrado, o arquivo é ignorado, evitando falsos positivos.

## 📚 Currículo Suportado

As regras de classificação são modulares e estão em `src/curriculo.js`. Atualmente suporta:

*   **Frente 1**: Química Geral (Estequiometria, Gases, Transformações).
*   **Frente 2**: Atomística e Físico-Química (Estrutura Atômica, Ligações, Soluções).
*   **Frente 3**: Química Orgânica (Cadeias, Funções Orgânicas, Polímeros).
*   **Frente 4**: Físico-Química Avançada (Termoquímica, Cinética, Eletroquímica).

## 🛠️ Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução.
*   **fs-extra**: Manipulação de arquivos.
*   **glob**: Busca de arquivos.
*   **mammoth**: Leitura de arquivos `.docx`.

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
    *   Acompanhe o log no terminal (`📖 Analisando: ... ✅ Vai para [Frente X]`).
    *   Ao final, confira a pasta `NOVA_ESTRUTURA` criada na raiz.

## ⚙️ Personalização

Para ajustar os critérios de classificação, edite o arquivo `src/curriculo.js`. Basta adicionar ou remover termos das listas de cada frente.
