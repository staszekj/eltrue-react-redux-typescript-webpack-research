import * as React from 'react';
import * as ReactDOM from 'react-dom';
// tslint:disable:no-import-side-effect
import './rxjs-imports';
import {App} from './app';
import {browserHistory, store} from './store';

const renderRoot = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('root'));
};

if (process.env.NODE_ENV === 'production') {
  renderRoot((
    <App store={store} history={browserHistory}/>
  ));
} else {
  renderRoot((
    <App store={store} history={browserHistory}/>
  ));
}
