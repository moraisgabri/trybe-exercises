import './App.css';
import pokemons from './data'
import Pokedex from './Pokedex'

function App() {
  return(
    <div className='App'>
      <h1>Pokédex</h1>
      <Pokedex pokemons={pokemons} className='pokedex'/>;
    </div>
    ) 
}

export default App;
