import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function App() {
  const [notes, setNotes] = useState([{
    title: "Seja bem vindo ao Keeper",
    content: "Aqui é possível fazer lembretes"
  },
{
    title: "Faça o seu primeiro",
    content: "Só clicar na barra acima"
},
{
    title: "Apagar o Lembrete ?",
    content: "Só clicar na lixeira"
}]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
