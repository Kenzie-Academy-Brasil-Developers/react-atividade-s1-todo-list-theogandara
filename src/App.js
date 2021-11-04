import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodo = (remItem) => {
    const newList = todos.filter((element) => {
      return remItem !== element;
    });
    setTodos([...newList]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Form addTodo={addTodo} />

        <TodoList todos={todos} handleTodo={handleTodo} />
      </div>
    </div>
  );
}

export default App;
