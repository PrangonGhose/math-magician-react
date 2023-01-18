import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component { // eslint-disable-line
  render() {
    return (
      <div className="main-container flex">
        <div className="calculator-div flex">
          <div className="display">
            <input type="text" name="display-input" className="calculatorDisplay" id="calculatorDisplay" value="0" readOnly />
          </div>
          <div className="first-row">
            <button className="calculatorButton" type="button">AC</button>
            <button className="calculatorButton" type="button">+/-</button>
            <button className="calculatorButton" type="button">%</button>
            <button className="calculatorButton operator" type="button">÷</button>
          </div>
          <div className="second-row">
            <button className="calculatorButton" type="button">7</button>
            <button className="calculatorButton" type="button">8</button>
            <button className="calculatorButton" type="button">9</button>
            <button className="calculatorButton operator" type="button">x</button>
          </div>
          <div className="third-row">
            <button className="calculatorButton" type="button">4</button>
            <button className="calculatorButton" type="button">5</button>
            <button className="calculatorButton" type="button">6</button>
            <button className="calculatorButton operator" type="button">-</button>
          </div>
          <div className="fourth-row">
            <button className="calculatorButton" type="button">1</button>
            <button className="calculatorButton" type="button">2</button>
            <button className="calculatorButton" type="button">3</button>
            <button className="calculatorButton operator" type="button">+</button>
          </div>
          <div className="fifth-row">
            <button className="calculatorButtonBig" type="button">0</button>
            <button className="calculatorButton" type="button">.</button>
            <button className="calculatorButton operator" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
