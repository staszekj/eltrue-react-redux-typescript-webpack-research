import {createAction} from 'typesafe-actions';
import {ActionCreator} from './counter.reducer';

const INCREMENT = 'INCREMENT';
const ADD = 'ADD';

export const increment: ActionCreator = createAction(INCREMENT);
export const add: ActionCreator = createAction(ADD, (amount: number) => ({
  type: ADD, payload: amount,
}));
