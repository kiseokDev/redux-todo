import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todo/testTodoSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
