import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoContainer.css";

function TodoContainer() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(() => {
      return [
        ...todos,
        {
          id: todos.length + 1,
          todo: input,
          done: false,
        },
      ];
    });

    setInput("");
  };

  return (
    <div className="todoContainer">
      {/* input of the to do list */}
      <div className="input">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a To-do"
          />
          <button type="submit" className="btn"></button>
        </form>
      </div>

      {/* to do list  */}
      <div className="todoList">
        {todos.map((item) => {
          return (
            <Todo
              key={item.id}
              id={item.id}
              todo={item.todo}
              task_done={item.done}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoContainer;
