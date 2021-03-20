import React, { Component } from 'react'
import '../App.css'
export default class Components extends Component {
    
    
   
    
    render() {

        
        let Active;

        if(this.props.turn == this.props.playerNumber){
            Active = `active${this.props.turn}`
        }else{
            Active = 'unactive'
        }

        return (
            <div className ={"player " + Active + ` player${this.props.playerNumber}`}>
                <div className={`scoreContainer `+`scoreContainer${this.props.playerNumber}` }>
                <h1>Player {this.props.playerNumber}</h1>
                <h1>{this.props.Score}</h1>
                </div>
                <div>
                    <div className={"currnetScore " + `currnetScore${this.props.playerNumber}`}>
                    <h1>
                        current Score
                    </h1>
                    <h1>
                        {this.props.currentScore}
                    </h1>
                    </div>
                </div>
            </div>
        )
    }
}


