import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <Board name="some title" age="23" />
    </div>
  );
}

export default App;
