import logo from "./logo.svg";
import "./App.css";
import TestTodoList from "./Component/ReduxTodoList/TestTodoList";
import TestTodoCreator from "./Component/ReduxTodoList/TestTodoCreator";
import TestTodoFilter from "./Component/ReduxTodoList/TestTodoFilter";

function App() {
  return (
    <div className="App">
      <TestTodoFilter />
      <br />
      <TestTodoCreator />
      <br />
      <TestTodoList />
    </div>
  );
}

export default App;
