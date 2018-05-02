import React from 'react';
import {DigitProps, Digits, SegmentPath, Segments} from './digit.types';

class Digit extends React.Component<DigitProps> {
  static defaultProps: DigitProps;
  segments: Segments;
  digits: Digits;

  constructor(props: DigitProps) {
    super(props);
    this.segments = {
      a: [[1, 1], [2, 0], [8, 0], [9, 1], [8, 2], [2, 2]],
      b: [[9, 1], [10, 2], [10, 8], [9, 9], [8, 8], [8, 2]],
      c: [[9, 9], [10, 10], [10, 16], [9, 17], [8, 16], [8, 10]],
      d: [[9, 17], [8, 18], [2, 18], [1, 17], [2, 16], [8, 16]],
      e: [[1, 17], [0, 16], [0, 10], [1, 9], [2, 10], [2, 16]],
      f: [[1, 9], [0, 8], [0, 2], [1, 1], [2, 2], [2, 8]],
      g: [[1, 9], [2, 8], [8, 8], [9, 9], [8, 10], [2, 10]],
    };

    this.digits = {
      0: ['a', 'b', 'c', 'd', 'e', 'f'],
      1: ['b', 'c'],
      2: ['a', 'b', 'g', 'e', 'd'],
      3: ['a', 'b', 'g', 'c', 'd'],
      4: ['f', 'g', 'b', 'c'],
      5: ['a', 'f', 'g', 'c', 'd'],
      6: ['a', 'f', 'g', 'c', 'd', 'e'],
      7: ['a', 'b', 'c'],
      8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      9: ['a', 'b', 'c', 'd', 'f', 'g'],
    };
  }

  private static convertToArray(arg: string[] | string): string[] {
    return Array.isArray(arg[name]) ? arg as string[] : [arg.toString()];
  }

  private static convertToArrayOrEmpty(arg: any): string[] {
    return Array.isArray(arg) ? arg as string[] : [];
  }

  getSegment(id: string) {
    const segment: SegmentPath = this.segments[id];
    return Array.isArray(segment) ? segment : [];
  }

  getDigit(id: string): string[] {
    const digit: [string] = this.digits[id];
    return Digit.convertToArrayOrEmpty(digit);
  }

  transform(functions: Array<{ [s: string]: string | string[] }>) {
    return functions.reduce((funcs, func) => {
      const name: string = Object.keys(func)[0];
      const params: string[] = Digit.convertToArray(func[name]);
      return `${funcs} ${name}(${params.join(' ')})`;
    }, '');
  }

  render() {
    return (
      <g
        transform={this.transform([{translate: [this.props.x.toString(), this.props.y.toString()]}])}
        style={{
          fillRule: 'evenodd',
          stroke: '#fff',
          strokeWidth: 0.25,
          strokeOpacity: 1,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
        }}
      >
        {Object.keys(this.segments).map(key =>
          <polygon
            key={key}
            points={this.getSegment(key).toString()}
            fill={this.props.color}
            fillOpacity={
              this.getDigit(this.props.value).indexOf(key) >= 0
                ? this.props.onOpacity
                : this.props.offOpacity
            }
          />
        )}
      </g>
    );
  }
}

Digit.defaultProps = {
  value: ' ',
  onOpacity: 1,
  offOpacity: 0.15,
  color: 'red',
  x: 0,
  y: 0,
};

export default Digit;
