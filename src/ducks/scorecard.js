import { List, Map } from "immutable";

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

export function setAllMade(round, distance) {

}

export default function (state = defaultState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    default:
    return state;
  }
}