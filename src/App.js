import "./App.css";
import { useState, useEffect } from "react";
import CharacterCreator from "./components/CharacterCreator";
import Header from "./components/Header";
import CreateScreen from "./screens/CreateScreen";
import Battle from "./screens/Battle";
import axios from "axios";

function App() {

  const [characterOne, setCharacterOne] = useState({});
  const [characterTwo, setCharacterTwo] = useState({});

let selectCharacter = (char) => {
  if(characterOne.name) {
    setCharacterTwo(char)
  } else {
    setCharacterOne(char)
  }
}

  let addCharOne = (value) => {
    axios
      .post('http://localhost:4004/api/addChar', value)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
    setCharacterOne(value)
  };

  let addCharTwo = (value) => {
    axios
      .post('http://localhost:4004/api/addChar', value)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
    setCharacterTwo(value)
  };

  return (
    <div className="App">
      <Header />
      {characterOne.name && characterTwo.name ? (
        <Battle setCharacterOne={setCharacterOne} setCharacterTwo={setCharacterTwo} characterOne={characterOne} characterTwo={characterTwo}/>
      ) : (
        <CreateScreen addCharOne={addCharOne} addCharTwo={addCharTwo} selectCharacter={selectCharacter}/>
      )}

    </div>
  );
}

export default App;
