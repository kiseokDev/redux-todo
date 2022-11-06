import React from "react";
import { useSelector } from "react-redux";
import TestTodoItem from "./TestTodoItem";

export default function TestTodoList() {
  const todoList = useSelector(state => state.todos);
  return (
    <>
      {todoList.map(item => (
        <TestTodoItem key={item.id} item={item} />
      ))}
    </>
  );
}
