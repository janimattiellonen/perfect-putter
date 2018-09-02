import React, { Component } from 'react';
import ScoreCardForm from './ScoreCardForm';

class ScoreCard extends Component {
  render() {
    const { currentRound, scoreCard, setAllMade } = this.props;

    console.log("ScoreCard is: " + JSON.stringify(scoreCard, null, 2));
    return (
      <div className="ScoreCardList">
        <p>Score card</p>

        <ScoreCardForm 
          setAllMade={setAllMade}
          scoreCard={scoreCard} 
          round={currentRound} 
        />
      </div>
    );
  }
}

export default ScoreCard;
