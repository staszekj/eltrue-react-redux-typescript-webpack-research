import {Action, Dispatch, Store} from 'redux';

export interface DigitProps {
  store?: Store<any>;
  dispatch?: Dispatch<Action>;
  value: string;
  onOpacity: number;
  offOpacity: number;
  color: string;
  x: number;
  y: number;
}

export type PairPath = [number, number];
export type SegmentPath = [PairPath, PairPath, PairPath, PairPath, PairPath, PairPath];
export type Segments = { [index: string]: SegmentPath };
export type Digits = { [index: string]: [string] };
