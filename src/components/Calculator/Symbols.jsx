import React from "react";
import { useState } from "react";

const Symbols = (props) => {
  const setSimboloDisplay = props.setSimboloDisplay;
  const simbolo = props.simbolo;
  const setValorDisplay = props.setValorDisplay;
  const valorDisplay = props.valorDisplay;
  const setSegundoValor = props.setSegundoValor;
  const setResultDisplay = props.setResultDisplay;
  const segundoValor = props.segundoValor;
  const simboloPrev = props.simboloPrev;
  const setSimboloPrev = props.setSimboloPrev;
  const valorTotal = props.valorTotal;
  const setValorTotal = props.setValorTotal;
  const setCheck = props.setCheck;
  const check = props.check;
  let total = 0;

  const erase = () => {
    let valorTemp = valorDisplay;
    let valorArray = [];
    if (valorDisplay !== "0") {
      let simboloAnterior = simbolo;
      for (let i = 0; i < valorTemp.length - 1; i++) {
        valorArray.push(valorTemp[i]);
      }
      setValorDisplay(valorArray.toString().replace(/,/g, ""));
      if (valorDisplay.length == 0) {
        setValorDisplay("0");
      }
    } else if (
      (segundoValor !== "0" && valorDisplay === "0") ||
      (segundoValor !== "0" && valorDisplay.length == 0)
    ) {
      let valorTemp = segundoValor;
      let simboloAnterior = simbolo;
      for (let i = 0; i < valorTemp.length - 1; i++) {
        valorArray.push(valorTemp[i]);
      }
      setSegundoValor(valorArray.toString().replace(/,/g, ""));
    }
  };

  const posNeg = () => {
    const valorNeg = valorDisplay * -1;
    setValorDisplay(valorNeg);
  };

  const addDecimal = () => {
    let myDot = false;
    let tempValor = valorDisplay;
    tempValor = tempValor + ".";
    for (let i = 0; i < valorDisplay.length; i++) {
      if (valorDisplay[i] === ".") {
        myDot = true;
      }
    }
    if (myDot === false) {
      setValorDisplay(tempValor);
    } else {
      return;
    }
  };

  const doPercent = () => {
    if (segundoValor === "0") {
      let percentR = valorDisplay / 100;
      setValorDisplay(percentR);
    } else {
      return;
    }
  };

  const reset = () => {
    setValorDisplay("0");
    setSimboloDisplay("");
    setSimboloPrev("");
    setSegundoValor("0");
    setValorTotal("0");
    setCheck(false);
  };

  const afterOpSetter = () => {
    //setValorDisplay("0");
    setValorTotal(total);
    //setSimboloDisplay("");
    //setSegundoValor("0");
    setCheck(false);
  };

  const sumOperator = () => {
    total = Number(valorDisplay) + Number(segundoValor);
  };

  const minOperator = () => {
    total = valorDisplay - segundoValor;
  };

  const multOperator = () => {
    total = valorDisplay * segundoValor;
  };

  const divOperator = () => {
    total = valorDisplay / segundoValor;
  };

  const handleClick = () => {
    if (simbolo == "⌫") {
      erase();
      return; //Had to keep this return in the code, otherwise it will imput the delete icon on the calculator and will take an extra click to start deleting
    }
    setSimboloDisplay((prev) => {
      if (simbolo !== "=") {
        switch (simbolo) {
          case "+-":
            posNeg();
            break;
          case ".":
            addDecimal();
            break;
          case "%":
            doPercent();
            break;
          case "C":
            reset();
            break;
          default:
            setValorDisplay(valorDisplay);
            setCheck(true);
            let simboloAnterior = simbolo;
            setSimboloPrev(simboloAnterior);
            return simbolo;
        }
      } else {
        switch (simboloPrev) {
          case "+":
            sumOperator();
            afterOpSetter();
            break;
          case "-":
            minOperator();
            afterOpSetter();
            break;
          case "*":
            multOperator();
            afterOpSetter();
            break;
          case "/":
            divOperator();
            afterOpSetter();
            break;
          default:
            break;
        }
        return;
      }
    });
  };

  return (
    <button onClick={handleClick} id={simbolo} className="symBtn">
      {simbolo}
    </button>
  );
};

export default Symbols;
