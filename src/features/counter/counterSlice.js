import { createSlice, TaskAbortError } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    addTask: (state, action) => {
      // let newVal=[...state.value, action.payload];
      let newVal = [...state.value, 1];
      state.value = newVal;
    },
    handleCheck: (state, action) => {
      let newVal = [...state.value];

      for (let i = 0; i < state.value.length; i++) {
        if (newVal[i].taskName === action.payload)
          if (newVal[i].status === false) newVal[i].status = true;
          else newVal[i].status = false;
      }

      state.value = newVal;
    },
    handleDelete: (state, action) => {
      state.value = state.value.filter(
        (item) => item.taskName !== action.payload
      );
    },
    handleAdd: (state, action) => {
      console.log("handle add called");
      state.value = [
        ...state.value,
        { taskName: action.payload, status: false },
      ];

      console.log(state.value);
    },
    handleEdit: (state, action) => {
      if (action.payload === "") {
        alert("Enter something to edit the value with");
        return;
      }
      let newTask = [...state.value];
      console.log(newTask);
      let i = 0;
      let index;

      for (i = 0; i < newTask.length; i++) {
        if (newTask[i].taskName === action.payload) {
          index = i;
        }
      }
      newTask[index] = { taskName: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addTask,
  handleCheck,
  handleEdit,
  handleAdd,
  handleDelete,
} = counterSlice.actions;

export default counterSlice.reducer;
