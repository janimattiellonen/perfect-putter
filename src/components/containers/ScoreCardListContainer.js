import ScoreCardList from '../ScoreCardList';

import { connect } from "react-redux";
function foo () {};

export default connect(
  state => ({
    value: state.scorecard.get('value')
  }),
  {
    foo
  }
)(ScoreCardList);