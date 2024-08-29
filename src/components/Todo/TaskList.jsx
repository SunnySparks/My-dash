import "./styles.scss";
import CheckBox from "./CheckBox";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";

const TaskList = (props) => {
  const list = props.list;
  const setList = props.setList;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));

    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const check = list.map((item) => (
    <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="listCont">
      {list.length ? check : <p id="taskNotice">"No tasks!"</p>}
      {list.length ? (
        <div id="btnTodo">
          <button className="button" onClick={onClickRemoveItem}>
            Delete done tasks
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TaskList;
