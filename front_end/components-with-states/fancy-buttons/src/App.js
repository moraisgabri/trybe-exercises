import React from 'react';
import './App.css';


class App extends React.Component {
  handleClick() {
    console.log('Clicked on button!')
  }
  
  handleClickSecond() {
    console.log('Im the best button!')
  }
  
  handleClickThird() {
    console.log('Wait, im a button?')
  }
  render() {
    return (
      <div className='button-container'>
      <button onClick={this.handleClick}>My button!</button>
      <button onClick={this.handleClickSecond}>My second button!</button>
      <button onClick={this.handleClickThird}>My third button!</button>
      </div>
      
      )
    }
}

export default App;
