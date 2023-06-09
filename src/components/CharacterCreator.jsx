import React, { useRef } from "react";

const CharacterCreator = ({addChar}) => {
  let nameRef = useRef();
  let weaponRef = useRef();
  let phraseRef = useRef();
  let hpRef = useRef();
  let atkRef = useRef();
  let defRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    let newChar = {
      name: nameRef.current.value,
      weapon: weaponRef.current.value,
      phrase: phraseRef.current.value,
      hp: hpRef.current.value,
      attack: atkRef.current.value,
      defense: defRef.current.value,
    }
    addChar(newChar)

  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Build a Character</h2>
      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={weaponRef} type="text" placeholder="Weapons (CSV)" />
      <input ref={phraseRef} type="text" placeholder="Winning Phrase" />
      <input ref={hpRef} type="text" placeholder="HP" />
      <input ref={atkRef} type="text" placeholder="Attack Power" />
      <input ref={defRef} type="text" placeholder="Defense Power" />
      <button>Save</button>
    </form>
  );
};

export default CharacterCreator;
