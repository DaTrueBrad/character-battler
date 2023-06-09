import React, {useEffect, useState} from "react";
import CharacterCreator from "../components/CharacterCreator";
import axios from "axios";

const CreateScreen = ({addCharOne,addCharTwo, selectCharacter}) => {
  const [savedChars, setSavedChars] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4004/api/characters')
    .then((res) => {
      console.log(res)
      setSavedChars(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  },[])

  let characterDisplay = savedChars.map((char) => {
    return <li>
      <h3>{char.name}</h3>
      <button onClick={() => selectCharacter(char)}>Select</button>
    </li>
  })


  return (
    <>
      <h1>Create your Characters</h1>
      <div className="row-container">
        <CharacterCreator addChar={addCharOne} />
        <CharacterCreator addChar={addCharTwo} />
      </div>
      <ul>
        <h2>Other Characters</h2>
        {characterDisplay}
      </ul>
    </>
  );
};

export default CreateScreen;
