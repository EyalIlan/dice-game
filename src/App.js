import React from "react";
import "./App.css";
import Player from "./Components/player";
import WinningPage from './Components/winningPage'

class App extends React.Component {
  state = {
    players: [
      {
        score: 0,
        currentScore: 0,
      },
      {
        score: 0,
        currentScore: 0,
      },
    ],
    turn: 1,
    image1: "",
    image2: "",
    ponitsToWin: 100,
    showPic:'notShow'
  };

  getCurrentScore = (score) => {
    let Players = [...this.state.players];

    if (score === 12) {
      Players[this.state.turn - 1].currentScore = 0;
      this.ChangePlayer();
    } else {
      Players[this.state.turn - 1].currentScore += score;
    }

    this.setState({
      players: Players,
    });
  };

  HoldPoints = () => {
    let Players = [...this.state.players];
    Players[this.state.turn - 1].score +=
      Players[this.state.turn - 1].currentScore;
    Players[this.state.turn - 1].currentScore = 0;
    this.setState({
      Players: Players,
    });

    if(Players[this.state.turn-1].score < 100){
      this.ChangePlayer();
    }

  };

  ChangePlayer = () => {
    let turn = this.state.turn;
    turn = turn === 1 ? 2 : 1;
    this.setState({
      turn: turn,
    });
  };

  RollDices = (e) => {
    
    

    let cube1 = Math.floor(Math.random() * 6 + 1);
    let cube2 = Math.floor(Math.random() * 6 + 1);
    this.setState({
      image1: `dice${cube1}`,
      image2: `dice${cube2}`,
      showPic:''
    });

    this.getCurrentScore(cube1 + cube2);
  };

  NewGame = () =>{

    let Players = this.state.players.map(p =>{
      return {score:0,currentScore:0}
    })

    this.setState({
      players:Players,
      turn:1
    })
  }

  render() {



    let display;

    if(this.state.players[this.state.turn-1].score >= this.state.ponitsToWin){
      display = (<WinningPage playerNumber = {this.state.turn}  Restart = {this.NewGame}></WinningPage>)
    }else{
    
     display = ( 
     <div className="App">
      <Player
        playerNumber="1"
        turn={this.state.turn}
        currentScore={this.state.players[0].currentScore}
        Score={this.state.players[0].score}
      ></Player>
      <Player
        playerNumber="2"
        turn={this.state.turn}
        currentScore={this.state.players[1].currentScore}
        Score={this.state.players[1].score}
      ></Player>

      <div className="boardSettings">
        <button onClick={this.NewGame} className="btn btn1">New game</button>
        <img className={this.state.showPic}  src={`/images/` + this.state.image1 + ".png"} />
        <img className={this.state.showPic} src={`/images/` + this.state.image2 + ".png"} />
        <button onClick={this.RollDices} className="btn btn2">Roll Dice</button>
        <button onClick={this.HoldPoints} className="btn btn1">Hold</button>
      </div>
    </div>
    )
    }

    return (
     <div>
        {display}
        
     </div>
    );
  }
}

export default App;
