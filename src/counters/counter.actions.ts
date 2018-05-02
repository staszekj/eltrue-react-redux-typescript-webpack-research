import {createAction, FluxStandardAction} from 'typesafe-actions';
import {ActionCreator} from 'react-redux';

const INCREMENT = 'INCREMENT';
const ADD = 'ADD';

export const increment: ActionCreator<FluxStandardAction<string>> = createAction(INCREMENT);
export const add: ActionCreator<FluxStandardAction<string>> = createAction(ADD, (amount: number) => ({
  type: ADD, payload: amount,
}));
