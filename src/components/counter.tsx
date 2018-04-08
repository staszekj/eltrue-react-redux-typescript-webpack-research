import * as React from 'react';
import {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {countersActions} from '../features/counters';
import {RootState} from '../features/root-reducer';
import {DispatchProps, OwnProps, OwnState, StateProps} from './types';

type CounterProps = OwnProps & StateProps & DispatchProps;

class CounterClazz extends React.Component<CounterProps, OwnState> {
  interval: number;
  state: OwnState = {count: 0};

  constructor(props: CounterProps) {
    super(props);
    this.onCounterTxtChange = this.onCounterTxtChange.bind(this);
  }

  onCounterTxtChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({...this.state, txt: event.target.value});
  }

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
        <div>Text: {this.state.txt}</div>
        <div>Redux Counter: {this.props.reduxCounter}</div>
        <div><input onChange={this.onCounterTxtChange}/></div>
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
