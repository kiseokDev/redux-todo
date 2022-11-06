import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "밥먹기", isCompleted: false },
  { id: 2, text: "코딩하기", isCompleted: false },
  { id: 3, text: "쇠질하기", isCompleted: false },
];

export const testTodoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return [
        { id: nextId, text: action.payload, isCompleted: false },
        ...state,
      ];
    },
    editTodo: (state, action) => {
      // const index = todoList.findIndex(eachItem => eachItem === item);
      // return [...state.slice(0, index), newItem, ...state.slice(index + 1)];
      return state.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo;
      });
    },
    toggleTodo: (state, action) => {
      return state.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});
export const { addTodo, toggleTodo, removeTodo, editTodo } =
  testTodoSlice.actions;
export default testTodoSlice.reducer;
