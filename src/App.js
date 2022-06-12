import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/listItem";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import AddForm from "./components/addForm";
import MadeWithLove from "./components/madeWithLove";

import Counter from "./features/counter/Counter";

function App() {
  // let tasks = ["clean toilet", "clean sewer", "clean the code"];

  // const [tasks, updateTasks] = useState(localStorage.getItem("tasks") === []);
  let p;
  if (localStorage.getItem("tasks") !== undefined) {
    console.log(localStorage.getItem("tasks"));
    p = JSON.parse(localStorage.getItem("tasks"));
  } else {
    p = [];
  }

  // const [tasks, updateTasks] = useState(p);
  const [tasks, updateTasks] = useState(p);
  // const [tasks, updateTasks] = useState(
  //   taskName: "";
  //   check: false;
  // );
  let ifEmpty = false;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    if (tasks === []) {
      ifEmpty = true;
    } else {
      ifEmpty = false;
    }
  }, [tasks]);

  const [text, setText] = useState("");

  const handleCheck = (task) => {
    let newItem = [...tasks];

    for (let i = 0; i < task.length; i++) {
      if (newItem[i].taskName === task)
        if (newItem[i].status === false) newItem[i].status = true;
        else newItem[i].status = false;
      console.log("updated");
      console.log(newItem);
      updateTasks(newItem);
      break;
    }
    console.log(tasks);
  };

  const onTextChange = (ev) => {
    setText(ev.target.value);
    console.log(text);
  };

  function handleAdd(event) {
    console.log(event.target.value);

    // updateTasks([...tasks, [text, false]]);
    updateTasks([...tasks, { taskName: text, status: false }]);
    console.log(tasks);
    setText("");
  }

  function handleDelete(task) {
    updateTasks(tasks.filter((item) => item.taskName !== task));
  }

  function handleEdit(task) {
    if (text === "") {
      alert("enter something to edit the value with");
      return;
    }
    let newTask = [...tasks];
    console.log(newTask);
    let i = 0;
    let index;

    for (i = 0; i < newTask.length; i++) {
      if (newTask[i].taskName === task) {
        console.log("found");
        index = i;
      }
    }
    console.log(index);
    // newTask[index] = [text, false];
    newTask[index] = { taskName: text, status: false };

    updateTasks(newTask);
  }
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  return (
    <div className="App">
      <header className="App-header">
        <div className="Applogo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="Todo-heading">
          <h2>TODO App</h2>
        </div>
      </header>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100ch" },
        }}
        noValidate
        autoComplete="on"
      >
        <hr></hr>
        <div className="form">
          <AddForm
            text={text}
            onTextChange={onTextChange}
            handleAdd={handleAdd}
          />
        </div>
      </Box>
      <Counter />
      {!ifEmpty ? (
        <div className="li">
          {tasks.map((task) => (
            <ListItem
              key={task[0]}
              task={task.taskName}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleCheck={handleCheck}
              check={task.status}
            />
          ))}
        </div>
      ) : (
        <h1>Click add to add new task</h1>
      )}

      <div className="footer">
        <MadeWithLove />
      </div>
    </div>
  );
}

export default App;
