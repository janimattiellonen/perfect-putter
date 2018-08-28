import { List, Map } from "immutable";

import scoreService from '../score-service';

const SET_SCORE = 'GAME/SCORE/SET_SCORE';
const SET_ALL_MADE = 'GAME/SCORE/SET_ALL_MADE';

const defaultState = Map({
  scoreCards: List(),
  scoreCard: {
    currentRound: 1,
    rounds: {
      1: new Map({
        10: {puttsMade: 0, score: 10, firstIn: false, lastIn: false, allIn: false},
        15: {puttsMade: 0, score: 20, firstIn: false, lastIn: false, allIn: false},
        20: {puttsMade: 0, score: 30, firstIn: false, lastIn: false, allIn: false},
        25: {puttsMade: 0, score: 20, firstIn: false, lastIn: false, allIn: false},
        30: {puttsMade: 0, score: 10, firstIn: false, lastIn: false, allIn: false},
    }),
    2: new Map({
        10: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
        15: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
        20: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
        25: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
        30: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
    }),
    }
  },
  value: 42,
}); 

export function setScore(score, round, distance) {
  return { type: SET_SCORE, payload: { score, round, distance }};
}

export function setAllMade(round, distance) {
  console.log(`${round}, ${distance}`);
  return { type: SET_SCORE, payload: { round, distance }};
}

export default function (state = defaultState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALL_MADE: {
      const round  = action.payload.round;
      const distance = action.payload.distance;
      const scores = state.get('scoreCard');
      const roundScores = scores.rounds[round];
      const score = roundScores.get(distance);

      return state
        .set(
          'scores', 
          scores.set(
            String(round), 
            roundScores.set(
              String(distance), 
              {
                ...score, 
                puttsMade: 10, 
                firstIn: true, 
                lastIn: true,
                allIn: true, 
                score: scoreService.calculateScore(10, true, true, true, distance),
              }
            )
          )
        );
    }

    default:
    return state;
  }
}