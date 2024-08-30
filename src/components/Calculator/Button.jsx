import "./styles.scss";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";
import "../../ThemesStyles/gradient.scss";

const Button = ({ setValorDisplay, nombre, setSegundoValor, check }) => {
  const handleClick = () => {
    if (check == true) {
      setSegundoValor((prev) => {
        if (prev === "0") {
          return nombre;
        } else {
          return prev + nombre;
        }
      });
    } else {
      setValorDisplay((prev) => {
        if (prev === "0") {
          return nombre;
        } else {
          return prev + nombre;
        }
      });
    }
  };

  return (
    <button onClick={handleClick} id={nombre} className="numBtn">
      {nombre}
    </button>
  );
};

export default Button;
