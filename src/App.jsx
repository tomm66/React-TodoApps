import React, { useState } from "react";

import "./styles.css";

export const App = () => {
  //useState when you want to use something from one component
  const [todoText, setTodoText] = useState(" ");
  const [incompleteTodos, setIncompleteTodos] = useState(["ddddddd"]);
  const [completeTodos, setCompleteTodos] = useState(["ddddddi"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClcikComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos.incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">incompleted</p>

        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>ddddddd</li>
                <button onClick={() => onClcikComplete(index)}>Complete</button>
                <button onClick={() => onClickDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">incompleted</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list=row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>Return</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
