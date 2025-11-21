import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Importa o CSS abaixo
import { io, Socket } from 'socket.io-client';

// --- ÍCONES SVG ---
const IconFileText = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
);
const IconTrash2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);
const IconArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
);
const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);

// --- TIPAGEM ---
interface Documento {
  name: string;
  content: string;
}

const INITIAL_DOCS: Documento[] = [
  { name: "JavaScript", content: "Texto sobre JS..." },
  { name: "Node", content: "Texto sobre Node..." },
  { name: "Socket.io", content: "Texto sobre Sockets..." }
];

export default function App() {
  const [view, setView] = useState<'home' | 'editor'>('home');
  const [documents, setDocuments] = useState<Documento[]>(INITIAL_DOCS);
  const [currentDocName, setCurrentDocName] = useState<string>('');
  const [editorContent, setEditorContent] = useState<string>('');

  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3000');
    
    socketRef.current.on('documentos_interface', (listaDocs: Documento[]) => {
      setDocuments(listaDocs);
    });

    return () => { socketRef.current?.disconnect(); };
  }, []);
  
  const handleOpenDocument = (docName: string) => {
    const doc = documents.find(d => d.name === docName);
    setCurrentDocName(docName);
    setEditorContent(doc ? doc.content : '');
    setView('editor');
    socketRef.current?.emit('selecionar_documento', docName, (conteudo: string) => { setEditorContent(conteudo); });
  };

  const handleGoBack = () => {
    setView('home');
    setCurrentDocName('');
    setEditorContent('');
  };

  const handleAddDocument = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputElement = form.elements.namedItem('inputDoc') as HTMLInputElement;
    const newName = inputElement.value.trim();

    if (newName) {
      if (!documents.find(d => d.name === newName)) {
        setDocuments([...documents, { name: newName, content: "" }]);
      }
      socketRef.current?.emit('adicionar_documento', newName);
      form.reset();
    }
  };

  const handleDeleteDocument = () => {
    setDocuments(documents.filter(d => d.name !== currentDocName));
    handleGoBack();
    socketRef.current?.emit('excluir_documento', currentDocName);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setEditorContent(newText);
    socketRef.current?.emit('texto_editor', { texto: newText, nomeDocumento: currentDocName });
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
              <textarea value={editorContent} onChange={handleTextChange} className="editor-textarea" placeholder="Comece a escrever..." />
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