import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (draft, action) => {
            draft.push({ id: Date.now(), text: action.payload, completed: false });
    },
        toggleTodo: (draft, action) => {
            const todo = draft.find((task) => task.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;