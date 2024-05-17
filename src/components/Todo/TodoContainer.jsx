import React, { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const TodoContainer = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  return (
    <div id="todoCont" className="outerCont">
      <div id="todoListWrapper">
        <h2>To-Do List</h2>
        <FormTodo handleAddItem={handleAddItem} />
        <TaskList list={list} setList={setList} />
      </div>
    </div>
  );
};

export default TodoContainer;
