import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./redux/todoSlice";
import { selectTodos, selectCompletedTodos } from "./redux/selectors";
const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);
  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <h1>Liste des tâches</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleAddTodo}>Ajouter</button>
      <ul>
        {todos.map((task) => (
          <li
            key={task.id}
            onClick={() => dispatch(toggleTodo(task.id))}
          >{task.text}
          </li>
        ))}
      </ul>
      <h2>Tâches terminées</h2>
      <ul>
        {completedTodos.map((finishedTask) => (
          <li key={finishedTask.id}>{finishedTask.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;