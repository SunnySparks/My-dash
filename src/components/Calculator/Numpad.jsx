import Button from "./Button";
import Symbols from "./Symbols";
import "./styles.scss";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";
import "../../ThemesStyles/gradient.scss";
import "../../ThemesStyles/dark.scss";
import "../../ThemesStyles/auto.scss";

const listaBotones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const listaSimbolos = ["+-", "%", "/", "*", "-", "+", "=", ".", "C", "⌫"];

const Numpad = ({
  setValorDisplay,
  setSimboloDisplay,
  valorDisplay,
  setSegundoValor,
  segundoValor,
  simboloPrev,
  setSimboloPrev,
  setValorTotal,
  valorTotal,
  setCheck,
  check,
}) => {
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
            segundoValor={segundoValor}
            setSimboloPrev={setSimboloPrev}
            simboloPrev={simboloPrev}
            setValorTotal={setValorTotal}
            valorTotal={valorTotal}
            setCheck={setCheck}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Numpad;
