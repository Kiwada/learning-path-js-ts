# Nodejs Lib - Contador de Frequência de Palavras

Este projeto é uma ferramenta de linha de comando (CLI) desenvolvida em Node.js que lê arquivos de texto e analisa a frequência das palavras neles contidas.

## 📋 Funcionalidades do Projeto

- **Leitura de Arquivos**: Capaz de ler arquivos de texto do sistema de arquivos local.
- **Processamento de Texto**:
  - Divide o texto em parágrafos e palavras.
  - Limpa pontuções e caracteres especiais.
  - Ignora palavras pequenas (menos de 3 caracteres).
- **Contagem de Ocorrências**: Gera um relatório contabilizando quantas vezes cada palavra aparece no texto processado.
- **Interface de Linha de Comando (CLI)**: Utiliza `commander` para gerenciamento de argumentos e `chalk` para saídas coloridas no terminal.

## 🚀 Como usar

Para executar o projeto, utilize o seguinte comando no terminal, substituindo os caminhos conforme necessário:

```bash
node src/cli.js -t <caminho_do_arquivo_texto> -d <caminho_da_pasta_destino>
```

**Exemplo:**

```bash
node src/cli.js -t arquivos/texto-kanban.txt -d ./resultados
```

### Opções

- `-t, --texto`: Caminho do arquivo de texto a ser processado.
- `-d, --destino`: Caminho da pasta onde o arquivo de resultado será salvo.

---