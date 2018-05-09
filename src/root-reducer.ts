import {combineReducers} from 'redux';
import {routerReducer as router, RouterState} from 'react-router-redux';

import {CounterState as CountersState, reducer as counters} from './counters/counter.reducer';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  counters: CountersState;
}

export const rootReducer = combineReducers<RootState>({
  router,
  counters,
});
