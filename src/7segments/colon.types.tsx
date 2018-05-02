import {Action, Dispatch, Store} from 'redux';

export interface ColonProps {
  store?: Store<any>;
  dispatch?: Dispatch<Action>;
  on: boolean;
  onOpacity: number;
  offOpacity: number;
  color: string;
  x: number;
  y: number;
}
