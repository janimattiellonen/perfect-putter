import { List, Map } from "immutable";

import scoreService from '../score-service';

const SET_SCORE = 'GAME/SCORE/SET_SCORE';
const SET_FIRST_MADE = 'GAME/SCORE/SET_FIRST_MADE';
const SET_ALL_MADE = 'GAME/SCORE/SET_ALL_MADE';

const defaultState = Map({
  scoreCards: List(),
  currentRound: 1,
  scoreCard: Map({
    1: Map({
      10: Map({puttsMade: 23, score: 0, firstMade: false, lastMade: false, allMade: false}),
      15: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
      20: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
      25: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
      30: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
    }),
    2: Map({
        10: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
        15: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
        20: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
        25: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
        30: Map({puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false}),
    }),
  }),
}); 

export function setScore(score, round, distance) {
  return { type: SET_SCORE, payload: { score, round, distance }};
}

export function setFirstMade(round, distance) {

}

export function setAllMade(round, distance) {
  return { type: SET_ALL_MADE, payload: { round, distance }};
}

export default function (state = defaultState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_FIRST_MADE: {

    }
    case SET_ALL_MADE: {
      return state
        .setIn(
          ['scoreCard', String(payload.round), String(payload.distance)],
          Map({
            puttsMade: 10, 
            score: scoreService.calculateScore(10, true, true, true, payload.distance), 
            firstMade: true, 
            lastMade: true, 
            allMade: true
          }),
        );
    }

    default:
      return state;
  }
}