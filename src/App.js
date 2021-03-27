import React from "react";
import "./App.css";

//components
import Sidebar from "./components/Sidebar";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="app_container">
      <div className="app">
        <Sidebar />
        <TodoContainer/>
      </div>
    </div>
  );
}

export default App;
