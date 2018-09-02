import { connect } from "react-redux";

import ScoreCard from '../ScoreCard';
import { setAllMade } from '../../ducks/scorecard';

export default connect(
  state => ({
    currentRound: state.scorecard.get('currentRound'),
    scoreCard: state.scorecard.get('scoreCard'),
  }),
  {
    setAllMade,
  }
)(ScoreCard);