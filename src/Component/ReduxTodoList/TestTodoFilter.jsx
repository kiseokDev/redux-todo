import React from "react";

export default function TestTodoFilter() {
  const updateFilter = ({ target: { value } }) => {};
  return (
    <>
      Filter:
      <select value={""} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
