import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { handleAdd } from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

export default function AddForm(props) {
  const dispatch = useDispatch();

  let text = props.text;
  let onTextChange = props.onTextChange;
  let textReset = props.textReset;

  // const count = useSelector((state) => state.counter.value));
  const callAdd = () => {
    dispatch(handleAdd(text));
    textReset();
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
        },
      }}
      noValidate
      autoComplete="on"
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
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
            onKeyPress={(e) => {
              if (e.key === "Enter")
                text !== "" ? callAdd() : alert("Text field must not be empty");
            }}
          />
          <Button
            variant="contained"
            onClick={(ev) =>
              text !== "" ? callAdd() : alert("Text field must not be empty")
            }
          >
            Add
          </Button>
        </form>
      </div>{" "}
    </Box>
  );
}
