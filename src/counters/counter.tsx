import * as React from 'react';
import {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as countersActions from './counter.actions';
import {RootState} from '../root-reducer';
import {DispatchProps, OwnProps, OwnState, StateProps} from './counter.types';
import Display from '../7segments';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import style from './counter.scss';

type CounterProps = OwnProps & StateProps & DispatchProps;

class CounterClazz extends React.Component<CounterProps, OwnState> {
  interval: number;
  state: OwnState = {count: 0, txt: ''};

  constructor(props: CounterProps) {
    super(props);
    this.onCounterTxtChange = this.onCounterTxtChange.bind(this);
    this.incrementBy100 = this.incrementBy100.bind(this);
  }

  onCounterTxtChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({...this.state, txt: event.target.value});
  }

  componentWillMount() {
    const incrementCounter = () => {
      this.setState({count: this.state.count + 1});
      this.props.reduxAdd(10);
    };
    this.interval = window.setInterval(incrementCounter, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  incrementBy100() {
    this.props.reduxAdd(100);
  }

  render() {
    return (
      <div>
        <div className={style.counterBlue}>Counter: {this.state.count}</div>
        <div>Text: {this.state.txt}</div>
        <div>Redux Counter: {this.props.reduxCounter}</div>
        <div>
          <MuiThemeProvider>
            <RaisedButton label="Add 100" onClick={this.incrementBy100}/>
          </MuiThemeProvider>
        </div>
        <Display value={this.props.reduxCounter}/>
        <div><input onChange={this.onCounterTxtChange}/></div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {reduxCounter: state.counters.reduxCounter};
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): DispatchProps => ({
  reduxAdd: bindActionCreators(countersActions.add, dispatch),
});

export const Counter = connect<StateProps, DispatchProps, OwnProps, RootState>
(mapStateToProps, mapDispatchToProps)(CounterClazz);
