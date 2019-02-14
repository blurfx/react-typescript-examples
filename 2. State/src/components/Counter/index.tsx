import * as React from 'react';

interface ICounterState {
  number: number;
};

interface IProps { };

class Counter extends React.Component<IProps, ICounterState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      number: 0
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState(({ number }) => ({
      number: number + 1
    }));
  }

  handleDecrease() {
    this.setState(({ number }) => ({
      number: number - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.number}</h1>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    )
  }
}

export default Counter;