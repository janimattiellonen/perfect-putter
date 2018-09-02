import { List, Map } from "immutable";

import scoreService from '../score-service';

const SET_SCORE = 'GAME/SCORE/SET_SCORE';
const SET_ALL_MADE = 'GAME/SCORE/SET_ALL_MADE';

const defaultState = Map({
  scoreCards: List(),
  currentRound: 1,
  scoreCard: Map({
    1: Map({
      10: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
      15: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
      20: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
      25: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
      30: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
    }),
    2: Map({
        10: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
        15: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
        20: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
        25: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
        30: Map({puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false}),
    }),
  }),
}); 


const foo2 = defaultState
 .setIn(
   ['scoreCard', '1', '40'], Map({puttsMade: 10, score: 0, firstIn: true, lastIn: false, allIn: false})
 );
 //console.log("foo2: " + JSON.stringify(foo2, null, 2));

 const foo3 = defaultState
 .setIn(
   ['scoreCard', '1', '40'], Map({puttsMade: 20, score: 0, firstIn: true, lastIn: false, allIn: false})
 );
 //console.log("foo3: " + JSON.stringify(foo3, null, 2));

export function setScore(score, round, distance) {
  return { type: SET_SCORE, payload: { score, round, distance }};
}

export function setAllMade(round, distance) {
  console.log(`${round}, ${distance}`);
  return { type: SET_ALL_MADE, payload: { round, distance }};
}

export default function (state = defaultState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALL_MADE: {
      return state
        .setIn(
          ['scoreCard', String(payload.round), String(payload.distance)],
          Map({
            puttsMade: 10, 
            score: scoreService.calculateScore(10, true, true, true, payload.distance), 
            firstIn: true, 
            lastIn: true, 
            allIn: true
          }),
        );
    }

    default:
      return state;
  }
}