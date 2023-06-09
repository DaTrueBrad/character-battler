import React from 'react'

const DisplayCharacter = ({char}) => {
  return (
    <div className='card'>
      <h2>{char.name}</h2>
      <h4>{char.hp} HP</h4>
      <h4>{char.attack} Atk Pwr</h4>
      <h4>{char.defense} Defense</h4>
    </div>
  )
}

export default DisplayCharacter