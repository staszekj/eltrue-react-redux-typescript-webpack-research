import {Action, Dispatch, Store} from 'redux';
import {FluxStandardAction} from 'typesafe-actions';
import {ActionCreator} from 'react-redux';

export interface OwnState {
  count: number;
  txt: string;
}

export interface OwnProps {
  store?: Store<any>;
  dispatch?: Dispatch<Action>;
}

export interface StateProps {
  reduxCounter: number;
}

export interface DispatchProps {
  reduxAdd: ActionCreator<FluxStandardAction<string>>;
}
