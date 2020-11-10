import React from 'react'

const pokemon = (pokemon) =>{
  return (
  <div key={pokemon.id} className='pokemon'>
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.type}</p>
      <img
      src={pokemon.image}
      alt={pokemon.name} 
      />
    </div>
  </div>)
}

export default pokemon;
