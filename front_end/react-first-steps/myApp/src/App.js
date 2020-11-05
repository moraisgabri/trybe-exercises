import React from "react";
import "./App.css";

const task = (value) => {
  return <li>{value}</li>;
};

const taskList = [
  task('Task1'),
  task('Task2'),
  task('Task3'),
]

function App() {
  return taskList.map(element => element)
}

export default App;
