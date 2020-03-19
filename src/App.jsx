import React, { Component } from 'react';
import './App.css';
import Row from './Components/Grid';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      turn: 'X',
      gameState: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      winner: null
    }
  }

  handleClick = (event) => {
    if(this.state.turn === 'X' && event.target.innerText === '') {
      let row = Number(event.target.getAttribute('datarow'))
      let col = Number(event.target.getAttribute('datacell'))
      let newArray = this.state.gameState
      console.log(newArray[row][col])

      event.target.innerText = 'X';
      this.setState({
        turn: 'O',
      }) 

    } else if(this.state.turn === 'O' && event.target.innerText === '') {
        event.target.innerText = 'O'
        this.setState({
          turn: 'X'
        })
      }


    
    }
  




  render() {
    return (
      <div className="App">
        < Row rownumber='0' handleClick={this.handleClick}/>
        < Row rownumber='1' handleClick={this.handleClick}/>
        < Row rownumber='2' handleClick={this.handleClick}/>
    </div>
    );
  }
}

export default App;
