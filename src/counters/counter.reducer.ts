import {combineReducers} from 'redux';
import {getType} from 'typesafe-actions';
import * as countersActions from './counter.actions';

export interface CounterState {
  reduxCounter: number;
}

export const reducer = combineReducers<CounterState>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {
      case getType(countersActions.increment):
        return state + 1;

      case getType(countersActions.add):
        return state + action.payload;

      default:
        return state;
    }
  },
});
