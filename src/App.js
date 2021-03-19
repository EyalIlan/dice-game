import React from 'react'
import './App.css';
import Player from './Components/player'

class App extends  React.Component{


  state ={

    player3Score:1,
    player1Score:1,
    player2Score:0,
    currentScore1:0,
    currentScore2:0,
    turn:1,
    image1:'',
    image2:''

  } 


  getCurrentScore = (score) =>{

    if(this.state.turn === 1){
      this.setState({currentScore1:this.state.currentScore1 + score})
    }else{
      this.setState({currentScore2:this.state.currentScore2 + score})
    } 

  }

  RollDices = (e) =>{

    let cube1 = Math.floor(Math.random()*6+1)
    let cube2 = Math.floor(Math.random()*6+1)

    this.setState({
      image1:`dice${cube1}`,
      image2:`dice${cube2}`
    })


   this.getCurrentScore(cube1+cube2)


  }

  
render(){
    return (
      <div className="App">
          <Player playerNumber ="1" turn = {this.state.turn} currentScore = {this.state.currentScore1} Score = {this.state.player1Score}></Player>
          <Player playerNumber ="2" turn = {this.state.turn} currentScore = {this.state.currentScore2} Score = {this.state.player2Score}></Player>
          <div className="boardSettings">
              <button>New game</button>
              <img src={`/images/`+this.state.image1+'.png'} alt=""/>
              <img src={`/images/`+this.state.image2+'.png'} alt=""/>
              <button onClick={this.RollDices}>Roll Dice</button>
              <button>Hold</button>
          </div>
      </div>
    );

  }

}

export default App;
