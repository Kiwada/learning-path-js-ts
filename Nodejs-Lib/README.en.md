# Nodejs Lib - Word Frequency Counter

This project is a command-line interface (CLI) tool developed in Node.js that reads text files and analyzes the frequency of the words contained within them.

## 📋 Project Features

- **File Reading**: Capable of reading text files from the local file system.
- **Text Processing**:
  - Splits text into paragraphs and words.
  - Cleans punctuation and special characters.
  - Ignores small words (less than 3 characters).
- **Occurrence Counting**: Generates a report counting how many times each word appears in the processed text.
- **Command Line Interface (CLI)**: Uses `commander` for argument management and `chalk` for colored terminal output.

## 🚀 How to use

To run the project, use the following command in the terminal, replacing the paths as needed:

```bash
node src/cli.js -t <path_to_text_file> -d <path_to_destination_folder>
```

**Example:**

```bash
node src/cli.js -t arquivos/texto-kanban.txt -d ./resultados
```

### Options

- `-t, --text`: Path to the text file to be processed.
- `-d, --destination`: Path to the folder where the result file will be saved.

---
