import React, { Component } from 'react';
import Display from './display';
import Button from './button';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { count: 0 };
  }

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }
  
  onDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return <div>
        <Display counter={this.state} />
        <Button increment={this.onIncrement} decrement={this.onDecrement}/>
      </div>;
  }
}

export default App;
