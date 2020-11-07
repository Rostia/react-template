import React from 'react';

const withCounter = (WrappedComponent) => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          counter={this.state.counter}
          incrementCounter={() => this.setState({ counter: this.state.counter + 1 })}
          decrementCounter={() => this.setState({ counter: this.state.counter - 1 })}
        />
      );
    }
  }

  return HOC;
};

export default withCounter;
