import React from "react";
import Button from "./Button";
import Symbols from "./Symbols";

const listaBotones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const listaSimbolos = ["+-", "%", "/", "*", "-", "+", "=", ".", "C", "⌫"];

const Numpad = (props) => {
  const setValorDisplay = props.setValorDisplay;
  const setSimboloDisplay = props.setSimboloDisplay;
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

  return (
    <div id="calcBtns">
      <div id="numBtn">
        {listaBotones.map((nombre, index) => (
          <Button
            setValorDisplay={setValorDisplay}
            setSegundoValor={setSegundoValor}
            check={check}
            nombre={nombre}
            key={index}
          />
        ))}
      </div>
      <div id="symBtn">
        {listaSimbolos.map((simbolo, index) => (
          <Symbols
            setSimboloDisplay={setSimboloDisplay}
            simbolo={simbolo}
            setValorDisplay={setValorDisplay}
            valorDisplay={valorDisplay}
            setSegundoValor={setSegundoValor}
            setResultDisplay={setResultDisplay}
            segundoValor={segundoValor}
            setSimboloPrev={setSimboloPrev}
            simboloPrev={simboloPrev}
            valorTotal={valorTotal}
            setValorTotal={setValorTotal}
            setCheck={setCheck}
            check={check}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Numpad;
