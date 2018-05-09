import {applyMiddleware, compose, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {routerMiddleware as createRouterMiddleware} from 'react-router-redux';
import {createBrowserHistory} from 'history';

import {rootReducer, RootState} from './root-reducer';
import {rootEpic} from './root-epic';

export const epicMiddleware = createEpicMiddleware(rootEpic);
export const browserHistory = createBrowserHistory();
export const routerMiddleware = createRouterMiddleware(browserHistory);

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    epicMiddleware,
    routerMiddleware,
  ];
  // create store
  return createStore(
    rootReducer,
    initialState!,
    compose(applyMiddleware(...middlewares))
  );
}

// pass an optional param to rehydrate state on app start
export const store = configureStore();

// export store singleton instance
export default store;
