import React, { Component } from 'react';

class ScoreCardList extends Component {
  render() {
    const { value } = this.props;

    return (
      <div className="ScoreCardList">
        <p>IT IS: {value && value}</p>
      </div>
    );
  }
}

export default ScoreCardList;
