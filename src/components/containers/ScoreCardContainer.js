import ScoreCard from '../ScoreCard';

import { connect } from "react-redux";

export default connect(
  state => ({
    scoreCard: state.scorecard.get('scoreCard')
  }),
  {
  }
)(ScoreCard);