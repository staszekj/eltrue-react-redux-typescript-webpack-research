import React from 'react';
import {ColonProps} from './colon.types';

class Colon extends React.Component<ColonProps> {
  static defaultProps: ColonProps;

  constructor(props: ColonProps) {
    super(props);
  }

  transform(functions: Array<{ [s: string]: string | string[] }>) {
    return functions.reduce((funcs, func) => {
      const name: string = Object.keys(func)[0];
      const params: string[] = this.convertToArray(func[name]);
      return `${funcs} ${name}(${params.join(' ')})`;
    }, '');
  }

  render() {
    return (
      <svg viewBox={[-1, -1, 12, 20].toString()}>
        <g
          transform={this.transform([{translate: [this.props.x.toString(), this.props.y.toString()]}])}
          style={{
            fillRule: 'evenodd',
            stroke: '#fff',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
            strokeWidth: 0.25,
          }}
        >
          <circle
            cx={12 / 2}
            cy={20 / 3}
            r={1}
            fill={this.props.color}
            fillOpacity={
              this.props.on ? this.props.onOpacity : this.props.offOpacity
            }
          />
          <circle
            cx={12 - 12 / 2}
            cy={20 - 20 / 3}
            r={1}
            fill={this.props.color}
            fillOpacity={
              this.props.on ? this.props.onOpacity : this.props.offOpacity
            }
          />
        </g>
      </svg>
    );
  }

  convertToArray(arrayOrString: string[] | string): string[] {
    if (this.isArray(arrayOrString)) {
      return arrayOrString;
    }
    if (this.isString(arrayOrString)) {
      return [arrayOrString];
    }
    return [];
  }

  private isArray(arg: string[] | string): arg is string[] {
    return Array.isArray(arg);
  }

  private isString(arg: string[] | string): arg is string {
    return typeof arg === 'string';
  }
}

Colon.defaultProps = {
  color: 'red',
  offOpacity: 0.15,
  on: true,
  onOpacity: 1,
  x: 0,
  y: 0,
};

export default Colon;
