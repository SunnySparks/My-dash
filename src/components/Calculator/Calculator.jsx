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
  const [check, setCheck] = useState(false);

  console.log("simboloPrev", simboloPrev);
  console.log("simboloPrev length", simboloPrev.length);

  console.log("segundoValor", segundoValor);
  console.log("segundoValor length", segundoValor.length);

  return (
    <div id="calcCont" className="outerCont">
      <Display
        valorDisplay={valorDisplay}
        simboloDisplay={simboloDisplay}
        segundoValor={segundoValor}
        valorTotal={valorTotal}
        simboloPrev={simboloPrev}
      />
      <Numpad
        setValorDisplay={setValorDisplay}
        setSimboloDisplay={setSimboloDisplay}
        valorDisplay={valorDisplay}
        setSegundoValor={setSegundoValor}
        segundoValor={segundoValor}
        setSimboloPrev={setSimboloPrev}
        simboloPrev={simboloPrev}
        setValorTotal={setValorTotal}
        setCheck={setCheck}
        check={check}
      />
    </div>
  );
};

export default Calculator;
