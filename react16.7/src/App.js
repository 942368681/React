import React, { Component } from 'react';
import Immutable from 'immutable';
import './App.css';


class Child extends Component {

  shouldComponentUpdate = (nextProps) => {
    console.log(nextProps.number === this.props.number);
    if (nextProps.number.get('n') === this.props.number.get('n')) {
      return false;
    }
    return true;
  };

  render () {
    const { number } = this.props;
    console.log(number.toJS());
    return (
      <div>{ number.toJS().n }</div>
    );
  }
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      number: {
        n: 1
      }
    }
  }
  handleClick = () => {
    let prevNumObj = this.state.number;
    prevNumObj.n += 1;
    this.setState({
      number: prevNumObj
    });
  }
  render() {
    const { number } = this.state;
    return (
      <div className="App">
        <button type="button" onClick={this.handleClick}>click me</button>
        <Child number={Immutable.fromJS(number)} />
      </div>
    );
  }
}

export default App;
