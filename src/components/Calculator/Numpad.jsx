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

  return (
    <div>
      {listaBotones.map((nombre, index) => (
        <Button setValorDisplay={setValorDisplay} nombre={nombre} key={index} />
      ))}
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
          key={index}
        />
      ))}
    </div>
  );
};

export default Numpad;
