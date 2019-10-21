import React, { Component } from 'react';
import Counter from '../Counter/Counter'
import './CounterGroup.css';
import '../Counter/Counter.css'

class CounterGroup2nd extends Component{
    constructor(props){
        super(props);
        // this.handleInputChange.bind(this);
        this.state = {
            counterCounts: this.props.defaultCounts,
            inputValue: this.props.defaultCounts,
            sum : 0
        };
    }
    renegerateCounters = () => {
        this.setState({counterCounts : this.state.inputValue})
    }
    
    // handleChange(event) {
    //     this.setState({counterCounts: event.target.value});
    // }

    counterUpdateCallback = changeNum => {
        this.setState({sum: this.state.sum + changeNum})
    }

    handleInputChange = (event) =>{
        this.setState({
            inputValue : event.target.value
        })
    };0

    renderingCounters = () =>{
        var counters = [];
        for (let count = 0; count < this.state.counterCounts; count++) {
            counters.push(
            <Counter 
                key={count}
                onCounterValueChange= {this.counterUpdateCallback}
            />);
        } 

        return counters;
    }

    render (){
        let counters = this.renderingCounters();
        return (
            <div className="counter-group">
                <div className="regenerate">
                    <input type = "text" ref="countInput" value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className="counter-group-button" onClick={this.renegerateCounters}>Regenerate counters</button>
                    <span>Sum: {this.state.sum}</span>
                </div>
                <div>
                    {counters}
                </div>
            </div>
        );
    }
}

export default CounterGroup2nd;