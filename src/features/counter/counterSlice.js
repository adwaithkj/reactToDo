import { createSlice, TaskAbortError } from "@reduxjs/toolkit";

console.log("we are inside counterslice.");
let p;
if (localStorage.getItem("tasks"))
  p = JSON.parse(localStorage.getItem("tasks"));
else p = [];

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: p,
  },
  reducers: {
    handleCheck: (state, action) => {
      let newVal = [...state.value];

      for (let i = 0; i < state.value.length; i++) {
        if (newVal[i].taskName === action.payload)
          if (newVal[i].status === false) newVal[i].status = true;
          else newVal[i].status = false;
      }

      state.value = newVal;
      localStorage.setItem("tasks", JSON.stringify(state.value));
    },
    handleDelete: (state, action) => {
      console.log("delete initiated");
      state.value = state.value.filter(
        (item) => item.taskName !== action.payload
      );

      localStorage.setItem("tasks", JSON.stringify(state.value));
    },
    handleAdd: (state, action) => {
      state.value = [
        ...state.value,
        { taskName: action.payload, status: false },
      ];
      localStorage.setItem("tasks", JSON.stringify(state.value));

      console.log(state.value);
    },
    handleEdit: (state, action) => {
      if (action.payload[1] === "") {
        alert("Enter something to edit the value with");
        return;
      }
      let newTask = [...state.value];
      console.log(newTask);
      let i = 0;
      let index;

      for (i = 0; i < newTask.length; i++) {
        if (newTask[i].taskName === action.payload[0]) {
          index = i;
        }
      }
      newTask[index] = { taskName: action.payload[1] };

      state.value = newTask;
      localStorage.setItem("tasks", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleCheck, handleEdit, handleAdd, handleDelete } =
  counterSlice.actions;

export default counterSlice.reducer;
