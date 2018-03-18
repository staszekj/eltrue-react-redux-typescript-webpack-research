import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {countersActions} from '../features/counters';
import {RootState} from '../features/root-reducer';
import {ActionCreator} from 'Features/counters/reducer';

interface OwnState {
  count: number;
}

interface OwnProps {
}

interface StateProps {
  reduxCounter: number;
}

interface DispatchProps {
  reduxAdd: ActionCreator;
}

class CounterClazz extends React.Component<OwnProps & StateProps & DispatchProps, OwnState> {
  interval: number;
  state = {count: 0};

  componentWillMount() {
    const incrementCounter = () => {
      this.setState({count: this.state.count + 1});
      this.props.reduxAdd(10);
    };
    this.interval = setInterval(incrementCounter, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.count}</div>
        <div>Redux Counter: {this.props.reduxCounter}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {reduxCounter: state.counters.reduxCounter};
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  reduxAdd: bindActionCreators(countersActions.add, dispatch),
});

export const Counter = connect<StateProps, DispatchProps, OwnProps, RootState>
(mapStateToProps, mapDispatchToProps)(CounterClazz);
