import React, { useState } from "react";
import "./styles.scss";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";
import "../../ThemesStyles/gradient.scss";
import "../../ThemesStyles/dark.scss";
import "../../ThemesStyles/auto.scss";

const FormTodo = (props) => {
  const handleAddItem = props.handleAddItem;

  const [taskInfo, setTaskInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      taskInfo,
    });
    setTaskInfo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div id="todoWrapper">
        <div id="todoInner">
          <input
            type="text"
            className="todoText"
            value={taskInfo}
            onChange={(e) => setTaskInfo(e.target.value)}
          />
          <button className="formButton" disabled={taskInfo ? "" : "disabled"}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
