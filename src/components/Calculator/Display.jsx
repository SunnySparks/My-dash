import "./styles.scss";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";
import "../../ThemesStyles/gradient.scss";

const Display = ({
  valorDisplay,
  simboloDisplay,
  segundoValor,
  valorTotal,
  simboloPrev,
}) => {
  return (
    <div id="calcScreen">
      <div id="calcOperation">
        <div id="valor">
          <p>{valorDisplay !== "0" ? valorDisplay : ""}</p>
        </div>
        <div id="simbolo">
          <p>{simboloDisplay === "=" ? simboloDisplay : simboloPrev}</p>
        </div>
        <div id="segundoValor">
          <p>{segundoValor !== "0" ? segundoValor : ""}</p>
        </div>
      </div>
      <div id="calcResult">
        <div id="valorTotal">
          <p>{valorTotal !== "0" ? valorTotal : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
