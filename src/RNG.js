import React, { Component } from 'react';
import './RNG.css';

  class RNG extends Component {
    
    constructor(props){
        super(props);
        this.state = {num: 1};
        this.getRandomInt = this.getRandomInt.bind(this);
    }
    
    getRandomInt(max) {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand});
      }
    render(){
        return (
            <div className="RNG"> 
                <h1>Number is: {this.state.num}</h1>
                <button className="btn" onClick={this.getRandomInt}>Random Number!</button>
                {this.state.num === 7 && <h2>YOU WIN</h2>}
            </div>
        );
    
    }
    
};

export default RNG;