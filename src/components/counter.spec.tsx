import * as React from 'react';
import {shallow} from 'enzyme';
import {Counter} from './counter';
import {Provider} from 'react-redux';
import {rootReducer} from '../features/root-reducer';
import {createStore} from 'redux';

describe('Counter', () => {
  const store = createStore(rootReducer, {});
  const component = shallow(<Provider store={store}><Counter/></Provider>);

  it('should match a snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should initialize state', () => {
    expect(component.state()).toEqual({count: 0});
  });

  it('should change state after a second', (done) => {
    setTimeout(() => {
      expect(component.state()).not.toEqual({count: 0});
      done();
    }, 1500);
  });
});
