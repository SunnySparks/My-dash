import Numpad from "./Numpad";
import Display from "./Display";
import { useState } from "react";

const Calculator = (props) => {
  const [valorDisplay, setValorDisplay] = useState("0");
  const [simboloDisplay, setSimboloDisplay] = useState("");
  const [segundoValor, setSegundoValor] = useState("0");
  const [resultDisplay, setResultDisplay] = useState("");
  const [simboloPrev, setSimboloPrev] = useState("");
  const [valorTotal, setValorTotal] = useState("0");

  return (
    <div id="calcCont" className="outerCont">
      <Display
        valorDisplay={valorDisplay}
        simboloDisplay={simboloDisplay}
        segundoValor={segundoValor}
        valorTotal={valorTotal}
      />
      <Numpad
        setValorDisplay={setValorDisplay}
        setSimboloDisplay={setSimboloDisplay}
        valorDisplay={valorDisplay}
        setSegundoValor={setSegundoValor}
        setResultDisplay={setResultDisplay}
        segundoValor={segundoValor}
        setSimboloPrev={setSimboloPrev}
        simboloPrev={simboloPrev}
        setValorTotal={setValorTotal}
      />
    </div>
  );
};

export default Calculator;
