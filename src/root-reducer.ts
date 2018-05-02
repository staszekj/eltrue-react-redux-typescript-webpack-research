import {combineReducers} from 'redux';
import {routerReducer as router, RouterState} from 'react-router-redux';

import {CounterState as CountersState, reducer as counters} from './counters/counter.reducer';
import {RootAction} from './root-action';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  counters: CountersState;
}

export const rootReducer = combineReducers<RootState, RootAction>({
  router,
  counters,
});
