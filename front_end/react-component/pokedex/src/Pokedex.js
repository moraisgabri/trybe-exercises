import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from './data.js'

class Pokedex extends Component {
  render() {
  return <div className='pokedex'>
      { data.map(pokemon => Pokemon(pokemon)) }
    </div>
  }
}

export default Pokedex