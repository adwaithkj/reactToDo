import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/listItem";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import AddForm from "./components/addForm";
import MadeWithLove from "./components/madeWithLove";

import Counter from "./features/counter/Counter";

import { useSelector, useDispatch } from "react-redux";
import { handleAdd } from "./features/counter/counterSlice";

function App() {
  // let tasks = ["clean toilet", "clean sewer", "clean the code"];

  // const [tasks, updateTasks] = useState(localStorage.getItem("tasks") === []);
  // let p;
  // if (localStorage.getItem("tasks") !== undefined) {
  //   console.log(localStorage.getItem("tasks"));
  //   p = JSON.parse(localStorage.getItem("tasks"));
  // } else {
  //   p = [];
  // }

  // const [tasks, updateTasks] = useState(p);

  const tasks = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  let isEmpty = false;

  useEffect(() => {
    // Update the document title using the browser API
    if (tasks === []) isEmpty = true;
    else isEmpty = false;
  }, [tasks]);

  const [text, setText] = useState("");

  const onTextChange = (ev) => {
    setText(ev.target.value);
    console.log(text);
  };

  const textReset = () => {
    setText("");
  };
  console.log(tasks);

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
            textReset={textReset}
          />
        </div>
      </Box>
      {/* <Counter /> */}

      {/* <h1>{useSelector((state) => state.counter.value.taskName)}</h1> */}
      {!isEmpty ? (
        <div className="li">
          {tasks.map((task) => (
            <ListItem
              // key={task.taskName}
              task={task.taskName}
              check={task.status}
              text={text}
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
