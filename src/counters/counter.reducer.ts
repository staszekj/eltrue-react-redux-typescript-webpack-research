import {combineReducers} from 'redux';
import {FluxStandardAction, getType} from 'typesafe-actions';
import * as countersActions from './counter.actions';

export type Action = FluxStandardAction<string>;
export type ActionCreator = (...args: any[]) => Action;
export type State = {
  readonly reduxCounter: number;
};

export const reducer = combineReducers<State, Action>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {
      case getType(countersActions.increment):
        return state + 1; // action is type: { type: "INCREMENT"; }

      case getType(countersActions.add):
        return state + action.payload; // action is type: { type: "ADD"; payload: number; }

      default:
        return state;
    }
  },
});