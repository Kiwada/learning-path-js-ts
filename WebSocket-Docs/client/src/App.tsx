import React, { useState, useEffect, useRef } from 'react';
import './App.css'; 
import { io, Socket } from 'socket.io-client';
import { FileText as IconFileText, Plus as IconPlus, ArrowLeft as IconArrowLeft, Trash2 as IconTrash2 } from 'lucide-react';

interface Document {
  name: string;
  content?: string;
}

export default function App() {
  const [view, setView] = useState<'home' | 'editor'>('home');
  const [documents, setDocuments] = useState<Document[]>([]);
  const [currentDocName, setCurrentDocName] = useState('');
  const [editorContent, setEditorContent] = useState('');
  
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3000');

    socketRef.current.on('connect', () => {
      console.log("Conectado ao servidor com ID:", socketRef.current?.id);
    });

    socketRef.current.on('documentos_interface', (docs: Document[]) => {
      console.log("Recebido documentos_interface:", docs);
      setDocuments(docs);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const handleKeyUp = () => {
    console.log("Emitindo texto_editor: Soltou tecla!");
    socketRef.current?.emit("texto_editor", "Soltou tecla!");
  };

  const handleOpenDocument = (name: string) => {
    setCurrentDocName(name);
    setView('editor');
    console.log("Emitindo selecionar_documento:", name);
    socketRef.current?.emit('selecionar_documento', name, (content: string) => {
      console.log("Callback selecionar_documento recebido:", content);
      setEditorContent(content);
    });
  };

  const handleAddDocument = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('inputDoc') as HTMLInputElement;
    const name = input.value;
    if (name) {
      console.log("Emitindo adicionar_documento:", name);
      socketRef.current?.emit('adicionar_documento', name);
      input.value = '';
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditorContent(e.target.value);
  };

  const handleGoBack = () => {
    setView('home');
    setEditorContent('');
    setCurrentDocName('');
  };

  const handleDeleteDocument = () => {
    console.log("Emitindo excluir_documento:", currentDocName);
    socketRef.current?.emit('excluir_documento', currentDocName);
    handleGoBack();
  };

  return (
    <div className="app-container">
      {view === 'home' && (
        <div className="container home-container">
          <header className="app-header">
            <h1 className="title">AluraDocs</h1>
            <p className="subtitle">Gerenciador de Documentos em Tempo Real</p>
          </header>
          <main>
            <div className="document-list">
              {documents.length === 0 ? (
                <div className="empty-message">Nenhum documento encontrado.</div>
              ) : (
                documents.map((doc) => (
                  <button key={doc.name} onClick={() => handleOpenDocument(doc.name)} className="document-item">
                    <span className="icon"><IconFileText /></span>
                    <span className="doc-name">{doc.name}</span>
                  </button>
                ))
              )}
            </div>
            <form onSubmit={handleAddDocument} className="add-form card">
              <input name="inputDoc" type="text" placeholder="Nome do documento..." required className="input-control" />
              <button type="submit" className="btn btn-primary"><IconPlus /> Adicionar</button>
            </form>
          </main>
        </div>
      )}

      {view === 'editor' && (
        <div className="container editor-container">
          <header className="app-header">
            <h1 className="title doc-title">{currentDocName}</h1>
            <div className="title-underline"></div>
          </header>
          <main>
            <div className="editor-wrapper">
              <textarea 
                value={editorContent} 
                onChange={handleTextChange} 
                onKeyUp={handleKeyUp}
                className="editor-textarea" 
                placeholder="Comece a escrever..." 
              />
              <div className="char-count">{editorContent.length} caracteres</div>
            </div>
            <div className="toolbar">
              <button onClick={handleGoBack} className="btn btn-primary"><IconArrowLeft /> Voltar</button>
              <button onClick={handleDeleteDocument} className="btn btn-outline-danger"><IconTrash2 /> Excluir documento</button>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}