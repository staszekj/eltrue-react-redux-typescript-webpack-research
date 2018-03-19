import {ActionCreator} from 'Features/counters/reducer';

export interface OwnState {
  count: number;
}

export interface OwnProps {
}

export interface StateProps {
  reduxCounter: number;
}

export interface DispatchProps {
  reduxAdd: ActionCreator;
}
