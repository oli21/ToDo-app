import React from "react";
import "./Todo.css";

function Todo({ todo, id, task_done, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleDone = () => {
    console.log(task_done);
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <div className="checkbox">
        {!task_done && (
          <i className="far fa-circle not-done" onClick={handleDone}></i>
        )}
        {task_done && (
          <i className="far fa-circle icon-done" onClick={handleDone}></i>
        )}

        {!task_done && (
          <div className="todo-text">
            <p>{todo}</p>
          </div>
        )}

        {task_done && (
          <div className="todo-text done">
            <p>{todo}</p>
          </div>
        )}
      </div>

      <div className="deleteIcon" onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default Todo;
