import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    // removing todos
    removeTodos: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
    // updating todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    // completed todos
    completedTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completedTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
