import { List, Map } from "immutable";

const defaultState = Map({
  scoreCards: List(),
  value: 42,
}); 

export default function (state = defaultState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}