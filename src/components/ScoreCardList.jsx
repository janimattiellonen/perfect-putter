import React, { Component } from 'react';
import ScoreCardForm from './ScoreCardForm';

class ScoreCardList extends Component {
  render() {
    const { value } = this.props;

    return (
      <div className="ScoreCardList">
        <p>IT IS: {value && value}</p>

        <ScoreCardForm />
      </div>


    );
  }
}

export default ScoreCardList;
