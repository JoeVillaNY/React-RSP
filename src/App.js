import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js'

class Game extends Component {
    constructor () {
      super();
      this.signs = ["rock","scissors","paper"];
      this.state = {
        playerOne: "rock",
        playerTwo: "scissors",
      }
    }

    playGame = () => {
      this.setState({
        playerOne: this.signs[Math.floor(Math.random() * this.signs.length)],
        playerTwo: this.signs[Math.floor(Math.random() * this.signs.length)],
      })
    }

    decideWinner =() => {


    }

  render() {
    return(
    <div className="style">
      <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
        </div>
      <div className="winner">
      Place winner here
      </div>
      <button type="button" onClick={this.playGame}> Play Game </button>
     </div>
  )
  }
}

export default Game;
