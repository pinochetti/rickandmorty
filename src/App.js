import "./App.css";
import Cards from "./Components/Cards/Cards.jsx";
import Nav from "./Components/Nav";
import { useState } from "react";

function App() {
  let [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`http://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personaje con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };

  return (
    <div className="container">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
