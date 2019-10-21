import React from 'react';
import './Counter.css';

class Counter extends React.Component{
constructor(props) {
    super(props);
    this.state = {number: 0};
}
addNumber = () => {
  this.setState(state => ({number: state.number + 1}));
  this.props.onCounterValueChange(1);
}
minusNumber = () => {
  this.setState(state => ({number: state.number - 1}));
  this.props.onCounterValueChange(-1);
}
render(){
  return (
    <div className= "counter">
        <button onClick = {this.addNumber}><h1>+</h1></button>
        <p>{this.state.number}</p>
        <button onClick = {this.minusNumber}><h1>-</h1></button>
    </div>
    );
  }
}

export default Counter;
