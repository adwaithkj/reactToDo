import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/listItem";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import AddForm from "./components/addForm";
function App() {
  // let tasks = ["clean toilet", "clean sewer", "clean the code"];

  // const [tasks, updateTasks] = useState(localStorage.getItem("tasks") === []);
  const [tasks, updateTasks] = useState([]);
  // const [tasks, updateTasks] = useState(
  //   taskName: "";
  //   check: false;
  // );

  useEffect(() => {
    localStorage.setItem("tasks", tasks);
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
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="header"> React </h1>
      </header>
      <h2 className="Todo-heading">Todo App</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100ch" },
        }}
        noValidate
        autoComplete="on"
      >
        <AddForm
          text={text}
          onTextChange={onTextChange}
          handleAdd={handleAdd}
        />
      </Box>
      {tasks !== undefined ? (
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
    </div>
  );
}

export default App;
