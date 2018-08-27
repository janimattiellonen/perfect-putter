import React, { Component } from 'react';
import ScoreCardForm from './ScoreCardForm';

class ScoreCard extends Component {
  render() {
    const { scoreCard } = this.props;

    console.log("ss: " + JSON.stringify(scoreCard.rounds[String(1)]));

    return (
      <div className="ScoreCardList">
        <p>Score card</p>

        <ScoreCardForm scoreCard={scoreCard} round={scoreCard.currentRound} />
      </div>
    );
  }
}

export default ScoreCard;
