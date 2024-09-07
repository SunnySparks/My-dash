import "./styles.scss";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";
import "../../ThemesStyles/gradient.scss";
import "../../ThemesStyles/dark.scss";
import "../../ThemesStyles/auto.scss";

const CheckBox = (props) => {
  const {
    onChange,
    data: { id, taskInfo, done },
  } = props;
  return (
    <div class="cbCont">
      <div class="cbInner">
        <input
          className="cbText"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="todoTxt">
          <p>{taskInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
