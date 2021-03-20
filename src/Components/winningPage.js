
import React from 'react'

export default function winningPage(props) {
    
   const RestartGame = () =>{
        props.Restart()
    }
    
    return (
        <div className={"Winning "+ `Winning${props.playerNumber}`}>
            
            <h1>Player {props.playerNumber}  Wins!!!!!!! </h1>
            <div>
            <button className="btn" onClick={RestartGame}>play again?</button>
            </div>
        </div>
    )
}
