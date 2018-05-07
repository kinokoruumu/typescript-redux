import * as React from "react";
import { CounterState } from "./module";
import { ActionDispatcher } from "./Container";

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<Props, {}> {
  public increment = () => {
    this.props.actions.increment(3)
  }

  public decrement = () => {
    this.props.actions.decrement(2)
  }

  public render() {
    return (
      <div>
        <p>score: {this.props.value.num}</p>
        <button onClick={this.increment}>Increment 3</button>
        <button onClick={this.decrement}>Decrement 2</button>
      </div>
    )
  }
}
