import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (event) => {
    const result = this.state;
    const newTotal = calculate(result, event.target.value);
    this.setState(newTotal);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="main-container flex">
        <div className="calculator-div flex">
          <div className="display flex">
            {total}
            {operation}
            {next}
          </div>
          <div className="first-row">
            <button className="calculatorButton" type="button" value="AC" onClick={this.handleClick}>AC</button>
            <button className="calculatorButton" type="button" value="+/-" onClick={this.handleClick}>+/-</button>
            <button className="calculatorButton" type="button" value="%" onClick={this.handleClick}>%</button>
            <button className="calculatorButton operator" type="button" value="÷" onClick={this.handleClick}>÷</button>
          </div>
          <div className="second-row">
            <button className="calculatorButton" type="button" value="7" onClick={this.handleClick}>7</button>
            <button className="calculatorButton" type="button" value="8" onClick={this.handleClick}>8</button>
            <button className="calculatorButton" type="button" value="9" onClick={this.handleClick}>9</button>
            <button className="calculatorButton operator" type="button" value="x" onClick={this.handleClick}>x</button>
          </div>
          <div className="third-row">
            <button className="calculatorButton" type="button" value="4" onClick={this.handleClick}>4</button>
            <button className="calculatorButton" type="button" value="5" onClick={this.handleClick}>5</button>
            <button className="calculatorButton" type="button" value="6" onClick={this.handleClick}>6</button>
            <button className="calculatorButton operator" type="button" value="-" onClick={this.handleClick}>-</button>
          </div>
          <div className="fourth-row">
            <button className="calculatorButton" type="button" value="1" onClick={this.handleClick}>1</button>
            <button className="calculatorButton" type="button" value="2" onClick={this.handleClick}>2</button>
            <button className="calculatorButton" type="button" value="3" onClick={this.handleClick}>3</button>
            <button className="calculatorButton operator" type="button" value="+" onClick={this.handleClick}>+</button>
          </div>
          <div className="fifth-row">
            <button className="calculatorButtonBig" type="button" value="0" onClick={this.handleClick}>0</button>
            <button className="calculatorButton" type="button" value="." onClick={this.handleClick}>.</button>
            <button className="calculatorButton operator" type="button" value="=" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
