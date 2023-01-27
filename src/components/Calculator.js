import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [result, setResult] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const newResult = calculate(result, event.target.value);
    setResult(newResult);
  };

  const { total, next, operation } = result;

  return (
    <div className="main-container flex">
      <div className="heading">
        <h1>Let&apos;s do some math!</h1>
      </div>
      <div className="calculator-div flex">
        <div className="display flex">
          {total}
          {operation}
          {next}
        </div>
        <div className="first-row">
          <button className="calculatorButton" type="button" value="AC" onClick={handleClick}>AC</button>
          <button className="calculatorButton" type="button" value="+/-" onClick={handleClick}>+/-</button>
          <button className="calculatorButton" type="button" value="%" onClick={handleClick}>%</button>
          <button className="calculatorButton operator" type="button" value="÷" onClick={handleClick}>÷</button>
        </div>
        <div className="second-row">
          <button className="calculatorButton" type="button" value="7" onClick={handleClick}>7</button>
          <button className="calculatorButton" type="button" value="8" onClick={handleClick}>8</button>
          <button className="calculatorButton" type="button" value="9" onClick={handleClick}>9</button>
          <button className="calculatorButton operator" type="button" value="x" onClick={handleClick}>x</button>
        </div>
        <div className="third-row">
          <button className="calculatorButton" type="button" value="4" onClick={handleClick}>4</button>
          <button className="calculatorButton" type="button" value="5" onClick={handleClick}>5</button>
          <button className="calculatorButton" type="button" value="6" onClick={handleClick}>6</button>
          <button className="calculatorButton operator" type="button" value="-" onClick={handleClick}>-</button>
        </div>
        <div className="fourth-row">
          <button className="calculatorButton" type="button" value="1" onClick={handleClick}>1</button>
          <button className="calculatorButton" type="button" value="2" onClick={handleClick}>2</button>
          <button className="calculatorButton" type="button" value="3" onClick={handleClick}>3</button>
          <button className="calculatorButton operator" type="button" value="+" onClick={handleClick}>+</button>
        </div>
        <div className="fifth-row">
          <button className="calculatorButtonBig" type="button" value="0" onClick={handleClick}>0</button>
          <button className="calculatorButton" type="button" value="." onClick={handleClick}>.</button>
          <button className="calculatorButton operator" type="button" value="=" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}
