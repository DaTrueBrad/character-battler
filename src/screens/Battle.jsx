import React from 'react'
import DisplayCharacter from '../components/DisplayCharacter'

const Battle = ({characterOne, characterTwo, setCharacterOne, setCharacterTwo,}) => {

  function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleFight = () => {
    /*
      I need to select a weapon for each character first, then character one goes first. If character one defeats character two, character two does not get a turn. Character one then displays their winning message.

      if character two lives, they can attack and attempt to defeat character one. If they defeat character one, it displays their winning message.
    */
    let weapon1Arr = characterOne.weapon.split(', ')
    let weapon1 = weapon1Arr[Math.floor(Math.random() * weapon1Arr.length)]
    console.log(weapon1)
    let weapon2Arr = characterTwo.weapon.split(', ')
    let weapon2 = weapon2Arr[Math.floor(Math.random() * weapon2Arr.length)]

    // console.log(weapon1, weapon2)

    const damage1 = randomIntFromInterval(+characterOne.attack - 7, +characterOne.attack)
    const damage2 = randomIntFromInterval(+characterTwo.attack - 7, +characterTwo.attack)

    let newHealth2 = +characterTwo.hp - damage1
    let newHealth1 = +characterOne.hp - damage2
    if(newHealth2 <= 0) {
    setCharacterTwo({...characterTwo, hp: 0})
      return alert("WINNER! " + characterOne.phrase)
    } else {
      let newHealth1 = +characterOne.hp - damage2
      if(newHealth1 <= 0) {
        setCharacterOne({...characterOne, hp: 0})
    setCharacterTwo({...characterTwo, hp: newHealth2})
        return alert("WINNER! " + characterTwo.phrase)
      }
    }
    // TODO access setcharacter AND UPDATE HP
    setCharacterOne({...characterOne, hp: newHealth1})
    setCharacterTwo({...characterTwo, hp: newHealth2})

  }

  return (
    <div>
      <h1>FIGHT!</h1>
      <button onClick={handleFight}>attack!</button>
      <div className="row-container">
        <DisplayCharacter char={characterOne}/>
        <DisplayCharacter char={characterTwo}/>
      </div>
    </div>
  )
}

export default Battle