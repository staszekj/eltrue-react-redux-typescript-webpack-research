// RootActions
import {LocationChangeAction, RouterAction} from 'react-router-redux';

import * as countersActions from './counters/counter.actions';
import {FluxStandardAction} from 'typesafe-actions';

export const actions = {
  counters: countersActions,
};

type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
  | FluxStandardAction<string>
  | ReactRouterAction;
