
import React, { Component } from 'react'
import '../App.css'
export default class Components extends Component {
    
    
   
    
    render() {

        
        let Active;

        if(this.props.turn == this.props.playerNumber){
            Active = 'active'
        }else{
            Active = 'unactive'
        }

        return (
            <div className ={"player " + Active}>
                <div>
                <h1>Player{this.props.playerNumber}</h1>
                <h1>{this.props.Score}</h1>
                </div>
                <div>
                    <div className="testing">
                    <h1>
                        currentScore
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


