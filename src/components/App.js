import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allCards, setNewCard] = useState([
    {
      title: "Alo",
      content: "Aqui tbm ta funfando"
    }
  ]);

  var titleCard = "";
  var textCard = "";

  function handleChange(evt) {
    const { value, name } = evt.target;
    if (name === "title") {
      titleCard = value;
    } else if (name === "content") {
      textCard = value;
    }
  }

  function addNewCard(evt) {
    setNewCard((prevValue) => [
      ...prevValue,
      {
        title: titleCard,
        content: textCard
      }
    ]);

    evt.preventDefault();
  }

  function deleteCard(id) {
    console.log(id);
    setNewCard((prevValue) => {
      return prevValue.filter((card, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleChange={handleChange} addNewCard={addNewCard} />

      {allCards.map((cardInnerText, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={cardInnerText.title}
            content={cardInnerText.content}
            deleteCard={deleteCard}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;