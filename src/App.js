import TodoForm from "./components/TodoForm";
import { useState } from 'react';
import Todo from "./components/Todo";
import uniqid from 'uniqid';

function App() {

	const [todos, setTodos] = useState([]);

	const addTask = (value) => {
		setTodos(() => [{ value: value, _id: uniqid() }, ...todos]);
	}

	return (
		<div className="App">
			<TodoForm addTask={addTask} />
			{todos.map((x) => <Todo key={x._id} value={x.value} />)}
		</div>
	);
}

export default App;
