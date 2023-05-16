import React from 'react';

export default class CounterClass extends React.Component {
  constructor(props) {
    // Gives us access to `this`
    super(props);
    // Setting our initial state
    this.state = { count: 0 };

    // `this` isn't immediately referenceable from all functions
    // We're binding it to that function manually
    this.counter = this.counter.bind(this);
  }

  counter() {
    // We can't set state with a previous state so you'd have to temporarily store the previous state
    const currentCount = this.state.count;
    // Set state with the previous state, plus 1
    this.setState({ count: currentCount + 1 });
    // Note that we couldn't say this.state.count = this.state.count+1
    // That would cause all sorts of issues
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.counter}>Click me</button>
      </div>
    );
  }
}
