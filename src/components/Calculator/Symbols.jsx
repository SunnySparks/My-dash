import { useState } from "react";

const Symbols = ({
  setSimboloDisplay,
  simbolo,
  setValorDisplay,
  valorDisplay,
  setSegundoValor,
  segundoValor,
  simboloPrev,
  setSimboloPrev,
  setValorTotal,
  setCheck,
}) => {
  let total = 0;

  const erase = () => {
    setValorDisplay((prev) => {
      let valorTemp = valorDisplay;
      let valorArray = [];
      console.log("valor temp1", prev);
      console.log("simboloPrev length", simboloPrev.length);
      console.log("segundoValor length", segundoValor.length);
      //console.log("segundoValor", segundoValor);
      if (prev !== "0" && simboloPrev.length == 0 && segundoValor == 0) {
        console.log("valor temp1", prev);
        let simboloAnterior = simbolo;
        for (let i = 0; i < prev.length - 1; i++) {
          console.log("prev[i]", prev[i]);
          valorArray.push(prev[i]);
        }
        setValorDisplay(valorArray.toString().replace(/,/g, ""));
        if (prev.length == 0) {
          setValorDisplay("0");
        }
      } else if (prev !== "0" && simboloPrev.length > 0 && segundoValor == 0) {
        console.log("simboloPrev", simboloPrev);
        setSimboloPrev("");
        setValorDisplay(prev);
      } else if (
        segundoValor !== "0" &&
        simboloPrev.length > 0 &&
        prev !== "0"
      ) {
        let valorTemp = segundoValor;
        let simboloAnterior = simbolo;
        for (let i = 0; i < valorTemp.length - 1; i++) {
          valorArray.push(valorTemp[i]);
        }
        setSegundoValor(valorArray.toString().replace(/,/g, ""));
        setValorDisplay(prev);
      } else if (
        prev == "0" &&
        simboloPrev.length == 0 &&
        segundoValor.length == 0
      ) {
        reset();
      }
    });

    /*if (valorDisplay !== "0" && simboloPrev == "" && segundoValor == 0) {
      let simboloAnterior = simbolo;
      for (let i = 0; i < valorTemp.length - 1; i++) {
        valorArray.push(valorTemp[i]);
      }
      setValorDisplay(valorArray.toString().replace(/,/g, ""));
      if (valorDisplay.length == 0) {
        setValorDisplay("0");
      }
    } else if (
      valorDisplay !== "0" &&
      simboloPrev.length > 0 &&
      segundoValor.length == 0
    ) {
      setSimboloPrev("");
    } else if (
      segundoValor !== "0" &&
      simboloPrev.length > 0 &&
      valorDisplay !== "0"
    ) {
      let valorTemp = segundoValor;
      let simboloAnterior = simbolo;
      for (let i = 0; i < valorTemp.length - 1; i++) {
        valorArray.push(valorTemp[i]);
      }
      setSegundoValor(valorArray.toString().replace(/,/g, ""));
    }*/
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
