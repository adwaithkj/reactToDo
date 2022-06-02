import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/listItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddForm from "./components/addForm";
function App() {
  // let tasks = ["clean toilet", "clean sewer", "clean the code"];

  const [tasks, updateTasks] = useState([]);
  const [text, setText] = useState("");

  const onTextChange = (ev) => {
    setText(ev.target.value);
    console.log(text);
  };

  function handleAdd(event) {
    console.log(event.target.value);

    updateTasks([...tasks, text]);
    setText("");
    console.log(tasks);
  }

  function handleDelete(task) {
    console.log(task);
    console.log(tasks);
    updateTasks(tasks.filter((item) => item !== task));
  }

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

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
        autoComplete="off"
      >
        <AddForm />

        <div style={{ display: "flex", alignItems: "center" }}>
          <form className="addForm">
            <TextField
              fullWidth
              id="taskAdd"
              required
              placeholder="Add task"
              value={text}
              onChange={(ev) => {
                onTextChange(ev);
              }}
              onKeyPress={(e) => e.key === "Enter" && handleAdd(e)}
            />
            <Button
              variant="contained"
              onClick={(ev) =>
                text !== ""
                  ? handleAdd(ev)
                  : alert("Text field must not be empty")
              }
            >
              Add
            </Button>
          </form>
        </div>
      </Box>
      {tasks !== [] ? (
        <div className="li">
          {tasks.map((task) => (
            <ListItem key={task} task={task} handleDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
