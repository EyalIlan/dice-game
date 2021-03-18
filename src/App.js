import React from 'react'
import './App.css';
import Player from './Components/player'

class App extends  React.Component{


  state ={

    player1Score:0,
    player2Score:0,
    currentScore1:0,
    currentScore2:0,
    turn:1

  } 

  
render(){
    return (
      <div className="App">
          <Player playerNumber ="1" turn = {this.state.turn} currentScore = {this.state.currentScore1} Score = {this.state.player1Score}></Player>
          <Player playerNumber ="2" turn = {this.state.turn} currentScore = {this.state.currentScore2} Score = {this.state.player2Score}></Player>
          <div className="boardSettings">
              <button>New game</button>
              <img src="" alt="asfassfa"/>
              <img src="" alt="sadfdsasf"/>
              <button>Hold</button>
          </div>
      </div>
    );

  }

}

export default App;
