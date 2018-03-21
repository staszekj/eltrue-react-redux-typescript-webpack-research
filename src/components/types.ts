import {ActionCreator} from 'Features/counters/reducer';
import {Action, Dispatch, Store} from 'redux';

export interface OwnState {
  count: number;
}

export interface OwnProps {
  store?: Store<any>;
  dispatch?: Dispatch<Action>;
}

export interface StateProps {
  reduxCounter: number;
}

export interface DispatchProps {
  reduxAdd: ActionCreator;
}
