import React from "react";

const Display = (props) => {
  const valorDisplay = props.valorDisplay;
  const simboloDisplay = props.simboloDisplay;
  const segundoValor = props.segundoValor;
  const valorTotal = props.valorTotal;
  const simboloPrev = props.simboloPrev;

  return (
    <div id="calcScreen">
      <div id="calcOperation">
        <div id="valor">{valorDisplay !== "0" ? valorDisplay : ""}</div>
        <div id="simbolo">
          {simboloDisplay === "=" ? simboloDisplay : simboloPrev}
        </div>
        <div id="segundoValor">{segundoValor !== "0" ? segundoValor : ""}</div>
      </div>
      <div id="calcResult">
        <div id="valorTotal">{valorTotal !== "0" ? valorTotal : ""}</div>
      </div>
    </div>
  );
};

export default Display;
