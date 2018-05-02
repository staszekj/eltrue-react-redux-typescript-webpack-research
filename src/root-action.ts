// RootActions
import {LocationChangeAction, RouterAction} from 'react-router-redux';

import * as countersActions from './counters/counter.actions';
import {Action} from './counters/counter.reducer';

export const actions = {
  counters: countersActions,
};

type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
  | Action
  | ReactRouterAction;
